import {test} from 'node:test';
import assert from 'node:assert/strict';
import {SpotifyAudio} from '../frontend/src/audio-settings.js';
function fixture(max=4){
  const setting=value=>({getValue:async()=>value,setValue:async next=>{value=next;}});
  const api={SettingsAPI:{quality:{normalizeVolume:setting(true),streamingQuality:setting(0),maxSupportedQuality:setting(max)},playback:{gapless:setting(true),audioCrossfade:setting(false)}}};
  let device='';api.ExclusiveModeAPI={audioDevices:()=>[{id:'speaker',description:'Speakers',present:true},{id:'old',description:'Old',present:false}],getSelectedAudioOutputDevice:async()=>device,setSelectedAudioOutputDevice:async value=>{device=value}};
  return new SpotifyAudio(api);
}
test('original audio controls read and change actual Spotify descriptors and output devices',async()=>{
  const audio=fixture();let state=await audio.state();
  assert.equal(state.normalization,true);assert.equal(state.device,'default');assert.deepEqual(state.devices,[{deviceId:'speaker',label:'Speakers'}]);
  assert.equal((await audio.update({normalization:false})).normalization,false);
  assert.equal((await audio.update({crossfade:true})).crossfade,true);
  assert.equal((await audio.update({gapless:false})).gapless,false);
  assert.equal((await audio.update({quality:'veryhigh'})).quality,4);
  assert.equal((await audio.update({device:'speaker'})).device,'speaker');
  assert.equal((await audio.update({device:'default'})).device,'default');
});
test('audio does not pretend unsupported quality or unconfirmed changes succeeded',async()=>{
  const audio=fixture(3);
  await assert.rejects(audio.update({quality:'max'}),/недоступно/);
  await assert.rejects(audio.update({device:'old'}),/недоступно/);
  await assert.rejects(audio.update({normalization:'false'}),/значение/);
  audio.platform.SettingsAPI.playback.gapless.setValue=async()=>{};
  await assert.rejects(audio.update({gapless:false}),/не подтвердил/);
  await assert.rejects(new SpotifyAudio({}).state(),/не предоставляет/);
});
