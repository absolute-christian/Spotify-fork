import { existsSync, readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { transformSync } from 'esbuild';

const expected = 'e222e41f4553e798f765283cd1c231ead118e9e45bd1420474588221ec792358';
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
export function ensureDotifySources() {
  const root = resolve('.local/dotify-original'), manifestPath = resolve(root, 'extraction-manifest.json');
  if (!existsSync(manifestPath)) {
    const exe = process.env.DOTIFY_EXE || 'C:/Program Files/Dotify/dotify.exe';
    if (!existsSync(exe)) throw new Error('Для первой сборки нужен установленный Dotify 2.3.7+rev.3 или DOTIFY_EXE с путём к этой версии');
    if (sha(readFileSync(exe)) !== expected) throw new Error('Версия Dotify отличается от адаптированной сборки 2.3.7+rev.3');
    execFileSync(process.execPath, ['scripts/extract-dotify.mjs', exe, root], { stdio: 'pipe' });
  }
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  if (manifest.sourceSha256 !== expected) throw new Error('Извлечённые ресурсы относятся к другой версии Dotify');
  for (const asset of manifest.assets) {
    const file = resolve(root, '.' + asset.path);
    if (!file.startsWith(root + '/') && !file.startsWith(root + '\\')) throw new Error('Некорректный путь ресурса');
    const bytes = readFileSync(file);
    if (sha(bytes) !== asset.sha256) throw new Error(`Изменён оригинальный ресурс ${asset.path}`);
    if (/\.(js|css)$/.test(asset.path)) {
      const target = resolve('.local/dotify-readable', '.' + asset.path);
      mkdirSync(dirname(target), { recursive: true });
      writeFileSync(target, transformSync(bytes.toString('utf8'), { loader: asset.path.endsWith('.css') ? 'css' : 'js', minify: false, legalComments: 'inline' }).code);
    }
  }
  const report = execFileSync(process.execPath, ['scripts/prepare-dotify.mjs'], { encoding: 'utf8', maxBuffer: 1024 * 1024 });
  writeFileSync('.local/dotify-prepare-report.json', report);
}
