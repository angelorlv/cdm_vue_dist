import{s as I}from"./index.esm.1e91bb99.js";import{s as P}from"./index.esm.48512a35.js";import{E as x,U as m,K as d,G as l,R as w,o as s,c as h,F as E,z as H,a as T,n as p,M as b,t as K,A as v,b as S,w as C,P as D,Q as k,T as O}from"./entry.df8e9396.js";import{s as F}from"./basecomponent.esm.965b7ac9.js";import"./baseicon.esm.1654ab2b.js";var j=`
@layer primevue {
    .p-accordion-header-action {
        cursor: pointer;
        display: flex;
        align-items: center;
        user-select: none;
        position: relative;
        text-decoration: none;
    }
    
    .p-accordion-header-action:focus {
        z-index: 1;
    }
    
    .p-accordion-header-text {
        line-height: 1;
    }
}
`,N={root:"p-accordion p-component",tab:{root:function(e){var n=e.instance,a=e.index;return["p-accordion-tab",{"p-accordion-tab-active":n.isTabActive(a)}]},header:function(e){var n=e.instance,a=e.tab,c=e.index;return["p-accordion-header",{"p-highlight":n.isTabActive(c),"p-disabled":n.getTabProp(a,"disabled")}]},headerAction:"p-accordion-header-link p-accordion-header-action",headerIcon:"p-accordion-toggle-icon",headerTitle:"p-accordion-header-text",toggleableContent:"p-toggleable-content",content:"p-accordion-content"}},_=x.extend({name:"accordion",css:j,classes:N}),B={name:"BaseAccordion",extends:F,props:{multiple:{type:Boolean,default:!1},activeIndex:{type:[Number,Array],default:null},lazy:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:_,provide:function(){return{$parentInstance:this}}},U={name:"Accordion",extends:B,emits:["update:activeIndex","tab-open","tab-close","tab-click"],data:function(){return{id:this.$attrs.id,d_activeIndex:this.activeIndex}},watch:{"$attrs.id":function(e){this.id=e||m()},activeIndex:function(e){this.d_activeIndex=e}},mounted:function(){this.id=this.id||m()},methods:{isAccordionTab:function(e){return e.type.name==="AccordionTab"},isTabActive:function(e){return this.multiple?this.d_activeIndex&&this.d_activeIndex.includes(e):this.d_activeIndex===e},getTabProp:function(e,n){return e.props?e.props[n]:void 0},getKey:function(e,n){return this.getTabProp(e,"header")||n},getTabHeaderActionId:function(e){return"".concat(this.id,"_").concat(e,"_header_action")},getTabContentId:function(e){return"".concat(this.id,"_").concat(e,"_content")},getTabPT:function(e,n,a){var c=this.tabs.length,r={props:e.props||{},parent:{props:this.$props,state:this.$data},context:{index:a,count:c,first:a===0,last:a===c-1,active:this.isTabActive(a)}};return d(this.ptm("tab.".concat(n),{tab:r}),this.ptm("accordiontab.".concat(n),{accordiontab:r}),this.ptm("accordiontab.".concat(n),r),this.ptmo(this.getTabProp(e,"pt"),n,r))},onTabClick:function(e,n,a){this.changeActiveIndex(e,n,a),this.$emit("tab-click",{originalEvent:e,index:a})},onTabKeyDown:function(e,n,a){switch(e.code){case"ArrowDown":this.onTabArrowDownKey(e);break;case"ArrowUp":this.onTabArrowUpKey(e);break;case"Home":this.onTabHomeKey(e);break;case"End":this.onTabEndKey(e);break;case"Enter":case"Space":this.onTabEnterKey(e,n,a);break}},onTabArrowDownKey:function(e){var n=this.findNextHeaderAction(e.target.parentElement.parentElement);n?this.changeFocusedTab(e,n):this.onTabHomeKey(e),e.preventDefault()},onTabArrowUpKey:function(e){var n=this.findPrevHeaderAction(e.target.parentElement.parentElement);n?this.changeFocusedTab(e,n):this.onTabEndKey(e),e.preventDefault()},onTabHomeKey:function(e){var n=this.findFirstHeaderAction();this.changeFocusedTab(e,n),e.preventDefault()},onTabEndKey:function(e){var n=this.findLastHeaderAction();this.changeFocusedTab(e,n),e.preventDefault()},onTabEnterKey:function(e,n,a){this.changeActiveIndex(e,n,a),e.preventDefault()},findNextHeaderAction:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=n?e:e.nextElementSibling,c=l.findSingle(a,'[data-pc-section="header"]');return c?l.getAttribute(c,"data-p-disabled")?this.findNextHeaderAction(c.parentElement):l.findSingle(c,'[data-pc-section="headeraction"]'):null},findPrevHeaderAction:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=n?e:e.previousElementSibling,c=l.findSingle(a,'[data-pc-section="header"]');return c?l.getAttribute(c,"data-p-disabled")?this.findPrevHeaderAction(c.parentElement):l.findSingle(c,'[data-pc-section="headeraction"]'):null},findFirstHeaderAction:function(){return this.findNextHeaderAction(this.$el.firstElementChild,!0)},findLastHeaderAction:function(){return this.findPrevHeaderAction(this.$el.lastElementChild,!0)},changeActiveIndex:function(e,n,a){if(!this.getTabProp(n,"disabled")){var c=this.isTabActive(a),r=c?"tab-close":"tab-open";this.multiple?c?this.d_activeIndex=this.d_activeIndex.filter(function(i){return i!==a}):this.d_activeIndex?this.d_activeIndex.push(a):this.d_activeIndex=[a]:this.d_activeIndex=this.d_activeIndex===a?null:a,this.$emit("update:activeIndex",this.d_activeIndex),this.$emit(r,{originalEvent:e,index:a})}},changeFocusedTab:function(e,n){if(n&&(l.focus(n),this.selectOnFocus)){var a=parseInt(n.parentElement.parentElement.dataset.pcIndex,10),c=this.tabs[a];this.changeActiveIndex(e,c,a)}}},computed:{tabs:function(){var e=this;return this.$slots.default().reduce(function(n,a){return e.isAccordionTab(a)?n.push(a):a.children&&a.children instanceof Array&&a.children.forEach(function(c){e.isAccordionTab(c)&&n.push(c)}),n},[])}},components:{ChevronDownIcon:I,ChevronRightIcon:P},directives:{ripple:w}};function f(t){"@babel/helpers - typeof";return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(t)}function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(c){return Object.getOwnPropertyDescriptor(t,c).enumerable})),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?y(Object(n),!0).forEach(function(a){z(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function z(t,e,n){return e=L(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function L(t){var e=R(t,"string");return f(e)==="symbol"?e:String(e)}function R(t,e){if(f(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(f(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var V=["data-pc-index","data-p-active"],M=["data-p-highlight","data-p-disabled"],q=["id","tabindex","aria-disabled","aria-expanded","aria-controls","onClick","onKeydown"],G=["id","aria-labelledby"];function Q(t,e,n,a,c,r){return s(),h("div",d({class:t.cx("root")},t.ptm("root")),[(s(!0),h(E,null,H(r.tabs,function(i,o){return s(),h("div",d({key:r.getKey(i,o),class:t.cx("tab.root",{tab:i,index:o})},r.getTabPT(i,"root",o),{"data-pc-name":"accordiontab","data-pc-index":o,"data-p-active":r.isTabActive(o)}),[T("div",d({style:r.getTabProp(i,"headerStyle"),class:[t.cx("tab.header",{tab:i,index:o}),r.getTabProp(i,"headerClass")]},u(u({},r.getTabProp(i,"headerProps")),r.getTabPT(i,"header",o)),{"data-p-highlight":r.isTabActive(o),"data-p-disabled":r.getTabProp(i,"disabled")}),[T("a",d({id:r.getTabHeaderActionId(o),class:t.cx("tab.headerAction"),tabindex:r.getTabProp(i,"disabled")?-1:t.tabindex,role:"button","aria-disabled":r.getTabProp(i,"disabled"),"aria-expanded":r.isTabActive(o),"aria-controls":r.getTabContentId(o),onClick:function(g){return r.onTabClick(g,i,o)},onKeydown:function(g){return r.onTabKeyDown(g,i,o)}},u(u({},r.getTabProp(i,"headeractionprops")),r.getTabPT(i,"headeraction",o))),[i.children&&i.children.headericon?(s(),p(b(i.children.headericon),{key:0,isTabActive:r.isTabActive(o),active:r.isTabActive(o),index:o},null,8,["isTabActive","active","index"])):r.isTabActive(o)?(s(),p(b(t.$slots.collapseicon?t.$slots.collapseicon:t.collapseIcon?"span":"ChevronDownIcon"),d({key:1,class:[t.cx("tab.headerIcon"),t.collapseIcon],"aria-hidden":"true"},r.getTabPT(i,"headericon",o)),null,16,["class"])):(s(),p(b(t.$slots.expandicon?t.$slots.expandicon:t.expandIcon?"span":"ChevronRightIcon"),d({key:2,class:[t.cx("tab.headerIcon"),t.expandIcon],"aria-hidden":"true"},r.getTabPT(i,"headericon",o)),null,16,["class"])),i.props&&i.props.header?(s(),h("span",d({key:3,class:t.cx("tab.headerTitle")},r.getTabPT(i,"headertitle",o)),K(i.props.header),17)):v("",!0),i.children&&i.children.header?(s(),p(b(i.children.header),{key:4})):v("",!0)],16,q)],16,M),S(O,d({name:"p-toggleable-content"},r.getTabPT(i,"transition",o)),{default:C(function(){return[!t.lazy||r.isTabActive(o)?D((s(),h("div",d({key:0,id:r.getTabContentId(o),style:r.getTabProp(i,"contentStyle"),class:[t.cx("tab.toggleableContent"),r.getTabProp(i,"contentClass")],role:"region","aria-labelledby":r.getTabHeaderActionId(o)},u(u({},r.getTabProp(i,"contentProps")),r.getTabPT(i,"toggleablecontent",o))),[T("div",d({class:t.cx("tab.content")},r.getTabPT(i,"content",o)),[(s(),p(b(i)))],16)],16,G)),[[k,t.lazy?!0:r.isTabActive(o)]]):v("",!0)]}),_:2},1040)],16,V)}),128))],16)}U.render=Q;export{U as default};
