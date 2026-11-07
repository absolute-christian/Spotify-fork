// A focused preview of the rendered original settings block, never a redrawn mockup.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import generate from '@babel/generator';
import vm from 'node:vm';
import { dirname } from 'node:path';

const file = process.argv[2];
if (!file) throw new Error('Provide an absolute output fragment path');
const ast = parse(readFileSync('frontend/dotify/original/globals-Bc3qFUyf.js', 'utf8'), { sourceType: 'module' });
let scope;
traverse(ast, { Program(path) { scope = path.scope; path.stop(); } });
const names = new Set();
function need(name) {
  if (names.has(name)) return;
  names.add(name);
  const binding = scope.getBinding(name);
  if (!binding || binding.kind === 'module') throw new Error(`Unexpected theme dependency ${name}`);
  binding.path.traverse({ ReferencedIdentifier(path) {
    const candidate = scope.getBinding(path.node.name);
    if (candidate && path.scope.getBinding(path.node.name) === candidate) need(path.node.name);
  } });
}
['vi', 'Ci', 'xi'].forEach(need);
const body = ast.program.body.flatMap(node => {
  if (node.type === 'VariableDeclaration') { const declarations = node.declarations.filter(d => names.has(d.id.name)); return declarations.length ? [{ ...node, declarations }] : []; }
  return node.type === 'FunctionDeclaration' && names.has(node.id.name) ? [node] : [];
});
const source = body.map(node => generate(node).code).join('\n');
const palettes = vm.runInNewContext(`${source}; vi.map(t => ({id:t.id,name:t.name,colors:xi(t)}))`, {}, { timeout: 1000 });
const groups = vm.runInNewContext(`${source}; Ci`, {}, { timeout: 1000 });
const markup = readFileSync('.local/original-theme-block.html', 'utf8');
const css = readFileSync('.local/dotify-original/assets/globals-bA04W_Hq.css', 'utf8').replace(/@font-face\s*\{[^}]*\}/g, '');
const script = `
const root=document.getElementById('dotify-theme-preview');
const palettes=${JSON.stringify(palettes)}, groups=${JSON.stringify(groups)};
const saved=window.openai?.widgetState?.modelContent;
const state={theme:saved?.theme||'nord',mode:saved?.mode||'dark',width:100};
const block=root.querySelector('.space-y-4');
const buttons=[...block.querySelectorAll('button')];
const radios=buttons.filter(b=>b.getAttribute('role')==='radio');
const choices=buttons.filter(b=>b.classList.contains('choice'));
let previous=[];
function render(){
 const group=groups.find(g=>g.id===state.theme);
 const chosen=palettes.find(t=>t.id===(group?(state.mode==='light'?group.lightThemeId:group.darkThemeId):state.theme))||palettes.find(t=>t.id==='dark');
 previous.forEach(k=>root.style.removeProperty(k));Object.entries(chosen.colors).forEach(([k,v])=>root.style.setProperty(k,v));previous=Object.keys(chosen.colors);
 root.style.maxWidth=state.width+'%'; root.classList.toggle('light',state.mode==='light');root.classList.toggle('dark',state.mode!=='light');
 choices.forEach(b=>{const g=groups.find(g=>g.name===b.textContent.trim());const active=(g?.id||b.textContent.trim().toLowerCase())===state.theme;b.classList.toggle('choice-on',active);b.setAttribute('aria-pressed',String(active));});
 radios.forEach(b=>b.setAttribute('aria-checked',String(b.getAttribute('aria-label')===(state.mode==='light'?'Светлая':'Тёмная'))));
}
function remember(){window.openai?.setWidgetState?.({modelContent:{theme:state.theme,mode:state.mode},privateContent:null})?.catch(()=>{});}
choices.forEach(b=>{const name=b.textContent.trim();if(name==='Под трек'){b.disabled=true;return;}b.addEventListener('click',()=>{state.theme=groups.find(g=>g.name===name)?.id||name.toLowerCase();render();remember();});});
radios.forEach(b=>b.addEventListener('click',()=>{state.mode=b.getAttribute('aria-label')==='Светлая'?'light':b.getAttribute('aria-label')==='Системная'?(matchMedia('(prefers-color-scheme:light)').matches?'light':'dark'):'dark';render();remember();}));
const create=buttons.find(b=>b.getAttribute('aria-label')==='Создать новую тему');if(create)create.remove();
render();
let supported=false;
if(globalThis.Tweak){const tweak=new Tweak({container:root,onChange:()=>{render();remember();}});supported=tweak.supported;tweak.addSlider(state,'width',{label:'Ширина блока',min:80,max:100,unit:'%',reference:'frontend/dotify/original/view-B8ykjgw8.js'});tweak.addSelect(state,'mode',{label:'Режим',options:[{label:'Тёмный',value:'dark'},{label:'Светлый',value:'light'}],reference:'themeSettings.mode'});}
if(!supported){const feedback=document.createElement('button');feedback.type='button';feedback.textContent='Передать выбранную тему';feedback.className='mt-4 text-sm';const output=document.createElement('output');output.className='block mt-2 text-sm';feedback.addEventListener('click',async()=>{const prompt='Применить в проекте forkspotify тему '+state.theme+', режим '+state.mode+'. Использовать исходную палитру Dotify';if(window.openai?.sendFollowUpMessage){await window.openai.sendFollowUpMessage({prompt,title:'Выбранная тема'});}else output.textContent=prompt;});root.append(feedback,output);}
window.addEventListener('openai:set_globals',e=>{const s=e.detail?.globals?.widgetState?.modelContent;if(s?.theme&&s?.mode){Object.assign(state,s);render();}});
`;
const fragment = `<style>${css}\n#dotify-theme-preview{box-sizing:border-box;margin-inline:auto;padding:20px;background:hsl(var(--background));color:hsl(var(--foreground));font-family:Verdana,sans-serif;--radius-card:8px;--radius-cover:12px;--radius-button:12px;--radius-input:8px;container-type:inline-size;container-name:page}</style>\n<div id="dotify-theme-preview" aria-label="Оригинальные темы Dotify">${markup}</div>\n<script>${script}</script>\n`;
if (Buffer.byteLength(fragment) >= 1024 * 1024) throw new Error('Preview exceeds inline size limit');
mkdirSync(dirname(file), { recursive: true });
writeFileSync(file, fragment);
console.log('Original theme preview written');
