import{i as Je,e as Se,r as T,a as f,o as Ce,f as Ye,aJ as Ee,j as Ze,aA as et,h as d,z as pe,aa as tt,aq as at,Q as ge,u as lt,g as ce,aC as nt,c as de,w as me,p as Me,ah as rt,ao as ot,b as De,ax as ut,aw as it,az as st,R as je,$ as ct,ai as dt,aK as vt,aL as ft,ac as mt,aF as gt,ap as ze,O as _e,aE as ht,k as bt,B as pt,J as _t,E as O,D as ie,M as yt,G as Be}from"./index.51328698.js";import{c as qt,u as Qe,a as Ne}from"./focus-manager.75c90a95.js";import{d as Fe,u as Le,Q as wt,b as St,h as $e,a as Ft}from"./use-tick.72544cfc.js";import{r as kt,u as Ct,a as Tt,b as xt,c as Pt,Q as Rt}from"./rtl.0e9b3205.js";import{Q as zt}from"./QInput.04e4e2c0.js";import{u as Bt}from"./use-quasar.3531e723.js";let Lt=0;const $t=["click","keydown"],Ut={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Lt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function It(e,v,i,n){const l=Je(Ee,Se);if(l===Se)return console.error("QTab/QRouteTab component needs to be child of QTabs"),Se;const{proxy:q}=ce(),k=T(null),S=T(null),x=T(null),B=f(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),L=f(()=>l.currentModel.value===e.name),N=f(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(L.value===!0?" q-tab--active"+(l.tabProps.value.activeClass?" "+l.tabProps.value.activeClass:"")+(l.tabProps.value.activeColor?` text-${l.tabProps.value.activeColor}`:"")+(l.tabProps.value.activeBgColor?` bg-${l.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&l.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||l.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(n!==void 0?n.linkClass.value:"")),A=f(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(l.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),h=f(()=>e.disable===!0||l.hasFocus.value===!0||L.value===!1&&l.hasActiveTab.value===!0?-1:e.tabindex||0);function t(s,R){if(R!==!0&&k.value!==null&&k.value.focus(),e.disable===!0){n!==void 0&&n.hasRouterLink.value===!0&&pe(s);return}if(n===void 0){l.updateModel({name:e.name}),i("click",s);return}if(n.hasRouterLink.value===!0){const $=(c={})=>{let p;const z=c.to===void 0||nt(c.to,e.to)===!0?l.avoidRouteWatcher=qt():null;return n.navigateToRouterLink(s,{...c,returnRouterError:!0}).catch(g=>{p=g}).then(g=>{if(z===l.avoidRouteWatcher&&(l.avoidRouteWatcher=!1,p===void 0&&(g===void 0||g.message!==void 0&&g.message.startsWith("Avoided redundant navigation")===!0)&&l.updateModel({name:e.name})),c.returnRouterError===!0)return p!==void 0?Promise.reject(p):g})};i("click",s,$),s.defaultPrevented!==!0&&$();return}i("click",s)}function _(s){tt(s,[13,32])?t(s,!0):at(s)!==!0&&s.keyCode>=35&&s.keyCode<=40&&s.altKey!==!0&&s.metaKey!==!0&&l.onKbdNavigate(s.keyCode,q.$el)===!0&&pe(s),i("keydown",s)}function E(){const s=l.tabProps.value.narrowIndicator,R=[],$=d("div",{ref:x,class:["q-tab__indicator",l.tabProps.value.indicatorClass]});e.icon!==void 0&&R.push(d(ge,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&R.push(d("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&R.push(e.alertIcon!==void 0?d(ge,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):d("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),s===!0&&R.push($);const c=[d("div",{class:"q-focus-helper",tabindex:-1,ref:k}),d("div",{class:A.value},lt(v.default,R))];return s===!1&&c.push($),c}const b={name:f(()=>e.name),rootRef:S,tabIndicatorRef:x,routeData:n};Ce(()=>{l.unregisterTab(b)}),Ye(()=>{l.registerTab(b)});function o(s,R){const $={ref:S,class:N.value,tabindex:h.value,role:"tab","aria-selected":L.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:t,onKeydown:_,...R};return Ze(d(s,$,E()),[[et,B.value]])}return{renderTab:o,$tabs:l}}var Ue=de({name:"QTab",props:Ut,emits:$t,setup(e,{slots:v,emit:i}){const{renderTab:n}=It(e,v,i);return()=>n("div")}});function At(e,v,i){const n=i===!0?["left","right"]:["top","bottom"];return`absolute-${v===!0?n[0]:n[1]}${e?` text-${e}`:""}`}const Et=["left","center","right","justify"];var Mt=de({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Et.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:v,emit:i}){const{proxy:n}=ce(),{$q:l}=n,{registerTick:q}=Fe(),{registerTick:k}=Fe(),{registerTick:S}=Fe(),{registerTimeout:x,removeTimeout:B}=Le(),{registerTimeout:L,removeTimeout:N}=Le(),A=T(null),h=T(null),t=T(e.modelValue),_=T(!1),E=T(!0),b=T(!1),o=T(!1),s=[],R=T(0),$=T(!1);let c=null,p=null,z;const g=f(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:At(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),P=f(()=>{const a=R.value,u=t.value;for(let m=0;m<a;m++)if(s[m].name.value===u)return!0;return!1}),W=f(()=>`q-tabs__content--align-${_.value===!0?"left":o.value===!0?"justify":e.align}`),y=f(()=>`q-tabs row no-wrap items-center q-tabs--${_.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),X=f(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+W.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),V=f(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),K=f(()=>e.vertical!==!0&&l.lang.rtl===!0),Q=f(()=>kt===!1&&K.value===!0);me(K,Y),me(()=>e.modelValue,a=>{te({name:a,setCurrent:!0,skipEmit:!0})}),me(()=>e.outsideArrows,re);function te({name:a,setCurrent:u,skipEmit:m}){t.value!==a&&(m!==!0&&e["onUpdate:modelValue"]!==void 0&&i("update:modelValue",a),(u===!0||e["onUpdate:modelValue"]===void 0)&&(he(t.value,a),t.value=a))}function re(){q(()=>{ue({width:A.value.offsetWidth,height:A.value.offsetHeight})})}function ue(a){if(V.value===void 0||h.value===null)return;const u=a[V.value.container],m=Math.min(h.value[V.value.scroll],Array.prototype.reduce.call(h.value.children,(I,C)=>I+(C[V.value.content]||0),0)),U=u>0&&m>u;_.value=U,U===!0&&k(Y),o.value=u<parseInt(e.breakpoint,10)}function he(a,u){const m=a!=null&&a!==""?s.find(I=>I.name.value===a):null,U=u!=null&&u!==""?s.find(I=>I.name.value===u):null;if(m&&U){const I=m.tabIndicatorRef.value,C=U.tabIndicatorRef.value;c!==null&&(clearTimeout(c),c=null),I.style.transition="none",I.style.transform="none",C.style.transition="none",C.style.transform="none";const w=I.getBoundingClientRect(),j=C.getBoundingClientRect();C.style.transform=e.vertical===!0?`translate3d(0,${w.top-j.top}px,0) scale3d(1,${j.height?w.height/j.height:1},1)`:`translate3d(${w.left-j.left}px,0,0) scale3d(${j.width?w.width/j.width:1},1,1)`,S(()=>{c=setTimeout(()=>{c=null,C.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",C.style.transform="none"},70)})}U&&_.value===!0&&J(U.rootRef.value)}function J(a){const{left:u,width:m,top:U,height:I}=h.value.getBoundingClientRect(),C=a.getBoundingClientRect();let w=e.vertical===!0?C.top-U:C.left-u;if(w<0){h.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(w),Y();return}w+=e.vertical===!0?C.height-I:C.width-m,w>0&&(h.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(w),Y())}function Y(){const a=h.value;if(a===null)return;const u=a.getBoundingClientRect(),m=e.vertical===!0?a.scrollTop:Math.abs(a.scrollLeft);K.value===!0?(E.value=Math.ceil(m+u.width)<a.scrollWidth-1,b.value=m>0):(E.value=m>0,b.value=e.vertical===!0?Math.ceil(m+u.height)<a.scrollHeight:Math.ceil(m+u.width)<a.scrollWidth)}function ve(a){p!==null&&clearInterval(p),p=setInterval(()=>{r(a)===!0&&G()},5)}function ae(){ve(Q.value===!0?Number.MAX_SAFE_INTEGER:0)}function fe(){ve(Q.value===!0?0:Number.MAX_SAFE_INTEGER)}function G(){p!==null&&(clearInterval(p),p=null)}function ye(a,u){const m=Array.prototype.filter.call(h.value.children,j=>j===u||j.matches&&j.matches(".q-tab.q-focusable")===!0),U=m.length;if(U===0)return;if(a===36)return J(m[0]),m[0].focus(),!0;if(a===35)return J(m[U-1]),m[U-1].focus(),!0;const I=a===(e.vertical===!0?38:37),C=a===(e.vertical===!0?40:39),w=I===!0?-1:C===!0?1:void 0;if(w!==void 0){const j=K.value===!0?-1:1,Z=m.indexOf(u)+w*j;return Z>=0&&Z<U&&(J(m[Z]),m[Z].focus({preventScroll:!0})),!0}}const le=f(()=>Q.value===!0?{get:a=>Math.abs(a.scrollLeft),set:(a,u)=>{a.scrollLeft=-u}}:e.vertical===!0?{get:a=>a.scrollTop,set:(a,u)=>{a.scrollTop=u}}:{get:a=>a.scrollLeft,set:(a,u)=>{a.scrollLeft=u}});function r(a){const u=h.value,{get:m,set:U}=le.value;let I=!1,C=m(u);const w=a<C?-1:1;return C+=w*5,C<0?(I=!0,C=0):(w===-1&&C<=a||w===1&&C>=a)&&(I=!0,C=a),U(u,C),Y(),I}function F(a,u){for(const m in a)if(a[m]!==u[m])return!1;return!0}function M(){let a=null,u={matchedLen:0,queryDiff:9999,hrefLen:0};const m=s.filter(w=>w.routeData!==void 0&&w.routeData.hasRouterLink.value===!0),{hash:U,query:I}=n.$route,C=Object.keys(I).length;for(const w of m){const j=w.routeData.exact.value===!0;if(w.routeData[j===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:Z,query:qe,matched:Ge,href:Xe}=w.routeData.resolvedLink.value,we=Object.keys(qe).length;if(j===!0){if(Z!==U||we!==C||F(I,qe)===!1)continue;a=w.name.value;break}if(Z!==""&&Z!==U||we!==0&&F(qe,I)===!1)continue;const ne={matchedLen:Ge.length,queryDiff:C-we,hrefLen:Xe.length-Z.length};if(ne.matchedLen>u.matchedLen){a=w.name.value,u=ne;continue}else if(ne.matchedLen!==u.matchedLen)continue;if(ne.queryDiff<u.queryDiff)a=w.name.value,u=ne;else if(ne.queryDiff!==u.queryDiff)continue;ne.hrefLen>u.hrefLen&&(a=w.name.value,u=ne)}a===null&&s.some(w=>w.routeData===void 0&&w.name.value===t.value)===!0||te({name:a,setCurrent:!0})}function H(a){if(B(),$.value!==!0&&A.value!==null&&a.target&&typeof a.target.closest=="function"){const u=a.target.closest(".q-tab");u&&A.value.contains(u)===!0&&($.value=!0,_.value===!0&&J(u))}}function D(){x(()=>{$.value=!1},30)}function oe(){xe.avoidRouteWatcher===!1?L(M):N()}function Te(){if(z===void 0){const a=me(()=>n.$route.fullPath,oe);z=()=>{a(),z=void 0}}}function Ke(a){s.push(a),R.value++,re(),a.routeData===void 0||n.$route===void 0?L(()=>{if(_.value===!0){const u=t.value,m=u!=null&&u!==""?s.find(U=>U.name.value===u):null;m&&J(m.rootRef.value)}}):(Te(),a.routeData.hasRouterLink.value===!0&&oe())}function He(a){s.splice(s.indexOf(a),1),R.value--,re(),z!==void 0&&a.routeData!==void 0&&(s.every(u=>u.routeData===void 0)===!0&&z(),oe())}const xe={currentModel:t,tabProps:g,hasFocus:$,hasActiveTab:P,registerTab:Ke,unregisterTab:He,verifyRouteModel:oe,updateModel:te,onKbdNavigate:ye,avoidRouteWatcher:!1};Me(Ee,xe);function Pe(){c!==null&&clearTimeout(c),G(),z!==void 0&&z()}let Re;return Ce(Pe),rt(()=>{Re=z!==void 0,Pe()}),ot(()=>{Re===!0&&Te(),re()}),()=>d("div",{ref:A,class:y.value,role:"tablist",onFocusin:H,onFocusout:D},[d(wt,{onResize:ue}),d("div",{ref:h,class:X.value,onScroll:Y},De(v.default)),d(ge,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(E.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||l.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:ae,onTouchstartPassive:ae,onMouseupPassive:G,onMouseleavePassive:G,onTouchendPassive:G}),d(ge,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(b.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||l.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:fe,onTouchstartPassive:fe,onMouseupPassive:G,onMouseleavePassive:G,onTouchendPassive:G})])}});const Dt={...ut,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,rounded:Boolean,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},ke=50,Oe=2*ke,We=Oe*Math.PI,jt=Math.round(We*1e3)/1e3;var Qt=de({name:"QCircularProgress",props:{...Dt,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:v}){const{proxy:{$q:i}}=ce(),n=it(e),l=f(()=>{const h=(i.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(i.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-h}deg)`:`rotate3d(0, 0, 1, ${h-90}deg)`}}),q=f(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),k=f(()=>Oe/(1-e.thickness/2)),S=f(()=>`${k.value/2} ${k.value/2} ${k.value} ${k.value}`),x=f(()=>St(e.value,e.min,e.max)),B=f(()=>e.max-e.min),L=f(()=>e.thickness/2*k.value),N=f(()=>{const h=(e.max-x.value)/B.value,t=e.rounded===!0&&x.value<e.max&&h<.25?L.value/2*(1-h/.25):0;return We*h+t});function A({thickness:h,offset:t,color:_,cls:E,rounded:b}){return d("circle",{class:"q-circular-progress__"+E+(_!==void 0?` text-${_}`:""),style:q.value,fill:"transparent",stroke:"currentColor","stroke-width":h,"stroke-dasharray":jt,"stroke-dashoffset":t,"stroke-linecap":b,cx:k.value,cy:k.value,r:ke})}return()=>{const h=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&h.push(d("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:ke-L.value/2,cx:k.value,cy:k.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&h.push(A({cls:"track",thickness:L.value,offset:0,color:e.trackColor})),h.push(A({cls:"circle",thickness:L.value,offset:N.value,color:e.color,rounded:e.rounded===!0?"round":void 0}));const t=[d("svg",{class:"q-circular-progress__svg",style:l.value,viewBox:S.value,"aria-hidden":"true"},h)];return e.showValue===!0&&t.push(d("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},v.default!==void 0?v.default():[d("div",x.value)])),d("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:n.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:x.value},st(v.internal,t))}}});function se(e,v,i,n){const l=[];return e.forEach(q=>{n(q)===!0?l.push(q):v.push({failedPropValidation:i,file:q})}),l}function be(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),pe(e)}const Nt={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},Ot=["rejected"];function Wt({editable:e,dnd:v,getFileInput:i,addFilesToQueue:n}){const{props:l,emit:q,proxy:k}=ce(),S=T(null),x=f(()=>l.accept!==void 0?l.accept.split(",").map(o=>(o=o.trim(),o==="*"?"*/":(o.endsWith("/*")&&(o=o.slice(0,o.length-1)),o.toUpperCase()))):null),B=f(()=>parseInt(l.maxFiles,10)),L=f(()=>parseInt(l.maxTotalSize,10));function N(o){if(e.value)if(o!==Object(o)&&(o={target:null}),o.target!==null&&o.target.matches('input[type="file"]')===!0)o.clientX===0&&o.clientY===0&&je(o);else{const s=i();s&&s!==o.target&&s.click(o)}}function A(o){e.value&&o&&n(null,o)}function h(o,s,R,$){let c=Array.from(s||o.target.files);const p=[],z=()=>{p.length!==0&&q("rejected",p)};if(l.accept!==void 0&&x.value.indexOf("*/")===-1&&(c=se(c,p,"accept",g=>x.value.some(P=>g.type.toUpperCase().startsWith(P)||g.name.toUpperCase().endsWith(P))),c.length===0))return z();if(l.maxFileSize!==void 0){const g=parseInt(l.maxFileSize,10);if(c=se(c,p,"max-file-size",P=>P.size<=g),c.length===0)return z()}if(l.multiple!==!0&&c.length!==0&&(c=[c[0]]),c.forEach(g=>{g.__key=g.webkitRelativePath+g.lastModified+g.name+g.size}),$===!0){const g=R.map(P=>P.__key);c=se(c,p,"duplicate",P=>g.includes(P.__key)===!1)}if(c.length===0)return z();if(l.maxTotalSize!==void 0){let g=$===!0?R.reduce((P,W)=>P+W.size,0):0;if(c=se(c,p,"max-total-size",P=>(g+=P.size,g<=L.value)),c.length===0)return z()}if(typeof l.filter=="function"){const g=l.filter(c);c=se(c,p,"filter",P=>g.includes(P))}if(l.maxFiles!==void 0){let g=$===!0?R.length:0;if(c=se(c,p,"max-files",()=>(g++,g<=B.value)),c.length===0)return z()}if(z(),c.length!==0)return c}function t(o){be(o),v.value!==!0&&(v.value=!0)}function _(o){pe(o),(o.relatedTarget!==null||ct.is.safari!==!0?o.relatedTarget!==S.value:document.elementsFromPoint(o.clientX,o.clientY).includes(S.value)===!1)===!0&&(v.value=!1)}function E(o){be(o);const s=o.dataTransfer.files;s.length!==0&&n(null,s),v.value=!1}function b(o){if(v.value===!0)return d("div",{ref:S,class:`q-${o}__dnd absolute-full`,onDragenter:be,onDragover:be,onDragleave:_,onDrop:E})}return Object.assign(k,{pickFiles:N,addFiles:A}),{pickFiles:N,addFiles:A,onDragover:t,onDragleave:_,processFiles:h,getDndNode:b,maxFilesNumber:B,maxTotalSizeNumber:L}}function Ie(e){return(e*100).toFixed(2)+"%"}const Vt={...Qe,...Nt,label:String,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,noThumbnails:Boolean,autoUpload:Boolean,hideUploadBtn:Boolean,disable:Boolean,readonly:Boolean},Ve=[...Ot,"start","finish","added","removed"];function Kt(e,v){const i=ce(),{props:n,slots:l,emit:q,proxy:k}=i,{$q:S}=k,x=Ne(n,S);function B(r,F,M){if(r.__status=F,F==="idle"){r.__uploaded=0,r.__progress=0,r.__sizeLabel=$e(r.size),r.__progressLabel="0.00%";return}if(F==="failed"){k.$forceUpdate();return}r.__uploaded=F==="uploaded"?r.size:M,r.__progress=F==="uploaded"?1:Math.min(.9999,r.__uploaded/r.size),r.__progressLabel=Ie(r.__progress),k.$forceUpdate()}const L=f(()=>n.disable!==!0&&n.readonly!==!0),N=T(!1),A=T(null),h=T(null),t={files:T([]),queuedFiles:T([]),uploadedFiles:T([]),uploadedSize:T(0),updateFileStatus:B,isAlive:()=>dt(i)===!1},{pickFiles:_,addFiles:E,onDragover:b,onDragleave:o,processFiles:s,getDndNode:R,maxFilesNumber:$,maxTotalSizeNumber:c}=Wt({editable:L,dnd:N,getFileInput:J,addFilesToQueue:Y});Object.assign(t,e({props:n,slots:l,emit:q,helpers:t,exposeApi:r=>{Object.assign(t,r)}})),t.isBusy===void 0&&(t.isBusy=T(!1));const p=T(0),z=f(()=>p.value===0?0:t.uploadedSize.value/p.value),g=f(()=>Ie(z.value)),P=f(()=>$e(p.value)),W=f(()=>L.value===!0&&t.isUploading.value!==!0&&(n.multiple===!0||t.queuedFiles.value.length===0)&&(n.maxFiles===void 0||t.files.value.length<$.value)&&(n.maxTotalSize===void 0||p.value<c.value)),y=f(()=>L.value===!0&&t.isBusy.value!==!0&&t.isUploading.value!==!0&&t.queuedFiles.value.length!==0);Me(vt,fe);const X=f(()=>"q-uploader column no-wrap"+(x.value===!0?" q-uploader--dark q-dark":"")+(n.bordered===!0?" q-uploader--bordered":"")+(n.square===!0?" q-uploader--square no-border-radius":"")+(n.flat===!0?" q-uploader--flat no-shadow":"")+(n.disable===!0?" disabled q-uploader--disable":"")+(N.value===!0?" q-uploader--dnd":"")),V=f(()=>"q-uploader__header"+(n.color!==void 0?` bg-${n.color}`:"")+(n.textColor!==void 0?` text-${n.textColor}`:""));me(t.isUploading,(r,F)=>{F===!1&&r===!0?q("start"):F===!0&&r===!1&&q("finish")});function K(){n.disable===!1&&(t.abort(),t.uploadedSize.value=0,p.value=0,he(),t.files.value=[],t.queuedFiles.value=[],t.uploadedFiles.value=[])}function Q(){n.disable===!1&&re(["uploaded"],()=>{t.uploadedFiles.value=[]})}function te(){re(["idle","failed"],({size:r})=>{p.value-=r,t.queuedFiles.value=[]})}function re(r,F){if(n.disable===!0)return;const M={files:[],size:0},H=t.files.value.filter(D=>r.indexOf(D.__status)===-1?!0:(M.size+=D.size,M.files.push(D),D.__img!==void 0&&window.URL.revokeObjectURL(D.__img.src),!1));M.files.length!==0&&(t.files.value=H,F(M),q("removed",M.files))}function ue(r){n.disable||(r.__status==="uploaded"?t.uploadedFiles.value=t.uploadedFiles.value.filter(F=>F.__key!==r.__key):r.__status==="uploading"?r.__abort():p.value-=r.size,t.files.value=t.files.value.filter(F=>F.__key!==r.__key?!0:(F.__img!==void 0&&window.URL.revokeObjectURL(F.__img.src),!1)),t.queuedFiles.value=t.queuedFiles.value.filter(F=>F.__key!==r.__key),q("removed",[r]))}function he(){t.files.value.forEach(r=>{r.__img!==void 0&&window.URL.revokeObjectURL(r.__img.src)})}function J(){return h.value||A.value.getElementsByClassName("q-uploader__input")[0]}function Y(r,F){const M=s(r,F,t.files.value,!0),H=J();H!=null&&(H.value=""),M!==void 0&&(M.forEach(D=>{if(t.updateFileStatus(D,"idle"),p.value+=D.size,n.noThumbnails!==!0&&D.type.toUpperCase().startsWith("IMAGE")){const oe=new Image;oe.src=window.URL.createObjectURL(D),D.__img=oe}}),t.files.value=t.files.value.concat(M),t.queuedFiles.value=t.queuedFiles.value.concat(M),q("added",M),n.autoUpload===!0&&t.upload())}function ve(){y.value===!0&&t.upload()}function ae(r,F,M){if(r===!0){const H={type:"a",key:F,icon:S.iconSet.uploader[F],flat:!0,dense:!0};let D;return F==="add"?(H.onClick=_,D=fe):H.onClick=M,d(_e,H,D)}}function fe(){return d("input",{ref:h,class:"q-uploader__input overflow-hidden absolute-full",tabindex:-1,type:"file",title:"",accept:n.accept,multiple:n.multiple===!0?"multiple":void 0,capture:n.capture,onMousedown:je,onClick:_,onChange:Y})}function G(){return l.header!==void 0?l.header(le):[d("div",{class:"q-uploader__header-content column"},[d("div",{class:"flex flex-center no-wrap q-gutter-xs"},[ae(t.queuedFiles.value.length!==0,"removeQueue",te),ae(t.uploadedFiles.value.length!==0,"removeUploaded",Q),t.isUploading.value===!0?d(ze,{class:"q-uploader__spinner"}):null,d("div",{class:"col column justify-center"},[n.label!==void 0?d("div",{class:"q-uploader__title"},[n.label]):null,d("div",{class:"q-uploader__subtitle"},[P.value+" / "+g.value])]),ae(W.value,"add"),ae(n.hideUploadBtn===!1&&y.value===!0,"upload",t.upload),ae(t.isUploading.value,"clear",t.abort)])])]}function ye(){return l.list!==void 0?l.list(le):t.files.value.map(r=>d("div",{key:r.__key,class:"q-uploader__file relative-position"+(n.noThumbnails!==!0&&r.__img!==void 0?" q-uploader__file--img":"")+(r.__status==="failed"?" q-uploader__file--failed":r.__status==="uploaded"?" q-uploader__file--uploaded":""),style:n.noThumbnails!==!0&&r.__img!==void 0?{backgroundImage:'url("'+r.__img.src+'")'}:null},[d("div",{class:"q-uploader__file-header row flex-center no-wrap"},[r.__status==="failed"?d(ge,{class:"q-uploader__file-status",name:S.iconSet.type.negative,color:"negative"}):null,d("div",{class:"q-uploader__file-header-content col"},[d("div",{class:"q-uploader__title"},[r.name]),d("div",{class:"q-uploader__subtitle row items-center no-wrap"},[r.__sizeLabel+" / "+r.__progressLabel])]),r.__status==="uploading"?d(Qt,{value:r.__progress,min:0,max:1,indeterminate:r.__progress===0}):d(_e,{round:!0,dense:!0,flat:!0,icon:S.iconSet.uploader[r.__status==="uploaded"?"done":"clear"],onClick:()=>{ue(r)}})])]))}Ce(()=>{t.isUploading.value===!0&&t.abort(),t.files.value.length!==0&&he()});const le={};for(const r in t)ft(t[r])===!0?mt(le,r,()=>t[r].value):le[r]=t[r];return Object.assign(le,{upload:ve,reset:K,removeUploadedFiles:Q,removeQueuedFiles:te,removeFile:ue,pickFiles:_,addFiles:E}),gt(le,{canAddFiles:()=>W.value,canUpload:()=>y.value,uploadSizeLabel:()=>P.value,uploadProgressLabel:()=>g.value}),v({...t,upload:ve,reset:K,removeUploadedFiles:Q,removeQueuedFiles:te,removeFile:ue,pickFiles:_,addFiles:E,canAddFiles:W,canUpload:y,uploadSizeLabel:P,uploadProgressLabel:g}),()=>{const r=[d("div",{class:V.value},G()),d("div",{class:"q-uploader__list scroll"},ye()),R("uploader")];t.isBusy.value===!0&&r.push(d("div",{class:"q-uploader__overlay absolute-full flex flex-center"},[d(ze)]));const F={ref:A,class:X.value};return W.value===!0&&Object.assign(F,{onDragover:b,onDragleave:o}),d("div",F,r)}}const Ht=()=>!0;function Gt(e){const v={};return e.forEach(i=>{v[i]=Ht}),v}const Xt=Gt(Ve);var Jt=({name:e,props:v,emits:i,injectPlugin:n})=>de({name:e,props:{...Vt,...v},emits:ht(i)===!0?{...Xt,...i}:[...Ve,...i],setup(l,{expose:q}){return Kt(n,q)}});function ee(e){return typeof e=="function"?e:()=>e}const Yt={url:[Function,String],method:{type:[Function,String],default:"POST"},fieldName:{type:[Function,String],default:()=>e=>e.name},headers:[Function,Array],formFields:[Function,Array],withCredentials:[Function,Boolean],sendRaw:[Function,Boolean],batch:[Function,Boolean],factory:Function},Zt=["factoryFailed","uploaded","failed","uploading"];function ea({props:e,emit:v,helpers:i}){const n=T([]),l=T([]),q=T(0),k=f(()=>({url:ee(e.url),method:ee(e.method),headers:ee(e.headers),formFields:ee(e.formFields),fieldName:ee(e.fieldName),withCredentials:ee(e.withCredentials),sendRaw:ee(e.sendRaw),batch:ee(e.batch)})),S=f(()=>q.value>0),x=f(()=>l.value.length!==0);let B;function L(){n.value.forEach(t=>{t.abort()}),l.value.length!==0&&(B=!0)}function N(){const t=i.queuedFiles.value.slice(0);i.queuedFiles.value=[],k.value.batch(t)?A(t):t.forEach(_=>{A([_])})}function A(t){if(q.value++,typeof e.factory!="function"){h(t,{});return}const _=e.factory(t);if(!_)v("factoryFailed",new Error("QUploader: factory() does not return properly"),t),q.value--;else if(typeof _.catch=="function"&&typeof _.then=="function"){l.value.push(_);const E=b=>{i.isAlive()===!0&&(l.value=l.value.filter(o=>o!==_),l.value.length===0&&(B=!1),i.queuedFiles.value=i.queuedFiles.value.concat(t),t.forEach(o=>{i.updateFileStatus(o,"failed")}),v("factoryFailed",b,t),q.value--)};_.then(b=>{B===!0?E(new Error("Aborted")):i.isAlive()===!0&&(l.value=l.value.filter(o=>o!==_),h(t,b))}).catch(E)}else h(t,_||{})}function h(t,_){const E=new FormData,b=new XMLHttpRequest,o=(y,X)=>_[y]!==void 0?ee(_[y])(X):k.value[y](X),s=o("url",t);if(!s){console.error("q-uploader: invalid or no URL specified"),q.value--;return}const R=o("formFields",t);R!==void 0&&R.forEach(y=>{E.append(y.name,y.value)});let $=0,c=0,p=0,z=0,g;b.upload.addEventListener("progress",y=>{if(g===!0)return;const X=Math.min(z,y.loaded);i.uploadedSize.value+=X-p,p=X;let V=p-c;for(let K=$;V>0&&K<t.length;K++){const Q=t[K];if(V>Q.size)V-=Q.size,$++,c+=Q.size,i.updateFileStatus(Q,"uploading",Q.size);else{i.updateFileStatus(Q,"uploading",V);return}}},!1),b.onreadystatechange=()=>{b.readyState<4||(b.status&&b.status<400?(i.uploadedFiles.value=i.uploadedFiles.value.concat(t),t.forEach(y=>{i.updateFileStatus(y,"uploaded")}),v("uploaded",{files:t,xhr:b})):(g=!0,i.uploadedSize.value-=p,i.queuedFiles.value=i.queuedFiles.value.concat(t),t.forEach(y=>{i.updateFileStatus(y,"failed")}),v("failed",{files:t,xhr:b})),q.value--,n.value=n.value.filter(y=>y!==b))},b.open(o("method",t),s),o("withCredentials",t)===!0&&(b.withCredentials=!0);const P=o("headers",t);P!==void 0&&P.forEach(y=>{b.setRequestHeader(y.name,y.value)});const W=o("sendRaw",t);t.forEach(y=>{i.updateFileStatus(y,"uploading",0),W!==!0&&E.append(o("fieldName",y),y,y.name),y.xhr=b,y.__abort=()=>{b.abort()},z+=y.size}),v("uploading",{files:t,xhr:b}),n.value.push(b),W===!0?b.send(new Blob(t)):b.send(E)}return{isUploading:S,isBusy:x,abort:L,upload:N}}var ta={name:"QUploader",props:Yt,emits:Zt,injectPlugin:ea},aa=Jt(ta),Ae=de({name:"QTabPanel",props:Ct,setup(e,{slots:v}){return()=>d("div",{class:"q-tab-panel",role:"tabpanel"},De(v.default))}}),la=de({name:"QTabPanels",props:{...Tt,...Qe},emits:xt,setup(e,{slots:v}){const i=ce(),n=Ne(e,i.proxy.$q),{updatePanelsList:l,getPanelContent:q,panelDirectives:k}=Pt(),S=f(()=>"q-tab-panels q-panel-parent"+(n.value===!0?" q-tab-panels--dark q-dark":""));return()=>(l(v),bt("div",{class:S.value},q(),"pan",e.swipeable,()=>k.value))}});const ca={__name:"FMUpload",setup(e){function v(S){const x=localStorage.getItem("currentDirId")||"";return new Promise((B,L)=>{B({url:"https://api.caronon.com/api/file",method:"POST",headers:[{name:"Authorization",value:`Bearer ${n}`},{name:"dirId",value:x}]})})}const i=Bt(),n=localStorage.getItem("jwtToken"),l=T("upload_files");function q(S){console.log(S),i.notify({type:"negative",message:`${S.length} file(s) did not pass validation constraints`})}function k(S){i.notify({type:"negative",message:`${S.files[0].name} is failed, error: ${S.xhr.status} - ${S.xhr.statusText.substring(0,100)} - ${S.xhr.responseText.substring(0,100)}`})}return(S,x)=>(pt(),_t(yt,null,[O(_e,{class:"text-primary",flat:"","no-caps":"",icon:"arrow_back",onClick:x[0]||(x[0]=B=>S.$router.go(-1))},{default:ie(()=>[Be("Back")]),_:1}),O(Rt,null,{default:ie(()=>[O(Mt,{modelValue:l.value,"onUpdate:modelValue":x[1]||(x[1]=B=>l.value=B),dense:"","active-color":"primary","indicator-color":"primary",align:"left","narrow-indicator":""},{default:ie(()=>[O(Ue,{name:"upload_files",label:"Upload Files"}),O(Ue,{name:"upload_url",label:"Upload from Url"})]),_:1},8,["modelValue"]),O(Ft),O(la,{modelValue:l.value,"onUpdate:modelValue":x[2]||(x[2]=B=>l.value=B),animated:""},{default:ie(()=>[O(Ae,{name:"upload_files"},{default:ie(()=>[O(aa,{style:{width:"100%","min-height":"80vh"},label:"Max file size (100M)",multiple:"","max-file-size":"100000000",factory:v,onRejected:q,onFailed:k})]),_:1}),O(Ae,{name:"upload_url"},{default:ie(()=>[Be(" Destination URL: "),O(zt),O(_e,{label:"Upload"})]),_:1})]),_:1},8,["modelValue"])]),_:1})],64))}};export{ca as default};