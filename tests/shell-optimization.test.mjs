import {test} from 'node:test';
import assert from 'node:assert/strict';
import {replaceSpotifyPanels} from '../frontend/src/spotify-shell.js';
import {shellDom} from './helpers/shell-dom.mjs';

test('native subtree changes do not rescan shell but new route siblings are hidden immediately',()=>{
  const f=shellDom(),restore=replaceSpotifyPanels(f.frame),observer=f.observers[0];
  assert(f.rail.hasAttribute('data-wave-native-panel'));
  const before=f.counts.children;
  for(let i=0;i<1000;i++)observer.callback([{type:'childList',target:f.deep}]);
  assert.equal(f.counts.children,before);
  const fresh=f.content.append(f.newNode());observer.callback([{type:'childList',target:f.content}]);
  assert(fresh.hasAttribute('data-wave-native-panel'));
  fresh.remove();observer.callback([{type:'childList',target:f.content}]);
  assert.equal(fresh.hasAttribute('data-wave-native-panel'),false);
  restore();assert.equal(f.rail.hasAttribute('data-wave-native-panel'),false);assert(observer.disconnected);
});

test('opening and closing a nested native profile menu restores hidden panels',()=>{
  const f=shellDom(),restore=replaceSpotifyPanels(f.frame),observer=f.observers[0];
  const menu=f.native.append(f.newNode());menu.setAttribute('role','menu');
  f.root.setAttribute('data-wave-profile-open','');observer.callback([{type:'attributes',target:f.root}]);
  assert(f.rail.hasAttribute('data-wave-native-menu'));assert.equal(f.rail.hasAttribute('data-wave-native-panel'),false);
  f.root.removeAttribute('data-wave-profile-open');observer.callback([{type:'attributes',target:f.root}]);
  assert.equal(f.rail.hasAttribute('data-wave-native-menu'),false);assert(f.rail.hasAttribute('data-wave-native-panel'));
  restore();
});
