"use strict";(self["webpackChunkcompany_page"]=self["webpackChunkcompany_page"]||[]).push([[899,304],{1899:function(e,t,l){l.r(t),l.d(t,{default:function(){return L}});var s=l(6252),o=l(3577),n=l(7695);const a=e=>((0,s.dD)("data-v-54c1ab75"),e=e(),(0,s.Cn)(),e),i=a((()=>(0,s._)("img",{src:n,alt:"logo",class:"blogo"},null,-1))),c={class:"menu_list"},u=a((()=>(0,s._)("div",{class:"bar_con"},[(0,s._)("span",{class:"bar1"}),(0,s._)("span",{class:"bar2"}),(0,s._)("span",{class:"bar3"})],-1))),r=[u];function v(e,t,l,n,a,u){const v=(0,s.up)("v-col"),d=(0,s.up)("v-spacer"),m=(0,s.up)("v-list-item-title"),w=(0,s.up)("v-list-item"),p=(0,s.up)("router-link"),_=(0,s.up)("v-row"),h=(0,s.up)("ScrollNav");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("nav",{class:"nav",onMouseover:t[1]||(t[1]=(...e)=>u.hoverNavDown&&u.hoverNavDown(...e))},[(0,s.Wm)(_,{class:"nav_con"},{default:(0,s.w5)((()=>[(0,s.Wm)(v,{class:"nav_logo",cols:"4"},{default:(0,s.w5)((()=>[i])),_:1}),(0,s.Wm)(d),(0,s.Wm)(v,{cols:"8",class:"menu_con"},{default:(0,s.w5)((()=>[(0,s._)("div",c,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.menus,((e,t)=>((0,s.wg)(),(0,s.j4)(p,{key:t,to:e.value},{default:(0,s.w5)((()=>[(0,s.Wm)(w,{value:t},{default:(0,s.w5)((()=>[(0,s.Wm)(m,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(e.title),1)])),_:2},1024)])),_:2},1032,["value"])])),_:2},1032,["to"])))),128))])])),_:1}),(0,s.Wm)(v,{cols:"8",class:"small_nav"},{default:(0,s.w5)((()=>[(0,s._)("div",{class:"ham",ref:"hamElement",onClick:t[0]||(t[0]=t=>e.menu_state=!e.menu_state)},r,512)])),_:1})])),_:1})],32),(0,s.Wm)(h,{onMouseleave:u.hoverNavUp},null,8,["onMouseleave"])],64)}var d=l(2262),m=l(1730);const w=e=>((0,s.dD)("data-v-25a9cc3e"),e=e(),(0,s.Cn)(),e),p={class:"scrollNav"},_=w((()=>(0,s._)("img",{src:m,class:"blogo"},null,-1))),h={class:"menu_list"},f=w((()=>(0,s._)("div",{class:"bar_con"},[(0,s._)("span",{class:"bar1"}),(0,s._)("span",{class:"bar2"}),(0,s._)("span",{class:"bar3"})],-1))),g=[f];function k(e,t,l,n,a,i){const c=(0,s.up)("router-link"),u=(0,s.up)("v-col"),r=(0,s.up)("v-spacer"),v=(0,s.up)("v-list-item-title"),d=(0,s.up)("v-list-item"),m=(0,s.up)("v-row"),w=(0,s.up)("Menu");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("div",p,[(0,s.Wm)(m,{class:"nav_con"},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{class:"nav_logo",cols:"4"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{to:"/"},{default:(0,s.w5)((()=>[_])),_:1})])),_:1}),(0,s.Wm)(r),(0,s.Wm)(u,{cols:"8",class:"menu_con"},{default:(0,s.w5)((()=>[(0,s._)("div",h,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.menus,((e,t)=>((0,s.wg)(),(0,s.j4)(c,{key:e.value,to:e.value},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{value:t},{default:(0,s.w5)((()=>[(0,s.Wm)(v,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(e.title),1)])),_:2},1024)])),_:2},1032,["value"])])),_:2},1032,["to"])))),128))])])),_:1}),(0,s.Wm)(u,{cols:"8",class:"small_nav"},{default:(0,s.w5)((()=>[(0,s._)("div",{class:"ham",ref:"hamElement",onClick:t[0]||(t[0]=(...e)=>i.stopScrolling&&i.stopScrolling(...e))},g,512)])),_:1})])),_:1})]),e.menu_state?((0,s.wg)(),(0,s.j4)(w,{key:0})):(0,s.kq)("",!0)])}var N=l(4304),b={name:"ScrollNav",components:{Menu:N["default"]},data:()=>({menu_state:!1,scrollLock:!1,goto_subpage:!1,menus:[{title:"회사소개",value:"/Intro"},{title:"회사소식",value:"/News"},{title:"서비스",value:"/Service"},{title:"문의&의뢰",value:"/Contact"},{title:"채용",value:"/Employ"}]}),mounted(){this.$nextTick((()=>{const e=this.$refs.hamElement;e.addEventListener("click",(function(){this.classList.toggle("active")}))}))},beforeUnmount(){this.removeStopEvent()},methods:{stopScrolling(){this.scrollLock=!this.scrollLock,this.menu_state=!this.menu_state,this.scrollLock&&(window.addEventListener("wheel",this.stopEvent,{passive:!1}),window.addEventListener("touchmove",this.stopEvent,{passive:!1}))},stopEvent(e){e.preventDefault(),e.stopPropagation()},removeStopEvent(){this.scrollLock&&(window.removeEventListener("wheel",this.stopEvent),window.removeEventListener("touchmove",this.stopEvent))}}},E=l(3744);const S=(0,E.Z)(b,[["render",k],["__scopeId","data-v-25a9cc3e"]]);var D=S,W={name:"HeaderNav",components:{ScrollNav:D},data(){return{nav_state:!1,lastScrollPosition:0}},setup(){const e=(0,d.qj)({menus:[{title:"회사소개",value:"/Intro"},{title:"회사소식",value:"/News"},{title:"서비스",value:"/Service"},{title:"문의&의뢰",value:"/Contact"},{title:"채용",value:"/Employ"}]});return e},mounted(){const e=3;window.addEventListener("wheel",(t=>{t.wheelDeltaY>0&&window.scrollY+e<=window.innerHeight&&this.scrollNavUp(),t.wheelDeltaY<0&&this.scrollNavDown()})),window.addEventListener("scroll",this.handleScroll),this.animateNav(),this.$nextTick((()=>{const e=this.$refs.hamElement;e.addEventListener("click",(function(){this.classList.toggle("active")}))}))},methods:{animateNav(){this.$anime({targets:[".nav"],top:"0px",duration:200,easing:"easeInSine"})},scrollNavDown(){const e=document.querySelector(".scrollNav");e&&(e.style.top="0%",e.style.transition="all .5s ease")},scrollNavUp(){if(window.innerHeight>=window.scrollY){const e=document.querySelector(".scrollNav");e&&(e.style.top="-10%",e.style.transition="all .5s ease")}},hoverNavDown(){0===window.scrollY&&this.scrollNavDown()},hoverNavUp(){if(0===window.scrollY){const e=document.querySelector(".scrollNav");e.style.top="-10%",e.style.transition="all .5s ease"}},handleScroll(){const e=window.pageYOffset||document.documentElement.scrollTop;e>this.lastScrollPosition?this.isScrollingDown=!0:this.isScrollingDown=!1,this.lastScrollPosition=e,this.mobileHeader(this.isScrollingDown)},mobileHeader(e){e?this.scrollNavDown():!e&&window.scrollY+3<=window.innerHeight&&this.scrollNavUp()}}};const y=(0,E.Z)(W,[["render",v],["__scopeId","data-v-54c1ab75"]]);var L=y},4304:function(e,t,l){l.r(t),l.d(t,{default:function(){return d}});var s=l(6252),o=l(3577);const n={class:"menu_section"},a={class:"menu_con"},i={class:"icon"};function c(e,t,l,c,u,r){const v=(0,s.up)("v-list-item-title"),d=(0,s.up)("v-list-item"),m=(0,s.up)("v-icon"),w=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("section",n,[(0,s._)("div",a,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(u.menus,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t,class:"list_con"},[(0,s.Wm)(w,{to:e.value},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{value:t},{default:(0,s.w5)((()=>[(0,s.Wm)(v,{class:"list"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(e.title),1)])),_:2},1024)])),_:2},1032,["value"]),(0,s._)("div",i,[(0,s.Wm)(m,null,{default:(0,s.w5)((()=>[(0,s.Uk)("mdi-arrow-up-bold-box")])),_:1})])])),_:2},1032,["to"])])))),128))])])}var u={name:"Menu",components:{},data(){return{menus:[{title:"회사소개",value:"/Intro"},{title:"회사소식",value:"/News"},{title:"서비스",value:"/Service"},{title:"문의&의뢰",value:"/Contact"},{title:"채용",value:"/Employ"}]}}},r=l(3744);const v=(0,r.Z)(u,[["render",c],["__scopeId","data-v-06c4bcfa"]]);var d=v},1730:function(e,t,l){e.exports=l.p+"img/scrollblogo.b2d0337b.svg"},7695:function(e,t,l){e.exports=l.p+"img/whitelogo.a0039019.svg"}}]);
//# sourceMappingURL=899.be99ebea.js.map