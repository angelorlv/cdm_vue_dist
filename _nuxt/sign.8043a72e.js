import C from"./button.esm.33b0c810.js";import I from"./inlinemessage.esm.2e8fee3c.js";import S from"./inputtext.esm.dd81b952.js";import T from"./togglebutton.esm.5841927f.js";import{_ as B}from"./nuxt-link.569d12e6.js";import{v as U,u as E,x as R,r as n,c as x,b as a,q as e,a as s,n as $,w as g,A as b,o as m,d as v,t as L}from"./entry.aac20fd1.js";import{u as P}from"./global.5d70810b.js";import"./badge.esm.75e0f9c7.js";import"./basecomponent.esm.a2d5fbe3.js";import"./index.esm.a9a0ec75.js";import"./baseicon.esm.d13a52ad.js";import"./index.esm.2269526c.js";import"./index.esm.ab7035cb.js";import"./index.esm.ed4fc3c6.js";const q={class:"h-screen w-screen flex relative overflow-auto"},D={class:"max-h-max overflow-auto w-full lg:w-2/3 text-gray-600 bg-gray-50 flex justify-center"},F={class:"mt-5 flex flex-col w-[300px]"},M=s("span",{class:"w-full text-center mb-3 text-2xl font-bold"}," INSCRIPTION ",-1),O={class:"flex flex-col mb-5"},j=s("span",{class:""}," Nom d'utilisateur ",-1),A={class:"flex flex-col mb-5"},G=s("span",{class:""}," Votre Email ",-1),z={class:"flex flex-col mb-5"},H=s("span",{class:""}," Mot de passe ",-1),J={key:1,class:"flex flex-col mb-5"},K=s("span",{class:""}," Nom en tant que créateur ",-1),Q={class:"text-center"},W=s("div",{class:"w-1/3 bg-gray-100 hidden lg:block"},null,-1),pe={__name:"sign",setup(X){const h=P();U(h);const y=E(),i=R(),t=n({cu_pass:"",cu_login:"",cu_email:"",cu_creator:!0,cre_label:""}),p=n(!1),u=n(!1),d=n(!1),_=n("");async function V(){p.value=!0,u.value=!0;try{const r=await $fetch("api/p/sign",{method:"POST",body:{cu:t.value}});r.status?t.value.cu_creator?i.push("/cr"):i.push("/"):(d.value=!0,_.value=r.message)}catch{y.add({severity:"error",summary:"Tentative de connexion",detail:"Problème de connexion. Le client n'arrive pas à se connecter",life:3e3})}u.value=!1}return(r,o)=>{const f=C,w=I,c=S,k=T,N=B;return m(),x("div",q,[a(f,{icon:"pi pi-times",class:"absolute top-5 right-5",onClick:o[0]||(o[0]=l=>e(i).push("/")),rounded:"","aria-label":"Filter"}),s("div",D,[s("div",F,[M,e(d)&&e(p)?(m(),$(w,{key:0,severity:"info",class:""},{default:g(()=>[v(L(e(_)),1)]),_:1})):b("",!0),s("div",O,[j,a(c,{type:"text",placeholder:"Ex : dany12",modelValue:e(t).cu_login,"onUpdate:modelValue":o[1]||(o[1]=l=>e(t).cu_login=l),class:"p-inputtext-sm"},null,8,["modelValue"])]),s("div",A,[G,a(c,{type:"mail",modelValue:e(t).cu_email,"onUpdate:modelValue":o[2]||(o[2]=l=>e(t).cu_email=l),placeholder:"Ex : dany12@gmail.com",class:"p-inputtext-sm"},null,8,["modelValue"])]),s("div",z,[H,a(c,{type:"password",modelValue:e(t).cu_pass,"onUpdate:modelValue":o[3]||(o[3]=l=>e(t).cu_pass=l),placeholder:"**********",class:"p-inputtext-sm"},null,8,["modelValue"])]),e(t).cu_creator?(m(),x("div",J,[K,a(c,{type:"text",modelValue:e(t).cre_label,"onUpdate:modelValue":o[4]||(o[4]=l=>e(t).cre_label=l),placeholder:"Dany F.",class:"p-inputtext-sm"},null,8,["modelValue"])])):b("",!0),a(k,{modelValue:e(t).cu_creator,"onUpdate:modelValue":o[5]||(o[5]=l=>e(t).cu_creator=l),onLabel:"Compte Créateur",offLabel:"Compte Simple",onIcon:"pi pi-check",offIcon:"pi pi-times",class:"mb-5"},null,8,["modelValue"]),a(f,{onClick:V,label:"S'INSCRIRE",loading:e(u),class:"p-button-sm mb-5"},null,8,["loading"]),s("div",Q,[a(N,{to:"/login",class:"hover:underline text-green-600"},{default:g(()=>[v("Se connecter")]),_:1})])])]),W])}}};export{pe as default};