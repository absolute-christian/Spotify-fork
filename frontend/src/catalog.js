import { bestArtwork } from './artwork.js';

export function normalizeTrack(item) {
  if (!item) return null;
  const track = item.contextTrack || item.track || item.item || item;
  const m = track.metadata || {};
  const uri = track.uri || m.uri;
  if (!uri) return null;
  const artists = Array.isArray(track.artists) ? track.artists.map(a => a?.name).filter(Boolean) : [];
  const cover = bestArtwork([...(Array.isArray(track.album?.images) ? track.album.images : []), ...(Array.isArray(track.images) ? track.images : [])], m);
  return { uri, title: track.name || track.title || m.title || '', artist: artists.join(', ') || m.artist_name || '',
    cover: cover.startsWith('spotify:image:') ? `https://i.scdn.co/image/${cover.slice(14)}` : cover,
    duration: Number(track.duration_ms || track.duration?.milliseconds || m.duration || 0),
    artistUri: track.artists?.[0]?.uri || m.artist_uri || '', albumUri: track.album?.uri || m.album_uri || '', uid: item.uid || track.uid || '' };
}
export function normalizeCollection(item) {
  const entry = item?.album || item;
  if (!entry?.uri) return null;
  const cover = entry.images?.[0]?.url || '';
  const permissionKnown = ['isOwnedBySelf', 'canAdd', 'canAddTo', 'canEditItems'].some(key => typeof entry[key] === 'boolean');
  return { uri: entry.uri, title: entry.name || '', artist: (Array.isArray(entry.artists) ? entry.artists.map(a => a?.name).filter(Boolean).join(', ') : entry.artist?.name) || entry.owner?.display_name || entry.owner?.name || '',
    cover: cover.startsWith('spotify:image:') ? `https://i.scdn.co/image/${cover.slice(14)}` : cover, type: entry.type || entry.uri.split(':')[1], count: entry.items?.total ?? entry.tracks?.total ?? entry.total_tracks ?? entry.totalLength ?? 0,
    owner: entry.owner?.id || '', collaborative: !!entry.collaborative,
    writable: permissionKnown ? !!(entry.isOwnedBySelf || entry.canAdd || entry.canAddTo || entry.canEditItems) : null };
}
