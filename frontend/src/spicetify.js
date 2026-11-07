import { normalizeTrack, normalizeCollection } from './catalog.js';
import { desktopSearch, nativeSearchResults, searchHttpError } from './spotify-search.js';
import { SpotifyAudio } from './audio-settings.js';
import { SpotifyShuffle, shuffleType, shuffleContext } from './shuffle.js';
export class SpotifyAdapter {
  constructor(S) {
    this.S = S;
    this.audio = new SpotifyAudio(S.Platform);
    this.shuffleModes = new SpotifyShuffle(S);
    this.searchCache = new Map(); this.searchPending = new Map(); this.searchRetryAt = 0;
    this.original = {};
    for (const method of ['next', 'back', 'toggleHeart', 'setHeart']) {
      this.original[method] = S.Player[method]?.bind(S.Player);
    }
  }
  async request(method, url, body) {
    if (!this.S.CosmosAsync?.[method]) throw new Error('Запасной HTTP API недоступен в этой версии Spotify');
    const data = await this.S.CosmosAsync[method](url, body);
    const status = Number(data?.code || data?.error?.status || 0);
    // Spicetify 2.45 resolves HTTP failures to objects rather than rejecting.
    if (data == null || data.error || status >= 400) throw searchHttpError(data);
    return data;
  }
  items(data) {
    if (!Array.isArray(data?.items)) throw new Error('Spotify вернул ответ без списка элементов');
    return data.items;
  }
  async nativePages(load, normalize) {
    const output = [], limit = 50;
    for (let page = 0, offset = 0; page < 200; page++) {
      const data = await load({ offset, limit }), items = this.items(data);
      output.push(...items.map(normalize).filter(Boolean));
      offset += items.length;
      const total = data.totalLength;
      if (Number.isFinite(total) ? offset >= total : items.length < limit) return output;
      if (!items.length) throw new Error('Spotify вернул неполную библиотеку');
    }
    throw new Error('Spotify вернул некорректную пагинацию');
  }
  async nativeLibraryContents() {
    if (this.nativeLibraryPromise && Date.now() < this.nativeLibraryExpires) return this.nativeLibraryPromise;
    this.nativeLibraryExpires = Date.now() + 30000;
    this.nativeLibraryPromise = this.nativePages(options => this.S.Platform.LibraryAPI.getContents({ ...options, flattenTree: true }), normalizeCollection).catch(error => { this.nativeLibraryPromise = null; throw error; });
    return this.nativeLibraryPromise;
  }
  snapshot() {
    const p = this.S.Player;
    return { uri: p.data?.item?.uri, playing: p.isPlaying(), progress: p.getProgress() || 0,
      duration: p.getDuration() || 0, liked: !!p.getHeart(), volume: p.getVolume(),
      track: normalizeTrack(p.data?.item), repeat: p.getRepeat(), shuffle: p.getShuffle(), shuffleType: shuffleType(this.shuffleModes.current()),
      contextName: p.data?.context?.uri === 'spotify:collection:tracks' ? 'Любимые'
        : p.data?.context?.metadata?.context_description || p.data?.context?.metadata?.name || '',
      contextUri: p.data?.context?.uri || '' };
  }
  getModes() { const uri = this.shuffleModes.context(); return { repeat: this.S.Player.getRepeat(), shuffle: this.S.Player.getShuffle(), shuffleMode: this.shuffleModes.current(), contextUri: shuffleContext(uri) ? uri : '' }; }
  async isolate() {
    const S = this.S;
    if (!S.Platform?.PlayerAPI?.clearQueue) throw new Error('В этой версии Spotify недоступно управление очередью');
    await S.Platform.PlayerAPI.clearQueue();
    await this.setShuffle(false); await S.Player.setRepeat(2);
  }
  async restore(modes) { await this.S.Player.setRepeat(modes.repeat); if (modes.contextUri && this.S.Platform?.ShuffleAPI) await this.shuffleModes.set(modes.shuffleMode,modes.contextUri); else await this.S.Player.setShuffle(modes.shuffle); }
  search(query) {
    return this.catalog(query, 'track');
  }
  async catalog(query, type = 'all') {
    query = String(query || '').trim();
    if (!query) return { tracks: { items: [] }, artists: { items: [] }, albums: { items: [] }, playlists: { items: [] } };
    if (!['all', 'track', 'artist', 'album', 'playlist'].includes(type)) throw new Error('Неизвестный тип поиска');
    const native = !!this.S.GraphQL?.Request, key = `${native ? 'native' : type}:${query}`;
    const cached = this.searchCache.get(key);
    if (cached && cached.expires > Date.now()) return cached.value;
    if (this.searchPending.has(key)) return this.searchPending.get(key);
    if (Date.now() < this.searchRetryAt) throw new Error(`Spotify ограничил частоту поиска. Повторите через ${Math.ceil((this.searchRetryAt - Date.now()) / 1000)} сек`);
    const pending = this.loadSearch(query, type, native).then(value => {
      this.searchCache.set(key, { value, expires: Date.now() + 60_000 });
      if (this.searchCache.size > 40) this.searchCache.delete(this.searchCache.keys().next().value);
      return value;
    }).catch(cause => {
      const error = cause.status ? cause : searchHttpError(cause);
      if (error.status === 429) { this.searchRetryAt = Date.now() + error.retryAfter * 1000; throw new Error(`Spotify ограничил частоту поиска. Повторите через ${Math.ceil(error.retryAfter)} сек`); }
      throw cause;
    }).finally(() => this.searchPending.delete(key));
    this.searchPending.set(key, pending);
    return pending;
  }
  async loadSearch(query, type, native) {
    if (native) {
      const response = await this.S.GraphQL.Request(this.S.GraphQL.Definitions?.searchDesktop || desktopSearch, {
        searchTerm: query, offset: 0, limit: 10, numberOfTopResults: 5, includeAudiobooks: true,
        includeArtistHasConcertsField: false, includePreReleases: false, includeAlbumPreReleases: false,
        includeAuthors: false, includeEpisodeContentRatingsV2: false,
      });
      if (response?.error || Number(response?.code || response?.status || 0) >= 400) throw searchHttpError(response);
      return nativeSearchResults(response);
    }
    const types = type === 'all' ? 'track,artist,album,playlist' : type;
    return this.request('get', `https://api.spotify.com/v1/search?type=${types}&limit=10&q=${encodeURIComponent(query)}`);
  }
  async library(type = 'playlist') {
    const endpoint = { playlist: 'me/playlists', album: 'me/albums', artist: 'me/following?type=artist', track: 'me/tracks' }[type];
    if (!endpoint) throw new Error('Неизвестный раздел библиотеки');
    const platform = this.S.Platform;
    try {
      if (type === 'playlist' && platform?.RootlistAPI?.getContents) {
        const root = await platform.RootlistAPI.getContents(), output = [];
        const visit = node => {
          if (node?.type === 'playlist') { const item = normalizeCollection(node); if (item) output.push(item); }
          if (node?.type === 'folder') for (const child of this.items(node)) visit(child);
        };
        if (!Array.isArray(root?.items)) throw new Error('Spotify вернул ответ без списка плейлистов');
        for (const item of root.items) visit(item);
        return output;
      }
      if (type === 'track' && platform?.LibraryAPI?.getTracks) return await this.nativePages(options => platform.LibraryAPI.getTracks(options), normalizeTrack);
      if (['album', 'artist'].includes(type) && platform?.LibraryAPI?.getContents) return (await this.nativeLibraryContents()).filter(item => item.uri.startsWith(`spotify:${type}:`));
    } catch { /* A client-specific API can be absent or change; try the public API. */ }
    return this.pages(`${endpoint}${endpoint.includes('?') ? '&' : '?'}limit=50`, type === 'track' ? normalizeTrack : normalizeCollection, type === 'artist' ? 'artists' : null);
  }
  async pages(endpoint, normalize, key = null) {
    let next = `https://api.spotify.com/v1/${endpoint}`;
    const output = [], seen = new Set();
    while (next) {
      const url = new URL(next);
      if (url.origin !== 'https://api.spotify.com' || !url.pathname.startsWith('/v1/') || seen.has(next) || seen.size >= 200) throw new Error('Spotify вернул некорректную пагинацию');
      seen.add(next);
      const data = await this.request('get', next), page = key ? data[key] : data;
      output.push(...this.items(page).map(normalize).filter(Boolean));
      next = page?.next;
    }
    return output;
  }
  async collection(uri) {
    if (uri === 'spotify:collection:tracks') return this.library('track');
    const match = /^spotify:(playlist|album):([a-zA-Z0-9]+)$/.exec(uri || '');
    if (!match) throw new Error('Неизвестная коллекция Spotify');
    const [, type, id] = match;
    if (type === 'playlist') {
      if (this.S.Platform?.PlaylistAPI?.getContents) {
        try { return await this.nativePages(options => this.S.Platform.PlaylistAPI.getContents(uri, options), normalizeTrack); } catch { /* Try Web API if the native client cannot load this playlist. */ }
      }
      return this.pages(`playlists/${id}/items?limit=50`, normalizeTrack);
    }
    const album = await this.request('get', `https://api.spotify.com/v1/albums/${id}`);
    return this.pages(`albums/${id}/tracks?limit=50`, item => normalizeTrack({ ...item, album }));
  }
  async writablePlaylists() {
    const playlists = await this.library('playlist');
    if (playlists.every(item => item.writable !== null)) return playlists.filter(item => item.writable);
    const me = await this.request('get', 'https://api.spotify.com/v1/me');
    return playlists.filter(item => item.writable === true || item.owner === me.id || item.collaborative);
  }
  async addToPlaylist(uri, playlistUri) {
    const match = /^spotify:playlist:([a-zA-Z0-9]+)$/.exec(playlistUri || '');
    if (!match || !/^spotify:track:[a-zA-Z0-9]+$/.test(uri || '')) throw new Error('Некорректный трек или плейлист');
    await this.request('post', `https://api.spotify.com/v1/playlists/${match[1]}/items`, { uris: [uri] });
  }
  async isLiked(uri) {
    const values = await this.request('get', `https://api.spotify.com/v1/me/library/contains?uris=${encodeURIComponent(uri)}`);
    return !!values[0];
  }
  copyText(text) { return this.S.Platform.ClipboardAPI.copy(text); }
  async removeFromPlaylist(trackUri, playlistUri) {
    const match = /^spotify:playlist:([a-zA-Z0-9]+)$/.exec(playlistUri || '');
    if (!match || !/^spotify:track:[a-zA-Z0-9]+$/.test(trackUri || '')) throw new Error('Некорректный трек или плейлист');
    return this.request('del', `https://api.spotify.com/v1/playlists/${match[1]}/items`, { items: [{ uri: trackUri }] });
  }
  async home() {
    const results = await Promise.allSettled([
      (async () => {
        if (this.S.Platform?.PlayHistoryAPI?.getContents) {
          try { return this.items(await this.S.Platform.PlayHistoryAPI.getContents()).map(normalizeTrack).filter(Boolean); } catch { /* Try public history below. */ }
        }
        return this.items(await this.request('get', 'https://api.spotify.com/v1/me/player/recently-played?limit=12')).map(normalizeTrack).filter(Boolean);
      })(),
      this.library('album'), this.library('playlist'),
    ]);
    const recent = results[0].status === 'fulfilled' ? results[0].value : [];
    return { recent: [...new Map(recent.map(t => [t.uri, t])).values()],
      albums: results[1].status === 'fulfilled' ? results[1].value : [],
      playlists: results[2].status === 'fulfilled' ? results[2].value : [],
      failed: results.every(r => r.status === 'rejected'), error: results.find(r => r.status === 'rejected')?.reason?.message || '' };
  }
  queue() { return (this.S.Queue?.nextTracks || []).map(normalizeTrack).filter(Boolean); }
  enqueue(uris) { return this.S.addToQueue(uris.map(uri => ({ uri }))); }
  async removeQueue(uid) {
    const track = this.S.Queue?.nextTracks?.find(item => item.uid === uid);
    if (!track) throw new Error('Этот трек уже отсутствует в очереди');
    await this.S.removeFromQueue([track]);
  }
  async clearQueue() {
    if (!this.S.Platform.PlayerAPI.clearQueue) throw new Error('Spotify не поддерживает очистку очереди');
    await this.S.Platform.PlayerAPI.clearQueue();
  }
  async lyrics(uri) {
    if (!/^spotify:track:[a-zA-Z0-9]+$/.test(uri || '')) return { lines: [], synced: false };
    const body = await this.request('get', `https://spclient.wg.spotify.com/color-lyrics/v2/track/${uri.split(':')[2]}?format=json&vocalRemoval=false&market=from_token`);
    return { lines: (body.lyrics?.lines || []).map(line => ({ text: line.words, start: Number(line.startTimeMs) })),
      synced: body.lyrics?.syncType === 'LINE_SYNCED' };
  }
  next() { return this.original.next(); }
  back() { return this.original.back(); }
  repeat() { return this.S.Player.toggleRepeat(); }
  shuffle() { return this.shuffleModes.cycle(); }
  setShuffle(value) { return this.S.Platform?.ShuffleAPI && this.shuffleModes.context() ? this.shuffleModes.set(value ? 1 : 0) : this.S.Player.setShuffle(value); }
  open(uri) {
    if (!/^spotify:(track|album|artist|playlist):[a-zA-Z0-9]+$/.test(uri || '') && uri !== 'spotify:collection:tracks') throw new Error('Неизвестный адрес Spotify');
    const parts = uri.split(':');
    const path = uri === 'spotify:collection:tracks' ? '/collection/tracks' : `/${parts[1]}/${parts[2]}`;
    this.S.Platform.History.push(path);
  }
  preferences() { this.S.Platform.History.push('/preferences'); }
  async openProfile() {
    const user = await this.S.Platform?.UserAPI?.getUser?.();
    const username = user?.username || user?.uri?.replace(/^spotify:user:/, '');
    if (!username) throw new Error('Spotify не вернул профиль текущего аккаунта');
    this.S.Platform.History.push(`/user/${encodeURIComponent(username)}`);
  }
  async setArtistFollowed(uri, followed) {
    if (!/^spotify:artist:[a-zA-Z0-9]+$/.test(uri || '')) throw new Error('Некорректный исполнитель Spotify');
    const library = this.S.Platform?.LibraryAPI;
    if (!library?.add || !library?.remove) throw new Error('Эта версия Spotify не поддерживает изменение подписок');
    await library[followed ? 'add' : 'remove']({ uris: [uri] });
    this.nativeLibraryPromise = null;
  }
  play(uri) { return this.S.Player.playUri(uri); }
  pause() { return this.S.Player.pause(); }
  togglePlay() { return this.S.Player.togglePlay(); }
  seek(ms) { return this.S.Player.seek(ms); }
  volume(level) { return this.S.Player.setVolume(level); }
  async setLiked(desired, targetUri) {
    // LibraryAPI is awaitable, unlike toggleHeart, and supports explicit target state
    const uri = targetUri || this.S.Player.data?.item?.uri;
    const library = this.S.Platform.LibraryAPI;
    if (library?.add && library?.remove) {
      await library[desired ? 'add' : 'remove']({ uris: [uri] });
    } else {
      if (this.snapshot().uri !== uri) throw new Error('Трек уже изменился');
      if (this.snapshot().liked !== desired) this.original.setHeart(desired);
      for (let i = 0; i < 30; i++) {
        if (this.snapshot().liked === desired) return;
        await new Promise(r => setTimeout(r, 100));
      }
      throw new Error('Spotify не подтвердил изменение избранного');
    }
  }
  intercept(controller) {
    const p = this.S.Player;
    const route = action => controller.safe(action);
    p.next = (...args) => controller.state.active ? route(() => controller.next('skip')) : this.original.next(...args);
    p.back = (...args) => controller.state.active ? controller.seek(0) : this.original.back(...args);
    p.toggleHeart = (...args) => controller.state.active ? route(() => controller.like()) : this.original.toggleHeart(...args);
    p.setHeart = (desired) => controller.state.active
      ? (controller.state.liked !== desired && route(() => controller.like())) : this.original.setHeart(desired);
    document.addEventListener('click', event => {
      if (!controller.state.active || !(event.target instanceof Element)) return;
      const next = event.target.closest('[data-testid="control-button-skip-forward"]');
      const back = event.target.closest('[data-testid="control-button-skip-back"]');
      const heart = event.target.closest('[data-testid="now-playing-widget"] [data-testid="add-button"], [data-testid="control-button-heart"]');
      if (next || back || heart) {
        event.preventDefault(); event.stopImmediatePropagation();
        if (next) route(() => controller.next('skip'));
        if (back) controller.seek(0);
        if (heart) route(() => controller.like());
      }
    }, true);
  }
}
