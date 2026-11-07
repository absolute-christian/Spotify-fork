import threading

from backend import desktop
from backend.desktop_state import DesktopState


def test_design_revision_omits_only_unchanged_settings_and_changes_after_restart(tmp_path):
    state = DesktopState(tmp_path/'design.json')
    state.set_settings({'playerSettings': {'overlay': {'mode': 'card'}}})
    full = state.state()
    revision = full['settingsRevision']
    delta = state.state(revision)
    assert 'settings' not in delta and delta['snapshot'] == full['snapshot']
    state.set_settings(full['settings'])
    assert state.state()['settingsRevision'] == revision
    state.set_settings({'playerSettings': {'overlay': {'mode': 'island'}}})
    changed = state.state(revision)
    assert changed['settings']['playerSettings']['overlay']['mode'] == 'island'
    assert changed['settingsRevision'] != revision
    restored = DesktopState(state.path).state(changed['settingsRevision'])
    assert restored['settings'] == changed['settings']


def test_native_monitor_reuses_renderer_read_but_refreshes_while_renderer_suspended(monkeypatch):
    clock, calls = [100.], []
    data = {'settings': {'playerSettings': {'overlay': {'mode': 'card', 'opacity': .5}}},
            'settingsRevision': 'first', 'snapshot': {'playing': True}, 'online': True, 'visible': True}
    def request(path):
        calls.append(path)
        if len(calls) == 1:
            return data
        return {'settingsRevision': 'first', 'snapshot': {'playing': False}, 'online': False, 'visible': False}
    monkeypatch.setattr(desktop, 'request', request)
    monkeypatch.setattr(desktop.time, 'monotonic', lambda: clock[0])
    api = desktop.OverlayApi()
    full = api.snapshot()
    assert full['settings']['playerSettings']['overlay']['opacity'] == 1
    assert api.state()['settings']['playerSettings']['overlay']['opacity'] == .5
    assert len(calls) == 1
    clock[0] += .6
    assert not api.state()['online']
    assert len(calls) == 2 and calls[-1].endswith('settings_revision=first')
    delta = api.snapshot(full['settingsRevision'])
    assert len(calls) == 3 and 'settings' not in delta and delta['snapshot']['playing'] is False
    assert api.state()['settings'] == data['settings']


def test_native_cache_does_not_let_previous_settings_hide_new_revision(monkeypatch):
    calls = []
    def request(path):
        calls.append(path)
        return {'settingsRevision': str(len(calls)), 'settings': {
            'playerSettings': {'overlay': {'mode': 'card', 'w': len(calls)}}}, 'online': True}
    monkeypatch.setattr(desktop, 'request', request)
    api = desktop.OverlayApi()
    first = api.snapshot()
    second = api.snapshot(first['settingsRevision'])
    assert second['settings']['playerSettings']['overlay']['w'] == 2
    assert second['settingsRevision'] != first['settingsRevision']


def test_native_read_single_flight_between_monitor_threads(monkeypatch):
    entered, release, calls = threading.Event(), threading.Event(), []
    def request(path):
        calls.append(path); entered.set(); assert release.wait(1)
        return {'settingsRevision': 'same', 'settings': {}, 'online': True}
    monkeypatch.setattr(desktop, 'request', request)
    api = desktop.OverlayApi()
    results = []
    a = threading.Thread(target=lambda: results.append(api.state()))
    b = threading.Thread(target=lambda: results.append(api.state()))
    a.start(); assert entered.wait(1); b.start(); release.set(); a.join(1); b.join(1)
    assert len(calls) == 1 and len(results) == 2 and results[0] == results[1]


def test_wave_diagnostic_actions_keep_validation_and_report_state(tmp_path):
    state = DesktopState(tmp_path/'design.json')
    state.sync({'waveStage': 'matching', 'waveError': 'safe provider message'}, [])
    assert state.state()['snapshot'] == {'waveStage': 'matching', 'waveError': 'safe provider message'}
    # These lifecycle actions never accept arbitrary parameters or credentials.
    import pytest
    for method in ['startWave', 'stopWave']:
        with pytest.raises(ValueError):
            state.command(method, ['not allowed'])


def test_http_snapshot_delta_keeps_legacy_full_response_and_fresh_settings(monkeypatch, tmp_path):
    from fastapi.testclient import TestClient
    from backend import app as module
    from backend.service import WaveService
    monkeypatch.setattr(module, 'DATA', tmp_path)
    service = WaveService(tmp_path/'service.sqlite3')
    headers = {'Authorization': 'Bearer fixture-only'}
    with TestClient(module.create_app(service=service, api_key='fixture-only', start_worker=False)) as client:
        design = {'playerSettings': {'overlay': {'mode': 'card'}}}
        assert client.post('/desktop/settings', json=design, headers=headers).status_code == 200
        full = client.get('/desktop/state', headers=headers).json()
        assert full['settings'] == design
        params = {'settings_revision': full['settingsRevision']}
        delta = client.get('/desktop/state', params=params, headers=headers).json()
        assert 'settings' not in delta
        design['playerSettings']['overlay']['mode'] = 'island'
        client.post('/desktop/settings', json=design, headers=headers)
        changed = client.get('/desktop/state', params=params, headers=headers).json()
        assert changed['settings'] == design
