"""Local-only desktop state and short-lived, acknowledged media commands."""
import json
from pathlib import Path
import threading
import time
import uuid

BLOCKED = {'token', 'access_token', 'accesstoken', 'refresh_token', 'password', 'api_key', 'apikey', '__proto__', 'constructor', 'prototype'}
ALLOWED = {'toggle', 'next', 'back', 'seek', 'volume', 'repeat', 'shuffle', 'like', 'lyrics', 'startWave', 'stopWave'}


def design_only(value, depth=0):
    if depth > 12:
        return None
    if isinstance(value, dict):
        return {key: design_only(item, depth+1) for key, item in value.items() if key.lower() not in BLOCKED}
    if isinstance(value, list):
        return [design_only(item, depth+1) for item in value[:100]]
    return value if isinstance(value, (str, bool, int, float, type(None))) else None


class DesktopState:
    def __init__(self, path: Path, now=time.monotonic):
        self.path, self.now = path, now
        self.lock = threading.RLock()
        self.changed = threading.Condition(self.lock)
        self.snapshot, self.updated, self.commands, self.results = {}, 0, {}, {}
        self.client_boot, self.client_updated, self.client_layout = {}, 0, {}
        self.settings, self.visible = {}, True
        self.settings_revision = uuid.uuid4().hex
        try:
            self.settings = design_only(json.loads(path.read_text(encoding='utf-8')))
        except (OSError, ValueError):
            pass

    def set_settings(self, settings):
        clean = design_only({key: settings[key] for key in ['themeSettings', 'uiSettings', 'playerSettings'] if key in settings})
        if len(json.dumps(clean)) > 200_000:
            raise ValueError('Настройки слишком большие')
        with self.lock:
            old_mode = self.settings.get('playerSettings', {}).get('overlay', {}).get('mode')
            if clean != self.settings:
                self.settings = clean
                self.settings_revision = uuid.uuid4().hex
                self.path.parent.mkdir(exist_ok=True)
                temp = self.path.with_suffix('.tmp')
                temp.write_text(json.dumps(clean, ensure_ascii=False), encoding='utf-8')
                temp.replace(self.path)
                if old_mode != clean.get('playerSettings', {}).get('overlay', {}).get('mode'):
                    self.visible = True

    def report_client(self, body):
        phases = {'waiting', 'initializing', 'ready', 'failed'}
        if body.get('phase') not in phases:
            return
        flags = {'spicetify', 'player', 'playUri', 'playerAPI', 'playerState', 'playerOrigin', 'platformState', 'cosmos', 'history', 'historyListen', 'historyReplace', 'documentHead'}
        with self.lock:
            self.client_boot = {'phase': body['phase'], 'capabilities': {key: bool(body.get('capabilities', {}).get(key)) for key in flags},
                                'stage': str(body.get('stage', ''))[:40], 'build': str(body.get('build', ''))[:40]}
            self.client_updated = self.now()

    def client_state(self):
        with self.lock:
            return {**self.client_boot, 'layout':self.client_layout, 'recent': bool(self.client_updated and self.now() - self.client_updated < 30),
                    'desktop_sync_age_ms': round((self.now()-self.updated)*1000) if self.updated else None}

    def report_layout(self, body):
        with self.lock:
            self.client_layout = {key: min(100000,max(0,value)) for key,value in body.items()
                                  if key in {'width','height','viewportWidth','viewportHeight','hiddenPanels'} and isinstance(value,(int,float))}
            self.client_layout['active'] = bool(body.get('active'))

    def sync(self, state, acknowledgements, wait=0):
        with self.lock:
            keys = ['active', 'current', 'nativeUri', 'nativeTrack', 'playing', 'loading', 'progress', 'duration', 'volume', 'repeat', 'shuffle', 'shuffleType', 'liked', 'contextName', 'waveStage', 'waveError']
            self.snapshot = design_only({key: state[key] for key in keys if key in state})
            self.updated = self.now()
            for ack in acknowledgements:
                if ack.get('id') in self.commands:
                    self.commands.pop(ack['id'])
                    self.results[ack['id']] = (self.now(), {'value': ack.get('value'), 'error': ack.get('error')})
            self.commands = {key: command for key, command in self.commands.items() if self.now() - command['created'] < 8}
            self.results = {key: item for key, item in self.results.items() if self.now() - item[0] < 10}
            self.changed.notify_all()
            if wait and not self.commands:
                self.changed.wait_for(lambda: bool(self.commands), timeout=min(3, max(0, wait)))
            return list(self.commands.values())

    def state(self, settings_revision=None):
        with self.lock:
            state = {'snapshot': self.snapshot, 'visible': self.visible, 'settingsRevision': self.settings_revision,
                     'online': bool(self.updated and self.now() - self.updated < 8)}
            if settings_revision != self.settings_revision:
                state['settings'] = self.settings
            return state

    def toggle(self):
        with self.lock:
            self.visible = not self.visible
            return self.visible

    def command(self, method, args):
        if method not in ALLOWED or not isinstance(args, list) or len(args) > 2:
            raise ValueError('Недоступная команда оверлея')
        if method in {'seek', 'volume'} and (len(args) != 1 or not isinstance(args[0], (int, float)) or not 0 <= args[0] <= (1 if method == 'volume' else 86_400_000)):
            raise ValueError('Некорректная позиция или громкость')
        if method not in {'seek', 'volume', 'like', 'lyrics'} and args:
            raise ValueError('Некорректные аргументы команды')
        with self.lock:
            if not self.state()['online']:
                raise ValueError('Spotify не запущен или расширение ещё не подключено')
            if len(self.commands) >= 20:
                raise ValueError('Слишком много команд оверлея')
            identifier = str(uuid.uuid4())
            self.commands[identifier] = {'id': identifier, 'method': method, 'args': args, 'created': self.now()}
            self.changed.notify_all()
            if self.changed.wait_for(lambda: identifier in self.results, timeout=8):
                return self.results.pop(identifier)[1]
            self.commands.pop(identifier, None)
        return {'error': 'Spotify не подтвердил команду оверлея'}
