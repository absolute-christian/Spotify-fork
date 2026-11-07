import React from 'react';
import documentHtml from '../dotify/frame-document.html';
import { replaceSpotifyPanels, spotifyProfileAnchor, openSpotifyProfileMenu, closeSpotifyProfileMenu } from './spotify-shell.js';
import { downloadUiFile } from './downloads.js';

import { dispatchUi } from './ui-dispatch.js';
import { createFrameSnapshotPublisher } from './frame-snapshot.js';
export { dispatchUi };
export function App({ controller, demo = false }) {
  const frame = React.useRef(null);
  const [panelHeight, setPanelHeight] = React.useState(null);
  React.useLayoutEffect(() => {
    if (demo) return;
    const restoreShell = replaceSpotifyPanels(frame.current);
    const container = frame.current?.closest('[data-wave-main]');
    if (!container) return restoreShell;
    const update = () => setPanelHeight(Math.max(200, Math.floor(container.getBoundingClientRect().height)));
    update(); const observer = new ResizeObserver(update); observer.observe(container);
    return () => { observer.disconnect(); restoreShell(); };
  }, [demo]);
  React.useEffect(() => {
    if (!controller) return;
    const snapshot=createFrameSnapshotPublisher(controller,state=>frame.current?.contentWindow?.postMessage({type:'wave-ui:snapshot',state},'*'),{hidden:()=>document.hidden,demo});
    const messages = async event => {
      if (event.source !== frame.current?.contentWindow) return;
      const data = event.data;
      if (data?.type === 'wave-ui:dismiss-profile' && !demo) { closeSpotifyProfileMenu(); return; }
      if (data?.type === 'wave-ui:ready') { snapshot(true); return; }
      if (data?.type !== 'wave-ui:request' || !Number.isSafeInteger(data.id) || typeof data.method !== 'string' || !Array.isArray(data.args)) return;
      try { const value = data.method === 'desktopSettings' && demo ? true : data.method === 'downloadFile' ? downloadUiFile(...data.args) : data.method === 'profileMenu' && !demo ? openSpotifyProfileMenu(spotifyProfileAnchor(frame.current, data.args[0]), document, () => frame.current?.contentWindow?.postMessage({ type: 'wave-ui:profile-closed' }, '*')) : await dispatchUi(controller, data.method, data.args); event.source.postMessage({ type: 'wave-ui:response', id: data.id, value }, '*'); snapshot(true); }
      catch (error) { event.source.postMessage({ type: 'wave-ui:response', id: data.id, error: error.message }, '*'); }
    };
    window.addEventListener('message', messages);
    const navigateHome = () => frame.current?.contentWindow?.postMessage({ type: 'wave-ui:navigate', page: 'home' }, '*');
    window.addEventListener('wave:home', navigateHome);
    const visibility = () => snapshot(true);
    document.addEventListener('visibilitychange',visibility);
    const unsubscribe = controller.subscribe(()=>snapshot());
    const queueRefresh = setInterval(()=>snapshot(),1000);
    snapshot();
    return () => { clearInterval(queueRefresh); unsubscribe(); document.removeEventListener('visibilitychange',visibility); window.removeEventListener('message', messages); window.removeEventListener('wave:home', navigateHome); };
  }, [controller, demo]);
  return <iframe ref={frame} title="Моя волна" srcDoc={documentHtml} sandbox="allow-scripts allow-same-origin allow-forms" style={{ display: 'block', border: 0, width: '100%', height: demo ? '100vh' : panelHeight || 'calc(100vh - 160px)', minHeight: 200, background: '#0b0b0b' }}/>;
}
export function renderContent() {
  function ConnectedApp() {
    const [controller, setController] = React.useState(globalThis.MyWave);
    React.useEffect(() => { if (controller) return; const timer = setInterval(() => { if (globalThis.MyWave) setController(globalThis.MyWave); }, 300); return () => clearInterval(timer); }, [controller]);
    return controller ? <App controller={controller}/> : null;
  }
  return <ConnectedApp/>;
}
