(self["webpackChunkcompany_page"]=self["webpackChunkcompany_page"]||[]).push([[245,798,457],{9662:function(t,e,n){var r=n(614),o=n(6330),i=TypeError;t.exports=function(t){if(r(t))return t;throw i(o(t)+" is not a function")}},9670:function(t,e,n){var r=n(111),o=String,i=TypeError;t.exports=function(t){if(r(t))return t;throw i(o(t)+" is not an object")}},1318:function(t,e,n){var r=n(5656),o=n(1400),i=n(6244),a=function(t){return function(e,n,a){var l,u=r(e),c=i(u),s=o(a,c);if(t&&n!=n){while(c>s)if(l=u[s++],l!=l)return!0}else for(;c>s;s++)if((t||s in u)&&u[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},3658:function(t,e,n){"use strict";var r=n(9781),o=n(3157),i=TypeError,a=Object.getOwnPropertyDescriptor,l=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=l?function(t,e){if(o(t)&&!a(t,"length").writable)throw i("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},4326:function(t,e,n){var r=n(1702),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},9920:function(t,e,n){var r=n(2597),o=n(3887),i=n(1236),a=n(3070);t.exports=function(t,e,n){for(var l=o(e),u=a.f,c=i.f,s=0;s<l.length;s++){var f=l[s];r(t,f)||n&&r(n,f)||u(t,f,c(e,f))}}},8880:function(t,e,n){var r=n(9781),o=n(3070),i=n(9114);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,n){var r=n(614),o=n(3070),i=n(6339),a=n(3072);t.exports=function(t,e,n,l){l||(l={});var u=l.enumerable,c=void 0!==l.name?l.name:e;if(r(n)&&i(n,c,l),l.global)u?t[e]=n:a(e,n);else{try{l.unsafe?t[e]&&(u=!0):delete t[e]}catch(s){}u?t[e]=n:o.f(t,e,{value:n,enumerable:!1,configurable:!l.nonConfigurable,writable:!l.nonWritable})}return t}},3072:function(t,e,n){var r=n(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(t){var e="object"==typeof document&&document.all,n="undefined"==typeof e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:n}},317:function(t,e,n){var r=n(7854),o=n(111),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},7207:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},8113:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(t,e,n){var r,o,i=n(7854),a=n(8113),l=i.process,u=i.Deno,c=l&&l.versions||u&&u.version,s=c&&c.v8;s&&(r=s.split("."),o=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&a&&(r=a.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/),r&&(o=+r[1]))),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,n){var r=n(7854),o=n(1236).f,i=n(8880),a=n(8052),l=n(3072),u=n(9920),c=n(4705);t.exports=function(t,e){var n,s,f,p,d,v,m=t.target,g=t.global,w=t.stat;if(s=g?r:w?r[m]||l(m,{}):(r[m]||{}).prototype,s)for(f in e){if(d=e[f],t.dontCallGetSet?(v=o(s,f),p=v&&v.value):p=s[f],n=c(g?f:m+(w?".":"#")+f,t.forced),!n&&void 0!==p){if(typeof d==typeof p)continue;u(d,p)}(t.sham||p&&p.sham)&&i(d,"sham",!0),a(s,f,d,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(t,e,n){var r=n(9781),o=n(2597),i=Function.prototype,a=r&&Object.getOwnPropertyDescriptor,l=o(i,"name"),u=l&&"something"===function(){}.name,c=l&&(!r||r&&a(i,"name").configurable);t.exports={EXISTS:l,PROPER:u,CONFIGURABLE:c}},1702:function(t,e,n){var r=n(4374),o=Function.prototype,i=o.call,a=r&&o.bind.bind(i,i);t.exports=r?a:function(t){return function(){return i.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),o=n(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662),o=n(8554);t.exports=function(t,e){var n=t[e];return o(n)?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(1702),o=n(7908),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},3501:function(t){t.exports={}},4664:function(t,e,n){var r=n(9781),o=n(7293),i=n(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(1702),o=n(7293),i=n(4326),a=Object,l=r("".split);t.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?l(t,""):a(t)}:a},2788:function(t,e,n){var r=n(1702),o=n(614),i=n(5465),a=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return a(t)}),t.exports=i.inspectSource},9909:function(t,e,n){var r,o,i,a=n(4811),l=n(7854),u=n(111),c=n(8880),s=n(2597),f=n(5465),p=n(6200),d=n(3501),v="Object already initialized",m=l.TypeError,g=l.WeakMap,w=function(t){return i(t)?o(t):r(t,{})},b=function(t){return function(e){var n;if(!u(e)||(n=o(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return n}};if(a||f.state){var h=f.state||(f.state=new g);h.get=h.get,h.has=h.has,h.set=h.set,r=function(t,e){if(h.has(t))throw m(v);return e.facade=t,h.set(t,e),e},o=function(t){return h.get(t)||{}},i=function(t){return h.has(t)}}else{var y=p("state");d[y]=!0,r=function(t,e){if(s(t,y))throw m(v);return e.facade=t,c(t,y,e),e},o=function(t){return s(t,y)?t[y]:{}},i=function(t){return s(t,y)}}t.exports={set:r,get:o,has:i,enforce:w,getterFor:b}},3157:function(t,e,n){var r=n(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},614:function(t,e,n){var r=n(4154),o=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===o}:function(t){return"function"==typeof t}},4705:function(t,e,n){var r=n(7293),o=n(614),i=/#|\.prototype\./,a=function(t,e){var n=u[l(t)];return n==s||n!=c&&(o(e)?r(e):!!e)},l=a.normalize=function(t){return String(t).replace(i,".").toLowerCase()},u=a.data={},c=a.NATIVE="N",s=a.POLYFILL="P";t.exports=a},8554:function(t){t.exports=function(t){return null===t||void 0===t}},111:function(t,e,n){var r=n(614),o=n(4154),i=o.all;t.exports=o.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===i}:function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(5005),o=n(614),i=n(7976),a=n(3307),l=Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return o(e)&&i(e.prototype,l(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},6339:function(t,e,n){var r=n(1702),o=n(7293),i=n(614),a=n(2597),l=n(9781),u=n(6530).CONFIGURABLE,c=n(2788),s=n(9909),f=s.enforce,p=s.get,d=String,v=Object.defineProperty,m=r("".slice),g=r("".replace),w=r([].join),b=l&&!o((function(){return 8!==v((function(){}),"length",{value:8}).length})),h=String(String).split("String"),y=t.exports=function(t,e,n){"Symbol("===m(d(e),0,7)&&(e="["+g(d(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!a(t,"name")||u&&t.name!==e)&&(l?v(t,"name",{value:e,configurable:!0}):t.name=e),b&&n&&a(n,"arity")&&t.length!==n.arity&&v(t,"length",{value:n.arity});try{n&&a(n,"constructor")&&n.constructor?l&&v(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(o){}var r=f(t);return a(r,"source")||(r.source=w(h,"string"==typeof e?e:"")),t};Function.prototype.toString=y((function(){return i(this)&&p(this).source||c(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},3070:function(t,e,n){var r=n(9781),o=n(4664),i=n(3353),a=n(9670),l=n(4948),u=TypeError,c=Object.defineProperty,s=Object.getOwnPropertyDescriptor,f="enumerable",p="configurable",d="writable";e.f=r?i?function(t,e,n){if(a(t),e=l(e),a(n),"function"===typeof t&&"prototype"===e&&"value"in n&&d in n&&!n[d]){var r=s(t,e);r&&r[d]&&(t[e]=n.value,n={configurable:p in n?n[p]:r[p],enumerable:f in n?n[f]:r[f],writable:!1})}return c(t,e,n)}:c:function(t,e,n){if(a(t),e=l(e),a(n),o)try{return c(t,e,n)}catch(r){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),o=n(6916),i=n(5296),a=n(9114),l=n(5656),u=n(4948),c=n(2597),s=n(4664),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=l(t),e=u(e),s)try{return f(t,e)}catch(n){}if(c(t,e))return a(!o(i.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),o=n(748),i=o.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),o=n(2597),i=n(5656),a=n(1318).indexOf,l=n(3501),u=r([].push);t.exports=function(t,e){var n,r=i(t),c=0,s=[];for(n in r)!o(l,n)&&o(r,n)&&u(s,n);while(e.length>c)o(r,n=e[c++])&&(~a(s,n)||u(s,n));return s}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},2140:function(t,e,n){var r=n(6916),o=n(614),i=n(111),a=TypeError;t.exports=function(t,e){var n,l;if("string"===e&&o(n=t.toString)&&!i(l=r(n,t)))return l;if(o(n=t.valueOf)&&!i(l=r(n,t)))return l;if("string"!==e&&o(n=t.toString)&&!i(l=r(n,t)))return l;throw a("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),o=n(1702),i=n(8006),a=n(5181),l=n(9670),u=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(l(t)),n=a.f;return n?u(e,n(t)):e}},4488:function(t,e,n){var r=n(8554),o=TypeError;t.exports=function(t){if(r(t))throw o("Can't call method on "+t);return t}},6200:function(t,e,n){var r=n(2309),o=n(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,e,n){var r=n(7854),o=n(3072),i="__core-js_shared__",a=r[i]||o(i,{});t.exports=a},2309:function(t,e,n){var r=n(1913),o=n(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.29.0",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.29.0/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(t,e,n){var r=n(7392),o=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(t,e,n){var r=n(9303),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},5656:function(t,e,n){var r=n(8361),o=n(4488);t.exports=function(t){return r(o(t))}},9303:function(t,e,n){var r=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},7466:function(t,e,n){var r=n(9303),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488),o=Object;t.exports=function(t){return o(r(t))}},7593:function(t,e,n){var r=n(6916),o=n(111),i=n(2190),a=n(8173),l=n(2140),u=n(5112),c=TypeError,s=u("toPrimitive");t.exports=function(t,e){if(!o(t)||i(t))return t;var n,u=a(t,s);if(u){if(void 0===e&&(e="default"),n=r(u,t,e),!o(n)||i(n))return n;throw c("Can't convert object to primitive value")}return void 0===e&&(e="number"),l(t,e)}},4948:function(t,e,n){var r=n(7593),o=n(2190);t.exports=function(t){var e=r(t,"string");return o(e)?e:e+""}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){var r=n(1702),o=0,i=Math.random(),a=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++o+i,36)}},3307:function(t,e,n){var r=n(6293);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),o=n(7293);t.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(t,e,n){var r=n(7854),o=n(614),i=r.WeakMap;t.exports=o(i)&&/native code/.test(String(i))},5112:function(t,e,n){var r=n(7854),o=n(2309),i=n(2597),a=n(9711),l=n(6293),u=n(3307),c=r.Symbol,s=o("wks"),f=u?c["for"]||c:c&&c.withoutSetter||a;t.exports=function(t){return i(s,t)||(s[t]=l&&i(c,t)?c[t]:f("Symbol."+t)),s[t]}},7658:function(t,e,n){"use strict";var r=n(2109),o=n(7908),i=n(6244),a=n(3658),l=n(7207),u=n(7293),c=u((function(){return 4294967297!==[].push.call({length:4294967296},1)})),s=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},f=c||!s();r({target:"Array",proto:!0,arity:1,forced:f},{push:function(t){var e=o(this),n=i(e),r=arguments.length;l(n+r);for(var u=0;u<r;u++)e[n]=arguments[u],n++;return a(e,n),n}})},457:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return T}});var r=n(6252),o=n(3577),i=n(7695);const a=t=>((0,r.dD)("data-v-0b3e6c32"),t=t(),(0,r.Cn)(),t),l={class:"footer"},u={class:"logo_con"},c=a((()=>(0,r._)("img",{src:i,alt:"",class:"footer_logo"},null,-1))),s={class:"footer_info"},f=a((()=>(0,r._)("p",null,"부산광역시 사상구 백양대로684 5F",-1))),p=a((()=>(0,r._)("p",null," TEL 051-301-5908 | FAX 3030-3448-0523 | E-mail: gameinscokr@naver.com ",-1))),d=a((()=>(0,r._)("p",null," (주)게임인스 | 대표이사: 김웅겸 | 사업자등록번호: 362-88-00435 | 통신판매업 등록번호: 1649-3196-3663-0809 ",-1))),v={class:"small_btn_con",style:{display:"none"}},m=a((()=>(0,r._)("hr",{style:{width:"90vw",margin:"12px 0px"}},null,-1))),g={class:"small_btn",style:{"justify-content":"center","align-items":"center",display:"flex",width:"90vw"}},w={style:{display:"flex",padding:"12px 0px"}},b={href:""},h=["src"],y={href:""},_=["src"],x={href:""},k=["src"],W=a((()=>(0,r._)("p",{class:"footer_info_reserve"}," copyright 2022 GAMEINS All right reserved ",-1))),S={class:"contact_btn"},E={class:"btn"},j=["href"],O=["src"],D=["src"];function P(t,e,n,i,a,P){const C=(0,r.up)("router-link"),L=(0,r.up)("v-col"),I=(0,r.up)("v-row"),T=(0,r.up)("v-spacer");return(0,r.wg)(),(0,r.iD)("div",l,[(0,r.Wm)(I,{class:"footer_con"},{default:(0,r.w5)((()=>[(0,r.Wm)(L,{cols:"9"},{default:(0,r.w5)((()=>[(0,r._)("div",u,[(0,r.Wm)(C,{to:"/"},{default:(0,r.w5)((()=>[c])),_:1})]),(0,r._)("div",s,[f,p,d,(0,r._)("div",v,[m,(0,r._)("div",g,[(0,r.Wm)(I,null,{default:(0,r.w5)((()=>[(0,r.Wm)(L,{cols:"3",style:{"justify-content":"center",display:"flex"}},{default:(0,r.w5)((()=>[(0,r.Wm)(C,{to:"/contact"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)(a.btn[2].text),1)])),_:1})])),_:1}),(0,r.Wm)(L,{cols:"3",style:{"justify-content":"center",display:"flex"}},{default:(0,r.w5)((()=>[(0,r.Wm)(C,{to:"/news"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)(a.btn[3].text),1)])),_:1})])),_:1}),(0,r.Wm)(L,{cols:"3",style:{"justify-content":"center",display:"flex"}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)(a.btn[4].text),1)])),_:1}),(0,r.Wm)(L,{cols:"3",style:{"z-index":"1","justify-content":"center",display:"flex"}},{default:(0,r.w5)((()=>[(0,r.Wm)(C,{to:"/Intro"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)(a.btn[5].text),1)])),_:1})])),_:1})])),_:1})]),(0,r._)("div",w,[(0,r._)("a",b,[(0,r._)("img",{src:a.btn[0].logo_image,style:{"margin-right":"16px"}},null,8,h)]),(0,r._)("a",y,[(0,r._)("img",{src:a.btn[1].logo_image,style:{"margin-right":"16px"}},null,8,_)]),(0,r._)("a",x,[(0,r._)("img",{src:a.btn[2].logo_image,style:{"margin-right":"16px"}},null,8,k)])])]),W])])),_:1}),(0,r.Wm)(T),(0,r.Wm)(L,{cols:"3",class:"contact_btn_con"},{default:(0,r.w5)((()=>[(0,r._)("div",S,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.btn,((t,e)=>((0,r.wg)(),(0,r.iD)("div",{key:e},[(0,r._)("div",E,["INSTAGRAM"===t.text||"BLOG"===t.text?((0,r.wg)(),(0,r.iD)("a",{key:0,href:t.link},[(0,r.Uk)((0,o.zw)(t.text)+" ",1),(0,r._)("img",{src:t.logo_image},null,8,O)],8,j)):((0,r.wg)(),(0,r.j4)(C,{key:1,to:t.link},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)(t.text)+" ",1),(0,r._)("img",{src:t.logo_image},null,8,D)])),_:2},1032,["to"]))])])))),128))])])),_:1})])),_:1})])}var C={name:"Footer",data(){return{btn:[{link:"https://blog.naver.com/gameinscokr",text:"BLOG",logo_image:n(8665)},{link:"https://www.instagram.com/tikintaka_official",text:"INSTAGRAM",logo_image:n(7093)},{link:"/contact",text:"문의&의뢰",logo_image:n(8943)},{link:"/news",text:"회사소식",logo_image:n(1136)},{link:"/",text:"개인정보처리방침",logo_image:n(3544)},{link:"/Intro",text:"오시는길",logo_image:n(1308)}]}},mounted(){const t=document.querySelector(".small_btn_con"),e=document.querySelector(".contact_btn_con");window.addEventListener("resize",(()=>{window.innerWidth<640?(t.style.display="block",e.style.display="none"):(t.style.display="none",e.style.display="block")}))}},L=n(3744);const I=(0,L.Z)(C,[["render",P],["__scopeId","data-v-0b3e6c32"]]);var T=I},7798:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var r=n(6252),o=n(3577);const i={class:"menu_section"},a={class:"menu_con"},l={class:"icon"};function u(t,e,n,u,c,s){const f=(0,r.up)("v-list-item-title"),p=(0,r.up)("v-list-item"),d=(0,r.up)("v-icon"),v=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("section",i,[(0,r._)("div",a,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(c.menus,((t,e)=>((0,r.wg)(),(0,r.iD)("div",{key:e,class:"list_con"},[(0,r.Wm)(v,{to:t.value},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{value:e},{default:(0,r.w5)((()=>[(0,r.Wm)(f,{class:"list"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)(t.title),1)])),_:2},1024)])),_:2},1032,["value"]),(0,r._)("div",l,[(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Uk)("mdi-arrow-up-bold-box")])),_:1})])])),_:2},1032,["to"])])))),128))])])}var c={name:"Menu",components:{},data(){return{menus:[{title:"회사소개",value:"/Intro"},{title:"회사소식",value:"/News"},{title:"서비스",value:"/Service"},{title:"문의&의뢰",value:"/Contact"},{title:"채용",value:"/Employ"}]}}},s=n(3744);const f=(0,s.Z)(c,[["render",u],["__scopeId","data-v-4d1ad64c"]]);var p=f},3921:function(t,e,n){"use strict";n.d(e,{Z:function(){return w}});var r=n(6252),o=n(3577),i=n(1730);const a=t=>((0,r.dD)("data-v-315411d4"),t=t(),(0,r.Cn)(),t),l={class:"subNav"},u=a((()=>(0,r._)("img",{src:i,class:"blogo"},null,-1))),c={class:"menu_list"},s=a((()=>(0,r._)("div",{class:"bar_con"},[(0,r._)("span",{class:"bar1"}),(0,r._)("span",{class:"bar2"}),(0,r._)("span",{class:"bar3"})],-1))),f=[s];function p(t,e,n,i,a,s){const p=(0,r.up)("router-link"),d=(0,r.up)("v-col"),v=(0,r.up)("v-spacer"),m=(0,r.up)("v-list-item-title"),g=(0,r.up)("v-list-item"),w=(0,r.up)("v-row"),b=(0,r.up)("Menu");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",l,[(0,r.Wm)(w,{class:"nav_con"},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{class:"nav_logo",cols:"4"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{to:"/"},{default:(0,r.w5)((()=>[u])),_:1})])),_:1}),(0,r.Wm)(v),(0,r.Wm)(d,{cols:"8",class:"menu_con"},{default:(0,r.w5)((()=>[(0,r._)("div",c,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.menus,((t,e)=>((0,r.wg)(),(0,r.j4)(p,{key:e,to:t.value},{default:(0,r.w5)((()=>[(0,r.Wm)(g,{value:e},{default:(0,r.w5)((()=>[(0,r.Wm)(m,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)(t.title),1)])),_:2},1024)])),_:2},1032,["value"])])),_:2},1032,["to"])))),128))])])),_:1}),(0,r.Wm)(d,{cols:"8",class:"small_nav"},{default:(0,r.w5)((()=>[(0,r._)("div",{class:"ham",ref:"hamElement",onClick:e[0]||(e[0]=(...t)=>s.stopScrolling&&s.stopScrolling(...t))},f,512)])),_:1})])),_:1})]),t.menu_state?((0,r.wg)(),(0,r.j4)(b,{key:0})):(0,r.kq)("",!0)])}var d=n(7798),v={name:"SubNav",components:{Menu:d["default"]},data:()=>({menu_state:!1,scrollLock:!1,menus:[{title:"회사소개",value:"/Intro"},{title:"회사소식",value:"/News"},{title:"서비스",value:"/Service"},{title:"문의&의뢰",value:"/Contact"},{title:"채용",value:"/Employ"}]}),mounted(){this.$nextTick((()=>{const t=this.$refs.hamElement;t.addEventListener("click",(function(){this.classList.toggle("active")}))}))},beforeUnmount(){this.removeStopEvent()},methods:{stopScrolling(){this.scrollLock=!this.scrollLock,this.menu_state=!this.menu_state,this.scrollLock?(window.addEventListener("wheel",this.stopEvent,{passive:!1}),window.addEventListener("touchmove",this.stopEvent,{passive:!1})):(window.removeEventListener("wheel",this.stopEvent),window.removeEventListener("touchmove",this.stopEvent))},stopEvent(t){t.preventDefault(),t.stopPropagation()},removeStopEvent(){this.scrollLock&&(window.removeEventListener("wheel",this.stopEvent),window.removeEventListener("touchmove",this.stopEvent))}}},m=n(3744);const g=(0,m.Z)(v,[["render",p],["__scopeId","data-v-315411d4"]]);var w=g},9245:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return x}});var r=n(6252);function o(t,e,n,o,i,a){const l=(0,r.up)("HeaderNav"),u=(0,r.up)("Contact"),c=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(l),(0,r.Wm)(u),(0,r.Wm)(c)],64)}var i=n(3921),a=n(3577);const l=t=>((0,r.dD)("data-v-2bbabc88"),t=t(),(0,r.Cn)(),t),u={class:"contact_section"},c=l((()=>(0,r._)("div",{class:"back_img"},[(0,r._)("span",{class:"title"},"웹사이트 제작 요청")],-1))),s={class:"form_con"},f=(0,r.uE)('<div class="form_head" data-v-2bbabc88><div class="selected" data-v-2bbabc88><span class="form" data-v-2bbabc88>제작 형태</span><span class="type" data-v-2bbabc88>제작 타입</span><span class="cost" data-v-2bbabc88>예상 비용</span></div><span class="info" data-v-2bbabc88>기본 정보</span></div>',1),p={class:"flex-grow-1 text-center"},d={class:"flex-grow-1 text-center"};function v(t,e,n,o,i,l){const v=(0,r.up)("v-btn"),m=(0,r.up)("v-item"),g=(0,r.up)("v-col"),w=(0,r.up)("v-row"),b=(0,r.up)("v-item-group"),h=(0,r.up)("v-select"),y=(0,r.up)("v-text-field"),_=(0,r.up)("v-file-input"),x=(0,r.up)("v-img"),k=(0,r.up)("v-textarea"),W=(0,r.up)("v-checkbox"),S=(0,r.up)("v-container"),E=(0,r.up)("v-form"),j=(0,r.up)("base-card");return(0,r.wg)(),(0,r.iD)("section",u,[c,(0,r._)("div",s,[f,(0,r.Wm)(j,null,{default:(0,r.w5)((()=>[(0,r.Wm)(E,{class:"info_form"},{default:(0,r.w5)((()=>[(0,r.Wm)(S,null,{default:(0,r.w5)((()=>[(0,r.Wm)(b,{"selected-class":"bg-primary"},{default:(0,r.w5)((()=>[(0,r.Wm)(w,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.develop_form,((t,e)=>((0,r.wg)(),(0,r.j4)(g,{key:e,cols:"12",md:"3"},{default:(0,r.w5)((()=>[(0,r.Wm)(m,null,{default:(0,r.w5)((({selectedClass:e,toggle:n})=>[(0,r.Wm)(v,{class:(0,a.C_)(["d-flex align-center",e]),dark:"",height:"50",width:"100",onClick:n},{default:(0,r.w5)((()=>[(0,r._)("div",p,(0,a.zw)(t),1)])),_:2},1032,["class","onClick"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),(0,r.Wm)(b,{multiple:"","selected-class":"bg-primary"},{default:(0,r.w5)((()=>[(0,r.Wm)(w,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.type,((t,e)=>((0,r.wg)(),(0,r.j4)(g,{key:e,cols:"12",md:"3"},{default:(0,r.w5)((()=>[(0,r.Wm)(m,null,{default:(0,r.w5)((({selectedClass:e,toggle:n})=>[(0,r.Wm)(v,{class:(0,a.C_)(["d-flex align-center",e]),dark:"",height:"50",width:"100",onClick:n},{default:(0,r.w5)((()=>[(0,r._)("div",d,(0,a.zw)(t),1)])),_:2},1032,["class","onClick"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),(0,r.Wm)(b,{"selected-class":"bg-primary"},{default:(0,r.w5)((()=>[(0,r.Wm)(w,null,{default:(0,r.w5)((()=>[(0,r.Wm)(g,{cols:"12",md:"5"},{default:(0,r.w5)((()=>[(0,r.Wm)(h,{label:"비용 선택",items:t.cost,variant:"solo"},null,8,["items"])])),_:1})])),_:1})])),_:1}),(0,r.Wm)(w,null,{default:(0,r.w5)((()=>[(0,r.Wm)(g,{cols:"12"},{default:(0,r.w5)((()=>[(0,r.Wm)(y,{variant:"underlined",modelValue:t.company,"onUpdate:modelValue":e[0]||(e[0]=e=>t.company=e),label:"회사명",hint:"회사명을 입력해 주세요",required:""},null,8,["modelValue"])])),_:1}),(0,r.Wm)(g,{cols:"12"},{default:(0,r.w5)((()=>[(0,r.Wm)(y,{variant:"underlined",modelValue:t.manager,"onUpdate:modelValue":e[1]||(e[1]=e=>t.manager=e),label:"담당자명",hint:"담당자명을 입력해 주세요",required:""},null,8,["modelValue"])])),_:1}),(0,r.Wm)(g,{cols:"12"},{default:(0,r.w5)((()=>[(0,r.Wm)(y,{variant:"underlined",modelValue:t.phone_num,"onUpdate:modelValue":e[2]||(e[2]=e=>t.phone_num=e),label:"휴대전화",hint:"휴대전화 번호를 입력해 주세요",required:""},null,8,["modelValue"])])),_:1})])),_:1}),(0,r.Wm)(w,null,{default:(0,r.w5)((()=>[(0,r.Wm)(g,{cols:"12"},{default:(0,r.w5)((()=>[(0,r.Wm)(_,{variant:"underlined",modelValue:t.images,"onUpdate:modelValue":e[3]||(e[3]=e=>t.images=e),multiple:!0,label:"이미지를 넣어주세요",accept:"image/*",onChange:l.preview},null,8,["modelValue","onChange"])])),_:1})])),_:1}),(0,r.Wm)(w,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.imagePreviews,((t,e)=>((0,r.wg)(),(0,r.j4)(g,{variant:"underlined",key:e,cols:"4"},{default:(0,r.w5)((()=>[(0,r.Wm)(x,{src:t,width:"100%"},null,8,["src"])])),_:2},1024)))),128))])),_:1}),(0,r.Wm)(w,null,{default:(0,r.w5)((()=>[(0,r.Wm)(g,{cols:"12"},{default:(0,r.w5)((()=>[(0,r.Wm)(k,{variant:"outlined",modelValue:t.email,"onUpdate:modelValue":e[4]||(e[4]=e=>t.email=e),label:"프로젝트에 대한 자세한 설명을 적어주세요"},null,8,["modelValue"])])),_:1})])),_:1}),(0,r.Wm)(W,{modelValue:t.checkbox1,"onUpdate:modelValue":e[5]||(e[5]=e=>t.checkbox1=e),label:"개인정보 수집 및 이용약관에 동의합니다.(필수)"},null,8,["modelValue"])])),_:1})])),_:1}),(0,r.Wm)(v,{class:"d-flex bg-primary",style:{margin:"auto",width:"240px",height:"60px"}},{default:(0,r.w5)((()=>[(0,r.Uk)("문의하기")])),_:1})])),_:1})])])}n(7658);var m={components:{},data:()=>({selectedDate:null,valid:!1,images:[],imagePreviews:[],company:"",manager:"",phone_num:"",email:"",develop_form:["신규제작","리뉴얼"],type:["반응형웹","PC웹","모바일웹","기타"],cost:["500만원 이하","500만원 이상"],period:[],checkbox1:!1}),methods:{preview(){this.imagePreviews=[];for(let t=0;t<this.images.length;t++){let e=new FileReader;e.readAsDataURL(this.images[t]),e.onloadend=()=>{this.imagePreviews.push(e.result)}}}}},g=n(3744);const w=(0,g.Z)(m,[["render",v],["__scopeId","data-v-2bbabc88"]]);var b=w,h=n(457),y={components:{HeaderNav:i.Z,Contact:b,Footer:h["default"]}};const _=(0,g.Z)(y,[["render",o]]);var x=_},8665:function(t,e,n){"use strict";t.exports=n.p+"img/blog.912c515c.svg"},1136:function(t,e,n){"use strict";t.exports=n.p+"img/certification.170cc81d.svg"},7093:function(t,e,n){"use strict";t.exports=n.p+"img/insta.0892f4d8.svg"},1308:function(t,e,n){"use strict";t.exports=n.p+"img/locate.875323f8.svg"},8943:function(t,e,n){"use strict";t.exports=n.p+"img/message.0018a4b8.svg"},3544:function(t,e,n){"use strict";t.exports=n.p+"img/personal.1dc63998.svg"},1730:function(t,e,n){"use strict";t.exports=n.p+"img/scrollblogo.b2d0337b.svg"},7695:function(t,e,n){"use strict";t.exports=n.p+"img/whitelogo.a0039019.svg"}}]);
//# sourceMappingURL=245.b0e26b06.js.map