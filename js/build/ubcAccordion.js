!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CKEditor5=t():(e.CKEditor5=e.CKEditor5||{},e.CKEditor5.ubcAccordion=t())}(self,(()=>(()=>{var e={"ckeditor5/src/core.js":(e,t,r)=>{e.exports=r("dll-reference CKEditor5.dll")("./src/core.js")},"ckeditor5/src/ui.js":(e,t,r)=>{e.exports=r("dll-reference CKEditor5.dll")("./src/ui.js")},"ckeditor5/src/widget.js":(e,t,r)=>{e.exports=r("dll-reference CKEditor5.dll")("./src/widget.js")},"dll-reference CKEditor5.dll":e=>{"use strict";e.exports=CKEditor5.dll}},t={};function r(o){var c=t[o];if(void 0!==c)return c.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var o={};return(()=>{"use strict";r.d(o,{default:()=>l});var e=r("ckeditor5/src/core.js"),t=r("ckeditor5/src/widget.js");class c extends e.Command{constructor(e,t){super(e),this.attributeName=t}execute(e){const{model:t}=this.editor;t.change((e=>{t.insertContent(function(e){const t=e.createElement("ubcAccordion"),r=e.createElement("ubcAccordionTitle",{"aria-expanded":!0}),o=e.createElement("ubcAccordionDescription",{hidden:null}),c=e.createElement("ubcAccordionTitleWrapper");return e.append(c,t),e.append(r,c),e.appendElement("heading3",r),e.append(o,t),e.appendElement("paragraph",o),t}(e))}))}refresh(){const{model:e}=this.editor,{selection:t}=e.document,r=t.getFirstPosition().findAncestor("ubcAccordion"),o=e.schema.findAllowedParent(t.getFirstPosition(),"ubcAccordion");this.isEnabled=null!==o,this.value=!!r}}class i extends e.Plugin{static get requires(){return[t.Widget]}init(){const e=this.editor;this._defineSchema(),this._defineConverters(),e.model.schema.extend("ubcAccordion",{allowAttributes:["class"]}),e.model.schema.extend("ubcAccordionTitleWrapper",{allowAttributes:["class"]}),e.model.schema.extend("ubcAccordionTitle",{allowAttributes:["class"]}),e.model.schema.extend("ubcAccordionDescription",{allowAttributes:["class"]}),e.conversion.attributeToAttribute({model:"class",view:"class"}),e.commands.add("ubcAccordion",new c(e))}_defineSchema(){const e=this.editor.model.schema;e.register("ubcAccordion",{isObject:!0,allowWhere:"$block",allowAttributes:["class"]}),e.register("ubcAccordionTitleWrapper",{allowIn:"ubcAccordion",allowChildren:"ubcAccordionTitle"}),e.register("ubcAccordionTitle",{isLimit:!0,allowIn:"ubcAccordion",allowContentOf:"$text",allowChildren:["heading2","heading3","heading4","heading5","heading6"],allowAttributes:"aria-expanded"}),e.register("ubcAccordionDescription",{isLimit:!0,allowIn:"ubcAccordion",allowContentOf:"$root",allowAttributes:"hidden"}),e.addChildCheck(((e,t)=>{}))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").elementToElement({model:(e,{writer:t})=>t.createElement("ubcAccordion",{class:e.getAttribute("class")}),view:{name:"div",classes:["widget-accordion"]}}),e.for("upcast").elementToElement({model:(e,{writer:t})=>t.createElement("ubcAccordionTitleWrapper",{class:e.getAttribute("class")}),view:{name:"div",classes:["accordion","js-reveal__parent"]}}),e.for("upcast").elementToElement({model:(e,{writer:t})=>t.createElement("ubcAccordionTitle",{class:e.getAttribute("class")}),view:{name:"div",classes:["js-reveal__trigger","accordion__trigger"]}}),e.for("upcast").elementToElement({model:(e,{writer:t})=>t.createElement("ubcAccordionDescription",{class:e.getAttribute("class")}),view:{name:"div",classes:["js-reveal__target","accordion__content","clearfix"]}}),e.for("dataDowncast").elementToElement({model:"ubcAccordion",view:(e,{writer:t})=>t.createContainerElement("div",{class:"widget-accordion"})}),e.for("dataDowncast").elementToElement({model:"ubcAccordionTitleWrapper",view:(e,{writer:t})=>t.createContainerElement("div",{class:"accordion js-reveal__parent"})}),e.for("dataDowncast").elementToElement({model:"ubcAccordionTitle",view:(e,{writer:t})=>t.createContainerElement("div",{class:"js-reveal__trigger accordion__trigger","aria-expanded":!1})}),e.for("dataDowncast").elementToElement({model:"ubcAccordionDescription",view:(e,{writer:t})=>t.createContainerElement("div",{class:"js-reveal__target accordion__content clearfix",hidden:"hidden"})}),e.for("editingDowncast").elementToElement({model:"ubcAccordion",view:(e,{writer:r})=>{const o=r.createContainerElement("div",{class:"widget-accordion"});return(0,t.toWidget)(o,r,{label:"UBC Accordion widget",hasSelectionHandle:!0})}}),e.for("editingDowncast").elementToElement({model:"ubcAccordionTitleWrapper",view:(e,{writer:r})=>{const o=r.createEditableElement("div",{class:"accordion js-reveal__parent"});return(0,t.toWidgetEditable)(o,r)}}),e.for("editingDowncast").elementToElement({model:"ubcAccordionTitle",view:(e,{writer:r})=>{const o=r.createEditableElement("div",{class:"js-reveal__trigger accordion__trigger","aria-expanded":"true"});return(0,t.toWidgetEditable)(o,r)}}),e.for("editingDowncast").elementToElement({model:"ubcAccordionDescription",view:(e,{writer:r})=>{const o=r.createEditableElement("div",{class:"js-reveal__target accordion__content clearfix"});return(0,t.toWidgetEditable)(o,r)}})}}var n=r("ckeditor5/src/ui.js");class s extends e.Plugin{static get requires(){return[n.ContextualBalloon]}init(){const e=this.editor;e.ui.componentFactory.add("ubcAccordion",(t=>{const r=e.commands.get("ubcAccordion"),o=new n.ButtonView(t);return o.set({label:e.t("Accordion"),icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="m17.5,18.125H2.5c-.345,0-.625-.28-.625-.625V2.5c0-.345.28-.625.625-.625h15c.345,0,.625.28.625.625v15c0,.345-.28.625-.625.625Zm-14.375-1.25h13.75V7.552H3.125v9.323Zm0-10.573h13.75v-3.177H3.125v3.177Z"/></svg>',tooltip:!0,class:"cke5-ubcaccordion-insert-button"}),o.bind("isOn","isEnabled").to(r,"value","isEnabled"),this.listenTo(o,"execute",(()=>e.execute("ubcAccordion"))),o}))}}class d extends e.Plugin{static get requires(){return[i,s]}}const l={UbcAccordion:d}})(),o=o.default})()));