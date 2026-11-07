const groups = ['themeSettings', 'uiSettings', 'playerSettings'];
const mediaUsages = ['background', 'cover', 'cursor', 'slider', 'visualizer'];
function plain(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {};
  return Object.fromEntries(Object.entries(value).filter(([key]) => !['__proto__', 'prototype', 'constructor', 'token', 'accessToken', 'access_token', 'refresh_token', 'password'].includes(key)).map(([key, val]) => [key, Array.isArray(val) ? val.map(item => item && typeof item === 'object' ? plain(item) : item) : val && typeof val === 'object' ? plain(val) : val]));
}
function validateSettings(group, value) {
  const objectFields = group === 'uiSettings' ? ['font', 'tabs', 'transparency', 'scale', 'visualizer'] : group === 'playerSettings' ? ['view', 'cover', 'queue', 'visualizer', 'miniplayer', 'overlay'] : [];
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('Некорректные настройки в пресете Dotify');
  if (group === 'uiSettings' && typeof value.tabs === 'string') value = { ...value, tabs: { position: value.tabs, style: 'default', autohide: false } };
  for (const key of objectFields) if (key in value && (!value[key] || typeof value[key] !== 'object' || Array.isArray(value[key]))) throw new Error('Некорректные настройки в пресете Dotify');
  return plain(value);
}
export function safeMediaUrl(value) {
  if (typeof value !== 'string' || value.length > 30_000_000) return '';
  return /^https:\/\/[^\s]+$/i.test(value) || /^data:(image\/(png|jpeg|webp|gif)|video\/(mp4|webm));base64,[a-z\d+/=\s]+$/i.test(value) ? value : '';
}
export function normalizePreset(input, fallback = 'Импортированный пресет') {
  if (!input || typeof input !== 'object' || Array.isArray(input)) throw new Error('Неизвестный формат пресета Dotify');
  const data = input.data || input, normalized = {};
  for (const group of groups) if (data[group] !== undefined) normalized[group] = validateSettings(group, data[group]);
  if (!normalized.uiSettings && data.ui) normalized.uiSettings = validateSettings('uiSettings', data.ui);
  if (!normalized.themeSettings && typeof data.theme === 'string') normalized.themeSettings = { theme: data.theme };
  if (data.transparency) normalized.uiSettings = { ...normalized.uiSettings, transparency: plain(data.transparency) };
  if (typeof normalized.uiSettings?.tabs === 'string') normalized.uiSettings.tabs = { position: normalized.uiSettings.tabs, style: 'default', autohide: false };
  const gifs = {};
  for (const usage of mediaUsages) { const url = safeMediaUrl(data.gifs?.[usage]); if (url) gifs[usage] = url; }
  const legacy = Array.isArray(data.gifSettings) ? data.gifSettings : [];
  for (const asset of legacy) if (mediaUsages.includes(asset?.usage) && safeMediaUrl(asset.url)) gifs[asset.usage] = asset.url;
  if (Object.keys(gifs).length) normalized.gifs = gifs;
  if (!Object.keys(normalized).length) throw new Error('В файле нет настроек оформления Dotify');
  return { name: String(input.name || fallback).slice(0, 120), data: normalized,
    thumbnail: safeMediaUrl(input.thumbnail) || gifs.background || gifs.cover || '' };
}
