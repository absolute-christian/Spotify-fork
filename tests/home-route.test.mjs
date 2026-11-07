import { test } from 'node:test';
import assert from 'node:assert/strict';
import { replaceSpotifyHome } from '../frontend/src/home-route.js';

test('native Home is replaced without redirecting other Spotify destinations or looping', () => {
  const changes = [], homeEvents = [], listeners = new Set();
  const history = { location: { pathname: '/' },
    listen: fn => { listeners.add(fn); return () => listeners.delete(fn); },
    replace: pathname => { changes.push(pathname); history.location = { pathname }; for (const listener of listeners) listener(history.location); } };
  const dispose = replaceSpotifyHome(history, () => homeEvents.push('home'));
  assert.deepEqual(changes, ['/my-wave']);
  for (const fn of listeners) fn({ pathname: '/playlist/chosen' });
  for (const fn of listeners) fn({ location: { pathname: '/home' } });
  assert.deepEqual(changes, ['/my-wave', '/my-wave']);
  assert.equal(homeEvents.length, 2);
  dispose(); assert.equal(listeners.size, 0);
});

test('startup opens Dotify even when Spotify restores a previous native page', () => {
  const changes = [];
  const history = { location: { pathname: '/playlist/restored' }, listen: () => () => {}, replace: path => changes.push(path) };
  replaceSpotifyHome(history);
  assert.deepEqual(changes, ['/my-wave']);
});
