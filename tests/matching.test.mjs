import { test } from 'node:test';
import assert from 'node:assert/strict';
import { queries, scoreTrack, findSpotifyTrack } from '../frontend/src/matching.js';
const wave = (title, artist='Artist') => ({title,artist,artists:[artist],duration_ms:180000});
const song = (name, artist='Artist', extra={}) => ({uri:'spotify:track:recording',name,artists:[{name:artist}],duration_ms:181000,...extra});

test('matching accepts transliteration, minor title spelling and featured artist formatting', async()=>{
  for (const [source,target] of [
    [wave('Звезда по имени Солнце','Кино'),song('Zvezda po imeni Solntse','Kino')],
    [wave('Beautiful Night'),song('Beautifull Night')],
    [wave('Future Rmx \'98','Jog'),song('Future Remix 98','Jog')],
    [wave('Song (feat. Guest)'),song('Song')],
    [wave('Song (DJ Remix)'),song('Song - DJ Remix')],
    [wave('Song (DJ Remix)'),song('Song DJ Remix')],
  ]) assert.equal(await findSpotifyTrack(source,async()=>({tracks:{items:[target]}})),target,source.title);
  assert(queries(wave('Звезда по имени Солнце','Кино')).some(q=>q.includes('zvezda po imeni solntse kino')));
});

test('fuzzy matches still reject different recordings, artists and uncertain durations',()=>{
  for (const [source,target] of [
    [wave('Beautiful Night'),song('Beautiful Night','Another Artist')],
    [wave('Beautiful Night'),song('Beautiful Night (Live)')],
    [wave('Beautiful Night (feat. Guest) - Live'),song('Beautiful Night')],
    [wave('Beautiful Night feat. Guest (Live)'),song('Beautiful Night')],
    [wave('Beautiful Night (One Remix)'),song('Beautiful Night (Two Remix)')],
    [wave('Future Remix 98'),song('Future Remix 99')],
    [wave('Beautiful Night'),song('Beautifull Night','Artist',{duration_ms:0})],
    [wave('Beautiful Night'),song('Beautifull Night','Artist',{duration_ms:195000})],
    [wave('Love Me'),song('Love Me Not')],
    [wave('Beautiful Night'),song('Beautiful Night','Artist',{is_playable:false})],
  ]) assert.equal(scoreTrack(source,target),0,`${source.title} / ${target.name}`);
});

test('looser query finds a confident candidate and ambiguous fuzzy titles are skipped',async()=>{
  const source=wave('Beautiful Night (feat. Guest)'),target=song('Beautifull Night');
  const asked=[];
  assert.equal(await findSpotifyTrack(source,async query=>{asked.push(query);return {tracks:{items:query.startsWith('track:')?[]:[target]}}}),target);
  assert.equal(asked.length,2);
  const other=song('Beautiful Nights','Artist',{uri:'spotify:track:other'});
  assert.equal(await findSpotifyTrack(wave('Beautiful Night'),async()=>({tracks:{items:[target,other]}})),null);
  await assert.rejects(findSpotifyTrack(source,async()=>{throw new Error('429')}),/429/);
});
