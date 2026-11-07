// Native query contract inspected in installed xpui-routes-search.js, 2026-10-19.
// Prefer Spotify's runtime definition when the native search chunk is loaded.
export const desktopSearch = Object.freeze({ name: 'searchDesktop', operation: 'query',
  sha256Hash: 'eef7cc54888d91bdd6802623477873caa3948ae173a0c34fd86827b267e94c03', value: null });

const images = sources => Array.isArray(sources) ? sources.filter(image => typeof image?.url === 'string') : [];
const artists = value => (value?.items || []).map(item => ({ uri: item?.uri, name: item?.profile?.name || '' }));
function entity(row, type) {
  const item = row?.item?.data || row?.data;
  if (!item || item.__typename !== type || typeof item.uri !== 'string' || !item.name && type !== 'Artist') return null;
  if (type === 'Track') return { uri: item.uri, type: 'track', name: item.name, artists: artists(item.artists), duration_ms: item.duration?.totalMilliseconds || 0,
    album: { uri: item.albumOfTrack?.uri, name: item.albumOfTrack?.name || '', images: images(item.albumOfTrack?.coverArt?.sources) } };
  if (type === 'Artist') return { uri: item.uri, type: 'artist', name: item.profile?.name || '', images: images(item.visuals?.avatarImage?.sources) };
  if (type === 'Album') return { uri: item.uri, type: 'album', name: item.name, artists: artists(item.artists), images: images(item.coverArt?.sources) };
  return { uri: item.uri, type: 'playlist', name: item.name, images: images(item.images?.items?.flatMap(image => image.sources || [])), owner: { display_name: item.ownerV2?.data?.name || '' } };
}
export function nativeSearchResults(response) {
  const search = response?.data?.searchV2;
  if (response?.errors?.length || !search || !search.tracksV2 || !search.artists || !search.albumsV2 || !search.playlists) throw new Error('Spotify не вернул результаты поиска');
  return Object.fromEntries([['tracks', 'tracksV2', 'Track'], ['artists', 'artists', 'Artist'], ['albums', 'albumsV2', 'Album'], ['playlists', 'playlists', 'Playlist']].map(([key, source, type]) => {
    if (!Array.isArray(search[source].items)) throw new Error('Spotify вернул неизвестный формат поиска');
    return [key, { items: search[source].items.map(row => entity(row, type)).filter(Boolean) }];
  }));
}
export function searchHttpError(response) {
  const status = Number(response?.status || response?.statusCode || response?.code || response?.error?.status || response?.response?.status || 0);
  const error = new Error(status === 429 ? 'Spotify ограничил частоту поиска. Попробуйте позже' : `Spotify не выполнил запрос${status ? ` (HTTP ${status})` : ''}`);
  error.status = status;
  const headers = response?.headers || response?.response?.headers;
  const retry = headers?.get?.('retry-after') || headers?.['retry-after'] || headers?.['Retry-After'] || response?.retryAfter;
  error.retryAfter = Number.isFinite(Number(retry)) && Number(retry) > 0 ? Number(retry) : 60;
  return error;
}
