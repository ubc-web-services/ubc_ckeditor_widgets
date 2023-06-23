!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CKEditor5=t():(e.CKEditor5=e.CKEditor5||{},e.CKEditor5.ubcTableCellClass=t())}(self,(()=>(()=>{var e={"ckeditor5/src/core.js":(e,t,s)=>{e.exports=s("dll-reference CKEditor5.dll")("./src/core.js")},"ckeditor5/src/ui.js":(e,t,s)=>{e.exports=s("dll-reference CKEditor5.dll")("./src/ui.js")},"ckeditor5/src/utils.js":(e,t,s)=>{e.exports=s("dll-reference CKEditor5.dll")("./src/utils.js")},"dll-reference CKEditor5.dll":e=>{"use strict";e.exports=CKEditor5.dll}},t={};function s(o){var l=t[o];if(void 0!==l)return l.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,s),r.exports}s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var o={};return(()=>{"use strict";s.d(o,{default:()=>c});var e=s("ckeditor5/src/core.js");class t extends e.Command{constructor(e,t){super(e),this.attributeName=t}refresh(){const e=this.editor.model.document.selection.getFirstPosition().findAncestor("tableCell");this.isEnabled=!!e,e&&(this.value=e.hasAttribute(this.attributeName))}execute(e={}){const t=this.editor,s=this.editor.model,o=t.model.document.selection,l=o.getSelectedElement();let r="";r=l&&l.is("element","tableCell")?l:o.getFirstPosition().findAncestor("tableCell");let i=!1;r.hasAttribute(this.attributeName)&&(i=!0),s.change((e=>{i?(e.removeAttribute(this.attributeName,r),e.removeAttribute("class",r)):(e.removeAttribute("half",r),e.removeAttribute("third",r),e.removeAttribute("quarter",r),e.removeAttribute("fifth",r),e.removeAttribute("sixth",r),e.setAttribute(this.attributeName,!0,r))}))}}class l extends e.Plugin{static get pluginName(){return"UbcTableCellClassEditing"}init(){const e=this.editor;e.model.schema.extend("tableCell",{allowAttributes:["half","third","quarter","fifth","sixth","class"]}),e.commands.add("setCellClass1",new t(e,"half")),e.commands.add("setCellClass2",new t(e,"third")),e.commands.add("setCellClass3",new t(e,"quarter")),e.commands.add("setCellClass4",new t(e,"fifth")),e.commands.add("setCellClass5",new t(e,"sixth")),[{id:"half",classes:"w-half"},{id:"third",classes:"w-one-third"},{id:"quarter",classes:"w-one-quarter"},{id:"fifth",classes:"w-one-fifth"},{id:"sixth",classes:"w-one-sixth"}].forEach((t=>{e.model.schema.extend("tableCell",{allowAttributes:t.id}),e.conversion.for("upcast").attributeToAttribute({model:{name:"tableCell",key:t.id,value:!0},view:{key:"class",value:t.classes}});const s="attribute:"+t.id+":tableCell";e.conversion.for("dataDowncast").add((e=>{e.on(s,((e,s,o)=>{const l=o.mapper.toViewElement(s.item);o.writer.removeClass("w-half",l),o.writer.removeClass("w-one-third",l),o.writer.removeClass("w-one-quarter",l),o.writer.removeClass("w-one-fifth",l),o.writer.removeClass("w-one-sixth",l),o.writer.addClass(t.classes,l)}))})),e.conversion.for("editingDowncast").add((e=>{e.on(s,((e,s,o)=>{const l=o.mapper.toViewElement(s.item);o.writer.removeClass("w-half",l),o.writer.removeClass("w-one-third",l),o.writer.removeClass("w-one-quarter",l),o.writer.removeClass("w-one-fifth",l),o.writer.removeClass("w-one-sixth",l),o.writer.addClass(t.classes,l)}))}))}))}}var r=s("ckeditor5/src/ui.js"),i=s("ckeditor5/src/utils.js");class a extends e.Plugin{static get pluginName(){return"UbcTableCellClassUi"}init(){const e=this.editor,t=this.editor.t;e.ui.componentFactory.add("tableCellUbc",(e=>{const s=[{type:"button",model:{commandName:"setCellClass1",label:t("Column width: 1/2"),bindIsOn:!0}},{type:"separator"},{type:"button",model:{commandName:"setCellClass2",label:t("Column width: 1/3"),bindIsOn:!0}},{type:"separator"},{type:"button",model:{commandName:"setCellClass3",label:t("Column width: 1/4"),bindIsOn:!0}},{type:"separator"},{type:"button",model:{commandName:"setCellClass4",label:t("Column width: 1/5"),bindIsOn:!0}},{type:"separator"},{type:"button",model:{commandName:"setCellClass5",label:t("Column width: 1/6"),bindIsOn:!0}}];return this._prepareDropdown(t("Table Cell Widths"),'\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"><path d="M17.956 9.782a.586.586 0 0 0-.123-.186L15.547 7.31a.572.572 0 0 0-.808.808l1.31 1.31H3.951l1.31-1.31a.572.572 0 0 0-.808-.808L2.167 9.596a.57.57 0 0 0 0 .809l2.286 2.286a.568.568 0 0 0 .808 0 .572.572 0 0 0 0-.808l-1.31-1.31h12.098l-1.31 1.31a.572.572 0 0 0 .808.808l2.286-2.286a.57.57 0 0 0 .123-.623Z" fill="black"/></svg>',s,e)}))}_prepareDropdown(e,t,s,o){const l=this.editor,i=(0,r.createDropdown)(o),a=this._fillDropdownWithListOptions(i,s);return i.buttonView.set({label:e,icon:t,tooltip:!0}),i.bind("isEnabled").toMany(a,"isEnabled",((...e)=>e.some((e=>e)))),this.listenTo(i,"execute",(e=>{l.execute(e.source.commandName),e.source instanceof r.ButtonView||l.editing.view.focus()})),i}_fillDropdownWithListOptions(e,t){const s=this.editor,o=[],l=new i.Collection;for(const e of t)n(e,s,o,l);return(0,r.addListToDropdown)(e,l,s.ui.componentFactory),o}}function n(e,t,s,o){const l=e.model=new r.Model(e.model),{commandName:i,bindIsOn:a}=e.model;if("button"===e.type){const e=t.commands.get(i);s.push(e),l.set({commandName:i}),l.bind("isEnabled").to(e),a&&l.bind("isOn").to(e,"value")}l.set({withText:!0}),o.add(e)}class d extends e.Plugin{static get requires(){return[l,a]}static get pluginName(){return"UbcTableCellClass"}}const c={UbcTableCellClass:d}})(),o=o.default})()));