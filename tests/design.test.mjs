import { test } from 'node:test';
import assert from 'node:assert/strict';
import { defaults, loadDesign, saveDesign } from '../frontend/src/design.js';
import { normalizeTrack } from '../frontend/src/catalog.js';

test('appearance survives reconstruction and invalid saved fields fall back safely', () => {
  let value;
  const storage = { getItem: () => value, setItem: (_, next) => { value = next; } };
  saveDesign(storage, { ...defaults, player: 'vinyl', miniPosition: 'floating', queuePosition: 'left' });
  assert.equal(loadDesign(storage).player, 'vinyl');
  assert.equal(loadDesign(storage).miniPosition, 'floating');
  value = JSON.stringify({ fontSize: 9000, radius: -1, player: 'invalid', mini: 'off' });
  assert.equal(loadDesign(storage).fontSize, defaults.fontSize);
  assert.equal(loadDesign(storage).radius, defaults.radius);
  assert.equal(loadDesign(storage).player, defaults.player);
  assert.equal(loadDesign(storage).mini, 'off');
  value = '{broken'; assert.deepEqual(loadDesign(storage), defaults);
});
test('normalizes Spotify queue contextTrack separately from catalogue objects', () => {
  const fromQueue = normalizeTrack({ contextTrack: { uri: 'spotify:track:abc', metadata: { title: 'Track', artist_name: 'Artist', image_url: 'spotify:image:123', duration: '180000' } } });
  assert.equal(fromQueue.cover, 'https://i.scdn.co/image/123');
  assert.equal(fromQueue.title, 'Track'); assert.equal(fromQueue.duration, 180000);
  assert.equal(normalizeTrack({ track: { uri: 'spotify:track:abc', name: 'Track', artists: [{ name: 'Artist' }], duration_ms: 180000 } }).artist, 'Artist');
  assert.equal(normalizeTrack(null), null);
});
