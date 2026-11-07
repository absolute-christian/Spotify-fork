// Snapshot of original rendered components, not a separately drawn interface.
import { readFileSync, writeFileSync } from 'node:fs';
const target = process.argv[2];
if (!target) throw new Error('Provide an absolute fragment path');
let markup = readFileSync('.local/original-shell-block.html', 'utf8');
// Album artwork is omitted here: inline previews do not allow Spotify CDN images.
markup = markup.replace(/<img\b[^>]*>/g, '').replace(/\s+tabindex="[^"]*"/g, '');
const vars = readFileSync('.local/original-shell-vars.txt', 'utf8');
const css = ['globals-bA04W_Hq.css', 'view-BA7NuomZ.css', 'view-D_3niiR2.css'].map(name => readFileSync(`.local/dotify-original/assets/${name}`, 'utf8')).join('\n').replace(/@font-face\s*\{[^}]*\}/g, '');
const script = `
const root=document.getElementById('dotify-shell-preview');
const navigation=root.querySelector('[role="tablist"]').parentElement;
const mini=root.querySelector('[data-miniplayer]');
const saved=window.openai?.widgetState?.modelContent?.dotifyShell;
const state={height:620,navOffset:0,miniWidth:100,...saved};
navigation.setAttribute('aria-label','Навигация Dotify');mini.setAttribute('aria-label','Плеер Dotify');
function render(){root.style.height=state.height+'px';navigation.style.translate=state.navOffset+'px 0';mini.style.width=state.miniWidth+'%';mini.style.marginInline='auto';}
function remember(){window.openai?.setWidgetState?.({modelContent:{dotifyShell:state},privateContent:null})?.catch(()=>{});}
render();
let supported=false;
if(globalThis.Tweak){const stage=new Tweak({container:root,onChange:()=>{render();remember();}});supported=stage.supported;stage.addSlider(state,'height',{label:'Высота окна',min:440,max:720,unit:'px',reference:'frontend/src/frame-host.jsx'});const nav=new Tweak({container:navigation,onChange:()=>{render();remember();}});nav.addSlider(state,'navOffset',{label:'Сдвиг по горизонтали',min:-40,max:40,unit:'px',reference:'frontend/dotify/entry.jsx'});const player=new Tweak({container:mini,onChange:()=>{render();remember();}});player.addSlider(state,'miniWidth',{label:'Ширина плеера',min:80,max:100,unit:'%',reference:'frontend/dotify/entry.jsx'});}
if(!supported){const feedback=document.createElement('button');feedback.textContent='Передать расположение';const out=document.createElement('output');feedback.onclick=async()=>{const prompt='В forkspotify подкорректируй размещение оригинальных блоков Dotify: '+JSON.stringify(state)+'. Сохрани оригинальное оформление';if(window.openai?.sendFollowUpMessage)await window.openai.sendFollowUpMessage({prompt,title:'Расположение блоков Dotify'});else out.textContent=prompt;};root.after(feedback,out);}
window.addEventListener('openai:set_globals',e=>{const value=e.detail?.globals?.widgetState?.modelContent?.dotifyShell;if(value){Object.assign(state,value);render();}});
`;
const fragment = `<style>${css}\n#dotify-shell-preview{position:relative;width:100%;height:620px;overflow:hidden;background:hsl(var(--background));color:hsl(var(--foreground));font-family:Verdana,sans-serif;${vars}}#dotify-shell-preview *{box-sizing:border-box}#dotify-shell-preview .shell-floating{max-width:100%}@media(max-width:600px){#dotify-shell-preview aside{display:none}#dotify-shell-preview .mini-player-wrapper .grid{grid-template-columns:minmax(0,1fr) auto;height:auto;gap:4px 8px;padding:8px 12px}#dotify-shell-preview .mini-player-wrapper .grid>:first-child{grid-column:1/-1;width:100%}}</style>\n<div id="dotify-shell-preview" class="dark" aria-label="Оригинальные блоки Dotify, демонстрация без обложек и звука">${markup}</div>\n<script>${script}</script>\n`;
if (Buffer.byteLength(fragment) > 1024*1024) throw new Error('Inline preview exceeds 1 MB');
writeFileSync(target, fragment);
console.log('Original shell preview written');
