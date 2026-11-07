import os
import threading
from types import SimpleNamespace

import pytest

from backend.account_restore import restore_account
from backend.service import WaveError


def test_saved_account_retries_network_startup_without_reentering_token():
    calls, waits = [], []
    svc = SimpleNamespace(stop_event=threading.Event(), client=None, account_state={})
    def connect(token, persist):
        calls.append((token, persist))
        if len(calls) == 1:
            raise WaveError('network unavailable', 502)
        svc.client = object()
        svc.account_state = {'saved_token': True, 'restoring': False, 'auth_error': None}
    svc.connect = connect
    restore_account(svc, lambda: 'fixture-saved-token', wait=lambda delay: waits.append(delay) or False)
    assert calls == [('fixture-saved-token', False)] * 2
    assert waits == [2]
    assert svc.client is not None and svc.account_state['saved_token']


def test_revoked_token_is_retained_without_busy_retry_or_credential_write():
    calls = []
    svc = SimpleNamespace(stop_event=threading.Event(), client=None, account_state={})
    def connect(token, persist):
        calls.append(persist)
        raise WaveError('revoked', 401)
    svc.connect = connect
    restore_account(svc, lambda: 'fixture-revoked', wait=lambda delay: pytest.fail('revoked tokens should not busy-retry'))
    assert calls == [False]
    assert svc.account_state['saved_token'] and not svc.account_state['restoring']


def test_temporarily_locked_vault_retries_and_shutdown_cancels_restoration():
    svc = SimpleNamespace(stop_event=threading.Event(), client=None, account_state={})
    def locked():
        raise RuntimeError('vault not ready')
    def stop(delay):
        assert delay == 2
        svc.stop_event.set()
        return True
    restore_account(svc, locked, wait=stop)
    assert svc.client is None and svc.account_state['restoring']


@pytest.mark.skipif(os.name != 'nt', reason='Windows credential backend')
def test_read_and_write_use_the_same_windows_vault(monkeypatch):
    from backend.config import load_token, save_token
    vault = {}
    class Vault:
        def get_password(self, service, account): return vault.get((service, account))
        def set_password(self, service, account, token): vault[service, account] = token
    monkeypatch.delenv('YANDEX_MUSIC_TOKEN', raising=False)
    monkeypatch.setattr('keyring.backends.Windows.WinVaultKeyring', Vault)
    save_token('fixture-only-token')
    assert load_token() == 'fixture-only-token'
