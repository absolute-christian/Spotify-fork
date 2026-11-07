import threading

from fastapi.testclient import TestClient

import backend.app as application
from backend.service import WaveService


def test_local_api_starts_even_while_credential_store_is_blocked(tmp_path, monkeypatch):
    entered, release, finished = threading.Event(), threading.Event(), threading.Event()
    svc = WaveService(tmp_path / 'wave.db')

    def blocked_credentials():
        entered.set()
        release.wait(5)
        finished.set()
        return None

    monkeypatch.setattr(application, 'load_token', blocked_credentials)
    monkeypatch.setattr(application, 'WaveService', lambda path: svc)
    monkeypatch.setattr(application, 'DATA', tmp_path)
    try:
        with TestClient(application.create_app(api_key='fixture-key', start_worker=False)) as client:
            assert entered.wait(1)
            assert not finished.is_set()
            assert client.get('/health').json()['ok']
            assert client.get('/ready').status_code == 401
            assert client.get('/ready', headers={'Authorization': 'Bearer fixture-key'}).json()['ok']
            assert client.get('/status', headers={'Authorization': 'Bearer fixture-key'}).status_code == 200
        assert svc.stop_event.is_set()
    finally:
        release.set()
        assert finished.wait(1)
