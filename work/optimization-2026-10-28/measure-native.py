"""Deterministic, account-free measurement of production overlay polling paths."""
import inspect
import json
import argparse
from pathlib import Path
import sys
import time

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from backend import desktop

parser = argparse.ArgumentParser()
parser.add_argument('output', nargs='?', default='native-result.json')
parser.add_argument('--design-bytes', type=int, default=100_000)
parser.add_argument('--legacy', action='store_true')
args = parser.parse_args()
clock = [0.]
counts = {'http_requests': 0, 'http_response_bytes': 0, 'native_bridge_bytes': 0}
state = {'online': True, 'visible': True, 'settingsRevision': 'fixture-revision',
         'settings': {'uiSettings': {'customBackground': 'x'*args.design_bytes}, 'playerSettings': {
             'overlay': {'mode': 'card', 'opacity': .9, 'size': 100}}},
         'snapshot': {'playing': True, 'nativeTrack': {'uri': 'spotify:track:fixture', 'title': 'Synthetic'}, 'progress': 1000}}

def request(path, body=None):
    counts['http_requests'] += 1
    result = json.loads(json.dumps(state))
    if 'settings_revision=fixture-revision' in path:
        result.pop('settings')
    counts['http_response_bytes'] += len(json.dumps(result).encode())
    return result

desktop.request = request
desktop.time.monotonic = lambda: clock[0]
api = desktop.OverlayApi()
delta = not args.legacy and 'settings_revision' in inspect.signature(api.snapshot).parameters
revision = None
started = time.perf_counter()
for tick in range(240):
    clock[0] = tick/4
    packet = api.snapshot(revision) if delta else desktop.renderer_state(request('/desktop/state'))
    revision = packet.get('settingsRevision')
    counts['native_bridge_bytes'] += len(json.dumps(packet).encode())
    if tick % 2 == 0:
        api.state() if delta else request('/desktop/state')
counts['measurement_ms'] = round((time.perf_counter()-started)*1000, 2)
counts['simulated_seconds'] = 60
counts['includes_live_spotify'] = False
counts['fixture_padding_bytes'] = args.design_bytes
counts['mode'] = 'legacy' if args.legacy else 'optimized'
target = Path(__file__).with_name(args.output)
target.write_text(json.dumps(counts, indent=2), encoding='utf-8')
print(json.dumps(counts))
