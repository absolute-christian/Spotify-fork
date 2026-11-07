import { build } from 'esbuild';
import { readFile, writeFile, mkdir, rename } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { resolve, extname } from 'node:path';

export async function buildDotifyFrame({ useCheckedInAssets = false } = {}) {
  let checkedInCss;
  if (useCheckedInAssets) {
    const snapshot = await readFile('frontend/dotify/frame-document.html', 'utf8');
    const start = snapshot.indexOf('<style>');
    const end = snapshot.indexOf('</style>', start + 7);
    if (start < 0 || end < 0) throw new Error('Checked-in interface stylesheet is missing');
    checkedInCss = snapshot.slice(start + 7, end);
    const external = [...checkedInCss.matchAll(/url\(\s*(['"]?)(.*?)\1\s*\)/g)]
      .map(match => match[2]).filter(name => !name.startsWith('data:') && !name.startsWith('#'));
    if (!checkedInCss || external.length) throw new Error('Checked-in interface stylesheet contains missing resources');
  }
  for (const overlay of [false, true]) {
  const result = await build({ entryPoints: [overlay ? 'frontend/dotify/overlay-entry.jsx' : 'frontend/dotify/entry.jsx'], bundle: true, write: false, format: 'iife',
    loader: { '.svg': 'text' },
    minify: true, jsxFactory: 'React.createElement', jsxFragment: 'React.Fragment', target: 'chrome110',
    define: { 'process.env.NODE_ENV': '"production"' }, logOverride: { 'empty-import-meta': 'silent' } });
  let css = checkedInCss;
  if (!useCheckedInAssets) {
    css = (await Promise.all(['globals-bA04W_Hq.css', 'view-BA7NuomZ.css', 'view-D_3niiR2.css'].map(file => readFile(`.local/dotify-original/assets/${file}`, 'utf8')))).join('\n');
    const files = [...new Set([...css.matchAll(/url\(([^)'"\s]+)\)/g)].map(match => match[1]).filter(name => !name.startsWith('data:') && !name.startsWith('#')))];
    for (const file of files) {
      const content = await readFile(file.startsWith('/') ? resolve('.local/dotify-original', '.' + file) : resolve('.local/dotify-original/assets', file));
      const mime = { '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf', '.svg': 'image/svg+xml' }[extname(file)] || 'application/octet-stream';
      const url = `data:${mime};base64,${content.toString('base64')}`;
      css = css.replaceAll(`url(${file})`, `url(${url})`);
    }
  }
  const code = result.outputFiles[0].text.replaceAll('</script', '<\\/script');
  const integrationCss = `html,body,#root{width:100%;height:100%;margin:0}body{background:var(--bg-base,#0b0b0b);overflow:hidden}#root{isolation:isolate}
@media(max-width:600px){.mini-player-wrapper .grid{grid-template-columns:minmax(0,1fr) auto;height:auto;gap:4px 8px;padding:8px 12px}.mini-player-wrapper .grid>:first-child{grid-column:1/-1;width:100%}.mini-player-wrapper .grid>:nth-child(2){justify-self:start}.mini-player-wrapper .grid>:first-child>div:nth-child(2){flex:1;max-width:none}}`;
  // pywebview 6 creates its local Python API wrappers with new Function. That
  // permission belongs only to the separate native artifact, never Spotify's iframe.
  const scriptPolicy = overlay ? "'unsafe-inline' 'unsafe-eval'" : "'unsafe-inline'";
  const revision = createHash('sha256').update(css).update(code).digest('hex').slice(0, 16);
  const html = `<!DOCTYPE html><html lang="ru" class="dark"><head><meta charset="UTF-8"><meta name="forkspotify-build" content="${revision}"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src ${scriptPolicy}; style-src 'unsafe-inline'; font-src data:; img-src data: blob: https:; media-src data: blob: https:; connect-src 'none'; form-action 'none'"><style>${css}</style><style>${overlay ? 'html,body,#root{width:100%;height:100%;margin:0;background:transparent!important;overflow:hidden}' : integrationCss}</style></head><body><div id="root"></div><script>${code}</script></body></html>`;
  await mkdir('frontend/dotify', { recursive: true });
  if (overlay) {
    await mkdir('dist/desktop', { recursive:true });
    await writeFile('dist/desktop/overlay.html.tmp',html);
    await rename('dist/desktop/overlay.html.tmp','dist/desktop/overlay.html');
  }
  else await writeFile('frontend/dotify/frame-document.html', html);
  }
}
