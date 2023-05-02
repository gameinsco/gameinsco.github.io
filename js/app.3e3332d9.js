(function(){"use strict";var e={4275:function(e,n,t){var o=t(9963),r=t(6252);function i(e,n,t,o,i,a){const c=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(c)}var a={name:"App"},c=t(3744);const u=(0,c.Z)(a,[["render",i]]);var f=u,s=t(2201);const d=[{path:"/",name:"Home",component:()=>t.e(178).then(t.bind(t,1453))},{path:"/Intro",name:"intro",component:()=>t.e(285).then(t.bind(t,285))},{path:"/service",name:"service",component:()=>t.e(724).then(t.bind(t,8724))},{path:"/news",name:"news",component:()=>t.e(715).then(t.bind(t,5715))},{path:"/news/11",name:"newsdetail11",component:()=>t.e(395).then(t.bind(t,5127))},{path:"/news/10",name:"newsdetail10",component:()=>t.e(961).then(t.bind(t,6565))},{path:"/news/9",name:"newsdetail9",component:()=>t.e(402).then(t.bind(t,3799))},{path:"/news/8",name:"newsdetail8",component:()=>t.e(530).then(t.bind(t,7498))},{path:"/news/7",name:"newsdetail7",component:()=>t.e(310).then(t.bind(t,9229))},{path:"/news/6",name:"newsdetail6",component:()=>t.e(201).then(t.bind(t,3238))},{path:"/news/5",name:"newsdetail5",component:()=>t.e(194).then(t.bind(t,4736))},{path:"/news/4",name:"newsdetail4",component:()=>t.e(498).then(t.bind(t,3732))},{path:"/news/3",name:"newsdetail3",component:()=>t.e(936).then(t.bind(t,4678))},{path:"/news/2",name:"newsdetail2",component:()=>t.e(967).then(t.bind(t,6413))},{path:"/news/1",name:"newsdetail1",component:()=>t.e(114).then(t.bind(t,8528))},{path:"/contact",name:"contact",component:()=>t.e(245).then(t.bind(t,9245))},{path:"/employ",name:"employ",component:()=>t.e(227).then(t.bind(t,7227))},{path:"/header",name:"Header",component:()=>t.e(126).then(t.bind(t,9126))},{path:"/menu",name:"menu",component:()=>t.e(823).then(t.bind(t,823))},{path:"/test",name:"test",component:()=>t.e(824).then(t.bind(t,3824))},{path:"/footer",name:"Footer",component:()=>t.e(981).then(t.bind(t,9981))}],l=(0,s.p7)({history:(0,s.r5)(),routes:d,scrollBehavior(){return{top:0}}});var p=l,m=t(7625),h=(t(9773),t(1291)),b=t(3009),v=t(6300),g=t(6030),w=t(7190);const y=(0,h.Rd)({icons:{iconfont:"mdiSvg"},components:b,directives:v}),S=(0,o.ri)(f);S.config.productionTip=!1,S.use(m.Z),S.use(y),S.use(p),S.component("slick",w.Z),S.config.globalProperties.$anime=g.Z,S.mount("#app")},7625:function(e,n,t){var o=t(3907);const r=(0,o.MT)({state:{isScrolling:!1},mutations:{setIsScrolling(e,n){e.isScrolling=n}},actions:{setIsScrolling({commit:e},n){e("setIsScrolling",n)}},getters:{isScrolling:e=>e.isScrolling}});n["Z"]=r}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var a=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],i=e[s][2];for(var c=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[u])}))?o.splice(u--,1):(c=!1,i<a&&(a=i));if(c){e.splice(s--,1);var f=r();void 0!==f&&(n=f)}}return n}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{114:"ea59ce94",126:"615f6266",178:"23a3de8b",194:"c82ddf45",201:"ec4fddeb",227:"378c817d",245:"f5147463",285:"00773f61",310:"b82e3b83",395:"ea83e024",402:"de58f37e",498:"ea7a65aa",530:"7899306a",715:"25383ab1",724:"1c5ab0c5",823:"58f77f57",824:"ad92bf22",936:"72ec40e6",961:"13ffda01",967:"29c1d98c",981:"ef04ec2c"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{114:"d38c9dd4",126:"2819587b",178:"c1b309f0",194:"2bbe05a7",201:"8c6e4b53",227:"f3becb6e",245:"697591bd",285:"f1911470",310:"1c1b766c",395:"6bbf38fc",402:"3f5661fd",498:"34fffa78",530:"4c34a156",715:"e04426b3",724:"7f478fff",823:"d01458c8",824:"158cdf27",936:"8209c584",961:"3507cb7a",967:"1da1fe74",981:"33a9f8fe"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="company-page:";t.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var c,u;if(void 0!==i)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var d=f[s];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==n+i){c=d;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+i),c.src=o),e[o]=[r];var l=function(n,t){c.onerror=c.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,o,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(t){if(i.onerror=i.onload=null,"load"===t.type)o();else{var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=c,i.parentNode.removeChild(i),r(u)}};return i.onerror=i.onload=a,i.href=n,t?t.parentNode.insertBefore(i,t.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===n))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===n)return r}},o=function(o){return new Promise((function(r,i){var a=t.miniCssF(o),c=t.p+a;if(n(a,c))return r();e(o,c,null,r,i)}))},r={143:0};t.f.miniCss=function(e,n){var t={114:1,126:1,178:1,194:1,201:1,227:1,245:1,285:1,310:1,395:1,402:1,498:1,530:1,715:1,724:1,823:1,824:1,936:1,961:1,967:1,981:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=i);var a=t.p+t.u(n),c=new Error,u=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;c.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,r[1](c)}};t.l(a,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,a=o[0],c=o[1],u=o[2],f=0;if(a.some((function(n){return 0!==e[n]}))){for(r in c)t.o(c,r)&&(t.m[r]=c[r]);if(u)var s=u(t)}for(n&&n(o);f<a.length;f++)i=a[f],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(s)},o=self["webpackChunkcompany_page"]=self["webpackChunkcompany_page"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(4275)}));o=t.O(o)})();
//# sourceMappingURL=app.3e3332d9.js.map