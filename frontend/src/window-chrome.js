// NativeAPI disables the native buttons themselves, including their hit targets.
export function manageSpotifyWindowButtons(platform, view = window) {
  const native = platform?.NativeAPI;
  if (!native?.setWindowButtonsVisibility) return () => {};
  let active = true, chain = Promise.resolve();
  const apply = () => {
    chain = chain.catch(()=>{}).then(()=>native.setWindowButtonsVisibility(!active));
    return chain.catch(error=>console.warn('Spotify window controls:',error.message));
  };
  apply();
  view.addEventListener('resize',apply);
  view.addEventListener('fullscreenchange',apply);
  return () => { active=false;view.removeEventListener('resize',apply);view.removeEventListener('fullscreenchange',apply);return apply(); };
}
