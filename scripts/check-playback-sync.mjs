// Actual extracted Dotify fullscreen with synthetic player snapshots and delayed lyrics.
// No Spotify/Yandex accounts, music playback or service requests.
import {build} from 'esbuild';
import {createServer} from 'node:http';
const result=await build({stdin:{contents:`
import React from 'react';import {createRoot} from 'react-dom/client';
import {App} from './frontend/src/frame-host.jsx';
const a={uri:'spotify:track:fixtureA',title:'Первый трек',artist:'Проверка A',cover:'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024b8112afe5536854bbaa9a0a',duration:180000};
const b={uri:'spotify:track:fixtureB',title:'Сейчас играет второй трек',artist:'Проверка B',cover:'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e027e407bdfdc95372ac808e375',duration:187000};
const listeners=new Set();let resolveOld,progress=12000;
const publish=()=>listeners.forEach(fn=>fn(controller.state));
const controller={state:{active:true,current:{uri:'spotify:track:recommendation',title:'Другая рекомендация',artist:'Другой исполнитель',cover:a.cover,duration:327000},nativeUri:a.uri,nativeTrack:a,connected:true,bridgeOnline:true,playing:true,progress,duration:180000,volume:.6},
subscribe:fn=>{listeners.add(fn);return()=>listeners.delete(fn)},togglePlay:async()=>{controller.state={...controller.state,playing:!controller.state.playing};publish()},player:{
home:async()=>({recent:[a,b],albums:[],playlists:[]}),queue:()=>[],library:async()=>[],
lyrics:uri=>{document.querySelector('#requests').textContent=uri;if(uri===a.uri)return new Promise(resolve=>{resolveOld=resolve});return Promise.resolve({synced:true,lines:[{text:'Строка только второго трека',start:0}]})},
}};
document.querySelector('#switch').onclick=()=>{progress=25000;controller.state={...controller.state,nativeUri:b.uri,nativeTrack:b,progress,duration:b.duration};publish()};
document.querySelector('#old').onclick=()=>{resolveOld?.({synced:true,lines:[{text:'Устаревший текст первого трека',start:0}]});document.querySelector('#late').textContent='Старый ответ доставлен'};
document.querySelector('#clear').onclick=()=>{controller.state={...controller.state,nativeUri:null,nativeTrack:null,playing:false,progress:0,duration:0};publish()};
setInterval(()=>{if(controller.state.playing){progress+=250;controller.state={...controller.state,progress};publish()}},250);
createRoot(document.querySelector('#app')).render(<App controller={controller} demo/>);
`,resolveDir:process.cwd(),loader:'jsx'},bundle:true,write:false,format:'esm',loader:{'.html':'text'},define:{'process.env.NODE_ENV':'"production"'}});
const html='<!doctype html><meta charset="utf-8"><title>Проверка синхронизации Dotify</title><style>body{margin:0;background:#222;color:white;font-family:sans-serif}#controls{height:44px;display:flex;gap:12px;align-items:center}</style><div id="controls"><span>Локальный тест без звука</span><button id="switch">Сменить фактический трек</button><button id="old">Доставить старый текст</button><button id="clear">Очистить текущий трек</button><output id="requests"></output><output id="late"></output></div><div id="app"></div><script type="module" src="/check.js"></script>';
createServer((req,res)=>{const js=req.url==='/check.js';res.writeHead(200,{'Content-Type':js?'text/javascript':'text/html; charset=utf-8','Cache-Control':'no-store'});res.end(js?result.outputFiles[0].text:html)}).listen(4178,'127.0.0.1',()=>console.log('Playback sync fixture: http://127.0.0.1:4178'));
