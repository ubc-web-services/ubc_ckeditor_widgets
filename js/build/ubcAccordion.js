!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CKEditor5=t():(e.CKEditor5=e.CKEditor5||{},e.CKEditor5.ubcAccordion=t())}(self,(()=>(()=>{var e={"ckeditor5/src/core.js":(e,t,o)=>{e.exports=o("dll-reference CKEditor5.dll")("./src/core.js")},"ckeditor5/src/ui.js":(e,t,o)=>{e.exports=o("dll-reference CKEditor5.dll")("./src/ui.js")},"ckeditor5/src/widget.js":(e,t,o)=>{e.exports=o("dll-reference CKEditor5.dll")("./src/widget.js")},"dll-reference CKEditor5.dll":e=>{"use strict";e.exports=CKEditor5.dll}},t={};function o(r){var i=t[r];if(void 0!==i)return i.exports;var c=t[r]={exports:{}};return e[r](c,c.exports,o),c.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r={};return(()=>{"use strict";o.d(r,{default:()=>l});var e=o("ckeditor5/src/core.js"),t=o("ckeditor5/src/widget.js");class i extends e.Command{constructor(e,t){super(e),this.attributeName=t}execute(e){const{model:t}=this.editor;t.change((e=>{t.insertContent(function(e){const t=e.createElement("ubcAccordion"),o=e.createElement("ubcAccordionTitle",{"aria-expanded":!0}),r=e.createElement("ubcAccordionDescription",{hidden:null}),i=e.createElement("ubcAccordionTitleWrapper");return e.append(i,t),e.append(o,i),e.appendElement("heading3",o),e.append(r,t),e.appendElement("paragraph",r),t}(e))}))}refresh(){const{model:e}=this.editor,{selection:t}=e.document,o=t.getFirstPosition().findAncestor("ubcAccordion"),r=e.schema.findAllowedParent(t.getFirstPosition(),"ubcAccordion");this.isEnabled=null!==r,this.value=!!o}}class c extends e.Plugin{static get requires(){return[t.Widget]}init(){const e=this.editor;this._defineSchema(),this._defineConverters(),e.model.schema.extend("ubcAccordion",{allowAttributes:["class"]}),e.conversion.attributeToAttribute({model:"class",view:"class"}),e.commands.add("ubcAccordion",new i(e))}_defineSchema(){const e=this.editor.model.schema;e.register("ubcAccordion",{isObject:!0,allowWhere:"$block",allowAttributes:["class"]}),e.register("ubcAccordionTitleWrapper",{allowIn:"ubcAccordion",allowChildren:"ubcAccordionTitle"}),e.register("ubcAccordionTitle",{isLimit:!0,allowIn:"ubcAccordion",allowContentOf:"$text",allowChildren:["heading2","heading3","heading4","heading5","heading6"],allowAttributes:"aria-expanded"}),e.register("ubcAccordionDescription",{isLimit:!0,allowIn:"ubcAccordion",allowContentOf:"$root",allowAttributes:"hidden"}),e.addChildCheck(((e,t)=>{}))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").elementToElement({model:"ubcAccordion",view:{name:"div",classes:["widget-accordion"]}}),e.for("upcast").elementToElement({model:"ubcAccordionTitleWrapper",view:{name:"div",classes:["accordion","js-reveal__parent"]}}),e.for("upcast").elementToElement({model:"ubcAccordionTitle",view:{name:"div",classes:["js-reveal__trigger","accordion__trigger"]}}),e.for("upcast").elementToElement({model:"ubcAccordionDescription",view:{name:"div",classes:["js-reveal__target","accordion__content","clearfix"]}}),e.for("dataDowncast").elementToElement({model:"ubcAccordion",view:(e,{writer:t})=>t.createContainerElement("div",{class:"widget-accordion"})}),e.for("dataDowncast").elementToElement({model:"ubcAccordionTitleWrapper",view:(e,{writer:t})=>t.createContainerElement("div",{class:"accordion js-reveal__parent"})}),e.for("dataDowncast").elementToElement({model:"ubcAccordionTitle",view:(e,{writer:t})=>t.createContainerElement("div",{class:"js-reveal__trigger accordion__trigger","aria-expanded":!1})}),e.for("dataDowncast").elementToElement({model:"ubcAccordionDescription",view:(e,{writer:t})=>t.createContainerElement("div",{class:"js-reveal__target accordion__content clearfix",hidden:"hidden"})}),e.for("editingDowncast").elementToElement({model:"ubcAccordion",view:(e,{writer:o})=>{const r=o.createContainerElement("div",{class:"widget-accordion"});return(0,t.toWidget)(r,o,{label:"UBC Accordion widget",hasSelectionHandle:!0})}}),e.for("editingDowncast").elementToElement({model:"ubcAccordionTitleWrapper",view:(e,{writer:o})=>{const r=o.createEditableElement("div",{class:"accordion js-reveal__parent"});return(0,t.toWidgetEditable)(r,o)}}),e.for("editingDowncast").elementToElement({model:"ubcAccordionTitle",view:(e,{writer:o})=>{const r=o.createEditableElement("div",{class:"js-reveal__trigger accordion__trigger","aria-expanded":"true"});return(0,t.toWidgetEditable)(r,o)}}),e.for("editingDowncast").elementToElement({model:"ubcAccordionDescription",view:(e,{writer:o})=>{const r=o.createEditableElement("div",{class:"js-reveal__target accordion__content clearfix"});return(0,t.toWidgetEditable)(r,o)}})}}var n=o("ckeditor5/src/ui.js");class d extends e.Plugin{static get requires(){return[n.ContextualBalloon]}init(){const e=this.editor;e.ui.componentFactory.add("ubcAccordion",(t=>{const o=e.commands.get("ubcAccordion"),r=new n.ButtonView(t);return r.set({label:e.t("Accordion"),icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="m17.5,18.125H2.5c-.345,0-.625-.28-.625-.625V2.5c0-.345.28-.625.625-.625h15c.345,0,.625.28.625.625v15c0,.345-.28.625-.625.625Zm-14.375-1.25h13.75V7.552H3.125v9.323Zm0-10.573h13.75v-3.177H3.125v3.177Z"/></svg>',tooltip:!0,class:"cke5-ubcaccordion-insert-button"}),r.bind("isOn","isEnabled").to(o,"value","isEnabled"),this.listenTo(r,"execute",(()=>e.execute("ubcAccordion"))),r}))}}class a extends e.Plugin{static get requires(){return[c,d]}}const l={UbcAccordion:a}})(),r=r.default})()));