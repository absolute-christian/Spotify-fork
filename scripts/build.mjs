import { build } from 'esbuild';
import { mkdir, copyFile, writeFile, readFile } from 'node:fs/promises';
import { ensureDotifySources } from './ensure-dotify.mjs';
import { buildDotifyFrame } from './build-dotify.mjs';
ensureDotifySources();
await buildDotifyFrame();
const dir = 'dist/my-wave';
await mkdir(dir, { recursive: true });
const reactShim = { name: 'spotify-react', setup(b) {
  b.onResolve({ filter: /^react$/ }, () => ({ path: 'react', namespace: 'spotify' }));
  b.onLoad({ filter: /.*/, namespace: 'spotify' }, () => ({ contents: 'const R=Spicetify.React;export default R;export const {forwardRef,createElement,createContext,useContext,useMemo}=R;', loader: 'js' }));
} };
await build({ entryPoints: ['frontend/src/app.jsx'], outfile: `${dir}/index.js`, bundle: true,
  format: 'iife', globalName: 'WaveApp', plugins: [reactShim], loader: { '.css': 'text', '.svg': 'text', '.html': 'text' },
  footer: { js: 'function render() { return WaveApp.renderContent(); }' }, target: 'chrome110' });
await build({ entryPoints: ['frontend/src/extension.js'], outfile: `${dir}/wave-extension.js`, bundle: true,
  format: 'iife', target: 'chrome110' });
const icon = await readFile('frontend/spotify-logo.svg', 'utf8');
await writeFile(`${dir}/manifest.json`, JSON.stringify({ name: 'Моя волна', icon, 'active-icon': icon,
  subfiles: [], subfiles_extension: ['wave-extension.js'] }, null, 2));
await mkdir('dist/preview', { recursive: true });
await build({ entryPoints: ['frontend/src/preview.jsx'], outfile: 'dist/preview/preview.js', bundle: true,
  format: 'esm', loader: { '.css': 'text', '.svg': 'text', '.html': 'text' }, target: 'chrome110', define: { 'process.env.NODE_ENV': '"production"' } });
await copyFile('frontend/preview.html', 'dist/preview/index.html');
await copyFile('docs/visual-assets.md', `${dir}/visual-assets.txt`);
console.log('Built Custom App: dist/my-wave · browser preview: dist/preview');
