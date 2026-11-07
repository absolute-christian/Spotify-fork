import { test } from 'node:test';
import assert from 'node:assert/strict';
import { SpotifyAdapter } from '../frontend/src/spicetify.js';
import { desktopSearch } from '../frontend/src/spotify-search.js';

const response = () => ({ data: { searchV2: {
  tracksV2: { items: [{ item: { data: { __typename: 'Track', uri: 'spotify:track:one', name: 'Я тебя люблю', artists: { items: [{ uri: 'spotify:artist:one', profile: { name: 'Исполнитель' } }] }, duration: { totalMilliseconds: 180000 }, albumOfTrack: { name: 'Альбом', coverArt: { sources: [{ url: 'https://example.com/cover.jpg' }] } } } } }, { item: { data: { __typename: 'NotFound' } } }] },
  artists: { items: [{ data: { __typename: 'Artist', uri: 'spotify:artist:one', profile: { name: 'Исполнитель' }, visuals: { avatarImage: { sources: [] } } } }] },
  albumsV2: { items: [{ data: { __typename: 'Album', uri: 'spotify:album:one', name: 'Альбом', artists: { items: [] }, coverArt: { sources: [] } } }] },
  playlists: { items: [{ data: { __typename: 'Playlist', uri: 'spotify:playlist:one', name: 'Плейлист', images: { items: [] }, ownerV2: { data: { name: 'Автор' } } } }, null] },
} } });

test('native Spotify search uses the installed query and normalizes all four entity schemas', async () => {
  const calls = [];
  const player = new SpotifyAdapter({ Player: {}, GraphQL: { Request: async (...args) => { calls.push(args); return response(); } }, CosmosAsync: { get: () => { throw Error('Web API should not be used'); } } });
  const result = await player.catalog('я тебя люблю');
  assert.equal(calls[0][0], desktopSearch); assert.equal(calls[0][1].searchTerm, 'я тебя люблю');
  assert.equal(result.tracks.items.length, 1); assert.equal(result.tracks.items[0].duration_ms, 180000);
  assert.equal(result.tracks.items[0].artists[0].name, 'Исполнитель');
  assert.equal(result.tracks.items[0].album.images[0].url, 'https://example.com/cover.jpg');
  assert.equal(result.artists.items[0].name, 'Исполнитель'); assert.equal(result.albums.items[0].name, 'Альбом');
  assert.equal(result.playlists.items[0].owner.display_name, 'Автор');
  await player.search('я тебя люблю'); await player.catalog('я тебя люблю', 'artist');
  assert.equal(calls.length, 1, 'type changes and wave matching reuse the same native response');
});

test('concurrent identical searches share one request; cache expires without retaining stale results', async t => {
  let calls = 0, resolve, time = 1000;
  t.mock.method(Date, 'now', () => time);
  const player = new SpotifyAdapter({ Player: {}, GraphQL: { Request: () => { calls++; return new Promise(r => { resolve = r; }); } } });
  const first = player.catalog('same'), second = player.catalog('same');
  assert.equal(calls, 1); resolve(response()); await Promise.all([first, second]);
  await player.catalog('same'); assert.equal(calls, 1);
  time += 60_001; const fresh = player.catalog('same'); assert.equal(calls, 2); resolve(response()); await fresh;
});

test('429 respects Retry-After across new queries and never loops or tries another endpoint', async t => {
  let time = 1000, calls = 0;
  t.mock.method(Date, 'now', () => time);
  const player = new SpotifyAdapter({ Player: {}, CosmosAsync: { get: async () => { calls++; return { code: 429, error: 'Too many requests', headers: { 'Retry-After': '120' } }; } } });
  await assert.rejects(player.catalog('one'), /120 сек/);
  await assert.rejects(player.catalog('two'), /120 сек/); assert.equal(calls, 1);
  time += 120_001; await assert.rejects(player.search('two'), /120 сек/); assert.equal(calls, 2);
});

test('malformed native response is an error, not an empty successful search or Web API fallback', async () => {
  for (const result of [{ data: {} }, { errors: [{ message: 'unavailable' }] }]) {
    let webCalls = 0;
    const player = new SpotifyAdapter({ Player: {}, GraphQL: { Request: async () => result }, CosmosAsync: { get: () => { webCalls++; } } });
    await assert.rejects(player.catalog('query'), /результаты/); assert.equal(webCalls, 0);
  }
});

test('loaded native definition takes precedence over the pinned query contract', async () => {
  const definition = { name: 'searchDesktop', sha256Hash: 'current' };
  const player = new SpotifyAdapter({ Player: {}, GraphQL: { Definitions: { searchDesktop: definition }, Request: async selected => { assert.equal(selected, definition); return response(); } } });
  await player.search('query');
});
