import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Bridge } from '../frontend/src/bridge.js';
import { WaveController } from '../frontend/src/controller.js';

test('bridge outage requires no manual launcher and does not replay a mutation', async () => {
  const originalFetch = globalThis.fetch;
  let calls = 0;
  globalThis.fetch = async () => { calls++; throw new TypeError('offline'); };
  try {
    await assert.rejects(new Bridge('fixture-key').auth('fixture-token'), error => {
      assert.equal(error.code, 'BRIDGE_UNAVAILABLE');
      assert.doesNotMatch(error.message, /Start\.cmd/);
      return true;
    });
    assert.equal(calls, 1);
  } finally { globalThis.fetch = originalFetch; }
});

test('reconnection clears its own stale error and shares concurrent health checks', async () => {
  let resolve, calls = 0;
  const bridge = { status: async () => { throw new Error('background offline'); } };
  const storage = { getItem: () => null, setItem: () => {} };
  const controller = new WaveController({}, bridge, storage);
  await controller.checkBridge();
  assert.equal(controller.state.bridgeOnline, false);
  bridge.status = () => { calls++; return new Promise(done => { resolve = done; }); };
  const a = controller.checkBridge(), b = controller.checkBridge();
  await new Promise(done => setImmediate(done));
  assert.equal(calls, 1);
  resolve({ connected: true, pending_feedback: 0 });
  await Promise.all([a, b]);
  assert.equal(controller.state.error, '');
  assert.equal(controller.state.bridgeOnline, true);
  controller.emit({ error: 'unrelated playback failure' });
  bridge.status = async () => ({ connected: true, pending_feedback: 0 });
  await controller.checkBridge();
  assert.equal(controller.state.error, 'unrelated playback failure');
});
