"use strict";(self["webpackChunkcompany_page"]=self["webpackChunkcompany_page"]||[]).push([[971],{116:function(t,e,l){l.d(e,{Z:function(){return N}});var n=l(6252),o=l(3577),s=l(7695);const i=t=>((0,n.dD)("data-v-2247cfd9"),t=t(),(0,n.Cn)(),t),a={class:"footer"},c={class:"logo_con"},r=i((()=>(0,n._)("img",{src:s,alt:"",class:"footer_logo"},null,-1))),u={class:"footer_info"},d=i((()=>(0,n._)("p",null,"부산광역시 사상구 백양대로684 5F",-1))),m=i((()=>(0,n._)("p",null," TEL 051-301-5908 | FAX 3030-3448-0523 | E-mail: gameinscokr@naver.com ",-1))),v=i((()=>(0,n._)("p",null," (주)게임인스 | 대표이사: 김웅겸 | 사업자등록번호: 362-88-00435 | 통신판매업 등록번호: 1649-3196-3663-0809 ",-1))),p={class:"small_btn_con",style:{display:"none"}},_=i((()=>(0,n._)("hr",{style:{width:"90vw",margin:"12px 0px"}},null,-1))),g={class:"small_btn",style:{"justify-content":"center","align-items":"center",display:"flex",width:"90vw"}},f={style:{display:"flex",padding:"12px 0px"}},w={href:""},y=["src"],h={href:""},k=["src"],x={href:""},b=["src"],W=i((()=>(0,n._)("p",{class:"footer_info_reserve"}," copyright 2022 GAMEINS All right reserved ",-1))),E={class:"contact_btn"},S={class:"btn"},L=["href"],D=["src"],z=["src"];function I(t,e,l,s,i,I){const U=(0,n.up)("router-link"),j=(0,n.up)("v-col"),Z=(0,n.up)("v-row"),A=(0,n.up)("v-spacer");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n.Wm)(Z,{class:"footer_con"},{default:(0,n.w5)((()=>[(0,n.Wm)(j,{cols:"9"},{default:(0,n.w5)((()=>[(0,n._)("div",c,[(0,n.Wm)(U,{to:"/"},{default:(0,n.w5)((()=>[r])),_:1})]),(0,n._)("div",u,[d,m,v,(0,n._)("div",p,[_,(0,n._)("div",g,[(0,n.Wm)(Z,null,{default:(0,n.w5)((()=>[(0,n.Wm)(j,{cols:"3",style:{"justify-content":"center",display:"flex"}},{default:(0,n.w5)((()=>[(0,n.Wm)(U,{to:"/contact"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(i.btn[2].text),1)])),_:1})])),_:1}),(0,n.Wm)(j,{cols:"3",style:{"justify-content":"center",display:"flex"}},{default:(0,n.w5)((()=>[(0,n.Wm)(U,{to:"/news"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(i.btn[3].text),1)])),_:1})])),_:1}),(0,n.Wm)(j,{cols:"3",style:{"justify-content":"center",display:"flex"}},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(i.btn[4].text),1)])),_:1}),(0,n.Wm)(j,{cols:"3",style:{"z-index":"1","justify-content":"center",display:"flex"}},{default:(0,n.w5)((()=>[(0,n.Wm)(U,{to:"/way"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(i.btn[5].text),1)])),_:1})])),_:1})])),_:1})]),(0,n._)("div",f,[(0,n._)("a",w,[(0,n._)("img",{src:i.btn[0].logo_image,style:{"margin-right":"16px"}},null,8,y)]),(0,n._)("a",h,[(0,n._)("img",{src:i.btn[1].logo_image,style:{"margin-right":"16px"}},null,8,k)]),(0,n._)("a",x,[(0,n._)("img",{src:i.btn[2].logo_image,style:{"margin-right":"16px"}},null,8,b)])])]),W])])),_:1}),(0,n.Wm)(A),(0,n.Wm)(j,{cols:"3",class:"contact_btn_con"},{default:(0,n.w5)((()=>[(0,n._)("div",E,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.btn,((t,e)=>((0,n.wg)(),(0,n.iD)("div",{key:e},[(0,n._)("div",S,["INSTAGRAM"===t.text||"BLOG"===t.text?((0,n.wg)(),(0,n.iD)("a",{key:0,href:t.link},[(0,n.Uk)((0,o.zw)(t.text)+" ",1),(0,n._)("img",{src:t.logo_image},null,8,D)],8,L)):((0,n.wg)(),(0,n.j4)(U,{key:1,to:t.link},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(t.text)+" ",1),(0,n._)("img",{src:t.logo_image},null,8,z)])),_:2},1032,["to"]))])])))),128))])])),_:1})])),_:1})])}var U=l(7625),j=l(3907),Z={name:"Footer",data(){return{btn:[{link:"https://blog.naver.com/gameinscokr",text:"BLOG",logo_image:l(8665)},{link:"https://www.instagram.com/tikintaka_official",text:"INSTAGRAM",logo_image:l(7093)},{link:"/contact",text:"문의&의뢰",logo_image:l(8943)},{link:"/news",text:"회사소식",logo_image:l(1136)},{link:"/",text:"개인정보처리방침",logo_image:l(3544)},{link:"/way",text:"오시는길",logo_image:l(1308)}]}},computed:{...(0,j.Se)(["isScrolling"])},mounted(){const t=document.querySelector(".footer");t.addEventListener("wheel",(function(e){console.log("footer-wheel"),e.preventDefault(),U.Z.getters.isScrolling||(U.Z.dispatch("setIsScrolling",!0),e.deltaY<0&&window.scrollTo({top:window.scrollY-t.scrollHeight,behavior:"smooth"}),setTimeout((()=>{U.Z.dispatch("setIsScrolling",!1)}),500))}));const e=document.querySelector(".small_btn_con"),l=document.querySelector(".contact_btn_con");window.innerWidth<760?(e.style.display="block",l.style.display="none"):(e.style.display="none",l.style.display="block"),window.addEventListener("resize",(()=>{window.innerWidth<760?(e.style.display="block",l.style.display="none"):(e.style.display="none",l.style.display="block")}))}},A=l(3744);const C=(0,A.Z)(Z,[["render",I],["__scopeId","data-v-2247cfd9"]]);var N=C},8569:function(t,e,l){l.r(e),l.d(e,{default:function(){return d}});var n=l(6252),o=l(3577);const s={class:"menu_section"},i={class:"menu_con"};function a(t,e,l,a,c,r){const u=(0,n.up)("v-list-item-title"),d=(0,n.up)("v-list-item"),m=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("section",s,[(0,n._)("div",i,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(c.menus,((t,e)=>((0,n.wg)(),(0,n.iD)("div",{key:e,class:"list_con"},[(0,n.Wm)(m,{to:t.value},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{value:e},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{class:"list"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(t.title),1)])),_:2},1024)])),_:2},1032,["value"])])),_:2},1032,["to"])])))),128))])])}var c={name:"Menu",components:{},data(){return{menus:[{title:"회사소개",value:"/Intro"},{title:"회사소식",value:"/News"},{title:"서비스",value:"/Service"},{title:"문의&의뢰",value:"/Contact"},{title:"채용",value:"/Employ"}]}}},r=l(3744);const u=(0,r.Z)(c,[["render",a],["__scopeId","data-v-142424a2"]]);var d=u},7526:function(t,e,l){l.d(e,{Z:function(){return f}});var n=l(6252),o=l(3577),s=l(1730);const i=t=>((0,n.dD)("data-v-1d2a269d"),t=t(),(0,n.Cn)(),t),a={class:"subNav"},c=i((()=>(0,n._)("img",{src:s,class:"blogo"},null,-1))),r={class:"menu_list"},u=i((()=>(0,n._)("div",{class:"bar_con"},[(0,n._)("span",{class:"bar1"}),(0,n._)("span",{class:"bar2"}),(0,n._)("span",{class:"bar3"})],-1))),d=[u];function m(t,e,l,s,i,u){const m=(0,n.up)("router-link"),v=(0,n.up)("v-col"),p=(0,n.up)("v-spacer"),_=(0,n.up)("v-list-item-title"),g=(0,n.up)("v-list-item"),f=(0,n.up)("v-row"),w=(0,n.up)("Menu");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",a,[(0,n.Wm)(f,{class:"nav_con"},{default:(0,n.w5)((()=>[(0,n.Wm)(v,{class:"nav_logo",cols:"4"},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{to:"/"},{default:(0,n.w5)((()=>[c])),_:1})])),_:1}),(0,n.Wm)(p),(0,n.Wm)(v,{cols:"8",class:"menu_con"},{default:(0,n.w5)((()=>[(0,n._)("div",r,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.menus,((t,e)=>((0,n.wg)(),(0,n.j4)(m,{key:e,to:t.value},{default:(0,n.w5)((()=>[(0,n.Wm)(g,{value:e},{default:(0,n.w5)((()=>[(0,n.Wm)(_,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(t.title),1)])),_:2},1024)])),_:2},1032,["value"])])),_:2},1032,["to"])))),128))])])),_:1}),(0,n.Wm)(v,{cols:"8",class:"small_nav"},{default:(0,n.w5)((()=>[(0,n._)("div",{class:"ham",ref:"hamElement",onClick:e[0]||(e[0]=(...t)=>u.stopScrolling&&u.stopScrolling(...t))},d,512)])),_:1})])),_:1})]),t.menu_state?((0,n.wg)(),(0,n.j4)(w,{key:0})):(0,n.kq)("",!0)])}var v=l(8569),p={name:"SubNav",components:{Menu:v["default"]},data:()=>({menu_state:!1,scrollLock:!1,menus:[{title:"회사소개",value:"/Intro"},{title:"회사소식",value:"/News"},{title:"서비스",value:"/Service"},{title:"문의&의뢰",value:"/Contact"},{title:"채용",value:"/Employ"}]}),mounted(){this.$nextTick((()=>{const t=this.$refs.hamElement;t.addEventListener("click",(function(){this.classList.toggle("active")}))}))},beforeUnmount(){this.removeStopEvent()},methods:{stopScrolling(){this.scrollLock=!this.scrollLock,this.menu_state=!this.menu_state,this.scrollLock?(window.addEventListener("wheel",this.stopEvent,{passive:!1}),window.addEventListener("touchmove",this.stopEvent,{passive:!1})):(window.removeEventListener("wheel",this.stopEvent),window.removeEventListener("touchmove",this.stopEvent))},stopEvent(t){t.preventDefault(),t.stopPropagation()},removeStopEvent(){this.scrollLock&&(window.removeEventListener("wheel",this.stopEvent),window.removeEventListener("touchmove",this.stopEvent))}}},_=l(3744);const g=(0,_.Z)(p,[["render",m],["__scopeId","data-v-1d2a269d"]]);var f=g},8665:function(t,e,l){t.exports=l.p+"img/blog.912c515c.svg"},1136:function(t,e,l){t.exports=l.p+"img/certification.170cc81d.svg"},7093:function(t,e,l){t.exports=l.p+"img/insta.0892f4d8.svg"},1308:function(t,e,l){t.exports=l.p+"img/locate.875323f8.svg"},8943:function(t,e,l){t.exports=l.p+"img/message.0018a4b8.svg"},3544:function(t,e,l){t.exports=l.p+"img/personal.1dc63998.svg"},1730:function(t,e,l){t.exports=l.p+"img/scrollblogo.b2d0337b.svg"},7695:function(t,e,l){t.exports=l.p+"img/whitelogo.a0039019.svg"},7846:function(t,e,l){t.exports=l.p+"img/employ_communicate.d87f24c6.svg"},9686:function(t,e,l){t.exports=l.p+"img/employ_tech.e885b92e.svg"},9172:function(t,e,l){t.exports=l.p+"img/employ_trend.d3549352.svg"},1510:function(t,e,l){t.exports=l.p+"img/talent.26b25fe8.svg"}}]);
//# sourceMappingURL=971.2fbb6c3b.js.map