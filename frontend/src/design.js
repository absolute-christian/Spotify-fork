export const defaults = Object.freeze({
  player: 'normal', align: 'center', coverSide: 'left', slider: 'normal', avatars: true,
  mini: 'rounded', miniPosition: 'bottom', miniBackground: 'theme', miniProgress: 'background',
  miniCover: 'round', miniShape: 'capsule', queue: true, queuePosition: 'bottom', queueExpanded: false,
  font: 'Verdana', fontSize: 16, weight: 'auto', radius: 12, theme: 'Neutral',
  navPosition: 'top', navStyle: 'floating',
});
const choices = {
  player: ['normal', 'vinyl', 'large'], align: ['left', 'center', 'right'], coverSide: ['left', 'right'],
  slider: ['normal', 'thin', 'smooth', 'wavy'], mini: ['off', 'full', 'rounded', 'hybrid', 'deck'],
  miniPosition: ['top', 'bottom', 'full', 'floating'], miniBackground: ['theme', 'cover', 'color'],
  miniProgress: ['line', 'background', 'ring'], miniCover: ['default', 'round'], miniShape: ['default', 'capsule'],
  queuePosition: ['bottom', 'left', 'right'], theme: ['Neutral', 'AMOLED'],
  font: ['Segoe UI', 'Verdana', 'Arial', 'Inter', 'Tahoma', 'Calibri', 'Arial Black', 'Georgia', 'monospace'],
  weight: ['auto', '400', '500', '600', '700'], navPosition: ['top', 'bottom', 'left', 'right'],
  navStyle: ['default', 'compact', 'round', 'floating'],
};
export function validateDesign(value) {
  const out = { ...defaults };
  for (const [key, options] of Object.entries(choices)) if (options.includes(value?.[key])) out[key] = value[key];
  for (const key of ['avatars', 'queue', 'queueExpanded']) if (typeof value?.[key] === 'boolean') out[key] = value[key];
  if ([12, 14, 16, 18, 20].includes(value?.fontSize)) out.fontSize = value.fontSize;
  if ([0, 6, 12, 24].includes(value?.radius)) out.radius = value.radius;
  return out;
}
export function loadDesign(storage) {
  try { return validateDesign(JSON.parse(storage.getItem('wave.design.v2'))); } catch { return { ...defaults }; }
}
export function saveDesign(storage, value) {
  try { storage.setItem('wave.design.v2', JSON.stringify(validateDesign(value))); } catch { /* Private browser storage can be disabled */ }
}
