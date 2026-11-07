"""Local pairing configuration. OAuth credentials never enter this file."""
import json
import os
from pathlib import Path
import secrets
import time

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / '.local'


def pairing_key() -> str:
    DATA.mkdir(exist_ok=True)
    path = DATA / 'bridge.json'
    if not path.exists():
        # Exclusive creation prevents simultaneous setup processes replacing the key
        try:
            with path.open('x', encoding='utf-8') as f:
                json.dump({'api_key': secrets.token_urlsafe(32)}, f)
        except FileExistsError:
            pass
    # Another process may observe the file between exclusive creation and the
    # final write. Never replace an existing key: installed clients rely on it.
    deadline = time.monotonic() + 3
    while True:
        try:
            key = json.loads(path.read_text(encoding='utf-8'))['api_key']
            if not isinstance(key, str) or not key:
                raise ValueError('Invalid pairing key')
            return key
        except (json.JSONDecodeError, KeyError, ValueError):
            if time.monotonic() >= deadline:
                raise RuntimeError('Local pairing configuration is invalid or incomplete') from None
            time.sleep(.05)


def load_token() -> str | None:
    if os.environ.get('YANDEX_MUSIC_TOKEN'):
        return os.environ['YANDEX_MUSIC_TOKEN'].strip()
    if os.name == 'nt':
        from keyring.backends.Windows import WinVaultKeyring
        return WinVaultKeyring().get_password('wave-spicetify', 'yandex-oauth')
    import keyring
    return keyring.get_password('wave-spicetify', 'yandex-oauth')


def save_token(token: str) -> None:
    # Explicitly use Windows Credential Manager on Windows, never plaintext fallback
    if os.name == 'nt':
        from keyring.backends.Windows import WinVaultKeyring
        WinVaultKeyring().set_password('wave-spicetify', 'yandex-oauth', token)
    else:
        import keyring
        if keyring.get_keyring().priority < 1:
            raise RuntimeError('No secure credential storage available')
        keyring.set_password('wave-spicetify', 'yandex-oauth', token)
