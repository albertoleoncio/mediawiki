(function(m,t){typeof exports=="object"&&typeof module!="undefined"?t(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],t):(m=typeof globalThis!="undefined"?globalThis:m||self,t(m["codex-search"]={},m.Vue))})(this,function(m,t){"use strict";var vt=Object.defineProperty,Lt=Object.defineProperties;var Rt=Object.getOwnPropertyDescriptors;var K=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var le=(m,t,g)=>t in m?vt(m,t,{enumerable:!0,configurable:!0,writable:!0,value:g}):m[t]=g,ue=(m,t)=>{for(var g in t||(t={}))ae.call(t,g)&&le(m,g,t[g]);if(K)for(var g of K(t))se.call(t,g)&&le(m,g,t[g]);return m},re=(m,t)=>Lt(m,Rt(t));var q=(m,t)=>{var g={};for(var $ in m)ae.call(m,$)&&t.indexOf($)<0&&(g[$]=m[$]);if(m!=null&&K)for(var $ of K(m))t.indexOf($)<0&&se.call(m,$)&&(g[$]=m[$]);return g};var Y=(m,t,g)=>new Promise(($,O)=>{var P=M=>{try{v(g.next(M))}catch(L){O(L)}},Q=M=>{try{v(g.throw(M))}catch(L){O(L)}},v=M=>M.done?$(M.value):Promise.resolve(M.value).then(P,Q);v((g=g.apply(m,t)).next())});const g='<path d="M12.43 14.34A5 5 0 0110 15a5 5 0 113.95-2L17 16.09V3a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 001.45-.63z"/><circle cx="10" cy="10" r="3"/>',$='<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0zm5.66 14.24-1.41 1.41L10 11.41l-4.24 4.25-1.42-1.42L8.59 10 4.34 5.76l1.42-1.42L10 8.59l4.24-4.24 1.41 1.41L11.41 10z"/>',O='<path d="M19 3H1v14h18zM3 14l3.5-4.5 2.5 3L12.5 8l4.5 6z"/><path d="M19 5H1V3h18zm0 12H1v-2h18z"/>',P='<path d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8z"/>',Q=g,v=$,M=O,L=P;function ie(e,n,o){if(typeof e=="string"||"path"in e)return e;if("shouldFlip"in e)return e.ltr;if("rtl"in e)return o==="rtl"?e.rtl:e.ltr;const l=n in e.langCodeMap?e.langCodeMap[n]:e.default;return typeof l=="string"||"path"in l?l:l.ltr}function de(e,n){if(typeof e=="string")return!1;if("langCodeMap"in e){const o=n in e.langCodeMap?e.langCodeMap[n]:e.default;if(typeof o=="string")return!1;e=o}if("shouldFlipExceptions"in e&&Array.isArray(e.shouldFlipExceptions)){const o=e.shouldFlipExceptions.indexOf(n);return o===void 0||o===-1}return"shouldFlip"in e?e.shouldFlip:!1}function ce(e){const n=t.ref(null);return t.onMounted(()=>{const o=window.getComputedStyle(e.value).direction;n.value=o==="ltr"||o==="rtl"?o:null}),n}function pe(e){const n=t.ref("");return t.onMounted(()=>{let o=e.value;for(;o&&o.lang==="";)o=o.parentElement;n.value=o?o.lang:null}),n}const he=t.defineComponent({name:"CdxIcon",props:{icon:{type:[String,Object],required:!0},iconLabel:{type:String,default:""},lang:{type:String,default:null},dir:{type:String,default:null}},emits:["click"],setup(e,{emit:n}){const o=t.ref(),l=ce(o),r=pe(o),a=t.computed(()=>e.dir||l.value),u=t.computed(()=>e.lang||r.value),d=t.computed(()=>({"cdx-icon--flipped":a.value==="rtl"&&u.value!==null&&de(e.icon,u.value)})),s=t.computed(()=>ie(e.icon,u.value||"",a.value||"ltr")),c=t.computed(()=>typeof s.value=="string"?s.value:""),f=t.computed(()=>typeof s.value!="string"?s.value.path:"");return{rootElement:o,rootClasses:d,iconSvg:c,iconPath:f,onClick:y=>{n("click",y)}}}}),Ot="",D=(e,n)=>{const o=e.__vccOpts||e;for(const[l,r]of n)o[l]=r;return o},me=["aria-hidden"],fe={key:0},ge=["innerHTML"],ye=["d"];function Ce(e,n,o,l,r,a){return t.openBlock(),t.createElementBlock("span",{ref:"rootElement",class:t.normalizeClass(["cdx-icon",e.rootClasses]),onClick:n[0]||(n[0]=(...u)=>e.onClick&&e.onClick(...u))},[(t.openBlock(),t.createElementBlock("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20","aria-hidden":!e.iconLabel},[e.iconLabel?(t.openBlock(),t.createElementBlock("title",fe,t.toDisplayString(e.iconLabel),1)):t.createCommentVNode("",!0),e.iconSvg?(t.openBlock(),t.createElementBlock("g",{key:1,fill:"currentColor",innerHTML:e.iconSvg},null,8,ge)):(t.openBlock(),t.createElementBlock("path",{key:2,d:e.iconPath,fill:"currentColor"},null,8,ye))],8,me))],2)}const R=D(he,[["render",Ce]]),be=t.defineComponent({name:"CdxThumbnail",components:{CdxIcon:R},props:{thumbnail:{type:[Object,null],default:null},placeholderIcon:{type:[String,Object],default:M}},setup:e=>{const n=t.ref(!1),o=t.ref({}),l=r=>{const a=r.replace(/([\\"\n])/g,"\\$1"),u=new Image;u.onload=()=>{o.value={backgroundImage:`url("${a}")`},n.value=!0},u.onerror=()=>{n.value=!1},u.src=a};return t.onMounted(()=>{var r;(r=e.thumbnail)!=null&&r.url&&l(e.thumbnail.url)}),{thumbnailStyle:o,thumbnailLoaded:n}}}),zt="",Be={class:"cdx-thumbnail"},ke={key:0,class:"cdx-thumbnail__placeholder"};function Ae(e,n,o,l,r,a){const u=t.resolveComponent("cdx-icon");return t.openBlock(),t.createElementBlock("span",Be,[e.thumbnailLoaded?t.createCommentVNode("",!0):(t.openBlock(),t.createElementBlock("span",ke,[t.createVNode(u,{icon:e.placeholderIcon,class:"cdx-thumbnail__placeholder__icon"},null,8,["icon"])])),t.createVNode(t.Transition,{name:"cdx-thumbnail__image"},{default:t.withCtx(()=>[e.thumbnailLoaded?(t.openBlock(),t.createElementBlock("span",{key:0,style:t.normalizeStyle(e.thumbnailStyle),class:"cdx-thumbnail__image"},null,4)):t.createCommentVNode("",!0)]),_:1})])}const _e=D(be,[["render",Ae]]);function Ee(e){return e.replace(/([\\{}()|.?*+\-^$[\]])/g,"\\$1")}const Se="[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]";function $e(e,n){if(!e)return[n,"",""];const o=Ee(e),l=new RegExp(o+Se+"*","i").exec(n);if(!l||l.index===void 0)return[n,"",""];const r=l.index,a=r+l[0].length,u=n.slice(r,a),d=n.slice(0,r),s=n.slice(a,n.length);return[d,u,s]}const we=t.defineComponent({name:"CdxSearchResultTitle",props:{title:{type:String,required:!0},searchQuery:{type:String,default:""}},setup:e=>({titleChunks:t.computed(()=>$e(e.searchQuery,String(e.title)))})}),Kt="",De={class:"cdx-search-result-title"},Ie={class:"cdx-search-result-title__match"};function Me(e,n,o,l,r,a){return t.openBlock(),t.createElementBlock("span",De,[t.createElementVNode("bdi",null,[t.createTextVNode(t.toDisplayString(e.titleChunks[0]),1),t.createElementVNode("span",Ie,t.toDisplayString(e.titleChunks[1]),1),t.createTextVNode(t.toDisplayString(e.titleChunks[2]),1)])])}const xe=D(we,[["render",Me]]),Fe=t.defineComponent({name:"CdxMenuItem",components:{CdxIcon:R,CdxThumbnail:_e,CdxSearchResultTitle:xe},props:{id:{type:String,required:!0},value:{type:[String,Number],required:!0},disabled:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},active:{type:Boolean,default:!1},highlighted:{type:Boolean,default:!1},label:{type:String,default:""},match:{type:String,default:""},url:{type:String,default:""},icon:{type:[String,Object],default:""},showThumbnail:{type:Boolean,default:!1},thumbnail:{type:[Object,null],default:null},description:{type:[String,null],default:""},searchQuery:{type:String,default:""},boldLabel:{type:Boolean,default:!1},hideDescriptionOverflow:{type:Boolean,default:!1},language:{type:Object,default:()=>({})}},emits:["change"],setup:(e,{emit:n})=>{const o=()=>{n("change","highlighted",!0)},l=()=>{n("change","highlighted",!1)},r=f=>{f.button===0&&n("change","active",!0)},a=()=>{n("change","selected",!0)},u=t.computed(()=>e.searchQuery.length>0),d=t.computed(()=>({"cdx-menu-item--selected":e.selected,"cdx-menu-item--active":e.active&&e.highlighted,"cdx-menu-item--highlighted":e.highlighted,"cdx-menu-item--enabled":!e.disabled,"cdx-menu-item--disabled":e.disabled,"cdx-menu-item--highlight-query":u.value,"cdx-menu-item--bold-label":e.boldLabel,"cdx-menu-item--has-description":!!e.description,"cdx-menu-item--hide-description-overflow":e.hideDescriptionOverflow})),s=t.computed(()=>e.url?"a":"span"),c=t.computed(()=>e.label||String(e.value));return{onMouseEnter:o,onMouseLeave:l,onMouseDown:r,onClick:a,highlightQuery:u,rootClasses:d,contentTag:s,title:c}}}),qt="",Ve=["id","aria-disabled","aria-selected"],Ne={class:"cdx-menu-item__text"},Te=["lang"],ve=t.createTextVNode(t.toDisplayString(" ")+" "),Le=["lang"],Re=["lang"];function Oe(e,n,o,l,r,a){const u=t.resolveComponent("cdx-thumbnail"),d=t.resolveComponent("cdx-icon"),s=t.resolveComponent("cdx-search-result-title");return t.openBlock(),t.createElementBlock("li",{id:e.id,role:"option",class:t.normalizeClass(["cdx-menu-item",e.rootClasses]),"aria-disabled":e.disabled,"aria-selected":e.selected,onMouseenter:n[0]||(n[0]=(...c)=>e.onMouseEnter&&e.onMouseEnter(...c)),onMouseleave:n[1]||(n[1]=(...c)=>e.onMouseLeave&&e.onMouseLeave(...c)),onMousedown:n[2]||(n[2]=t.withModifiers((...c)=>e.onMouseDown&&e.onMouseDown(...c),["prevent"])),onClick:n[3]||(n[3]=(...c)=>e.onClick&&e.onClick(...c))},[t.renderSlot(e.$slots,"default",{},()=>[(t.openBlock(),t.createBlock(t.resolveDynamicComponent(e.contentTag),{href:e.url?e.url:void 0,class:"cdx-menu-item__content"},{default:t.withCtx(()=>{var c,f,_,y,E;return[e.showThumbnail?(t.openBlock(),t.createBlock(u,{key:0,thumbnail:e.thumbnail,class:"cdx-menu-item__thumbnail"},null,8,["thumbnail"])):e.icon?(t.openBlock(),t.createBlock(d,{key:1,icon:e.icon,class:"cdx-menu-item__icon"},null,8,["icon"])):t.createCommentVNode("",!0),t.createElementVNode("span",Ne,[e.highlightQuery?(t.openBlock(),t.createBlock(s,{key:0,title:e.title,"search-query":e.searchQuery,lang:(c=e.language)==null?void 0:c.label},null,8,["title","search-query","lang"])):(t.openBlock(),t.createElementBlock("span",{key:1,class:"cdx-menu-item__text__label",lang:(f=e.language)==null?void 0:f.label},[t.createElementVNode("bdi",null,t.toDisplayString(e.title),1)],8,Te)),e.match?(t.openBlock(),t.createElementBlock(t.Fragment,{key:2},[ve,e.highlightQuery?(t.openBlock(),t.createBlock(s,{key:0,title:e.match,"search-query":e.searchQuery,lang:(_=e.language)==null?void 0:_.match},null,8,["title","search-query","lang"])):(t.openBlock(),t.createElementBlock("span",{key:1,class:"cdx-menu-item__text__match",lang:(y=e.language)==null?void 0:y.match},[t.createElementVNode("bdi",null,t.toDisplayString(e.match),1)],8,Le))],64)):t.createCommentVNode("",!0),e.description?(t.openBlock(),t.createElementBlock("span",{key:3,class:"cdx-menu-item__text__description",lang:(E=e.language)==null?void 0:E.description},[t.createElementVNode("bdi",null,t.toDisplayString(e.description),1)],8,Re)):t.createCommentVNode("",!0)])]}),_:1},8,["href"]))])],42,Ve)}const ze=D(Fe,[["render",Oe]]),Ke=t.defineComponent({name:"CdxProgressBar",props:{inline:{type:Boolean,default:!1}},setup(e){return{rootClasses:t.computed(()=>({"cdx-progress-bar--block":!e.inline,"cdx-progress-bar--inline":e.inline}))}}}),Pt="",qe=[t.createElementVNode("div",{class:"cdx-progress-bar__bar"},null,-1)];function Pe(e,n,o,l,r,a){return t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["cdx-progress-bar",e.rootClasses]),role:"progressbar","aria-valuemin":"0","aria-valuemax":"100"},qe,2)}const Qe=D(Ke,[["render",Pe]]),U="cdx",Ue=["default","progressive","destructive"],je=["normal","primary","quiet"],He=["text","search"],We=120,Ge=500,T="cdx-menu-footer-item";let j=0;function Z(e){const n=t.getCurrentInstance(),o=(n==null?void 0:n.props.id)||(n==null?void 0:n.attrs.id);return e?`${U}-${e}-${j++}`:o?`${U}-${o}-${j++}`:`${U}-${j++}`}function Xe(e,n){const o=t.ref(!1);let l=!1;if(typeof window!="object"||!("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype))return o;const r=new window.IntersectionObserver(a=>{const u=a[0];u&&(o.value=u.isIntersecting)},n);return t.onMounted(()=>{l=!0,e.value&&r.observe(e.value)}),t.onUnmounted(()=>{l=!1,r.disconnect()}),t.watch(e,a=>{!l||(r.disconnect(),o.value=!1,a&&r.observe(a))}),o}const Je=t.defineComponent({name:"CdxMenu",components:{CdxMenuItem:ze,CdxProgressBar:Qe},props:{menuItems:{type:Array,required:!0},selected:{type:[String,Number,null],required:!0},expanded:{type:Boolean,required:!0},showPending:{type:Boolean,default:!1},visibleItemLimit:{type:Number,default:null},showThumbnail:{type:Boolean,default:!1},boldLabel:{type:Boolean,default:!1},hideDescriptionOverflow:{type:Boolean,default:!1},searchQuery:{type:String,default:""},showNoResultsSlot:{type:Boolean,default:null}},emits:["update:selected","update:expanded","menu-item-click","menu-item-keyboard-navigation","load-more"],expose:["clearActive","getHighlightedMenuItem","delegateKeyNavigation"],setup(e,{emit:n,slots:o}){const l=t.computed(()=>e.menuItems.map(i=>re(ue({},i),{id:Z("menu-item")}))),r=t.computed(()=>o["no-results"]?e.showNoResultsSlot!==null?e.showNoResultsSlot:l.value.length===0:!1),a=t.ref(null),u=t.ref(null);function d(){return l.value.find(i=>i.value===e.selected)}function s(i,h){var C;if(!(h&&h.disabled))switch(i){case"selected":n("update:selected",(C=h==null?void 0:h.value)!=null?C:null),n("update:expanded",!1),u.value=null;break;case"highlighted":a.value=h||null;break;case"active":u.value=h||null;break}}const c=t.computed(()=>{if(a.value!==null)return l.value.findIndex(i=>i.value===a.value.value)});function f(i){!i||(s("highlighted",i),n("menu-item-keyboard-navigation",i))}function _(i){var b;const h=w=>{for(let x=w-1;x>=0;x--)if(!l.value[x].disabled)return l.value[x]};i=i||l.value.length;const C=(b=h(i))!=null?b:h(l.value.length);f(C)}function y(i){const h=b=>l.value.find((w,x)=>!w.disabled&&x>b);i=i!=null?i:-1;const C=h(i)||h(-1);f(C)}function E(i,h=!0){function C(){n("update:expanded",!0),s("highlighted",d())}function b(){h&&(i.preventDefault(),i.stopPropagation())}switch(i.key){case"Enter":case" ":return b(),e.expanded?(a.value&&n("update:selected",a.value.value),n("update:expanded",!1)):C(),!0;case"Tab":return e.expanded&&(a.value&&n("update:selected",a.value.value),n("update:expanded",!1)),!0;case"ArrowUp":return b(),e.expanded?(a.value===null&&s("highlighted",d()),_(c.value)):C(),A(),!0;case"ArrowDown":return b(),e.expanded?(a.value===null&&s("highlighted",d()),y(c.value)):C(),A(),!0;case"Home":return b(),e.expanded?(a.value===null&&s("highlighted",d()),y()):C(),A(),!0;case"End":return b(),e.expanded?(a.value===null&&s("highlighted",d()),_()):C(),A(),!0;case"Escape":return b(),n("update:expanded",!1),!0;default:return!1}}function I(){s("active")}const k=[],B=t.ref(void 0),V=Xe(B,{threshold:.8});t.watch(V,i=>{i&&n("load-more")});function X(i,h){if(i){k[h]=i.$el;const C=e.visibleItemLimit;if(!C||e.menuItems.length<C)return;const b=Math.min(C,Math.max(2,Math.floor(.2*e.menuItems.length)));h===e.menuItems.length-b&&(B.value=i.$el)}}function A(){if(!e.visibleItemLimit||e.visibleItemLimit>e.menuItems.length||c.value===void 0)return;const i=c.value>=0?c.value:0;k[i].scrollIntoView({behavior:"smooth",block:"nearest"})}const F=t.ref(null);function z(){if(!e.visibleItemLimit||k.length<=e.visibleItemLimit){F.value=null;return}const i=k[0],h=k[e.visibleItemLimit];F.value=J(i,h)}function J(i,h){const C=i.getBoundingClientRect().top;return h.getBoundingClientRect().top-C+2}return t.onMounted(()=>{document.addEventListener("mouseup",I)}),t.onUnmounted(()=>{document.removeEventListener("mouseup",I)}),t.watch(t.toRef(e,"expanded"),i=>Y(this,null,function*(){const h=d();!i&&a.value&&h===void 0&&s("highlighted"),i&&h!==void 0&&s("highlighted",h),i&&(yield t.nextTick(),z(),yield t.nextTick(),A())})),t.watch(t.toRef(e,"menuItems"),i=>Y(this,null,function*(){i.length<k.length&&(k.length=i.length),e.expanded&&(yield t.nextTick(),z(),yield t.nextTick(),A())})),{rootStyle:t.computed(()=>({"max-height":F.value?`${F.value}px`:void 0,"overflow-y":F.value?"scroll":void 0})),assignTemplateRef:X,computedMenuItems:l,computedShowNoResultsSlot:r,highlightedMenuItem:a,activeMenuItem:u,handleMenuItemChange:s,handleKeyNavigation:E}},methods:{getHighlightedMenuItem(){return this.highlightedMenuItem},clearActive(){this.handleMenuItemChange("active")},delegateKeyNavigation(e,n=!0){return this.handleKeyNavigation(e,n)}}}),Ut="",Ye={key:0,class:"cdx-menu__pending cdx-menu-item"},Ze={key:1,class:"cdx-menu__no-results cdx-menu-item"};function et(e,n,o,l,r,a){const u=t.resolveComponent("cdx-menu-item"),d=t.resolveComponent("cdx-progress-bar");return t.withDirectives((t.openBlock(),t.createElementBlock("ul",{class:"cdx-menu",role:"listbox","aria-multiselectable":"false",style:t.normalizeStyle(e.rootStyle)},[e.showPending&&e.computedMenuItems.length===0&&e.$slots.pending?(t.openBlock(),t.createElementBlock("li",Ye,[t.renderSlot(e.$slots,"pending")])):t.createCommentVNode("",!0),e.computedShowNoResultsSlot?(t.openBlock(),t.createElementBlock("li",Ze,[t.renderSlot(e.$slots,"no-results")])):t.createCommentVNode("",!0),(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.computedMenuItems,(s,c)=>{var f,_;return t.openBlock(),t.createBlock(u,t.mergeProps({key:s.value,ref_for:!0,ref:y=>e.assignTemplateRef(y,c)},s,{selected:s.value===e.selected,active:s.value===((f=e.activeMenuItem)==null?void 0:f.value),highlighted:s.value===((_=e.highlightedMenuItem)==null?void 0:_.value),"show-thumbnail":e.showThumbnail,"bold-label":e.boldLabel,"hide-description-overflow":e.hideDescriptionOverflow,"search-query":e.searchQuery,onChange:(y,E)=>e.handleMenuItemChange(y,E&&s),onClick:y=>e.$emit("menu-item-click",s)}),{default:t.withCtx(()=>{var y,E;return[t.renderSlot(e.$slots,"default",{menuItem:s,active:s.value===((y=e.activeMenuItem)==null?void 0:y.value)&&s.value===((E=e.highlightedMenuItem)==null?void 0:E.value)})]}),_:2},1040,["selected","active","highlighted","show-thumbnail","bold-label","hide-description-overflow","search-query","onChange","onClick"])}),128)),e.showPending?(t.openBlock(),t.createBlock(d,{key:2,class:"cdx-menu__progress-bar",inline:!0})):t.createCommentVNode("",!0)],4)),[[t.vShow,e.expanded]])}const tt=D(Je,[["render",et]]);function H(e){return n=>typeof n=="string"&&e.indexOf(n)!==-1}const nt=H(je),ot=H(Ue),lt=e=>{!e["aria-label"]&&!e["aria-hidden"]&&t.warn(`icon-only buttons require one of the following attribute: aria-label or aria-hidden.
		See documentation on https://doc.wikimedia.org/codex/main/components/button.html#default-icon-only`)};function W(e){const n=[];for(const o of e)typeof o=="string"&&o.trim()!==""?n.push(o):Array.isArray(o)?n.push(...W(o)):typeof o=="object"&&o&&(typeof o.type=="string"||typeof o.type=="object"?n.push(o):o.type!==t.Comment&&(typeof o.children=="string"&&o.children.trim()!==""?n.push(o.children):Array.isArray(o.children)&&n.push(...W(o.children))));return n}const at=(e,n)=>{if(!e)return!1;const o=W(e);if(o.length!==1)return!1;const l=o[0],r=typeof l=="object"&&typeof l.type=="object"&&"name"in l.type&&l.type.name===R.name,a=typeof l=="object"&&l.type==="svg";return r||a?(lt(n),!0):!1},st=t.defineComponent({name:"CdxButton",props:{action:{type:String,default:"default",validator:ot},type:{type:String,default:"normal",validator:nt}},emits:["click"],setup(e,{emit:n,slots:o,attrs:l}){return{rootClasses:t.computed(()=>{var u;return{[`cdx-button--action-${e.action}`]:!0,[`cdx-button--type-${e.type}`]:!0,"cdx-button--framed":e.type!=="quiet","cdx-button--icon-only":at((u=o.default)==null?void 0:u.call(o),l)}}),onClick:u=>{n("click",u)}}}}),jt="";function ut(e,n,o,l,r,a){return t.openBlock(),t.createElementBlock("button",{class:t.normalizeClass(["cdx-button",e.rootClasses]),onClick:n[0]||(n[0]=(...u)=>e.onClick&&e.onClick(...u))},[t.renderSlot(e.$slots,"default")],2)}const rt=D(st,[["render",ut]]);function ee(e,n,o){return t.computed({get:()=>e.value,set:l=>n(o||"update:modelValue",l)})}function G(e,n=t.computed(()=>({}))){const o=t.computed(()=>{const a=q(n.value,[]);return e.class&&e.class.split(" ").forEach(d=>{a[d]=!0}),a}),l=t.computed(()=>{if("style"in e)return e.style}),r=t.computed(()=>{const s=e,{class:a,style:u}=s;return q(s,["class","style"])});return{rootClasses:o,rootStyle:l,otherAttrs:r}}const it=H(He),dt=t.defineComponent({name:"CdxTextInput",components:{CdxIcon:R},inheritAttrs:!1,expose:["focus"],props:{modelValue:{type:[String,Number],default:""},inputType:{type:String,default:"text",validator:it},disabled:{type:Boolean,default:!1},startIcon:{type:[String,Object],default:void 0},endIcon:{type:[String,Object],default:void 0},clearable:{type:Boolean,default:!1}},emits:["update:modelValue","input","change","keydown","focus","blur"],setup(e,{emit:n,attrs:o}){const l=ee(t.toRef(e,"modelValue"),n),r=t.computed(()=>e.clearable&&!!l.value&&!e.disabled),a=t.computed(()=>({"cdx-text-input--has-start-icon":!!e.startIcon,"cdx-text-input--has-end-icon":!!e.endIcon,"cdx-text-input--clearable":r.value})),{rootClasses:u,rootStyle:d,otherAttrs:s}=G(o,a),c=t.computed(()=>({"cdx-text-input__input--has-value":!!l.value}));return{wrappedModel:l,isClearable:r,rootClasses:u,rootStyle:d,otherAttrs:s,inputClasses:c,onClear:()=>{l.value=""},onInput:B=>{n("input",B)},onChange:B=>{n("change",B)},onKeydown:B=>{(B.key==="Home"||B.key==="End")&&!B.ctrlKey&&!B.metaKey||n("keydown",B)},onFocus:B=>{n("focus",B)},onBlur:B=>{n("blur",B)},cdxIconClear:v}},methods:{focus(){this.$refs.input.focus()}}}),Ht="",ct=["type","disabled"];function pt(e,n,o,l,r,a){const u=t.resolveComponent("cdx-icon");return t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["cdx-text-input",e.rootClasses]),style:t.normalizeStyle(e.rootStyle)},[t.withDirectives(t.createElementVNode("input",t.mergeProps({ref:"input","onUpdate:modelValue":n[0]||(n[0]=d=>e.wrappedModel=d),class:["cdx-text-input__input",e.inputClasses]},e.otherAttrs,{type:e.inputType,disabled:e.disabled,onInput:n[1]||(n[1]=(...d)=>e.onInput&&e.onInput(...d)),onChange:n[2]||(n[2]=(...d)=>e.onChange&&e.onChange(...d)),onFocus:n[3]||(n[3]=(...d)=>e.onFocus&&e.onFocus(...d)),onBlur:n[4]||(n[4]=(...d)=>e.onBlur&&e.onBlur(...d)),onKeydown:n[5]||(n[5]=(...d)=>e.onKeydown&&e.onKeydown(...d))}),null,16,ct),[[t.vModelDynamic,e.wrappedModel]]),e.startIcon?(t.openBlock(),t.createBlock(u,{key:0,icon:e.startIcon,class:"cdx-text-input__icon cdx-text-input__start-icon"},null,8,["icon"])):t.createCommentVNode("",!0),e.endIcon?(t.openBlock(),t.createBlock(u,{key:1,icon:e.endIcon,class:"cdx-text-input__icon cdx-text-input__end-icon"},null,8,["icon"])):t.createCommentVNode("",!0),e.isClearable?(t.openBlock(),t.createBlock(u,{key:2,icon:e.cdxIconClear,class:"cdx-text-input__icon cdx-text-input__clear-icon",onMousedown:n[6]||(n[6]=t.withModifiers(()=>{},["prevent"])),onClick:e.onClear},null,8,["icon","onClick"])):t.createCommentVNode("",!0)],6)}const ht=D(dt,[["render",pt]]),mt=t.defineComponent({name:"CdxSearchInput",components:{CdxButton:rt,CdxTextInput:ht},inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},buttonLabel:{type:String,default:""}},emits:["update:modelValue","submit-click"],setup(e,{emit:n,attrs:o}){const l=ee(t.toRef(e,"modelValue"),n),r=t.computed(()=>({"cdx-search-input--has-end-button":!!e.buttonLabel})),{rootClasses:a,rootStyle:u,otherAttrs:d}=G(o,r);return{wrappedModel:l,rootClasses:a,rootStyle:u,otherAttrs:d,handleSubmit:()=>{n("submit-click",l.value)},searchIcon:L}},methods:{focus(){this.$refs.textInput.focus()}}}),Wt="",ft={class:"cdx-search-input__input-wrapper"};function gt(e,n,o,l,r,a){const u=t.resolveComponent("cdx-text-input"),d=t.resolveComponent("cdx-button");return t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["cdx-search-input",e.rootClasses]),style:t.normalizeStyle(e.rootStyle)},[t.createElementVNode("div",ft,[t.createVNode(u,t.mergeProps({ref:"textInput",modelValue:e.wrappedModel,"onUpdate:modelValue":n[0]||(n[0]=s=>e.wrappedModel=s),class:"cdx-search-input__text-input","input-type":"search","start-icon":e.searchIcon},e.otherAttrs,{onKeydown:t.withKeys(e.handleSubmit,["enter"])}),null,16,["modelValue","start-icon","onKeydown"]),t.renderSlot(e.$slots,"default")]),e.buttonLabel?(t.openBlock(),t.createBlock(d,{key:0,class:"cdx-search-input__end-button",onClick:e.handleSubmit},{default:t.withCtx(()=>[t.createTextVNode(t.toDisplayString(e.buttonLabel),1)]),_:1},8,["onClick"])):t.createCommentVNode("",!0)],6)}const yt=D(mt,[["render",gt]]),Ct=t.defineComponent({name:"CdxTypeaheadSearch",components:{CdxIcon:R,CdxMenu:tt,CdxSearchInput:yt},inheritAttrs:!1,props:{id:{type:String,required:!0},formAction:{type:String,required:!0},searchResultsLabel:{type:String,required:!0},searchResults:{type:Array,required:!0},buttonLabel:{type:String,default:""},initialInputValue:{type:String,default:""},searchFooterUrl:{type:String,default:""},debounceInterval:{type:Number,default:We},highlightQuery:{type:Boolean,default:!1},showThumbnail:{type:Boolean,default:!1},autoExpandWidth:{type:Boolean,default:!1},visibleItemLimit:{type:Number,default:null}},emits:["input","search-result-click","submit","load-more"],setup(e,{attrs:n,emit:o,slots:l}){const{searchResults:r,searchFooterUrl:a,debounceInterval:u}=t.toRefs(e),d=t.ref(),s=t.ref(),c=Z("typeahead-search-menu"),f=t.ref(!1),_=t.ref(!1),y=t.ref(!1),E=t.ref(!1),I=t.ref(e.initialInputValue),k=t.ref(""),B=t.computed(()=>{var p,S;return(S=(p=s.value)==null?void 0:p.getHighlightedMenuItem())==null?void 0:S.id}),V=t.ref(null),X=t.computed(()=>({"cdx-typeahead-search__menu-message--has-thumbnail":e.showThumbnail})),A=t.computed(()=>e.searchResults.find(p=>p.value===V.value)),F=t.computed(()=>a.value?r.value.concat([{value:T,url:a.value}]):r.value),z=t.computed(()=>({"cdx-typeahead-search--show-thumbnail":e.showThumbnail,"cdx-typeahead-search--expanded":f.value,"cdx-typeahead-search--auto-expand-width":e.showThumbnail&&e.autoExpandWidth})),{rootClasses:J,rootStyle:te,otherAttrs:i}=G(n,z);function h(p){return p}const C=t.computed(()=>({visibleItemLimit:e.visibleItemLimit,showThumbnail:e.showThumbnail,boldLabel:!0,hideDescriptionOverflow:!0}));let b,w;function x(p,S=!1){A.value&&A.value.label!==p&&A.value.value!==p&&(V.value=null),w!==void 0&&(clearTimeout(w),w=void 0),p===""?f.value=!1:(_.value=!0,l["search-results-pending"]&&(w=setTimeout(()=>{E.value&&(f.value=!0),y.value=!0},Ge))),b!==void 0&&(clearTimeout(b),b=void 0);const N=()=>{o("input",p)};S?N():b=setTimeout(()=>{N()},u.value)}function wt(p){if(p===T){V.value=null,I.value=k.value;return}V.value=p,p!==null&&(I.value=A.value?A.value.label||String(A.value.value):"")}function Dt(){E.value=!0,(k.value||y.value)&&(f.value=!0)}function It(){E.value=!1,f.value=!1}function ne(p){const oe=p,{id:S}=oe,N=q(oe,["id"]),Nt={searchResult:N.value!==T?N:null,index:F.value.findIndex(Tt=>Tt.value===p.value),numberOfResults:r.value.length};o("search-result-click",Nt)}function Mt(p){if(p.value===T){I.value=k.value;return}I.value=p.value?p.label||String(p.value):""}function xt(p){var S;f.value=!1,(S=s.value)==null||S.clearActive(),ne(p)}function Ft(){let p=null,S=-1;A.value&&(p=A.value,S=e.searchResults.indexOf(A.value));const N={searchResult:p,index:S,numberOfResults:r.value.length};o("submit",N)}function Vt(p){if(!s.value||!k.value||p.key===" "&&f.value)return;const S=s.value.getHighlightedMenuItem();switch(p.key){case"Enter":S&&(S.value===T?window.location.assign(a.value):s.value.delegateKeyNavigation(p,!1)),f.value=!1;break;case"Tab":f.value=!1;break;default:s.value.delegateKeyNavigation(p);break}}return t.onMounted(()=>{e.initialInputValue&&x(e.initialInputValue,!0)}),t.watch(t.toRef(e,"searchResults"),()=>{k.value=I.value.trim(),E.value&&_.value&&k.value.length>0&&(f.value=!0),w!==void 0&&(clearTimeout(w),w=void 0),_.value=!1,y.value=!1}),{form:d,menu:s,menuId:c,highlightedId:B,selection:V,menuMessageClass:X,searchResultsWithFooter:F,asSearchResult:h,inputValue:I,searchQuery:k,expanded:f,showPending:y,rootClasses:J,rootStyle:te,otherAttrs:i,menuConfig:C,onUpdateInputValue:x,onUpdateMenuSelection:wt,onFocus:Dt,onBlur:It,onSearchResultClick:ne,onSearchResultKeyboardNavigation:Mt,onSearchFooterClick:xt,onSubmit:Ft,onKeydown:Vt,MenuFooterValue:T,articleIcon:Q}},methods:{focus(){this.$refs.searchInput.focus()}}}),Gt="",bt=["id","action"],Bt={class:"cdx-typeahead-search__menu-message__text"},kt={class:"cdx-typeahead-search__menu-message__text"},At=["href","onClickCapture"],_t={class:"cdx-typeahead-search__search-footer__text"},Et={class:"cdx-typeahead-search__search-footer__query"};function St(e,n,o,l,r,a){const u=t.resolveComponent("cdx-icon"),d=t.resolveComponent("cdx-menu"),s=t.resolveComponent("cdx-search-input");return t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["cdx-typeahead-search",e.rootClasses]),style:t.normalizeStyle(e.rootStyle)},[t.createElementVNode("form",{id:e.id,ref:"form",class:"cdx-typeahead-search__form",action:e.formAction,onSubmit:n[4]||(n[4]=(...c)=>e.onSubmit&&e.onSubmit(...c))},[t.createVNode(s,t.mergeProps({ref:"searchInput",modelValue:e.inputValue,"onUpdate:modelValue":n[3]||(n[3]=c=>e.inputValue=c),"button-label":e.buttonLabel},e.otherAttrs,{class:"cdx-typeahead-search__input",name:"search",role:"combobox",autocomplete:"off","aria-autocomplete":"list","aria-owns":e.menuId,"aria-expanded":e.expanded,"aria-activedescendant":e.highlightedId,"onUpdate:modelValue":e.onUpdateInputValue,onFocus:e.onFocus,onBlur:e.onBlur,onKeydown:e.onKeydown}),{default:t.withCtx(()=>[t.createVNode(d,t.mergeProps({id:e.menuId,ref:"menu",expanded:e.expanded,"onUpdate:expanded":n[0]||(n[0]=c=>e.expanded=c),"show-pending":e.showPending,selected:e.selection,"menu-items":e.searchResultsWithFooter,"search-query":e.highlightQuery?e.searchQuery:"","show-no-results-slot":e.searchQuery.length>0&&e.searchResults.length===0&&e.$slots["search-no-results-text"]&&e.$slots["search-no-results-text"]().length>0},e.menuConfig,{"aria-label":e.searchResultsLabel,"onUpdate:selected":e.onUpdateMenuSelection,onMenuItemClick:n[1]||(n[1]=c=>e.onSearchResultClick(e.asSearchResult(c))),onMenuItemKeyboardNavigation:e.onSearchResultKeyboardNavigation,onLoadMore:n[2]||(n[2]=c=>e.$emit("load-more"))}),{pending:t.withCtx(()=>[t.createElementVNode("div",{class:t.normalizeClass(["cdx-typeahead-search__menu-message",e.menuMessageClass])},[t.createElementVNode("span",Bt,[t.renderSlot(e.$slots,"search-results-pending")])],2)]),"no-results":t.withCtx(()=>[t.createElementVNode("div",{class:t.normalizeClass(["cdx-typeahead-search__menu-message",e.menuMessageClass])},[t.createElementVNode("span",kt,[t.renderSlot(e.$slots,"search-no-results-text")])],2)]),default:t.withCtx(({menuItem:c,active:f})=>[c.value===e.MenuFooterValue?(t.openBlock(),t.createElementBlock("a",{key:0,class:t.normalizeClass(["cdx-typeahead-search__search-footer",{"cdx-typeahead-search__search-footer__active":f}]),href:e.asSearchResult(c).url,onClickCapture:t.withModifiers(_=>e.onSearchFooterClick(e.asSearchResult(c)),["stop"])},[t.createVNode(u,{class:"cdx-typeahead-search__search-footer__icon",icon:e.articleIcon},null,8,["icon"]),t.createElementVNode("span",_t,[t.renderSlot(e.$slots,"search-footer-text",{searchQuery:e.searchQuery},()=>[t.createElementVNode("strong",Et,t.toDisplayString(e.searchQuery),1)])])],42,At)):t.createCommentVNode("",!0)]),_:3},16,["id","expanded","show-pending","selected","menu-items","search-query","show-no-results-slot","aria-label","onUpdate:selected","onMenuItemKeyboardNavigation"])]),_:3},16,["modelValue","button-label","aria-owns","aria-expanded","aria-activedescendant","onUpdate:modelValue","onFocus","onBlur","onKeydown"]),t.renderSlot(e.$slots,"default")],40,bt)],6)}const $t=D(Ct,[["render",St]]);m.CdxTypeaheadSearch=$t,Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
