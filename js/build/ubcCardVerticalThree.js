!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CKEditor5=t():(e.CKEditor5=e.CKEditor5||{},e.CKEditor5.ubcCardVerticalThree=t())}(self,(()=>(()=>{var e={"ckeditor5/src/core.js":(e,t,r)=>{e.exports=r("dll-reference CKEditor5.dll")("./src/core.js")},"ckeditor5/src/ui.js":(e,t,r)=>{e.exports=r("dll-reference CKEditor5.dll")("./src/ui.js")},"ckeditor5/src/utils.js":(e,t,r)=>{e.exports=r("dll-reference CKEditor5.dll")("./src/utils.js")},"ckeditor5/src/widget.js":(e,t,r)=>{e.exports=r("dll-reference CKEditor5.dll")("./src/widget.js")},"dll-reference CKEditor5.dll":e=>{"use strict";e.exports=CKEditor5.dll}},t={};function r(a){var c=t[a];if(void 0!==c)return c.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,r),i.exports}r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var a={};return(()=>{"use strict";r.d(a,{default:()=>F});var e=r("ckeditor5/src/core.js"),t=r("ckeditor5/src/widget.js");const c=document.querySelector('[data-drupal-selector="drupal-settings-json"]').innerHTML,i=JSON.parse(c),n=i.ubcCkeditorWidgets.backgroundColors,s=i.ubcCkeditorWidgets.gapStyles,o=i.ubcCkeditorWidgets.marginStyles,l=(i.ubcCkeditorWidgets.paddingStyles,i.ubcCkeditorWidgets.tableStyles,i.ubcCkeditorWidgets.threeColumnLayoutStyles,i.ubcCkeditorWidgets.twoColumnLayoutStyles,i.ubcCkeditorWidgets.widthStyles,{backgroundclass:"bg-white",gapclass:"gap-6",marginclass:"my-6",shadowclass:"drop-shadow-none"});class d extends e.Command{constructor(e,t){super(e),this.attributeName=t}execute(){const e=this.editor,t=this.editor.model,r=e.model.document.selection,a=r.getSelectedElement();let c="";c=a&&a.is("element","ubcCardVerticalThree")?a:r.getFirstPosition().findAncestor("ubcCardVerticalThree"),t.change((e=>{t.insertContent(function(e){const t=e.createElement("ubcCardVerticalThree",l),r=e.createElement("ubcCardVerticalThreeContainer"),a=e.createElement("ubcCardVerticalThreeInner"),c=e.createElement("ubcCardVerticalThreeImage",{class:"first-image"}),i=e.createElement("imageInline",{src:"https://placehold.co/700x350"}),n=e.createElement("ubcCardVerticalThreeContent",{class:"first-content"}),s=e.createElement("heading3",{class:"card__title"}),o=e.createElement("paragraph"),d=e.createElement("ubcCardVerticalThreeFooter",{class:"first-footer"}),u=e.createElement("paragraph"),m=e.createText("Learn more",{linkHref:"/"}),h=e.createElement("ubcCardVerticalThreeContainer"),b=e.createElement("ubcCardVerticalThreeInner"),g=e.createElement("ubcCardVerticalThreeImage",{class:"second-image"}),p=e.createElement("imageInline",{src:"https://placehold.co/700x350"}),C=e.createElement("ubcCardVerticalThreeContent",{class:"second-content"}),T=e.createElement("heading3",{class:"card__title"}),w=e.createElement("paragraph"),v=e.createElement("ubcCardVerticalThreeFooter",{class:"second-footer"}),V=e.createElement("paragraph"),f=e.createText("Learn more",{linkHref:"/"}),E=e.createElement("ubcCardVerticalThreeContainer"),x=e.createElement("ubcCardVerticalThreeInner"),k=e.createElement("ubcCardVerticalThreeImage",{class:"third-image"}),A=e.createElement("imageInline",{src:"https://placehold.co/700x350"}),y=e.createElement("ubcCardVerticalThreeContent",{class:"third-content"}),S=e.createElement("heading3",{class:"card__title"}),_=e.createElement("paragraph"),I=e.createElement("ubcCardVerticalThreeFooter",{class:"third-footer"}),P=e.createElement("paragraph"),j=e.createText("Learn more",{linkHref:"/"});return e.append(r,t),e.append(a,r),e.append(c,a),e.append(i,c),e.append(n,a),e.append(s,n),e.appendText("Sample Title",s),e.append(o,n),e.appendText("Sample Text",o),e.append(d,a),e.append(u,d),e.append(m,u),e.append(h,t),e.append(b,h),e.append(g,b),e.append(p,g),e.append(C,b),e.append(T,C),e.appendText("Other Sample Title",T),e.append(w,C),e.appendText("Other Sample Text",w),e.append(v,b),e.append(V,v),e.append(f,V),e.append(E,t),e.append(x,E),e.append(k,x),e.append(A,k),e.append(y,x),e.append(S,y),e.appendText("Sample Title",S),e.append(_,y),e.appendText("More Sample Text",_),e.append(I,x),e.append(P,I),e.append(j,P),t}(e))}))}refresh(){const{model:e}=this.editor,{selection:t}=e.document,r=t.getFirstPosition().findAncestor("ubcCardVerticalThree"),a=e.schema.findAllowedParent(t.getFirstPosition(),"ubcCardVerticalThree");this.isEnabled=null!==a,this.value=!!r}}class u extends e.Plugin{static get requires(){return[t.Widget]}constructor(e){super(e)}init(){const e=this.editor;e.model.schema.extend("heading2",{allowAttributes:["class"]}),e.model.schema.extend("heading3",{allowAttributes:["class"]}),e.model.schema.extend("heading4",{allowAttributes:["class"]}),e.model.schema.extend("heading5",{allowAttributes:["class"]}),e.model.schema.extend("heading6",{allowAttributes:["class"]}),e.conversion.attributeToAttribute({model:"class",view:"class"}),this._defineSchema(),this._defineConverters(),e.commands.add("ubcCardVerticalThree",new d(e))}_defineSchema(){const e=this.editor.model.schema;e.register("ubcCardVerticalThree",{isObject:!0,allowWhere:"$block",allowAttributes:"class backgroundclass gapclass marginclass shadowclass",allowChildren:["ubcCardVerticalThreeContainer"]}),e.register("ubcCardVerticalThreeContainer",{isLimit:!1,allowIn:"ubcCardVerticalThree",allowChildren:["ubcCardVerticalThreeInner"]}),e.register("ubcCardVerticalThreeInner",{isLimit:!0,allowIn:"ubcCardVerticalThreeContainer",allowChildren:["ubcCardVerticalThreeImage","ubcCardVerticalThreeContent","ubcCardVerticalThreeFooter"]}),e.register("ubcCardVerticalThreeImage",{isLimit:!0,isContent:!0,isSelectable:!0,allowIn:"ubcCardVerticalThreeInner",allowAttributes:"class",allowContentOf:["$block","$blockObject"],allowChildren:["drupalMedia","imageBlock","imageInline","htmlImg"]}),e.register("ubcCardVerticalThreeContent",{isLimit:!0,allowIn:"ubcCardVerticalThreeInner",allowAttributes:"class",allowContentOf:"$text",allowChildren:["heading2","heading3","heading4","heading5","heading6","paragraph"]}),e.register("ubcCardVerticalThreeFooter",{isLimit:!0,allowIn:"ubcCardVerticalThreeInner",allowAttributes:"class",allowContentOf:"$inlineObject",allowChildren:["paragraph"]}),e.addChildCheck(((e,t)=>{}))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").elementToElement({model:"ubcCardVerticalThree",view:{name:"div",classes:["widget-card","card--three","widget-card--vertical-three","md--flex-grid"]}}),e.for("upcast").elementToElement({model:"ubcCardVerticalThreeContainer",view:{name:"div",classes:["md--flex-1"]}}),e.for("upcast").elementToElement({model:"ubcCardVerticalThreeInner",view:{name:"div",classes:["ubc-card","ubc-card--vert","hover--no-underline","group"]}}),e.for("upcast").elementToElement({model:"ubcCardVerticalThreeImage",view:{name:"div",classes:["ubc-card__media","object-cover"]}}),e.for("upcast").elementToElement({model:"ubcCardVerticalThreeContent",view:{name:"div",classes:["ubc-card__content"]}}),e.for("upcast").elementToElement({model:"ubcCardVerticalThreeFooter",view:{name:"div",classes:["ubc-card__actions"]}}),e.for("dataDowncast").elementToElement({model:"ubcCardVerticalThree",view:(e,{writer:t})=>t.createContainerElement("div",{class:"widget-card card--three widget-card--vertical-three md--flex-grid"})}),e.for("dataDowncast").elementToElement({model:"ubcCardVerticalThreeContainer",view:(e,{writer:t})=>t.createContainerElement("div",{class:"md--flex-1"})}),e.for("dataDowncast").elementToElement({model:"ubcCardVerticalThreeInner",view:(e,{writer:t})=>t.createContainerElement("div",{class:"ubc-card ubc-card--vert hover--no-underline group"})}),e.for("dataDowncast").elementToElement({model:"ubcCardVerticalThreeImage",view:(e,{writer:t})=>t.createEditableElement("div",{class:"ubc-card__media object-cover"})}),e.for("dataDowncast").elementToElement({model:"ubcCardVerticalThreeContent",view:(e,{writer:t})=>t.createEditableElement("div",{class:"ubc-card__content"})}),e.for("dataDowncast").elementToElement({model:"ubcCardVerticalThreeFooter",view:(e,{writer:t})=>t.createEditableElement("div",{class:"ubc-card__actions"})}),e.for("editingDowncast").elementToElement({model:"ubcCardVerticalThree",view:(e,{writer:r})=>{const a=r.createContainerElement("div",{class:"widget-card card--three widget-card--vertical-three md--flex-grid"});return(0,t.toWidget)(a,r,{label:"UBC Vertical 3 Card widget",hasSelectionHandle:!0})}}),e.for("editingDowncast").elementToElement({model:"ubcCardVerticalThreeContainer",view:(e,{writer:r})=>{const a=r.createContainerElement("div",{class:"md--flex-1"});return(0,t.toWidget)(a,r)}}),e.for("editingDowncast").elementToElement({model:"ubcCardVerticalThreeInner",view:(e,{writer:r})=>{const a=r.createContainerElement("div",{class:"ubc-card ubc-card--vert hover--no-underline group"});return(0,t.toWidget)(a,r)}}),e.for("editingDowncast").elementToElement({model:"ubcCardVerticalThreeImage",view:(e,{writer:r})=>{const a=r.createEditableElement("div",{class:"ubc-card__media object-cover"});return(0,t.toWidgetEditable)(a,r)}}),e.for("editingDowncast").elementToElement({model:"ubcCardVerticalThreeContent",view:(e,{writer:r})=>{const a=r.createEditableElement("div",{class:"ubc-card__content"});return(0,t.toWidgetEditable)(a,r)}}),e.for("editingDowncast").elementToElement({model:"ubcCardVerticalThreeFooter",view:(e,{writer:r})=>{const a=r.createEditableElement("div",{class:"ubc-card__actions"});return(0,t.toWidgetEditable)(a,r)}})}}var m=r("ckeditor5/src/ui.js");class h extends e.Plugin{static get requires(){return[m.ContextualBalloon]}init(){const e=this.editor;e.ui.componentFactory.add("ubcCardVerticalThree",(t=>{const r=e.commands.get("ubcCardVerticalThree"),a=new m.ButtonView(t);return a.set({label:e.t("Three Vertical Cards"),icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="m17.5,18.125h-3.738c-.345,0-.625-.28-.625-.625V2.5c0-.345.28-.625.625-.625h3.738c.345,0,.625.28.625.625v15c0,.345-.28.625-.625.625Zm-3.113-1.25h2.488V3.125h-2.488v13.75Zm-2.518,1.25h-3.738c-.345,0-.625-.28-.625-.625V2.5c0-.345.28-.625.625-.625h3.738c.345,0,.625.28.625.625v15c0,.345-.28.625-.625.625Zm-3.113-1.25h2.488V3.125h-2.488v13.75Zm-2.518,1.25h-3.738c-.345,0-.625-.28-.625-.625V2.5c0-.345.28-.625.625-.625h3.738c.345,0,.625.28.625.625v15c0,.345-.28.625-.625.625Zm-3.113-1.25h2.488V3.125h-2.488v13.75Zm12.524-6.25c-.345,0-.625-.28-.625-.625v-5.809c0-.345.28-.625.625-.625s.625.28.625.625v5.809c0,.345-.28.625-.625.625Zm-5.631,0c-.345,0-.625-.28-.625-.625v-5.809c0-.345.28-.625.625-.625s.625.28.625.625v5.809c0,.345-.28.625-.625.625Zm-5.631,0c-.345,0-.625-.28-.625-.625v-5.809c0-.345.28-.625.625-.625s.625.28.625.625v5.809c0,.345-.28.625-.625.625Z"/><path d="m15.649,15.618c-.345,0-.65-.306-.65-.65s.305-.649.65-.649.65.305.65.649-.305.65-.65.65Zm-5.631,0c-.345,0-.65-.306-.65-.65s.305-.649.65-.649.65.305.65.649-.305.65-.65.65Zm-5.631-.025c-.345,0-.65-.305-.65-.649s.305-.65.65-.65.65.306.65.65-.305.649-.65.649Zm5.576-2.482c-.345,0-.649-.306-.649-.65s.304-.649.649-.649.65.305.65.649-.305.65-.65.65Zm-5.576,0c-.345,0-.65-.306-.65-.65s.305-.649.65-.649.65.305.65.649-.305.65-.65.65Zm11.262-.05c-.345,0-.65-.306-.65-.65s.305-.649.65-.649.65.305.65.649-.305.65-.65.65Z"/></svg>',tooltip:!0,class:"cke5-ubccardverticalthree-insert-button"}),a.bind("isOn","isEnabled").to(r,"value","isEnabled"),this.listenTo(a,"execute",(()=>e.execute("ubcCardVerticalThree"))),a}))}}function b(e){const t=e.getSelectedElement();return t&&p(t)?t:null}function g(e){const t=e.getFirstPosition();if(!t)return null;let r=t.parent;for(;r;){if(r.is("element")&&p(r))return r;r=r.parent}return null}function p(e){return!!e.hasClass("card--three")&&(0,t.isWidget)(e)}class C extends e.Plugin{static get requires(){return[t.WidgetToolbarRepository]}static get pluginName(){return"UbcCardVerticalThreeToolbar"}afterInit(){const e=this.editor,r=e.plugins.get(t.WidgetToolbarRepository),a=e.config.get("ubcCardVerticalThree.contentToolbar"),c=e.config.get("ubcCardVerticalThree.tableToolbar");a&&r.register("ubcCardVerticalThreeContent",{ariaLabel:e.t("Vertical Card Three toolbar"),items:a,getRelatedElement:g}),c&&r.register("ubcCardVerticalThree",{ariaLabel:e.t("Vertical Card Three toolbar"),items:c,getRelatedElement:b})}}class T extends e.Command{constructor(e){super(e)}execute(e={}){const{editor:t}=this,{model:r}=this.editor,{selection:a}=t.model.document,c=a.getSelectedElement();let i="";const n=e.value,s="backgroundclass";i=c&&c.is("element","ubcCardVerticalThree")?c:a.getFirstPosition().findAncestor("ubcCardVerticalThree"),r.change((e=>{if(a.isCollapsed)n?e.setAttribute(s,n,i):e.removeAttribute(s,i);else{const t=r.schema.getValidRanges(a.getRanges(),s);for(const r of t)n?e.setAttribute(s,n,r):e.removeAttribute(s,r)}}))}refresh(){const e=this.editor.model,t=e.document,r="backgroundclass";this.value=t.selection.getAttribute(r),this.isEnabled=e.schema.getValidRanges(t.selection,r)}}class w extends e.Plugin{static get requires(){return[t.Widget]}static get pluginName(){return"UbcCardVerticalThreeBackgroundEditing"}constructor(e){super(e)}init(){const{editor:e}=this;this._defineConverters(),e.model.schema.extend("ubcCardVerticalThree",{allowAttributes:"backgroundclass"}),e.conversion.attributeToAttribute({model:"backgroundclass",view:"class"}),e.commands.add("ubcCardVerticalThreeBackground",new T(e))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").attributeToAttribute({view:{key:"class",value:/\bbg-[\S]+/},model:{key:"backgroundclass",value:e=>e.getAttribute("class").match(/\bbg-([\S]+)/)[0]}}),e.for("downcast").attributeToAttribute({model:"backgroundclass",view:e=>({key:"class",value:e})})}}var v=r("ckeditor5/src/utils.js");class V extends e.Plugin{static get pluginName(){return"UbcCardVerticalThreeBackgroundUI"}init(){const e=this.editor,t=e.t;n.map((e=>e)).value;const r=e.commands.get("ubcCardVerticalThreeBackground");e.ui.componentFactory.add("ubcCardVerticalThreeBackgroundOptions",(a=>{const c=(0,m.createDropdown)(a);return(0,m.addListToDropdown)(c,function(e,t){const r=new v.Collection,a="ubcCardVerticalThreeBackground";let c=n.map((e=>e));for(const e of c){const c={type:"button",model:new m.Model({commandName:a,commandParam:e.value,label:e.label,withText:!0})};c.model.bind("isOn").to(t,"value",(t=>t===e.value||!(!t||!e.value)&&t.toLowerCase()===e.value.toLowerCase())),r.add(c)}return r}(0,r)),c.buttonView.set({label:t("Background Color"),tooltip:!0,withText:!0,class:"cke5-ubccardverticalthree-bgcolor-insert-button"}),c.extendTemplate({attributes:{class:"ck-background-options-dropdown"}}),c.bind("isEnabled").to(r),this.listenTo(c,"execute",(t=>{e.execute(t.source.commandName,{value:t.source.commandParam}),e.editing.view.focus()})),c}))}}class f extends e.Plugin{static get requires(){return[w,V]}static get pluginName(){return"UbcCardVerticalThreeBackground"}}class E extends e.Command{constructor(e){super(e)}execute(e={}){const{editor:t}=this,{model:r}=this.editor,{selection:a}=t.model.document,c=a.getSelectedElement();let i="";const n="shadowclass";i=c&&c.is("element","ubcCardVerticalThree")?c:a.getFirstPosition().findAncestor("ubcCardVerticalThree");let s=i.getAttribute(n);r.change((e=>{"drop-shadow-md"===s?(e.setAttribute(n,"drop-shadow-none",i),this.isOn=!1):(e.setAttribute(n,"drop-shadow-md",i),this.isOn=!0)}))}}class x extends e.Plugin{static get requires(){return[t.Widget]}static get pluginName(){return"UbcCardVerticalThreeShadowEditing"}constructor(e){super(e)}init(){const{editor:e}=this;this._defineConverters(),e.model.schema.extend("ubcCardVerticalThree",{allowAttributes:"shadowclass"}),e.conversion.attributeToAttribute({model:"shadowclass",view:"class"}),e.commands.add("ubcCardVerticalThreeShadow",new E(e))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").attributeToAttribute({view:{key:"class",value:/drop-shadow-[\S]+/},model:{key:"shadowclass",value:e=>e.getAttribute("class").match(/drop-shadow-([\S]+)/)[0]}}),e.for("downcast").attributeToAttribute({model:"shadowclass",view:e=>({key:"class",value:e})})}}class k extends e.Plugin{static get requires(){return[m.ContextualBalloon]}static get pluginName(){return"UbcCardVerticalThreeShadowUI"}init(){const e=this.editor;e.ui.componentFactory.add("ubcCardVerticalThreeShadowToggle",(t=>{const r=e.commands.get("ubcCardVerticalThreeShadow"),a=new m.ButtonView(t);return a.set({label:e.t("Toggle Shadow"),tooltip:!0,withText:!0,class:"cke5-ubccardverticalthree-shadow-insert-button"}),a.bind("isEnabled").to(r),a.bind("isOn").to(r),this.listenTo(a,"execute",(()=>e.execute("ubcCardVerticalThreeShadow"))),a}))}}class A extends e.Plugin{static get requires(){return[x,k]}static get pluginName(){return"UbcCardVerticalThreeShadow"}}class y extends e.Command{constructor(e){super(e)}execute(e={}){const{editor:t}=this,{model:r}=this.editor,{selection:a}=t.model.document,c=a.getSelectedElement();let i="";const n=e.value,s="marginclass";i=c&&c.is("element","ubcCardVerticalThree")?c:a.getFirstPosition().findAncestor("ubcCardVerticalThree"),r.change((e=>{if(a.isCollapsed)n?e.setAttribute(s,n,i):e.removeAttribute(s,i);else{const t=r.schema.getValidRanges(a.getRanges(),s);for(const r of t)n?e.setAttribute(s,n,r):e.removeAttribute(s,r)}}))}refresh(){const e=this.editor.model,t=e.document,r="marginclass";this.value=t.selection.getAttribute(r),this.isEnabled=e.schema.getValidRanges(t.selection,r)}}class S extends e.Plugin{static get requires(){return[t.Widget]}static get pluginName(){return"UbcCardVerticalThreeMarginEditing"}constructor(e){super(e)}init(){const{editor:e}=this;this._defineConverters(),e.model.schema.extend("ubcCardVerticalThree",{allowAttributes:"marginclass"}),e.conversion.attributeToAttribute({model:"marginclass",view:"class"}),e.commands.add("ubcCardVerticalThreeMargin",new y(e))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").attributeToAttribute({view:{key:"class",value:/\bmy-[\S]+/},model:{key:"marginclass",value:e=>e.getAttribute("class").match(/\bmy-([\S]+)/)[0]}}),e.for("downcast").attributeToAttribute({model:"marginclass",view:e=>({key:"class",value:e})})}}class _ extends e.Plugin{static get pluginName(){return"UbcCardVerticalThreeMarginUI"}init(){const e=this.editor,t=e.t;o.map((e=>e)).value;const r=e.commands.get("ubcCardVerticalThreeMargin");e.ui.componentFactory.add("ubcCardVerticalThreeMarginOptions",(a=>{const c=(0,m.createDropdown)(a);return(0,m.addListToDropdown)(c,function(e,t){const r=new v.Collection,a="ubcCardVerticalThreeMargin";let c=o.map((e=>e));for(const e of c){const c={type:"button",model:new m.Model({commandName:a,commandParam:e.value,label:e.label,withText:!0})};c.model.bind("isOn").to(t,"value",(t=>t===e.value||!(!t||!e.value)&&t.toLowerCase()===e.value.toLowerCase())),r.add(c)}return r}(0,r)),c.buttonView.set({label:t("Margin"),tooltip:!0,withText:!0,class:"cke5-ubccardverticalthree-margin-insert-button"}),c.extendTemplate({attributes:{class:"ck-margin-options-dropdown"}}),c.bind("isEnabled").to(r),this.listenTo(c,"execute",(t=>{e.execute(t.source.commandName,{value:t.source.commandParam}),e.editing.view.focus()})),c}))}}class I extends e.Plugin{static get requires(){return[S,_]}static get pluginName(){return"UbcCardVerticalThreeMargin"}}class P extends e.Command{constructor(e){super(e)}execute(e={}){const{editor:t}=this,{model:r}=this.editor,{selection:a}=t.model.document,c=a.getSelectedElement();let i="";const n=e.value,s="gapclass";i=c&&c.is("element","ubcCardVerticalThree")?c:a.getFirstPosition().findAncestor("ubcCardVerticalThree"),r.change((e=>{if(a.isCollapsed)n?e.setAttribute(s,n,i):e.removeAttribute(s,i);else{const t=r.schema.getValidRanges(a.getRanges(),s);for(const r of t)n?(e.setAttribute(s,n,r),this.value=n):e.removeAttribute(s,r)}}))}refresh(){const e=this.editor.model,t=e.document,r="gapclass";this.value=t.selection.getAttribute(r),this.isEnabled=e.schema.getValidRanges(t.selection,r)}}class j extends e.Plugin{static get requires(){return[t.Widget]}static get pluginName(){return"UbcCardVerticalThreeGapEditing"}constructor(e){super(e)}init(){const{editor:e}=this;this._defineConverters(),e.model.schema.extend("ubcCardVerticalThree",{allowAttributes:"gapclass"}),e.conversion.attributeToAttribute({model:"gapclass",view:"class"}),e.commands.add("ubcCardVerticalThreeGap",new P(e))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").attributeToAttribute({view:{key:"class",value:/\bgap-[\S]+/},model:{key:"gapclass",value:e=>e.getAttribute("class").match(/\bgap-([\S]+)/)[0]}}),e.for("downcast").attributeToAttribute({model:"gapclass",view:e=>({key:"class",value:e})})}}class W extends e.Plugin{static get pluginName(){return"UbcCardVerticalThreeGapUI"}init(){const e=this.editor,t=e.t;s.map((e=>e)).value;const r=e.commands.get("ubcCardVerticalThreeGap");e.ui.componentFactory.add("ubcCardVerticalThreeGapOptions",(a=>{const c=(0,m.createDropdown)(a);return(0,m.addListToDropdown)(c,function(e,t){const r=new v.Collection,a="ubcCardVerticalThreeGap";let c=s.map((e=>e));for(const e of c){const c={type:"button",model:new m.Model({commandName:a,commandParam:e.value,label:e.label,withText:!0})};c.model.bind("isOn").to(t,"value",(t=>t===e.value||!(!t||!e.value)&&t.toLowerCase()===e.value.toLowerCase())),r.add(c)}return r}(0,r)),c.buttonView.set({label:t("Gap"),tooltip:!0,withText:!0,class:"cke5-ubccardverticalthree-gap-insert-button"}),c.extendTemplate({attributes:{class:"ck-gap-options-dropdown"}}),c.bind("isEnabled").to(r),this.listenTo(c,"execute",(t=>{e.execute(t.source.commandName,{value:t.source.commandParam}),e.editing.view.focus()})),c}))}}class L extends e.Plugin{static get requires(){return[j,W]}static get pluginName(){return"UbcCardVerticalThreeGap"}}class O extends e.Plugin{static get requires(){return[u,h,C,f,A,I,L]}}const F={UbcCardVerticalThree:O}})(),a=a.default})()));