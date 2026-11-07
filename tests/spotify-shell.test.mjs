import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spotifyProfileAnchor, openSpotifyProfileMenu } from '../frontend/src/spotify-shell.js';

test('account menu anchor translates iframe coordinates and rejects invalid geometry', () => {
  const frame = { clientWidth: 1000, clientHeight: 700, getBoundingClientRect: () => ({ left: 8, top: 16, width: 1000 }) };
  assert.deepEqual(spotifyProfileAnchor(frame, { left: 600, top: 24, width: 48, height: 48 }), { left: 608, top: 40, width: 48, height: 48 });
  assert.equal(spotifyProfileAnchor(frame, { left: 1200, top: 24, width: 48, height: 48 }).left, 960);
  assert.throws(() => spotifyProfileAnchor(frame, { left: NaN }), /профиля/);
  assert.throws(() => openSpotifyProfileMenu({}, { querySelector: () => null }), /меню аккаунта недоступно/);
});
