if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let r={};const n=e=>a(e,f),d={module:{uri:f},exports:r,require:n};s[f]=Promise.all(c.map((e=>d[e]||n(e)))).then((e=>(i(...e),r)))}}define(["./workbox-37fde244"],(function(e){"use strict";e.setCacheNameDetails({prefix:"hobapps"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/ClosePopup.4dfd4d70.js",revision:"0aa8cf1675f432b330252a2b881af7a9"},{url:"assets/CoinPriceAlert.8cb7984c.js",revision:"edd2f5a8c3ad826f5a22d2305abe9ce9"},{url:"assets/ErrorNotFound.340b1936.js",revision:"43cc87faaf8060b7d284541fa7733784"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/FMIndex.8dc1d54b.js",revision:"d399731474f6c07aa5f12f46363a1066"},{url:"assets/FMUpload.d8d985a8.js",revision:"5efe86eafd776f29c102df2498c80445"},{url:"assets/focus-manager.75c90a95.js",revision:"65873666961481b71323b74c5547926d"},{url:"assets/GamePage.b33669fe.js",revision:"d255f1682cb23c2195341ead9afd8b21"},{url:"assets/index.51328698.js",revision:"7da2ddfef36667982f276119966f9e9a"},{url:"assets/index.8338821d.css",revision:"cc88288912a14dc6d37449d8727d6037"},{url:"assets/IndexPage.43b89d92.js",revision:"0ae3f65d7a2943f68170930edacc209d"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/LoginPage.457152be.js",revision:"805b22547e8ab13f092f90014aa03cca"},{url:"assets/mock.f51014bb.js",revision:"38a7ebe3a842e0cacffc6c318dbb0d13"},{url:"assets/NormalLayout.d6e399d4.js",revision:"401ef506c63130d59dd33ffed10c4a77"},{url:"assets/QForm.ac24bf88.js",revision:"c8060a5639108317dadef0705863fe72"},{url:"assets/QInput.04e4e2c0.js",revision:"f22354aee086b58cc3cdb23528c7a4b8"},{url:"assets/QItem.50a05ebc.js",revision:"ff8e9ad0160963ee2b47d37e452b4a75"},{url:"assets/Router4G.03c8aa94.js",revision:"e3852708fd0dec4bbc30e64ee77619ce"},{url:"assets/rtl.0e9b3205.js",revision:"4c4e3daf8b6717d2c5874649538ee794"},{url:"assets/SwaggerPage.637d0cee.js",revision:"efdeb8c43a47196bcd3aa1a9353d3629"},{url:"assets/SystemPage.7c0b8c0b.js",revision:"36498da43495a176ec77048763f97827"},{url:"assets/use-quasar.3531e723.js",revision:"2da51a5c9b21a6ff29403a9e69b96786"},{url:"assets/use-tick.72544cfc.js",revision:"475460882fc5b817e153f4f888a3b3f2"},{url:"favicon.ico",revision:"47bf5b9d198dd31d503f0c6564f99550"},{url:"icons/apple-icon-120x120.png",revision:"22d08103df95309eca99088b80927bb6"},{url:"icons/apple-icon-152x152.png",revision:"35a8209f8b9ad75b4d75294000921025"},{url:"icons/apple-icon-167x167.png",revision:"bb0dd1c0fdee50fdc3b6a7b22dde84e8"},{url:"icons/apple-icon-180x180.png",revision:"42d7fb9aee08ba52eeed81160a3b84a0"},{url:"icons/favicon-128x128.png",revision:"45dc17fe4a882fa0193a8eeba9b1c808"},{url:"icons/favicon-16x16.png",revision:"cef4534f8db74dfdadd8ddd5ed8001c1"},{url:"icons/favicon-32x32.png",revision:"9ab8b27a3a71b9900dae0b5134bff30c"},{url:"icons/favicon-96x96.png",revision:"944c6020ffe3c89b19de9d891af3700d"},{url:"icons/icon-128x128.png",revision:"45dc17fe4a882fa0193a8eeba9b1c808"},{url:"icons/icon-192x192.png",revision:"04e092ccecd7a1190738b38823e27f23"},{url:"icons/icon-256x256.png",revision:"f280b5bb6f47adab72141f967ab2825c"},{url:"icons/icon-384x384.png",revision:"fe0a627b778b8f1a7506f5889172dc8a"},{url:"icons/icon-512x512.png",revision:"41431f384f083aeeb9ea26fbb6cd99a0"},{url:"icons/ms-icon-144x144.png",revision:"5b31ccbe21c367b4bc01a1a850cd507b"},{url:"icons/safari-pinned-tab.svg",revision:"9fb4ed8890e3c30be30232ba1ec210e9"},{url:"index.html",revision:"1a5755f4cb781012e1ba153802c645e6"},{url:"manifest.json",revision:"84df4794673f881236f30a04d1fc9ae5"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));