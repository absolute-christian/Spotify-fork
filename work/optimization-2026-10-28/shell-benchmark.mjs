import {shellDom} from '../../tests/helpers/shell-dom.mjs';
import {readFile,writeFile} from 'node:fs/promises';
const baseline=new URL('./frontend-before/spotify-shell.js',import.meta.url);
await writeFile(baseline,(await readFile(baseline,'utf8')).replaceAll("from './","from '../../../frontend/src/"));
const results={synthetic:true,mutationBatches:1000};
for(const [label,url] of [['before',baseline],['after',new URL('../../frontend/src/spotify-shell.js',import.meta.url)]]){
  const {replaceSpotifyPanels}=await import(url),f=shellDom(),restore=replaceSpotifyPanels(f.frame);
  const initial=f.counts.children;
  for(let i=0;i<1000;i++)f.observers[0].callback([{type:'childList',target:f.deep}]);
  results[label]={initialSiblingReads:initial,repeatedSiblingReads:f.counts.children-initial};restore();
}
await writeFile(new URL('./shell-results.json',import.meta.url),JSON.stringify(results,null,2));console.log(JSON.stringify(results));
