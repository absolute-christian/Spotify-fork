export function bindSpotifyPlayer(S) {
  if (S?.Player?.origin?._state) return true;
  const api = S?.Platform?.PlayerAPI;
  // Current Spotify exposes PlayerAPI through the registry even when
  // Spicetify's origin injection did not match its updated bundle. Bind the
  // actual native instance; the wrapper and its event listeners use this API.
  if (!S?.Player || !api?._state || typeof api.getState !== 'function' ||
      typeof api._events?.addListener !== 'function' ||
      !['play','pause','resume','seekTo','skipToNext','skipToPrevious','setRepeat','setShuffle'].every(name => typeof api[name] === 'function')) return false;
  S.Player.origin = api;
  return true;
}

export function spotifyCapabilities(S, doc) {
  const history = S?.Platform?.History;
  return { spicetify: !!S, player: !!S?.Player, playUri: typeof S?.Player?.playUri === 'function',
    playerAPI: !!S?.Platform?.PlayerAPI, playerState: !!S?.Player?.origin?._state,
    playerOrigin: !!S?.Player?.origin, platformState: !!S?.Platform?.PlayerAPI?._state,
    cosmos: !!S?.CosmosAsync, history: !!history,
    historyListen: typeof history?.listen === 'function', historyReplace: typeof history?.replace === 'function', documentHead: !!doc?.head };
}
// Cosmos is a legacy fallback transport. Its absence must not prevent loading
// the shell or native PlayerAPI/GraphQL features on newer Spotify versions.
export const spotifyReady = capabilities => ['spicetify','player','playUri','playerAPI','playerState','history','historyListen','historyReplace','documentHead'].every(key => capabilities[key]);
