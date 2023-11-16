import{_ as V}from"./nuxt-link.569d12e6.js";import z from"./button.esm.33b0c810.js";import L from"./avatar.esm.3bfa32d1.js";import R from"./badge.esm.75e0f9c7.js";import S from"./menu.esm.155e02d5.js";import A from"./toast.esm.50398791.js";import{v as F,u as M,x as P,r as h,y as U,J as j,c as l,a as o,b as s,w as r,q as a,L as q,F as E,o as c,d,t as i,P as G,K as I,C as J,n as K,A as g}from"./entry.aac20fd1.js";import{u as H}from"./global.5d70810b.js";import"./index.esm.a9a0ec75.js";import"./baseicon.esm.d13a52ad.js";import"./basecomponent.esm.a2d5fbe3.js";import"./overlayeventbus.esm.501fcd92.js";import"./portal.esm.54375785.js";import"./index.esm.2269526c.js";import"./index.esm.ab7035cb.js";import"./index.esm.2fdb13f5.js";import"./index.esm.ed4fc3c6.js";const O=""+new URL("logo.04fcd501.jpeg",import.meta.url).href,Q={class:"h-[70px] overflow-hidden flex items-center px-5"},W=o("img",{src:O,class:"h-[70px]",alt:"",srcset:""},null,-1),X={class:"flex text-gray-700 ml-10 text-xl items-end"},Y=o("span",{class:"flex-grow"},null,-1),Z={key:0,class:"flex items-center"},ee={key:1,class:""},te={class:"flex flex-col p-2 px-5 border-b"},oe={class:"text-gray-500 text-xs"},se={class:"text-primary font-bold"},ae={class:"ml-2"},ne={key:1,class:"ml-auto border-1 surface-border border-round surface-100 text-xs p-1"},Ce={__name:"default",setup(re){const v=H(),{user:n,connected:p}=F(v);M();const _=P(),f=h(),b=h([{label:"Deconnexion",icon:"pi pi-upload",command:()=>{w()}}]),y=e=>{f.value.toggle(e)};async function k(){try{const e=await $fetch("api/p/status-connexion");e.status?(n.value=e.user,p.value=!0):(n.value={},p.value=!1)}catch{}}async function w(){try{(await $fetch("/api/a/deconnect")).status&&(n.value={},p.value=!1)}catch(e){console.log(e)}}return U(()=>{k()}),(e,u)=>{const m=V,x=z,C=L,$=R,B=S,N=A,T=j("ripple");return c(),l(E,null,[o("div",Q,[W,o("div",X,[s(m,{class:"mr-5 hover:text-gray-800 capitalize",to:"/"},{default:r(()=>[d(" à la mode ")]),_:1}),s(m,{class:"mr-5 hover:text-gray-800",to:"/"},{default:r(()=>[d(" Trouvez des créateurs ")]),_:1})]),Y,a(p)?(c(),l("div",ee,[s(C,{onClick:y,label:a(n).cu_login[0],class:"cursor-pointer",shape:"circle"},null,8,["label"])])):(c(),l("div",Z,[s(x,{onClick:u[0]||(u[0]=t=>a(_).push("/login")),class:"p-button-text text-gray-600 mr-2",label:"Connexion",rounded:""}),s(x,{rounded:"",label:"Inscription",onClick:u[1]||(u[1]=t=>a(_).push("/sign"))})]))]),s(B,{model:a(b),ref_key:"menu",ref:f,popup:!0,class:"w-[200px]"},{start:r(()=>[o("span",te,[s(m,{to:"/cr",class:"font-bold hover:underline hover:text-green-500"},{default:r(()=>[d(i(a(n).cu_login),1)]),_:1}),o("span",oe,i(a(n).cu_email),1)])]),submenuheader:r(({item:t})=>[o("span",se,i(t.label),1)]),item:r(({item:t,props:D})=>[G((c(),l("a",I({class:"flex align-items-center"},D.action),[o("span",{class:J(t.icon)},null,2),o("span",ae,i(t.label),1),t.badge?(c(),K($,{key:0,class:"ml-auto",value:t.badge},null,8,["value"])):g("",!0),t.shortcut?(c(),l("span",ne,i(t.shortcut),1)):g("",!0)],16)),[[T]])]),_:1},8,["model"]),q(e.$slots,"default"),s(N)],64)}}};export{Ce as default};
