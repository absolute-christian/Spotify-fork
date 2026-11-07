// UI fixtures exercise the real iframe without modifying a simulated Spotify shell.
export const uiTestShell = {
  name: 'ui-test-shell',
  setup(build) {
    build.onResolve({ filter: /^\.\/spotify-shell\.js$/ }, () => ({ path: 'test-shell', namespace: 'ui-test-shell' }));
    build.onLoad({ filter: /.*/, namespace: 'ui-test-shell' }, () => ({ contents: 'export const replaceSpotifyPanels=()=>()=>{}, spotifyProfileAnchor=()=>({}), openSpotifyProfileMenu=()=>{}, closeSpotifyProfileMenu=()=>{};', loader: 'js' }));
  },
};
