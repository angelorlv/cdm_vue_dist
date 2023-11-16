import{s as o}from"./basecomponent.esm.965b7ac9.js";import{E as i,o as s,c as t,n as p,K as a,M as l,A as c,L as u,a as g,t as d}from"./entry.df8e9396.js";var m=`
@layer primevue {
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .p-tag-icon,
    .p-tag-value,
    .p-tag-icon.pi {
        line-height: 1.5;
    }

    .p-tag.p-tag-rounded {
        border-radius: 10rem;
    }
}
`,v={root:function(r){var n=r.props;return["p-tag p-component",{"p-tag-info":n.severity==="info","p-tag-success":n.severity==="success","p-tag-warning":n.severity==="warning","p-tag-danger":n.severity==="danger","p-tag-rounded":n.rounded}]},icon:"p-tag-icon",value:"p-tag-value"},y=i.extend({name:"tag",css:m,classes:v}),f={name:"BaseTag",extends:o,props:{value:null,severity:null,rounded:Boolean,icon:String},style:y,provide:function(){return{$parentInstance:this}}},$={name:"Tag",extends:f};function B(e,r,n,k,S,h){return s(),t("span",a({class:e.cx("root")},e.ptm("root"),{"data-pc-name":"tag"}),[e.$slots.icon?(s(),p(l(e.$slots.icon),a({key:0,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(s(),t("span",a({key:1,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):c("",!0),u(e.$slots,"default",{},function(){return[g("span",a({class:e.cx("value")},e.ptm("value")),d(e.value),17)]})],16)}$.render=B;export{$ as default};
