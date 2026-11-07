import { test } from 'node:test';
import assert from 'node:assert/strict';
import { WaveController } from '../frontend/src/controller.js';
import { FeedbackOutbox } from '../frontend/src/bridge.js';
import { cleanTitle, queries, scoreTrack, findSpotifyTrack } from '../frontend/src/matching.js';

function fixture() {
  let counter = 0, clock = 0;
  const sent = [], played = [], pauses = [];
  const state = { uri: 'spotify:track:old', playing: true, progress: 5000, duration: 180000, liked: false, volume: 0.5 };
  const storageData = new Map();
  const storage = { getItem: k => storageData.get(k) || null, setItem: (k, v) => storageData.set(k, v) };
  let candidate = 0;
  const bridge = { status: async () => ({ connected: true, pending_feedback: 0 }),
    next: async () => ({ title: 'Song', artist: 'Artist', artists: ['Artist'], duration_ms: 180000,
      yandex_track_id: String(++candidate), play_id: `play-${candidate}`, batch_id: 'batch' }),
    feedback: async event => { sent.push(event); return { accepted: true }; } };
  const spotify = () => ({ uri: `spotify:track:${candidate}`, name: 'Song', artists: [{ name: 'Artist' }], duration_ms: 180000 });
  const player = { snapshot: () => ({ ...state }), getModes: () => ({ repeat: 0, shuffle: true }),
    isolate: async () => {}, restore: async modes => { player.restored = modes; },
    search: async () => ({ tracks: { items: [spotify()] } }),
    play: async uri => { played.push(uri); state.uri = uri; state.playing = true; state.progress = 1; },
    pause: async () => { pauses.push(true); state.playing = false; },
    togglePlay: async () => { state.playing = !state.playing; },
    setLiked: async value => { state.liked = value; }, seek: ms => { state.progress = ms; }, volume: value => { state.volume = value; },
  };
  const controller = new WaveController(player, bridge, storage, { uuid: () => `id-${++counter}`, now: () => clock, wait: async () => {} });
  const advance = (seconds = 1) => { clock += seconds * 1000; if (state.playing) state.progress += seconds * 1000; controller.tick(); };
  return { controller, player, bridge, sent, played, pauses, state, storage, advance, spotify };
}
const drain = () => new Promise(resolve => setImmediate(resolve));

test('connecting only succeeds after the bridge confirms the authenticated account', async () => {
  const f = fixture();
  f.bridge.auth = async () => ({ connected: true });
  await f.controller.connect('test-fixture-token');
  assert.equal(f.controller.state.connected, true);
  f.bridge.status = async () => ({ connected: false, pending_feedback: 0 });
  await assert.rejects(f.controller.connect('test-fixture-token'), /не подтвердил/);
  f.bridge.status = async () => { throw new Error('local bridge unavailable'); };
  await assert.rejects(f.controller.connect('test-fixture-token'), /unavailable/);
});

test('normalizes editorial tags without removing actual version names', () => {
  assert.equal(cleanTitle('Song (2011 Remastered) (Bonus Track)'), 'Song');
  assert.equal(cleanTitle('Song - 2011 Remastered'), 'Song');
  assert.equal(cleanTitle('Song (Live)'), 'Song (Live)');
  assert(queries({ title: 'Song', artists: ['Мумий Тролль (Mumiy Troll)'] }).some(q => q.includes('artist:Mumiy Troll')));
});

test('matches title and artist; rejects wrong artists, covers, live and duration mismatch', async () => {
  const f = fixture(), track = await f.bridge.next();
  assert(scoreTrack(track, f.spotify()) > .9);
  assert.equal(scoreTrack(track, { ...f.spotify(), artists: [{ name: 'Someone Else' }] }), 0);
  assert.equal(scoreTrack(track, { ...f.spotify(), name: 'Song (Live)' }), 0);
  assert.equal(scoreTrack(track, { ...f.spotify(), duration_ms: 250000 }), 0);
  assert.equal(await findSpotifyTrack(track, async () => ({ tracks: { items: [] } })), null);
});

test('does not confirm trackStarted until Spotify actually plays the requested URI', async () => {
  const f = fixture();
  f.player.play = async () => {};
  await assert.rejects(f.controller.start(), /не подтвердил/); await drain();
  assert.equal(f.sent.length, 0);
  assert.match(f.controller.state.error, /не подтвердил/);
  assert.equal(f.controller.state.active,false);
  assert.equal(f.controller.state.loading,false);
  assert.deepEqual(f.player.restored,{repeat:0,shuffle:true});
});

test('confirmed wave playback publishes the real Spotify metadata and external changes atomically',async()=>{
  const f=fixture();
  f.player.play=async uri=>{
    f.state.uri=uri;f.state.playing=true;f.state.progress=1;
    f.state.track={uri,title:'Spotify spelling',artist:'Artist',cover:'spotify-cover',duration:180000};
  };
  await f.controller.start();
  assert.equal(f.controller.state.nativeTrack.title,'Spotify spelling');
  assert.equal(f.controller.state.nativeUri,f.controller.current.uri);
  const observed=[];
  f.controller.subscribe(state=>observed.push(state));
  f.state.uri='spotify:track:external';
  f.state.track={uri:f.state.uri,title:'External track',cover:'external-cover'};
  f.controller.tick();
  assert.equal(observed[0].nativeTrack.title,'External track');
  assert.equal(observed[0].nativeUri,f.state.uri);
  await drain();await drain();
});

test('confirmed start then 30 actual seconds produces one finish, pause and seeking do not count', async () => {
  const f = fixture(); await f.controller.start(); await drain();
  assert.deepEqual(f.sent.map(e => e.event_type), ['trackStarted']);
  f.state.progress = 100000; f.controller.tick();
  assert.equal(f.controller.current.listened, 0);
  await f.controller.togglePlay();
  for (let n = 0; n < 60; n++) f.advance();
  assert.equal(f.controller.current.listened, 0);
  await f.controller.togglePlay();
  for (let n = 0; n < 31; n++) f.advance();
  await drain();
  assert(f.controller.current.listened >= 30, JSON.stringify({ listened: f.controller.current.listened, playing: f.state.playing, progress: f.state.progress, outbox: f.controller.outbox.items, sent: f.sent }));
  assert.equal(f.sent.filter(e => e.event_type === 'trackFinished').length, 1);
  assert.equal(f.sent.find(e => e.event_type === 'trackFinished').total_played_seconds, 30);
});

test('double next is serialized and sends a single skip before starting the next song', async () => {
  const f = fixture(); await f.controller.start();
  await Promise.all([f.controller.next(), f.controller.next()]); await drain();
  assert.equal(f.played.length, 2);
  assert.deepEqual(f.sent.map(e => e.event_type), ['trackStarted', 'skip', 'trackStarted']);
  assert.equal(f.sent[1].play_id, 'play-1');
  assert.equal(f.sent[2].play_id, 'play-2');
});

test('catalog misses preserve current music while finding a candidate and never emit false skip', async () => {
  const f = fixture(); let searches = 0;
  f.player.search = async () => {
    searches++; assert.equal(f.state.uri, 'spotify:track:old'); assert.equal(f.state.playing, true);
    return { tracks: { items: searches <= 2 ? [] : [f.spotify()] } };
  };
  await f.controller.start(); await drain();
  assert.equal(f.controller.state.skipped, 1);
  assert.equal(f.played.length, 1);
  assert.equal(f.pauses.length, 0);
  assert.deepEqual(f.sent.map(e => e.event_type), ['trackStarted']);
});

test('search HTTP failures do not consume a series of Yandex recommendations', async () => {
  const f = fixture(); let requests = 0;
  const next = f.bridge.next; f.bridge.next = async () => { requests++; return next(); };
  f.player.search = async () => { throw new Error('Spotify 429'); };
  await assert.rejects(f.controller.start(),/429/);
  assert.equal(requests, 1); assert.match(f.controller.state.error, /429/); assert.equal(f.played.length, 0);
});

test('repeated wave starts share one pending search and recover after an initial error',async()=>{
  const f=fixture();let resolveSearch,searches=0;
  f.player.search=()=>{searches++;return new Promise(resolve=>{resolveSearch=resolve;});};
  const one=f.controller.start(),two=f.controller.start();
  await drain();assert.equal(searches,1);
  resolveSearch({tracks:{items:[f.spotify()]}});
  await Promise.all([one,two]);
  assert.equal(f.played.length,1);
  await f.controller.stop();
  f.player.search=async()=>({tracks:{items:[f.spotify()]}});
  f.player.isolate=async()=>{throw new Error('native preparation failed');};
  await assert.rejects(f.controller.start(),/preparation/);
  assert.equal(f.controller.state.active,false);
  assert.equal(f.controller.state.waveStage,'failed');
});

test('stop during native preparation prevents late wave activation',async()=>{
  const f=fixture();let finishPreparation;
  f.player.isolate=()=>new Promise(resolve=>{finishPreparation=resolve;});
  const starting=f.controller.start();await drain();
  await f.controller.stop();finishPreparation();await starting;
  assert.equal(f.controller.state.active,false);
  assert.equal(f.controller.state.waveStage,'idle');
  assert.equal(f.played.length,0);
  assert.deepEqual(f.player.restored,{repeat:0,shuffle:true});
});

test('wave prepares native queue once, only after a reliable match',async()=>{
  const f=fixture();let preparations=0;
  f.player.isolate=async()=>{preparations++;};
  f.player.search=async()=>{assert.equal(preparations,0);return {tracks:{items:[f.spotify()]}};};
  await f.controller.start();assert.equal(preparations,1);
  await f.controller.stop();preparations=0;
  f.player.search=async()=>{throw new Error('search offline');};
  await assert.rejects(f.controller.start(),/offline/);assert.equal(preparations,0);
});

test('stop during search cancels late playback and restores repeat/shuffle', async () => {
  const f = fixture(); let resolveSearch;
  f.player.search = () => new Promise(resolve => { resolveSearch = resolve; });
  const starting = f.controller.start();
  await drain(); await f.controller.stop();
  resolveSearch({ tracks: { items: [f.spotify()] } });
  await starting;
  assert.equal(f.played.length, 0);
  assert.deepEqual(f.player.restored, { repeat: 0, shuffle: true });
});

test('likes/unlikes reach both services and failed Spotify action never trains Yandex', async () => {
  const f = fixture(); await f.controller.start();
  await f.controller.like(); assert.equal(f.state.liked, true);
  await f.controller.like(); assert.equal(f.state.liked, false);
  f.player.setLiked = async () => { throw new Error('Offline'); };
  await assert.rejects(f.controller.like()); await drain();
  assert.deepEqual(f.sent.map(e => e.event_type), ['trackStarted', 'like', 'unlike']);
});

test('dislike is distinct from skip and precedes the new track start', async () => {
  const f = fixture(); await f.controller.start(); await f.controller.dislike(); await drain();
  assert.deepEqual(f.sent.map(e => e.event_type), ['trackStarted', 'dislike', 'skip', 'trackStarted']);
});

test('short song end sends finish and advances without skip', async () => {
  const f = fixture(); await f.controller.start();
  f.state.duration = 10000; f.state.progress = 9850; f.controller.tick();
  await drain(); await drain();
  assert.deepEqual(f.sent.map(e => e.event_type), ['trackStarted', 'trackFinished', 'trackStarted']);
});

test('durable browser outbox retries the same UUID after recreation', async () => {
  const f = fixture(); let online = false; const delivered = [];
  const bridge = { feedback: async e => { if (!online) throw new Error('offline'); delivered.push(e); } };
  const first = new FeedbackOutbox(bridge, f.storage, () => 'same-event');
  first.enqueue({ play_id: 'play', yandex_track_id: 'track' }, 'trackStarted', 0);
  await first.flush(); assert.equal(first.items.length, 1);
  const second = new FeedbackOutbox(bridge, f.storage); online = true;
  await second.flush(); assert.equal(second.items.length, 0); assert.equal(delivered[0].event_id, 'same-event');
});

test('native song change is intercepted and recovers wave instead of playing the foreign queue', async () => {
  const f = fixture(); await f.controller.start();
  f.state.uri = 'spotify:track:foreign'; f.controller.tick();
  await drain(); await drain();
  assert.equal(f.played.length, 2); assert(f.pauses.length > 0);
  assert.deepEqual(f.sent.map(e => e.event_type), ['trackStarted', 'skip', 'trackStarted']);
});

test('native skip after the 30 second credit still records the skip', async () => {
  const f = fixture(); await f.controller.start();
  for (let n = 0; n < 31; n++) f.advance();
  f.state.uri = 'spotify:track:foreign'; f.controller.tick();
  await drain(); await drain();
  assert.deepEqual(f.sent.map(e => e.event_type), ['trackStarted', 'trackFinished', 'skip', 'trackStarted']);
});

test('paused playback at exact track end advances a short song', async () => {
  const f = fixture(); await f.controller.start();
  f.state.duration = 10000; f.state.progress = 10000; f.state.playing = false;
  f.controller.tick(); await drain(); await drain();
  assert.equal(f.played.length, 2);
  assert.equal(f.sent.filter(e => e.event_type === 'trackFinished').length, 1);
});
