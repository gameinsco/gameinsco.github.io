(self["webpackChunkcompany_page"]=self["webpackChunkcompany_page"]||[]).push([[3175,8569],{9662:function(t,e,n){var o=n(614),r=n(6330),i=TypeError;t.exports=function(t){if(o(t))return t;throw i(r(t)+" is not a function")}},9670:function(t,e,n){var o=n(111),r=String,i=TypeError;t.exports=function(t){if(o(t))return t;throw i(r(t)+" is not an object")}},1318:function(t,e,n){var o=n(5656),r=n(3984),i=n(6244),l=function(t){return function(e,n,l){var a,u=o(e),c=i(u),s=r(l,c);if(t&&n!=n){while(c>s)if(a=u[s++],a!=a)return!0}else for(;c>s;s++)if((t||s in u)&&u[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:l(!0),indexOf:l(!1)}},3658:function(t,e,n){"use strict";var o=n(9781),r=n(3157),i=TypeError,l=Object.getOwnPropertyDescriptor,a=o&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(r(t)&&!l(t,"length").writable)throw i("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},4326:function(t,e,n){var o=n(1702),r=o({}.toString),i=o("".slice);t.exports=function(t){return i(r(t),8,-1)}},9920:function(t,e,n){var o=n(2597),r=n(3887),i=n(1236),l=n(3070);t.exports=function(t,e,n){for(var a=r(e),u=l.f,c=i.f,s=0;s<a.length;s++){var f=a[s];o(t,f)||n&&o(n,f)||u(t,f,c(e,f))}}},8880:function(t,e,n){var o=n(9781),r=n(3070),i=n(9114);t.exports=o?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,n){var o=n(614),r=n(3070),i=n(6339),l=n(3072);t.exports=function(t,e,n,a){a||(a={});var u=a.enumerable,c=void 0!==a.name?a.name:e;if(o(n)&&i(n,c,a),a.global)u?t[e]=n:l(e,n);else{try{a.unsafe?t[e]&&(u=!0):delete t[e]}catch(s){}u?t[e]=n:r.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},3072:function(t,e,n){var o=n(7854),r=Object.defineProperty;t.exports=function(t,e){try{r(o,t,{value:e,configurable:!0,writable:!0})}catch(n){o[t]=e}return e}},9781:function(t,e,n){var o=n(7293);t.exports=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(t){var e="object"==typeof document&&document.all,n="undefined"==typeof e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:n}},317:function(t,e,n){var o=n(7854),r=n(111),i=o.document,l=r(i)&&r(i.createElement);t.exports=function(t){return l?i.createElement(t):{}}},7207:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},8113:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(t,e,n){var o,r,i=n(7854),l=n(8113),a=i.process,u=i.Deno,c=a&&a.versions||u&&u.version,s=c&&c.v8;s&&(o=s.split("."),r=o[0]>0&&o[0]<4?1:+(o[0]+o[1])),!r&&l&&(o=l.match(/Edge\/(\d+)/),(!o||o[1]>=74)&&(o=l.match(/Chrome\/(\d+)/),o&&(r=+o[1]))),t.exports=r},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,n){var o=n(7854),r=n(1236).f,i=n(8880),l=n(8052),a=n(3072),u=n(9920),c=n(4705);t.exports=function(t,e){var n,s,f,p,d,v,m=t.target,g=t.global,w=t.stat;if(s=g?o:w?o[m]||a(m,{}):(o[m]||{}).prototype,s)for(f in e){if(d=e[f],t.dontCallGetSet?(v=r(s,f),p=v&&v.value):p=s[f],n=c(g?f:m+(w?".":"#")+f,t.forced),!n&&void 0!==p){if(typeof d==typeof p)continue;u(d,p)}(t.sham||p&&p.sham)&&i(d,"sham",!0),l(s,f,d,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},4374:function(t,e,n){var o=n(7293);t.exports=!o((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var o=n(4374),r=Function.prototype.call;t.exports=o?r.bind(r):function(){return r.apply(r,arguments)}},6530:function(t,e,n){var o=n(9781),r=n(2597),i=Function.prototype,l=o&&Object.getOwnPropertyDescriptor,a=r(i,"name"),u=a&&"something"===function(){}.name,c=a&&(!o||o&&l(i,"name").configurable);t.exports={EXISTS:a,PROPER:u,CONFIGURABLE:c}},1702:function(t,e,n){var o=n(4374),r=Function.prototype,i=r.call,l=o&&r.bind.bind(i,i);t.exports=o?l:function(t){return function(){return i.apply(t,arguments)}}},5005:function(t,e,n){var o=n(7854),r=n(614),i=function(t){return r(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(o[t]):o[t]&&o[t][e]}},8173:function(t,e,n){var o=n(9662),r=n(8554);t.exports=function(t,e){var n=t[e];return r(n)?void 0:o(n)}},7854:function(t,e,n){var o=function(t){return t&&t.Math==Math&&t};t.exports=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var o=n(1702),r=n(7908),i=o({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(r(t),e)}},3501:function(t){t.exports={}},4664:function(t,e,n){var o=n(9781),r=n(7293),i=n(317);t.exports=!o&&!r((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var o=n(1702),r=n(7293),i=n(4326),l=Object,a=o("".split);t.exports=r((function(){return!l("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?a(t,""):l(t)}:l},2788:function(t,e,n){var o=n(1702),r=n(614),i=n(5465),l=o(Function.toString);r(i.inspectSource)||(i.inspectSource=function(t){return l(t)}),t.exports=i.inspectSource},9909:function(t,e,n){var o,r,i,l=n(4811),a=n(7854),u=n(111),c=n(8880),s=n(2597),f=n(5465),p=n(6200),d=n(3501),v="Object already initialized",m=a.TypeError,g=a.WeakMap,w=function(t){return i(t)?r(t):o(t,{})},y=function(t){return function(e){var n;if(!u(e)||(n=r(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return n}};if(l||f.state){var _=f.state||(f.state=new g);_.get=_.get,_.has=_.has,_.set=_.set,o=function(t,e){if(_.has(t))throw m(v);return e.facade=t,_.set(t,e),e},r=function(t){return _.get(t)||{}},i=function(t){return _.has(t)}}else{var h=p("state");d[h]=!0,o=function(t,e){if(s(t,h))throw m(v);return e.facade=t,c(t,h,e),e},r=function(t){return s(t,h)?t[h]:{}},i=function(t){return s(t,h)}}t.exports={set:o,get:r,has:i,enforce:w,getterFor:y}},3157:function(t,e,n){var o=n(4326);t.exports=Array.isArray||function(t){return"Array"==o(t)}},614:function(t,e,n){var o=n(4154),r=o.all;t.exports=o.IS_HTMLDDA?function(t){return"function"==typeof t||t===r}:function(t){return"function"==typeof t}},4705:function(t,e,n){var o=n(7293),r=n(614),i=/#|\.prototype\./,l=function(t,e){var n=u[a(t)];return n==s||n!=c&&(r(e)?o(e):!!e)},a=l.normalize=function(t){return String(t).replace(i,".").toLowerCase()},u=l.data={},c=l.NATIVE="N",s=l.POLYFILL="P";t.exports=l},8554:function(t){t.exports=function(t){return null===t||void 0===t}},111:function(t,e,n){var o=n(614),r=n(4154),i=r.all;t.exports=r.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:o(t)||t===i}:function(t){return"object"==typeof t?null!==t:o(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var o=n(5005),r=n(614),i=n(7976),l=n(3307),a=Object;t.exports=l?function(t){return"symbol"==typeof t}:function(t){var e=o("Symbol");return r(e)&&i(e.prototype,a(t))}},6244:function(t,e,n){var o=n(7466);t.exports=function(t){return o(t.length)}},6339:function(t,e,n){var o=n(1702),r=n(7293),i=n(614),l=n(2597),a=n(9781),u=n(6530).CONFIGURABLE,c=n(2788),s=n(9909),f=s.enforce,p=s.get,d=String,v=Object.defineProperty,m=o("".slice),g=o("".replace),w=o([].join),y=a&&!r((function(){return 8!==v((function(){}),"length",{value:8}).length})),_=String(String).split("String"),h=t.exports=function(t,e,n){"Symbol("===m(d(e),0,7)&&(e="["+g(d(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!l(t,"name")||u&&t.name!==e)&&(a?v(t,"name",{value:e,configurable:!0}):t.name=e),y&&n&&l(n,"arity")&&t.length!==n.arity&&v(t,"length",{value:n.arity});try{n&&l(n,"constructor")&&n.constructor?a&&v(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(r){}var o=f(t);return l(o,"source")||(o.source=w(_,"string"==typeof e?e:"")),t};Function.prototype.toString=h((function(){return i(this)&&p(this).source||c(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var o=+t;return(o>0?n:e)(o)}},3070:function(t,e,n){var o=n(9781),r=n(4664),i=n(3353),l=n(9670),a=n(4948),u=TypeError,c=Object.defineProperty,s=Object.getOwnPropertyDescriptor,f="enumerable",p="configurable",d="writable";e.f=o?i?function(t,e,n){if(l(t),e=a(e),l(n),"function"===typeof t&&"prototype"===e&&"value"in n&&d in n&&!n[d]){var o=s(t,e);o&&o[d]&&(t[e]=n.value,n={configurable:p in n?n[p]:o[p],enumerable:f in n?n[f]:o[f],writable:!1})}return c(t,e,n)}:c:function(t,e,n){if(l(t),e=a(e),l(n),r)try{return c(t,e,n)}catch(o){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var o=n(9781),r=n(6916),i=n(5296),l=n(9114),a=n(5656),u=n(4948),c=n(2597),s=n(4664),f=Object.getOwnPropertyDescriptor;e.f=o?f:function(t,e){if(t=a(t),e=u(e),s)try{return f(t,e)}catch(n){}if(c(t,e))return l(!r(i.f,t,e),t[e])}},8006:function(t,e,n){var o=n(6324),r=n(748),i=r.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return o(t,i)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},7976:function(t,e,n){var o=n(1702);t.exports=o({}.isPrototypeOf)},6324:function(t,e,n){var o=n(1702),r=n(2597),i=n(5656),l=n(1318).indexOf,a=n(3501),u=o([].push);t.exports=function(t,e){var n,o=i(t),c=0,s=[];for(n in o)!r(a,n)&&r(o,n)&&u(s,n);while(e.length>c)r(o,n=e[c++])&&(~l(s,n)||u(s,n));return s}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,r=o&&!n.call({1:2},1);e.f=r?function(t){var e=o(this,t);return!!e&&e.enumerable}:n},2140:function(t,e,n){var o=n(6916),r=n(614),i=n(111),l=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&r(n=t.toString)&&!i(a=o(n,t)))return a;if(r(n=t.valueOf)&&!i(a=o(n,t)))return a;if("string"!==e&&r(n=t.toString)&&!i(a=o(n,t)))return a;throw l("Can't convert object to primitive value")}},3887:function(t,e,n){var o=n(5005),r=n(1702),i=n(8006),l=n(5181),a=n(9670),u=r([].concat);t.exports=o("Reflect","ownKeys")||function(t){var e=i.f(a(t)),n=l.f;return n?u(e,n(t)):e}},4488:function(t,e,n){var o=n(8554),r=TypeError;t.exports=function(t){if(o(t))throw r("Can't call method on "+t);return t}},6200:function(t,e,n){var o=n(2309),r=n(9711),i=o("keys");t.exports=function(t){return i[t]||(i[t]=r(t))}},5465:function(t,e,n){var o=n(7854),r=n(3072),i="__core-js_shared__",l=o[i]||r(i,{});t.exports=l},2309:function(t,e,n){var o=n(1913),r=n(5465);(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.29.0",mode:o?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.29.0/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(t,e,n){var o=n(7392),r=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&o&&o<41}))},3984:function(t,e,n){var o=n(9303),r=Math.max,i=Math.min;t.exports=function(t,e){var n=o(t);return n<0?r(n+e,0):i(n,e)}},5656:function(t,e,n){var o=n(8361),r=n(4488);t.exports=function(t){return o(r(t))}},9303:function(t,e,n){var o=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:o(e)}},7466:function(t,e,n){var o=n(9303),r=Math.min;t.exports=function(t){return t>0?r(o(t),9007199254740991):0}},7908:function(t,e,n){var o=n(4488),r=Object;t.exports=function(t){return r(o(t))}},7593:function(t,e,n){var o=n(6916),r=n(111),i=n(2190),l=n(8173),a=n(2140),u=n(5112),c=TypeError,s=u("toPrimitive");t.exports=function(t,e){if(!r(t)||i(t))return t;var n,u=l(t,s);if(u){if(void 0===e&&(e="default"),n=o(u,t,e),!r(n)||i(n))return n;throw c("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},4948:function(t,e,n){var o=n(7593),r=n(2190);t.exports=function(t){var e=o(t,"string");return r(e)?e:e+""}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){var o=n(1702),r=0,i=Math.random(),l=o(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+l(++r+i,36)}},3307:function(t,e,n){var o=n(6293);t.exports=o&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var o=n(9781),r=n(7293);t.exports=o&&r((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(t,e,n){var o=n(7854),r=n(614),i=o.WeakMap;t.exports=r(i)&&/native code/.test(String(i))},5112:function(t,e,n){var o=n(7854),r=n(2309),i=n(2597),l=n(9711),a=n(6293),u=n(3307),c=o.Symbol,s=r("wks"),f=u?c["for"]||c:c&&c.withoutSetter||l;t.exports=function(t){return i(s,t)||(s[t]=a&&i(c,t)?c[t]:f("Symbol."+t)),s[t]}},7658:function(t,e,n){"use strict";var o=n(2109),r=n(7908),i=n(6244),l=n(3658),a=n(7207),u=n(7293),c=u((function(){return 4294967297!==[].push.call({length:4294967296},1)})),s=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},f=c||!s();o({target:"Array",proto:!0,arity:1,forced:f},{push:function(t){var e=r(this),n=i(e),o=arguments.length;a(n+o);for(var u=0;u<o;u++)e[n]=arguments[u],n++;return l(e,n),n}})},3420:function(t,e,n){"use strict";n.d(e,{Z:function(){return z}});var o=n(6252),r=n(3577),i=n(7695),l=n.p+"img/bestFriendlyLogo.7b0e0454.svg";const a=t=>((0,o.dD)("data-v-69fd53ac"),t=t(),(0,o.Cn)(),t),u={class:"footer"},c={class:"logo_con",style:{display:"flex"}},s=a((()=>(0,o._)("img",{src:i,alt:"",class:"footer_logo"},null,-1))),f={class:"footer_info"},p=a((()=>(0,o._)("p",null,"부산광역시 사상구 백양대로684 5F",-1))),d=a((()=>(0,o._)("p",null," TEL 051-301-5908 | FAX 051-302-5908 | E-mail: gameinscokr@naver.com ",-1))),v=a((()=>(0,o._)("p",null," (주)게임인스 | 대표이사: 김웅겸 | 사업자등록번호: 362-88-00435 | 통신판매업 등록번호: 1649-3196-3663-0809 ",-1))),m={class:"small_btn_con",style:{display:"none"}},g=a((()=>(0,o._)("hr",{style:{width:"90vw",margin:"12px 0px"}},null,-1))),w={class:"small_btn",style:{"justify-content":"center","align-items":"center",display:"flex",width:"90vw"}},y={style:{display:"flex","justify-content":"space-between",width:"90vw",padding:"12px 0px"}},_=a((()=>(0,o._)("img",{src:l,class:"certificate_mobile"},null,-1))),h={style:{display:"flex","padding-top":"12px"}},b={href:""},x=["src"],k={href:""},W=["src"],S={href:""},j=["src"],E=a((()=>(0,o._)("p",{class:"footer_info_reserve"},[(0,o._)("img",{src:l,class:"certificate"}),(0,o._)("br",{class:"br"}),(0,o.Uk)(" copyright 2022 GAMEINS All right reserved ")],-1))),O={class:"contact_btn"},D={class:"btn"},C=["href"],P=["src"],L=["src"];function I(t,e,n,i,l,a){const I=(0,o.up)("router-link"),T=(0,o.up)("v-col"),M=(0,o.up)("v-row"),A=(0,o.up)("v-spacer");return(0,o.wg)(),(0,o.iD)("div",u,[(0,o.Wm)(M,{class:"footer_con"},{default:(0,o.w5)((()=>[(0,o.Wm)(T,{cols:"9"},{default:(0,o.w5)((()=>[(0,o._)("div",c,[(0,o.Wm)(I,{to:"/"},{default:(0,o.w5)((()=>[s])),_:1})]),(0,o._)("div",f,[p,d,v,(0,o._)("div",m,[g,(0,o._)("div",w,[(0,o.Wm)(M,null,{default:(0,o.w5)((()=>[(0,o.Wm)(T,{cols:"3",style:{"justify-content":"center",display:"flex"}},{default:(0,o.w5)((()=>[(0,o.Wm)(I,{to:"/contact"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(l.btn[2].text),1)])),_:1})])),_:1}),(0,o.Wm)(T,{cols:"3",style:{"justify-content":"center",display:"flex"}},{default:(0,o.w5)((()=>[(0,o.Wm)(I,{to:"/news"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(l.btn[3].text),1)])),_:1})])),_:1}),(0,o.Wm)(T,{cols:"3",style:{"justify-content":"center",display:"flex"}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(l.btn[4].text),1)])),_:1}),(0,o.Wm)(T,{cols:"3",style:{"z-index":"1","justify-content":"center",display:"flex"}},{default:(0,o.w5)((()=>[(0,o.Wm)(I,{to:"/way"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(l.btn[5].text),1)])),_:1})])),_:1})])),_:1})]),(0,o._)("div",y,[_,(0,o._)("div",h,[(0,o._)("a",b,[(0,o._)("img",{src:l.btn[0].logo_image,style:{"margin-right":"16px"}},null,8,x)]),(0,o._)("a",k,[(0,o._)("img",{src:l.btn[1].logo_image,style:{"margin-right":"16px"}},null,8,W)]),(0,o._)("a",S,[(0,o._)("img",{src:l.btn[2].logo_image,style:{"margin-right":"16px"}},null,8,j)])])])]),E])])),_:1}),(0,o.Wm)(A),(0,o.Wm)(T,{cols:"3",class:"contact_btn_con"},{default:(0,o.w5)((()=>[(0,o._)("div",O,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.btn,((t,e)=>((0,o.wg)(),(0,o.iD)("div",{key:e},[(0,o._)("div",D,["INSTAGRAM"===t.text||"BLOG"===t.text?((0,o.wg)(),(0,o.iD)("a",{key:0,href:t.link},[(0,o.Uk)((0,r.zw)(t.text)+" ",1),(0,o._)("img",{src:t.logo_image},null,8,P)],8,C)):((0,o.wg)(),(0,o.j4)(I,{key:1,to:t.link},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(t.text)+" ",1),(0,o._)("img",{src:t.logo_image},null,8,L)])),_:2},1032,["to"]))])])))),128))])])),_:1})])),_:1})])}var T=n(7625),M=n(3907),A={name:"Footer",data(){return{btn:[{link:"https://blog.naver.com/gameinscokr",text:"BLOG",logo_image:n(8665)},{link:"https://www.instagram.com/tikintaka_official",text:"INSTAGRAM",logo_image:n(7093)},{link:"/contact",text:"문의&의뢰",logo_image:n(8943)},{link:"/news",text:"회사소식",logo_image:n(1136)},{link:"/",text:"개인정보처리방침",logo_image:n(3544)},{link:"/way",text:"오시는길",logo_image:n(1308)}]}},computed:{...(0,M.Se)(["isScrolling"])},mounted(){const t=document.querySelector(".footer");t.addEventListener("wheel",(function(e){console.log("footer-wheel"),e.preventDefault(),T.Z.getters.isScrolling||(T.Z.dispatch("setIsScrolling",!0),e.deltaY<0&&window.scrollTo({top:window.scrollY-t.scrollHeight,behavior:"smooth"}),setTimeout((()=>{T.Z.dispatch("setIsScrolling",!1)}),500))}));const e=document.querySelector(".small_btn_con"),n=document.querySelector(".contact_btn_con");window.innerWidth<760?(e.style.display="block",n.style.display="none"):(e.style.display="none",n.style.display="block"),window.addEventListener("resize",(()=>{window.innerWidth<760?(e.style.display="block",n.style.display="none"):(e.style.display="none",n.style.display="block")}))}},U=n(3744);const V=(0,U.Z)(A,[["render",I],["__scopeId","data-v-69fd53ac"]]);var z=V},8569:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return f}});var o=n(6252),r=n(3577);const i={class:"menu_section"},l={class:"menu_con"};function a(t,e,n,a,u,c){const s=(0,o.up)("v-list-item-title"),f=(0,o.up)("v-list-item"),p=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("section",i,[(0,o._)("div",l,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(u.menus,((t,e)=>((0,o.wg)(),(0,o.iD)("div",{key:e,class:"list_con"},[(0,o.Wm)(p,{to:t.value},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{value:e},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{class:"list"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(t.title),1)])),_:2},1024)])),_:2},1032,["value"])])),_:2},1032,["to"])])))),128))])])}var u={name:"Menu",components:{},data(){return{menus:[{title:"회사소개",value:"/Intro"},{title:"회사소식",value:"/News"},{title:"서비스",value:"/Service"},{title:"문의&의뢰",value:"/Contact"},{title:"채용",value:"/Employ"}]}}},c=n(3744);const s=(0,c.Z)(u,[["render",a],["__scopeId","data-v-142424a2"]]);var f=s},7526:function(t,e,n){"use strict";n.d(e,{Z:function(){return w}});var o=n(6252),r=n(3577),i=n(1730);const l=t=>((0,o.dD)("data-v-1d2a269d"),t=t(),(0,o.Cn)(),t),a={class:"subNav"},u=l((()=>(0,o._)("img",{src:i,class:"blogo"},null,-1))),c={class:"menu_list"},s=l((()=>(0,o._)("div",{class:"bar_con"},[(0,o._)("span",{class:"bar1"}),(0,o._)("span",{class:"bar2"}),(0,o._)("span",{class:"bar3"})],-1))),f=[s];function p(t,e,n,i,l,s){const p=(0,o.up)("router-link"),d=(0,o.up)("v-col"),v=(0,o.up)("v-spacer"),m=(0,o.up)("v-list-item-title"),g=(0,o.up)("v-list-item"),w=(0,o.up)("v-row"),y=(0,o.up)("Menu");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",a,[(0,o.Wm)(w,{class:"nav_con"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{class:"nav_logo",cols:"4"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{to:"/"},{default:(0,o.w5)((()=>[u])),_:1})])),_:1}),(0,o.Wm)(v),(0,o.Wm)(d,{cols:"8",class:"menu_con"},{default:(0,o.w5)((()=>[(0,o._)("div",c,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.menus,((t,e)=>((0,o.wg)(),(0,o.j4)(p,{key:e,to:t.value},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{value:e},{default:(0,o.w5)((()=>[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(t.title),1)])),_:2},1024)])),_:2},1032,["value"])])),_:2},1032,["to"])))),128))])])),_:1}),(0,o.Wm)(d,{cols:"8",class:"small_nav"},{default:(0,o.w5)((()=>[(0,o._)("div",{class:"ham",ref:"hamElement",onClick:e[0]||(e[0]=(...t)=>s.stopScrolling&&s.stopScrolling(...t))},f,512)])),_:1})])),_:1})]),t.menu_state?((0,o.wg)(),(0,o.j4)(y,{key:0})):(0,o.kq)("",!0)])}var d=n(8569),v={name:"SubNav",components:{Menu:d["default"]},data:()=>({menu_state:!1,scrollLock:!1,menus:[{title:"회사소개",value:"/Intro"},{title:"회사소식",value:"/News"},{title:"서비스",value:"/Service"},{title:"문의&의뢰",value:"/Contact"},{title:"채용",value:"/Employ"}]}),mounted(){this.$nextTick((()=>{const t=this.$refs.hamElement;t.addEventListener("click",(function(){this.classList.toggle("active")}))}))},beforeUnmount(){this.removeStopEvent()},methods:{stopScrolling(){this.scrollLock=!this.scrollLock,this.menu_state=!this.menu_state,this.scrollLock?(window.addEventListener("wheel",this.stopEvent,{passive:!1}),window.addEventListener("touchmove",this.stopEvent,{passive:!1})):(window.removeEventListener("wheel",this.stopEvent),window.removeEventListener("touchmove",this.stopEvent))},stopEvent(t){t.preventDefault(),t.stopPropagation()},removeStopEvent(){this.scrollLock&&(window.removeEventListener("wheel",this.stopEvent),window.removeEventListener("touchmove",this.stopEvent))}}},m=n(3744);const g=(0,m.Z)(v,[["render",p],["__scopeId","data-v-1d2a269d"]]);var w=g},891:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return k}});var o=n(6252);function r(t,e,n,r,i,l){const a=(0,o.up)("HeaderNav"),u=(0,o.up)("Contact"),c=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(a),(0,o.Wm)(u),(0,o.Wm)(c)],64)}var i=n(7526),l=n(3577);const a=t=>((0,o.dD)("data-v-23e18898"),t=t(),(0,o.Cn)(),t),u={class:"contact_section"},c=a((()=>(0,o._)("div",{class:"title_con"},[(0,o._)("div",{class:"title"},[(0,o._)("p",null,"게임인스와 함께 멈추지 않는"),(0,o._)("p",null,"성장을 경험하세요.")]),(0,o._)("div",{class:"sub_title"},[(0,o._)("span",null,"우리와 프로젝트를 함께 하시겠습니까?")])],-1))),s={class:"form_con"},f={class:"info_form"},p=(0,o.uE)('<div class="form_head" data-v-23e18898><div class="selected" data-v-23e18898><span class="form" data-v-23e18898>제작 형태</span><span class="type" data-v-23e18898>제작 타입</span><span class="cost" data-v-23e18898>예상 비용</span></div></div>',1),d={class:"flex-grow-1 text-center"},v={class:"flex-grow-1 text-center"};function m(t,e,n,r,i,a){const m=(0,o.up)("v-btn"),g=(0,o.up)("v-item"),w=(0,o.up)("v-col"),y=(0,o.up)("v-row"),_=(0,o.up)("v-item-group"),h=(0,o.up)("v-select"),b=(0,o.up)("v-container"),x=(0,o.up)("v-form"),k=(0,o.up)("base-card"),W=(0,o.up)("v-text-field"),S=(0,o.up)("v-file-input"),j=(0,o.up)("v-img"),E=(0,o.up)("v-textarea"),O=(0,o.up)("v-checkbox");return(0,o.wg)(),(0,o.iD)("section",u,[c,(0,o._)("div",s,[(0,o._)("div",f,[p,(0,o.Wm)(k,{class:"card"},{default:(0,o.w5)((()=>[(0,o.Wm)(x,{style:{"margin-left":"10%"}},{default:(0,o.w5)((()=>[(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[(0,o.Wm)(_,{"selected-class":"my-color"},{default:(0,o.w5)((()=>[(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.develop_form,((t,e)=>((0,o.wg)(),(0,o.j4)(w,{key:e,cols:"3"},{default:(0,o.w5)((()=>[(0,o.Wm)(g,null,{default:(0,o.w5)((({selectedClass:n,toggle:r})=>[((0,o.wg)(),(0,o.j4)(m,{class:(0,l.C_)(["d-flex align-center",n," btn"]),rounded:"xl",key:e,onClick:r},{default:(0,o.w5)((()=>[(0,o._)("div",d,(0,l.zw)(t),1)])),_:2},1032,["class","onClick"]))])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),(0,o.Wm)(_,{multiple:"","selected-class":"my-color"},{default:(0,o.w5)((()=>[(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.type,((t,e)=>((0,o.wg)(),(0,o.j4)(w,{key:e,cols:"3"},{default:(0,o.w5)((()=>[(0,o.Wm)(g,null,{default:(0,o.w5)((({selectedClass:e,toggle:n})=>[(0,o.Wm)(m,{class:(0,l.C_)(["d-flex align-center",e," btn"]),dark:"",onClick:n},{default:(0,o.w5)((()=>[(0,o._)("div",v,(0,l.zw)(t),1)])),_:2},1032,["class","onClick"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),(0,o.Wm)(_,{"selected-class":"bg-primary"},{default:(0,o.w5)((()=>[(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o.Wm)(w,{cols:"10"},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{label:"비용 선택",rounded:"xl",items:t.cost,variant:"solo"},null,8,["items"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})]),(0,o.Wm)(k,null,{default:(0,o.w5)((()=>[(0,o.Wm)(x,{class:"input_form"},{default:(0,o.w5)((()=>[(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o.Wm)(w,{cols:"12"},{default:(0,o.w5)((()=>[(0,o.Wm)(W,{variant:"underlined",modelValue:t.company,"onUpdate:modelValue":e[0]||(e[0]=e=>t.company=e),label:"회사명",hint:"회사명을 입력해 주세요",required:""},null,8,["modelValue"])])),_:1}),(0,o.Wm)(w,{cols:"12"},{default:(0,o.w5)((()=>[(0,o.Wm)(W,{variant:"underlined",modelValue:t.manager,"onUpdate:modelValue":e[1]||(e[1]=e=>t.manager=e),label:"담당자명",hint:"담당자명을 입력해 주세요",required:""},null,8,["modelValue"])])),_:1}),(0,o.Wm)(w,{cols:"12"},{default:(0,o.w5)((()=>[(0,o.Wm)(W,{variant:"underlined",modelValue:t.phone_num,"onUpdate:modelValue":e[2]||(e[2]=e=>t.phone_num=e),label:"휴대전화",hint:"휴대전화 번호를 입력해 주세요",required:""},null,8,["modelValue"])])),_:1})])),_:1}),(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o.Wm)(w,{cols:"12"},{default:(0,o.w5)((()=>[(0,o.Wm)(S,{variant:"underlined",modelValue:t.images,"onUpdate:modelValue":e[3]||(e[3]=e=>t.images=e),multiple:!0,label:"이미지를 넣어주세요",accept:"image/*",onChange:a.preview},null,8,["modelValue","onChange"])])),_:1})])),_:1}),(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.imagePreviews,((t,e)=>((0,o.wg)(),(0,o.j4)(w,{variant:"underlined",key:e,cols:"4"},{default:(0,o.w5)((()=>[(0,o.Wm)(j,{src:t,width:"100%"},null,8,["src"])])),_:2},1024)))),128))])),_:1}),(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o.Wm)(w,{cols:"12"},{default:(0,o.w5)((()=>[(0,o.Wm)(E,{variant:"outlined",modelValue:t.email,"onUpdate:modelValue":e[4]||(e[4]=e=>t.email=e),label:"프로젝트에 대한 자세한 설명을 적어주세요"},null,8,["modelValue"])])),_:1})])),_:1}),(0,o.Wm)(O,{modelValue:t.checkbox1,"onUpdate:modelValue":e[5]||(e[5]=e=>t.checkbox1=e),label:"개인정보 수집 및 이용약관에 동의합니다.(필수)"},null,8,["modelValue"]),(0,o.Wm)(m,{class:"d-flex my-color",style:{margin:"auto",width:"240px",height:"60px"}},{default:(0,o.w5)((()=>[(0,o.Uk)("문의하기")])),_:1})])),_:1})])),_:1})])])}n(7658);var g={components:{},data:()=>({selectedDate:null,valid:!1,images:[],imagePreviews:[],company:"",manager:"",phone_num:"",email:"",develop_form:["신규제작","리뉴얼"],type:["반응형웹","PC웹","모바일웹","기타"],cost:["500만원 이하","500만원 이상"],period:[],checkbox1:!1}),methods:{preview(){this.imagePreviews=[];for(let t=0;t<this.images.length;t++){let e=new FileReader;e.readAsDataURL(this.images[t]),e.onloadend=()=>{this.imagePreviews.push(e.result)}}},toggle(){this.selectedClass=".my-color"}}},w=n(3744);const y=(0,w.Z)(g,[["render",m],["__scopeId","data-v-23e18898"]]);var _=y,h=n(3420),b={components:{HeaderNav:i.Z,Contact:_,Footer:h.Z}};const x=(0,w.Z)(b,[["render",r]]);var k=x},8665:function(t,e,n){"use strict";t.exports=n.p+"img/blog.912c515c.svg"},1136:function(t,e,n){"use strict";t.exports=n.p+"img/certification.170cc81d.svg"},7093:function(t,e,n){"use strict";t.exports=n.p+"img/insta.0892f4d8.svg"},1308:function(t,e,n){"use strict";t.exports=n.p+"img/locate.875323f8.svg"},8943:function(t,e,n){"use strict";t.exports=n.p+"img/message.0018a4b8.svg"},3544:function(t,e,n){"use strict";t.exports=n.p+"img/personal.1dc63998.svg"},1730:function(t,e,n){"use strict";t.exports=n.p+"img/scrollblogo.b2d0337b.svg"},7695:function(t,e,n){"use strict";t.exports=n.p+"img/whitelogo.a0039019.svg"}}]);
//# sourceMappingURL=3175.5b5ec5db.js.map