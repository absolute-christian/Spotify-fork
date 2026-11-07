// Keep Spotify's native navigation, but replace its home destination with our home.
export function replaceSpotifyHome(history, onHome = () => {}) {
  if (!history?.listen || !history?.replace) return () => {};
  let replacing = false;
  const visit = event => {
    const location = event?.location || event || history.location;
    if (!['/', '/home'].includes(location?.pathname) || replacing) return;
    replacing = true;
    try { onHome(); history.replace('/my-wave'); } finally { replacing = false; }
  };
  const unsubscribe = history.listen(visit);
  // Spotify may restore a playlist or profile from its previous session.
  // Start each process in Dotify, then leave explicit native navigation available.
  if (history.location?.pathname !== '/my-wave') { onHome(); history.replace('/my-wave'); }
  return () => unsubscribe?.();
}
