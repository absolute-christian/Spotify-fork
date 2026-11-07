export function shellDom() {
  const counts={children:0}, observers=[];
  class Node {
    constructor(tag='DIV'){this.tagName=tag;this.nodes=[];this.attrs=new Map();this.parentElement=null;this.ownerDocument=doc;}
    get children(){counts.children++;return this.nodes;}
    get isConnected(){return this===doc.documentElement || !!this.parentElement?.isConnected;}
    append(child){child.parentElement=this;this.nodes.push(child);return child;}
    remove(){if(this.parentElement)this.parentElement.nodes=this.parentElement.nodes.filter(child=>child!==this);this.parentElement=null;}
    setAttribute(name,value){this.attrs.set(name,value);}
    removeAttribute(name){this.attrs.delete(name);}
    hasAttribute(name){return this.attrs.has(name);}
    getAttribute(name){return this.attrs.get(name)??null;}
    matches(selector){return selector==='[role="menu"]' && this.getAttribute('role')==='menu';}
    querySelector(selector){for(const child of this.nodes){if(child.matches(selector))return child;const found=child.querySelector(selector);if(found)return found;}return null;}
    getBoundingClientRect(){return {width:1920,height:1080};}
  }
  const doc={};
  const root=doc.documentElement=new Node('HTML'),body=doc.body=root.append(new Node('BODY'));
  const shell=body.append(new Node()),header=shell.append(new Node()),content=shell.append(new Node()),rail=content.append(new Node()),main=content.append(new Node()),footer=shell.append(new Node());
  const frame=main.append(new Node('IFRAME')),native=rail.append(new Node()),deep=native.append(new Node());
  doc.head=body.append(new Node('HEAD'));doc.createElement=tag=>new Node(tag.toUpperCase());
  doc.querySelector=selector=>root.querySelector(selector);doc.querySelectorAll=()=>[];
  doc.defaultView={innerWidth:1920,innerHeight:1080,MutationObserver:class{constructor(callback){this.callback=callback;observers.push(this);}observe(){}disconnect(){this.disconnected=true;}}};
  return {doc,root,body,shell,header,content,rail,main,footer,frame,native,deep,counts,observers,newNode:()=>new Node()};
}
