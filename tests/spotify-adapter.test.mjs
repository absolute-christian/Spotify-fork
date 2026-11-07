import { test } from 'node:test';
import assert from 'node:assert/strict';
import { SpotifyAdapter } from '../frontend/src/spicetify.js';
import { dispatchUi } from '../frontend/src/ui-dispatch.js';

test('home list playback replaces the queue and starts at the chosen track after stopping wave', async () => {
  const calls=[];
  const controller={state:{active:true},tick:()=>calls.push('tick'),event:type=>calls.push(type),stop:async()=>calls.push('stop'),player:{
    clearQueue:async()=>calls.push('clear'),play:async uri=>calls.push(['play',uri]),enqueue:async uris=>calls.push(['queue',uris])}};
  await dispatchUi(controller,'playFromList',['spotify:track:two',['spotify:track:one','spotify:track:two','spotify:track:three']]);
  assert.deepEqual(calls,['tick','skip','stop','clear',['play','spotify:track:two'],['queue',['spotify:track:three']],'tick']);
  calls.length=0;
  await assert.rejects(dispatchUi(controller,'playFromList',['spotify:track:two',['spotify:track:one']]),/список/);
  assert.deepEqual(calls,[]);
  controller.player.clearQueue=async()=>{throw new Error('queue unavailable')};
  controller.state.active=false;
  await assert.rejects(dispatchUi(controller,'playFromList',['spotify:track:two',['spotify:track:two']]),/queue unavailable/);
  assert.deepEqual(calls,[]);
});

test('profile uses the signed-in native Spotify user and opens their profile page', async () => {
  const paths = [];
  const player = new SpotifyAdapter({ Player: {}, Platform: { UserAPI: { getUser: async () => ({ username: 'local test user' }) }, History: { push: path => paths.push(path) } } });
  await dispatchUi({ player, state: {} }, 'openProfile', []);
  assert.deepEqual(paths, ['/user/local%20test%20user']);
  const unavailable = new SpotifyAdapter({ Player: {}, Platform: {} });
  await assert.rejects(unavailable.openProfile(), /профиль/);
});

test('artist follow uses the Spotify library and invalidates cached artist contents', async () => {
  const changed = [];
  const player = new SpotifyAdapter({ Player: {}, Platform: { LibraryAPI: {
    add: async value => changed.push(['add', value]), remove: async value => changed.push(['remove', value]),
  } } });
  player.nativeLibraryPromise = Promise.resolve([]);
  await dispatchUi({ player, state: {} }, 'followArtist', ['spotify:artist:artist1', true]);
  assert.equal(player.nativeLibraryPromise, null);
  await player.setArtistFollowed('spotify:artist:artist1', false);
  assert.deepEqual(changed, [['add', { uris: ['spotify:artist:artist1'] }], ['remove', { uris: ['spotify:artist:artist1'] }]]);
  await assert.rejects(player.setArtistFollowed('spotify:spotify:artist:artist1', true), /исполнитель/);
});

test('playlist pagination accepts current item shape and preserves queue identities', async () => {
  const urls = [];
  const player = new SpotifyAdapter({ Player: {}, CosmosAsync: { get: async url => {
    urls.push(url);
    return urls.length === 1 ? { items: [{ item: { uri: 'spotify:track:one', name: 'One', duration_ms: 120000 } }], next: 'https://api.spotify.com/v1/playlists/test/items?offset=1' }
      : { items: [{ track: { uri: 'spotify:track:two', name: 'Two' } }], next: null };
  } } });
  const tracks = await player.collection('spotify:playlist:test');
  assert.deepEqual(tracks.map(t => t.uri), ['spotify:track:one', 'spotify:track:two']);
  assert.match(urls[0], /\/playlists\/test\/items\?/);
  assert.equal(tracks[0].duration, 120000);
});

test('pagination never follows another host or a repeating page', async () => {
  for (const next of ['https://other.example/v1/me/tracks', 'https://api.spotify.com/v1/me/tracks?limit=50']) {
    let calls = 0;
    const player = new SpotifyAdapter({ Player: {}, CosmosAsync: { get: async () => { calls++; return { items: [], next }; } } });
    await assert.rejects(player.library('track'), /пагинацию/);
    assert.equal(calls, 1);
  }
});

test('adding a track targets the chosen playlist using the current items endpoint', async () => {
  const sent = [];
  const player = new SpotifyAdapter({ Player: {}, CosmosAsync: { post: async (...args) => sent.push(args) } });
  await player.addToPlaylist('spotify:track:one', 'spotify:playlist:chosen');
  assert.deepEqual(sent, [['https://api.spotify.com/v1/playlists/chosen/items', { uris: ['spotify:track:one'] }]]);
  await assert.rejects(player.addToPlaylist('https://other.example', 'spotify:playlist:chosen'));
  assert.equal(sent.length, 1);
});

test('noncurrent like toggles confirmed saved state of the target and does not affect the current wave', async () => {
  const changes = [], feedback = [];
  const controller = { state: { active: true, current: { uri: 'spotify:track:current' }, liked: false },
    player: { isLiked: async uri => { assert.equal(uri, 'spotify:track:other'); return true; }, setLiked: async (...args) => changes.push(args) },
    tick() {}, like: async () => feedback.push('like') };
  assert.equal(await dispatchUi(controller, 'like', ['spotify:track:other']), false);
  assert.deepEqual(changes, [[false, 'spotify:track:other']]);
  assert.deepEqual(feedback, []);
});

test('wave rejects native queue mutation and unrelated Yandex feedback', async () => {
  const controller = { state: { active: true, current: { uri: 'spotify:track:one' } }, player: {} };
  for (const [method, args] of [['enqueue', ['spotify:track:two']], ['clearQueue', []], ['removeQueue', ['uid']], ['dislike', ['spotify:track:two']]]) {
    await assert.rejects(dispatchUi(controller, method, args));
  }
});

test('native queue removal uses uid so duplicate track occurrences stay separate', async () => {
  const removed = [], first = { uri: 'spotify:track:one', uid: 'first' }, second = { uri: 'spotify:track:one', uid: 'second' };
  const player = new SpotifyAdapter({ Player: {}, Queue: { nextTracks: [first, second] }, removeFromQueue: async items => removed.push(items) });
  await player.removeQueue('second');
  assert.deepEqual(removed, [[second]]);
  await assert.rejects(player.removeQueue('missing'));
});

test('collection shuffle starts after restoring native playback and bulk queue rejects wave mode', async () => {
  const calls = [];
  const controller = { state: { active: true }, stop: async () => calls.push('stop'), tick() {},
    player: { play: async uri => calls.push(uri), setShuffle: async value => calls.push(value), enqueue: async uris => calls.push(uris) } };
  await dispatchUi(controller, 'playCollection', ['spotify:playlist:chosen', true]);
  assert.deepEqual(calls, ['stop', 'spotify:playlist:chosen', true]);
  await assert.rejects(dispatchUi(controller, 'enqueueMany', [['spotify:track:one']]));
  controller.state.active = false;
  await assert.rejects(dispatchUi(controller, 'enqueueMany', [['https://other.example']]));
  await dispatchUi(controller, 'enqueueMany', [['spotify:track:one', 'spotify:track:two']]);
  assert.deepEqual(calls.at(-1), ['spotify:track:one', 'spotify:track:two']);
});

test('playlist removal targets playlist items and never changes saved tracks', async () => {
  const calls = [];
  const player = new SpotifyAdapter({ Player: {}, CosmosAsync: { del: async (...args) => calls.push(args) } });
  await dispatchUi({ player, state: {} }, 'removeFromPlaylist', ['spotify:track:one', 'spotify:playlist:chosen']);
  assert.deepEqual(calls, [['https://api.spotify.com/v1/playlists/chosen/items', { items: [{ uri: 'spotify:track:one' }] }]]);
  await assert.rejects(player.removeFromPlaylist('spotify:track:one', 'spotify:album:other'));
  assert.equal(calls.length, 1);
});

test('Spicetify HTTP error objects cannot become a successful empty library or a map crash', async () => {
  const player = new SpotifyAdapter({ Player: {}, CosmosAsync: { get: async () => ({ code: 403, error: 'Forbidden', message: 'Failed to fetch' }), post: async () => ({ code: 403, error: 'Forbidden' }) } });
  const home = await player.home();
  assert.equal(home.failed, true); assert.match(home.error, /HTTP 403/);
  assert.deepEqual(home.recent, []); assert.deepEqual(home.playlists, []);
  await assert.rejects(player.library('track'), /HTTP 403/);
  await assert.rejects(player.addToPlaylist('spotify:track:one', 'spotify:playlist:chosen'), /HTTP 403/);
});

test('home preserves loaded sections if recently played fails', async () => {
  const player = new SpotifyAdapter({ Player: {}, CosmosAsync: { get: async url => url.includes('recently-played') ? { code: 403, error: 'Forbidden' } : { items: [{ uri: 'spotify:album:one', type: 'album', name: 'Saved' }], next: null } } });
  const home = await player.home();
  assert.equal(home.failed, false); assert.equal(home.albums[0].title, 'Saved'); assert.deepEqual(home.recent, []);
});

test('installed Spotify platform schemas provide real home data without Web API permissions', async () => {
  let libraryCalls = 0;
  const player = new SpotifyAdapter({ Player: {}, CosmosAsync: { get: async () => { throw new Error('Web API should not be needed'); } }, Platform: {
    PlayHistoryAPI: { getContents: async () => ({ items: [{ uri: 'spotify:track:one', name: 'Recent', artists: [{ name: 'Artist' }], duration: { milliseconds: 120000 } }] }) },
    RootlistAPI: { getContents: async () => ({ items: [{ type: 'folder', items: [{ type: 'playlist', uri: 'spotify:playlist:chosen', name: 'My playlist', totalLength: 3, isOwnedBySelf: true, images: [{ url: 'spotify:image:abc' }] }] }] }) },
    LibraryAPI: { getContents: async () => { libraryCalls++; return { items: [{ type: 'album', uri: 'spotify:album:one', name: 'Saved album', artists: [{ name: 'Artist' }] }], totalLength: 1 }; } }
  } });
  const home = await player.home();
  assert.equal(home.failed, false); assert.equal(home.recent[0].duration, 120000);
  assert.equal(home.playlists[0].cover, 'https://i.scdn.co/image/abc'); assert.equal(home.albums[0].title, 'Saved album');
  assert.equal((await player.writablePlaylists())[0].uri, 'spotify:playlist:chosen');
  await player.library('artist'); assert.equal(libraryCalls, 1);
});

test('native playlist pagination preserves normalized tracks and duplicate occurrences', async () => {
  const player = new SpotifyAdapter({ Player: {}, Platform: { PlaylistAPI: { getContents: async (uri, options) => ({ items: [{ uri: 'spotify:track:one', uid: 'native-row', name: 'Native', duration: { milliseconds: 120000 } }], totalLength: 1 }) } } });
  const tracks = await player.collection('spotify:playlist:chosen');
  assert.equal(tracks[0].uid, 'native-row'); assert.equal(tracks[0].duration, 120000);
});
