// Account-free UI fixture: real search adapter, synthetic native GraphQL responses.
import { build } from 'esbuild';
import { createServer } from 'node:http';
import { uiTestShell } from './ui-test-shell.mjs';
const result = await build({ stdin: { contents: `
import React from 'react';import {createRoot} from 'react-dom/client';
import {App} from './frontend/src/frame-host.jsx';import {SpotifyAdapter} from './frontend/src/spicetify.js';
let count=0;const adapter=new SpotifyAdapter({Player:{},GraphQL:{Request:async(def,variables)=>{
document.querySelector('#requests').textContent='Requests: '+(++count);
if(variables.searchTerm==='429')return {code:429,error:'rate limit',headers:{'Retry-After':'60'}};
return {data:{searchV2:{tracksV2:{items:[{item:{data:{__typename:'Track',uri:'spotify:track:fixture1',name:variables.searchTerm,artists:{items:[{profile:{name:'Локальная проверка'}}]},duration:{totalMilliseconds:180000}}}}]},artists:{items:[]},albumsV2:{items:[]},playlists:{items:[]}}}};
}}});
const controller={state:{active:false,connected:false,bridgeOnline:false,volume:.5},subscribe:()=>()=>{},start:async()=>{},stop:async()=>{},
player:{catalog:(...args)=>adapter.catalog(...args),home:async()=>({recent:[],albums:[],playlists:[]}),library:async()=>[],queue:()=>[],writablePlaylists:async()=>[]}};
createRoot(document.querySelector('#app')).render(<App controller={controller}/>);
`, resolveDir: process.cwd(), loader: 'jsx' }, bundle: true, write: false, format: 'esm', plugins: [uiTestShell], loader: { '.html': 'text' }, define: { 'process.env.NODE_ENV': '"production"' } });
createServer((req,res)=>{const js=req.url==='/check.js';res.writeHead(200,{'Content-Type':js?'text/javascript':'text/html; charset=utf-8','Cache-Control':'no-store'});res.end(js?result.outputFiles[0].text:'<!doctype html><meta charset="utf-8"><title>Search fixture</title><p>Локальная проверка поиска, без аккаунтов и сети</p><output id="requests">Requests: 0</output><div id="app"></div><script type="module" src="/check.js"></script>')}).listen(4176,'127.0.0.1',()=>console.log('Search fixture: http://127.0.0.1:4176'));
