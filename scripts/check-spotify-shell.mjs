// Local integration fixture for the installed Spotify grid, with no account access.
import { build } from 'esbuild';
import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';
const inline = process.argv[2] ? await readFile(process.argv[2], 'utf8') : null;
// Deliberately use unrelated classes: Spotify 1.3.6 removed all Root__* names.
const rules = '.native-root-hash{display:grid;grid-template-areas:"header header header" "left main-view right" "footer footer footer";grid-template-rows:56px 1fr 80px}.native-header-hash{grid-area:header}';
const result = await build({ stdin: { contents: `
import { replaceSpotifyPanels, openSpotifyProfileMenu, closeSpotifyProfileMenu } from './frontend/src/spotify-shell.js';
const frame = document.querySelector('iframe'), root = document.querySelector('.native-root-hash');
let restore;
document.querySelector('#replace').onclick = () => { restore?.(); restore = replaceSpotifyPanels(frame); fit(); };
document.querySelector('#restore').onclick = () => { restore?.(); restore = null; fit(); };
document.querySelector('#remount').onclick = () => {
  root.querySelector('[aria-label="Spotify right panel"]')?.remove();
  const panel = document.createElement('aside'); panel.setAttribute('aria-label', 'Spotify right panel');
  panel.style.gridArea = 'right'; panel.textContent = 'Spotify right panel'; root.append(panel);
};
function fit() { frame.style.height = frame.parentElement.getBoundingClientRect().height + 'px'; }
new ResizeObserver(fit).observe(frame.parentElement);
const profile = root.querySelector('[data-testid="user-widget-link"]');
profile.onclick = () => { profile.setAttribute('aria-expanded', String(profile.getAttribute('aria-expanded') !== 'true')); document.querySelector('#profile-status').textContent = 'expanded=' + profile.getAttribute('aria-expanded'); };
document.querySelector('#profile').onclick = () => openSpotifyProfileMenu({left:600,top:24,width:48,height:48});
document.querySelector('#close-profile').onclick = () => closeSpotifyProfileMenu();
document.querySelector('#replace').click();
`, resolveDir: process.cwd(), sourcefile: 'shell-check.js' }, bundle: true, write: false, format: 'esm' });
const html = `<!doctype html><html lang="ru"><meta charset="utf-8"><title>Spotify shell integration fixture</title>
<style>${rules}
html,body{margin:0;height:100%;background:#000;color:#fff;font-family:sans-serif}*{box-sizing:border-box}
body{--panel-gap:8px}.native-root-hash{height:calc(100% - 32px);min-height:0;grid-template-columns:80px 1fr 300px}
.native-header-hash{height:56px}main{grid-area:main-view;min-height:0;overflow:hidden;contain:layout;transform:translateZ(0);padding:12px;border-radius:8px}
aside{background:#222}footer{grid-area:footer;height:80px;background:#222}iframe{width:100%;border:0;display:block}
#tools[data-wave-native-panel]{visibility:visible!important;pointer-events:auto!important;width:auto!important;height:28px!important;position:fixed!important;left:0;top:0;z-index:2147483647!important}
</style><div id="tools"><button id="replace">Replace panels</button><button id="restore">Restore Spotify panels</button><button id="remount">Recreate right panel</button><button id="profile">Profile menu delegate</button><button id="close-profile">Close profile menu</button><output id="profile-status"></output></div>
<div class="native-root-hash"><header class="native-header-hash">Spotify header and duplicate logo (test fixture)<button data-testid="user-widget-link" aria-expanded="false">Native profile trigger (fixture)</button></header>
<aside aria-label="Spotify library" style="grid-area:left">Spotify library</aside>
<main><iframe title="UI test frame" srcdoc="<!doctype html><p>Test frame</p>"></iframe></main>
<aside aria-label="Spotify right panel" style="grid-area:right">Spotify right panel</aside>
<footer aria-label="Spotify player">Spotify player</footer></div><script type="module" src="/check.js"></script></html>`;
createServer((req, res) => {
  const js = req.url === '/check.js';
  res.writeHead(200, { 'Content-Type': js ? 'text/javascript' : 'text/html', 'Cache-Control': 'no-store' });
  res.end(js ? result.outputFiles[0].text : req.url === '/inline' && inline ? `<meta charset="utf-8">${inline}` : html);
}).listen(4174, '127.0.0.1', () => console.log('Account-free Spotify shell fixture: http://127.0.0.1:4174'));
