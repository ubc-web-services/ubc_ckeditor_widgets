!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CKEditor5=t():(e.CKEditor5=e.CKEditor5||{},e.CKEditor5.ubcCardVerticalTwo=t())}(self,(()=>(()=>{var e={"ckeditor5/src/core.js":(e,t,a)=>{e.exports=a("dll-reference CKEditor5.dll")("./src/core.js")},"ckeditor5/src/ui.js":(e,t,a)=>{e.exports=a("dll-reference CKEditor5.dll")("./src/ui.js")},"ckeditor5/src/utils.js":(e,t,a)=>{e.exports=a("dll-reference CKEditor5.dll")("./src/utils.js")},"ckeditor5/src/widget.js":(e,t,a)=>{e.exports=a("dll-reference CKEditor5.dll")("./src/widget.js")},"dll-reference CKEditor5.dll":e=>{"use strict";e.exports=CKEditor5.dll}},t={};function a(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,a),i.exports}a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r={};return(()=>{"use strict";a.d(r,{default:()=>N});var e=a("ckeditor5/src/core.js"),t=a("ckeditor5/src/widget.js");const o=document.querySelector('[data-drupal-selector="drupal-settings-json"]').innerHTML,i=JSON.parse(o),c=i.ubcCkeditorWidgets.backgroundColors,n=i.ubcCkeditorWidgets.gapStyles,s=i.ubcCkeditorWidgets.marginStyles,l=(i.ubcCkeditorWidgets.paddingStyles,i.ubcCkeditorWidgets.tableStyles,i.ubcCkeditorWidgets.threeColumnLayoutStyles,i.ubcCkeditorWidgets.twoColumnLayoutStyles,i.ubcCkeditorWidgets.widthStyles,{backgroundclass:"bg-white",gapclass:"gap-6",marginclass:"my-6",shadowclass:"drop-shadow-none"});class d extends e.Command{constructor(e,t){super(e),this.attributeName=t}execute(){const e=this.editor,t=this.editor.model,a=e.model.document.selection,r=a.getSelectedElement();let o="";o=r&&r.is("element","ubcCardVerticalTwo")?r:a.getFirstPosition().findAncestor("ubcCardVerticalTwo"),t.change((e=>{t.insertContent(function(e){const t=e.createElement("ubcCardVerticalTwo",l),a=e.createElement("ubcCardVerticalTwoContainer"),r=e.createElement("ubcCardVerticalTwoInner"),o=e.createElement("ubcCardVerticalTwoImage",{class:"first-image"}),i=e.createElement("imageInline",{src:"https://placehold.co/700x350"}),c=e.createElement("ubcCardVerticalTwoContent",{class:"first-content"}),n=e.createElement("heading3",{class:"card__title"}),s=e.createElement("paragraph"),d=e.createElement("ubcCardVerticalTwoFooter",{class:"first-footer"}),u=e.createElement("paragraph"),m=e.createText("Learn more",{linkHref:"/"}),b=e.createElement("ubcCardVerticalTwoContainer"),w=e.createElement("ubcCardVerticalTwoInner"),g=e.createElement("ubcCardVerticalTwoImage",{class:"second-image"}),p=e.createElement("imageInline",{src:"https://placehold.co/700x350"}),C=e.createElement("ubcCardVerticalTwoContent",{class:"second-content"}),h=e.createElement("heading3",{class:"card__title"}),T=e.createElement("paragraph"),v=e.createElement("ubcCardVerticalTwoFooter",{class:"second-footer"}),V=e.createElement("paragraph"),f=e.createText("Learn more",{linkHref:"/"});return e.append(a,t),e.append(r,a),e.append(o,r),e.append(i,o),e.append(c,r),e.append(n,c),e.appendText("Sample Title",n),e.append(s,c),e.appendText("Sample Text",s),e.append(d,r),e.append(u,d),e.append(m,u),e.append(b,t),e.append(w,b),e.append(g,w),e.append(p,g),e.append(C,w),e.append(h,C),e.appendText("Other Sample Title",h),e.append(T,C),e.appendText("Other Sample Text",T),e.append(v,w),e.append(V,v),e.append(f,V),t}(e))}))}refresh(){const{model:e}=this.editor,{selection:t}=e.document,a=t.getFirstPosition().findAncestor("ubcCardVerticalTwo"),r=e.schema.findAllowedParent(t.getFirstPosition(),"ubcCardVerticalTwo");this.isEnabled=null!==r,this.value=!!a}}class u extends e.Plugin{static get requires(){return[t.Widget]}constructor(e){super(e)}init(){const e=this.editor;e.model.schema.extend("heading2",{allowAttributes:["class"]}),e.model.schema.extend("heading3",{allowAttributes:["class"]}),e.model.schema.extend("heading4",{allowAttributes:["class"]}),e.model.schema.extend("heading5",{allowAttributes:["class"]}),e.model.schema.extend("heading6",{allowAttributes:["class"]}),e.conversion.attributeToAttribute({model:"class",view:"class"}),this._defineSchema(),this._defineConverters(),e.commands.add("ubcCardVerticalTwo",new d(e))}_defineSchema(){const e=this.editor.model.schema;e.register("ubcCardVerticalTwo",{isObject:!0,allowWhere:"$block",allowAttributes:"class backgroundclass gapclass marginclass shadowclass",allowChildren:["ubcCardVerticalTwoContainer"]}),e.register("ubcCardVerticalTwoContainer",{isLimit:!0,allowIn:"ubcCardVerticalTwo",allowChildren:["ubcCardVerticalTwoInner"]}),e.register("ubcCardVerticalTwoInner",{isLimit:!0,allowIn:"ubcCardVerticalTwoContainer",allowChildren:["ubcCardVerticalTwoImage","ubcCardVerticalTwoContent","ubcCardVerticalTwoFooter"]}),e.register("ubcCardVerticalTwoImage",{isLimit:!0,isContent:!0,isSelectable:!0,allowIn:"ubcCardVerticalTwoInner",allowAttributes:"class",allowContentOf:["$block","$blockObject"],allowChildren:["drupalMedia","imageBlock","imageInline","htmlImg"]}),e.register("ubcCardVerticalTwoContent",{isLimit:!0,allowIn:"ubcCardVerticalTwoInner",allowAttributes:"class",allowContentOf:"$text",allowChildren:["heading2","heading3","heading4","heading5","heading6","paragraph"]}),e.register("ubcCardVerticalTwoFooter",{isLimit:!0,allowIn:"ubcCardVerticalTwoInner",allowAttributes:"class",allowContentOf:"$inlineObject",allowChildren:["paragraph"]}),e.addChildCheck(((e,t)=>{}))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").elementToElement({model:"ubcCardVerticalTwo",view:{name:"div",classes:["widget-card","card--two","md--flex-grid"]}}),e.for("upcast").elementToElement({model:"ubcCardVerticalTwoContainer",view:{name:"div",classes:["md--flex-1"]}}),e.for("upcast").elementToElement({model:"ubcCardVerticalTwoInner",view:{name:"div",classes:["ubc-card","ubc-card--vert","hover--no-underline","group"]}}),e.for("upcast").elementToElement({model:"ubcCardVerticalTwoImage",view:{name:"div",classes:["ubc-card__media","object-cover"]}}),e.for("upcast").elementToElement({model:"ubcCardVerticalTwoContent",view:{name:"div",classes:["ubc-card__content"]}}),e.for("upcast").elementToElement({model:"ubcCardVerticalTwoFooter",view:{name:"div",classes:["ubc-card__actions"]}}),e.for("dataDowncast").elementToElement({model:"ubcCardVerticalTwo",view:(e,{writer:t})=>t.createContainerElement("div",{class:"widget-card card--two md--flex-grid"})}),e.for("dataDowncast").elementToElement({model:"ubcCardVerticalTwoContainer",view:(e,{writer:t})=>t.createContainerElement("div",{class:"md--flex-1"})}),e.for("dataDowncast").elementToElement({model:"ubcCardVerticalTwoInner",view:(e,{writer:t})=>t.createContainerElement("div",{class:"ubc-card ubc-card--vert hover--no-underline group"})}),e.for("dataDowncast").elementToElement({model:"ubcCardVerticalTwoImage",view:(e,{writer:t})=>t.createEditableElement("div",{class:"ubc-card__media object-cover"})}),e.for("dataDowncast").elementToElement({model:"ubcCardVerticalTwoContent",view:(e,{writer:t})=>t.createEditableElement("div",{class:"ubc-card__content"})}),e.for("dataDowncast").elementToElement({model:"ubcCardVerticalTwoFooter",view:(e,{writer:t})=>t.createEditableElement("div",{class:"ubc-card__actions"})}),e.for("editingDowncast").elementToElement({model:"ubcCardVerticalTwo",view:(e,{writer:a})=>{const r=a.createContainerElement("div",{class:"widget-card card--two md--flex-grid"});return(0,t.toWidget)(r,a,{label:"UBC Vertical 2 Card widget",hasSelectionHandle:!0})}}),e.for("editingDowncast").elementToElement({model:"ubcCardVerticalTwoContainer",view:(e,{writer:a})=>{const r=a.createContainerElement("div",{class:"md--flex-1"});return(0,t.toWidget)(r,a)}}),e.for("editingDowncast").elementToElement({model:"ubcCardVerticalTwoInner",view:(e,{writer:a})=>{const r=a.createContainerElement("div",{class:"ubc-card ubc-card--vert hover--no-underline group"});return(0,t.toWidget)(r,a)}}),e.for("editingDowncast").elementToElement({model:"ubcCardVerticalTwoImage",view:(e,{writer:a})=>{const r=a.createEditableElement("div",{class:"ubc-card__media object-cover"});return(0,t.toWidgetEditable)(r,a)}}),e.for("editingDowncast").elementToElement({model:"ubcCardVerticalTwoContent",view:(e,{writer:a})=>{const r=a.createEditableElement("div",{class:"ubc-card__content"});return(0,t.toWidgetEditable)(r,a)}}),e.for("editingDowncast").elementToElement({model:"ubcCardVerticalTwoFooter",view:(e,{writer:a})=>{const r=a.createEditableElement("div",{class:"ubc-card__actions"});return(0,t.toWidgetEditable)(r,a)}})}}var m=a("ckeditor5/src/ui.js");class b extends e.Plugin{static get requires(){return[m.ContextualBalloon]}init(){const e=this.editor;e.ui.componentFactory.add("ubcCardVerticalTwo",(t=>{const a=e.commands.get("ubcCardVerticalTwo"),r=new m.ButtonView(t);return r.set({label:e.t("Two Vertical Cards"),icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="m17.509,18.125h-6.436c-.345,0-.625-.28-.625-.625V2.5c0-.345.28-.625.625-.625h6.436c.345,0,.625.28.625.625v15c0,.345-.28.625-.625.625Zm-5.811-1.25h5.186V3.125h-5.186v13.75Zm3.924-1.307h-2.662c-.345,0-.625-.28-.625-.625s.28-.625.625-.625h2.662c.345,0,.625.28.625.625s-.28.625-.625.625Zm0-2.508h-2.662c-.345,0-.625-.28-.625-.625s.28-.625.625-.625h2.662c.345,0,.625.28.625.625s-.28.625-.625.625Zm0-2.436h-2.662c-.345,0-.625-.28-.625-.625v-5.809c0-.345.28-.625.625-.625h2.662c.345,0,.625.28.625.625v5.809c0,.345-.28.625-.625.625Zm-2.037-1.25h1.412v-4.559h-1.412v4.559Z"/><path d="m8.927,18.125H2.491c-.345,0-.625-.28-.625-.625V2.5c0-.345.28-.625.625-.625h6.436c.345,0,.625.28.625.625v15c0,.345-.28.625-.625.625Zm-5.811-1.25h5.186V3.125H3.116v13.75Zm3.923-1.307h-2.662c-.345,0-.625-.28-.625-.625s.28-.625.625-.625h2.662c.345,0,.625.28.625.625s-.28.625-.625.625Zm0-2.508h-2.662c-.345,0-.625-.28-.625-.625s.28-.625.625-.625h2.662c.345,0,.625.28.625.625s-.28.625-.625.625Zm0-2.436h-2.662c-.345,0-.625-.28-.625-.625v-5.809c0-.345.28-.625.625-.625h2.662c.345,0,.625.28.625.625v5.809c0,.345-.28.625-.625.625Zm-2.037-1.25h1.412v-4.559h-1.412v4.559Z"/></svg>',tooltip:!0}),r.bind("isOn","isEnabled").to(a,"value","isEnabled"),this.listenTo(r,"execute",(()=>e.execute("ubcCardVerticalTwo"))),r}))}}function w(e){const t=e.getSelectedElement();return t&&p(t)?t:null}function g(e){const t=e.getFirstPosition();if(!t)return null;let a=t.parent;for(;a;){if(a.is("element")&&p(a))return a;a=a.parent}return null}function p(e){return!!e.hasClass("card--two")&&(0,t.isWidget)(e)}class C extends e.Plugin{static get requires(){return[t.WidgetToolbarRepository]}static get pluginName(){return"UbcCardVerticalTwoToolbar"}afterInit(){const e=this.editor,a=e.plugins.get(t.WidgetToolbarRepository),r=e.config.get("ubcCardVerticalTwo.contentToolbar"),o=e.config.get("ubcCardVerticalTwo.tableToolbar");r&&a.register("ubcCardVerticalTwoContent",{ariaLabel:e.t("Vertical Card Two toolbar"),items:r,getRelatedElement:g}),o&&a.register("ubcCardVerticalTwo",{ariaLabel:e.t("Vertical Card Two toolbar"),items:o,getRelatedElement:w})}}class h extends e.Command{constructor(e){super(e)}execute(e={}){const{editor:t}=this,{model:a}=this.editor,{selection:r}=t.model.document,o=r.getSelectedElement();let i="";const c=e.value,n="backgroundclass";i=o&&o.is("element","ubcCardVerticalTwo")?o:r.getFirstPosition().findAncestor("ubcCardVerticalTwo"),a.change((e=>{if(r.isCollapsed)c?e.setAttribute(n,c,i):e.removeAttribute(n,i);else{const t=a.schema.getValidRanges(r.getRanges(),n);for(const a of t)c?e.setAttribute(n,c,a):e.removeAttribute(n,a)}}))}refresh(){const e=this.editor.model,t=e.document,a="backgroundclass";this.value=t.selection.getAttribute(a),this.isEnabled=e.schema.getValidRanges(t.selection,a)}}class T extends e.Plugin{static get requires(){return[t.Widget]}static get pluginName(){return"UbcCardVerticalTwoBackgroundEditing"}constructor(e){super(e)}init(){const{editor:e}=this;this._defineConverters(),e.model.schema.extend("ubcCardVerticalTwo",{allowAttributes:"backgroundclass"}),e.conversion.attributeToAttribute({model:"backgroundclass",view:"class"}),e.commands.add("ubcCardVerticalTwoBackground",new h(e))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").attributeToAttribute({view:{key:"class",value:/\bbg-[\S]+/},model:{key:"backgroundclass",value:e=>e.getAttribute("class").match(/\bbg-([\S]+)/)[0]}}),e.for("downcast").attributeToAttribute({model:"backgroundclass",view:e=>({key:"class",value:e})})}}var v=a("ckeditor5/src/utils.js");class V extends e.Plugin{static get pluginName(){return"UbcCardVerticalTwoBackgroundUI"}init(){const e=this.editor,t=e.t;c.map((e=>e)).value;const a=e.commands.get("ubcCardVerticalTwoBackground");e.ui.componentFactory.add("ubcCardVerticalTwoBackgroundOptions",(r=>{const o=(0,m.createDropdown)(r);return(0,m.addListToDropdown)(o,function(e,t){const a=new v.Collection,r="ubcCardVerticalTwoBackground";let o=c.map((e=>e));for(const e of o){const o={type:"button",model:new m.Model({commandName:r,commandParam:e.value,label:e.label,withText:!0})};o.model.bind("isOn").to(t,"value",(t=>t===e.value||!(!t||!e.value)&&t.toLowerCase()===e.value.toLowerCase())),a.add(o)}return a}(0,a)),o.buttonView.set({label:t("Background Color"),tooltip:!0,withText:!0}),o.extendTemplate({attributes:{class:"ck-background-options-dropdown"}}),o.bind("isEnabled").to(a),this.listenTo(o,"execute",(t=>{e.execute(t.source.commandName,{value:t.source.commandParam}),e.editing.view.focus()})),o}))}}class f extends e.Plugin{static get requires(){return[T,V]}static get pluginName(){return"UbcCardVerticalTwoBackground"}}class E extends e.Command{constructor(e){super(e)}execute(e={}){const{editor:t}=this,{model:a}=this.editor,{selection:r}=t.model.document,o=r.getSelectedElement();let i="";const c="shadowclass";i=o&&o.is("element","ubcCardVerticalTwo")?o:r.getFirstPosition().findAncestor("ubcCardVerticalTwo");let n=i.getAttribute(c);a.change((e=>{"drop-shadow-md"===n?(e.setAttribute(c,"drop-shadow-none",i),this.isOn=!1):(e.setAttribute(c,"drop-shadow-md",i),this.isOn=!0)}))}}class x extends e.Plugin{static get requires(){return[t.Widget]}static get pluginName(){return"UbcCardVerticalTwoShadowEditing"}constructor(e){super(e)}init(){const{editor:e}=this;this._defineConverters(),e.model.schema.extend("ubcCardVerticalTwo",{allowAttributes:"shadowclass"}),e.conversion.attributeToAttribute({model:"shadowclass",view:"class"}),e.commands.add("ubcCardVerticalTwoShadow",new E(e))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").attributeToAttribute({view:{key:"class",value:/drop-shadow-[\S]+/},model:{key:"shadowclass",value:e=>e.getAttribute("class").match(/drop-shadow-([\S]+)/)[0]}}),e.for("downcast").attributeToAttribute({model:"shadowclass",view:e=>({key:"class",value:e})})}}class k extends e.Plugin{static get requires(){return[m.ContextualBalloon]}static get pluginName(){return"UbcCardVerticalTwoShadowUI"}init(){const e=this.editor;e.ui.componentFactory.add("ubcCardVerticalTwoShadowToggle",(t=>{const a=e.commands.get("ubcCardVerticalTwoShadow"),r=new m.ButtonView(t);return r.set({label:e.t("Toggle Shadow"),tooltip:!0,withText:!0}),r.bind("isEnabled").to(a),r.bind("isOn").to(a),this.listenTo(r,"execute",(()=>e.execute("ubcCardVerticalTwoShadow"))),r}))}}class A extends e.Plugin{static get requires(){return[x,k]}static get pluginName(){return"UbcCardVerticalTwoShadow"}}class y extends e.Command{constructor(e){super(e)}execute(e={}){const{editor:t}=this,{model:a}=this.editor,{selection:r}=t.model.document,o=r.getSelectedElement();let i="";const c=e.value,n="marginclass";i=o&&o.is("element","ubcCardVerticalTwo")?o:r.getFirstPosition().findAncestor("ubcCardVerticalTwo"),a.change((e=>{if(r.isCollapsed)c?e.setAttribute(n,c,i):e.removeAttribute(n,i);else{const t=a.schema.getValidRanges(r.getRanges(),n);for(const a of t)c?e.setAttribute(n,c,a):e.removeAttribute(n,a)}}))}refresh(){const e=this.editor.model,t=e.document,a="marginclass";this.value=t.selection.getAttribute(a),this.isEnabled=e.schema.getValidRanges(t.selection,a)}}class S extends e.Plugin{static get requires(){return[t.Widget]}static get pluginName(){return"UbcCardVerticalTwoMarginEditing"}constructor(e){super(e)}init(){const{editor:e}=this;this._defineConverters(),e.model.schema.extend("ubcCardVerticalTwo",{allowAttributes:"marginclass"}),e.conversion.attributeToAttribute({model:"marginclass",view:"class"}),e.commands.add("ubcCardVerticalTwoMargin",new y(e))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").attributeToAttribute({view:{key:"class",value:/\bmy-[\S]+/},model:{key:"marginclass",value:e=>e.getAttribute("class").match(/\bmy-([\S]+)/)[0]}}),e.for("downcast").attributeToAttribute({model:"marginclass",view:e=>({key:"class",value:e})})}}class _ extends e.Plugin{static get pluginName(){return"UbcCardVerticalTwoMarginUI"}init(){const e=this.editor,t=e.t;s.map((e=>e)).value;const a=e.commands.get("ubcCardVerticalTwoMargin");e.ui.componentFactory.add("ubcCardVerticalTwoMarginOptions",(r=>{const o=(0,m.createDropdown)(r);return(0,m.addListToDropdown)(o,function(e,t){const a=new v.Collection,r="ubcCardVerticalTwoMargin";let o=s.map((e=>e));for(const e of o){const o={type:"button",model:new m.Model({commandName:r,commandParam:e.value,label:e.label,withText:!0})};o.model.bind("isOn").to(t,"value",(t=>t===e.value||!(!t||!e.value)&&t.toLowerCase()===e.value.toLowerCase())),a.add(o)}return a}(0,a)),o.buttonView.set({label:t("Margin"),tooltip:!0,withText:!0}),o.extendTemplate({attributes:{class:"ck-margin-options-dropdown"}}),o.bind("isEnabled").to(a),this.listenTo(o,"execute",(t=>{e.execute(t.source.commandName,{value:t.source.commandParam}),e.editing.view.focus()})),o}))}}class P extends e.Plugin{static get requires(){return[S,_]}static get pluginName(){return"UbcCardVerticalTwoMargin"}}class I extends e.Command{constructor(e){super(e)}execute(e={}){const{editor:t}=this,{model:a}=this.editor,{selection:r}=t.model.document,o=r.getSelectedElement();let i="";const c=e.value,n="gapclass";i=o&&o.is("element","ubcCardVerticalTwo")?o:r.getFirstPosition().findAncestor("ubcCardVerticalTwo"),a.change((e=>{if(r.isCollapsed)c?e.setAttribute(n,c,i):e.removeAttribute(n,i);else{const t=a.schema.getValidRanges(r.getRanges(),n);for(const a of t)c?(e.setAttribute(n,c,a),this.value=c):e.removeAttribute(n,a)}}))}refresh(){const e=this.editor.model,t=e.document,a="gapclass";this.value=t.selection.getAttribute(a),this.isEnabled=e.schema.getValidRanges(t.selection,a)}}class j extends e.Plugin{static get requires(){return[t.Widget]}static get pluginName(){return"UbcCardVerticalTwoGapEditing"}constructor(e){super(e)}init(){const{editor:e}=this;this._defineConverters(),e.model.schema.extend("ubcCardVerticalTwo",{allowAttributes:"gapclass"}),e.conversion.attributeToAttribute({model:"gapclass",view:"class"}),e.commands.add("ubcCardVerticalTwoGap",new I(e))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").attributeToAttribute({view:{key:"class",value:/\bgap-[\S]+/},model:{key:"gapclass",value:e=>e.getAttribute("class").match(/\bgap-([\S]+)/)[0]}}),e.for("downcast").attributeToAttribute({model:"gapclass",view:e=>({key:"class",value:e})})}}class W extends e.Plugin{static get pluginName(){return"UbcCardVerticalTwoGapUI"}init(){const e=this.editor,t=e.t;n.map((e=>e)).value;const a=e.commands.get("ubcCardVerticalTwoGap");e.ui.componentFactory.add("ubcCardVerticalTwoGapOptions",(r=>{const o=(0,m.createDropdown)(r);return(0,m.addListToDropdown)(o,function(e,t){const a=new v.Collection,r="ubcCardVerticalTwoGap";let o=n.map((e=>e));for(const e of o){const o={type:"button",model:new m.Model({commandName:r,commandParam:e.value,label:e.label,withText:!0})};o.model.bind("isOn").to(t,"value",(t=>t===e.value||!(!t||!e.value)&&t.toLowerCase()===e.value.toLowerCase())),a.add(o)}return a}(0,a)),o.buttonView.set({label:t("Gap"),tooltip:!0,withText:!0}),o.extendTemplate({attributes:{class:"ck-gap-options-dropdown"}}),o.bind("isEnabled").to(a),this.listenTo(o,"execute",(t=>{e.execute(t.source.commandName,{value:t.source.commandParam}),e.editing.view.focus()})),o}))}}class O extends e.Plugin{static get requires(){return[j,W]}static get pluginName(){return"UbcCardVerticalTwoGap"}}class L extends e.Plugin{static get requires(){return[u,b,C,f,A,P,O]}}const N={UbcCardVerticalTwo:L}})(),r=r.default})()));