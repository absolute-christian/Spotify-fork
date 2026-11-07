import {test} from 'node:test';
import assert from 'node:assert/strict';
import {bestArtwork} from '../frontend/src/artwork.js';
import {capCoverImage,largeCoverPatch,migrateLargeCover} from '../frontend/dotify/player-cover.js';

test('cover selects the largest provided source without fabricating a CDN image',()=>{
  assert.equal(bestArtwork([{url:'small',width:64},{url:'large',width:640},{url:'medium',width:300}]),'large');
  assert.equal(bestArtwork([{url:'small',width:64}],{image_xlarge_url:'spotify:image:large'}),'https://i.scdn.co/image/large');
  assert.equal(bestArtwork(null,{image_url:'fallback'}),'fallback');
});

test('source resolution caps the sized cover wrapper outside Dotify inset layers',()=>{
  const values=new Map();
  const wrapper={style:{width:'min(75cqw,75cqh,500px,var(--cover-native-size,500px))',setProperty:(key,value)=>values.set(key,value)}};
  const inset={style:{width:''},parentElement:wrapper};
  const image={naturalWidth:300,naturalHeight:300,parentElement:inset};
  capCoverImage({currentTarget:image});
  assert.equal(values.get('--cover-native-size'),'300px');
  image.naturalWidth=640;
  image.naturalHeight=640;
  capCoverImage({currentTarget:image});
  assert.equal(values.get('--cover-native-size'),'500px');
});

test('entering big mode enables the original cover-in-cover without changing other player modes',()=>{
  const normal={view:{style:'default'},cover:{coverincover:false}};
  assert.equal(largeCoverPatch(normal),normal);
  assert.deepEqual(largeCoverPatch({view:{style:'big'},cover:{position:'right',coverincover:false}}),{view:{style:'big'},cover:{position:'right',coverincover:true}});
  const data=new Map(),storage={getItem:key=>data.get(key),setItem:(key,value)=>data.set(key,value)};
  const original={playerSettings:{view:{style:'big'},cover:{coverincover:false}},themeSettings:{theme:'dark'}};
  const migrated=migrateLargeCover(original,storage);
  assert.equal(migrated.playerSettings.cover.coverincover,true);
  assert.equal(JSON.parse(data.get('forkspotify.dotify.settings.v1')).playerSettings.cover.coverincover,true);
  assert.equal(migrated.themeSettings.theme,'dark');
  assert.equal(original.playerSettings.cover.coverincover,false);
  // A later explicit choice is respected after the one-time migration.
  assert.equal(migrateLargeCover(original,storage).playerSettings.cover.coverincover,false);
});
