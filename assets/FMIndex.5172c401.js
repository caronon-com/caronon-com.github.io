import{Q as Ie,T as de,a as Qe,b as Ae,C as fe}from"./ClosePopup.c91ad338.js";import{c as L,as as De,at as je,a as r,h as f,b as Z,r as s,w as Y,o as ae,T as qe,ap as Me,am as Ee,ah as Be,ao as He,u as $e,j as ne,g as ce,f as Pe,k as Ne,au as Ve,O as H,a3 as me,$ as ge,z as Fe,B as W,J as te,E as c,D as g,F as Re,V as G,Q as Le,M as re,K as he,G as E,H as J,av as Ue,C as Ke,L as We}from"./index.ebab3077.js";import{u as Ge,a as Je,b as Xe,Q as Ye,c as Ze,d as be,e as X,f as et}from"./QTable.5b7a4276.js";import{Q as tt}from"./QInput.1ffec7f9.js";import{Q as at}from"./rtl.f71e91de.js";import{u as xe,a as Oe}from"./focus-manager.3d77c9c9.js";import{Q as ye}from"./touch.e38651aa.js";import{b as le,a as lt,u as ot,c as Se}from"./use-tick.9a52c72c.js";import{s as pe,o as ue,p as nt,u as it,h as rt,v as _e,q as ut,a as st,r as ct,t as vt,w as dt,b as ft,x as mt,y as ze,z as gt,j as ht,A as we,B as bt}from"./QMenu.939c6eae.js";import{u as yt,a as St,b as pt,c as _t}from"./use-panel.3ebfa4fc.js";import{u as zt}from"./use-quasar.9a32f925.js";import"./QItem.b575f3a6.js";var wt=L({name:"QCardActions",props:{...De,vertical:Boolean},setup(e,{slots:v}){const y=je(e),_=r(()=>`q-card__actions ${y.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>f("div",{class:_.value},Z(v.default))}});const Ct={ratio:[String,Number]};function Tt(e,v){return r(()=>{const y=Number(e.ratio||(v!==void 0?v.value:void 0));return isNaN(y)!==!0&&y>0?{paddingBottom:`${100/y}%`}:null})}const kt=16/9;var qt=L({name:"QImg",props:{...Ct,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:kt},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:v,emit:y}){const _=s(e.initialRatio),h=Tt(e,_);let d=null,i=!1;const a=[s(null),s(A())],b=s(0),z=s(!1),C=s(!1),B=r(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),T=r(()=>({width:e.width,height:e.height})),$=r(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),I=r(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));Y(()=>Q(),x);function Q(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function A(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function x(u){d!==null&&(clearTimeout(d),d=null),C.value=!1,u===null?(z.value=!1,a[b.value^1].value=A()):z.value=!0,a[b.value].value=u}function M({target:u}){i!==!0&&(d!==null&&(clearTimeout(d),d=null),_.value=u.naturalHeight===0?.5:u.naturalWidth/u.naturalHeight,O(u,1))}function O(u,j){i===!0||j===1e3||(u.complete===!0?N(u):d=setTimeout(()=>{d=null,O(u,j+1)},50))}function N(u){i!==!0&&(b.value=b.value^1,a[b.value].value=null,z.value=!1,C.value=!1,y("load",u.currentSrc||u.src))}function k(u){d!==null&&(clearTimeout(d),d=null),z.value=!1,C.value=!0,a[b.value].value=null,a[b.value^1].value=A(),y("error",u)}function D(u){const j=a[u].value,S={key:"img_"+u,class:$.value,style:I.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...j};return b.value===u?(S.class+=" q-img__image--waiting",Object.assign(S,{onLoad:M,onError:k})):S.class+=" q-img__image--loaded",f("div",{class:"q-img__container absolute-full",key:"img"+u},f("img",S))}function q(){return z.value!==!0?f("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},Z(v[C.value===!0?"error":"default"])):f("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},v.loading!==void 0?v.loading():e.noSpinner===!0?void 0:[f(Me,{color:e.spinnerColor,size:e.spinnerSize})])}return x(Q()),ae(()=>{i=!0,d!==null&&(clearTimeout(d),d=null)}),()=>{const u=[];return h.value!==null&&u.push(f("div",{key:"filler",style:h.value})),C.value!==!0&&(a[0].value!==null&&u.push(D(0)),a[1].value!==null&&u.push(D(1))),u.push(f(qe,{name:"q-transition--fade"},q)),f("div",{class:B.value,style:T.value,role:"img","aria-label":e.alt},u)}}});const Ce=["vertical","horizontal"],se={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Te={prevent:!0,mouse:!0,mouseAllDir:!0},ke=e=>e>=250?50:Math.ceil(e/5);var $t=L({name:"QScrollArea",props:{...xe,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:v,emit:y}){const _=s(!1),h=s(!1),d=s(!1),i={vertical:s(0),horizontal:s(0)},a={vertical:{ref:s(null),position:s(0),size:s(0)},horizontal:{ref:s(null),position:s(0),size:s(0)}},{proxy:b}=ce(),z=Oe(e,b.$q);let C=null,B;const T=s(null),$=r(()=>"q-scrollarea"+(z.value===!0?" q-scrollarea--dark":""));a.vertical.percentage=r(()=>{const t=a.vertical.size.value-i.vertical.value;if(t<=0)return 0;const o=le(a.vertical.position.value/t,0,1);return Math.round(o*1e4)/1e4}),a.vertical.thumbHidden=r(()=>(e.visible===null?d.value:e.visible)!==!0&&_.value===!1&&h.value===!1||a.vertical.size.value<=i.vertical.value+1),a.vertical.thumbStart=r(()=>a.vertical.percentage.value*(i.vertical.value-a.vertical.thumbSize.value)),a.vertical.thumbSize=r(()=>Math.round(le(i.vertical.value*i.vertical.value/a.vertical.size.value,ke(i.vertical.value),i.vertical.value))),a.vertical.style=r(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${a.vertical.thumbStart.value}px`,height:`${a.vertical.thumbSize.value}px`})),a.vertical.thumbClass=r(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.vertical.barClass=r(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),a.horizontal.percentage=r(()=>{const t=a.horizontal.size.value-i.horizontal.value;if(t<=0)return 0;const o=le(Math.abs(a.horizontal.position.value)/t,0,1);return Math.round(o*1e4)/1e4}),a.horizontal.thumbHidden=r(()=>(e.visible===null?d.value:e.visible)!==!0&&_.value===!1&&h.value===!1||a.horizontal.size.value<=i.horizontal.value+1),a.horizontal.thumbStart=r(()=>a.horizontal.percentage.value*(i.horizontal.value-a.horizontal.thumbSize.value)),a.horizontal.thumbSize=r(()=>Math.round(le(i.horizontal.value*i.horizontal.value/a.horizontal.size.value,ke(i.horizontal.value),i.horizontal.value))),a.horizontal.style=r(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[b.$q.lang.rtl===!0?"right":"left"]:`${a.horizontal.thumbStart.value}px`,width:`${a.horizontal.thumbSize.value}px`})),a.horizontal.thumbClass=r(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.horizontal.barClass=r(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const I=r(()=>a.vertical.thumbHidden.value===!0&&a.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),Q=[[de,t=>{q(t,"vertical")},void 0,{vertical:!0,...Te}]],A=[[de,t=>{q(t,"horizontal")},void 0,{horizontal:!0,...Te}]];function x(){const t={};return Ce.forEach(o=>{const m=a[o];t[o+"Position"]=m.position.value,t[o+"Percentage"]=m.percentage.value,t[o+"Size"]=m.size.value,t[o+"ContainerSize"]=i[o].value}),t}const M=Ee(()=>{const t=x();t.ref=b,y("scroll",t)},0);function O(t,o,m){if(Ce.includes(t)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(t==="vertical"?pe:ue)(T.value,o,m)}function N({height:t,width:o}){let m=!1;i.vertical.value!==t&&(i.vertical.value=t,m=!0),i.horizontal.value!==o&&(i.horizontal.value=o,m=!0),m===!0&&w()}function k({position:t}){let o=!1;a.vertical.position.value!==t.top&&(a.vertical.position.value=t.top,o=!0),a.horizontal.position.value!==t.left&&(a.horizontal.position.value=t.left,o=!0),o===!0&&w()}function D({height:t,width:o}){a.horizontal.size.value!==o&&(a.horizontal.size.value=o,w()),a.vertical.size.value!==t&&(a.vertical.size.value=t,w())}function q(t,o){const m=a[o];if(t.isFirst===!0){if(m.thumbHidden.value===!0)return;B=m.position.value,h.value=!0}else if(h.value!==!0)return;t.isFinal===!0&&(h.value=!1);const F=se[o],K=i[o].value,ie=(m.size.value-K)/(K-m.thumbSize.value),P=t.distance[F.dist],ee=B+(t.direction===F.dir?1:-1)*P*ie;V(ee,o)}function u(t,o){const m=a[o];if(m.thumbHidden.value!==!0){const F=t[se[o].offset];if(F<m.thumbStart.value||F>m.thumbStart.value+m.thumbSize.value){const K=F-m.thumbSize.value/2;V(K/i[o].value*m.size.value,o)}m.ref.value!==null&&m.ref.value.dispatchEvent(new MouseEvent(t.type,t))}}function j(t){u(t,"vertical")}function S(t){u(t,"horizontal")}function w(){_.value=!0,C!==null&&clearTimeout(C),C=setTimeout(()=>{C=null,_.value=!1},e.delay),e.onScroll!==void 0&&M()}function V(t,o){T.value[se[o].scroll]=t}let p=null;function R(){p!==null&&clearTimeout(p),p=setTimeout(()=>{p=null,d.value=!0},b.$q.platform.is.ios?50:0)}function n(){p!==null&&(clearTimeout(p),p=null),d.value=!1}let l=null;return Y(()=>b.$q.lang.rtl,t=>{T.value!==null&&ue(T.value,Math.abs(a.horizontal.position.value)*(t===!0?-1:1))}),Be(()=>{l={top:a.vertical.position.value,left:a.horizontal.position.value}}),He(()=>{if(l===null)return;const t=T.value;t!==null&&(ue(t,l.left),pe(t,l.top))}),ae(M.cancel),Object.assign(b,{getScrollTarget:()=>T.value,getScroll:x,getScrollPosition:()=>({top:a.vertical.position.value,left:a.horizontal.position.value}),getScrollPercentage:()=>({top:a.vertical.percentage.value,left:a.horizontal.percentage.value}),setScrollPosition:O,setScrollPercentage(t,o,m){O(t,o*(a[t].size.value-i[t].value)*(t==="horizontal"&&b.$q.lang.rtl===!0?-1:1),m)}}),()=>f("div",{class:$.value,onMouseenter:R,onMouseleave:n},[f("div",{ref:T,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[f("div",{class:"q-scrollarea__content absolute",style:I.value},$e(v.default,[f(ye,{debounce:0,onResize:D})])),f(Ie,{axis:"both",onScroll:k})]),f(ye,{debounce:0,onResize:N}),f("div",{class:a.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:j}),f("div",{class:a.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:S}),ne(f("div",{ref:a.vertical.ref,class:a.vertical.thumbClass.value,style:a.vertical.style.value,"aria-hidden":"true"}),Q),ne(f("div",{ref:a.horizontal.ref,class:a.horizontal.thumbClass.value,style:a.horizontal.style.value,"aria-hidden":"true"}),A)])}}),Pt=L({name:"QCarouselSlide",props:{...yt,imgSrc:String},setup(e,{slots:v}){const y=r(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>f("div",{class:"q-carousel__slide",style:y.value},Z(v.default))}}),xt=L({name:"QCarouselControl",props:{position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,default:()=>[18,18],validator:e=>e.length===2}},setup(e,{slots:v}){const y=r(()=>`q-carousel__control absolute absolute-${e.position}`),_=r(()=>({margin:`${e.offset[1]}px ${e.offset[0]}px`}));return()=>f("div",{class:y.value,style:_.value},Z(v.default))}});const Ot=["top","right","bottom","left"],It=["regular","flat","outline","push","unelevated"];var Qt=L({name:"QCarousel",props:{...xe,...St,...Ge,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>It.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Ot.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...Je,...pt],setup(e,{slots:v}){const{proxy:{$q:y}}=ce(),_=Oe(e,y);let h=null,d;const{updatePanelsList:i,getPanelContent:a,panelDirectives:b,goToPanel:z,previousPanel:C,nextPanel:B,getEnabledPanels:T,panelIndex:$}=_t(),{inFullscreen:I}=Xe(),Q=r(()=>I.value!==!0&&e.height!==void 0?{height:e.height}:{}),A=r(()=>e.vertical===!0?"vertical":"horizontal"),x=r(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(I.value===!0?" fullscreen":"")+(_.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${A.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${k.value}`:"")),M=r(()=>{const S=[e.prevIcon||y.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||y.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&y.lang.rtl===!0?S.reverse():S}),O=r(()=>e.navigationIcon||y.iconSet.carousel.navigationIcon),N=r(()=>e.navigationActiveIcon||O.value),k=r(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),D=r(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));Y(()=>e.modelValue,()=>{e.autoplay&&q()}),Y(()=>e.autoplay,S=>{S?q():h!==null&&(clearTimeout(h),h=null)});function q(){const S=Ve(e.autoplay)===!0?Math.abs(e.autoplay):5e3;h!==null&&clearTimeout(h),h=setTimeout(()=>{h=null,S>=0?B():C()},S)}Pe(()=>{e.autoplay&&q()}),ae(()=>{h!==null&&clearTimeout(h)});function u(S,w){return f("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${S} q-carousel__navigation--${k.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[f("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},T().map(w))])}function j(){const S=[];if(e.navigation===!0){const w=v["navigation-icon"]!==void 0?v["navigation-icon"]:p=>f(H,{key:"nav"+p.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${p.active===!0?"":"in"}active`,...p.btnProps,onClick:p.onClick}),V=d-1;S.push(u("buttons",(p,R)=>{const n=p.props.name,l=$.value===R;return w({index:R,maxIndex:V,name:n,active:l,btnProps:{icon:l===!0?N.value:O.value,size:"sm",...D.value},onClick:()=>{z(n)}})}))}else if(e.thumbnails===!0){const w=e.controlColor!==void 0?` text-${e.controlColor}`:"";S.push(u("thumbnails",V=>{const p=V.props;return f("img",{key:"tmb#"+p.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${p.name===e.modelValue?"":"in"}active`+w,src:p.imgSrc||p["img-src"],onClick:()=>{z(p.name)}})}))}return e.arrows===!0&&$.value>=0&&((e.infinite===!0||$.value>0)&&S.push(f("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${A.value} absolute flex flex-center`},[f(H,{icon:M.value[0],...D.value,onClick:C})])),(e.infinite===!0||$.value<d-1)&&S.push(f("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${A.value} absolute flex flex-center`},[f(H,{icon:M.value[1],...D.value,onClick:B})]))),$e(v.control,S)}return()=>(d=i(v),f("div",{class:x.value,style:Q.value},[Ne("div",{class:"q-carousel__slides-container"},a(),"sl-cont",e.swipeable,()=>b.value)].concat(j())))}}),oe=L({name:"QTooltip",inheritAttrs:!1,props:{...nt,...it,...rt,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:_e},self:{type:String,default:"top middle",validator:_e},offset:{type:Array,default:()=>[14,14],validator:ut},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...st],setup(e,{slots:v,emit:y,attrs:_}){let h,d;const i=ce(),{proxy:{$q:a}}=i,b=s(null),z=s(!1),C=r(()=>we(e.anchor,a.lang.rtl)),B=r(()=>we(e.self,a.lang.rtl)),T=r(()=>e.persistent!==!0),{registerTick:$,removeTick:I}=lt(),{registerTimeout:Q}=ot(),{transitionProps:A,transitionStyle:x}=ct(e),{localScrollTarget:M,changeScrollEvent:O,unconfigureScrollTarget:N}=vt(e,F),{anchorEl:k,canShow:D,anchorEvents:q}=dt({showing:z,configureAnchorEl:m}),{show:u,hide:j}=ft({showing:z,canShow:D,handleShow:p,handleHide:R,hideOnRouteChange:T,processOnMount:!0});Object.assign(q,{delayShow:t,delayHide:o});const{showPortal:S,hidePortal:w,renderPortal:V}=mt(i,b,ie,"tooltip");if(a.platform.is.mobile===!0){const P={anchorEl:k,innerRef:b,onClickOutside(U){return j(U),U.target.classList.contains("q-dialog__backdrop")&&Fe(U),!0}},ee=r(()=>e.modelValue===null&&e.persistent!==!0&&z.value===!0);Y(ee,U=>{(U===!0?bt:ze)(P)}),ae(()=>{ze(P)})}function p(P){S(),$(()=>{d=new MutationObserver(()=>l()),d.observe(b.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),l(),F()}),h===void 0&&(h=Y(()=>a.screen.width+"|"+a.screen.height+"|"+e.self+"|"+e.anchor+"|"+a.lang.rtl,l)),Q(()=>{S(!0),y("show",P)},e.transitionDuration)}function R(P){I(),w(),n(),Q(()=>{w(!0),y("hide",P)},e.transitionDuration)}function n(){d!==void 0&&(d.disconnect(),d=void 0),h!==void 0&&(h(),h=void 0),N(),me(q,"tooltipTemp")}function l(){gt({targetEl:b.value,offset:e.offset,anchorEl:k.value,anchorOrigin:C.value,selfOrigin:B.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function t(P){if(a.platform.is.mobile===!0){Se(),document.body.classList.add("non-selectable");const ee=k.value,U=["touchmove","touchcancel","touchend","click"].map(ve=>[ee,ve,"delayHide","passiveCapture"]);ge(q,"tooltipTemp",U)}Q(()=>{u(P)},e.delay)}function o(P){a.platform.is.mobile===!0&&(me(q,"tooltipTemp"),Se(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),Q(()=>{j(P)},e.hideDelay)}function m(){if(e.noParentEvent===!0||k.value===null)return;const P=a.platform.is.mobile===!0?[[k.value,"touchstart","delayShow","passive"]]:[[k.value,"mouseenter","delayShow","passive"],[k.value,"mouseleave","delayHide","passive"]];ge(q,"anchor",P)}function F(){if(k.value!==null||e.scrollTarget!==void 0){M.value=ht(k.value,e.scrollTarget);const P=e.noParentEvent===!0?l:j;O(M.value,P)}}function K(){return z.value===!0?f("div",{..._,ref:b,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",_.class],style:[_.style,x.value],role:"tooltip"},Z(v.default)):null}function ie(){return f(qe,A.value,K)}return ae(n),Object.assign(i.proxy,{updatePosition:l}),V}}),At=L({name:"QTr",props:{props:Object,noHover:Boolean},setup(e,{slots:v}){const y=r(()=>"q-tr"+(e.props===void 0||e.props.header===!0?"":" "+e.props.__trClass)+(e.noHover===!0?" q-tr--no-hover":""));return()=>f("tr",{class:y.value},Z(v.default))}});const Dt={class:"text-h6"},jt={key:0},Mt={class:"q-px-md text-h6"},Et=["onClick"],Bt={class:"q-pa-md"},Ht=["onClick"],Zt={__name:"FMIndex",setup(e){const v=zt(),y=[{name:"name",required:!0,label:"Name",align:"left",field:n=>n.name,format:n=>`${n}`,sortable:!0},{name:"size",align:"left",label:"Size",field:"size",sortable:!0},{name:"modified",align:"left",label:"Modified",field:"modified",sortable:!0},{name:"role",align:"left",label:"Role",field:"role",sortable:!0},{name:"actions",align:"left",label:"Actions",field:"name"}],_={page:0,rowsPerPage:50},h=s(!1),d=s(""),i=s(!0),a=s([]),b=s(""),z=s(""),C=s([]),B=s([]),T=s(!1),$=s(""),I=s([]),Q=s(null),A=s(""),x=s(""),M=s(localStorage.getItem("fileToken")||""),O=s(localStorage.getItem("jwtToken")||"");async function N(n){n?n.type==="-"?(localStorage.setItem("currentDirId",n.id),x.value=n.id,w()):n.type==="image"&&k(n.id):(localStorage.setItem("currentDirId",""),x.value="",w())}function k(n){C.value=a.value.filter(l=>l.type==="image").map(function(l){return{id:l.id,url:`https://api.caronon.com/api/file/${l.id}?token=${M.value}`}}),d.value=n,i.value=!0,h.value=!0}async function D(n,l,t){z.value=n,n==="newdir"?b.value="Input new directory name":n==="update"&&(b.value=`Input value of ${l}`,A.value=l,Q.value=t),T.value=!0}async function q(){T.value=!1,z.value==="newdir"?u():z.value==="update"&&V(A.value,Q.value),$.value=""}async function u(){try{const n=new FormData;n.append("name",$.value);const l=await fetch("https://api.caronon.com/api/file",{method:"POST",body:n,headers:{Authorization:`Bearer ${O.value}`,dirId:x.value}}),t=l.ok?await l.json():`Error ${l.status} - ${(await l.text()).substring(0,256)}`;l.ok?(v.notify({message:t.message,type:"positive"}),w()):v.notify({message:t,type:"negative"})}catch(n){v.notify({message:n,type:"negative"})}}async function j(n){try{const l=await fetch(`https://api.caronon.com/api/file?dir=${n}`,{method:"GET",headers:{Authorization:`Bearer ${O.value}`}}),t=l.ok?await l.json():`Error ${l.status} - ${(await l.text()).substring(0,256)}`;if(l.ok)return t;v.notify({message:t,type:"negative"})}catch(l){v.notify({message:l.message,type:"negative"})}return{rows:[],paths:[]}}async function S(n){window.open(`https://api.caronon.com/api/file/${n.id}?token=${M.value}`)}async function w(){const n=await j(x.value);a.value=n.rows,B.value=n.paths}async function V(n,l){try{const t={};t[n]=$.value;const o=await fetch(`https://api.caronon.com/api/file/${l.id}`,{method:"POST",body:JSON.stringify(t),headers:{Authorization:`Bearer ${O.value}`,"Content-Type":"application/json"}}),m=o.ok?await o.json():`Error ${o.status} - ${(await o.text()).substring(0,256)}`;o.ok?await w():v.notify({message:m,type:"negative"})}catch(t){v.notify({message:t.message,type:"negative"})}}async function p(n){if(!!confirm(`Are you sure? ${n.name} will be deleted!`))try{const l=await fetch(`https://api.caronon.com/api/file/${n.id}`,{method:"DELETE",headers:{Authorization:`Bearer ${O.value}`}}),t=l.ok?await l.json():`Error ${l.status} - ${(await l.text()).substring(0,256)}`;l.ok?(a.value=a.value.filter(o=>o.id!==n.id),v.notify({message:`${n.type==="-"?"Folder and subfiles of":"File"} '${n.name}' were deleted!`,type:"positive"})):v.notify({message:t,type:"negative"})}catch(l){v.notify({message:l.message,type:"negative"})}}function R(){return I.value.length===0?"":`${I.value.length} record${I.value.length>1?"s":""} selected of ${a.value.length}`}return Pe(async()=>{x.value=localStorage.getItem("currentDirId")||"",w()}),(n,l)=>(W(),te(re,null,[c(Qe,null,{default:g(()=>[c(Ae),c(H,{class:"text-primary",flat:"","no-caps":"",icon:"create_new_folder",onClick:l[0]||(l[0]=t=>D("newdir"))},{default:g(()=>[E("New Folder")]),_:1}),c(H,{class:"text-primary",flat:"","no-caps":"",icon:"file_upload",to:"/files/upload"},{default:g(()=>[E("Upload")]),_:1})]),_:1}),c(Ye,{modelValue:T.value,"onUpdate:modelValue":l[2]||(l[2]=t=>T.value=t),persistent:"",class:"q-pa-md"},{default:g(()=>[c(at,{style:{"min-width":"350px"}},{default:g(()=>[c(be,null,{default:g(()=>[G("div",Dt,J(b.value),1)]),_:1}),c(be,{class:"q-pt-none"},{default:g(()=>[c(tt,{dense:"",modelValue:$.value,"onUpdate:modelValue":l[1]||(l[1]=t=>$.value=t),autofocus:"",onKeyup:Ue(q,["enter"])},null,8,["modelValue"])]),_:1}),c(wt,{align:"right",class:"text-primary"},{default:g(()=>[ne(c(H,{flat:"",label:"Cancel"},null,512),[[fe]]),ne(c(H,{flat:"",label:"OK",onClick:q},null,512),[[fe]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),h.value?(W(),te("div",jt,[c(Qt,{swipeable:"",arrows:"",animated:"",modelValue:d.value,"onUpdate:modelValue":l[4]||(l[4]=t=>d.value=t),fullscreen:i.value,"onUpdate:fullscreen":l[5]||(l[5]=t=>i.value=t),infinite:"",class:"bg-blue-grey-11"},{control:g(()=>[c(xt,{position:"bottom-right",offset:[18,18]},{default:g(()=>[c(H,{push:"",round:"",dense:"",color:"white","text-color":"primary",icon:i.value?"fullscreen_exit":"fullscreen",onClick:l[3]||(l[3]=t=>h.value=!1)},null,8,["icon"])]),_:1})]),default:g(()=>[(W(!0),te(re,null,he(C.value,t=>(W(),Ke(Pt,{key:t.id,name:t.id,style:{padding:"0px !important"}},{default:g(()=>[c($t,{class:"fit"},{default:g(()=>[c(qt,{src:t.url},null,8,["src"])]),_:2},1024)]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue","fullscreen"])])):Re("",!0),G("div",Mt,[G("a",{href:"javascript:;",onClick:l[6]||(l[6]=t=>N(null))},[c(Le,{name:"home"})]),(W(!0),te(re,null,he(B.value,t=>(W(),te("span",We(t,{key:t.id}),[E(" / "),G("a",{href:"javascript:;",onClick:o=>N(t)},J(t.name),9,Et)],16))),128))]),G("div",Bt,[c(Ze,{flat:"",bordered:"",rows:a.value,columns:y,"row-key":"path",selection:"multiple","selected-rows-label":R,selected:I.value,"onUpdate:selected":l[7]||(l[7]=t=>I.value=t),pagination:_},{body:g(t=>[c(At,{props:t},{default:g(()=>[c(X,{key:"name",props:t},{default:g(()=>[c(et,{"model-value":t.selected,"onUpdate:modelValue":(o,m)=>{Object.getOwnPropertyDescriptor(t,"selected").set(o,m)}},null,8,["model-value","onUpdate:modelValue"])]),_:2},1032,["props"]),c(X,{key:"name",props:t},{default:g(()=>[G("a",{href:"javascript:;",onClick:o=>N(t.row)},J(t.row.name),9,Ht)]),_:2},1032,["props"]),c(X,{key:"size",props:t},{default:g(()=>[E(J(t.row.size),1)]),_:2},1032,["props"]),c(X,{key:"modified",props:t},{default:g(()=>[E(J(t.row.modified),1)]),_:2},1032,["props"]),c(X,{key:"role",props:t},{default:g(()=>[E(J(t.row.role),1)]),_:2},1032,["props"]),c(X,{key:"name",props:t},{default:g(()=>[c(H,{icon:"delete",size:"xs",round:"",color:"primary",onClick:o=>p(t.row)},{default:g(()=>[c(oe,null,{default:g(()=>[E("Delete")]),_:1})]),_:2},1032,["onClick"]),E(" \xA0 "),c(H,{icon:"drive_file_rename_outline",size:"xs",round:"",color:"primary",onClick:o=>D("update","name",t.row)},{default:g(()=>[c(oe,null,{default:g(()=>[E("Rename")]),_:1})]),_:2},1032,["onClick"]),E(" \xA0 "),c(H,{icon:"people",size:"xs",round:"",color:"primary",onClick:o=>D("update","role",t.row)},{default:g(()=>[c(oe,null,{default:g(()=>[E("Change role")]),_:1})]),_:2},1032,["onClick"]),E(" \xA0 "),c(H,{icon:"file_download",size:"xs",round:"",color:"primary",onClick:o=>S(t.row)},{default:g(()=>[c(oe,null,{default:g(()=>[E("Download")]),_:1})]),_:2},1032,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","selected"])])],64))}};export{Zt as default};
