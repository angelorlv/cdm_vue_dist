import B from"./button.esm.bcf21a45.js";import{s as h}from"./index.esm.1e91bb99.js";import S from"./tieredmenu.esm.3de10e4a.js";import{E as w,U as g,I as b,o as c,c as C,L as l,b as d,w as r,C as m,a as I,K as a,n as $,M as D,N as k}from"./entry.df8e9396.js";import{s as P}from"./basecomponent.esm.965b7ac9.js";import"./badge.esm.efd4914e.js";import"./index.esm.eae3dad3.js";import"./baseicon.esm.1654ab2b.js";import"./overlayeventbus.esm.8885463a.js";import"./portal.esm.96a02b93.js";import"./index.esm.1a6e3aea.js";function s(t){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(t)}function u(t,e,n){return e=z(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function z(t){var e=E(t,"string");return s(e)==="symbol"?e:String(e)}function E(t,e){if(s(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var p=n.call(t,e||"default");if(s(p)!=="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var V=`
@layer primevue {
    .p-splitbutton {
        display: inline-flex;
        position: relative;
    }

    .p-splitbutton .p-splitbutton-defaultbutton,
    .p-splitbutton.p-button-rounded > .p-splitbutton-defaultbutton.p-button,
    .p-splitbutton.p-button-outlined > .p-splitbutton-defaultbutton.p-button {
        flex: 1 1 auto;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right: 0 none;
    }

    .p-splitbutton-menubutton,
    .p-splitbutton.p-button-rounded > .p-splitbutton-menubutton.p-button,
    .p-splitbutton.p-button-outlined > .p-splitbutton-menubutton.p-button {
        display: flex;
        align-items: center;
        justify-content: center;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .p-splitbutton .p-menu {
        min-width: 100%;
    }

    .p-fluid .p-splitbutton {
        display: flex;
    }
}
`,Z={root:function(e){var n=e.props;return["p-splitbutton p-component",u(u(u(u(u(u(u({},"p-button-".concat(n.severity),n.severity),"p-button-raised",n.raised),"p-button-rounded",n.rounded),"p-button-text",n.text),"p-button-outlined",n.outlined),"p-button-sm",n.size==="small"),"p-button-lg",n.size==="large")]},button:"p-splitbutton-defaultbutton",menuButton:"p-splitbutton-menubutton"},K=w.extend({name:"splitbutton",css:V,classes:Z}),T={name:"BaseSplitButton",extends:P,props:{label:{type:String,default:null},icon:{type:String,default:null},model:{type:Array,default:null},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},appendTo:{type:String,default:"body"},disabled:{type:Boolean,default:!1},class:{type:null,default:null},style:{type:null,default:null},buttonProps:{type:null,default:null},menuButtonProps:{type:null,default:null},menuButtonIcon:{type:String,default:void 0},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1}},style:K,provide:function(){return{$parentInstance:this}}},N={name:"SplitButton",extends:T,emits:["click"],data:function(){return{isExpanded:!1}},mounted:function(){var e=this;this.$watch("$refs.menu.visible",function(n){e.isExpanded=n})},methods:{onDropdownButtonClick:function(e){e&&e.preventDefault(),this.$refs.menu.toggle({currentTarget:this.$el,relatedTarget:this.$refs.button.$el}),this.isExpanded=this.$refs.menu.visible},onDropdownKeydown:function(e){(e.code==="ArrowDown"||e.code==="ArrowUp")&&(this.onDropdownButtonClick(),e.preventDefault())},onDefaultButtonClick:function(e){this.isExpanded&&this.$refs.menu.hide(e),this.$emit("click",e)}},computed:{ariaId:function(){return g()},containerClass:function(){return[this.cx("root"),this.class]}},components:{PVSButton:B,PVSMenu:S,ChevronDownIcon:h}},M=["data-pc-severity"];function A(t,e,n,p,y,i){var f=b("PVSButton"),v=b("PVSMenu");return c(),C("div",a({class:i.containerClass,style:t.style},t.ptm("root"),{"data-pc-name":"splitbutton","data-pc-severity":t.severity}),[l(t.$slots,"default",{},function(){return[d(f,a({type:"button",class:t.cx("button"),label:t.label,disabled:t.disabled,severity:t.severity,text:t.text,outlined:t.outlined,size:t.size,"aria-label":t.label,onClick:i.onDefaultButtonClick,pt:t.ptm("button")},t.buttonProps,{unstyled:t.unstyled,"data-pc-section":"button"}),{icon:r(function(o){return[l(t.$slots,"icon",{class:m(o.class)},function(){return[I("span",a({class:[t.icon,o.class]},t.ptm("button").icon,{"data-pc-section":"buttonicon"}),null,16)]})]}),default:r(function(){return[l(t.$slots,"buttoncontent")]}),_:3},16,["class","label","disabled","severity","text","outlined","size","aria-label","onClick","pt","unstyled"])]}),d(f,a({ref:"button",type:"button",class:t.cx("menuButton"),disabled:t.disabled,"aria-haspopup":"true","aria-expanded":y.isExpanded,"aria-controls":i.ariaId+"_overlay",onClick:i.onDropdownButtonClick,onKeydown:i.onDropdownKeydown,pt:t.ptm("menuButton"),severity:t.severity,text:t.text,outlined:t.outlined,size:t.size},t.menuButtonProps,{unstyled:t.unstyled,"data-pc-section":"menubutton"}),{icon:r(function(o){return[l(t.$slots,"menubuttonicon",{class:m(o.class)},function(){return[(c(),$(D(t.menuButtonIcon?"span":"ChevronDownIcon"),a({class:[t.menuButtonIcon,o.class]},t.ptm("menuButton").icon,{"data-pc-section":"menubuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","disabled","aria-expanded","aria-controls","onClick","onKeydown","pt","severity","text","outlined","size","unstyled"]),d(v,{ref:"menu",id:i.ariaId+"_overlay",model:t.model,popup:!0,autoZIndex:t.autoZIndex,baseZIndex:t.baseZIndex,appendTo:t.appendTo,unstyled:t.unstyled,pt:t.ptm("menu")},k({_:2},[t.$slots.menuitemicon?{name:"itemicon",fn:r(function(o){return[l(t.$slots,"menuitemicon",{item:o.item,class:m(o.class)})]}),key:"0"}:void 0,t.$slots.item?{name:"item",fn:r(function(o){return[l(t.$slots,"item",{item:o.item,hasSubmenu:o.hasSubmenu,label:o.label,props:o.props})]}),key:"1"}:void 0]),1032,["id","model","autoZIndex","baseZIndex","appendTo","unstyled","pt"])],16,M)}N.render=A;export{N as default};
