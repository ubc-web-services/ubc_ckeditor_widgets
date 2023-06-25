!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CKEditor5=t():(e.CKEditor5=e.CKEditor5||{},e.CKEditor5.ubcCardVerticalThree=t())}(self,(()=>(()=>{var e={"ckeditor5/src/core.js":(e,t,r)=>{e.exports=r("dll-reference CKEditor5.dll")("./src/core.js")},"ckeditor5/src/ui.js":(e,t,r)=>{e.exports=r("dll-reference CKEditor5.dll")("./src/ui.js")},"ckeditor5/src/utils.js":(e,t,r)=>{e.exports=r("dll-reference CKEditor5.dll")("./src/utils.js")},"ckeditor5/src/widget.js":(e,t,r)=>{e.exports=r("dll-reference CKEditor5.dll")("./src/widget.js")},"dll-reference CKEditor5.dll":e=>{"use strict";e.exports=CKEditor5.dll}},t={};function r(a){var c=t[a];if(void 0!==c)return c.exports;var l=t[a]={exports:{}};return e[a](l,l.exports,r),l.exports}r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var a={};return(()=>{"use strict";r.d(a,{default:()=>L});var e=r("ckeditor5/src/core.js"),t=r("ckeditor5/src/widget.js");const c=[{label:"White",value:"bg-white"},{label:"Light Grey",value:"bg-grey-100"},{label:"Unit Primary",value:"bg-unit-primary"},{label:"Unit Secondary",value:"bg-unit-secondary"},{label:"Unit Tertiary",value:"bg-unit-tertiary"},{label:"Unit Accent",value:"bg-unit-accent"},{label:"UBC Blue",value:"bg-ubc-blue"},{label:"UBC Sea Blue",value:"bg-ubc-blue-sea"},{label:"UBC Cobalt Blue",value:"bg-ubc-blue-cobalt"},{label:"UBC Neptune Blue",value:"bg-ubc-blue-neptune"},{label:"UBC Cornflower Blue",value:"bg-ubc-blue-cornflower"},{label:"UBC Polar Blue",value:"bg-ubc-blue-polar"},{label:"UBC Frost Blue",value:"bg-ubc-blue-frost"}],l=[{label:"None",value:"gap-0"},{label:"Small",value:"gap-4"},{label:"Medium",value:"gap-6"},{label:"Large",value:"gap-8"},{label:"XLarge",value:"gap-12"},{label:"XXLarge",value:"gap-16"}],i=[{label:"None",value:"my-0"},{label:"Small Vertical",value:"my-4"},{label:"Medium Vertical",value:"my-6"},{label:"Large Vertical",value:"my-8"},{label:"XLarge Vertical",value:"my-12"},{label:"XXLarge Vertical",value:"my-16"}],n={backgroundclass:"bg-white",gapclass:"gap-6",marginclass:"my-6",shadowclass:"drop-shadow-none"};class o extends e.Command{constructor(e,t){super(e),this.attributeName=t}execute(){const e=this.editor,t=this.editor.model,r=e.model.document.selection,a=r.getSelectedElement();let c="";c=a&&a.is("element","ubcCardVerticalThree")?a:r.getFirstPosition().findAncestor("ubcCardVerticalThree"),t.change((e=>{t.insertContent(function(e){const t=e.createElement("ubcCardVerticalThree",n),r=e.createElement("ubcCardVerticalThreeContainer"),a=e.createElement("ubcCardVerticalThreeInner"),c=e.createElement("ubcCardVerticalThreeImage",{class:"first-image"}),l=e.createElement("imageInline",{src:"https://placehold.co/700x350"}),i=e.createElement("ubcCardVerticalThreeContent",{class:"first-content"}),o=e.createElement("heading3",{class:"card__title"}),s=e.createElement("paragraph"),d=e.createElement("ubcCardVerticalThreeFooter",{class:"first-footer"}),u=e.createElement("paragraph"),m=e.createText("Learn more",{linkHref:"/"}),b=e.createElement("ubcCardVerticalThreeContainer"),h=e.createElement("ubcCardVerticalThreeInner"),g=e.createElement("ubcCardVerticalThreeImage",{class:"second-image"}),p=e.createElement("imageInline",{src:"https://placehold.co/700x350"}),C=e.createElement("ubcCardVerticalThreeContent",{class:"second-content"}),v=e.createElement("heading3",{class:"card__title"}),T=e.createElement("paragraph"),w=e.createElement("ubcCardVerticalThreeFooter",{class:"second-footer"}),V=e.createElement("paragraph"),f=e.createText("Learn more",{linkHref:"/"}),E=e.createElement("ubcCardVerticalThreeContainer"),x=e.createElement("ubcCardVerticalThreeInner"),A=e.createElement("ubcCardVerticalThreeImage",{class:"third-image"}),k=e.createElement("imageInline",{src:"https://placehold.co/700x350"}),y=e.createElement("ubcCardVerticalThreeContent",{class:"third-content"}),S=e.createElement("heading3",{class:"card__title"}),_=e.createElement("paragraph"),P=e.createElement("ubcCardVerticalThreeFooter",{class:"third-footer"}),I=e.createElement("paragraph"),U=e.createText("Learn more",{linkHref:"/"});return e.append(r,t),e.append(a,r),e.append(c,a),e.append(l,c),e.append(i,a),e.append(o,i),e.appendText("Sample Title",o),e.append(s,i),e.appendText("Sample Text",s),e.append(d,a),e.append(u,d),e.append(m,u),e.append(b,t),e.append(h,b),e.append(g,h),e.append(p,g),e.append(C,h),e.append(v,C),e.appendText("Other Sample Title",v),e.append(T,C),e.appendText("Other Sample Text",T),e.append(w,h),e.append(V,w),e.append(f,V),e.append(E,t),e.append(x,E),e.append(A,x),e.append(k,A),e.append(y,x),e.append(S,y),e.appendText("Sample Title",S),e.append(_,y),e.appendText("More Sample Text",_),e.append(P,x),e.append(I,P),e.append(U,I),t}(e))}))}refresh(){const{model:e}=this.editor,{selection:t}=e.document,r=t.getFirstPosition().findAncestor("ubcCardVerticalThree"),a=e.schema.findAllowedParent(t.getFirstPosition(),"ubcCardVerticalThree");this.isEnabled=null!==a,this.value=!!r}}class s extends e.Plugin{static get requires(){return[t.Widget]}constructor(e){super(e)}init(){const e=this.editor;e.model.schema.extend("heading2",{allowAttributes:["class"]}),e.model.schema.extend("heading3",{allowAttributes:["class"]}),e.model.schema.extend("heading4",{allowAttributes:["class"]}),e.model.schema.extend("heading5",{allowAttributes:["class"]}),e.model.schema.extend("heading6",{allowAttributes:["class"]}),e.conversion.attributeToAttribute({model:"class",view:"class"}),this._defineSchema(),this._defineConverters(),e.commands.add("ubcCardVerticalThree",new o(e))}_defineSchema(){const e=this.editor.model.schema;e.register("ubcCardVerticalThree",{isObject:!0,allowWhere:"$block",allowAttributes:"class backgroundclass gapclass marginclass shadowclass",allowChildren:["ubcCardVerticalThreeContainer"]}),e.register("ubcCardVerticalThreeContainer",{isLimit:!1,allowIn:"ubcCardVerticalThree",allowChildren:["ubcCardVerticalThreeInner"]}),e.register("ubcCardVerticalThreeInner",{isLimit:!0,allowIn:"ubcCardVerticalThreeContainer",allowChildren:["ubcCardVerticalThreeImage","ubcCardVerticalThreeContent","ubcCardVerticalThreeFooter"]}),e.register("ubcCardVerticalThreeImage",{isLimit:!0,isContent:!0,isSelectable:!0,allowIn:"ubcCardVerticalThreeInner",allowAttributes:"class",allowContentOf:["$block","$blockObject"],allowChildren:["drupalMedia","imageBlock","imageInline","htmlImg"]}),e.register("ubcCardVerticalThreeContent",{isLimit:!0,allowIn:"ubcCardVerticalThreeInner",allowAttributes:"class",allowContentOf:"$text",allowChildren:["heading2","heading3","heading4","heading5","heading6","paragraph"]}),e.register("ubcCardVerticalThreeFooter",{isLimit:!0,allowIn:"ubcCardVerticalThreeInner",allowAttributes:"class",allowContentOf:"$inlineObject",allowChildren:["paragraph"]}),e.addChildCheck(((e,t)=>{}))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").elementToElement({model:"ubcCardVerticalThree",view:{name:"div",classes:["widget-card","card--three","widget-card--vertical-three","md--flex-grid"]}}),e.for("upcast").elementToElement({model:"ubcCardVerticalThreeContainer",view:{name:"div",classes:["md--flex-1"]}}),e.for("upcast").elementToElement({model:"ubcCardVerticalThreeInner",view:{name:"div",classes:["ubc-card","ubc-card--vert","hover--no-underline","group"]}}),e.for("upcast").elementToElement({model:"ubcCardVerticalThreeImage",view:{name:"div",classes:["ubc-card__media","object-cover"]}}),e.for("upcast").elementToElement({model:"ubcCardVerticalThreeContent",view:{name:"div",classes:["ubc-card__content"]}}),e.for("upcast").elementToElement({model:"ubcCardVerticalThreeFooter",view:{name:"div",classes:["ubc-card__actions"]}}),e.for("dataDowncast").elementToElement({model:"ubcCardVerticalThree",view:(e,{writer:t})=>t.createContainerElement("div",{class:"widget-card card--three widget-card--vertical-three md--flex-grid"})}),e.for("dataDowncast").elementToElement({model:"ubcCardVerticalThreeContainer",view:(e,{writer:t})=>t.createContainerElement("div",{class:"md--flex-1"})}),e.for("dataDowncast").elementToElement({model:"ubcCardVerticalThreeInner",view:(e,{writer:t})=>t.createContainerElement("div",{class:"ubc-card ubc-card--vert hover--no-underline group"})}),e.for("dataDowncast").elementToElement({model:"ubcCardVerticalThreeImage",view:(e,{writer:t})=>t.createEditableElement("div",{class:"ubc-card__media object-cover"})}),e.for("dataDowncast").elementToElement({model:"ubcCardVerticalThreeContent",view:(e,{writer:t})=>t.createEditableElement("div",{class:"ubc-card__content"})}),e.for("dataDowncast").elementToElement({model:"ubcCardVerticalThreeFooter",view:(e,{writer:t})=>t.createEditableElement("div",{class:"ubc-card__actions"})}),e.for("editingDowncast").elementToElement({model:"ubcCardVerticalThree",view:(e,{writer:r})=>{const a=r.createContainerElement("div",{class:"widget-card card--three widget-card--vertical-three md--flex-grid"});return(0,t.toWidget)(a,r,{label:"UBC Vertical 3 Card widget",hasSelectionHandle:!0})}}),e.for("editingDowncast").elementToElement({model:"ubcCardVerticalThreeContainer",view:(e,{writer:r})=>{const a=r.createContainerElement("div",{class:"md--flex-1"});return(0,t.toWidget)(a,r)}}),e.for("editingDowncast").elementToElement({model:"ubcCardVerticalThreeInner",view:(e,{writer:r})=>{const a=r.createContainerElement("div",{class:"ubc-card ubc-card--vert hover--no-underline group"});return(0,t.toWidget)(a,r)}}),e.for("editingDowncast").elementToElement({model:"ubcCardVerticalThreeImage",view:(e,{writer:r})=>{const a=r.createEditableElement("div",{class:"ubc-card__media object-cover"});return(0,t.toWidgetEditable)(a,r)}}),e.for("editingDowncast").elementToElement({model:"ubcCardVerticalThreeContent",view:(e,{writer:r})=>{const a=r.createEditableElement("div",{class:"ubc-card__content"});return(0,t.toWidgetEditable)(a,r)}}),e.for("editingDowncast").elementToElement({model:"ubcCardVerticalThreeFooter",view:(e,{writer:r})=>{const a=r.createEditableElement("div",{class:"ubc-card__actions"});return(0,t.toWidgetEditable)(a,r)}})}}var d=r("ckeditor5/src/ui.js");class u extends e.Plugin{static get requires(){return[d.ContextualBalloon]}init(){const e=this.editor;e.ui.componentFactory.add("ubcCardVerticalThree",(t=>{const r=e.commands.get("ubcCardVerticalThree"),a=new d.ButtonView(t);return a.set({label:e.t("Three Vertical Cards"),icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="m17.5,18.125h-3.738c-.345,0-.625-.28-.625-.625V2.5c0-.345.28-.625.625-.625h3.738c.345,0,.625.28.625.625v15c0,.345-.28.625-.625.625Zm-3.113-1.25h2.488V3.125h-2.488v13.75Zm-2.518,1.25h-3.738c-.345,0-.625-.28-.625-.625V2.5c0-.345.28-.625.625-.625h3.738c.345,0,.625.28.625.625v15c0,.345-.28.625-.625.625Zm-3.113-1.25h2.488V3.125h-2.488v13.75Zm-2.518,1.25h-3.738c-.345,0-.625-.28-.625-.625V2.5c0-.345.28-.625.625-.625h3.738c.345,0,.625.28.625.625v15c0,.345-.28.625-.625.625Zm-3.113-1.25h2.488V3.125h-2.488v13.75Zm12.524-6.25c-.345,0-.625-.28-.625-.625v-5.809c0-.345.28-.625.625-.625s.625.28.625.625v5.809c0,.345-.28.625-.625.625Zm-5.631,0c-.345,0-.625-.28-.625-.625v-5.809c0-.345.28-.625.625-.625s.625.28.625.625v5.809c0,.345-.28.625-.625.625Zm-5.631,0c-.345,0-.625-.28-.625-.625v-5.809c0-.345.28-.625.625-.625s.625.28.625.625v5.809c0,.345-.28.625-.625.625Z"/><path d="m15.649,15.618c-.345,0-.65-.306-.65-.65s.305-.649.65-.649.65.305.65.649-.305.65-.65.65Zm-5.631,0c-.345,0-.65-.306-.65-.65s.305-.649.65-.649.65.305.65.649-.305.65-.65.65Zm-5.631-.025c-.345,0-.65-.305-.65-.649s.305-.65.65-.65.65.306.65.65-.305.649-.65.649Zm5.576-2.482c-.345,0-.649-.306-.649-.65s.304-.649.649-.649.65.305.65.649-.305.65-.65.65Zm-5.576,0c-.345,0-.65-.306-.65-.65s.305-.649.65-.649.65.305.65.649-.305.65-.65.65Zm11.262-.05c-.345,0-.65-.306-.65-.65s.305-.649.65-.649.65.305.65.649-.305.65-.65.65Z"/></svg>',tooltip:!0}),a.bind("isOn","isEnabled").to(r,"value","isEnabled"),this.listenTo(a,"execute",(()=>e.execute("ubcCardVerticalThree"))),a}))}}function m(e){const t=e.getSelectedElement();return t&&h(t)?t:null}function b(e){const t=e.getFirstPosition();if(!t)return null;let r=t.parent;for(;r;){if(r.is("element")&&h(r))return r;r=r.parent}return null}function h(e){return!!e.hasClass("card--three")&&(0,t.isWidget)(e)}class g extends e.Plugin{static get requires(){return[t.WidgetToolbarRepository]}static get pluginName(){return"UbcCardVerticalThreeToolbar"}afterInit(){const e=this.editor,r=e.plugins.get(t.WidgetToolbarRepository),a=e.config.get("ubcCardVerticalThree.contentToolbar"),c=e.config.get("ubcCardVerticalThree.tableToolbar");a&&r.register("ubcCardVerticalThreeContent",{ariaLabel:e.t("Vertical Card Three toolbar"),items:a,getRelatedElement:b}),c&&r.register("ubcCardVerticalThree",{ariaLabel:e.t("Vertical Card Three toolbar"),items:c,getRelatedElement:m})}}class p extends e.Command{constructor(e){super(e)}execute(e={}){const{editor:t}=this,{model:r}=this.editor,{selection:a}=t.model.document,c=a.getSelectedElement();let l="";const i=e.value,n="backgroundclass";l=c&&c.is("element","ubcCardVerticalThree")?c:a.getFirstPosition().findAncestor("ubcCardVerticalThree"),r.change((e=>{if(a.isCollapsed)i?e.setAttribute(n,i,l):e.removeAttribute(n,l);else{const t=r.schema.getValidRanges(a.getRanges(),n);for(const r of t)i?e.setAttribute(n,i,r):e.removeAttribute(n,r)}}))}refresh(){const e=this.editor.model,t=e.document,r="backgroundclass";this.value=t.selection.getAttribute(r),this.isEnabled=e.schema.getValidRanges(t.selection,r)}}class C extends e.Plugin{static get requires(){return[t.Widget]}static get pluginName(){return"UbcCardVerticalThreeBackgroundEditing"}constructor(e){super(e)}init(){const{editor:e}=this;this._defineConverters(),e.model.schema.extend("ubcCardVerticalThree",{allowAttributes:"backgroundclass"}),e.conversion.attributeToAttribute({model:"backgroundclass",view:"class"}),e.commands.add("ubcCardVerticalThreeBackground",new p(e))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").attributeToAttribute({view:{key:"class",value:/\bbg-[\S]+/},model:{key:"backgroundclass",value:e=>e.getAttribute("class").match(/\bbg-([\S]+)/)[0]}}),e.for("downcast").attributeToAttribute({model:"backgroundclass",view:e=>({key:"class",value:e})})}}var v=r("ckeditor5/src/utils.js");class T extends e.Plugin{static get pluginName(){return"UbcCardVerticalThreeBackgroundUI"}init(){const e=this.editor,t=e.t;c.map((e=>e)).value;const r=e.commands.get("ubcCardVerticalThreeBackground");e.ui.componentFactory.add("ubcCardVerticalThreeBackgroundOptions",(a=>{const l=(0,d.createDropdown)(a);return(0,d.addListToDropdown)(l,function(e,t){const r=new v.Collection,a="ubcCardVerticalThreeBackground";let l=c.map((e=>e));for(const e of l){const c={type:"button",model:new d.Model({commandName:a,commandParam:e.value,label:e.label,withText:!0})};c.model.bind("isOn").to(t,"value",(t=>t===e.value||!(!t||!e.value)&&t.toLowerCase()===e.value.toLowerCase())),r.add(c)}return r}(0,r)),l.buttonView.set({label:t("Background Color"),tooltip:!0,withText:!0}),l.extendTemplate({attributes:{class:"ck-background-options-dropdown"}}),l.bind("isEnabled").to(r),this.listenTo(l,"execute",(t=>{e.execute(t.source.commandName,{value:t.source.commandParam}),e.editing.view.focus()})),l}))}}class w extends e.Plugin{static get requires(){return[C,T]}static get pluginName(){return"UbcCardVerticalThreeBackground"}}class V extends e.Command{constructor(e){super(e)}execute(e={}){const{editor:t}=this,{model:r}=this.editor,{selection:a}=t.model.document,c=a.getSelectedElement();let l="";const i="shadowclass";l=c&&c.is("element","ubcCardVerticalThree")?c:a.getFirstPosition().findAncestor("ubcCardVerticalThree");let n=l.getAttribute(i);r.change((e=>{"drop-shadow-md"===n?(e.setAttribute(i,"drop-shadow-none",l),this.isOn=!1):(e.setAttribute(i,"drop-shadow-md",l),this.isOn=!0)}))}}class f extends e.Plugin{static get requires(){return[t.Widget]}static get pluginName(){return"UbcCardVerticalThreeShadowEditing"}constructor(e){super(e)}init(){const{editor:e}=this;this._defineConverters(),e.model.schema.extend("ubcCardVerticalThree",{allowAttributes:"shadowclass"}),e.conversion.attributeToAttribute({model:"shadowclass",view:"class"}),e.commands.add("ubcCardVerticalThreeShadow",new V(e))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").attributeToAttribute({view:{key:"class",value:/drop-shadow-[\S]+/},model:{key:"shadowclass",value:e=>e.getAttribute("class").match(/drop-shadow-([\S]+)/)[0]}}),e.for("downcast").attributeToAttribute({model:"shadowclass",view:e=>({key:"class",value:e})})}}class E extends e.Plugin{static get requires(){return[d.ContextualBalloon]}static get pluginName(){return"UbcCardVerticalThreeShadowUI"}init(){const e=this.editor;e.ui.componentFactory.add("ubcCardVerticalThreeShadowToggle",(t=>{const r=e.commands.get("ubcCardVerticalThreeShadow"),a=new d.ButtonView(t);return a.set({label:e.t("Toggle Shadow"),tooltip:!0,withText:!0}),a.bind("isEnabled").to(r),a.bind("isOn").to(r),this.listenTo(a,"execute",(()=>e.execute("ubcCardVerticalThreeShadow"))),a}))}}class x extends e.Plugin{static get requires(){return[f,E]}static get pluginName(){return"UbcCardVerticalThreeShadow"}}class A extends e.Command{constructor(e){super(e)}execute(e={}){const{editor:t}=this,{model:r}=this.editor,{selection:a}=t.model.document,c=a.getSelectedElement();let l="";const i=e.value,n="marginclass";l=c&&c.is("element","ubcCardVerticalThree")?c:a.getFirstPosition().findAncestor("ubcCardVerticalThree"),r.change((e=>{if(a.isCollapsed)i?e.setAttribute(n,i,l):e.removeAttribute(n,l);else{const t=r.schema.getValidRanges(a.getRanges(),n);for(const r of t)i?e.setAttribute(n,i,r):e.removeAttribute(n,r)}}))}refresh(){const e=this.editor.model,t=e.document,r="marginclass";this.value=t.selection.getAttribute(r),this.isEnabled=e.schema.getValidRanges(t.selection,r)}}class k extends e.Plugin{static get requires(){return[t.Widget]}static get pluginName(){return"UbcCardVerticalThreeMarginEditing"}constructor(e){super(e)}init(){const{editor:e}=this;this._defineConverters(),e.model.schema.extend("ubcCardVerticalThree",{allowAttributes:"marginclass"}),e.conversion.attributeToAttribute({model:"marginclass",view:"class"}),e.commands.add("ubcCardVerticalThreeMargin",new A(e))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").attributeToAttribute({view:{key:"class",value:/\bmy-[\S]+/},model:{key:"marginclass",value:e=>e.getAttribute("class").match(/\bmy-([\S]+)/)[0]}}),e.for("downcast").attributeToAttribute({model:"marginclass",view:e=>({key:"class",value:e})})}}class y extends e.Plugin{static get pluginName(){return"UbcCardVerticalThreeMarginUI"}init(){const e=this.editor,t=e.t;i.map((e=>e)).value;const r=e.commands.get("ubcCardVerticalThreeMargin");e.ui.componentFactory.add("ubcCardVerticalThreeMarginOptions",(a=>{const c=(0,d.createDropdown)(a);return(0,d.addListToDropdown)(c,function(e,t){const r=new v.Collection,a="ubcCardVerticalThreeMargin";let c=i.map((e=>e));for(const e of c){const c={type:"button",model:new d.Model({commandName:a,commandParam:e.value,label:e.label,withText:!0})};c.model.bind("isOn").to(t,"value",(t=>t===e.value||!(!t||!e.value)&&t.toLowerCase()===e.value.toLowerCase())),r.add(c)}return r}(0,r)),c.buttonView.set({label:t("Margin"),tooltip:!0,withText:!0}),c.extendTemplate({attributes:{class:"ck-margin-options-dropdown"}}),c.bind("isEnabled").to(r),this.listenTo(c,"execute",(t=>{e.execute(t.source.commandName,{value:t.source.commandParam}),e.editing.view.focus()})),c}))}}class S extends e.Plugin{static get requires(){return[k,y]}static get pluginName(){return"UbcCardVerticalThreeMargin"}}class _ extends e.Command{constructor(e){super(e)}execute(e={}){const{editor:t}=this,{model:r}=this.editor,{selection:a}=t.model.document,c=a.getSelectedElement();let l="";const i=e.value,n="gapclass";l=c&&c.is("element","ubcCardVerticalThree")?c:a.getFirstPosition().findAncestor("ubcCardVerticalThree"),r.change((e=>{if(a.isCollapsed)i?e.setAttribute(n,i,l):e.removeAttribute(n,l);else{const t=r.schema.getValidRanges(a.getRanges(),n);for(const r of t)i?(e.setAttribute(n,i,r),this.value=i):e.removeAttribute(n,r)}}))}refresh(){const e=this.editor.model,t=e.document,r="gapclass";this.value=t.selection.getAttribute(r),this.isEnabled=e.schema.getValidRanges(t.selection,r)}}class P extends e.Plugin{static get requires(){return[t.Widget]}static get pluginName(){return"UbcCardVerticalThreeGapEditing"}constructor(e){super(e)}init(){const{editor:e}=this;this._defineConverters(),e.model.schema.extend("ubcCardVerticalThree",{allowAttributes:"gapclass"}),e.conversion.attributeToAttribute({model:"gapclass",view:"class"}),e.commands.add("ubcCardVerticalThreeGap",new _(e))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").attributeToAttribute({view:{key:"class",value:/\bgap-[\S]+/},model:{key:"gapclass",value:e=>e.getAttribute("class").match(/\bgap-([\S]+)/)[0]}}),e.for("downcast").attributeToAttribute({model:"gapclass",view:e=>({key:"class",value:e})})}}class I extends e.Plugin{static get pluginName(){return"UbcCardVerticalThreeGapUI"}init(){const e=this.editor,t=e.t;l.map((e=>e)).value;const r=e.commands.get("ubcCardVerticalThreeGap");e.ui.componentFactory.add("ubcCardVerticalThreeGapOptions",(a=>{const c=(0,d.createDropdown)(a);return(0,d.addListToDropdown)(c,function(e,t){const r=new v.Collection,a="ubcCardVerticalThreeGap";let c=l.map((e=>e));for(const e of c){const c={type:"button",model:new d.Model({commandName:a,commandParam:e.value,label:e.label,withText:!0})};c.model.bind("isOn").to(t,"value",(t=>t===e.value||!(!t||!e.value)&&t.toLowerCase()===e.value.toLowerCase())),r.add(c)}return r}(0,r)),c.buttonView.set({label:t("Gap"),tooltip:!0,withText:!0}),c.extendTemplate({attributes:{class:"ck-gap-options-dropdown"}}),c.bind("isEnabled").to(r),this.listenTo(c,"execute",(t=>{e.execute(t.source.commandName,{value:t.source.commandParam}),e.editing.view.focus()})),c}))}}class U extends e.Plugin{static get requires(){return[P,I]}static get pluginName(){return"UbcCardVerticalThreeGap"}}class B extends e.Plugin{static get requires(){return[s,u,g,w,x,S,U]}}const L={UbcCardVerticalThree:B}})(),a=a.default})()));