// Recommendations identify feedback; only the playing Spotify item identifies the UI.
export function playbackTrack(snapshot) {
  if (snapshot.nativeTrack?.uri && (!snapshot.nativeUri || snapshot.nativeTrack.uri === snapshot.nativeUri)) return snapshot.nativeTrack;
  if (Object.hasOwn(snapshot, 'nativeTrack') || Object.hasOwn(snapshot, 'nativeUri')) return null;
  return snapshot.current || null;
}
