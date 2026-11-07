import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

from fastapi.testclient import TestClient
from backend import app as api


class StubService:
    def start(self): pass
    def close(self): pass
    def status(self): return {'connected': True, 'pending_feedback': 0}
    def connect(self, token): self.token = token


class LocalApiTests(unittest.TestCase):
    def setUp(self):
        self.directory = tempfile.TemporaryDirectory()
        self.patch = patch.object(api, 'DATA', Path(self.directory.name))
        self.patch.start()
        self.service = StubService()
        self.client = TestClient(api.create_app(service=self.service, api_key='secret-key', start_worker=False))
        self.headers = {'Authorization': 'Bearer secret-key'}

    def tearDown(self):
        self.client.close()
        self.patch.stop()
        self.directory.cleanup()

    def test_health_public_but_status_requires_key(self):
        self.assertEqual(self.client.get('/health').status_code, 200)
        self.assertEqual(self.client.get('/status').status_code, 401)
        self.assertTrue(self.client.get('/status', headers=self.headers).json()['connected'])

    def test_unknown_origin_rejected_even_with_key(self):
        response = self.client.get('/status', headers={**self.headers, 'Origin': 'https://example.com'})
        self.assertEqual(response.status_code, 403)

    def test_bad_token_input_is_not_reflected_in_error(self):
        response = self.client.post('/auth', json={'token': 'short'}, headers=self.headers)
        self.assertEqual(response.status_code, 422)
        self.assertNotIn('short', response.text)

    def test_auth_with_valid_origin(self):
        response = self.client.post('/auth', json={'token': '0123456789abcdef'},
                                    headers={**self.headers, 'Origin': 'https://xpui.app.spotify.com'})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(self.service.token, '0123456789abcdef')


if __name__ == '__main__':
    unittest.main()
