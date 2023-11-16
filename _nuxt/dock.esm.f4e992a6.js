import{s as x}from"./basecomponent.esm.2b1e363f.js";import{E as A,U as b,O as D,G as c,K as l,R as L,ap as K,J as h,o as d,c as u,a as y,F as P,z as M,P as g,n as k,C,M as I,I as T,b as F}from"./entry.d1707d97.js";var E=`
@layer primevue {
    .p-dock {
        position: absolute;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
    }

    .p-dock-list-container {
        display: flex;
        pointer-events: auto;
    }

    .p-dock-list {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-dock-item {
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        will-change: transform;
    }

    .p-dock-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        cursor: default;
    }

    .p-dock-item-second-prev,
    .p-dock-item-second-next {
        transform: scale(1.2);
    }

    .p-dock-item-prev,
    .p-dock-item-next {
        transform: scale(1.4);
    }

    .p-dock-item-current {
        transform: scale(1.6);
        z-index: 1;
    }

    /* Position */
    /* top */
    .p-dock-top {
        left: 0;
        top: 0;
        width: 100%;
    }

    .p-dock-top .p-dock-item {
        transform-origin: center top;
    }

    /* bottom */
    .p-dock-bottom {
        left: 0;
        bottom: 0;
        width: 100%;
    }

    .p-dock-bottom .p-dock-item {
        transform-origin: center bottom;
    }

    /* right */
    .p-dock-right {
        right: 0;
        top: 0;
        height: 100%;
    }

    .p-dock-right .p-dock-item {
        transform-origin: center right;
    }

    .p-dock-right .p-dock-list {
        flex-direction: column;
    }

    /* left */
    .p-dock-left {
        left: 0;
        top: 0;
        height: 100%;
    }

    .p-dock-left .p-dock-item {
        transform-origin: center left;
    }

    .p-dock-left .p-dock-list {
        flex-direction: column;
    }
}
`,B={root:function(n){var t=n.props;return["p-dock p-component","p-dock-".concat(t.position)]},container:"p-dock-list-container",menu:"p-dock-list",menuitem:function(n){var t=n.instance,o=n.processedItem,r=n.index,i=n.id;return["p-dock-item",{"p-focus":t.isItemActive(i),"p-disabled":t.disabled(o),"p-dock-item-second-prev":t.currentIndex-2===r,"p-dock-item-prev":t.currentIndex-1===r,"p-dock-item-current":t.currentIndex===r,"p-dock-item-next":t.currentIndex+1===r,"p-dock-item-second-next":t.currentIndex+2===r}]},content:"p-menuitem-content",action:"p-dock-link",icon:"p-dock-icon"},N=A.extend({name:"dock",css:E,classes:B}),U={name:"BaseDock",extends:x,props:{position:{type:String,default:"bottom"},model:null,class:null,style:null,tooltipOptions:null,menuId:{type:String,default:null},tabindex:{type:Number,default:0},"aria-label":{type:String,default:null},"aria-labelledby":{type:String,default:null}},style:N,provide:function(){return{$parentInstance:this}}};function v(e){return R(e)||H(e)||z(e)||j()}function j(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z(e,n){if(e){if(typeof e=="string")return m(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return m(e,n)}}function H(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function R(e){if(Array.isArray(e))return m(e)}function m(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}var O={name:"DockSub",hostName:"Dock",extends:x,emits:["focus","blur"],props:{position:{type:String,default:"bottom"},model:{type:Array,default:null},templates:{type:null,default:null},tooltipOptions:null,menuId:{type:String,default:null},tabindex:{type:Number,default:0},"aria-label":{type:String,default:null},"aria-labelledby":{type:String,default:null}},data:function(){return{id:this.menuId,currentIndex:-3,focused:!1,focusedOptionIndex:-1}},watch:{menuId:function(n){this.id=n||b()}},mounted:function(){this.id=this.id||b()},methods:{getItemId:function(n){return"".concat(this.id,"_").concat(n)},getItemProp:function(n,t){return n&&n.item?D.getItemValue(n.item[t]):void 0},getPTOptions:function(n,t,o){return this.ptm(n,{context:{index:o,item:t,active:this.isItemActive(this.getItemId(o))}})},isSameMenuItem:function(n){return n.currentTarget&&(n.currentTarget.isSameNode(n.target)||n.currentTarget.isSameNode(n.target.closest('[data-pc-section="menuitem"]')))},isItemActive:function(n){return n===this.focusedOptionIndex},onListMouseLeave:function(){this.currentIndex=-3},onItemMouseEnter:function(n){this.currentIndex=n},onItemClick:function(n,t){if(this.isSameMenuItem(n)){var o=this.getItemProp(t,"command");o&&o({originalEvent:n,item:t.item})}},onListFocus:function(n){this.focused=!0,this.changeFocusedOptionIndex(0),this.$emit("focus",n)},onListBlur:function(n){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",n)},onListKeyDown:function(n){switch(n.code){case"ArrowDown":{(this.position==="left"||this.position==="right")&&this.onArrowDownKey(),n.preventDefault();break}case"ArrowUp":{(this.position==="left"||this.position==="right")&&this.onArrowUpKey(),n.preventDefault();break}case"ArrowRight":{(this.position==="top"||this.position==="bottom")&&this.onArrowDownKey(),n.preventDefault();break}case"ArrowLeft":{(this.position==="top"||this.position==="bottom")&&this.onArrowUpKey(),n.preventDefault();break}case"Home":{this.onHomeKey(),n.preventDefault();break}case"End":{this.onEndKey(),n.preventDefault();break}case"Enter":case"Space":{this.onSpaceKey(n),n.preventDefault();break}}},onArrowDownKey:function(){var n=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(n)},onArrowUpKey:function(){var n=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(n)},onHomeKey:function(){this.changeFocusedOptionIndex(0)},onEndKey:function(){this.changeFocusedOptionIndex(c.find(this.$refs.list,'li[data-pc-section="menuitem"][data-p-disabled="false"]').length-1)},onSpaceKey:function(){var n=c.findSingle(this.$refs.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),t=n&&c.findSingle(n,'[data-pc-section="action"]');t?t.click():n&&n.click()},findNextOptionIndex:function(n){var t=c.find(this.$refs.list,'li[data-pc-section="menuitem"][data-p-disabled="false"]'),o=v(t).findIndex(function(r){return r.id===n});return o>-1?o+1:0},findPrevOptionIndex:function(n){var t=c.find(this.$refs.list,'li[data-pc-section="menuitem"][data-p-disabled="false"]'),o=v(t).findIndex(function(r){return r.id===n});return o>-1?o-1:0},changeFocusedOptionIndex:function(n){var t=c.find(this.$refs.list,'li[data-pc-section="menuitem"][data-p-disabled="false"]'),o=n>=t.length?t.length-1:n<0?0:n;this.focusedOptionIndex=t[o].getAttribute("id")},disabled:function(n){return typeof n.disabled=="function"?n.disabled():n.disabled},getMenuItemProps:function(n,t){return{action:l({tabindex:-1,"aria-hidden":!0,class:this.cx("action")},this.getPTOptions("action",n,t)),icon:l({class:[this.cx("icon"),n.icon]},this.getPTOptions("icon",n,t))}}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}},directives:{ripple:L,tooltip:K}},V=["id","aria-orientation","aria-activedescendant","tabindex","aria-label","aria-labelledby"],q=["id","aria-label","aria-disabled","onClick","onMouseenter","data-p-focused","data-p-disabled"],G=["href","target"];function J(e,n,t,o,r,i){var p=h("ripple"),w=h("tooltip");return d(),u("div",l({class:e.cx("container")},e.ptm("container")),[y("ul",l({ref:"list",id:r.id,class:e.cx("menu"),role:"menu","aria-orientation":t.position==="bottom"||t.position==="top"?"horizontal":"vertical","aria-activedescendant":r.focused?i.focusedOptionId:void 0,tabindex:t.tabindex,"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,onFocus:n[0]||(n[0]=function(){return i.onListFocus&&i.onListFocus.apply(i,arguments)}),onBlur:n[1]||(n[1]=function(){return i.onListBlur&&i.onListBlur.apply(i,arguments)}),onKeydown:n[2]||(n[2]=function(){return i.onListKeyDown&&i.onListKeyDown.apply(i,arguments)}),onMouseleave:n[3]||(n[3]=function(){return i.onListMouseLeave&&i.onListMouseLeave.apply(i,arguments)})},e.ptm("menu")),[(d(!0),u(P,null,M(t.model,function(a,s){return d(),u("li",l({key:s,id:i.getItemId(s),class:e.cx("menuitem",{processedItem:a,index:s,id:i.getItemId(s)}),role:"menuitem","aria-label":a.label,"aria-disabled":i.disabled(a),onClick:function(f){return i.onItemClick(f,a)},onMouseenter:function(f){return i.onItemMouseEnter(s)}},i.getPTOptions("menuitem",a,s),{"data-p-focused":i.isItemActive(i.getItemId(s)),"data-p-disabled":i.disabled(a)||!1}),[y("div",l({class:e.cx("content")},i.getPTOptions("content",a,s)),[t.templates.item?(d(),k(I(t.templates.item),{key:1,item:a,index:s,label:a.label,props:i.getMenuItemProps(a,s)},null,8,["item","index","label","props"])):g((d(),u("a",l({key:0,href:a.url,class:e.cx("action"),target:a.target,tabindex:"-1","aria-hidden":"true"},i.getPTOptions("action",a,s)),[t.templates.icon?(d(),k(I(t.templates.icon),{key:1,item:a,class:C(e.cx("icon"))},null,8,["item","class"])):g((d(),u("span",l({key:0,class:[e.cx("icon"),a.icon]},i.getPTOptions("icon",a,s)),null,16)),[[p]])],16,G)),[[w,{value:a.label,disabled:!t.tooltipOptions},t.tooltipOptions]])],16)],16,q)}),128))],16,V)],16)}O.render=J;var W={name:"Dock",extends:U,computed:{containerClass:function(){return[this.class,this.cx("root")]}},components:{DockSub:O}};function Q(e,n,t,o,r,i){var p=T("DockSub");return d(),u("div",l({class:i.containerClass,style:e.style},e.ptm("root"),{"data-pc-name":"dock"}),[F(p,{model:e.model,templates:e.$slots,tooltipOptions:e.tooltipOptions,position:e.position,menuId:e.menuId,"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,tabindex:e.tabindex,pt:e.pt,unstyled:e.unstyled},null,8,["model","templates","tooltipOptions","position","menuId","aria-label","aria-labelledby","tabindex","pt","unstyled"])],16)}W.render=Q;export{W as default};
