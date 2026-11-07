import json
from types import SimpleNamespace

from backend.spotify_installation import InstallationGuard


def installation(tmp_path):
    (tmp_path / '.local').mkdir()
    prefs = tmp_path / 'prefs'
    prefs.write_text('app.last-launched-version="1.3.6"')
    executable = tmp_path / 'Spotify.exe'
    assets = tmp_path / 'Apps/xpui'
    for name in ('helper/spicetifyWrapper.js', 'spicetify-routes-my-wave.js', 'extensions/my-wave/wave-extension.js'):
        file = assets / name
        file.parent.mkdir(parents=True, exist_ok=True)
        file.touch()
    state = tmp_path / '.local/install-state.json'
    state.write_text(json.dumps({'version':'1.3.5', 'prefs':str(prefs), 'executable':str(executable)}))
    return prefs, state


def test_spotify_update_repairs_once_only_when_client_is_running(tmp_path):
    prefs, state = installation(tmp_path)
    clock, active, calls, result = [0], [False], [], [None]
    def launch():
        calls.append(True)
        return SimpleNamespace(poll=lambda: result[0])
    guard = InstallationGuard(tmp_path, running=lambda path: active[0], launch=launch, now=lambda:clock[0])
    assert guard.tick() == 'ready' and not calls
    clock[0], active[0] = 31, True
    assert guard.tick() == 'repairing' and len(calls) == 1
    clock[0] = 100
    guard.tick()
    assert len(calls) == 1
    installed = json.loads(state.read_text()); installed['version'] = '1.3.6'
    state.write_text(json.dumps(installed))
    result[0] = 0
    guard.tick()
    clock[0] = 200
    assert guard.tick() == 'ready' and len(calls) == 1


def test_failed_automatic_patch_does_not_restart_spotify_in_a_loop(tmp_path):
    installation(tmp_path)
    clock, calls = [0], []
    def launch():
        calls.append(True)
        return SimpleNamespace(poll=lambda:1)
    guard = InstallationGuard(tmp_path, running=lambda path: True, launch=launch, now=lambda:clock[0])
    assert guard.tick() == 'repairing'
    clock[0] = 1
    assert guard.tick() == 'failed'
    clock[0] = 1800
    assert guard.tick() == 'failed' and len(calls) == 1
