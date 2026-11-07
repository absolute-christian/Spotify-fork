import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
const files = { '/': ['index.html', 'text/html; charset=utf-8'], '/preview.js': ['preview.js', 'text/javascript; charset=utf-8'],
  '/artwork.svg': ['artwork.svg', 'image/svg+xml'] };
createServer(async (req, res) => {
  const file = files[new URL(req.url, 'http://127.0.0.1').pathname];
  if (!file) { res.writeHead(404); res.end(); return; }
  try { const data = await readFile(`dist/preview/${file[0]}`); res.writeHead(200, { 'Content-Type': file[1], 'Cache-Control': 'no-store' }); res.end(data); }
  catch { res.writeHead(503); res.end('Run npm run build'); }
}).listen(4173, '127.0.0.1', () => console.log('Preview (no audio): http://127.0.0.1:4173'));
