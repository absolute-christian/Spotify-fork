export function downloadUiFile(filename, content, binary = false, doc = document) {
  if (typeof filename !== 'string' || typeof content !== 'string' || content.length > 40_000_000) throw new Error('Файл слишком большой');
  const safeName = filename.split(/[\\/]/).pop().replace(/[<>:"|?*\x00-\x1f]/g, '_').slice(0, 160) || 'dotify-preset.json';
  const body = binary ? Uint8Array.from(atob(content), char => char.charCodeAt(0)) : content;
  const url = URL.createObjectURL(new Blob([body], { type: binary ? 'application/octet-stream' : 'application/json' }));
  const link = doc.createElement('a'); link.href = url; link.download = safeName; doc.body.append(link); link.click(); link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
