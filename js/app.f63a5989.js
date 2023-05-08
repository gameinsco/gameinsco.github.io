(function(){"use strict";var e={4275:function(e,n,t){var o=t(9963),r=t(6252);function a(e,n,t,o,a,i){const c=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(c)}var i={name:"App"},c=t(3744);const u=(0,c.Z)(i,[["render",a]]);var s=u,f=t(2201);const d=[{path:"/",name:"Home",component:()=>t.e(481).then(t.bind(t,5899))},{path:"/Intro",name:"intro",component:()=>Promise.all([t.e(488),t.e(495)]).then(t.bind(t,7459))},{path:"/service",name:"service",component:()=>t.e(724).then(t.bind(t,8724))},{path:"/news",name:"news",component:()=>t.e(708).then(t.bind(t,6708))},{path:"/news/11",name:"newsdetail11",component:()=>t.e(357).then(t.bind(t,4290))},{path:"/news/10",name:"newsdetail10",component:()=>t.e(37).then(t.bind(t,960))},{path:"/news/9",name:"newsdetail9",component:()=>t.e(754).then(t.bind(t,8096))},{path:"/news/8",name:"newsdetail8",component:()=>t.e(748).then(t.bind(t,2028))},{path:"/news/7",name:"newsdetail7",component:()=>t.e(144).then(t.bind(t,4981))},{path:"/news/6",name:"newsdetail6",component:()=>t.e(997).then(t.bind(t,8058))},{path:"/news/5",name:"newsdetail5",component:()=>t.e(73).then(t.bind(t,5170))},{path:"/news/4",name:"newsdetail4",component:()=>t.e(85).then(t.bind(t,9744))},{path:"/news/3",name:"newsdetail3",component:()=>t.e(757).then(t.bind(t,3783))},{path:"/news/2",name:"newsdetail2",component:()=>t.e(786).then(t.bind(t,9319))},{path:"/news/1",name:"newsdetail1",component:()=>t.e(966).then(t.bind(t,3142))},{path:"/contact",name:"contact",component:()=>t.e(245).then(t.bind(t,9245))},{path:"/employ",name:"employ",component:()=>Promise.all([t.e(488),t.e(130)]).then(t.bind(t,7227))},{path:"/header",name:"Header",component:()=>t.e(899).then(t.bind(t,1899))},{path:"/menu",name:"menu",component:()=>t.e(798).then(t.bind(t,7798))},{path:"/test",name:"test",component:()=>t.e(824).then(t.bind(t,3824))},{path:"/footer",name:"Footer",component:()=>t.e(457).then(t.bind(t,457))}],l=(0,f.p7)({history:(0,f.r5)(),routes:d,scrollBehavior(){return{top:0}}});var p=l,m=t(7625),h=(t(9773),t(1291)),b=t(3009),v=t(6300),g=t(6030),w=t(7190);const y=(0,h.Rd)({icons:{iconfont:"mdiSvg"},components:b,directives:v}),S=(0,o.ri)(s);S.config.productionTip=!1,S.use(m.Z),S.use(y),S.use(p),S.component("slick",w.Z),S.config.globalProperties.$anime=g.Z,S.mount("#app")},7625:function(e,n,t){var o=t(3907);const r=(0,o.MT)({state:{isScrolling:!1},mutations:{setIsScrolling(e,n){e.isScrolling=n}},actions:{setIsScrolling({commit:e},n){e("setIsScrolling",n)}},getters:{isScrolling:e=>e.isScrolling}});n["Z"]=r}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return e[o].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,a){if(!o){var i=1/0;for(f=0;f<e.length;f++){o=e[f][0],r=e[f][1],a=e[f][2];for(var c=!0,u=0;u<o.length;u++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[u])}))?o.splice(u--,1):(c=!1,a<i&&(i=a));if(c){e.splice(f--,1);var s=r();void 0!==s&&(n=s)}}return n}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[o,r,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{37:"86301d49",73:"ff0eb141",85:"48d14207",130:"fefba7c6",144:"212f3495",245:"ae09d78a",357:"0b437b51",457:"207a502e",481:"2fa9140e",488:"26928b76",495:"cbfa349c",708:"9adb986f",724:"4f29b1ee",748:"6a0f9e7c",754:"c34364c0",757:"bacabe46",786:"6bc210f2",798:"b39f15e0",824:"ad92bf22",899:"da09db23",966:"29205885",997:"9bb0e635"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{37:"f2e2b78c",73:"6b298b21",85:"ca2eac0f",130:"4a84eab4",144:"5ea03b5c",245:"a36fceed",357:"ae1244ad",457:"9c09aa16",481:"9f4982aa",495:"f246c641",708:"c11bdbc0",724:"13e23aa6",748:"001797eb",754:"68d6a345",757:"98666952",786:"eb21182c",798:"55071021",824:"158cdf27",899:"6fa66025",966:"6d8d2a4a",997:"23157183"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="company-page:";t.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var c,u;if(void 0!==a)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var d=s[f];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==n+a){c=d;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+a),c.src=o),e[o]=[r];var l=function(n,t){c.onerror=c.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,o,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(t){if(a.onerror=a.onload=null,"load"===t.type)o();else{var i=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=c,a.parentNode.removeChild(a),r(u)}};return a.onerror=a.onload=i,a.href=n,t?t.parentNode.insertBefore(a,t.nextSibling):document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===n))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===n)return r}},o=function(o){return new Promise((function(r,a){var i=t.miniCssF(o),c=t.p+i;if(n(i,c))return r();e(o,c,null,r,a)}))},r={143:0};t.f.miniCss=function(e,n){var t={37:1,73:1,85:1,130:1,144:1,245:1,357:1,457:1,481:1,495:1,708:1,724:1,748:1,754:1,757:1,786:1,798:1,824:1,899:1,966:1,997:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=a);var i=t.p+t.u(n),c=new Error,u=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;c.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,r[1](c)}};t.l(i,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,a,i=o[0],c=o[1],u=o[2],s=0;if(i.some((function(n){return 0!==e[n]}))){for(r in c)t.o(c,r)&&(t.m[r]=c[r]);if(u)var f=u(t)}for(n&&n(o);s<i.length;s++)a=i[s],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(f)},o=self["webpackChunkcompany_page"]=self["webpackChunkcompany_page"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(4275)}));o=t.O(o)})();
//# sourceMappingURL=app.f63a5989.js.map