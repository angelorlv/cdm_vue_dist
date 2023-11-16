import{E as C,U as P,O as m,G as g,K as l,R as z,I as w,J as M,o,c as d,t as K,A as b,F as y,z as x,a as L,P as A,n as v,C as D,M as k,D as O,L as S,b as N}from"./entry.aac20fd1.js";import{s as E}from"./basecomponent.esm.a2d5fbe3.js";import{s as T}from"./index.esm.73c6433b.js";import{s as R}from"./index.esm.19573f68.js";import"./baseicon.esm.d13a52ad.js";var G=`
@layer primevue {
    .p-megamenu {
        display: flex;
        position: relative;
    }

    .p-megamenu-root-list {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .p-megamenu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    .p-megamenu .p-menuitem-text {
        line-height: 1;
    }

    .p-megamenu-panel {
        display: none;
        position: absolute;
        width: auto;
        z-index: 1;
        left: 0;
        min-width: 100%;
    }

    .p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel {
        display: block;
    }

    .p-megamenu-submenu {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    /* Horizontal */
    .p-megamenu-horizontal {
        align-items: center;
    }

    .p-megamenu-horizontal .p-megamenu-root-list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .p-megamenu-horizontal .p-megamenu-end {
        margin-left: auto;
        align-self: center;
    }

    /* Vertical */
    .p-megamenu-vertical {
        flex-direction: column;
    }

    .p-megamenu-vertical .p-megamenu-root-list {
        flex-direction: column;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel {
        left: 100%;
        top: 0;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-menuitem > .p-menuitem-content > .p-menuitem-link > .p-submenu-icon {
        margin-left: auto;
    }

    .p-megamenu-grid {
        display: flex;
    }

    .p-megamenu-col-2,
    .p-megamenu-col-3,
    .p-megamenu-col-4,
    .p-megamenu-col-6,
    .p-megamenu-col-12 {
        flex: 0 0 auto;
        padding: 0.5rem;
    }

    .p-megamenu-col-2 {
        width: 16.6667%;
    }

    .p-megamenu-col-3 {
        width: 25%;
    }

    .p-megamenu-col-4 {
        width: 33.3333%;
    }

    .p-megamenu-col-6 {
        width: 50%;
    }

    .p-megamenu-col-12 {
        width: 100%;
    }
}
`,B={submenu:function(e){var t=e.instance,s=e.processedItem;return{display:t.isItemActive(s)?"block":"none"}}},H={root:function(e){var t=e.instance;return["p-megamenu p-component",{"p-megamenu-horizontal":t.horizontal,"p-megamenu-vertical":t.vertical}]},start:"p-megamenu-start",menu:"p-megamenu-root-list",submenuHeader:function(e){var t=e.instance,s=e.processedItem;return["p-megamenu-submenu-header p-submenu-header",{"p-disabled":t.isItemDisabled(s)}]},menuitem:function(e){var t=e.instance,s=e.processedItem;return["p-menuitem",{"p-menuitem-active p-highlight":t.isItemActive(s),"p-focus":t.isItemFocused(s),"p-disabled":t.isItemDisabled(s)}]},content:"p-menuitem-content",action:"p-menuitem-link",icon:"p-menuitem-icon",label:"p-menuitem-text",submenuIcon:"p-submenu-icon",panel:"p-megamenu-panel",grid:"p-megamenu-grid",column:function(e){var t=e.instance,s=e.processedItem,r=t.isItemGroup(s)?s.items.length:0,i;switch(r){case 2:i="p-megamenu-col-6";break;case 3:i="p-megamenu-col-4";break;case 4:i="p-megamenu-col-3";break;case 6:i="p-megamenu-col-2";break;default:i="p-megamenu-col-12";break}return i},submenu:"p-submenu-list p-megamenu-submenu",submenuLabel:"p-menuitem-text",separator:"p-menuitem-separator",end:"p-megamenu-end"},U=C.extend({name:"megamenu",css:G,classes:H,inlineStyles:B}),j={name:"BaseMegaMenu",extends:E,props:{model:{type:Array,default:null},orientation:{type:String,default:"horizontal"},disabled:{type:Boolean,default:!1},tabindex:{type:Number,default:0},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},style:U,provide:function(){return{$parentInstance:this}}},F={name:"MegaMenuSub",hostName:"MegaMenu",extends:E,emits:["item-click","item-mouseenter"],props:{menuId:{type:String,default:null},focusedItemId:{type:String,default:null},horizontal:{type:Boolean,default:!1},submenu:{type:Object,default:null},items:{type:Array,default:null},level:{type:Number,default:0},templates:{type:Object,default:null},activeItem:{type:Object,default:null},tabindex:{type:Number,default:0}},methods:{getSubListId:function(e){return"".concat(this.getItemId(e),"_list")},getSubListKey:function(e){return this.getSubListId(e)},getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,t,s){return e&&e.item?m.getItemValue(e.item[t],s):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getPTOptions:function(e,t,s){return this.ptm(s,{context:{item:e,index:t,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e)}})},isItemActive:function(e){return m.isNotEmpty(this.activeItem)?this.activeItem.key===e.key:!1},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return m.isNotEmpty(e.items)},onItemClick:function(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.$emit("item-click",{originalEvent:e,processedItem:t,isFocus:!0})},onItemMouseEnter:function(e,t){this.$emit("item-mouseenter",{originalEvent:e,processedItem:t})},getAriaSetSize:function(){var e=this;return this.items.filter(function(t){return e.isItemVisible(t)&&!e.getItemProp(t,"separator")}).length},getAriaPosInset:function(e){var t=this;return e-this.items.slice(0,e).filter(function(s){return t.isItemVisible(s)&&t.getItemProp(s,"separator")}).length+1},getMenuItemProps:function(e,t){return{action:l({class:this.cx("action"),tabindex:-1,"aria-hidden":!0},this.getPTOptions(e,t,"action")),icon:l({class:[this.cx("icon"),this.getItemProp(e,"icon")]},this.getPTOptions(e,t,"icon")),label:l({class:this.cx("label")},this.getPTOptions(e,t,"label")),submenuicon:l({class:this.cx("submenuIcon")},this.getPTOptions(e,t,"submenuIcon"))}}},components:{AngleRightIcon:R,AngleDownIcon:T},directives:{ripple:z}},q=["tabindex"],J=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-highlight","data-p-focused","data-p-disabled"],W=["onClick","onMouseenter"],Q=["href","target"],X=["id"];function Y(n,e,t,s,r,i){var u=w("MegaMenuSub",!0),f=M("ripple");return o(),d("ul",l({class:t.level===0?n.cx("menu"):n.cx("submenu"),tabindex:t.tabindex},t.level===0?n.ptm("menu"):n.ptm("submenu")),[t.submenu?(o(),d("li",l({key:0,class:[n.cx("submenuHeader",{submenu:t.submenu}),i.getItemProp(t.submenu,"class")],style:i.getItemProp(t.submenu,"style"),role:"presentation"},n.ptm("submenuHeader")),K(i.getItemLabel(t.submenu)),17)):b("",!0),(o(!0),d(y,null,x(t.items,function(a,c){return o(),d(y,{key:i.getItemKey(a)},[i.isItemVisible(a)&&!i.getItemProp(a,"separator")?(o(),d("li",l({key:0,id:i.getItemId(a),style:i.getItemProp(a,"style"),class:[n.cx("menuitem",{processedItem:a}),i.getItemProp(a,"class")],role:"menuitem","aria-label":i.getItemLabel(a),"aria-disabled":i.isItemDisabled(a)||void 0,"aria-expanded":i.isItemGroup(a)?i.isItemActive(a):void 0,"aria-haspopup":i.isItemGroup(a)&&!i.getItemProp(a,"to")?"menu":void 0,"aria-level":t.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(c)},i.getPTOptions(a,c,"menuitem"),{"data-p-highlight":i.isItemActive(a),"data-p-focused":i.isItemFocused(a),"data-p-disabled":i.isItemDisabled(a)}),[L("div",l({class:n.cx("content"),onClick:function(I){return i.onItemClick(I,a)},onMouseenter:function(I){return i.onItemMouseEnter(I,a)}},i.getPTOptions(a,c,"content")),[t.templates.item?(o(),v(k(t.templates.item),{key:1,item:a.item,hasSubmenu:i.isItemGroup(a),label:i.getItemLabel(a),props:i.getMenuItemProps(a,c)},null,8,["item","hasSubmenu","label","props"])):A((o(),d("a",l({key:0,href:i.getItemProp(a,"url"),class:n.cx("action"),target:i.getItemProp(a,"target"),tabindex:"-1","aria-hidden":"true"},i.getPTOptions(a,c,"action")),[t.templates.itemicon?(o(),v(k(t.templates.itemicon),{key:0,item:a.item,class:D([n.cx("icon"),i.getItemProp(a,"icon")])},null,8,["item","class"])):i.getItemProp(a,"icon")?(o(),d("span",l({key:1,class:[n.cx("icon"),i.getItemProp(a,"icon")]},i.getPTOptions(a,c,"icon")),null,16)):b("",!0),L("span",l({class:t.level===0?n.cx("label"):n.cx("submenuLabel")},t.level===0?i.getPTOptions(a,c,"label"):i.getPTOptions(a,c,"submenuLabel")),K(i.getItemLabel(a)),17),i.isItemGroup(a)?(o(),d(y,{key:2},[t.templates.submenuicon?(o(),v(k(t.templates.submenuicon),l({key:0,active:i.isItemActive(a),class:n.cx("submenuIcon")},i.getPTOptions(a,c,"submenuIcon")),null,16,["active","class"])):(o(),v(k(t.horizontal?"AngleDownIcon":"AngleRightIcon"),l({key:1,class:n.cx("submenuIcon")},i.getPTOptions(a,c,"submenuIcon")),null,16,["class"]))],64)):b("",!0)],16,Q)),[[f]])],16,W),i.isItemVisible(a)&&i.isItemGroup(a)?(o(),d("div",l({key:0,class:n.cx("panel")},n.ptm("panel")),[L("div",l({class:n.cx("grid")},n.ptm("grid")),[(o(!0),d(y,null,x(a.items,function(h){return o(),d("div",l({key:i.getItemKey(h),class:n.cx("column",{processedItem:a})},n.ptm("column")),[(o(!0),d(y,null,x(h,function(I){return o(),v(u,{key:i.getSubListKey(I),id:i.getSubListId(I),style:O(n.sx("submenu",!0,{processedItem:a})),role:"menu",menuId:t.menuId,focusedItemId:t.focusedItemId,submenu:I,items:I.items,templates:t.templates,level:t.level+1,pt:n.pt,unstyled:n.unstyled,onItemClick:e[0]||(e[0]=function(p){return n.$emit("item-click",p)}),onItemMouseenter:e[1]||(e[1]=function(p){return n.$emit("item-mouseenter",p)})},null,8,["id","style","menuId","focusedItemId","submenu","items","templates","level","pt","unstyled"])}),128))],16)}),128))],16)],16)):b("",!0)],16,J)):b("",!0),i.isItemVisible(a)&&i.getItemProp(a,"separator")?(o(),d("li",l({key:1,id:i.getItemId(a),class:[n.cx("separator"),i.getItemProp(a,"class")],style:i.getItemProp(a,"style"),role:"separator"},n.ptm("separator")),null,16,X)):b("",!0)],64)}),128))],16,q)}F.render=Y;var Z={name:"MegaMenu",extends:j,emits:["focus","blur"],outsideClickListener:null,resizeListener:null,container:null,menubar:null,searchTimeout:null,searchValue:null,data:function(){return{id:this.$attrs.id,focused:!1,focusedItemInfo:{index:-1,key:"",parentKey:""},activeItem:null,dirty:!1}},watch:{"$attrs.id":function(e){this.id=e||P()},activeItem:function(e){m.isNotEmpty(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},mounted:function(){this.id=this.id||P()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener()},methods:{getItemProp:function(e,t){return e?m.getItemValue(e[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemGroup:function(e){return m.isNotEmpty(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&m.isNotEmpty(e.items)},hide:function(e,t){this.activeItem=null,this.focusedItemInfo={index:-1,key:"",parentKey:""},t&&g.focus(this.menubar),this.dirty=!1},onFocus:function(e){if(this.focused=!0,this.focusedItemInfo.index===-1){var t=this.findFirstFocusedItemIndex(),s=this.findVisibleItem(t);this.focusedItemInfo={index:t,key:s.key,parentKey:s.parentKey}}this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,key:"",parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",e)},onKeyDown:function(e){if(this.disabled){e.preventDefault();return}var t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&m.isPrintableCharacter(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e){var t=e.processedItem,s=e.isFocus;if(!m.isEmpty(t)){var r=t.index,i=t.key,u=t.parentKey,f=t.items,a=m.isNotEmpty(f);a&&(this.activeItem=t),this.focusedItemInfo={index:r,key:i,parentKey:u},a&&(this.dirty=!0),s&&g.focus(this.menubar)}},onItemClick:function(e){var t=e.originalEvent,s=e.processedItem,r=this.isProccessedItemGroup(s),i=m.isEmpty(s.parent),u=this.isSelected(s);if(u){var f=s.index,a=s.key,c=s.parentKey;this.activeItem=null,this.focusedItemInfo={index:f,key:a,parentKey:c},this.dirty=!i,g.focus(this.menubar)}else if(r)this.onItemChange(e);else{var h=i?s:this.activeItem;this.hide(t),this.changeFocusedItemInfo(t,h?h.index:-1),g.focus(this.menubar)}},onItemMouseEnter:function(e){this.dirty&&this.onItemChange(e)},onArrowDownKey:function(e){if(this.horizontal)if(m.isNotEmpty(this.activeItem)&&this.activeItem.key===this.focusedItemInfo.key)this.focusedItemInfo={index:-1,key:"",parentKey:this.activeItem.key};else{var t=this.findVisibleItem(this.focusedItemInfo.index),s=this.isProccessedItemGroup(t);s&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,key:t.key,parentKey:t.parentKey},this.searchValue="")}var r=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(e,r),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey&&this.horizontal){if(this.focusedItemInfo.index!==-1){var t=this.findVisibleItem(this.focusedItemInfo.index),s=this.isProccessedItemGroup(t);!s&&m.isNotEmpty(this.activeItem)&&(this.focusedItemInfo.index===0?(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key,parentKey:this.activeItem.parentKey},this.activeItem=null):this.changeFocusedItemInfo(e,this.findFirstItemIndex()))}e.preventDefault()}else{var r=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(e,r),e.preventDefault()}},onArrowLeftKey:function(e){var t=this.findVisibleItem(this.focusedItemInfo.index),s=this.isProccessedItemGroup(t);if(s){if(this.horizontal){var r=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(e,r)}}else{this.vertical&&m.isNotEmpty(this.activeItem)&&t.columnIndex===0&&(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key,parentKey:this.activeItem.parentKey},this.activeItem=null);var i=t.columnIndex-1,u=this.visibleItems.findIndex(function(f){return f.columnIndex===i});u!==-1&&this.changeFocusedItemInfo(e,u)}e.preventDefault()},onArrowRightKey:function(e){var t=this.findVisibleItem(this.focusedItemInfo.index),s=this.isProccessedItemGroup(t);if(s){if(this.vertical)if(m.isNotEmpty(this.activeItem)&&this.activeItem.key===t.key)this.focusedItemInfo={index:-1,key:"",parentKey:this.activeItem.key};else{var r=this.findVisibleItem(this.focusedItemInfo.index),i=this.isProccessedItemGroup(r);i&&(this.onItemChange({originalEvent:e,processedItem:r}),this.focusedItemInfo={index:-1,key:r.key,parentKey:r.parentKey},this.searchValue="")}var u=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(e,u)}else{var f=t.columnIndex+1,a=this.visibleItems.findIndex(function(c){return c.columnIndex===f});a!==-1&&this.changeFocusedItemInfo(e,a)}e.preventDefault()},onHomeKey:function(e){this.changeFocusedItemInfo(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemInfo(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var t=g.findSingle(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),s=t&&g.findSingle(t,'a[data-pc-section="action"]');s?s.click():t&&t.click();var r=this.visibleItems[this.focusedItemInfo.index],i=this.isProccessedItemGroup(r);!i&&this.changeFocusedItemInfo(e,this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){m.isNotEmpty(this.activeItem)&&(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key},this.activeItem=null),e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var t=this.findVisibleItem(this.focusedItemInfo.index),s=this.isProccessedItemGroup(t);!s&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var s=e.container&&!e.container.contains(t.target),r=e.popup?!(e.target&&(e.target===t.target||e.target.contains(t.target))):!0;s&&r&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(t){g.isTouchDevice()||e.hide(t,!0)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isItemMatched:function(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return m.isNotEmpty(this.activeItem)?this.activeItem.key===e.key:!1},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidItem(t)})},findLastItemIndex:function(){var e=this;return m.findLastIndex(this.visibleItems,function(t){return e.isValidItem(t)})},findNextItemIndex:function(e){var t=this,s=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(r){return t.isValidItem(r)}):-1;return s>-1?s+e+1:e},findPrevItemIndex:function(e){var t=this,s=e>0?m.findLastIndex(this.visibleItems.slice(0,e),function(r){return t.isValidItem(r)}):-1;return s>-1?s:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidSelectedItem(t)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},findVisibleItem:function(e){return m.isNotEmpty(this.visibleItems)?this.visibleItems[e]:null},searchItems:function(e,t){var s=this;this.searchValue=(this.searchValue||"")+t;var r=-1,i=!1;return this.focusedItemInfo.index!==-1?(r=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(u){return s.isItemMatched(u)}),r=r===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(u){return s.isItemMatched(u)}):r+this.focusedItemInfo.index):r=this.visibleItems.findIndex(function(u){return s.isItemMatched(u)}),r!==-1&&(i=!0),r===-1&&this.focusedItemInfo.index===-1&&(r=this.findFirstFocusedItemIndex()),r!==-1&&this.changeFocusedItemInfo(e,r),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){s.searchValue="",s.searchTimeout=null},500),i},changeFocusedItemInfo:function(e,t){var s=this.findVisibleItem(t);this.focusedItemInfo.index=t,this.focusedItemInfo.key=m.isNotEmpty(s)?s.key:"",this.scrollInView()},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,t=e!==-1?"".concat(this.id,"_").concat(e):this.focusedItemId,s=g.findSingle(this.menubar,'li[id="'.concat(t,'"]'));s&&s.scrollIntoView&&s.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(e){var t=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",u=arguments.length>4?arguments[4]:void 0,f=[];return e&&e.forEach(function(a,c){var h=(i!==""?i+"_":"")+(u!==void 0?u+"_":"")+c,I={item:a,index:c,level:s,key:h,parent:r,parentKey:i,columnIndex:u!==void 0?u:r.columnIndex!==void 0?r.columnIndex:c};I.items=s===0&&a.items&&a.items.length>0?a.items.map(function(p,V){return t.createProcessedItems(p,s+1,I,h,V)}):t.createProcessedItems(a.items,s+1,I,h),f.push(I)}),f},containerRef:function(e){this.container=e},menubarRef:function(e){this.menubar=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=m.isNotEmpty(this.activeItem)?this.activeItem:null;return e&&e.key===this.focusedItemInfo.parentKey?e.items.reduce(function(t,s){return s.forEach(function(r){r.items.forEach(function(i){t.push(i)})}),t},[]):this.processedItems},horizontal:function(){return this.orientation==="horizontal"},vertical:function(){return this.orientation==="vertical"},focusedItemId:function(){return m.isNotEmpty(this.focusedItemInfo.key)?"".concat(this.id,"_").concat(this.focusedItemInfo.key):null}},components:{MegaMenuSub:F}},_=["id"];function $(n,e,t,s,r,i){var u=w("MegaMenuSub");return o(),d("div",l({ref:i.containerRef,id:r.id,class:n.cx("root")},n.ptm("root"),{"data-pc-name":"megamenu"}),[n.$slots.start?(o(),d("div",l({key:0,class:n.cx("start")},n.ptm("start")),[S(n.$slots,"start")],16)):b("",!0),N(u,{ref:i.menubarRef,id:r.id+"_list",tabindex:n.disabled?-1:n.tabindex,role:"menubar","aria-label":n.ariaLabel,"aria-labelledby":n.ariaLabelledby,"aria-disabled":n.disabled||void 0,"aria-orientation":n.orientation,"aria-activedescendant":r.focused?i.focusedItemId:void 0,menuId:r.id,focusedItemId:r.focused?i.focusedItemId:void 0,items:i.processedItems,horizontal:i.horizontal,templates:n.$slots,activeItem:r.activeItem,level:0,pt:n.pt,unstyled:n.unstyled,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemClick:i.onItemClick,onItemMouseenter:i.onItemMouseEnter},null,8,["id","tabindex","aria-label","aria-labelledby","aria-disabled","aria-orientation","aria-activedescendant","menuId","focusedItemId","items","horizontal","templates","activeItem","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter"]),n.$slots.end?(o(),d("div",l({key:1,class:n.cx("end")},n.ptm("end")),[S(n.$slots,"end")],16)):b("",!0)],16,_)}Z.render=$;export{Z as default};