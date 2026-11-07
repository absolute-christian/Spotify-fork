"""Serialized rotor session and a durable, ordered feedback outbox."""
from collections import deque
import json
from pathlib import Path
import sqlite3
import threading
import time
import uuid

STATION = 'user:onyourwave'
EVENTS = {'trackStarted', 'trackFinished', 'skip', 'like', 'unlike', 'dislike', 'undislike', 'pause', 'resume'}


def feedback_diagnostic(error, stage):
    """Persist only fixed categories, never provider response text or URLs."""
    from yandex_music.exceptions import UnauthorizedError, BadRequestError, NotFoundError, TimedOutError, NetworkError
    category = next((code for cls, code in [
        (UnauthorizedError, 'authorization'), (BadRequestError, 'bad_request'),
        (NotFoundError, 'not_found'), (TimedOutError, 'timeout'),
        (NetworkError, 'network'), (ConnectionError, 'network'), (TimeoutError, 'timeout'),
        (WaveError, 'rejected')] if isinstance(error, cls)), 'unexpected')
    reason = 'unspecified'
    if category in {'bad_request', 'rejected'}:
        message = str(error)[:2048].lower()
        # Each result is an enum. No part of the provider's message is returned.
        for marker, value in [('timestamp', 'timestamp'), ('batch', 'batch'),
                              ('trackid', 'track'), ('track_id', 'track'),
                              ('totalplayedseconds', 'played_seconds'), ('subscription', 'subscription'),
                              ('source', 'source'), ('from', 'source')]:
            if marker in message:
                reason = value
                break
    return ':'.join((category, stage if stage in EVENTS | {'radioStarted'} else 'unknown', reason))


def rotor_feedback(client, kind, track_id, batch_id, seconds, timestamp):
    # The installed SDK omits totalPlayedSeconds when it equals zero. Rotor
    # still requires that field for skip/trackFinished. Use its own authenticated
    # transport for this exact case, preserving the real duration rather than
    # inventing a positive listen. Clients without that transport keep the SDK API.
    request = getattr(client, 'request', None)
    if kind in {'skip', 'trackFinished'} and seconds == 0 and callable(getattr(request, 'post', None)):
        params = {'batch-id': batch_id} if batch_id else {}
        result = request.post(f'{client.base_url}/rotor/station/{STATION}/feedback', params=params,
                              json={'type': kind, 'timestamp': timestamp, 'trackId': track_id,
                                    'totalPlayedSeconds': seconds}, timeout=15)
        return result == 'ok'
    return client.rotor_station_feedback(STATION, kind, track_id=track_id, batch_id=batch_id,
                                         total_played_seconds=seconds, timestamp=timestamp, timeout=15)


class WaveError(Exception):
    def __init__(self, message: str, status: int = 502):
        super().__init__(message)
        self.status = status


class WaveService:
    def __init__(self, database: Path, client=None):
        self.db = sqlite3.connect(database, check_same_thread=False)
        self.db.row_factory = sqlite3.Row
        self.db.executescript('''
            PRAGMA journal_mode=WAL;
            CREATE TABLE IF NOT EXISTS plays (
                play_id TEXT PRIMARY KEY, request_id TEXT UNIQUE, track_id TEXT,
                batch_id TEXT, payload TEXT, created REAL);
            CREATE TABLE IF NOT EXISTS events (
                event_id TEXT PRIMARY KEY, play_id TEXT, kind TEXT, seconds REAL,
                timestamp REAL, status TEXT DEFAULT 'pending', attempts INTEGER DEFAULT 0,
                retry_at REAL DEFAULT 0, error TEXT, error_code TEXT);
            CREATE TABLE IF NOT EXISTS metadata (key TEXT PRIMARY KEY, value TEXT);
        ''')
        # Preserve existing outboxes; only add a safe diagnostic category.
        if 'error_code' not in {row[1] for row in self.db.execute('PRAGMA table_info(events)')}:
            self.db.execute('ALTER TABLE events ADD COLUMN error_code TEXT')
            self.db.commit()
        self.client = client
        self.account_state = {'saved_token': False, 'restoring': False, 'auth_error': None}
        self.lock = threading.RLock()
        self.buffer = deque()
        self.recent = deque(maxlen=100)
        self.previous = None
        self.radio_started = False
        self.stop_event = threading.Event()
        self.worker = None

    def require_client(self):
        if self.client is None:
            raise WaveError('Подключите Яндекс Музыку в настройках', 401)
        return self.client

    def connect(self, token: str, persist=True):
        from yandex_music import Client
        from yandex_music.exceptions import UnauthorizedError
        from .config import save_token
        try:
            candidate = Client(token).init(timeout=15)
        except UnauthorizedError:
            raise WaveError('Яндекс отклонил токен', 401) from None
        except Exception:
            raise WaveError('Яндекс временно недоступен, сохранённый токен не удалён', 502) from None
        with self.lock:
            if self.stop_event.is_set():
                return
            uid = str(candidate.me.account.uid)
            account = self.db.execute("SELECT value FROM metadata WHERE key='account_uid'").fetchone()
            if account and account['value'] != uid:
                raise WaveError('Для смены аккаунта остановите мост и очистите локальную очередь отзывов', 409)
            if self.client is not None and str(self.client.me.account.uid) != uid:
                raise WaveError('Для смены аккаунта остановите мост и очистите локальную очередь отзывов', 409)
            if persist:
                try:
                    save_token(token)
                except Exception:
                    raise WaveError('Не удалось сохранить токен в хранилище системы', 500) from None
            self.db.execute("INSERT OR REPLACE INTO metadata VALUES ('account_uid', ?)", (uid,))
            self.db.commit()
            self.client = candidate
            self.account_state = {'saved_token': True, 'restoring': False, 'auth_error': None}
            self.buffer.clear()
            self.recent.clear()
            self.previous = None
            self.radio_started = False

    def next_track(self, request_id: str):
        with self.lock:
            client = self.require_client()
            row = self.db.execute('SELECT payload FROM plays WHERE request_id=?', (request_id,)).fetchone()
            if row:
                return json.loads(row['payload'])
            for _ in range(4):
                if not self.buffer:
                    try:
                        result = client.rotor_station_tracks(STATION, queue=self.previous, timeout=15)
                    except Exception:
                        raise WaveError('Не удалось получить подборку Яндекса') from None
                    if not result or not result.sequence:
                        raise WaveError('Яндекс вернул пустую подборку')
                    for item in result.sequence:
                        if item.track and str(item.track.id) not in self.recent:
                            self.buffer.append((item.track, result.batch_id))
                while self.buffer:
                    track, batch = self.buffer.popleft()
                    track_id = str(track.id)
                    if track_id in self.recent:
                        continue
                    self.recent.append(track_id)
                    self.previous = track_id
                    artists = [a.name for a in track.artists or []]
                    cover = getattr(track, 'cover_uri', None)
                    payload = {
                        'title': track.title, 'artist': ', '.join(artists), 'artists': artists,
                        'yandex_track_id': track_id, 'play_id': str(uuid.uuid4()),
                        'batch_id': batch, 'duration_ms': getattr(track, 'duration_ms', None),
                        'cover_url': 'https://' + cover.replace('%%', '600x600') if cover else None,
                    }
                    self.db.execute('INSERT INTO plays VALUES (?,?,?,?,?,?)', (
                        payload['play_id'], request_id, track_id, batch, json.dumps(payload), time.time()))
                    self.db.commit()
                    return payload
            raise WaveError('Подборка повторяется, попробуйте немного позже', 503)

    def feedback(self, play_id, track_id, event_type, event_id, seconds):
        with self.lock:
            self.require_client()
            row = self.db.execute('SELECT * FROM plays WHERE play_id=?', (play_id,)).fetchone()
            if not row or row['track_id'] != track_id:
                raise WaveError('Трек не принадлежит этой сессии', 409)
            existing = self.db.execute('SELECT * FROM events WHERE event_id=?', (event_id,)).fetchone()
            if existing:
                if existing['play_id'] != play_id or existing['kind'] != event_type:
                    raise WaveError('Идентификатор события уже использован', 409)
                return {'accepted': True, 'status': existing['status']}
            if event_type in {'trackStarted', 'trackFinished', 'skip'}:
                duplicate = self.db.execute('SELECT status FROM events WHERE play_id=? AND kind=?',
                                            (play_id, event_type)).fetchone()
                if duplicate:
                    return {'accepted': True, 'status': duplicate['status']}
            if event_type != 'trackStarted' and not self.db.execute(
                "SELECT 1 FROM events WHERE play_id=? AND kind='trackStarted'", (play_id,)).fetchone():
                raise WaveError('Сначала подтвердите начало воспроизведения', 409)
            self.db.execute('INSERT INTO events(event_id,play_id,kind,seconds,timestamp) VALUES (?,?,?,?,?)',
                            (event_id, play_id, event_type, seconds, time.time()))
            self.db.commit()
            return {'accepted': True, 'status': 'pending'}

    def flush_one(self):
        with self.lock:
            if not self.client:
                return False
            row = self.db.execute('''SELECT e.*,p.track_id,p.batch_id FROM events e
                JOIN plays p ON p.play_id=e.play_id WHERE e.status='pending' ORDER BY e.rowid LIMIT 1''').fetchone()
            if not row or row['retry_at'] > time.time():
                return False
            try:
                kind = row['kind']
                stage = kind
                if kind in {'like', 'unlike', 'dislike', 'undislike'}:
                    method = {'like': 'users_likes_tracks_add', 'unlike': 'users_likes_tracks_remove',
                              'dislike': 'users_dislikes_tracks_add', 'undislike': 'users_dislikes_tracks_remove'}[kind]
                    ok = getattr(self.client, method)(row['track_id'], timeout=15)
                elif kind in {'pause', 'resume'}:
                    # Rotor has no pause/resume event. Store locally without inventing API signals
                    ok = True
                else:
                    if not self.radio_started:
                        stage = 'radioStarted'
                        ok = self.client.rotor_station_feedback(STATION, 'radioStarted',
                            from_='wave-spicetify', batch_id=row['batch_id'], timeout=15)
                        if not ok:
                            raise WaveError('radioStarted rejected')
                        self.radio_started = True
                    stage = kind
                    ok = rotor_feedback(self.client, kind, row['track_id'], row['batch_id'],
                                        row['seconds'], int(row['timestamp'] * 1000))
                if not ok:
                    raise WaveError('Feedback rejected')
                self.db.execute("UPDATE events SET status='sent',error=NULL,error_code=NULL WHERE event_id=?", (row['event_id'],))
            except Exception as error:
                self.db.execute('UPDATE events SET attempts=attempts+1,retry_at=?,error=?,error_code=? WHERE event_id=?',
                    (time.time() + min(60, 2 ** min(row['attempts'] + 1, 6)),
                     'Яндекс недоступен или отклонил событие', feedback_diagnostic(error, stage), row['event_id']))
            self.db.commit()
            return True

    def status(self):
        with self.lock:
            pending = self.db.execute("SELECT COUNT(*) FROM events WHERE status='pending'").fetchone()[0]
            error = self.db.execute("SELECT error,error_code FROM events WHERE status='pending' AND error IS NOT NULL ORDER BY rowid LIMIT 1").fetchone()
            diagnostic = (error['error_code'] or 'unknown:unknown:unspecified').split(':') if error else []
            return {**self.account_state, 'connected': self.client is not None, 'pending_feedback': pending,
                    'feedback_error': error['error'] if error else None,
                    'feedback_error_code': diagnostic[0] if diagnostic else None,
                    'feedback_error_stage': diagnostic[1] if diagnostic else None,
                    'feedback_error_reason': diagnostic[2] if diagnostic else None}

    def start(self):
        def run():
            while not self.stop_event.wait(0.5):
                self.flush_one()
        self.worker = threading.Thread(target=run, daemon=True, name='wave-feedback')
        self.worker.start()

    def close(self):
        self.stop_event.set()
        if self.worker:
            self.worker.join(timeout=35)
        with self.lock:
            self.db.close()
