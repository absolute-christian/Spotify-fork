import { R as React } from './original/vendor-ui-BwX-1h7U.js';
import ru from './ru.json';
import spotifyLogo from '../spotify-logo.svg';
import { designDatabase } from './design-database.js';
import { normalizePreset, safeMediaUrl } from './preset-codec.js';
import examples from './example-presets.json';
import { largeCoverPatch, migrateLargeCover } from './player-cover.js';
import { playbackTrack } from './playback-track.js';
import { createStateStore, selectedSnapshot, shallowEqual } from './state-store.js';
export { capCoverImage } from './player-cover.js';
export { designDatabase };
export { overlayEmit, overlayInvoke, overlayEventManager, overlaySettingsRepository, overlayStorage } from './overlay-adapter.js';

export function SpotifyLogo({ size = 60, className = '', style }) {
  return <span className={className} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: size, height: size, flexShrink: 0, ...style }}
    dangerouslySetInnerHTML={{ __html: spotifyLogo.replace('<svg ', `<svg width="${size * 2 / 3}" height="${size * 2 / 3}" fill="currentColor" `) }}/>;
}

let originalUi;
export function registerOriginalUi(value) { originalUi = value; value.CustomAssets?.getState().loadItems(); if (parent !== window) call('desktopSettings', settingsStore.getState().settings).catch(noop); }
function Button(props) { return React.createElement(originalUi.Button, props); }
const Icons = new Proxy({}, { get: (_, key) => props => React.createElement(originalUi.Icons[key], props) });

const noop = () => {};
export const Nothing = () => null;
export const noCanvas = () => null;
export const useFalse = () => false;
export const canControl = () => true;
export const nativeDesktopAvailable = true;
export const desktopPlatform = () => 'windows';
export const spotifyWindow = () => Object.fromEntries(['minimize','close','maximize','unmaximize'].map(actionName => [actionName, () => action('windowAction', actionName)]).concat([['setFullscreen', value => action('windowAction', value ? 'fullscreen' : 'exitFullscreen')]]));
export const preload = callback => callback();
export const trackOrigin = song => ({ source: 'spotify', id: song?.id });
export const coverUrl = url => typeof url === 'string' ? url : '';
let requestId = 0;
const pending = new Map();
export function call(method, ...args) {
  if (window.pywebview?.api) return window.pywebview.api.action(method, args).then(result => { if (result?.error) throw new Error(result.error); return result?.value; });
  return new Promise((resolve, reject) => {
    const id = ++requestId;
    const timeout = setTimeout(() => { pending.delete(id); reject(new Error('Нет ответа от Spotify')); }, 30000);
    pending.set(id, { resolve, reject, timeout });
    parent.postMessage({ type: 'wave-ui:request', id, method, args }, '*');
  });
}
export function action(method, ...args) {
  return call(method, ...args).catch(error => notificationStore.setState({ error: error.message }));
}
export const copyText = text => call('copyText', text);
export function createStore(initial) {
  const store = createStateStore(initial);
  function useStore(selector = value => value) {
    const cache = React.useRef({});
    const snapshot = () => selectedSnapshot(store.getState(),selector,cache.current);
    return React.useSyncExternalStore(store.subscribe,snapshot,snapshot);
  }
  Object.assign(useStore,store);
  useStore.persist = { rehydrate: async () => {}, hasHydrated: () => true };
  return useStore;
}
export const emptyStore = createStore({ items: [], friends: [], playlists: [], isInRoom: false, currentRoom: null, user: null,
  isLoading: false, isInitialized: true, isAuthenticated: false, isConnected: false, target: null, controllingDevice: null,
  load: noop, close: noop, getActiveItem: () => null, checkAccess: () => false });
export const notificationStore = createStore({ error: '', isOpen: false, add: noop, info: noop, success: noop, warn: noop });
notificationStore.error = message => notificationStore.setState({ error: String(message) });
const defaults = {
  uiSettings: { font: { family: 'Verdana', size: 16, weight: 'default' }, rounding: 'medium', visualizer: { enabled: false, style: 'wave', onSlider: false }, scale: { default: [100], maximized: [100] }, tabs: { style: 'floating', position: 'top', autohide: false }, transparency: { enabled: false, opacity: 80, glass: { blur: 6 } } },
  themeSettings: { theme: 'dark', mode: 'dark' },
  playerSettings: {
    view: { style: 'default', align: 'center', slider: 'default', avatars: true, next: true },
    cover: { position: 'left', visualizer: false, coverincover: false },
    queue: { show: true, position: 'default', expanded: false },
    visualizer: { enabled: false, onSlider: false, style: 'wave' },
    miniplayer: { enabled: true, position: 'bottom', background: 'default', progressModes: ['line'], cover: 'default', border: 'default' },
    overlay: { mode: 'disabled', position: 'top-right', opacity: .9, size: 100, w: 340, h: 58, border: 'default' },
  },
};
function savedSettings() { try { const s = JSON.parse(localStorage.getItem('forkspotify.dotify.settings.v1')); return migrateLargeCover(merge(defaults, s || {}), localStorage); } catch { return defaults; } }
function merge(a, b) { const out = { ...a }; for (const [key, value] of Object.entries(b)) { if (['__proto__', 'constructor', 'prototype'].includes(key)) continue; out[key] = value && typeof value === 'object' && !Array.isArray(value) ? merge(a?.[key] || {}, value) : value; } return out; }
function updateSettings(patch) { if (patch.playerSettings) patch = { ...patch, playerSettings: largeCoverPatch(patch.playerSettings) }; settingsStore.setState({ settings: merge(settingsStore.getState().settings, patch) }); localStorage.setItem('forkspotify.dotify.settings.v1', JSON.stringify(settingsStore.getState().settings)); if (parent !== window) call('desktopSettings', settingsStore.getState().settings).catch(error => { if (patch.playerSettings?.overlay) notificationStore.setState({ error: error.message }); }); }
export const settingsStore = createStore({ settings: savedSettings(), isLoading: false, updateSettings,
  setSettings: settings => settingsStore.setState({ settings: merge(defaults, settings) }),
  currentTheme: 'dark', customThemes: [], serviceSettings: {}, integrationSettings: {}, loadCustomThemes: async () => { const customThemes = await themeRepository.getCustomThemes(); settingsStore.setState({ customThemes }); return customThemes; } });
function localThemes() { try { return JSON.parse(localStorage.getItem('forkspotify.themes') || '[]'); } catch { return []; } }
export const themeRepository = { getCustomThemes: async () => localThemes(), saveCustomThemes: async themes => { localStorage.setItem('forkspotify.themes', JSON.stringify(themes)); settingsStore.setState({ customThemes: themes }); } };

const chosenFiles = new Map();
export function browserOpenFiles(options = {}) {
  return new Promise(resolve => {
    const input = document.createElement('input'); input.type = 'file'; input.hidden = true; input.multiple = !!options.multiple;
    input.accept = (options.filters || []).flatMap(filter => filter.extensions.map(ext => '.' + ext)).join(',');
    const finish = value => { input.remove(); resolve(value); };
    input.oncancel = () => finish(null);
    input.onchange = () => { const paths = [...input.files].map(file => { const path = crypto.randomUUID() + '/' + file.name; chosenFiles.set(path, file); return path; }); finish(options.multiple ? paths : paths[0] || null); };
    document.body.append(input); input.click();
  });
}
export const browserSaveFile = async options => options.defaultPath || 'dotify-preset.json';
export const browserDialogs = { open: browserOpenFiles, save: browserSaveFile };
export const browserFiles = {
  readTextFile: async path => { const file = chosenFiles.get(path); if (!file) throw new Error('Выберите файл ещё раз'); chosenFiles.delete(path); return file.text(); },
  readFile: async path => { const file = chosenFiles.get(path); if (!file) throw new Error('Выберите файл ещё раз'); chosenFiles.delete(path); return new Uint8Array(await file.arrayBuffer()); },
  writeTextFile: (path, value) => call('downloadFile', path, String(value)),
  writeFile: (path, bytes) => { let value = ''; for (const byte of bytes) value += String.fromCharCode(byte); return call('downloadFile', path, btoa(value), true); },
};
const presetStore = createStore({ presets: [], loading: true });
let presetLoad;
async function loadPresets() {
  if (presetLoad) return presetLoad;
  presetLoad = (async () => {
    if (!localStorage.getItem('forkspotify.example-presets.v1')) {
      for (const example of examples) await persistPreset(normalizePreset(example));
      localStorage.setItem('forkspotify.example-presets.v1', '1');
    }
    presetStore.setState({ presets: await designDatabase.presets.orderBy('timestamp').reverse().toArray(), loading: false });
  })().catch(error => { presetStore.setState({ loading: false }); notificationStore.error(error.message); }).finally(() => { presetLoad = null; });
  return presetLoad;
}
async function persistPreset(preset) {
  const old = await designDatabase.presets.where('name').equals(preset.name).first();
  const saved = { ...preset, id: old?.id || crypto.randomUUID(), timestamp: Date.now() };
  await designDatabase.presets.put(saved);
  presetStore.setState({ presets: [saved, ...presetStore.getState().presets.filter(item => item.id !== saved.id)] });
  return saved;
}
async function applyPreset(id) {
  const preset = await designDatabase.presets.get(id);
  if (!preset) throw new Error('Пресет не найден');
  const { data } = normalizePreset(preset);
  const patch = Object.fromEntries(['themeSettings', 'uiSettings', 'playerSettings'].filter(key => data[key]).map(key => [key, data[key]]));
  updateSettings(patch);
  for (const usage of ['background', 'cover', 'cursor', 'slider', 'visualizer']) {
    const state = originalUi.CustomAssets.getState(), url = data.gifs?.[usage] || '';
    await state.setAssetUsage(url || state.getActiveItem(usage)?.url || '', usage, !!url);
  }
  window.dispatchEvent(new CustomEvent('preset-applied'));
}
const presetActions = {
  loadPresets, applyPreset,
  savePreset: (name, data, thumbnail) => persistPreset(normalizePreset({ name, data: { ...data, playerSettings: data.playerSettings || settingsStore.getState().settings.playerSettings }, thumbnail })),
  deletePreset: async id => { await designDatabase.presets.delete(id); await loadPresets(); },
  updatePreset: async (id, name, data, thumbnail) => { const preset = { ...normalizePreset({ name, data, thumbnail }), id, timestamp: Date.now() }; await designDatabase.presets.put(preset); await loadPresets(); return preset; },
  importPreset: async () => {
    try {
      const path = await browserOpenFiles({ filters: [{ extensions: ['json', 'dotify', 'dotifypreset'] }] });
      if (!path) return;
      const file = chosenFiles.get(path);
      if (file?.size > 30_000_000) throw new Error('Пресет слишком большой');
      return await persistPreset(normalizePreset(JSON.parse(await browserFiles.readTextFile(path)), file.name.replace(/\.(json|dotify|dotifypreset)$/i, '')));
    } catch (error) { notificationStore.error(error.message); throw error; }
  },
  exportPreset: preset => call('downloadFile', preset.name.replace(/[^\p{L}\p{N} _-]/gu, '_') + '.dotifypreset', JSON.stringify({ ...normalizePreset(preset), version: 1 }, null, 2)),
};
export function usePresets() {
  const state = presetStore(); React.useEffect(() => { loadPresets(); }, []);
  return { ...state, ...presetActions };
}
export const getThemeGroup = id => originalUi.ThemeGroups.find(group => group.lightThemeId === id || group.darkThemeId === id)?.id || null;
let themeKeys = [];
export function applyOriginalTheme(theme) {
  const root = document.documentElement, colors = originalUi.themeVariables(theme);
  themeKeys.forEach(key => root.style.removeProperty(key));
  Object.entries(colors).forEach(([key, value]) => root.style.setProperty(key, value));
  themeKeys = Object.keys(colors); root.classList.toggle('amoled', theme.id === 'amoled');
}
function customFonts() { try { return JSON.parse(localStorage.getItem('forkspotify.fonts') || '[]'); } catch { return []; } }
export const loadCustomFonts = async () => customFonts();
export const saveCustomFont = async (name, data) => localStorage.setItem('forkspotify.fonts', JSON.stringify([...customFonts().filter(font => font.name !== name), { name, data }]));
export const removeCustomFont = async name => localStorage.setItem('forkspotify.fonts', JSON.stringify(customFonts().filter(font => font.name !== name)));
export function useAppliedSettings() {
  const ui = settingsStore(s => s.settings.uiSettings), theme = settingsStore(s => s.settings.themeSettings), customThemes = settingsStore(s => s.customThemes);
  const adaptCover = settingsStore(s => s.settings.playerSettings.cover.adaptcover);
  React.useLayoutEffect(() => {
    const root = document.documentElement, media = matchMedia('(prefers-color-scheme: light)');
    const apply = () => {
      const mode = theme.mode === 'system' ? media.matches ? 'light' : 'dark' : theme.mode;
      const group = originalUi.ThemeGroups.find(group => group.lightThemeId === theme.theme || group.darkThemeId === theme.theme);
      const id = group ? mode === 'light' ? group.lightThemeId : group.darkThemeId : theme.theme;
      const chosen = originalUi.Themes.find(item => item.id === id) || customThemes.find(item => item.id === id) || localThemes().find(item => item.id === id) || originalUi.Themes.find(item => item.id === 'dark');
      root.classList.toggle('light', mode === 'light'); root.classList.toggle('dark', mode !== 'light'); root.classList.toggle('amoled', chosen?.id === 'amoled');
      if (chosen) applyOriginalTheme(chosen);
    };
    apply(); media.addEventListener('change', apply);
    return () => { media.removeEventListener('change', apply); };
  }, [theme, customThemes, adaptCover]);
  React.useLayoutEffect(() => {
    const style = document.documentElement.style, font = ui.font;
    if (font.family === 'default') style.removeProperty('--font-family'); else style.setProperty('--font-family', JSON.stringify(font.family));
    style.setProperty('--font-weight-base', font.weight === 'default' || font.weight === 'auto' ? '400' : String(font.weight));
    document.documentElement.style.fontSize = `${Math.min(20, Math.max(12, font.size))}px`;
    const radius = { none: 0, small: 4, medium: 8, large: 16 }[ui.rounding] ?? 8;
    style.setProperty('--radius-card', `${radius}px`);
    style.setProperty('--radius-cover', `${radius ? radius + 4 : 0}px`);
    style.setProperty('--radius-button', `${radius ? radius + 4 : 0}px`);
    style.setProperty('--radius-input', `${radius}px`);
  }, [ui]);
}
export const useSettings = () => settingsStore();
export const useCoverSettings = () => [settingsStore(s => s.settings.playerSettings.cover), value => updateSettings({ playerSettings: { cover: value } })];
export const useViewSettings = () => [settingsStore(s => s.settings.playerSettings.view), value => updateSettings({ playerSettings: { view: value } })];
export const useQueueSettings = () => [settingsStore(s => s.settings.playerSettings.queue), value => updateSettings({ playerSettings: { queue: value } })];
export const usePlayerSettings = () => [settingsStore(s => s.settings.playerSettings), value => updateSettings({ playerSettings: value })];
export const useUiSettings = () => [settingsStore(s => s.settings.uiSettings), value => updateSettings({ uiSettings: value })];
export const windowStore = createStore({ isFocused: true, isMinimized: false, shouldShowTrackCovers: true, shouldShowCoverArt: true, registerResource: () => noop });
export const inventoryStore = createStore({ items: [], getActiveItem: () => null, is_active: false });
export const audioStore = createStore({ analyser: null, audioRef: { current: null }, isLoading: false });
export const timeStore = createStore({ currentTime: 0, setCurrentTime: value => timeStore.setState({ currentTime: value }) });
export const useTime = () => timeStore(s => s.currentTime);
export const clock = { getSmoothTime: () => timeStore.getState().currentTime, subscribe: fn => timeStore.subscribe(s => fn(s.currentTime)),
  subscribeThrottled: (fn, interval = 100) => { let previous = 0; return timeStore.subscribe(s => { const now = performance.now(); if (now - previous >= interval) { previous = now; fn(s.currentTime); } }); } };
export const audioEngine = { audioRef: { current: null }, getCurrentTime: clock.getSmoothTime, getSmoothTime: clock.getSmoothTime };
export const statsStore = createStore({ totalTracksPlayed: 0, totalListeningTime: 0, topTracks: [], topArtists: [], isLoading: false, refreshStats: noop });
export const panelStore = createStore({ panel: null, width: 480, setPanel: panel => panelStore.setState({ panel }), openPanel: panel => panelStore.setState({ panel }), closePanel: () => panelStore.setState({ panel: null }) });
export const navigationStore = createStore({ activeTab: 'home', isSettingsDialogOpen: false, lastSettingsTab: 'player.view',
  setLastSettingsTab: value => { const [category, sub] = value.split('.'); navigationStore.setState({ lastSettingsTab: value }); settingsRoute.setState({ category, sub }); },
  setActiveTab: activeTab => navigationStore.setState(activeTab === 'settings' ? { isSettingsDialogOpen: true } : { activeTab, isSettingsDialogOpen: false }),
  setIsSettingsDialogOpen: value => navigationStore.setState({ isSettingsDialogOpen: value }),
  setSettingsDialogOpen: value => navigationStore.setState({ isSettingsDialogOpen: value }),
  setIsProfileDialogOpen: () => openAccount(),
  toggleProfileNav: () => action('openProfile'),
  setProfileNavTab: value => navigationStore.getState().setActiveTab(value),
  selectProfileTab: value => navigationStore.getState().setActiveTab(value),
  toLibraryHub: () => { selectCollection(null); navigationStore.getState().setActiveTab('library'); },
  openPlaylistView: item => { selectCollection(toCollection(item)); navigationStore.getState().setActiveTab('library'); },
  openProfile: () => openAccount() });
function openAccount() { settingsRoute.setState({ category: 'profile', sub: 'account' }); navigationStore.getState().setSettingsDialogOpen(true); }
let profileButton;
document.addEventListener('pointerdown', event => { if (!event.target.closest('[data-wave-profile-button]')) parent.postMessage({ type: 'wave-ui:dismiss-profile' }, '*'); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') parent.postMessage({ type: 'wave-ui:dismiss-profile' }, '*'); });
window.addEventListener('message', event => { if (event.source === parent && event.data?.type === 'wave-ui:profile-closed') profileButton?.focus({ preventScroll: true }); });
export const useActiveTab = () => navigationStore(s => s.activeTab);
export const searchOverlayStore = createStore({ open: false, focusRequest: 0, close: () => searchOverlayStore.setState({ open: false }),
  toggle: () => searchOverlayStore.setState(s => ({ open: !s.open, focusRequest: s.focusRequest + 1 })) });
export const useNavigation = () => {
  const page = navigationStore(s => s.activeTab), tabs = settingsStore(s => s.settings.uiSettings.tabs);
  return { activeTab: page, setActiveTab: navigationStore.getState().setActiveTab, tabsPosition: tabs.position, autohide: tabs.autohide,
    isVertical: ['left', 'right'].includes(tabs.position), isProfileNav: true,
    groups: [[{ id: 'home' }], [{ id: 'player' }, { id: 'search' }, { id: 'library' }], [{ id: 'settings' }]], socialTabs: [] };
};
export function t(key, vars = {}) {
  if (key === 'settings.overlay.mode.description') return 'Отдельное окно поверх приложений · показать или скрыть: Alt + K';
  const value = key.split('.').reduce((o, name) => o?.[name], ru);
  let text = typeof value === 'string' ? value : ({ 'common.tabs.profile': 'Аккаунт' }[key] || key.split('.').at(-1));
  for (const [name, val] of Object.entries(vars)) text = text.replaceAll(`{{${name}}}`, String(val)).replaceAll(`{${name}}`, String(val));
  return text;
}
export const useTranslation = () => ({ t, currentLanguage: 'ru', language: 'ru', changeLanguage: noop });
export const accountStore = createStore({ user: null, isAuthenticated: false, isLoadingAuth: false, accessToken: null });
export const remoteStore = emptyStore;
export const sourcesStore = createStore({ selectedSources: ['spotify'], selectedSource: 'spotify', effectiveSources: ['spotify'] });
export const libraryStore = createStore({ playlists: [], songs: [], isLoading: false });
export const historyStore = createStore({ playbackHistory: [], recentItems: [], addToHistory: noop });
export const cacheStore = createStore({ songs: [], cachedIds: new Set(), isLoading: false });
export const favoriteStore = createStore({ favorites: new Set(), songs: [], isLoading: false, isInitialized: true, isLoadingPage: false, total: 0,
  loadFavorites: async () => {}, loadFavoritesPage: async () => {}, loadMoreFavorites: async () => {}, hasMore: false, isLoadingMore: false, triggerUpdate: noop, toggleFavorite: song => toggleFavorite(song) });
export const dislikeStore = createStore({ unfavorites: new Set(), unfavoritesTypes: new Map(), isLoading: false });
export const waveStore = createStore({ waveSettings: {}, lastRefillCount: null, settings: { mood: 'default' }, waveLoading: false, waveRefillLoading: false,
  loadSettings: noop, generateMyWave: async () => {
    if (waveStore.getState().waveLoading) return;
    waveStore.setState({ waveLoading: true });
    try { return await action('startWave'); } finally { waveStore.setState({ waveLoading: false }); }
  }, setMood: noop, setWaveLoading: waveLoading => waveStore.setState({ waveLoading }), isLoading: false, activeWave: null });
export const lyricsStore = createStore({ songId: '', lines: [], isSynced: false, isLoading: false, annotations: [], error: null,
  currentLyricIndex: -1, displayIndex: -1, translation: [], fetchLyrics: song => loadLyrics(song), loadLyrics: song => loadLyrics(song), setDisplayIndex: index => lyricsStore.setState({ displayIndex: index }), setCurrentLyricIndex: index => lyricsStore.setState({ currentLyricIndex: index }) });
export function useHasLyrics() {
  const song = playerStore(s => s.currentSong), lyrics = lyricsStore();
  React.useEffect(() => { if (song) loadLyrics(song); }, [song?.id]);
  return !!song && lyrics.songId === song.id && lyrics.lines.length > 0;
}
let lyricGeneration = 0;
export async function loadLyrics(song) {
  if (!song?.id || song.id !== playerStore.getState().currentSong?.id || lyricsStore.getState().songId === song.id) return;
  const generation = ++lyricGeneration;
  lyricsStore.setState({ songId: song.id, lines: [], isLoading: true, error: null });
  try {
    const data = await call('lyrics', song.id);
    if (generation !== lyricGeneration || playerStore.getState().currentSong?.id !== song.id) return;
    lyricsStore.setState({ isLoading: false, isSynced: data.synced, lines: data.lines.map(line => ({ time: line.start / 1000, text: line.text, words: [] })) });
  } catch (error) { if (generation === lyricGeneration) lyricsStore.setState({ isLoading: false, error: error.message }); }
}
export const noDotifySession = { hasSavedSession: () => false, getAccessToken: () => null, getRefreshToken: () => null, getUserId: () => null };
export const unsupportedAction = async () => { throw new Error('Действие недоступно в Spotify'); };
export const unsupportedNativeApi = new Proxy({ info: noop, warn: noop, error: (message, error) => { if (/^\[(coverColor|ThemeAutomation)\]/.test(message)) console.error(message, error?.message || ''); }, debug: noop }, { get: (o, key) => o[key] || unsupportedAction });
export const unsupportedDatabase = new Proxy({}, { get: () => ({ get: async () => null, toArray: async () => [], put: unsupportedAction, add: unsupportedAction }) });
export const unsupportedRealtime = { connected: false, isConnected: () => false, subscribe: () => noop, on: () => noop, connect: noop };
export const unsupportedAudio = {};
const absentRepository = { list: async () => [], search: async () => [], get: async () => null, add: unsupportedAction, remove: unsupportedAction, update: unsupportedAction };
export const unsupportedLibraryFactory = () => ({ locals: absentRepository, playlists: absentRepository, favorites: absentRepository, unfavorites: absentRepository, albums: absentRepository, subscriptions: absentRepository, history: absentRepository });
export const unsupportedLibrary = unsupportedLibraryFactory();
export const nativeCache = { get: async () => null, set: async () => {}, subscribe: () => noop, getRevision: () => 0, revision: 0 };
export const readTrackSettings = async () => null;
export const writeTrackSettings = unsupportedAction;
export const useAccess = () => ({ checkAccess: () => true, showPremiumDialog: () => notificationStore.setState({ error: 'Эта возможность ограничена текущим аккаунтом Spotify' }), isInfinityLevel: false, isPremium: false });
export const formatTime = seconds => `${Math.floor(Math.max(0, seconds || 0) / 60)}:${String(Math.floor(Math.max(0, seconds || 0) % 60)).padStart(2, '0')}`;
const actions = {
  toggle: () => action('toggle'), next: () => action('next'), prev: () => action('back'),
  play: song => action('play', typeof song === 'string' ? song : song?.id),
  playFromList: (song, songs = []) => action('playFromList', typeof song === 'string' ? song : song?.id, songs.map(item => typeof item === 'string' ? item : item?.id)),
  seek: seconds => action('seek', seconds * 1000),
  setVolume: value => action('volume', Array.isArray(value) ? value[0] : value),
  setIsMuted: value => action('volume', value ? 0 : .65),
  toggleFavorite: song => toggleFavorite(song), toggleRepeatMode: () => action('repeat'), toggleShuffle: () => action('shuffle'),
  handleSeek: values => timeStore.setState({ currentTime: values[0] }), handleSeekStart: () => playerStore.setState({ isSeeking: true }),
  handleSeekEnd: values => { playerStore.setState({ isSeeking: false }); action('seek', values[0] * 1000); },
  formatTime, formatTimeDetailed: formatTime, updateSettings, t,
  setIsPlayerPortalOpen: value => { playerStore.setState({ isPlayerPortalOpen: value }); if (value) loadLyrics(playerStore.getState().currentSong); },
  setShowLyrics: value => { playerStore.setState({ showLyrics: value }); if (value) { panelStore.setState({ panel: 'lyrics' }); loadLyrics(playerStore.getState().currentSong); } },
};
export const playerStore = createStore({ currentSong: null, queueSongs: [], duration: 0, isPlaying: false, isLoading: false, isLoadingAudio: false,
  isSeeking: false, volume: .65, isMuted: false, repeatMode: 'none', isShuffled: false, shuffleType: 'none', isPlayerPortalOpen: false,
  showLyrics: false, isSimilarTracksLoading: false, similarTracks: [], shuffledIndices: [], currentShuffleIndex: 0, playbackSpeed: 1,
  fromplaylist: '', playlistTitle: '', queueSource: '', queueSourceType: '', queueContext: null,
  ...actions, setIsSeeking: isSeeking => playerStore.setState({ isSeeking }), cycleRepeatMode: actions.toggleRepeatMode,
  cycleShuffleModeSimple: actions.toggleShuffle, clearQueue: () => action('clearQueue'), removeFromQueue: id => { const song = playerStore.getState().queueSongs.find(s => s.id === id); return action('removeQueue', song?.uid); },
  setShowQueue: value => panelStore.setState({ panel: value ? 'queue' : null }),
});
export function usePlayerData() {
  const state = playerStore(), settings = settingsStore(s => s.settings.playerSettings);
  return { ...state, coverSettings: settings.cover, playerCustomSettings: { playerStyle: settings.view.style, titleAlignment: settings.view.align,
    sliderType: settings.view.slider, showQueue: settings.queue.show, showNextTrack: settings.view.next, showAvatars: settings.view.avatars },
    playerLayout: settings.queue.position, showVisualizer: false, statMode: 'none', isStatsLoading: false, listeningStats: null, currentLanguage: 'ru', audioRef: audioEngine.audioRef };
}
export const usePlayerActions = () => actions;
export const usePlayerBundle = () => ({ data: usePlayerData(), actions });
export function useFavorite(song) {
  const favorites = favoriteStore(s => s.favorites);
  return { isFavorite: favorites.has(song?.id), toggleLike: () => toggleFavorite(song),
    handleToggleLike: () => toggleFavorite(song), handleToggleUnfavorite: () => action('dislike', song?.id),
    handlePlayNext: unsupportedAction, handleAddToQueue: () => action('enqueue', song?.id),
    handleLoadSimilarTracks: () => action('startWave'), handleShare: () => action('share', song?.id) };
}
export const useFavoriteActions = () => ({ toggleFavorite });
export const useDislike = () => ({ toggleUnfavorite: id => action('dislike', id) });
export function PlaylistAction({ song, trigger, children }) { return <span onClick={event => { event.stopPropagation(); playlistPicker.setState({ song }); }}>{trigger ? trigger(null, false) : children}</span>; }
export function TrackMenuTrigger({ song, children, className }) { return <span className={className} onContextMenu={event => openTrackMenu(event, song)}>{children}</span>; }
const menuStore = createStore({ menu: null });
export function openTrackMenu(event, song) { event.preventDefault(); event.stopPropagation(); menuStore.setState({ menu: { song, x: Math.min(event.clientX, innerWidth - 260), y: Math.max(8, Math.min(event.clientY, innerHeight - 330)) } }); }
export function TrackMenu({ song }) { return <MenuContent song={song}/>; }
function MenuContent({ song, onClose = noop }) {
  const liked = favoriteStore(s => s.favorites.has(song?.id)), player = playerStore();
  const select = method => { if (method === 'like') toggleFavorite(song); else if (method === 'playlist') playlistPicker.setState({ song }); else action(method, song?.id); onClose(); };
  return <div className="min-w-[248px] rounded-xl bg-overlay border border-border-subtle p-1 shadow-lg" role="menu">
    <div className="flex items-center gap-3 p-3"><span className="min-w-0"><b className="block truncate text-sm">{song?.title}</b><span className="text-xs text-muted-foreground">{song?.artist}</span></span></div>
    {[[!player.waveActive && 'enqueue','В очередь',Icons.addToQueue],['playlist','Добавить в плейлист',Icons.addToQueue],['like',liked ? 'Убрать из избранного' : 'Добавить в избранное',Icons.like],[player.waveActive && player.currentSong?.id === song?.id && 'dislike','Не интересно',Icons.dislike],['share','Поделиться',Icons.share]].filter(([method]) => method).map(([method,label,Icon]) => <button key={label} role="menuitem" type="button" className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent" onClick={() => select(method)}><Icon className="h-4 w-4"/>{label}</button>)}
  </div>;
}
export function FloatingTrackMenu() {
  const menu = menuStore(s => s.menu);
  React.useEffect(() => { if (!menu) return; const close = () => menuStore.setState({ menu: null }); document.addEventListener('click', close); return () => document.removeEventListener('click', close); }, [menu]);
  return menu && <div className="fixed z-[9999999]" style={{ left: menu.x, top: menu.y }}><MenuContent song={menu.song} onClose={() => menuStore.setState({ menu: null })}/></div>;
}
const playlistPicker = createStore({ song: null });
export function PlaylistPicker() {
  const song = playlistPicker(s => s.song), [items, setItems] = React.useState([]), [loading, setLoading] = React.useState(false), [saving, setSaving] = React.useState(false);
  React.useEffect(() => {
    if (!song) return;
    let live = true; setLoading(true); setItems([]);
    call('writablePlaylists').then(items => { if (live) setItems(items); }).catch(error => { if (live) notificationStore.setState({ error: error.message }); }).finally(() => { if (live) setLoading(false); });
    const escape = event => { if (event.key === 'Escape') playlistPicker.setState({ song: null }); };
    addEventListener('keydown', escape);
    return () => { live = false; removeEventListener('keydown', escape); };
  }, [song?.id]);
  if (!song) return null;
  return <div className="fixed inset-0 z-[9999999] flex items-center justify-center bg-black/60 p-4" onClick={() => { if (!saving) playlistPicker.setState({ song: null }); }}><div role="dialog" aria-modal="true" aria-label="Добавить в плейлист" className="surface-overlay rounded-xl p-5 w-full max-w-md" onClick={event => event.stopPropagation()}><div className="flex items-center justify-between gap-3 mb-4"><h3 className="font-semibold">Добавить в плейлист</h3><Button disabled={saving} variant="quiet" size="icon" aria-label="Закрыть" onClick={() => playlistPicker.setState({ song: null })}><Icons.close/></Button></div><p className="text-sm text-muted-foreground mb-3">{song.title}</p><div className="max-h-80 overflow-y-auto">{loading ? <p>Загрузка…</p> : !items.length ? <p className="text-sm text-muted-foreground">Нет плейлистов с доступом для добавления</p> : items.map(item => <Button key={item.uri} disabled={saving} variant="quiet" className="w-full justify-start" onClick={async () => { setSaving(true); try { await call('addToPlaylist', song.id, item.uri); playlistPicker.setState({ song: null }); } catch (error) { notificationStore.setState({ error: error.message }); } finally { setSaving(false); } }}>{item.title}</Button>)}</div></div></div>;
}
export function NativeAudioButton({ className }) { return <Button variant="ghost" size="icon" className={className} aria-label="Настройки аудио Spotify" onClick={() => action('preferences')}><Icons.equalizer className="h-4 w-4"/></Button>; }
export function SpotifyAudioSettings() { return <Button variant="quiet" onClick={() => action('preferences')}>Открыть настройки аудио Spotify</Button>; }
const nativeAudioStore = createStore({ loaded: false, loading: true, devices: [], device: 'default', quality: 0, maxQuality: 0, normalization: false, gapless: false, crossfade: false });
const qualityKeys = ['auto', 'low', 'medium', 'high', 'veryhigh', 'max'];
const qualityTitles = ['Автоматически', 'Низкое', 'Среднее', 'Высокое', 'Очень высокое', 'Без потерь'];
export function audioQualityCards() { return qualityKeys.map((key,index) => ({ key, title: qualityTitles[index], numeric: '', icon: originalUi.Icons[index === 5 ? 'wave' : index > 2 ? 'qualityHigh' : index === 2 ? 'qualityMedium' : 'qualityLow'] })); }
export function useSpotifyAudioBundle() {
  const audio = nativeAudioStore(), scroll = React.useRef(null);
  React.useEffect(() => { let live = true;
    nativeAudioStore.setState({ loading: true });
    const load = async () => { try { const value = await call('audioSettings'); if (live) nativeAudioStore.setState({ ...value, loaded: true, loading: false }); } catch (error) { if (live) { nativeAudioStore.setState({ loaded: false, loading: false }); notificationStore.setState({ error: error.message }); } } };
    load(); return () => { live = false; };
  }, []);
  const save = async patch => {
    if (!audio.loaded || audio.loading) return;
    nativeAudioStore.setState({ loading: true });
    try { const value = await call('updateAudioSettings', patch); nativeAudioStore.setState({ ...value, loading: false }); }
    catch (error) { nativeAudioStore.setState({ loading: false }); notificationStore.setState({ error: error.message }); }
  };
  return { audioDataValue: { audioDevices: audio.devices, activeDeviceId: audio.device, gaplessEnabled: audio.gapless, crossfadeEnabled: audio.crossfade, normalizationEnabled: audio.normalization, hasLosslessAccess: audio.maxQuality >= 5, currentAudioQuality: qualityKeys[audio.quality] || 'auto', playerSettings: {}, loading: audio.loading || !audio.loaded },
    audioActionsValue: { updatePlayerSettings: patch => save(patch), handleDeviceChange: device => save({ device }), handleAudioQualityChange: quality => save({ quality }), cardsScrollRef: scroll } };
}
export function LyricsToggle({ className }) {
  const show = panelStore(s => s.panel !== null), hasLyrics = useHasLyrics();
  return <Button variant="ghost" size="icon" className={className} aria-label={hasLyrics ? 'Текст песни' : 'Очередь'} aria-pressed={show} onClick={() => panelStore.setState({ panel: show ? null : hasLyrics ? 'lyrics' : 'queue' })}>{hasLyrics ? <Icons.lyrics className="h-4 w-4"/> : <Icons.sidebar className="h-4 w-4"/>}</Button>;
}
export const TabTrigger = React.forwardRef(({ value, children, ...props }, ref) => <button {...props} ref={ref} type="button" onClick={() => navigationStore.getState().setActiveTab(value)}>{children}</button>);
export function SearchTrigger(props) { return <button type="button" className={props.className} aria-label={props.label || 'Поиск'} onClick={() => searchOverlayStore.getState().toggle()}><Icons.search className={props.iconClassName}/></button>; }
export function MiniVolume() { return <Button variant="ghost" size="icon" aria-label="Громкость" onClick={() => playerStore.getState().setIsMuted(!playerStore.getState().isMuted)}><Icons.volume className="h-4 w-4"/></Button>; }
export function MiniTrackTitle({ currentSong }) { return <span className="min-w-0"><span className="block truncate text-sm">{currentSong?.title}</span><span className="block truncate text-xs text-muted-foreground">{currentSong?.artist}</span></span>; }
export function toSong(track) { return track ? { ...track, id: track.uri, source: 'spotify', cover_art: track.cover || '', duration: track.duration / 1000,
  artists: (track.artists || [track.artist]).map(artist => typeof artist === 'string' ? { name: artist } : artist), fromplaylist: track.contextName || '' } : null; }
const homeStore = createStore({ loading: true, recent: [], albums: [], playlists: [], initialized: false, failed: false });
export function useHomeBundle() {
  const home = homeStore();
  React.useEffect(() => { if (homeStore.getState().initialized && !homeStore.getState().failed) return; let live = true; call('home').then(data => { if (live) { homeStore.setState({ recent: Array.isArray(data?.recent) ? data.recent : [], albums: Array.isArray(data?.albums) ? data.albums : [], playlists: Array.isArray(data?.playlists) ? data.playlists : [], failed: !!data?.failed, loading: false, initialized: true }); if (data?.failed) notificationStore.setState({ error: data.error || 'Не удалось загрузить библиотеку Spotify' }); } }).catch(error => { if (live) { homeStore.setState({ loading: false, initialized: true, failed: true }); notificationStore.setState({ error: error.message }); } }); return () => { live = false; }; }, []);
  return { homeDataValue: { musicSource: 'spotify', effectiveSource: 'spotify', source: 'spotify', availableSources: ['spotify'], recentlyPlayedTracks: home.recent.map(toSong),
    subscribedArtists: [], mixPlaylists: [], isLoadingMixPlaylists: home.loading, isLoadingPersonalized: home.loading, isLoadingNiche: false, isLoadingCharts: false,
    forYouTracks: home.recent.map(toSong), daypart: 'Добрый день', nicheTracks: [], charts: { tracks: [], playlists: home.playlists.map(toCollection), albums: home.albums.map(toCollection), artists: [] },
    favoriteSongs: [], baseSimilarTrack: null, isLoadingSimilar: false, similarTracks: [], similarArtists: [], openMixId: null, selectedArtist: null, isInitialized: home.initialized, user: null },
    homeActionsValue: { setMusicSource: noop, setOpenMixId: noop, setSelectedPlaylist: item => action('open', item.uri || item.id), setSelectedAlbum: item => action('open', item.uri || item.id),
      setSelectedArtist: item => action('open', item.uri || item.id), play: actions.play, toggle: actions.toggle, playPlaylist: item => action('playCollection', item.uri || item.id),
      handleArtistClick: item => action('open', item.uri || item.id), handleLoadSimilarTracks: noop, setBaseSimilarTrack: noop, setQueueSongs: noop, setQueue: noop,
      openArtistModal: item => action('open', item.uri || item.id), loadNicheSection: noop, loadChartsSection: noop, reloadForYou: noop } };
}
export function toCollection(item) { return { ...item, id: item.uri || item.id, title: item.title, name: item.title, cover_art: item.cover || item.cover_art, avatar_url: item.cover || item.avatar_url, avatar: item.cover || item.avatar, tracks: item.tracks || [], source: 'spotify', author: item.artist || item.author, tracks_count: item.count || item.tracks_count || 0 }; }
const searchStore = createStore({ query: '', debounced: '', type: 'all', loading: false, results: {}, error: null, searchHistory: [] });
let searchTimer, searchGeneration = 0;
function querySearch(patch) {
  searchStore.setState({ ...patch, error: null }); clearTimeout(searchTimer);
  const generation = ++searchGeneration;
  searchTimer = setTimeout(async () => {
    const s = searchStore.getState(); if (!s.query.trim()) { searchStore.setState({ results: {}, loading: false, debounced: '', error: null }); return; }
    searchStore.setState({ loading: true, debounced: s.query });
    navigationStore.getState().setActiveTab('search');
    try { const result = await call('catalog', s.query.trim(), { all: 'all', tracks: 'track', artists: 'artist', albums: 'album', playlists: 'playlist' }[s.type] || 'all'); if (generation === searchGeneration) searchStore.setState({ results: result, loading: false, error: null }); }
    catch (error) { if (generation === searchGeneration) { searchStore.setState({ loading: false, results: {}, error: error.message }); notificationStore.setState({ error: error.message }); } }
  }, 500);
}
function catalogTrack(item) { return toSong({ uri: item.uri, title: item.name, artist: item.artists?.map(a => a.name).join(', ') || '', duration: item.duration_ms || 0, cover: item.album?.images?.[0]?.url || '' }); }
function catalogCollection(item) { return toCollection({ uri: item.uri, title: item.name, artist: item.owner?.display_name || item.artists?.map(a => a.name).join(', ') || '', cover: item.images?.[0]?.url || '', type: item.type }); }
export function useSearchBundle() {
  const s = searchStore(), input = React.useRef(null);
  const songs = (s.results.tracks?.items || []).map(catalogTrack), albums = (s.results.albums?.items || []).map(catalogCollection), playlists = (s.results.playlists?.items || []).filter(Boolean).map(catalogCollection), artists = (s.results.artists?.items || []).map(catalogCollection);
  return { searchInputRef: input, searchDataValue: { searchQuery: s.query, debouncedSearchQuery: s.debounced, searchType: s.type, musicSource: 'spotify', effectiveSource: 'spotify', availableSources: ['spotify'], searchHistory: s.searchHistory,
    loading: s.loading, playlistsLoading: false, albumsLoading: false, artistsLoading: false, songs, albums_results: albums, playlists_results: playlists, artists_results: artists,
    topMatch: songs[0] ? { item: songs[0], type: 'track' } : artists[0] ? { item: artists[0], type: 'artist' } : albums[0] ? { item: albums[0], type: 'album' } : playlists[0] ? { item: playlists[0], type: 'playlist' } : null, totalSongs: songs.length, totalAlbums: albums.length, totalArtists: artists.length, totalPlaylists: playlists.length, hasMore: false, error: s.error,
    searchCompleted: !!s.debounced && !s.loading, loadingMore: false, networkError: !!s.error },
    searchActionsValue: { setSearchQuery: query => querySearch({ query }), setDebouncedSearchQuery: noop, setSearchType: type => querySearch({ type }), setMusicSource: noop,
      clearAllResults: () => searchStore.setState({ results: {} }), play: actions.play, handlePlaySong: actions.play, onPlaySong: actions.play,
      handlePlayPlaylist: item => action('playCollection', item.uri || item.id), handleArtistClick: item => action('open', item.uri || item.id), handleAlbumClick: item => action('open', item.uri || item.id),
      onSongSelect: actions.play, onLoadSimilarTracks: () => action('startWave'), handleSelectArtist: item => action('open', item.uri || item.id), handleSelectItem: item => action('open', item.uri || item.id),
      handleRetry: () => querySearch({}), handleLoadMore: noop, setLoadMoreSentinel: noop,
      onToggleLike: song => action('like', song.id), loadMore: noop, loadMoreSongs: noop, removeFromSearchHistory: noop, clearSearchHistory: noop, addToSearchHistory: noop } };
}
const libraryView = createStore({ loaded: false, loading: true, playlists: [], albums: [], artists: [], selectedPlaylist: null, detailLoading: false, query: '' });
export function useArtistSubscription(id, source) {
  const library = libraryView();
  const uri = String(id).startsWith('spotify:artist:') ? String(id) : `spotify:artist:${id}`;
  React.useEffect(() => { if (!library.loaded) refreshLibrary(); }, [library.loaded]);
  const isSubscribed = source === 'spotify' && library.artists.some(artist => artist.id === uri);
  return { isSubscribed, isLoading: library.loading, isChecking: library.loading,
    toggleSubscription: async () => {
      if (source !== 'spotify') throw new Error('Исполнитель недоступен в Spotify');
      await call('followArtist', uri, !isSubscribed); await refreshLibrary();
      return { isSubscribed: !isSubscribed };
    } };
}
export const libraryHubStore = createStore({ jobs: {}, isInitialized: true });
export const artistNavigationStore = createStore({ openArtistModal: id => action('open', id) });
export function useSavedAlbums() { return libraryView(s => s.albums); }
let libraryRequest, detailGeneration = 0;
async function refreshLibrary() {
  if (libraryRequest) return libraryRequest;
  libraryRequest = Promise.allSettled([...['playlist', 'track', 'album', 'artist'].map(type => call('library', type)), call('writablePlaylists')]).then(results => {
    const names = ['playlists', 'favorites', 'albums', 'artists'], patch = { loading: false, loaded: true };
    const writable = new Set(results[4].status === 'fulfilled' ? results[4].value.map(item => item.uri) : []);
    results.slice(0, 4).forEach((result, i) => {
      if (result.status === 'fulfilled') {
        const items = result.value.map(i === 1 ? toSong : toCollection);
        if (i === 1) favoriteStore.setState({ songs: items, favorites: new Set(items.map(item => item.id)), total: items.length });
        else patch[names[i]] = i === 0 ? items.map(item => ({ ...item, writable: writable.has(item.id) })) : items;
      } else notificationStore.setState({ error: result.reason.message });
    });
    libraryView.setState(patch); libraryStore.setState({ playlists: libraryView.getState().playlists, isInitialized: true });
  }).finally(() => { libraryRequest = null; });
  return libraryRequest;
}
export async function selectCollection(item) {
  const generation = ++detailGeneration;
  libraryView.setState({ selectedPlaylist: item, query: '', detailLoading: !!item && item.id !== 'favorites' });
  if (!item || item.id === 'favorites') return;
  try {
    const tracks = (await call('collection', item.uri || item.id)).map(toSong);
    if (generation === detailGeneration) {
      const updated = { ...item, tracks, tracks_count: tracks.length, count: tracks.length };
      const playlists = libraryView.getState().playlists.map(playlist => playlist.id === item.id ? { ...playlist, count: tracks.length, tracks_count: tracks.length } : playlist);
      libraryView.setState({ selectedPlaylist: updated, playlists, detailLoading: false }); libraryStore.setState({ playlists });
    }
  } catch (error) { if (generation === detailGeneration) { libraryView.setState({ detailLoading: false }); notificationStore.setState({ error: error.message }); } }
}
export async function toggleFavorite(song) {
  const id = typeof song === 'string' ? song : song?.id;
  if (!id) return;
  try {
    const liked = await call('like', id), state = favoriteStore.getState(), favorites = new Set(state.favorites);
    liked ? favorites.add(id) : favorites.delete(id);
    const songs = state.songs.filter(s => s.id !== id);
    if (liked && typeof song !== 'string') songs.unshift(song);
    favoriteStore.setState({ favorites, songs, total: favorites.size });
  } catch (error) { notificationStore.setState({ error: error.message }); }
}
export const queueCollection = (_, item, filtered) => action('enqueueMany', (filtered?.length ? filtered : item.tracks || []).map(song => song.id));
async function removeCollectionSong(playlistId, song) {
  if (playlistId === 'favorites') return toggleFavorite(song);
  const current = libraryView.getState().selectedPlaylist;
  if (current?.id !== playlistId || !current.writable) return notificationStore.setState({ error: 'Нет прав на изменение плейлиста' });
  try { await call('removeFromPlaylist', typeof song === 'string' ? song : song.id, playlistId); if (libraryView.getState().selectedPlaylist?.id === playlistId) await selectCollection(current); }
  catch (error) { notificationStore.setState({ error: error.message }); }
}
export function useLibraryBundle() {
  const s = libraryView(), likes = favoriteStore();
  React.useEffect(() => { refreshLibrary(); }, []);
  const favorites = { id: 'favorites', title: 'Любимые', tracks: likes.songs, source: 'spotify', tracks_count: likes.favorites.size, length: { tracks: likes.favorites.size }, author: 'Spotify' };
  const selected = s.selectedPlaylist?.id === 'favorites' ? favorites : s.selectedPlaylist;
  const playCollection = (item, shuffle) => action('playCollection', item.id === 'favorites' ? 'spotify:collection:tracks' : item.uri || item.id, shuffle);
  return { libraryDataValue: { selectedPlaylist: selected, filteredPlaylistSongs: (selected?.tracks || []).filter(song => (song.title + ' ' + song.artist).toLowerCase().includes(s.query.toLowerCase())), isLoading: s.loading, isPlaylistLoading: s.detailLoading, isRefreshing: false, searchQuery: s.query, sortMode: 'default',
    playlists: s.playlists, premiumLevel: 0, isOffline: false, favoritesPlaylist: favorites, offlinePlaylist: null, loadingFavorites: s.loading, favoritesCount: likes.favorites.size, localSongsCount: 0, user: null },
    libraryActionsValue: { setSelectedPlaylist: selectCollection, setSearchQuery: query => libraryView.setState({ query }),
      onPlaySong: actions.play, onQueueSong: song => action('enqueue', song.id), handlePlayNext: unsupportedAction, onToggleLike: toggleFavorite,
      handlePlayPlaylist: playCollection, handleSortClick: undefined,
      handleRemoveSong: removeCollectionSong, handleRemoveTracksBatch: unsupportedAction, updatePlaylistOrder: unsupportedAction,
      onReloadPlaylist: () => selectCollection(s.selectedPlaylist), onRenamePlaylist: undefined,
      onDeletePlaylist: undefined, onChangeIcon: undefined, onDragEnd: noop, handleExportPlaylist: undefined, handleRefreshPlaylist: () => selectCollection(s.selectedPlaylist) } };
}
export function PlaylistShuffleButton({ playlist, disabled }) {
  const uri = playlist.id === 'favorites' ? 'spotify:collection:tracks' : playlist.uri || playlist.id;
  const playingType = playerStore(s => s.shuffleType), [state,setState] = React.useState({mode:0}), [busy,setBusy] = React.useState(false);
  React.useEffect(()=>{let live=true;call('shuffleState',uri).then(value=>{if(live)setState(value)}).catch(()=>{});return()=>{live=false};},[uri,playingType]);
  const label = state.mode===2 ? 'Smart Shuffle: рекомендации Spotify' : state.mode===1 ? 'Обычное перемешивание' : 'Перемешивание выключено';
  const Shuffle = originalUi.Shuffle;
  const cycle = async () => {
    if (busy) return;
    setBusy(true);
    try { setState(await call('cycleCollectionShuffle',uri)); }
    catch (error) { notificationStore.setState({error:error.message}); }
    finally { setBusy(false); }
  };
  return <span role="group" aria-label={label} title={label}><Shuffle isShuffled={state.mode!==0} shuffleType={state.mode===2?'smart':state.mode===1?'normal':'none'} disabled={disabled||busy} className="h-9 w-9" iconClassName="h-4 w-4" onClick={cycle}/></span>;
}
export function LibraryHub({ onOpen }) {
  const s = libraryView(), [section, setSection] = React.useState('all');
  const Sections = originalUi.LibrarySections, Tabs = originalUi.SectionTabs;
  return <div className="relative flex h-full min-h-0 flex-col"><div className="overflow-y-auto h-full"><div className="page-container min-h-full flex-1 pb-16"><div className="mb-5"><Tabs tabs={['all','playlists','albums','artists'].map(id => ({ id, label: t(id === 'all' ? 'common.all' : 'library.hub.' + id) }))} active={section} onSelect={setSection}/></div><Sections section={section} artists={s.artists} onOpen={onOpen} onSection={setSection}/></div></div></div>;
}
export function useSearchParams() { const selected = libraryView(s => s.selectedPlaylist); return [new URLSearchParams(selected ? { playlist: selected.id } : {}), params => {
  const id = params instanceof URLSearchParams ? params.get('playlist') : params?.playlist;
  if (id === selected?.id) return;
  selectCollection(id === 'favorites' ? { id } : libraryView.getState().playlists.find(p => p.id === id) || null);
}]; }
export const useNavigationType = () => 'POP';
const settingsRoute = createStore({ category: 'player', sub: 'view' });
export function useLocation() { const nav = navigationStore(), route = settingsRoute(); return { pathname: nav.isSettingsDialogOpen ? `/settings/${route.category}/${route.sub}` : `/${nav.activeTab}`, search: '' }; }
export function useSettingsRoute() { const route = settingsRoute(); return { t, currentLanguage: 'ru', activeCategory: route.category, activeSubTab: route.sub,
  setActiveCategory: category => settingsRoute.setState({ category, sub: { player: 'view', appearance: 'interface', profile: 'account', main: 'general' }[category] || '' }),
  setActiveSubTab: (...values) => settingsRoute.setState({ sub: String(values.at(-1)).split('.').at(-1) }), searchQuery: '', deferredSearchQuery: '', setSearchQuery: noop }; }
export function useDimensions() { const [size, setSize] = React.useState({ width: innerWidth, height: innerHeight }); React.useEffect(() => { const update = () => setSize({ width: innerWidth, height: innerHeight }); addEventListener('resize', update); return () => removeEventListener('resize', update); }, []); return size; }
export function AccountPanel() {
  const connected = accountStore(s => s.isAuthenticated), [token, setToken] = React.useState(''), [saving, setSaving] = React.useState(false);
  const [replaceToken, setReplaceToken] = React.useState(false);
  const [authError, setAuthError] = React.useState(''), [authSuccess, setAuthSuccess] = React.useState(false);
  const status = playerStore(s => s.bridgeStatus || {});
  return <div className="space-y-6 p-5"><h3 className="text-lg font-semibold">Яндекс Музыка</h3><p className="text-sm text-muted-foreground">{connected ? 'Аккаунт подключён' : 'Подключите аккаунт для Моей волны'}</p>
    {status.savedToken && <p role="status" className="text-sm text-muted-foreground">{connected ? 'Токен сохранён в хранилище Windows, подключение восстанавливается автоматически' : status.restoring ? 'Восстанавливаем подключение с сохранённым токеном…' : status.accountError || 'Токен сохранён'}</p>}
    {(connected || status.savedToken) && <Button variant="ghost" onClick={() => setReplaceToken(value => !value)}>{replaceToken ? 'Отмена' : 'Заменить токен'}</Button>}
    {((!connected && !status.savedToken) || replaceToken) && <form className="space-y-3" noValidate onSubmit={async event => {
      event.preventDefault(); if (saving) return;
      setAuthError(''); setAuthSuccess(false);
      if (token.trim().length < 10) { setAuthError('Введите OAuth-токен Яндекс Музыки целиком'); return; }
      setSaving(true);
      try { await call('connect', token.trim()); setToken(''); setAuthSuccess(true); }
      catch (error) { setAuthError(error.message); }
      finally { setSaving(false); }
    }}>
      <label className="block text-sm" htmlFor="yandex-token">OAuth-токен</label><input className="w-full rounded-lg bg-raised border border-border-subtle px-3 py-2 text-sm" id="yandex-token" type="password" autoComplete="off" value={token} onChange={event => { setToken(event.target.value); setAuthError(''); setAuthSuccess(false); }} aria-invalid={!!authError} aria-describedby={authError ? 'yandex-auth-error' : undefined}/>
      <Button type="submit" disabled={saving}>{saving ? 'Подключаем…' : 'Подключить'}</Button>
      {saving && <p role="status" className="text-sm text-muted-foreground">Проверяем токен в Яндекс Музыке…</p>}
      {authError && <p id="yandex-auth-error" role="alert" className="text-sm text-destructive">{authError}</p>}
      {authSuccess && <p role="status" className="text-sm">Аккаунт Яндекс Музыки подключён</p>}
    </form>}
    <div className="space-y-2 text-sm text-muted-foreground"><p>{status.online ? 'Локальный мост доступен' : 'Нет связи с локальным мостом'}</p><p>Ожидают доставки: {status.pending || 0}</p>{status.error && <p role="alert">{status.error}</p>}</div>
    <Button variant="ghost" onClick={() => action('stopWave')}>Выключить Мою волну</Button></div>;
}
let lastReportedError = '';
export function acceptSnapshot(snapshot) {
  if (snapshot.window) windowStore.setState({ isMaximized: !!snapshot.window.maximized, isFullScreen: !!snapshot.window.fullscreen });
  const song = toSong(playbackTrack(snapshot));
  if (song) song.fromplaylist = snapshot.active ? 'Моя волна' : snapshot.contextName || 'Очередь';
  const previous = playerStore.getState(), existing = previous.currentSong;
  const sameSong = (a,b) => a && b && ['id', 'uid', 'title', 'artist', 'cover_art', 'duration', 'fromplaylist', 'artistUri', 'albumUri'].every(key=>a[key]===b[key]);
  const stableSong = sameSong(existing,song) ? existing : song;
  const nextQueue = [stableSong,...(snapshot.queue||[]).map(toSong)].filter(Boolean).map((item,index)=>sameSong(previous.queueSongs[index],item)?previous.queueSongs[index]:item);
  const queueSongs = shallowEqual(previous.queueSongs,nextQueue) ? previous.queueSongs : nextQueue;
  const nextBridge = { online:snapshot.bridgeOnline,pending:snapshot.pendingFeedback,error:snapshot.syncError,
    savedToken:!!snapshot.savedToken, restoring:!!snapshot.restoringAccount, accountError:snapshot.accountError || '' };
  if (existing?.id !== song?.id) {
    ++lyricGeneration;
    lyricsStore.setState({ songId: '', lines: [], isLoading: false, isSynced: false, error: null, annotations: [], translation: [], currentLyricIndex: -1, displayIndex: -1 });
    playerStore.setState({ isSeeking: false });
  }
  playerStore.setState({ currentSong: stableSong, queueSongs, duration: snapshot.duration / 1000,
    isPlaying: snapshot.playing, isLoading: snapshot.loading, volume: snapshot.volume, isMuted: snapshot.volume === 0,
    repeatMode: snapshot.active ? 'none' : snapshot.repeat === 2 ? 'one' : snapshot.repeat ? 'all' : 'none', isShuffled: !snapshot.active && !!snapshot.shuffle, shuffleType: snapshot.active ? 'none' : snapshot.shuffleType || (snapshot.shuffle ? 'normal' : 'none'),
    queueName: stableSong?.fromplaylist || '', queueType: snapshot.active ? 'wave' : 'playlist', fromplaylist: stableSong?.fromplaylist || '', playlistTitle: stableSong?.fromplaylist || '', waveActive: snapshot.active, connected: snapshot.connected,
    bridgeStatus: shallowEqual(previous.bridgeStatus,nextBridge) ? previous.bridgeStatus : nextBridge });
  if (!playerStore.getState().isSeeking) timeStore.setState({ currentTime: snapshot.progress / 1000 });
  if (stableSong && favoriteStore.getState().favorites.has(stableSong.id)!==!!snapshot.liked) { const favorites = new Set(favoriteStore.getState().favorites); snapshot.liked ? favorites.add(stableSong.id) : favorites.delete(stableSong.id); favoriteStore.setState({ favorites }); }
  if (stableSong && existing?.id !== stableSong.id && (playerStore.getState().isPlayerPortalOpen || playerStore.getState().showLyrics || panelStore.getState().panel === 'lyrics')) loadLyrics(stableSong);
  accountStore.setState({ isAuthenticated: !!snapshot.connected });
  waveStore.setState({waveLoading:!!snapshot.loading,activeWave:snapshot.active ? 'yandex' : null});
  if (snapshot.error && snapshot.error !== lastReportedError) notificationStore.setState({ error: snapshot.error });
  lastReportedError = snapshot.error || '';
  const lyrics = lyricsStore.getState();
  if (lyrics.songId === song?.id && lyrics.isSynced) {
    const index = lyrics.lines.reduce((previous, line, i) => line.time <= snapshot.progress / 1000 ? i : previous, -1);
    if (index !== lyrics.currentLyricIndex) lyricsStore.setState({ currentLyricIndex: index, displayIndex: index });
  }
}
window.addEventListener('message', event => {
  if (event.source !== parent) return;
  const message = event.data;
  if (message?.type === 'wave-ui:snapshot') acceptSnapshot(message.state);
  if (message?.type === 'wave-ui:navigate' && message.page === 'home') navigationStore.getState().setActiveTab('home');
  if (message?.type === 'wave-ui:response') {
    const request = pending.get(message.id); if (!request) return;
    pending.delete(message.id); clearTimeout(request.timeout);
    message.error ? request.reject(new Error(message.error)) : request.resolve(message.value);
  }
});
