import { R as React, _ as ReactDOM } from './original/vendor-ui-BwX-1h7U.js';
import Overlay from './original/view-Bg7pA49X.js';
import { OriginalFullscreen } from './original/main-DVjTVWDM.js';
import { B as Button,I as Icons,OriginalThemes,OriginalThemeGroups,originalThemeVariables,OriginalCustomAssets } from './original/globals-Bc3qFUyf.js';
import { registerOriginalUi,settingsStore,playerStore,acceptSnapshot,useAppliedSettings } from './runtime.jsx';
import { acceptDesktopState } from './overlay-adapter.js';
import { observeNativeSurface } from './native-surface.js';
registerOriginalUi({Button,Icons,Themes:OriginalThemes,ThemeGroups:OriginalThemeGroups,themeVariables:originalThemeVariables,CustomAssets:OriginalCustomAssets});
function App() {
  useAppliedSettings();
  React.useEffect(()=>{
    const stop=observeNativeSurface(document.getElementById('root'), value=>window.pywebview.api.surface(value),
      {fullscreen:()=>settingsStore.getState().settings.playerSettings.overlay.mode==='fullscreen'});
    window.pywebview?.api.report_status?.('mounted','',document.querySelector('meta[name="forkspotify-build"]')?.content || '');
    return stop;
  },[]);
  const mode=settingsStore(s=>s.settings.playerSettings.overlay.mode);
  return mode==='fullscreen'?<OriginalFullscreen onExit={()=>window.pywebview?.api.toggle()}/>:<Overlay/>;
}
let mounted=false,busy=false,settingsRevision,currentSettings,lastStateKey;
async function sync() {
  if(busy||!window.pywebview?.api)return;busy=true;
  try { const state=await window.pywebview.api.snapshot(settingsRevision);
    if(state?.settings?.playerSettings){
      currentSettings=state.settings;settingsRevision=state.settingsRevision;
      settingsStore.getState().setSettings(currentSettings);
    }
    if(!currentSettings?.playerSettings)return;
    const key=JSON.stringify({...state,settings:undefined});
    if(key!==lastStateKey){lastStateKey=key;acceptSnapshot(state.snapshot||{});acceptDesktopState({...state,settings:currentSettings});}
    if(!mounted){mounted=true;ReactDOM.createRoot(document.getElementById('root')).render(<App/>);}
  } catch(error) {window.pywebview?.api.report_status?.('error',error.message);} finally {busy=false;}
}
document.addEventListener('pointerdown',event=>{if(event.button===0&&event.target.closest('[data-tauri-drag-region]')&&!event.target.closest('button,input'))window.pywebview?.api.drag();});
// Compact layouts already animate Escape then emit toggle_overlay themselves.
// Registering a second handler toggles twice and leaves their closing state set.
window.addEventListener('keydown',event=>{
  if(event.key==='Escape' && settingsStore.getState().settings.playerSettings.overlay.mode==='fullscreen') {
    event.stopImmediatePropagation();window.pywebview?.api.toggle();
  }
});
window.addEventListener('pywebviewready',()=>{sync();setInterval(sync,250);});
window.addEventListener('error',event=>window.pywebview?.api.report_status?.('error',event.message));
window.addEventListener('unhandledrejection',event=>window.pywebview?.api.report_status?.('error',event.reason?.message||'Overlay request failed'));
