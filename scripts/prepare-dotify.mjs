import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import generate from '@babel/generator';
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } from 'node:fs';
import { resolve, dirname, basename } from 'node:path';

const input = resolve('.local/dotify-readable/assets');
const original = resolve('.local/dotify-original/assets');
const output = resolve('frontend/dotify/original');
if (!existsSync(input)) throw new Error('Run node scripts/extract-dotify.mjs and format the extracted JavaScript first');
mkdirSync(output, { recursive: true });
const config = JSON.parse(readFileSync('frontend/dotify/adaptation.json', 'utf8'));
const modules = new Map();
const pendingBindings = [];
const vendor = file => ['vendor-ui-BwX-1h7U.js', 'vendor-icons-BAUiYk9X.js', 'vendor-proto-Cqb7N4jm.js', 'vendor-dnd-DQ9sAYhI.js'].includes(file);
function moduleFor(file) {
  if (modules.has(file)) return modules.get(file);
  const ast = parse(readFileSync(resolve(input, file), 'utf8'), { sourceType: 'module' });
  if (file === 'seek-KEpYCFv_.js') {
    let material;
    traverse(ast, { FunctionExpression(path) {
      if (path.node.params.length === 1 && path.node.body.body.some(statement => statement.type === 'VariableDeclaration') && generate(path.node).code.includes('Shell material:')) material = structuredClone(path.node);
    } });
    if (!material) throw new Error('Original Dotify material settings hook missing');
    // Retain the original browser material/radius effects; omit only Tauri clearEffects.
    for (const statement of material.body.body) if (statement.type === 'ExpressionStatement' && statement.expression.type === 'SequenceExpression') statement.expression.expressions = statement.expression.expressions.filter(expression => !generate(expression).code.includes('clearEffects'));
    ast.program.body.push({ ...material, type: 'FunctionDeclaration', id: { type: 'Identifier', name: 'OriginalMaterialSettings' } });
  }
  for (const node of ast.program.body) {
    if (node.type !== 'ImportDeclaration' || node.source.value !== './vendor-ui-BwX-1h7U.js') continue;
    for (const specifier of node.specifiers) {
      const adapter = { h: 'useLocation', Y: 'useNavigationType', a3: 'useSearchParams' }[specifier.imported?.name];
      if (adapter) { config.replace[file] ??= {}; config.replace[file][specifier.local.name] = adapter; }
    }
  }
  const added = new Map();
  traverse(ast, { ArrayExpression(path) {
    if (file === 'main-DVjTVWDM.js' && path.node.elements.map(e => e?.value).join(',') === 'all,tracks,artists,albums,playlists,lyrics') path.node.elements.pop();
    if (file === 'view-juTcB9hq.js' && path.node.elements.map(e => e?.name).join(',') === 'v2,p2') path.node.elements.pop();
    if (file !== 'view-B8ykjgw8.js') return;
    if (path.node.elements.map(e => e?.name).join(',') === 'g2,C2,I2') path.node.elements.shift();
    if (path.node.elements.map(e => e?.name).join(',') === 'h2,x2,b2,w2') path.node.elements.splice(3);
    const ids = path.node.elements.map(item => item?.type === 'ObjectExpression' ? item.properties.find(p => p.key?.name === 'id')?.value.value : null);
    if (ids.includes('profile') && ids.includes('appearance') && ids.includes('player')) path.node.elements = path.node.elements.filter((item, i) => !['services', 'integrations', 'main'].includes(ids[i]));
  }, CallExpression(path) {
    // The native host must follow the original animated surface, rather than
    // color-keying its entire WebView parent (which makes mouse input pass through).
    if (file === 'view-Bg7pA49X.js' && path.node.callee.type === 'MemberExpression' && ['jsx', 'jsxs'].includes(path.node.callee.property.name)) {
      const props = path.node.arguments[1];
      if (props?.properties?.some(property => property.key?.name === 'onMouseEnter'))
        props.properties.push(...parse('({"data-native-overlay-surface":""})').program.body[0].expression.properties);
    }
    // An independent WebView may open while playback is already running.
    // Suppressing the first presence animation freezes the original repeating
    // bars until isPlaying changes. Keep the original transitions on mount.
    if (file === 'view-Bg7pA49X.js' && path.node.callee.type === 'MemberExpression' && path.node.callee.property.name === 'jsx' && path.node.arguments[0]?.name === 'a') {
      const props = path.node.arguments[1];
      const initial = props?.properties?.find(property => property.key?.name === 'initial');
      if (initial?.value?.type === 'BooleanLiteral' && initial.value.value === false) initial.value.value = true;
    }
    if (file === 'view-juTcB9hq.js' && path.node.callee.type === 'MemberExpression' && path.node.callee.property.name === 'jsx' && path.node.arguments[0]?.type === 'MemberExpression' && path.node.arguments[0].property.name === 'Button') {
      const props = path.node.arguments[1];
      if (props?.properties?.some(p=>p.key?.value==='aria-label' && p.value?.arguments?.[0]?.value==='library.actions.shuffle_play')) {
        added.set('__fork_playlistShuffle','PlaylistShuffleButton');
        path.node.arguments[0]={type:'Identifier',name:'__fork_playlistShuffle'};
        path.node.arguments[1]=parse('({playlist:t2,disabled:y2})').program.body[0].expression;
      }
    }
    if (file === 'view--KkOqVCp.js' && path.node.callee.type === 'MemberExpression' && ['jsx','jsxs'].includes(path.node.callee.property.name)) {
      const props = path.node.arguments[1];
      const className = props?.properties?.find(property => property.key?.name === 'className')?.value;
      if (className?.value === 'relative w-full h-full flex items-center justify-center overflow-hidden') {
        props.properties.push(...parse('({style:o2?{containerType:"size"}:undefined})').program.body[0].expression.properties);
      }
      if (className?.type === 'CallExpression' && className.arguments[0]?.value === 'relative w-3/4 h-3/4 z-5') {
        added.set('__fork_coverLoaded', 'capCoverImage');
        className.arguments.push(parse('o2&&"aspect-square"').program.body[0].expression);
        props.properties.push(...parse('({onLoadCapture:o2?__fork_coverLoaded:undefined,style:o2?{width:"min(75cqw,75cqh,500px,var(--cover-native-size,500px))",height:"min(75cqw,75cqh,500px,var(--cover-native-size,500px))"}:undefined})').program.body[0].expression.properties);
      }
    }
    if (file === 'view-B8ykjgw8.js' && path.getFunctionParent()?.node.type === 'FunctionExpression' && generate(path.getFunctionParent().node).code.includes('audioDataValue:')) return;
    if (file === 'view-B8ykjgw8.js' && path.node.callee.type === 'FunctionExpression' && path.node.callee.body.body.some(statement => generate(statement).code.includes('audioDataValue:'))) {
      added.set('__fork_audio', 'useSpotifyAudioBundle'); path.replaceWith(parse('__fork_audio()').program.body[0].expression); return;
    }
    if (file === 'view-B8ykjgw8.js' && path.node.callee.type === 'MemberExpression' && path.node.callee.object.name === 'C2' && path.node.callee.property.name === 'map' && path.getFunctionParent()?.node.id?.name === '_i') {
      added.set('__fork_audioCards','audioQualityCards'); path.node.callee.object = parse('__fork_audioCards()').program.body[0].expression;
    }
    if (file === 'view-B8ykjgw8.js' && path.getFunctionParent()?.node.id?.name === '_i' && path.node.arguments[0]?.value === 'div') {
      const props = path.node.arguments[1];
      if (props?.properties?.some(property => property.key?.name === 'className' && property.value?.name === 'E2')) props.properties.push(...parse('({style:{pointerEvents:r2.loading?"none":undefined,opacity:r2.loading?.6:1},"aria-busy":r2.loading})').program.body[0].expression.properties);
    }
    if (file === 'view-CtpRf6zv.js' && path.node.callee.type === 'MemberExpression' && path.node.callee.property.name === 'jsx') {
      const props = path.node.arguments[1];
      if (props?.type === 'ObjectExpression' && props.properties.some(p => p.key?.name === 'variant' && p.value?.value === 'offline')) {
        for (const property of props.properties) {
          if (property.key?.name === 'title') property.value = { type: 'LogicalExpression', operator: '||', left: parse('s2.error').program.body[0].expression, right: property.value };
          if (property.key?.name === 'subtitle') property.value = { type: 'ConditionalExpression', test: parse('s2.error').program.body[0].expression, consequent: { type: 'StringLiteral', value: '' }, alternate: property.value };
        }
      }
    }
    if (file === 'view-B8ykjgw8.js' && path.node.callee.type === 'MemberExpression' && path.node.callee.property.name === 'then' && path.node.callee.object.type === 'CallExpression' && path.node.callee.object.callee.type === 'Import') {
      const callback = path.node.arguments[0], member = callback?.body;
      const adapter = { gA: 'browserDialogs', gB: 'browserFiles' }[member?.property?.name];
      if (adapter) { const local = '__fork_' + adapter; added.set(local, adapter); path.replaceWith(parse(`Promise.resolve(${local})`).program.body[0].expression); }
    }
    if (file === 'view--KkOqVCp.js' && path.node.callee.type === 'MemberExpression' && path.node.callee.property.name === 'jsx' && path.node.arguments[0]?.value === 'div') {
      const props = path.node.arguments[1];
      const click = props?.properties?.find(p => p.key?.name === 'onClick');
      if (click?.value?.name === 'G2') {
        click.value = parse('(event => { if (!event.target.closest("button,a")) y2(true); })').program.body[0].expression;
        props.properties.push(...parse('({role:"button",tabIndex:0,"aria-label":"Открыть плеер на весь экран",onKeyDown:event=>{if(event.target===event.currentTarget && (event.key==="Enter"||event.key===" ")){event.preventDefault();y2(true)}}})').program.body[0].expression.properties);
      }
    }
    if (file !== 'view-juTcB9hq.js' || path.node.callee.type !== 'MemberExpression' || path.node.callee.property.name !== 'jsx') return;
    const props = path.node.arguments[1];
    if (props?.type !== 'ObjectExpression') return;
    const label = props.properties.find(p => p.key?.value === 'aria-label')?.value;
    if (label?.type === 'CallExpression' && label.arguments[0]?.value === 'library.actions.edit') path.replaceWith({ type: 'NullLiteral' });
  }, LogicalExpression(path) {
    if (file === 'view-B8ykjgw8.js' && path.node.left?.name === 'Si' && path.getFunctionParent()?.node.id?.name === '_i') path.replaceWith({type:'NullLiteral'});
  }, ObjectProperty(path) {
    if (file === 'view-juTcB9hq.js' && path.node.key.name === 'showRemoveButton' && path.node.value.name === 'J2') path.node.value = parse('(Boolean(P2?.writable))').program.body[0].expression;
  }, VariableDeclarator(path) {
    if (path.node.id.type !== 'ObjectPattern' || path.node.init?.type !== 'CallExpression') return;
    for (const property of path.node.id.properties) {
      const adapter = config.inlineBundles?.[file]?.[property.key?.name];
      if (!adapter) continue;
      const local = '__fork_' + property.key.name;
      added.set(local, adapter);
      path.node.init = { type: 'CallExpression', callee: { type: 'Identifier', name: local }, arguments: [] };
      break;
    }
  } });
  if (added.size) {
    const statement = parse(`import { ${[...added].map(([local, imported]) => `${imported} as ${local}`).join(', ')} } from "../runtime.jsx";`, { sourceType: 'module' }).program.body[0];
    ast.program.body.unshift(statement);
  }
  let scope;
  traverse(ast, { Program(path) { path.scope.crawl(); scope = path.scope; path.stop(); } });
  const exports = new Map();
  for (const node of ast.program.body) {
    if (node.type === 'ExportNamedDeclaration') for (const item of node.specifiers) exports.set(item.exported.name, item.local.name);
    if (node.type === 'ExportDefaultDeclaration' && node.declaration.type === 'Identifier') exports.set('default', node.declaration.name);
  }
  const result = { ast, scope, exports, needed: new Set(), requested: new Map(), replacements: new Map() };
  modules.set(file, result);
  return result;
}
function request(file, name, local = false, exposed = name) {
  if (vendor(file)) { copyFileSync(resolve(original, file), resolve(output, file)); return; }
  const mod = moduleFor(file);
  const bindingName = local ? name : mod.exports.get(name);
  if (!bindingName) throw new Error(`Missing export ${file}:${name}`);
  mod.requested.set(exposed, bindingName);
  need(file, bindingName);
}
function need(file, name) {
  pendingBindings.push([file, name]);
}
function visitBinding(file, name) {
  const mod = moduleFor(file);
  if (mod.needed.has(name)) return;
  mod.needed.add(name);
  const replacement = config.replace[file]?.[name];
  if (replacement) { mod.replacements.set(name, replacement); return; }
  const binding = mod.scope.getBinding(name);
  if (!binding) throw new Error(`Missing local ${file}:${name}`);
  if (binding.kind === 'module') {
    const path = binding.path;
    const source = path.parent.source.value;
    if (source === '../runtime.jsx') return;
    if (!source.startsWith('./')) throw new Error(`Unexpected external dependency ${file}:${source}`);
    if (path.node.type === 'ImportNamespaceSpecifier') throw new Error(`Namespace import needs explicit handling ${file}:${name}`);
    request(basename(source), path.node.type === 'ImportDefaultSpecifier' ? 'default' : path.node.imported.name);
    return;
  }
  const dependencies = new Set();
  binding.path.traverse({ ReferencedIdentifier(path) {
    const candidate = mod.scope.getBinding(path.node.name);
    if (candidate && path.scope.getBinding(path.node.name) === candidate) dependencies.add(path.node.name);
  } });
  for (const dependency of dependencies) need(file, dependency);
}
for (const root of config.roots) request(root.file, root.name, root.local, root.as ?? root.name);
// Dependency chains span several original bundles. Keep them off the native
// call stack so adding an original component cannot overflow Node on Windows.
while (pendingBindings.length) visitBinding(...pendingBindings.pop());
for (const [file, mod] of modules) {
  const body = [];
  const imports = new Map();
  for (const [local, imported] of mod.replacements) {
    imports.set(local, { type: 'ImportSpecifier', imported: { type: 'Identifier', name: imported }, local: { type: 'Identifier', name: local } });
  }
  if (imports.size) body.push({ type: 'ImportDeclaration', source: { type: 'StringLiteral', value: '../runtime.jsx' }, specifiers: [...imports.values()] });
  for (const node of mod.ast.program.body) {
    if (node.type === 'ImportDeclaration') {
      const specifiers = node.specifiers.filter(item => mod.needed.has(item.local.name) && !mod.replacements.has(item.local.name));
      if (specifiers.length) body.push({ ...node, specifiers });
    } else if (node.type === 'VariableDeclaration') {
      const declarations = node.declarations.filter(item => item.id.type === 'Identifier' && mod.needed.has(item.id.name) && !mod.replacements.has(item.id.name));
      if (declarations.length) body.push({ ...node, declarations });
    } else if ((node.type === 'FunctionDeclaration' || node.type === 'ClassDeclaration') && mod.needed.has(node.id.name) && !mod.replacements.has(node.id.name)) body.push(node);
  }
  const specifiers = [...mod.requested].filter(([name]) => name !== 'default').map(([name, local]) => ({ type: 'ExportSpecifier', local: { type: 'Identifier', name: local }, exported: { type: 'Identifier', name } }));
  if (specifiers.length) body.push({ type: 'ExportNamedDeclaration', declaration: null, specifiers });
  if (mod.requested.has('default')) body.push({ type: 'ExportDefaultDeclaration', declaration: { type: 'Identifier', name: mod.requested.get('default') } });
  const code = generate({ type: 'File', program: { type: 'Program', sourceType: 'module', body, directives: [] } }, { comments: false }).code;
  writeFileSync(resolve(output, file), `// Extracted from Dotify 2.3.7+rev.3; service bindings adapted by scripts/prepare-dotify.mjs\n${code}\n`);
}
writeFileSync(resolve(output, 'provenance.json'), JSON.stringify({ source: JSON.parse(readFileSync('.local/dotify-original/extraction-manifest.json')).sourceSha256, modules: [...modules].map(([file, mod]) => ({ file, declarations: mod.needed.size, adapters: Object.fromEntries(mod.replacements) })) }, null, 2));
console.log(JSON.stringify([...modules].map(([file, mod]) => ({ file, declarations: mod.needed.size, adapters: mod.replacements.size })), null, 2));
