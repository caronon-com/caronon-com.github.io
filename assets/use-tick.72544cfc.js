import{r as B,q as x,f as g,c as w,o as f,a3 as O,n as h,h as $,g as v,a0 as p,ah as R,ai as S,aj as D,a as d}from"./index.51328698.js";import{u as C,a as L}from"./focus-manager.75c90a95.js";function q(){const e=B(!x.value);return e.value===!1&&g(()=>{e.value=!0}),e}const k=typeof ResizeObserver!="undefined",y=k===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var A=w({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:t}){let i=null,n,o={width:-1,height:-1};function u(r){r===!0||e.debounce===0||e.debounce==="0"?l():i===null&&(i=setTimeout(l,e.debounce))}function l(){if(i!==null&&(clearTimeout(i),i=null),n){const{offsetWidth:r,offsetHeight:a}=n;(r!==o.width||a!==o.height)&&(o={width:r,height:a},t("resize",o))}}const{proxy:c}=v();if(c.trigger=u,k===!0){let r;const a=s=>{n=c.$el.parentNode,n?(r=new ResizeObserver(u),r.observe(n),l()):s!==!0&&h(()=>{a(!0)})};return g(()=>{a()}),f(()=>{i!==null&&clearTimeout(i),r!==void 0&&(r.disconnect!==void 0?r.disconnect():n&&r.unobserve(n))}),O}else{let s=function(){i!==null&&(clearTimeout(i),i=null),a!==void 0&&(a.removeEventListener!==void 0&&a.removeEventListener("resize",u,p.passive),a=void 0)},z=function(){s(),n&&n.contentDocument&&(a=n.contentDocument.defaultView,a.addEventListener("resize",u,p.passive),l())};const r=q();let a;return g(()=>{h(()=>{n=c.$el,n&&z()})}),f(s),()=>{if(r.value===!0)return $("object",{style:y.style,tabindex:-1,type:"text/html",data:y.url,"aria-hidden":"true",onLoad:z})}}}});function I(){let e=null;const t=v();function i(){e!==null&&(clearTimeout(e),e=null)}return R(i),f(i),{removeTimeout:i,registerTimeout(n,o){i(),S(t)===!1&&(e=setTimeout(n,o))}}}const b={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},E=Object.keys(b);b.all=!0;function Q(e){const t={};for(const i of E)e[i]===!0&&(t[i]=!0);return Object.keys(t).length===0?b:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}const M=["INPUT","TEXTAREA"];function U(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&M.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}function F(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),D.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const T=["B","KB","MB","GB","TB","PB"];function H(e){let t=0;for(;parseInt(e,10)>=1024&&t<T.length-1;)e/=1024,++t;return`${e.toFixed(1)}${T[t]}`}function V(e,t,i){return i<=t?t:Math.min(i,Math.max(t,e))}function G(e,t,i){if(i<=t)return t;const n=i-t+1;let o=t+(e-t)%n;return o<t&&(o=n+o),o===0?0:o}const N={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},m={xs:2,sm:4,md:8,lg:16,xl:24};var K=w({name:"QSeparator",props:{...C,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const t=v(),i=L(e,t.proxy.$q),n=d(()=>e.vertical===!0?"vertical":"horizontal"),o=d(()=>` q-separator--${n.value}`),u=d(()=>e.inset!==!1?`${o.value}-${N[e.inset]}`:""),l=d(()=>`q-separator${o.value}${u.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(i.value===!0?" q-separator--dark":"")),c=d(()=>{const r={};if(e.size!==void 0&&(r[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const a=e.spaced===!0?`${m.md}px`:e.spaced in m?`${m[e.spaced]}px`:e.spaced,s=e.vertical===!0?["Left","Right"]:["Top","Bottom"];r[`margin${s[0]}`]=r[`margin${s[1]}`]=a}return r});return()=>$("hr",{class:l.value,style:c.value,"aria-orientation":n.value})}});function W(){let e;const t=v();function i(){e=void 0}return R(i),f(i),{removeTick:i,registerTick(n){e=n,h(()=>{e===n&&(S(t)===!1&&e(),e=void 0)})}}}export{A as Q,K as a,V as b,F as c,W as d,Q as g,H as h,G as n,U as s,I as u};