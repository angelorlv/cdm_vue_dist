import{G as d,L as t,o as r,n as s,ak as l,A as i}from"./entry.666009fa.js";var u={name:"Portal",props:{appendTo:{type:String,default:"body"},disabled:{type:Boolean,default:!1}},data:function(){return{mounted:!1}},mounted:function(){this.mounted=d.isClient()},computed:{inline:function(){return this.disabled||this.appendTo==="self"}}};function p(e,f,n,m,o,a){return a.inline?t(e.$slots,"default",{key:0}):o.mounted?(r(),s(l,{key:1,to:n.appendTo},[t(e.$slots,"default")],8,["to"])):i("",!0)}u.render=p;export{u as s};