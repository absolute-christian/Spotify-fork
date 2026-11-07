// Isolated UI check. No real OAuth, account API or credential storage is used.
import { build } from 'esbuild';
import { createServer } from 'node:http';
const result = await build({ stdin: { contents: `
import React from 'react';import {createRoot} from 'react-dom/client';
import {App} from './frontend/src/frame-host.jsx';
const listeners=new Set();let attempts=0;
const controller={state:{active:false,connected:false,bridgeOnline:true,pendingFeedback:0,volume:.5,progress:0,duration:0},
subscribe:fn=>{listeners.add(fn);return()=>listeners.delete(fn)},checkBridge:async()=>{},
player:{home:async()=>({recent:[],albums:[],playlists:[]}),library:async()=>[],queue:()=>[],writablePlaylists:async()=>[]},
connect:async()=>{document.querySelector('#attempts').textContent='Auth attempts: '+(++attempts);await new Promise(r=>setTimeout(r,500));throw new Error('Локальная проверка: тестовый токен отклонён')},start:async()=>{},stop:async()=>{}};
createRoot(document.querySelector('#app')).render(<App controller={controller}/>);
`, resolveDir: process.cwd(), loader: 'jsx' }, bundle: true, write: false, format: 'esm', loader: { '.html': 'text' }, define: { 'process.env.NODE_ENV': '"production"' } });
createServer((req,res)=>{const js=req.url==='/check.js';res.writeHead(200,{'Content-Type':js?'text/javascript':'text/html; charset=utf-8','Cache-Control':'no-store'});res.end(js?result.outputFiles[0].text:'<!doctype html><meta charset="utf-8"><title>Isolated auth form fixture</title><p>Локальная проверка формы, только вымышленный токен, без подключения к Яндексу</p><output id="attempts">Auth attempts: 0</output><div id="app"></div><script type="module" src="/check.js"></script>')}).listen(4175,'127.0.0.1',()=>console.log('Isolated auth fixture: http://127.0.0.1:4175'));
