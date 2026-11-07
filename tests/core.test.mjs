import test from 'node:test';
import assert from 'node:assert/strict';
import { cleanTitle, scoreTrack, findSpotifyTrack } from '../frontend/src/matching.js';
import { FeedbackOutbox } from '../frontend/src/bridge.js';

const wave = { title: 'Song', artists: ['Artist'], duration_ms: 200000 };
const spotify = { uri: 'spotify:track:abc', name: 'Song', artists: [{ name: 'Artist' }], duration_ms: 200000 };
test('track matcher preserves versions and rejects unrelated recordings', () => {
  assert.equal(cleanTitle('Song (Remastered)'), 'Song');
  assert.ok(scoreTrack(wave, spotify) >= .99);
  assert.equal(scoreTrack(wave, { ...spotify, name: 'Song (Live)' }), 0);
  assert.equal(scoreTrack(wave, { ...spotify, is_playable: false }), 0);
});
test('track search returns a verified match', async () => {
  assert.equal((await findSpotifyTrack(wave, async () => ({ tracks: { items: [spotify] } }))).uri, spotify.uri);
});
test('feedback outbox retries the original event without changing its id', async () => {
  const values = new Map();
  const storage = { getItem: key => values.get(key), setItem: (key, value) => values.set(key, value) };
  let online = false;
  const seen = [];
  const bridge = { async feedback(event) { seen.push(event.event_id); if (!online) throw new Error('offline'); } };
  const outbox = new FeedbackOutbox(bridge, storage, () => 'event-id');
  outbox.enqueue({ play_id: 'play-id', yandex_track_id: 'track-id' }, 'trackStarted', 0);
  await outbox.flush();
  assert.equal(outbox.items.length, 1);
  online = true;
  await outbox.flush();
  assert.equal(outbox.items.length, 0);
  assert.deepEqual(seen, ['event-id', 'event-id']);
  assert.deepEqual(JSON.parse(values.get('wave.feedback')), []);
});
