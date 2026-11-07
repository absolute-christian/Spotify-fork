// Dotify owns the app area; Spotify's playback engine and account menu stay mounted.
// Grid-area names come from Spotify's layout, avoiding version-specific class hashes.
import { manageSpotifyWindowButtons } from './window-chrome.js';
export function hideSpotifyAppShortcut(doc = document) {
  if (doc.getElementById('wave-app-shortcut-style')) return;
  const style = doc.createElement('style');
  style.id = 'wave-app-shortcut-style';
  style.textContent = '.Root__globalNav .custom-navlink[aria-label="Моя волна"] { display: none !important; }';
  doc.head.append(style);
}

export function replaceSpotifyPanels(frame) {
  if (!frame?.ownerDocument) return () => {};
  const doc = frame.ownerDocument, view = doc.defaultView, root = doc.documentElement;
  const hidden = new Set(), ancestors = new Set(), menus = new Set();
  const classify = () => {
    for (const collection of [hidden,ancestors,menus]) for (const node of collection) {
      if (node.isConnected) continue;
      node.removeAttribute('data-wave-native-panel');node.removeAttribute('data-wave-native-menu');node.removeAttribute('data-wave-ancestor');
      collection.delete(node);
    }
    // Spotify 1.3.6 removed the stable Root__* classes. Follow the actual route
    // ancestry instead of assuming a particular grid or hashed class name.
    for (let child = frame; child?.parentElement && child !== doc.body; child = child.parentElement) {
      const parent = child.parentElement;
      if (!ancestors.has(parent)) { parent.setAttribute('data-wave-ancestor', ''); ancestors.add(parent); }
      for (const sibling of parent.children) {
        if (sibling === child || ['SCRIPT','STYLE','LINK'].includes(sibling.tagName)) continue;
        const isMenu = root.hasAttribute('data-wave-profile-open') &&
          (sibling.matches('[role="menu"]') || sibling.querySelector('[role="menu"]'));
        if (isMenu) { sibling.removeAttribute('data-wave-native-panel'); sibling.setAttribute('data-wave-native-menu', ''); hidden.delete(sibling);menus.add(sibling);continue; }
        if (menus.delete(sibling)) sibling.removeAttribute('data-wave-native-menu');
        if (!hidden.has(sibling)) { sibling.setAttribute('data-wave-native-panel', ''); hidden.add(sibling); }
      }
    }
  };
  frame.setAttribute('data-wave-frame', ''); root.setAttribute('data-wave-shell', '');
  frame.parentElement.setAttribute('data-wave-main', '');
  const style = doc.createElement('style');
  style.textContent = `
    html[data-wave-shell],html[data-wave-shell] body {
      margin:0!important;padding:0!important;width:100%!important;height:100%!important;overflow:hidden!important;
    }
    html[data-wave-shell] [data-wave-ancestor] {
      display:block!important;position:static!important;width:100%!important;height:100%!important;
      min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;
      margin:0!important;padding:0!important;gap:0!important;overflow:visible!important;
      contain:none!important;transform:none!important;filter:none!important;perspective:none!important;clip-path:none!important;
    }
    html[data-wave-shell] [data-wave-native-panel] {
      visibility:hidden!important;pointer-events:none!important;position:fixed!important;
      width:0!important;height:0!important;min-width:0!important;min-height:0!important;
      margin:0!important;padding:0!important;overflow:hidden!important;
    }
    html[data-wave-shell] iframe[data-wave-frame] {
      display:block!important;position:fixed!important;inset:0!important;width:100vw!important;height:100dvh!important;
      min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;
      margin:0!important;border:0!important;z-index:2147483000!important;
    }
    html[data-wave-shell] [data-wave-native-menu] {position:fixed!important;z-index:2147483647!important;visibility:visible!important;pointer-events:auto!important}
  `;
  doc.head.append(style);
  classify();
  const restoreWindowButtons = manageSpotifyWindowButtons(globalThis.Spicetify?.Platform, view);
  const observer = new view.MutationObserver(records=>{
    // Playback/progress and cover mutations deep inside a hidden native pane
    // cannot change the iframe's siblings. Keep their entire subtree idle.
    if (records.some(record=>record.target===root || ancestors.has(record.target)) ||
        root.hasAttribute('data-wave-profile-open') || menus.size) classify();
  });
  observer.observe(doc.body, { childList: true, subtree:true });
  observer.observe(root,{attributes:true,attributeFilter:['data-wave-profile-open']});
  view.waveShellMetrics = () => { const rect=frame.getBoundingClientRect(); return {active:true,width:Math.round(rect.width),height:Math.round(rect.height),viewportWidth:view.innerWidth,viewportHeight:view.innerHeight,hiddenPanels:hidden.size}; };
  return () => {
    closeSpotifyProfileMenu(doc);
    observer.disconnect(); style.remove();
    restoreWindowButtons();
    delete view.waveShellMetrics;
    root.removeAttribute('data-wave-shell'); frame.removeAttribute('data-wave-frame');frame.parentElement?.removeAttribute('data-wave-main');
    ancestors.forEach(element => element.removeAttribute('data-wave-ancestor'));
    hidden.forEach(child => child.removeAttribute('data-wave-native-panel'));
    doc.querySelectorAll('[data-wave-native-menu]').forEach(child => child.removeAttribute('data-wave-native-menu'));
  };
}

export function spotifyProfileAnchor(frame, anchor) {
  if (!anchor || !['left', 'top', 'width', 'height'].every(key => Number.isFinite(anchor[key])) || anchor.width <= 0 || anchor.height <= 0) throw new Error('Не удалось определить положение кнопки профиля');
  const bounds = frame.getBoundingClientRect();
  const scale = bounds.width / frame.clientWidth || 1;
  return { left: bounds.left + Math.max(0, Math.min(frame.clientWidth - anchor.width, anchor.left)) * scale,
    top: bounds.top + Math.max(0, Math.min(frame.clientHeight - anchor.height, anchor.top)) * scale,
    width: Math.min(frame.clientWidth, anchor.width) * scale, height: Math.min(frame.clientHeight, anchor.height) * scale };
}

export function closeSpotifyProfileMenu(doc = document) {
  const button = doc.querySelector('[data-testid="user-widget-link"]');
  if (button?.getAttribute('aria-expanded') === 'true') button.click();
  doc.documentElement.removeAttribute('data-wave-profile-open');
}

export function openSpotifyProfileMenu(anchor, doc = document, onClose = () => {}) {
  const button = doc.querySelector('[data-testid="user-widget-link"]');
  if (!button) throw new Error('В этой версии Spotify меню аккаунта недоступно');
  if (button.getAttribute('aria-expanded') === 'true') { button.click(); return; }
  const previousStyle = button.getAttribute('style');
  for (const [key, value] of Object.entries({ position: 'fixed', left: `${anchor.left}px`, top: `${anchor.top}px`, width: `${anchor.width}px`, height: `${anchor.height}px`, margin: '0', transform: 'none', visibility: 'hidden', pointerEvents: 'none' })) {
    button.style.setProperty(key.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase()), value, 'important');
  }
  const restore = () => { observer.disconnect(); clearTimeout(timeout); previousStyle === null ? button.removeAttribute('style') : button.setAttribute('style', previousStyle); doc.documentElement.removeAttribute('data-wave-profile-open');onClose(); };
  const observer = new doc.defaultView.MutationObserver(() => { if (button.getAttribute('aria-expanded') !== 'true') restore(); });
  observer.observe(button, { attributes: true, attributeFilter: ['aria-expanded'] });
  const timeout = setTimeout(() => { if (button.getAttribute('aria-expanded') !== 'true') restore(); }, 1000);
  doc.documentElement.setAttribute('data-wave-profile-open','');
  button.click();
  // Spotify's menu is portalled outside the hidden header. Keep its real trigger
  // measurable at the Dotify button so native positioning stays correct.
}
