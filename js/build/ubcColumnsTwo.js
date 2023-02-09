!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CKEditor5=t():(e.CKEditor5=e.CKEditor5||{},e.CKEditor5.ubcColumnsTwo=t())}(self,(()=>(()=>{var e={"ckeditor5/src/core.js":(e,t,o)=>{e.exports=o("dll-reference CKEditor5.dll")("./src/core.js")},"ckeditor5/src/ui.js":(e,t,o)=>{e.exports=o("dll-reference CKEditor5.dll")("./src/ui.js")},"ckeditor5/src/widget.js":(e,t,o)=>{e.exports=o("dll-reference CKEditor5.dll")("./src/widget.js")},"dll-reference CKEditor5.dll":e=>{"use strict";e.exports=CKEditor5.dll}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var l=t[n]={exports:{}};return e[n](l,l.exports,o),l.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var n={};return(()=>{"use strict";o.d(n,{default:()=>d});var e=o("ckeditor5/src/core.js"),t=o("ckeditor5/src/widget.js");class s extends e.Command{execute(){const{model:e}=this.editor;e.change((t=>{e.insertContent(function(e){const t=e.createElement("ubcColumnsTwo"),o=e.createElement("ubcColumnsTwoInner"),n=e.createElement("ubcColumnsTwoFirst"),s=e.createElement("ubcColumnsTwoSecond");return e.append(o,t),e.append(n,o),e.append(s,o),e.appendElement("paragraph",n),e.appendElement("paragraph",s),t}(t))}))}refresh(){const{model:e}=this.editor,{selection:t}=e.document,o=e.schema.findAllowedParent(t.getFirstPosition(),"ubcColumnsTwo");this.isEnabled=null!==o,o&&(this.value=o.hasAttribute(this.attributeName))}}class l extends e.Plugin{static get requires(){return[t.Widget,t.WidgetToolbarRepository]}init(){this._defineSchema(),this._defineConverters(),this.editor.commands.add("insertUbcColumnsTwo",new s(this.editor));const e=this.editor;e.model.schema.extend("ubcColumnsTwo",{allowAttributes:["equal","lg-left","lg-right","class"]}),e.commands.add("setColumnClass1",new s(e,"equal")),e.commands.add("setColumnClass2",new s(e,"lg-left")),e.commands.add("setColumnClass3",new s(e,"lg-right")),[{id:"equal",classes:"align-equal"},{id:"lg-left",classes:"align-large-left"},{id:"lg-right",classes:"align-large-right"}].forEach((t=>{e.model.schema.extend("ubcColumnsTwo",{allowAttributes:t.id}),e.conversion.for("upcast").attributeToAttribute({model:{name:"ubcColumnsTwo",key:t.id,value:!0},view:{key:"class",value:t.classes}});const o="attribute:"+t.id+":ubcColumnsTwo";e.conversion.for("dataDowncast").add((e=>{e.on(o,((e,o,n)=>{const s=n.mapper.toViewElement(o.item);n.writer.removeClass("align-equal",s),n.writer.removeClass("align-large-left",s),n.writer.removeClass("align-large-right",s),n.writer.addClass(t.classes,s)}))})),e.conversion.for("editingDowncast").add((e=>{e.on(o,((e,o,n)=>{const s=n.mapper.toViewElement(o.item);n.writer.removeClass("align-equal",s),n.writer.removeClass("align-large-left",s),n.writer.removeClass("align-large-right",s),n.writer.addClass(t.classes,s)}))}))}))}_defineSchema(){const e=this.editor.model.schema;e.register("ubcColumnsTwo",{isObject:!0,allowWhere:"$block"}),e.register("ubcColumnsTwoInner",{isLimit:!0,allowIn:"ubcColumnsTwo",allowChildren:["ubcColumnsTwoFirst","ubcColumnsTwoSecond"]}),e.register("ubcColumnsTwoFirst",{isLimit:!0,allowIn:"ubcColumnsTwo",allowContentOf:"$root",allowAttributes:"hidden"}),e.register("ubcColumnsTwoSecond",{isLimit:!0,allowIn:"ubcColumnsTwo",allowContentOf:"$root",allowAttributes:"hidden"}),e.addChildCheck(((e,t)=>{}))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").elementToElement({model:"ubcColumnsTwo",view:{name:"div",classes:["widget-column-options","widget-columns-2","align-equal","my-6"]}}),e.for("upcast").elementToElement({model:"ubcColumnsTwoInner",view:{name:"div",classes:["widget--md--grid"]}}),e.for("upcast").elementToElement({model:"ubcColumnsTwoFirst",view:{name:"div",classes:["widget-region-one","first-child--mt-0"]}}),e.for("upcast").elementToElement({model:"ubcColumnsTwoSecond",view:{name:"div",classes:["widget-region-two","first-child--mt-0"]}}),e.for("dataDowncast").elementToElement({model:"ubcColumnsTwo",view:{name:"div",classes:["widget-column-options","widget-columns-2","align-equal","my-6"]}}),e.for("dataDowncast").elementToElement({model:"ubcColumnsTwoInner",view:{name:"div",classes:["widget--md--grid"]}}),e.for("dataDowncast").elementToElement({model:"ubcColumnsTwoFirst",view:(e,{writer:t})=>t.createContainerElement("div",{class:"widget-region-one first-child--mt-0"})}),e.for("dataDowncast").elementToElement({model:"ubcColumnsTwoSecond",view:(e,{writer:t})=>t.createContainerElement("div",{class:"widget-region-two first-child--mt-0"})}),e.for("editingDowncast").elementToElement({model:"ubcColumnsTwo",view:(e,{writer:o})=>{const n=o.createContainerElement("div",{class:"widget-column-options widget-columns-2 align-equal my-6"});return(0,t.toWidget)(n,o,{label:"UBC Two Columns widget",hasSelectionHandle:!0})}}),e.for("editingDowncast").elementToElement({model:"ubcColumnsTwoInner",view:(e,{writer:o})=>{const n=o.createEditableElement("div",{class:"widget--md--grid"});return(0,t.toWidgetEditable)(n,o)}}),e.for("editingDowncast").elementToElement({model:"ubcColumnsTwoFirst",view:(e,{writer:o})=>{const n=o.createEditableElement("div",{class:"widget-region-one first-child--mt-0"});return(0,t.toWidgetEditable)(n,o)}}),e.for("editingDowncast").elementToElement({model:"ubcColumnsTwoSecond",view:(e,{writer:o})=>{const n=o.createEditableElement("div",{class:"widget-region-two first-child--mt-0"});return(0,t.toWidgetEditable)(n,o)}})}}var i=o("ckeditor5/src/ui.js");class r extends e.Plugin{init(){const e=this.editor,t=this.editor.t;e.ui.componentFactory.add("ubcColumnsTwo",(t=>{const o=e.commands.get("insertUbcColumnsTwo"),n=new i.ButtonView(t);return n.set({label:e.t("Two Columns"),icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8 18H4.667a1.335 1.335 0 0 1-1.333-1.333V3.333C3.334 2.598 3.932 2 4.667 2H8c.735 0 1.333.598 1.333 1.333v13.333c0 .735-.598 1.333-1.333 1.333ZM8 3.332H4.667v13.334H8V3.333Zm7.333 14.667H12a1.335 1.335 0 0 1-1.333-1.333V3.333C10.667 2.598 11.265 2 12 2h3.333c.735 0 1.333.598 1.333 1.333v13.333c0 .735-.598 1.333-1.333 1.333Zm0-14.668H12v13.334h3.333V3.333Z"/></svg>',tooltip:!0}),n.bind("isOn","isEnabled").to(o,"value","isEnabled"),this.listenTo(n,"execute",(()=>e.execute("insertUbcColumnsTwo"))),n})),e.ui.componentFactory.add("columnsUbc",(e=>{const o=[{type:"button",model:{commandName:"setColumnClass1",label:t("Align Equal"),bindIsOn:!0}},{type:"separator"},{type:"button",model:{commandName:"setColumnClass2",label:t("Align Large Left"),bindIsOn:!0}},{type:"separator"},{type:"button",model:{commandName:"setColumnClass3",label:t("Align Large Right"),bindIsOn:!0}}];return this._prepareDropdown(t("Column Options"),buttonIcon,o,e)}))}}class a extends e.Plugin{static get requires(){return[l,r]}}const d={UbcColumnsTwo:a}})(),n=n.default})()));