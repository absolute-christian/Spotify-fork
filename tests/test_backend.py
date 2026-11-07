from types import SimpleNamespace
import uuid

from fastapi.testclient import TestClient
import pytest
from yandex_music import Client, StationTracksResult

from backend.app import create_app
from backend.service import WaveError, WaveService


class FakeYandex:
    def __init__(self):
        self.feedback_calls = []
        self.track_calls = []
        self.likes = []
        self.fail = False
        self.me = SimpleNamespace(account=SimpleNamespace(uid=123))

    def rotor_station_tracks(self, station, **kwargs):
        self.track_calls.append(kwargs)
        # Decode actual installed yandex-music model classes, not a made-up response shape
        return StationTracksResult.de_json({'batchId': 'batch-real-shape', 'stationId': {'type': 'user', 'tag': 'onyourwave'},
            'sequence': [{'type': 'track', 'track': {'id': n, 'title': f'Track {n}', 'artists': [{'id': 1, 'name': 'Artist'}],
            'durationMs': 180000, 'coverUri': 'example.test/%%'}} for n in range(1, 4)]}, Client())

    def rotor_station_feedback(self, station, kind, **kwargs):
        if self.fail:
            raise ConnectionError('offline')
        self.feedback_calls.append((kind, kwargs))
        return True

    def users_likes_tracks_add(self, track_id, **kwargs):
        self.likes.append(('like', track_id)); return True

    def users_likes_tracks_remove(self, track_id, **kwargs):
        self.likes.append(('unlike', track_id)); return True

    def users_dislikes_tracks_add(self, track_id, **kwargs):
        self.likes.append(('dislike', track_id)); return True


@pytest.fixture
def service(tmp_path):
    svc = WaveService(tmp_path / 'wave.db', FakeYandex())
    yield svc
    svc.close()


def issue(svc):
    return svc.next_track(str(uuid.uuid4()))


def event(svc, track, kind, event_id=None, seconds=0):
    return svc.feedback(track['play_id'], track['yandex_track_id'], kind, event_id or str(uuid.uuid4()), seconds)


def test_batch_buffer_and_candidate_request_id(service):
    request_id = str(uuid.uuid4())
    a = service.next_track(request_id)
    assert service.next_track(request_id) == a
    b = issue(service)
    assert a['yandex_track_id'] == '1' and b['yandex_track_id'] == '2'
    assert a['batch_id'] == b['batch_id'] == 'batch-real-shape'
    assert b['cover_url'] == 'https://example.test/600x600'
    assert len(service.client.track_calls) == 1
    assert service.client.feedback_calls == []


def test_exact_track_batch_feedback_and_idempotency(service):
    track = issue(service)
    event_id = str(uuid.uuid4())
    event(service, track, 'trackStarted', event_id)
    event(service, track, 'trackStarted', event_id)
    event(service, track, 'trackStarted')
    event(service, track, 'trackFinished', seconds=30.25)
    while service.flush_one():
        pass
    calls = service.client.feedback_calls
    assert [x[0] for x in calls] == ['radioStarted', 'trackStarted', 'trackFinished']
    assert calls[-1][1]['batch_id'] == track['batch_id']
    assert calls[-1][1]['track_id'] == track['yandex_track_id']
    assert calls[-1][1]['total_played_seconds'] == 30.25
    assert isinstance(calls[-1][1]['timestamp'], int)
    assert service.status()['pending_feedback'] == 0


def test_feedback_request_matches_installed_sdk_contract_and_preserves_event_time(service):
    # Exercise the real installed SDK serializer without opening a connection.
    client = Client()
    requests = []
    def post(url, **kwargs):
        requests.append((url, kwargs))
        return 'ok'
    client._request = SimpleNamespace(post=post)
    service.client.rotor_station_feedback = client.rotor_station_feedback
    track = issue(service)
    event(service, track, 'trackStarted')
    original = 1_700_000_000.125
    service.db.execute('UPDATE events SET timestamp=?', (original,)); service.db.commit()
    service.flush_one()
    assert len(requests) == 2
    url, actual = requests[-1]
    assert url.endswith('/rotor/station/user:onyourwave/feedback')
    assert actual['params'] == {'batch-id': track['batch_id']}
    assert actual['json'] == {'type': 'trackStarted', 'timestamp': 1_700_000_000_125, 'trackId': track['yandex_track_id']}
    assert service.status()['pending_feedback'] == 0


@pytest.mark.parametrize('kind', ['skip', 'trackFinished'])
def test_zero_listen_feedback_retains_required_zero_with_sdk_transport(service, kind):
    client = Client()
    requests = []
    def post(url, **kwargs):
        requests.append((url, kwargs)); return 'ok'
    client._request = SimpleNamespace(post=post)
    # Keep the fake track source, but serialize feedback with the actual SDK
    # method and transport, exactly as the production Client does.
    service.client.rotor_station_feedback = client.rotor_station_feedback
    service.client.request = client.request
    service.client.base_url = client.base_url
    track = issue(service)
    event(service, track, 'trackStarted')
    event(service, track, kind, seconds=0)
    original = 1_700_000_000.125
    service.db.execute('UPDATE events SET timestamp=?', (original,)); service.db.commit()
    while service.flush_one():
        pass
    assert len(requests) == 3
    url, actual = requests[-1]
    assert url.endswith('/rotor/station/user:onyourwave/feedback')
    assert actual['params'] == {'batch-id': track['batch_id']}
    assert actual['json'] == {'type': kind, 'timestamp': 1_700_000_000_125,
                              'trackId': track['yandex_track_id'], 'totalPlayedSeconds': 0}
    assert actual['timeout'] == 15
    assert service.status()['pending_feedback'] == 0


def test_feedback_diagnostics_are_fixed_categories_and_never_provider_text(service):
    from yandex_music.exceptions import BadRequestError
    track = issue(service)
    event(service, track, 'trackStarted')
    def fail(*args, **kwargs):
        raise BadRequestError('SECRET_TOKEN_URL timestamp rejected for a private account')
    service.client.rotor_station_feedback = fail
    service.flush_one()
    result = service.status()
    assert result['pending_feedback'] == 1
    assert (result['feedback_error_code'], result['feedback_error_stage'], result['feedback_error_reason']) == ('bad_request', 'radioStarted', 'timestamp')
    assert 'SECRET' not in str(result)
    stored = service.db.execute('SELECT error,error_code FROM events').fetchone()
    assert 'SECRET' not in str(tuple(stored))


def test_feedback_diagnostic_migration_preserves_existing_outbox(tmp_path):
    import sqlite3
    path = tmp_path/'old.db'
    with sqlite3.connect(path) as db:
        db.execute('CREATE TABLE events(event_id TEXT PRIMARY KEY,play_id TEXT,kind TEXT,seconds REAL,timestamp REAL,status TEXT DEFAULT "pending",attempts INTEGER DEFAULT 0,retry_at REAL DEFAULT 0,error TEXT)')
        db.execute('INSERT INTO events(event_id,kind,timestamp) VALUES ("fixture","trackStarted",123)')
    restored = WaveService(path, FakeYandex())
    try:
        row = restored.db.execute('SELECT * FROM events').fetchone()
        assert row['event_id'] == 'fixture' and row['timestamp'] == 123 and row['error_code'] is None
    finally:
        restored.close()


def test_skip_cannot_invent_a_listen(service):
    track = issue(service)
    with pytest.raises(WaveError, match='Сначала'):
        event(service, track, 'skip')
    assert service.client.feedback_calls == []


def test_outbox_survives_restart_preserves_order(tmp_path):
    path = tmp_path / 'wave.db'
    first = WaveService(path, FakeYandex())
    track = issue(first)
    event(first, track, 'trackStarted')
    event(first, track, 'skip', seconds=4)
    first.client.fail = True
    first.flush_one()
    assert first.status()['pending_feedback'] == 2
    assert first.status()['feedback_error']
    first.close()
    second = WaveService(path, FakeYandex())
    second.db.execute('UPDATE events SET retry_at=0'); second.db.commit()
    while second.flush_one():
        pass
    assert [x[0] for x in second.client.feedback_calls] == ['radioStarted', 'trackStarted', 'skip']
    assert second.status()['pending_feedback'] == 0
    second.close()


def test_likes_unlikes_dislikes_and_pause_are_not_rotor_types(service):
    track = issue(service)
    for kind in ['trackStarted', 'like', 'unlike', 'dislike', 'pause', 'resume']:
        event(service, track, kind)
    while service.flush_one():
        pass
    assert [x[0] for x in service.client.feedback_calls] == ['radioStarted', 'trackStarted']
    assert service.client.likes == [('like', '1'), ('unlike', '1'), ('dislike', '1')]


def test_wrong_track_and_reused_event_id_rejected(service):
    a, b = issue(service), issue(service)
    event_id = str(uuid.uuid4())
    event(service, a, 'trackStarted', event_id)
    with pytest.raises(WaveError):
        event(service, b, 'trackStarted', event_id)
    with pytest.raises(WaveError):
        service.feedback(a['play_id'], '99999', 'trackStarted', str(uuid.uuid4()), 0)


def test_http_authorization_cors_validation_and_token_redaction(service):
    app = create_app(service, 'local-test-key', start_worker=False)
    headers = {'Authorization': 'Bearer local-test-key', 'Origin': 'https://xpui.app.spotify.com'}
    with TestClient(app) as api:
        assert api.get('/health').json()['ok']
        assert api.get('/status').status_code == 401
        assert api.get('/status', headers=headers).json()['connected']
        assert api.get('/status', headers={**headers, 'Origin': 'https://evil.example'}).status_code == 403
        assert api.get('/health', headers={'Host': 'evil.example'}).status_code == 400
        cors = api.options('/get_next_track', headers={'Origin': headers['Origin'],
            'Access-Control-Request-Method': 'GET', 'Access-Control-Request-Headers': 'authorization'})
        assert cors.headers['access-control-allow-origin'] == headers['Origin']
        assert api.get('/get_next_track', headers=headers).status_code == 422
        track = api.get('/get_next_track', params={'request_id': str(uuid.uuid4())}, headers=headers).json()
        response = api.post('/send_feedback', headers=headers, json={
            'track_id': track['yandex_track_id'], 'play_id': track['play_id'], 'event_id': str(uuid.uuid4()),
            'event_type': 'trackStarted', 'total_played_seconds': 0})
        assert response.status_code == 200
        assert response.json()['status'] == 'pending'
        invalid = api.post('/auth', headers=headers, json={'token': 'SECRET'})
        assert invalid.status_code == 422
        assert 'SECRET' not in invalid.text


def test_account_guard_runs_before_credential_write(service, monkeypatch):
    import backend.config
    saved = []
    monkeypatch.setattr(backend.config, 'save_token', saved.append)
    candidate = FakeYandex()
    candidate.me.account.uid = 999
    candidate.init = lambda **kwargs: candidate
    monkeypatch.setattr('yandex_music.Client', lambda token: candidate)
    with pytest.raises(WaveError, match='смены аккаунта'):
        service.connect('test-only')
    assert saved == []
