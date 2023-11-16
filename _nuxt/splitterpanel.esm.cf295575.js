import{s as r}from"./basecomponent.esm.a2d5fbe3.js";import{E as p,o as a,c as l,L as i,K as o}from"./entry.aac20fd1.js";var c=`
@layer primevue {
    .p-splitter-panel {
        flex-grow: 1;
    }

    .p-splitter-panel-nested {
        display: flex;
    }

    .p-splitter-panel .p-splitter {
        flex-grow: 1;
        border: 0 none;
    }
}
`,d={root:function(t){var n=t.instance;return["p-splitter-panel",{"p-splitter-panel-nested":n.isNested}]}},u=p.extend({name:"splitterpanel",css:c,classes:d}),m={name:"BaseSplitterPanel",extends:r,props:{size:{type:Number,default:null},minSize:{type:Number,default:null}},style:u,provide:function(){return{$parentInstance:this}}},f={name:"SplitterPanel",extends:m,computed:{isNested:function(){return this.$slots.default().some(function(t){return t.type.name==="Splitter"})},getPTOptions:function(){return{context:{nested:this.isNested}}}}};function v(e,t,n,y,S,s){return a(),l("div",o({ref:"container",class:e.cx("root")},e.ptm("root",s.getPTOptions),{"data-pc-name":"splitterpanel"}),[i(e.$slots,"default")],16)}f.render=v;export{f as default};
