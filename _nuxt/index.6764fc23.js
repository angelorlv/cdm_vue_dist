import g from"./inputtext.esm.d194b3fe.js";import y from"./textarea.esm.b58dfbc8.js";import V from"./button.esm.bcf21a45.js";import b from"./toast.esm.53ed4031.js";import{u as h,r as i,y as E,c as N,a as e,b as r,q as o,F as T,o as U}from"./entry.df8e9396.js";import"./basecomponent.esm.965b7ac9.js";import"./badge.esm.efd4914e.js";import"./index.esm.eae3dad3.js";import"./baseicon.esm.1654ab2b.js";import"./portal.esm.96a02b93.js";import"./index.esm.b5f09101.js";import"./index.esm.f7addde6.js";import"./index.esm.26e4c084.js";import"./index.esm.dee6e023.js";const $={class:"mt-2 flex flex-col text-gray-700"},B={class:"flex"},k={class:"flex flex-col p-2 mr-2"},A=e("span",{class:"text-green-500 font-bold"}," Nom d'utilisateur ",-1),D={class:"flex flex-col p-2 mr-2"},P=e("span",{class:"text-green-500 font-bold"}," Nom de créateur ",-1),w={class:"flex"},F={class:"flex flex-col p-2 mr-2"},S=e("span",{class:"text-green-500 font-bold"}," Email ",-1),j={class:"flex"},q={class:"flex flex-col p-2 mr-2"},C=e("span",{class:"text-green-500 font-bold"}," Description ",-1),I={class:"flex flex-col p-2 mr-2"},M=e("span",{class:"text-green-500 font-bold"}," Adresse ",-1),O={class:"mb-2 flex p-2"},se={__name:"index",setup(z){const n=h(),p=i({}),t=i({}),u=i(0);async function f(){try{const s=await $fetch("api/a/cre/profil");s.status?(p.value=s.profil,t.value=Object.assign(p.value),u.value=s.nbproduct):n.add({severity:"error",detail:s.message,summary:"Erreur de récupération des données"})}catch{n.add({severity:"error",detail:"Erreur de connexion",summary:"Tentative de connexion"})}}const d=i(!1);async function _(){d.value=!0;try{const s=await $fetch("/api/a/profil/modif",{method:"put",body:{pr:t.value}});s.status?n.add({severity:"success",summary:"Sauvegarde de profil",detail:"Profil bien sauvegarder"}):n.add({severity:"error",summary:"Sauvegarde de profil",detail:s.message})}catch{n.add({severity:"error",summary:"Erreur de connexion",detail:"Tentative de connexion"})}d.value=!1}return E(()=>{f()}),(s,l)=>{const c=g,m=y,x=V,v=b;return U(),N(T,null,[e("div",$,[e("div",B,[e("div",k,[A,r(c,{modelValue:o(t).cu_login,"onUpdate:modelValue":l[0]||(l[0]=a=>o(t).cu_login=a),placeholder:"Nom d'utilisateur",class:"p-inputtext-sm"},null,8,["modelValue"])]),e("div",D,[P,r(c,{modelValue:o(t).cre_label,"onUpdate:modelValue":l[1]||(l[1]=a=>o(t).cre_label=a),placeholder:"Nom de créateur",class:"p-inputtext-sm"},null,8,["modelValue"])])]),e("div",w,[e("div",F,[S,r(c,{modelValue:o(t).cu_email,"onUpdate:modelValue":l[2]||(l[2]=a=>o(t).cu_email=a),placeholder:"Adresse Email",class:"p-inputtext-sm"},null,8,["modelValue"])])]),e("div",j,[e("div",q,[C,r(m,{modelValue:o(t).cre_desc,"onUpdate:modelValue":l[3]||(l[3]=a=>o(t).cre_desc=a),placeholder:"Description",class:"p-inputtext-sm"},null,8,["modelValue"])]),e("div",I,[M,r(m,{modelValue:o(t).cre_adresse,"onUpdate:modelValue":l[4]||(l[4]=a=>o(t).cre_adresse=a),placeholder:"Adresse",class:"p-inputtext-sm"},null,8,["modelValue"])])]),e("div",O,[r(x,{label:"Enregistrer",icon:"pi pi-save",onClick:_,loading:o(d),class:"p-button-sm"},null,8,["loading"])])]),r(v)],64)}}};export{se as default};
