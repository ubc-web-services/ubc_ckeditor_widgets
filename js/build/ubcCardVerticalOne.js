!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CKEditor5=t():(e.CKEditor5=e.CKEditor5||{},e.CKEditor5.ubcCardVerticalOne=t())}(self,(()=>(()=>{var e={"ckeditor5/src/core.js":(e,t,r)=>{e.exports=r("dll-reference CKEditor5.dll")("./src/core.js")},"ckeditor5/src/ui.js":(e,t,r)=>{e.exports=r("dll-reference CKEditor5.dll")("./src/ui.js")},"ckeditor5/src/utils.js":(e,t,r)=>{e.exports=r("dll-reference CKEditor5.dll")("./src/utils.js")},"ckeditor5/src/widget.js":(e,t,r)=>{e.exports=r("dll-reference CKEditor5.dll")("./src/widget.js")},"dll-reference CKEditor5.dll":e=>{"use strict";e.exports=CKEditor5.dll}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,r),i.exports}r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var a={};return(()=>{"use strict";r.d(a,{default:()=>P});var e=r("ckeditor5/src/core.js"),t=r("ckeditor5/src/widget.js");const n=document.querySelector('[data-drupal-selector="drupal-settings-json"]').innerHTML,i=JSON.parse(n),c=i.ubcCkeditorWidgets.backgroundColors,o=(i.ubcCkeditorWidgets.gapStyles,i.ubcCkeditorWidgets.marginStyles),s=(i.ubcCkeditorWidgets.paddingStyles,i.ubcCkeditorWidgets.tableStyles,i.ubcCkeditorWidgets.threeColumnLayoutStyles,i.ubcCkeditorWidgets.twoColumnLayoutStyles,i.ubcCkeditorWidgets.widthStyles,{backgroundclass:"bg-white",marginclass:"my-6",shadowclass:"drop-shadow-none"});class l extends e.Command{constructor(e,t){super(e),this.attributeName=t}execute(){const e=this.editor,t=this.editor.model,r=e.model.document.selection,a=r.getSelectedElement();let n="";n=a&&a.is("element","ubcCardVerticalOne")?a:r.getFirstPosition().findAncestor("ubcCardVerticalOne"),t.change((e=>{t.insertContent(function(e){const t=e.createElement("ubcCardVerticalOne",s),r=e.createElement("ubcCardVerticalOneInner"),a=e.createElement("ubcCardVerticalOneImage"),n=e.createElement("imageBlock",{src:"https://placehold.co/700x350"}),i=e.createElement("ubcCardVerticalOneContent"),c=e.createElement("heading3",{class:"card__title"}),o=e.createElement("paragraph"),l=e.createElement("ubcCardVerticalOneFooter"),d=e.createElement("paragraph"),u=e.createText("Learn more",{linkHref:"/"});return e.append(r,t),e.append(a,r),e.append(n,a),e.append(i,r),e.append(c,i),e.appendText("Sample Title",c),e.append(o,i),e.appendText("Sample Text",o),e.append(l,r),e.append(d,l),e.append(u,d),t}(e))}))}refresh(){const{model:e}=this.editor,{selection:t}=e.document,r=t.getFirstPosition().findAncestor("ubcCardVerticalOne"),a=e.schema.findAllowedParent(t.getFirstPosition(),"ubcCardVerticalOne");this.isEnabled=null!==a,this.value=!!r}}class d extends e.Plugin{static get requires(){return[t.Widget]}constructor(e){super(e)}init(){const e=this.editor;e.model.schema.extend("heading2",{allowAttributes:["class"]}),e.model.schema.extend("heading3",{allowAttributes:["class"]}),e.model.schema.extend("heading4",{allowAttributes:["class"]}),e.model.schema.extend("heading5",{allowAttributes:["class"]}),e.model.schema.extend("heading6",{allowAttributes:["class"]}),this._defineSchema(),this._defineConverters(),e.commands.add("ubcCardVerticalOne",new l(e))}_defineSchema(){const e=this.editor.model.schema;e.register("ubcCardVerticalOne",{isObject:!0,allowAttributes:"class backgroundclass marginclass shadowclass",allowWhere:"$block",allowChildren:["ubcCardVerticalOneInner"]}),e.register("ubcCardVerticalOneInner",{isLimit:!0,allowIn:"ubcCardVerticalOne",allowChildren:["ubcCardVerticalOneImage","ubcCardVerticalOneContent","ubcCardVerticalOneFooter"]}),e.register("ubcCardVerticalOneImage",{sLimit:!0,isContent:!0,isSelectable:!0,allowIn:"ubcCardVerticalOne",allowContentOf:["$block","$blockObject"],allowChildren:["drupalMedia","imageBlock","imageInline","htmlImg"]}),e.register("ubcCardVerticalOneContent",{isLimit:!0,allowIn:"ubcCardVerticalOne",allowContentOf:"$text",allowChildren:["heading2","heading3","heading4","heading5","heading6","paragraph"]}),e.register("ubcCardVerticalOneFooter",{isLimit:!0,allowIn:"ubcCardVerticalOne",allowContentOf:"$inlineObject",allowChildren:["paragraph"]}),e.addChildCheck(((e,t)=>{}))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").elementToElement({model:"ubcCardVerticalOne",view:{name:"div",classes:["widget-card","card--one","widget-card--vertical-one"]}}),e.for("upcast").elementToElement({model:"ubcCardVerticalOneInner",view:{name:"div",classes:["ubc-card","ubc-card--vert","hover--no-underline","group"]}}),e.for("upcast").elementToElement({model:"ubcCardVerticalOneImage",view:{name:"div",classes:["first-image","ubc-card__media","object-cover"]}}),e.for("upcast").elementToElement({model:"ubcCardVerticalOneContent",view:{name:"div",classes:["first-content","ubc-card__content"]}}),e.for("upcast").elementToElement({model:"ubcCardVerticalOneFooter",view:{name:"div",classes:["first-footer","ubc-card__actions"]}}),e.for("dataDowncast").elementToElement({model:"ubcCardVerticalOne",view:(e,{writer:t})=>t.createContainerElement("div",{class:"widget-card card--one widget-card--vertical-one"})}),e.for("dataDowncast").elementToElement({model:"ubcCardVerticalOneInner",view:{name:"div",classes:"ubc-card ubc-card--vert hover--no-underline group"}}),e.for("dataDowncast").elementToElement({model:"ubcCardVerticalOneImage",view:(e,{writer:t})=>t.createContainerElement("div",{class:"first-image ubc-card__media object-cover"})}),e.for("dataDowncast").elementToElement({model:"ubcCardVerticalOneContent",view:(e,{writer:t})=>t.createContainerElement("div",{class:"first-content ubc-card__content"})}),e.for("dataDowncast").elementToElement({model:"ubcCardVerticalOneFooter",view:(e,{writer:t})=>t.createContainerElement("div",{class:"first-footer ubc-card__actions"})}),e.for("editingDowncast").elementToElement({model:"ubcCardVerticalOne",view:(e,{writer:r})=>{const a=r.createContainerElement("div",{class:"widget-card card--one widget-card--vertical-one"});return(0,t.toWidget)(a,r,{label:"UBC Vertical Card widget",hasSelectionHandle:!0})}}),e.for("editingDowncast").elementToElement({model:"ubcCardVerticalOneInner",view:(e,{writer:r})=>{const a=r.createEditableElement("div",{class:"ubc-card ubc-card--vert hover--no-underline group"});return(0,t.toWidgetEditable)(a,r)}}),e.for("editingDowncast").elementToElement({model:"ubcCardVerticalOneImage",view:(e,{writer:r})=>{const a=r.createEditableElement("div",{class:"first-image ubc-card__media object-cover"});return(0,t.toWidgetEditable)(a,r)}}),e.for("editingDowncast").elementToElement({model:"ubcCardVerticalOneContent",view:(e,{writer:r})=>{const a=r.createEditableElement("div",{class:"first-content ubc-card__content"});return(0,t.toWidgetEditable)(a,r)}}),e.for("editingDowncast").elementToElement({model:"ubcCardVerticalOneFooter",view:(e,{writer:r})=>{const a=r.createEditableElement("div",{class:"first-footer ubc-card__actions"});return(0,t.toWidgetEditable)(a,r)}})}}var u=r("ckeditor5/src/ui.js");class m extends e.Plugin{static get requires(){return[u.ContextualBalloon]}init(){const e=this.editor;e.ui.componentFactory.add("ubcCardVerticalOne",(t=>{const r=e.commands.get("ubcCardVerticalOne"),a=new u.ButtonView(t);return a.set({label:e.t("Vertical Card"),icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="m17.5,18.125H2.5c-.345,0-.625-.28-.625-.625V2.5c0-.345.28-.625.625-.625h15c.345,0,.625.28.625.625v15c0,.345-.28.625-.625.625Zm-14.375-1.25h13.75V3.125H3.125v13.75Zm8.262-1.307h-6.915c-.345,0-.625-.28-.625-.625s.28-.625.625-.625h6.915c.345,0,.625.28.625.625s-.28.625-.625.625Zm4.141-2.508H4.472c-.345,0-.625-.28-.625-.625s.28-.625.625-.625h11.056c.345,0,.625.28.625.625s-.28.625-.625.625Zm0-2.436H4.472c-.345,0-.625-.28-.625-.625v-5.809c0-.345.28-.625.625-.625h11.056c.345,0,.625.28.625.625v5.809c0,.345-.28.625-.625.625Zm-10.431-1.25h9.806v-4.559H5.097v4.559Z"/></svg>',tooltip:!0}),a.bind("isOn","isEnabled").to(r,"value","isEnabled"),this.listenTo(a,"execute",(()=>e.execute("ubcCardVerticalOne"))),a}))}}function b(e){const t=e.getSelectedElement();return t&&C(t)?t:null}function g(e){const t=e.getFirstPosition();if(!t)return null;let r=t.parent;for(;r;){if(r.is("element")&&C(r))return r;r=r.parent}return null}function C(e){return!!e.hasClass("card--one")&&(0,t.isWidget)(e)}class w extends e.Plugin{static get requires(){return[t.WidgetToolbarRepository]}static get pluginName(){return"UbcCardVerticalOneToolbar"}afterInit(){const e=this.editor,r=e.plugins.get(t.WidgetToolbarRepository),a=e.config.get("ubcCardVerticalOne.contentToolbar"),n=e.config.get("ubcCardVerticalOne.tableToolbar");a&&r.register("ubcCardVerticalOneContent",{ariaLabel:e.t("Card Vertical One toolbar"),items:a,getRelatedElement:g}),n&&r.register("ubcCardVerticalOne",{ariaLabel:e.t("Card Vertical One toolbar"),items:n,getRelatedElement:b})}}class h extends e.Command{constructor(e){super(e)}execute(e={}){const{editor:t}=this,{model:r}=this.editor,{selection:a}=t.model.document,n=a.getSelectedElement();let i="";const c=e.value,o="backgroundclass";i=n&&n.is("element","ubcCardVerticalOne")?n:a.getFirstPosition().findAncestor("ubcCardVerticalOne"),r.change((e=>{if(a.isCollapsed)c?e.setAttribute(o,c,i):e.removeAttribute(o,i);else{const t=r.schema.getValidRanges(a.getRanges(),o);for(const r of t)c?e.setAttribute(o,c,r):e.removeAttribute(o,r)}}))}refresh(){const e=this.editor.model,t=e.document,r="backgroundclass";this.value=t.selection.getAttribute(r),this.isEnabled=e.schema.getValidRanges(t.selection,r)}}class p extends e.Plugin{static get requires(){return[t.Widget]}static get pluginName(){return"UbcCardVerticalOneBackgroundEditing"}constructor(e){super(e)}init(){const{editor:e}=this;this._defineConverters(),e.model.schema.extend("ubcCardVerticalOne",{allowAttributes:"backgroundclass"}),e.conversion.attributeToAttribute({model:"backgroundclass",view:"class"}),e.commands.add("ubcCardVerticalOneBackground",new h(e))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").attributeToAttribute({view:{key:"class",value:/\bbg-[\S]+/},model:{key:"backgroundclass",value:e=>e.getAttribute("class").match(/\bbg-([\S]+)/)[0]}}),e.for("downcast").attributeToAttribute({model:"backgroundclass",view:e=>({key:"class",value:e})})}}var v=r("ckeditor5/src/utils.js");class f extends e.Plugin{static get pluginName(){return"UbcCardVerticalOneBackgroundUI"}init(){const e=this.editor,t=e.t;c.map((e=>e)).value;const r=e.commands.get("ubcCardVerticalOneBackground");e.ui.componentFactory.add("ubcCardVerticalOneBackgroundOptions",(a=>{const n=(0,u.createDropdown)(a);return(0,u.addListToDropdown)(n,function(e,t){const r=new v.Collection,a="ubcCardVerticalOneBackground";let n=c.map((e=>e));for(const e of n){const n={type:"button",model:new u.Model({commandName:a,commandParam:e.value,label:e.label,withText:!0})};n.model.bind("isOn").to(t,"value",(t=>t===e.value||!(!t||!e.value)&&t.toLowerCase()===e.value.toLowerCase())),r.add(n)}return r}(0,r)),n.buttonView.set({label:t("Background Color"),tooltip:!0,withText:!0}),n.extendTemplate({attributes:{class:"ck-background-options-dropdown"}}),n.bind("isEnabled").to(r),this.listenTo(n,"execute",(t=>{e.execute(t.source.commandName,{value:t.source.commandParam}),e.editing.view.focus()})),n}))}}class O extends e.Plugin{static get requires(){return[p,f]}static get pluginName(){return"UbcCardVerticalOneBackground"}}class V extends e.Command{constructor(e){super(e)}execute(e={}){const{editor:t}=this,{model:r}=this.editor,{selection:a}=t.model.document,n=a.getSelectedElement();let i="";const c="shadowclass";i=n&&n.is("element","ubcCardVerticalOne")?n:a.getFirstPosition().findAncestor("ubcCardVerticalOne");let o=i.getAttribute(c);r.change((e=>{"drop-shadow-md"===o?(e.setAttribute(c,"drop-shadow-none",i),this.isOn=!1):(e.setAttribute(c,"drop-shadow-md",i),this.isOn=!0)}))}}class E extends e.Plugin{static get requires(){return[t.Widget]}static get pluginName(){return"UbcCardVerticalOneShadowEditing"}constructor(e){super(e)}init(){const{editor:e}=this;this._defineConverters(),e.model.schema.extend("ubcCardVerticalOne",{allowAttributes:"shadowclass"}),e.conversion.attributeToAttribute({model:"shadowclass",view:"class"}),e.commands.add("ubcCardVerticalOneShadow",new V(e))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").attributeToAttribute({view:{key:"class",value:/drop-shadow-[\S]+/},model:{key:"shadowclass",value:e=>e.getAttribute("class").match(/drop-shadow-([\S]+)/)[0]}}),e.for("downcast").attributeToAttribute({model:"shadowclass",view:e=>({key:"class",value:e})})}}class x extends e.Plugin{static get requires(){return[u.ContextualBalloon]}static get pluginName(){return"UbcCardVerticalOneShadowUI"}init(){const e=this.editor;e.ui.componentFactory.add("ubcCardVerticalOneShadowToggle",(t=>{const r=e.commands.get("ubcCardVerticalOneShadow"),a=new u.ButtonView(t);return a.set({label:e.t("Toggle Shadow"),tooltip:!0,withText:!0}),a.bind("isEnabled").to(r),a.bind("isOn").to(r),this.listenTo(a,"execute",(()=>e.execute("ubcCardVerticalOneShadow"))),a}))}}class k extends e.Plugin{static get requires(){return[E,x]}static get pluginName(){return"UbcCardVerticalOneShadow"}}class T extends e.Command{constructor(e){super(e)}execute(e={}){const{editor:t}=this,{model:r}=this.editor,{selection:a}=t.model.document,n=a.getSelectedElement();let i="";const c=e.value,o="marginclass";i=n&&n.is("element","ubcCardVerticalOne")?n:a.getFirstPosition().findAncestor("ubcCardVerticalOne"),r.change((e=>{if(a.isCollapsed)c?e.setAttribute(o,c,i):e.removeAttribute(o,i);else{const t=r.schema.getValidRanges(a.getRanges(),o);for(const r of t)c?e.setAttribute(o,c,r):e.removeAttribute(o,r)}}))}refresh(){const e=this.editor.model,t=e.document,r="marginclass";this.value=t.selection.getAttribute(r),this.isEnabled=e.schema.getValidRanges(t.selection,r)}}class A extends e.Plugin{static get requires(){return[t.Widget]}static get pluginName(){return"UbcCardVerticalOneMarginEditing"}constructor(e){super(e)}init(){const{editor:e}=this;this._defineConverters(),e.model.schema.extend("ubcCardVerticalOne",{allowAttributes:"marginclass"}),e.conversion.attributeToAttribute({model:"marginclass",view:"class"}),e.commands.add("ubcCardVerticalOneMargin",new T(e))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").attributeToAttribute({view:{key:"class",value:/\bmy-[\S]+/},model:{key:"marginclass",value:e=>e.getAttribute("class").match(/\bmy-([\S]+)/)[0]}}),e.for("downcast").attributeToAttribute({model:"marginclass",view:e=>({key:"class",value:e})})}}class y extends e.Plugin{static get pluginName(){return"UbcCardVerticalOneMarginUI"}init(){const e=this.editor,t=e.t;o.map((e=>e)).value;const r=e.commands.get("ubcCardVerticalOneMargin");e.ui.componentFactory.add("ubcCardVerticalOneMarginOptions",(a=>{const n=(0,u.createDropdown)(a);return(0,u.addListToDropdown)(n,function(e,t){const r=new v.Collection,a="ubcCardVerticalOneMargin";let n=o.map((e=>e));for(const e of n){const n={type:"button",model:new u.Model({commandName:a,commandParam:e.value,label:e.label,withText:!0})};n.model.bind("isOn").to(t,"value",(t=>t===e.value||!(!t||!e.value)&&t.toLowerCase()===e.value.toLowerCase())),r.add(n)}return r}(0,r)),n.buttonView.set({label:t("Margin"),tooltip:!0,withText:!0}),n.extendTemplate({attributes:{class:"ck-margin-options-dropdown"}}),n.bind("isEnabled").to(r),this.listenTo(n,"execute",(t=>{e.execute(t.source.commandName,{value:t.source.commandParam}),e.editing.view.focus()})),n}))}}class S extends e.Plugin{static get requires(){return[A,y]}static get pluginName(){return"UbcCardVerticalOneMargin"}}class _ extends e.Plugin{static get requires(){return[d,m,w,O,k,S]}}const P={UbcCardVerticalOne:_}})(),a=a.default})()));