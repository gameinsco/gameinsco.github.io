(self["webpackChunkcompany_page"]=self["webpackChunkcompany_page"]||[]).push([[738,656],{9662:function(t,e,n){var r=n(614),o=n(6330),a=TypeError;t.exports=function(t){if(r(t))return t;throw a(o(t)+" is not a function")}},9670:function(t,e,n){var r=n(111),o=String,a=TypeError;t.exports=function(t){if(r(t))return t;throw a(o(t)+" is not an object")}},1318:function(t,e,n){var r=n(6164),o=n(1400),a=n(6244),u=function(t){return function(e,n,u){var i,c=r(e),l=a(c),s=o(u,l);if(t&&n!=n){while(l>s)if(i=c[s++],i!=i)return!0}else for(;l>s;s++)if((t||s in c)&&c[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},3658:function(t,e,n){"use strict";var r=n(9781),o=n(3157),a=TypeError,u=Object.getOwnPropertyDescriptor,i=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=i?function(t,e){if(o(t)&&!u(t,"length").writable)throw a("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},4326:function(t,e,n){var r=n(1702),o=r({}.toString),a=r("".slice);t.exports=function(t){return a(o(t),8,-1)}},9920:function(t,e,n){var r=n(2597),o=n(3887),a=n(1236),u=n(3070);t.exports=function(t,e,n){for(var i=o(e),c=u.f,l=a.f,s=0;s<i.length;s++){var f=i[s];r(t,f)||n&&r(n,f)||c(t,f,l(e,f))}}},8880:function(t,e,n){var r=n(9781),o=n(3070),a=n(9114);t.exports=r?function(t,e,n){return o.f(t,e,a(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,n){var r=n(614),o=n(3070),a=n(6339),u=n(3072);t.exports=function(t,e,n,i){i||(i={});var c=i.enumerable,l=void 0!==i.name?i.name:e;if(r(n)&&a(n,l,i),i.global)c?t[e]=n:u(e,n);else{try{i.unsafe?t[e]&&(c=!0):delete t[e]}catch(s){}c?t[e]=n:o.f(t,e,{value:n,enumerable:!1,configurable:!i.nonConfigurable,writable:!i.nonWritable})}return t}},3072:function(t,e,n){var r=n(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(t){var e="object"==typeof document&&document.all,n="undefined"==typeof e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:n}},317:function(t,e,n){var r=n(7854),o=n(111),a=r.document,u=o(a)&&o(a.createElement);t.exports=function(t){return u?a.createElement(t):{}}},7207:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},8113:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(t,e,n){var r,o,a=n(7854),u=n(8113),i=a.process,c=a.Deno,l=i&&i.versions||c&&c.version,s=l&&l.v8;s&&(r=s.split("."),o=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&u&&(r=u.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=u.match(/Chrome\/(\d+)/),r&&(o=+r[1]))),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,n){var r=n(7854),o=n(1236).f,a=n(8880),u=n(8052),i=n(3072),c=n(9920),l=n(4705);t.exports=function(t,e){var n,s,f,p,v,d,m=t.target,g=t.global,b=t.stat;if(s=g?r:b?r[m]||i(m,{}):(r[m]||{}).prototype,s)for(f in e){if(v=e[f],t.dontCallGetSet?(d=o(s,f),p=d&&d.value):p=s[f],n=l(g?f:m+(b?".":"#")+f,t.forced),!n&&void 0!==p){if(typeof v==typeof p)continue;c(v,p)}(t.sham||p&&p.sham)&&a(v,"sham",!0),u(s,f,v,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(t,e,n){var r=n(9781),o=n(2597),a=Function.prototype,u=r&&Object.getOwnPropertyDescriptor,i=o(a,"name"),c=i&&"something"===function(){}.name,l=i&&(!r||r&&u(a,"name").configurable);t.exports={EXISTS:i,PROPER:c,CONFIGURABLE:l}},1702:function(t,e,n){var r=n(4374),o=Function.prototype,a=o.call,u=r&&o.bind.bind(a,a);t.exports=r?u:function(t){return function(){return a.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),o=n(614),a=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?a(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662),o=n(8554);t.exports=function(t,e){var n=t[e];return o(n)?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(1702),o=n(7908),a=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return a(o(t),e)}},3501:function(t){t.exports={}},4664:function(t,e,n){var r=n(9781),o=n(7293),a=n(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(1702),o=n(7293),a=n(4326),u=Object,i=r("".split);t.exports=o((function(){return!u("z").propertyIsEnumerable(0)}))?function(t){return"String"==a(t)?i(t,""):u(t)}:u},2788:function(t,e,n){var r=n(1702),o=n(614),a=n(5465),u=r(Function.toString);o(a.inspectSource)||(a.inspectSource=function(t){return u(t)}),t.exports=a.inspectSource},9909:function(t,e,n){var r,o,a,u=n(4811),i=n(7854),c=n(111),l=n(8880),s=n(2597),f=n(5465),p=n(6200),v=n(3501),d="Object already initialized",m=i.TypeError,g=i.WeakMap,b=function(t){return a(t)?o(t):r(t,{})},h=function(t){return function(e){var n;if(!c(e)||(n=o(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return n}};if(u||f.state){var w=f.state||(f.state=new g);w.get=w.get,w.has=w.has,w.set=w.set,r=function(t,e){if(w.has(t))throw m(d);return e.facade=t,w.set(t,e),e},o=function(t){return w.get(t)||{}},a=function(t){return w.has(t)}}else{var y=p("state");v[y]=!0,r=function(t,e){if(s(t,y))throw m(d);return e.facade=t,l(t,y,e),e},o=function(t){return s(t,y)?t[y]:{}},a=function(t){return s(t,y)}}t.exports={set:r,get:o,has:a,enforce:b,getterFor:h}},3157:function(t,e,n){var r=n(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},614:function(t,e,n){var r=n(4154),o=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===o}:function(t){return"function"==typeof t}},4705:function(t,e,n){var r=n(7293),o=n(614),a=/#|\.prototype\./,u=function(t,e){var n=c[i(t)];return n==s||n!=l&&(o(e)?r(e):!!e)},i=u.normalize=function(t){return String(t).replace(a,".").toLowerCase()},c=u.data={},l=u.NATIVE="N",s=u.POLYFILL="P";t.exports=u},8554:function(t){t.exports=function(t){return null===t||void 0===t}},111:function(t,e,n){var r=n(614),o=n(4154),a=o.all;t.exports=o.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===a}:function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(5005),o=n(614),a=n(7976),u=n(3307),i=Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return o(e)&&a(e.prototype,i(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},6339:function(t,e,n){var r=n(1702),o=n(7293),a=n(614),u=n(2597),i=n(9781),c=n(6530).CONFIGURABLE,l=n(2788),s=n(9909),f=s.enforce,p=s.get,v=String,d=Object.defineProperty,m=r("".slice),g=r("".replace),b=r([].join),h=i&&!o((function(){return 8!==d((function(){}),"length",{value:8}).length})),w=String(String).split("String"),y=t.exports=function(t,e,n){"Symbol("===m(v(e),0,7)&&(e="["+g(v(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!u(t,"name")||c&&t.name!==e)&&(i?d(t,"name",{value:e,configurable:!0}):t.name=e),h&&n&&u(n,"arity")&&t.length!==n.arity&&d(t,"length",{value:n.arity});try{n&&u(n,"constructor")&&n.constructor?i&&d(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(o){}var r=f(t);return u(r,"source")||(r.source=b(w,"string"==typeof e?e:"")),t};Function.prototype.toString=y((function(){return a(this)&&p(this).source||l(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},3070:function(t,e,n){var r=n(9781),o=n(4664),a=n(3353),u=n(9670),i=n(4948),c=TypeError,l=Object.defineProperty,s=Object.getOwnPropertyDescriptor,f="enumerable",p="configurable",v="writable";e.f=r?a?function(t,e,n){if(u(t),e=i(e),u(n),"function"===typeof t&&"prototype"===e&&"value"in n&&v in n&&!n[v]){var r=s(t,e);r&&r[v]&&(t[e]=n.value,n={configurable:p in n?n[p]:r[p],enumerable:f in n?n[f]:r[f],writable:!1})}return l(t,e,n)}:l:function(t,e,n){if(u(t),e=i(e),u(n),o)try{return l(t,e,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),o=n(6916),a=n(5296),u=n(9114),i=n(6164),c=n(4948),l=n(2597),s=n(4664),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=i(t),e=c(e),s)try{return f(t,e)}catch(n){}if(l(t,e))return u(!o(a.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),o=n(748),a=o.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,a)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),o=n(2597),a=n(6164),u=n(1318).indexOf,i=n(3501),c=r([].push);t.exports=function(t,e){var n,r=a(t),l=0,s=[];for(n in r)!o(i,n)&&o(r,n)&&c(s,n);while(e.length>l)o(r,n=e[l++])&&(~u(s,n)||c(s,n));return s}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},2140:function(t,e,n){var r=n(6916),o=n(614),a=n(111),u=TypeError;t.exports=function(t,e){var n,i;if("string"===e&&o(n=t.toString)&&!a(i=r(n,t)))return i;if(o(n=t.valueOf)&&!a(i=r(n,t)))return i;if("string"!==e&&o(n=t.toString)&&!a(i=r(n,t)))return i;throw u("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),o=n(1702),a=n(8006),u=n(5181),i=n(9670),c=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=a.f(i(t)),n=u.f;return n?c(e,n(t)):e}},4488:function(t,e,n){var r=n(8554),o=TypeError;t.exports=function(t){if(r(t))throw o("Can't call method on "+t);return t}},6200:function(t,e,n){var r=n(2309),o=n(9711),a=r("keys");t.exports=function(t){return a[t]||(a[t]=o(t))}},5465:function(t,e,n){var r=n(7854),o=n(3072),a="__core-js_shared__",u=r[a]||o(a,{});t.exports=u},2309:function(t,e,n){var r=n(1913),o=n(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.29.0",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.29.0/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(t,e,n){var r=n(7392),o=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(t,e,n){var r=n(9303),o=Math.max,a=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):a(n,e)}},6164:function(t,e,n){var r=n(8361),o=n(4488);t.exports=function(t){return r(o(t))}},9303:function(t,e,n){var r=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},7466:function(t,e,n){var r=n(9303),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488),o=Object;t.exports=function(t){return o(r(t))}},7593:function(t,e,n){var r=n(6916),o=n(111),a=n(2190),u=n(8173),i=n(2140),c=n(5112),l=TypeError,s=c("toPrimitive");t.exports=function(t,e){if(!o(t)||a(t))return t;var n,c=u(t,s);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!o(n)||a(n))return n;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),i(t,e)}},4948:function(t,e,n){var r=n(7593),o=n(2190);t.exports=function(t){var e=r(t,"string");return o(e)?e:e+""}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){var r=n(1702),o=0,a=Math.random(),u=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+a,36)}},3307:function(t,e,n){var r=n(6293);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),o=n(7293);t.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(t,e,n){var r=n(7854),o=n(614),a=r.WeakMap;t.exports=o(a)&&/native code/.test(String(a))},5112:function(t,e,n){var r=n(7854),o=n(2309),a=n(2597),u=n(9711),i=n(6293),c=n(3307),l=r.Symbol,s=o("wks"),f=c?l["for"]||l:l&&l.withoutSetter||u;t.exports=function(t){return a(s,t)||(s[t]=i&&a(l,t)?l[t]:f("Symbol."+t)),s[t]}},7658:function(t,e,n){"use strict";var r=n(2109),o=n(7908),a=n(6244),u=n(3658),i=n(7207),c=n(7293),l=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),s=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},f=l||!s();r({target:"Array",proto:!0,arity:1,forced:f},{push:function(t){var e=o(this),n=a(e),r=arguments.length;i(n+r);for(var c=0;c<r;c++)e[n]=arguments[c],n++;return u(e,n),n}})},5656:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return U}});var r=n(6252),o=n(1730),a=n(8714),u=n(7093),i=n(8943),c=n(1136),l=n(3544),s=n(1308);const f=t=>((0,r.dD)("data-v-0a617213"),t=t(),(0,r.Cn)(),t),p={class:"footer"},v=f((()=>(0,r._)("div",{class:"logo_con"},[(0,r._)("img",{src:o,alt:"",style:{cursor:"pointer",width:"150px",height:"36px"}})],-1))),d=f((()=>(0,r._)("div",{class:"footer_info"},[(0,r._)("p",null,"부산광역시 사상구 백양대로684 5F"),(0,r._)("p",null," TEL 051-301-5908 | FAX 3030-3448-0523 | E-mail: gameinscokr@naver.com "),(0,r._)("p",null," (주)게임인스 | 대표이사: 김웅겸 | 사업자등록번호: 362-88-00435 | 통신판매업 등록번호: 1649-3196-3663-0809 "),(0,r._)("br"),(0,r._)("br"),(0,r._)("p",null,"copyright 2022 GAMEINS All right reserved")],-1))),m={class:"contact_btn"},g={href:"https://blog.naver.com/gameinscokr"},b={class:"btn"},h=f((()=>(0,r._)("span",null,"BLOG",-1))),w=f((()=>(0,r._)("img",{src:a},null,-1))),y={href:"https://www.instagram.com/tikintaka_official/"},_={class:"btn"},x=f((()=>(0,r._)("span",null,"INSTAGRAM",-1))),W=f((()=>(0,r._)("img",{src:u},null,-1))),S={class:"btn"},O=f((()=>(0,r._)("span",null,"문의& 의뢰",-1))),j=f((()=>(0,r._)("img",{src:i},null,-1))),k={class:"btn"},P=f((()=>(0,r._)("span",null,"인증기업",-1))),C=f((()=>(0,r._)("img",{src:c},null,-1))),E={class:"btn"},D=f((()=>(0,r._)("span",null,"개인정보처리방침",-1))),I=f((()=>(0,r._)("img",{src:l},null,-1))),T={class:"btn"},V=f((()=>(0,r._)("span",null,"오시는길",-1))),A=f((()=>(0,r._)("img",{src:s},null,-1)));function M(t,e,n,o,a,u){const i=(0,r.up)("v-col"),c=(0,r.up)("v-spacer"),l=(0,r.up)("router-link"),s=(0,r.up)("v-row");return(0,r.wg)(),(0,r.iD)("div",p,[(0,r.Wm)(s,{class:"footer_con"},{default:(0,r.w5)((()=>[(0,r.Wm)(i,{cols:"9"},{default:(0,r.w5)((()=>[v,d])),_:1}),(0,r.Wm)(c),(0,r.Wm)(i,{cols:"3"},{default:(0,r.w5)((()=>[(0,r._)("div",m,[(0,r._)("a",g,[(0,r._)("div",b,[h,(0,r.Wm)(c),(0,r.Wm)(i,{class:"logo",cols:"2"},{default:(0,r.w5)((()=>[w])),_:1})])]),(0,r._)("a",y,[(0,r._)("div",_,[x,(0,r.Wm)(c),(0,r.Wm)(i,{class:"logo",cols:"2"},{default:(0,r.w5)((()=>[W])),_:1})])]),(0,r.Wm)(l,{to:"/Contact"},{default:(0,r.w5)((()=>[(0,r._)("div",S,[O,(0,r.Wm)(c),(0,r.Wm)(i,{class:"logo",cols:"2"},{default:(0,r.w5)((()=>[j])),_:1})])])),_:1}),(0,r.Wm)(l,{to:"/news"},{default:(0,r.w5)((()=>[(0,r._)("div",k,[P,(0,r.Wm)(c),(0,r.Wm)(i,{class:"logo",cols:"2"},{default:(0,r.w5)((()=>[C])),_:1})])])),_:1}),(0,r._)("div",E,[D,(0,r.Wm)(i,{class:"logo",cols:"2"},{default:(0,r.w5)((()=>[I])),_:1})]),(0,r.Wm)(l,{to:"/Intro"},{default:(0,r.w5)((()=>[(0,r._)("div",T,[V,(0,r.Wm)(c),(0,r.Wm)(i,{class:"logo",cols:"2"},{default:(0,r.w5)((()=>[A])),_:1})])])),_:1})])])),_:1})])),_:1})])}var F={name:"Footer"},L=n(3744);const N=(0,L.Z)(F,[["render",M],["__scopeId","data-v-0a617213"]]);var U=N},8982:function(t,e,n){"use strict";n.d(e,{Z:function(){return d}});var r=n(6252),o=n(3577),a=n(1730);const u=t=>((0,r.dD)("data-v-52835da6"),t=t(),(0,r.Cn)(),t),i={class:"nav"},c=u((()=>(0,r._)("img",{src:a,style:{width:"158px",height:"37px"}},null,-1))),l={class:"menu_list"};function s(t,e,n,a,u,s){const f=(0,r.up)("router-link"),p=(0,r.up)("v-col"),v=(0,r.up)("v-spacer"),d=(0,r.up)("v-list-item-title"),m=(0,r.up)("v-list-item"),g=(0,r.up)("v-row");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r.Wm)(g,{class:"nav_con"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{class:"nav_logo",cols:"4"},{default:(0,r.w5)((()=>[(0,r.Wm)(f,{to:"/"},{default:(0,r.w5)((()=>[c])),_:1})])),_:1}),(0,r.Wm)(v),(0,r.Wm)(p,{cols:"6",class:"menu_con"},{default:(0,r.w5)((()=>[(0,r._)("div",l,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.menus,((t,e)=>((0,r.wg)(),(0,r.j4)(f,{key:e,to:t.value},{default:(0,r.w5)((()=>[(0,r.Wm)(m,{value:e},{default:(0,r.w5)((()=>[(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)(t.title),1)])),_:2},1024)])),_:2},1032,["value"])])),_:2},1032,["to"])))),128))])])),_:1})])),_:1})])}var f={name:"ScrollNav",components:{},data:()=>({showSubmenu:!1,menus:[{title:"회사소개",value:"/Intro"},{title:"회사소식",value:"/News"},{title:"서비스",value:"/Service"},{title:"문의&의뢰",value:"/Contact"},{title:"채용",value:"/Employ"}]})},p=n(3744);const v=(0,p.Z)(f,[["render",s],["__scopeId","data-v-52835da6"]]);var d=v},3738:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return x}});var r=n(6252);function o(t,e,n,o,a,u){const i=(0,r.up)("HeaderNav"),c=(0,r.up)("Contact"),l=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(i),(0,r.Wm)(c),(0,r.Wm)(l)],64)}var a=n(8982),u=n(3577);const i=t=>((0,r.dD)("data-v-2bbabc88"),t=t(),(0,r.Cn)(),t),c={class:"contact_section"},l=i((()=>(0,r._)("div",{class:"back_img"},[(0,r._)("span",{class:"title"},"웹사이트 제작 요청")],-1))),s={class:"form_con"},f=(0,r.uE)('<div class="form_head" data-v-2bbabc88><div class="selected" data-v-2bbabc88><span class="form" data-v-2bbabc88>제작 형태</span><span class="type" data-v-2bbabc88>제작 타입</span><span class="cost" data-v-2bbabc88>예상 비용</span></div><span class="info" data-v-2bbabc88>기본 정보</span></div>',1),p={class:"flex-grow-1 text-center"},v={class:"flex-grow-1 text-center"};function d(t,e,n,o,a,i){const d=(0,r.up)("v-btn"),m=(0,r.up)("v-item"),g=(0,r.up)("v-col"),b=(0,r.up)("v-row"),h=(0,r.up)("v-item-group"),w=(0,r.up)("v-select"),y=(0,r.up)("v-text-field"),_=(0,r.up)("v-file-input"),x=(0,r.up)("v-img"),W=(0,r.up)("v-textarea"),S=(0,r.up)("v-checkbox"),O=(0,r.up)("v-container"),j=(0,r.up)("v-form"),k=(0,r.up)("base-card");return(0,r.wg)(),(0,r.iD)("section",c,[l,(0,r._)("div",s,[f,(0,r.Wm)(k,null,{default:(0,r.w5)((()=>[(0,r.Wm)(j,{class:"info_form"},{default:(0,r.w5)((()=>[(0,r.Wm)(O,null,{default:(0,r.w5)((()=>[(0,r.Wm)(h,{"selected-class":"bg-primary"},{default:(0,r.w5)((()=>[(0,r.Wm)(b,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.develop_form,((t,e)=>((0,r.wg)(),(0,r.j4)(g,{key:e,cols:"12",md:"3"},{default:(0,r.w5)((()=>[(0,r.Wm)(m,null,{default:(0,r.w5)((({selectedClass:e,toggle:n})=>[(0,r.Wm)(d,{class:(0,u.C_)(["d-flex align-center",e]),dark:"",height:"50",width:"100",onClick:n},{default:(0,r.w5)((()=>[(0,r._)("div",p,(0,u.zw)(t),1)])),_:2},1032,["class","onClick"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),(0,r.Wm)(h,{multiple:"","selected-class":"bg-primary"},{default:(0,r.w5)((()=>[(0,r.Wm)(b,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.type,((t,e)=>((0,r.wg)(),(0,r.j4)(g,{key:e,cols:"12",md:"3"},{default:(0,r.w5)((()=>[(0,r.Wm)(m,null,{default:(0,r.w5)((({selectedClass:e,toggle:n})=>[(0,r.Wm)(d,{class:(0,u.C_)(["d-flex align-center",e]),dark:"",height:"50",width:"100",onClick:n},{default:(0,r.w5)((()=>[(0,r._)("div",v,(0,u.zw)(t),1)])),_:2},1032,["class","onClick"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),(0,r.Wm)(h,{"selected-class":"bg-primary"},{default:(0,r.w5)((()=>[(0,r.Wm)(b,null,{default:(0,r.w5)((()=>[(0,r.Wm)(g,{cols:"12",md:"5"},{default:(0,r.w5)((()=>[(0,r.Wm)(w,{label:"비용 선택",items:t.cost,variant:"solo"},null,8,["items"])])),_:1})])),_:1})])),_:1}),(0,r.Wm)(b,null,{default:(0,r.w5)((()=>[(0,r.Wm)(g,{cols:"12"},{default:(0,r.w5)((()=>[(0,r.Wm)(y,{variant:"underlined",modelValue:t.company,"onUpdate:modelValue":e[0]||(e[0]=e=>t.company=e),label:"회사명",hint:"회사명을 입력해 주세요",required:""},null,8,["modelValue"])])),_:1}),(0,r.Wm)(g,{cols:"12"},{default:(0,r.w5)((()=>[(0,r.Wm)(y,{variant:"underlined",modelValue:t.manager,"onUpdate:modelValue":e[1]||(e[1]=e=>t.manager=e),label:"담당자명",hint:"담당자명을 입력해 주세요",required:""},null,8,["modelValue"])])),_:1}),(0,r.Wm)(g,{cols:"12"},{default:(0,r.w5)((()=>[(0,r.Wm)(y,{variant:"underlined",modelValue:t.phone_num,"onUpdate:modelValue":e[2]||(e[2]=e=>t.phone_num=e),label:"휴대전화",hint:"휴대전화 번호를 입력해 주세요",required:""},null,8,["modelValue"])])),_:1})])),_:1}),(0,r.Wm)(b,null,{default:(0,r.w5)((()=>[(0,r.Wm)(g,{cols:"12"},{default:(0,r.w5)((()=>[(0,r.Wm)(_,{variant:"underlined",modelValue:t.images,"onUpdate:modelValue":e[3]||(e[3]=e=>t.images=e),multiple:!0,label:"이미지를 넣어주세요",accept:"image/*",onChange:i.preview},null,8,["modelValue","onChange"])])),_:1})])),_:1}),(0,r.Wm)(b,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.imagePreviews,((t,e)=>((0,r.wg)(),(0,r.j4)(g,{variant:"underlined",key:e,cols:"4"},{default:(0,r.w5)((()=>[(0,r.Wm)(x,{src:t,width:"100%"},null,8,["src"])])),_:2},1024)))),128))])),_:1}),(0,r.Wm)(b,null,{default:(0,r.w5)((()=>[(0,r.Wm)(g,{cols:"12"},{default:(0,r.w5)((()=>[(0,r.Wm)(W,{variant:"outlined",modelValue:t.email,"onUpdate:modelValue":e[4]||(e[4]=e=>t.email=e),label:"프로젝트에 대한 자세한 설명을 적어주세요"},null,8,["modelValue"])])),_:1})])),_:1}),(0,r.Wm)(S,{modelValue:t.checkbox1,"onUpdate:modelValue":e[5]||(e[5]=e=>t.checkbox1=e),label:"개인정보 수집 및 이용약관에 동의합니다.(필수)"},null,8,["modelValue"])])),_:1})])),_:1}),(0,r.Wm)(d,{class:"d-flex bg-primary",style:{margin:"auto",width:"240px",height:"60px"}},{default:(0,r.w5)((()=>[(0,r.Uk)("문의하기")])),_:1})])),_:1})])])}n(7658);var m={components:{},data:()=>({selectedDate:null,valid:!1,images:[],imagePreviews:[],company:"",manager:"",phone_num:"",email:"",develop_form:["신규제작","리뉴얼"],type:["반응형웹","PC웹","모바일웹","기타"],cost:["500만원 이하","500만원 이상"],period:[],checkbox1:!1}),methods:{preview(){this.imagePreviews=[];for(let t=0;t<this.images.length;t++){let e=new FileReader;e.readAsDataURL(this.images[t]),e.onloadend=()=>{this.imagePreviews.push(e.result)}}}}},g=n(3744);const b=(0,g.Z)(m,[["render",d],["__scopeId","data-v-2bbabc88"]]);var h=b,w=n(5656),y={components:{HeaderNav:a.Z,Contact:h,Footer:w["default"]}};const _=(0,g.Z)(y,[["render",o]]);var x=_},1136:function(t,e,n){"use strict";t.exports=n.p+"img/certification.0018a4b8.svg"},7093:function(t,e,n){"use strict";t.exports=n.p+"img/insta.1dc63998.svg"},1308:function(t,e,n){"use strict";t.exports=n.p+"img/locate.0892f4d8.svg"},8943:function(t,e,n){"use strict";t.exports=n.p+"img/message.170cc81d.svg"},8714:function(t,e,n){"use strict";t.exports=n.p+"img/naver.875323f8.svg"},3544:function(t,e,n){"use strict";t.exports=n.p+"img/personal.912c515c.svg"},1730:function(t,e,n){"use strict";t.exports=n.p+"img/scrollblogo.b2d0337b.svg"}}]);
//# sourceMappingURL=738.ef17e227.js.map