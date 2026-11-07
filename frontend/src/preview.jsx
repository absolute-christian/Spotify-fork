import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app.jsx';
import { WaveController } from './controller.js';

// Simulated catalog and player; no audio, OAuth or account API requests. Public artwork loads normally.
let snap = { uri: null, playing: false, progress: 0, duration: 187000, liked: false, volume: 0.65, contextName: 'Любимые' };
const titles = ['CASINO, PLAY UR LIFE!', 'SLAP A HOE | VIP', 'endless']; let index = 0;
// Public Spotify oEmbed artwork; see docs/visual-assets.md
const covers = ['https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024b8112afe5536854bbaa9a0a', '', 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e027e407bdfdc95372ac808e375'];
const fixtures = titles.map((title, i) => ({ uri: `spotify:track:demo${i + 1}`, title, artist: i === 2 ? 'oklou' : 'Lumi Athena', duration: 187000, cover: covers[i] }));
const wave = () => ({ title: titles[index++ % titles.length], artist: index % 3 === 0 ? 'oklou' : 'Lumi Athena', artists: [index % 3 === 0 ? 'oklou' : 'Lumi Athena'],
  yandex_track_id: String(index), play_id: crypto.randomUUID(), batch_id: 'demo', duration_ms: 187000, cover_url: '' });
const saved = new Set(fixtures.map(t => t.uri)), collection = { uri: 'spotify:playlist:demoplaylist', title: 'Демонстрационный плейлист', artist: 'Предпросмотр', type: 'playlist', count: 3 };
let previewQueue = fixtures.slice(1).map((t, i) => ({ ...t, uid: 'demo-queue-' + i })), playlistTracks = [...fixtures];
let followedArtists = [{ uri: 'spotify:artist:demoartist', title: 'Демонстрационный исполнитель', type: 'artist', cover: '' }];
const player = {
  shuffleModes: {
    state: async uri => ({uri,mode:snap.shuffleType==='smart'?2:snap.shuffle?1:0,available:[0,1,2]}),
    cycle: async uri => {const mode=((snap.shuffleType==='smart'?2:snap.shuffle?1:0)+1)%3;snap.shuffle=mode!==0;snap.shuffleType=mode===2?'smart':mode===1?'normal':'none';return {uri,mode,available:[0,1,2]};},
  },
  snapshot: () => ({ ...snap, track: fixtures.find(t => t.uri === snap.uri) || fixtures[0] }), getModes: () => ({}), isolate: async () => {}, restore: async () => {},
  play: async uri => { snap.uri = uri.includes(':playlist:') || uri === 'spotify:collection:tracks' ? fixtures[0].uri : uri; snap.playing = true; snap.progress = 500; snap.liked = saved.has(snap.uri); },
  pause: async () => { snap.playing = false; }, togglePlay: async () => { snap.playing = !snap.playing; },
  seek: ms => { snap.progress = ms; }, setLiked: async (value, uri = snap.uri) => { value ? saved.add(uri) : saved.delete(uri); if (uri === snap.uri) snap.liked = value; }, isLiked: async uri => saved.has(uri), copyText: text => navigator.clipboard.writeText(text),
  volume: value => { snap.volume = value; },
  search: async query => ({ tracks: { items: [{ uri: `spotify:track:demo${(index - 1) % 3 + 1}`, name: query.match(/^track:(.*?) artist:/)?.[1] || titles[(index - 1) % 3],
    artists: [{ name: index % 3 === 0 ? 'oklou' : 'Lumi Athena' }], duration_ms: 187000, album: { images: covers[(index - 1) % 3] ? [{ url: covers[(index - 1) % 3] }] : [] } }] } }),
  home: async () => ({ recent: fixtures, albums: [], playlists: [] }),
  library: async type => type === 'track' ? fixtures.filter(t => saved.has(t.uri)) : type === 'playlist' ? [{ ...collection, count: playlistTracks.length }] : type === 'artist' ? followedArtists : [],
  setArtistFollowed: async (uri, followed) => { followedArtists = followed ? [{ uri, title: 'Демонстрационный исполнитель', type: 'artist', cover: '' }] : []; },
  collection: async () => playlistTracks, writablePlaylists: async () => [collection], addToPlaylist: async uri => { playlistTracks.push(fixtures.find(t => t.uri === uri)); },
  removeFromPlaylist: async uri => { playlistTracks = playlistTracks.filter(t => t.uri !== uri); },
  catalog: async query => ({ tracks: { items: fixtures.filter(t => (t.title + ' ' + t.artist).toLowerCase().includes(query.toLowerCase())).map(t => ({ uri: t.uri, name: t.title, artists: [{ name: t.artist }], duration_ms: t.duration, album: { images: t.cover ? [{ url: t.cover }] : [] } })) } }),
  queue: () => previewQueue, removeQueue: async uid => { previewQueue = previewQueue.filter(t => t.uid !== uid); }, clearQueue: async () => { previewQueue = []; }, next: async () => { snap.uri = fixtures[(fixtures.findIndex(t => t.uri === snap.uri) + 1) % fixtures.length].uri; snap.progress = 0; },
  back: async () => { snap.progress = 0; }, repeat: async () => { snap.repeat = snap.repeat ? 0 : 1; }, shuffle: async () => player.shuffleModes.cycle(snap.contextUri),
  setShuffle: async value => { snap.shuffle = value;snap.shuffleType=value?'normal':'none'; },
  lyrics: async () => ({ synced: true, lines: [{ text: 'Текст песни', start: 0 }, { text: 'Демонстрация синхронизации строк', start: 60000 }, { text: 'Без подключения к Spotify', start: 120000 }] }),
  open: () => controller.emit({ error: 'В предпросмотре переход в Spotify недоступен' }),
  preferences: () => controller.emit({ error: 'Настройки аудио открываются внутри Spotify' }),
  enqueue: async uris => { previewQueue.push(...uris.map(uri => ({ ...fixtures.find(t => t.uri === uri), uid: crypto.randomUUID() }))); },
};
const storage = { getItem: () => null, setItem: () => {} };
const bridge = { status: async () => ({ connected: true, pending_feedback: 0 }), next: async () => wave(), feedback: async () => ({ accepted: true }) };
const controller = new WaveController(player, bridge, storage);
await controller.checkBridge(); await controller.start();
snap.progress = 68400;
setInterval(() => { if (snap.playing) snap.progress += 250; controller.tick(); }, 250);
setInterval(() => controller.checkBridge(), 5000);
createRoot(document.getElementById('root')).render(<App controller={controller} demo/>);
