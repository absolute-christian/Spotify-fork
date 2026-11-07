import json
import tempfile
import threading
import time
import unittest
from pathlib import Path
from unittest.mock import patch

from backend import config


class PairingTests(unittest.TestCase):
    def test_key_is_reused(self):
        with tempfile.TemporaryDirectory() as directory, patch.object(config, 'DATA', Path(directory)):
            first = config.pairing_key()
            self.assertEqual(first, config.pairing_key())
            self.assertEqual(json.loads((Path(directory) / 'bridge.json').read_text())['api_key'], first)

    def test_waits_for_an_in_progress_first_write(self):
        with tempfile.TemporaryDirectory() as directory, patch.object(config, 'DATA', Path(directory)):
            path = Path(directory) / 'bridge.json'
            path.write_text('', encoding='utf-8')
            thread = threading.Thread(target=lambda: (time.sleep(.1), path.write_text('{"api_key":"existing"}', encoding='utf-8')))
            thread.start()
            try:
                self.assertEqual(config.pairing_key(), 'existing')
            finally:
                thread.join()


if __name__ == '__main__':
    unittest.main()
