import { playbackTrack } from './playback-track.js';
let latest = { settings: {}, snapshot: {} };
const listeners = new Map();
export function overlayEventManager() {
  const owned = [];
  const manager = { disposed: false, listen: async (name, callback) => {
    const set = listeners.get(name) || new Set(); listeners.set(name,set); set.add(callback); owned.push([set,callback]);
    return () => set.delete(callback);
  }, dispose: () => { manager.disposed = true; owned.forEach(([set,callback]) => set.delete(callback)); } };
  return manager;
}
function emit(name, payload) { listeners.get(name)?.forEach(callback => callback({ payload })); }
export function acceptDesktopState(value) {
  const changed = JSON.stringify(latest.settings) !== JSON.stringify(value.settings);
  const wasActive = !!(latest.visible && latest.online), active = !!(value.visible && value.online);
  latest = value;
  if (changed) emit('settings-changed',value.settings);
  if (wasActive !== active) emit('overlay-state-changed', { active });
  const snapshot = value.snapshot || {}, raw = playbackTrack(snapshot);
  const song = raw ? { id: raw.uri, title: raw.title, artist: raw.artist, cover_art: raw.cover || raw.cover_url || '', source: 'spotify', duration: (snapshot.duration || 0)/1000 } : null;
  emit('miniplayer-sync',{ currentSong:song,isPlaying:active && !!snapshot.playing,isLoading:active && !!snapshot.loading,currentTime:(snapshot.progress||0)/1000,duration:(snapshot.duration||0)/1000,volume:snapshot.volume??.7,repeatMode:snapshot.repeat===2?'one':snapshot.repeat?'all':'none',isShuffled:!!snapshot.shuffle,shuffleType:snapshot.shuffleType || (snapshot.shuffle ? 'normal' : 'none') });
}
export const overlaySettingsRepository = { getSettings: async () => latest.settings };
export const overlayStorage = { load: key => key === 'dotify-is-playing' ? !!latest.snapshot.playing : key === 'dotify-current-song' ? (()=>{const raw=playbackTrack(latest.snapshot);return raw?{id:raw.uri,title:raw.title,artist:raw.artist,cover_art:raw.cover||raw.cover_url||'',source:'spotify'}:null})() : null };
export async function overlayEmit(name, value) {
  if (name !== 'media-button') { acceptDesktopState(latest); return; }
  const actions = { toggle:'toggle',next:'next',previous:'back','cycle-repeat':'repeat','toggle-shuffle':'shuffle' };
  let method=actions[value],args=[];
  if (/^seek:/.test(value)) { method='seek'; args=[Number(value.slice(5))*1000]; }
  if (/^volume:/.test(value)) { method='volume'; args=[Number(value.slice(7))]; }
  if (!method) return;
  const result = await window.pywebview?.api.action(method,args);
  if (result?.error) throw new Error(result.error);
}
export const overlayInvoke = async (target, options) => { if (target === 'window' && options.action === 'toggle_overlay') return window.pywebview?.api.toggle(); };
