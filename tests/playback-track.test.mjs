import { test } from 'node:test';
import assert from 'node:assert/strict';
import { playbackTrack } from '../frontend/dotify/playback-track.js';

test('UI follows the actual Spotify item even while wave recommends another recording',()=>{
  const current={uri:'spotify:track:recommended',title:'Recommendation',cover:'recommendation'};
  const nativeTrack={uri:'spotify:track:playing',title:'Actual recording',cover:'actual'};
  assert.equal(playbackTrack({active:true,current,nativeTrack,nativeUri:nativeTrack.uri}),nativeTrack);
  assert.equal(playbackTrack({active:false,current,nativeTrack}),nativeTrack);
  assert.equal(playbackTrack({active:true,current,nativeTrack:null}),null);
  assert.equal(playbackTrack({active:true,current,nativeTrack,nativeUri:'spotify:track:changed'}),null);
  assert.equal(playbackTrack({current}),current);
});
