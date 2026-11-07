import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname, sep } from 'node:path';
import { brotliDecompressSync } from 'node:zlib';
import { createHash } from 'node:crypto';

const source = resolve(process.argv[2] ?? 'C:/Program Files/Dotify/dotify.exe');
const destination = resolve(process.argv[3] ?? '.local/dotify-original');
const binary = readFileSync(source);
if (binary.toString('ascii', 0, 2) !== 'MZ') throw new Error('Expected a PE executable');
const pe = binary.readUInt32LE(0x3c);
if (binary.toString('ascii', pe, pe + 4) !== 'PE\0\0') throw new Error('Invalid PE signature');
if (binary.readUInt16LE(pe + 24) !== 0x20b) throw new Error('Expected PE32+');
const base = Number(binary.readBigUInt64LE(pe + 48));
const count = binary.readUInt16LE(pe + 6);
const sectionStart = pe + 24 + binary.readUInt16LE(pe + 20);
const sections = Array.from({ length: count }, (_, index) => {
  const at = sectionStart + index * 40;
  return {
    name: binary.toString('ascii', at, at + 8).replaceAll('\0', ''),
    address: base + binary.readUInt32LE(at + 12),
    size: binary.readUInt32LE(at + 16),
    offset: binary.readUInt32LE(at + 20),
  };
});
function slice(pointer, size) {
  if (!Number.isSafeInteger(pointer) || !Number.isSafeInteger(size) || size <= 0 || size > 32 * 1024 * 1024) return null;
  const section = sections.find(item => pointer >= item.address && pointer + size <= item.address + item.size);
  if (!section) return null;
  const start = section.offset + pointer - section.address;
  if (start + size > binary.length) return null;
  return binary.subarray(start, start + size);
}
const assets = new Map();
for (const section of sections.filter(item => item.name === '.rdata')) {
  for (let at = section.offset; at + 32 <= section.offset + section.size; at += 8) {
    const keySize = Number(binary.readBigUInt64LE(at + 8));
    if (keySize < 4 || keySize > 240) continue;
    const keyBytes = slice(Number(binary.readBigUInt64LE(at)), keySize);
    if (!keyBytes || keyBytes[0] !== 47) continue;
    const key = keyBytes.toString('utf8');
    if (!/^\/(?:[A-Za-z0-9_.-]+\/)*[A-Za-z0-9_.-]+\.(?:html|css|js|mjs|svg|png|jpg|jpeg|webp|gif|ico|woff2?|ttf|otf|json)$/.test(key)) continue;
    if (key.split('/').includes('..')) continue;
    const compressed = slice(Number(binary.readBigUInt64LE(at + 16)), Number(binary.readBigUInt64LE(at + 24)));
    if (!compressed) continue;
    let content;
    try { content = brotliDecompressSync(compressed, { maxOutputLength: 64 * 1024 * 1024 }); }
    catch { continue; }
    const target = resolve(destination, '.' + key);
    if (!target.startsWith(destination + sep)) throw new Error('Asset outside extraction directory');
    if (assets.has(key)) continue;
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, content);
    assets.set(key, { path: key, bytes: content.length, compressedBytes: compressed.length, sha256: createHash('sha256').update(content).digest('hex') });
  }
}
if (!assets.has('/index.html')) throw new Error('No complete Tauri frontend found');
const manifest = {
  source,
  sourceSha256: createHash('sha256').update(binary).digest('hex'),
  extraction: 'PE32+ embedded asset pointer/length entries, Brotli decompression',
  assets: [...assets.values()].sort((a, b) => a.path.localeCompare(b.path)),
};
writeFileSync(resolve(destination, 'extraction-manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
const extensions = {};
for (const item of assets.values()) {
  const ext = item.path.split('.').at(-1);
  extensions[ext] = (extensions[ext] ?? 0) + 1;
}
console.log(JSON.stringify({ destination, files: assets.size, bytes: [...assets.values()].reduce((n, item) => n + item.bytes, 0), extensions }, null, 2));
