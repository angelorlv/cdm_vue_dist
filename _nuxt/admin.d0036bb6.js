import g from"./inlinemessage.esm.592be61d.js";import w from"./inputtext.esm.9166e375.js";import{v as x,r as n,au as k,q as s,c as m,L as V,a as p,n as b,w as B,A,b as C,W as N,s as $,o as r,d as K,t as M}from"./entry.666009fa.js";import{u as S}from"./global.dfb72d1c.js";import"./basecomponent.esm.bd035da6.js";import"./index.esm.c455c5d4.js";import"./baseicon.esm.7641c93a.js";import"./index.esm.cb187b7f.js";import"./index.esm.844658d9.js";const T={key:0,class:"w-screen"},E={key:1,class:"h-screen w-screen flex justify-center items-center"},I={class:"flex flex-col"},P=p("span",{class:""}," Mot de passe Admin ",-1),H={__name:"admin",setup(R){const d=S(),{user:t,connected:o}=x(d),a=n(""),c=n(!1),l=n(""),i=n(!1);async function f(){c.value=!0;try{const e=await $fetch("/api/p/admin/pass",{method:"post",body:{pass:a.value}});e.status?(t.value=e.u,o.value=!0):(i.value=!0,l.value=e.message,console.log("Erreur Connexion Admin"))}catch(e){console.log(e)}}async function _(){try{const e=await $fetch("api/p/status-connexion");e.status?(t.value=e.user,o.value=!0):(t.value={},o.value=!1)}catch(e){console.log(e)}}return k(()=>{_()}),(e,u)=>{const v=g,y=w;return s(o)&&s(t).cu_type=="admin"?(r(),m("div",T,[V(e.$slots,"default")])):(r(),m("div",E,[p("div",I,[s(i)&&s(c)?(r(),b(v,{key:0,severity:"info",class:"mb-2"},{default:B(()=>[K(M(s(l)),1)]),_:1})):A("",!0),P,C(y,{onKeypress:N(f,["enter"]),modelValue:s(a),"onUpdate:modelValue":u[0]||(u[0]=h=>$(a)?a.value=h:null),placeholder:"Password",type:"password"},null,8,["onKeypress","modelValue"])])]))}}};export{H as default};