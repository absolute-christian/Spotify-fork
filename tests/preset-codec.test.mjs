import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { normalizePreset, safeMediaUrl } from '../frontend/dotify/preset-codec.js';

test('legacy Dotify example maps background, cover and transparency and roundtrips', () => {
  const [example] = JSON.parse(readFileSync(new URL('../frontend/dotify/example-presets.json', import.meta.url)));
  const normalized = normalizePreset(example);
  assert.deepEqual(Object.keys(normalized.data.gifs).sort(), ['background', 'cover']);
  assert.deepEqual(normalized.data.uiSettings.transparency, { enabled: true, opacity: 80 });
  assert.deepEqual(normalizePreset(JSON.parse(JSON.stringify(normalized))), normalized);
});

test('preset import excludes credentials, unrelated data and prototype keys', () => {
  const source = JSON.parse('{"name":"test","token":"secret","data":{"uiSettings":{"font":{"family":"Verdana","token":"secret"},"__proto__":{"polluted":true}},"playerSettings":{"password":"secret","miniplayer":{"style":"full"}},"session":{"access_token":"secret"}}}');
  const saved = JSON.stringify(normalizePreset(source));
  assert.ok(!saved.includes('secret')); assert.ok(!saved.includes('__proto__')); assert.equal({}.polluted, undefined);
  assert.equal(normalizePreset(source).data.playerSettings.miniplayer.style, 'full');
});

test('custom media disallows executable, local and insecure URLs', () => {
  for (const url of ['javascript:alert(1)', 'file:///C:/secret', 'http://example.com/a.gif', 'data:text/html;base64,YQ==']) assert.equal(safeMediaUrl(url), '');
  assert.equal(safeMediaUrl('https://example.com/a.gif'), 'https://example.com/a.gif');
  assert.throws(() => normalizePreset({ token: 'secret' }), /настроек/);
});

test('malformed settings fail before replacing working UI settings', () => {
  for (const input of [{ uiSettings: { font: null } }, { playerSettings: { miniplayer: [] } }, { themeSettings: 'invalid' }]) assert.throws(() => normalizePreset(input), /Некорректные настройки/);
});
