!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CKEditor5=t():(e.CKEditor5=e.CKEditor5||{},e.CKEditor5.ubcColumnsTwo=t())}(self,(()=>(()=>{var e={"ckeditor5/src/core.js":(e,t,o)=>{e.exports=o("dll-reference CKEditor5.dll")("./src/core.js")},"ckeditor5/src/ui.js":(e,t,o)=>{e.exports=o("dll-reference CKEditor5.dll")("./src/ui.js")},"ckeditor5/src/utils.js":(e,t,o)=>{e.exports=o("dll-reference CKEditor5.dll")("./src/utils.js")},"ckeditor5/src/widget.js":(e,t,o)=>{e.exports=o("dll-reference CKEditor5.dll")("./src/widget.js")},"dll-reference CKEditor5.dll":e=>{"use strict";e.exports=CKEditor5.dll}},t={};function o(s){var n=t[s];if(void 0!==n)return n.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var s={};return(()=>{"use strict";o.d(s,{default:()=>q});var e=o("ckeditor5/src/core.js"),t=o("ckeditor5/src/widget.js");const n=document.querySelector('[data-drupal-selector="drupal-settings-json"]').innerHTML,i=JSON.parse(n),l=(i.ubcCkeditorWidgets.backgroundColors,i.ubcCkeditorWidgets.gapStyles),r=i.ubcCkeditorWidgets.marginStyles,c=(i.ubcCkeditorWidgets.paddingStyles,i.ubcCkeditorWidgets.tableStyles,i.ubcCkeditorWidgets.threeColumnLayoutStyles,i.ubcCkeditorWidgets.twoColumnLayoutStyles),a=(i.ubcCkeditorWidgets.widthStyles,{layoutcolclass:"align-equal",marginclass:"my-6",keylineclass:"widget-keyline-none"}),u={gapclass:"gap-6"};class d extends e.Command{constructor(e,t){super(e),this.attributeName=t}execute(){const e=this.editor,t=this.editor.model,o=e.model.document.selection,s=o.getSelectedElement();let n="";n=s&&s.is("element","ubcColumnsTwo")?s:o.getFirstPosition().findAncestor("ubcColumnsTwo"),t.change((e=>{t.insertContent(function(e){const t=e.createElement("ubcColumnsTwo",a,{class:"widget-column-options widget-columns-2"}),o=e.createElement("ubcColumnsTwoColumn",{class:"widget-region-one first-child--mt-0"}),s=e.createElement("ubcColumnsTwoColumn",{class:"widget-region-two first-child--mt-0"}),n=e.createElement("ubcColumnsTwoWrapper",u,{class:"widget--md--grid"});return e.append(n,t),e.append(o,n),e.appendElement("paragraph",o),e.append(s,n),e.appendElement("paragraph",s),t}(e))}))}refresh(){const{model:e}=this.editor,{selection:t}=e.document,o=t.getFirstPosition().findAncestor("ubcColumnsTwo"),s=e.schema.findAllowedParent(t.getFirstPosition(),"ubcColumnsTwo");this.isEnabled=null!==s,this.value=!!o}}class m extends e.Plugin{static get requires(){return[t.Widget]}constructor(e){super(e)}init(){const e=this.editor;e.conversion.attributeToAttribute({model:"class",view:"class"}),this._defineSchema(),this._defineConverters(),e.commands.add("ubcColumnsTwo",new d(e))}_defineSchema(){const e=this.editor.model.schema;e.register("ubcColumnsTwo",{isObject:!0,allowWhere:"$block",allowChildren:["ubcColumnsTwoWrapper"]}),e.register("ubcColumnsTwoWrapper",{isLimit:!0,allowIn:"ubcColumnsTwo",allowChildren:["ubcColumnsTwoColumn"]}),e.register("ubcColumnsTwoColumn",{isLimit:!0,allowIn:"ubcColumnsTwo",allowAttributes:"class",allowContentOf:"$root"}),e.addChildCheck(((e,t)=>{}))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").elementToElement({model:"ubcColumnsTwo",view:{name:"div",classes:["widget-columns-2"]}}),e.for("upcast").elementToElement({model:"ubcColumnsTwoWrapper",view:{name:"div",classes:"widget--md--grid"}}),e.for("upcast").elementToElement({model:(e,{writer:t})=>t.createElement("ubcColumnsTwoColumn",{class:e.getAttribute("class")}),view:{name:"div",classes:["first-child--mt-0"]}}),e.for("dataDowncast").elementToElement({model:"ubcColumnsTwo",view:(e,{writer:t})=>t.createContainerElement("div",{class:"widget-column-options widget-columns-2"})}),e.for("dataDowncast").elementToElement({model:"ubcColumnsTwoWrapper",view:(e,{writer:t})=>t.createContainerElement("div",{class:"widget--md--grid"})}),e.for("dataDowncast").elementToElement({model:"ubcColumnsTwoColumn",view:(e,{writer:t})=>t.createContainerElement("div",{class:"first-child--mt-0"})}),e.for("editingDowncast").elementToElement({model:"ubcColumnsTwo",view:(e,{writer:o})=>{const s=o.createContainerElement("div",{class:"widget-column-options widget-columns-2"});return(0,t.toWidget)(s,o,{label:"UBC Two Columns widget",hasSelectionHandle:!0})}}),e.for("editingDowncast").elementToElement({model:"ubcColumnsTwoWrapper",view:(e,{writer:o})=>{const s=o.createEditableElement("div",{class:"widget--md--grid"});return(0,t.toWidgetEditable)(s,o)}}),e.for("editingDowncast").elementToElement({model:"ubcColumnsTwoColumn",view:(e,{writer:o})=>{const s=o.createEditableElement("div",{class:"first-child--mt-0"});return(0,t.toWidgetEditable)(s,o)}})}}var g=o("ckeditor5/src/ui.js");class b extends e.Plugin{static get requires(){return[g.ContextualBalloon]}init(){const e=this.editor;e.ui.componentFactory.add("ubcColumnsTwo",(t=>{const o=e.commands.get("ubcColumnsTwo"),s=new g.ButtonView(t);return s.set({label:e.t("Two Columns"),icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="m17.5,18.125H2.5c-.345,0-.625-.28-.625-.625V2.5c0-.345.28-.625.625-.625h15c.345,0,.625.28.625.625v15c0,.345-.28.625-.625.625Zm-6.875-1.25h6.25V3.125h-6.25v13.75Zm-7.5,0h6.25V3.125H3.125v13.75Z"/></svg>',tooltip:!0,class:"cke5-ubccolumnstwo-insert-button"}),s.bind("isOn","isEnabled").to(o,"value","isEnabled"),this.listenTo(s,"execute",(()=>e.execute("ubcColumnsTwo"))),s}))}}function w(e){const t=e.getSelectedElement();return t&&p(t)?t:null}function C(e){const t=e.getFirstPosition();if(!t)return null;let o=t.parent;for(;o;){if(o.is("element")&&p(o))return o;o=o.parent}return null}function p(e){return!!e.hasClass("widget-columns-2")&&(0,t.isWidget)(e)}class T extends e.Plugin{static get requires(){return[t.WidgetToolbarRepository]}static get pluginName(){return"UbcColumnsTwoToolbar"}afterInit(){const e=this.editor,o=e.plugins.get(t.WidgetToolbarRepository),s=e.config.get("ubcColumnsTwo.contentToolbar"),n=e.config.get("ubcColumnsTwo.tableToolbar");s&&o.register("ubcColumnsTwoContent",{ariaLabel:e.t("Two Columns toolbar"),items:s,getRelatedElement:C}),n&&o.register("ubcColumnsTwo",{ariaLabel:e.t("Two Columns toolbar"),items:n,getRelatedElement:w})}}class h extends e.Command{constructor(e){super(e)}execute(e={}){const{editor:t}=this,{model:o}=this.editor,{selection:s}=t.model.document,n=s.getSelectedElement();let i="";const l=e.value,r="gapclass";i=n&&n.is("element","ubcColumnsTwo")?n.getChild(0):s.getFirstPosition().findAncestor("ubcColumnsTwo").getChild(0),o.change((e=>{if(s.isCollapsed)l?e.setAttribute(r,l,i):e.removeAttribute(r,i);else{const t=o.schema.getValidRanges(s.getRanges(),r);for(const o of t)l?(e.setAttribute(r,l,o),this.value=l):e.removeAttribute(r,o)}}))}refresh(){const{model:e}=this.editor,{selection:t}=e.document,o=t.getFirstPosition().findAncestor("ubcColumnsTwo"),s=e.schema.findAllowedParent(t.getFirstPosition(),"ubcColumnsTwo");this.isEnabled=null!==s,this.value=!!o&&o.getChild(0).getAttribute("gapclass")}}class v extends e.Plugin{static get requires(){return[t.Widget]}static get pluginName(){return"UbcColumnsTwoGapEditing"}constructor(e){super(e)}init(){const{editor:e}=this;this._defineConverters(),e.model.schema.extend("ubcColumnsTwoWrapper",{allowAttributes:"gapclass"}),e.conversion.attributeToAttribute({model:"gapclass",view:"class"}),e.commands.add("ubcColumnsTwoGap",new h(e))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").attributeToAttribute({view:{key:"class",value:/\bgap-[\S]+/},model:{key:"gapclass",value:e=>e.getAttribute("class").match(/\bgap-([\S]+)/)[0]}}),e.for("downcast").attributeToAttribute({model:"gapclass",view:e=>({key:"class",value:e})})}}var f=o("ckeditor5/src/utils.js");class y extends e.Plugin{static get pluginName(){return"UbcColumnsTwoGapUI"}init(){const e=this.editor,t=e.t;l.map((e=>e)).value;const o=e.commands.get("ubcColumnsTwoGap");e.ui.componentFactory.add("ubcColumnsTwoGapOptions",(s=>{const n=(0,g.createDropdown)(s);return(0,g.addListToDropdown)(n,function(e,t){const o=new f.Collection,s="ubcColumnsTwoGap";let n=l.map((e=>e));for(const e of n){const n={type:"button",model:new g.ViewModel({commandName:s,commandParam:e.value,label:e.label,withText:!0})};n.model.bind("isOn").to(t,"value",(t=>t===e.value||!(!t||!e.value)&&t.toLowerCase()===e.value.toLowerCase())),o.add(n)}return o}(0,o)),n.buttonView.set({label:t("Gap"),tooltip:!0,withText:!0,class:"cke5-ubccolumnstwo-gap-insert-button"}),n.extendTemplate({attributes:{class:"ck-gap-options-dropdown"}}),n.bind("isEnabled").to(o),this.listenTo(n,"execute",(t=>{e.execute(t.source.commandName,{value:t.source.commandParam}),e.editing.view.focus()})),n}))}}class x extends e.Plugin{static get requires(){return[v,y]}static get pluginName(){return"UbcColumnsTwoGap"}}class E extends e.Command{constructor(e){super(e)}execute(e={}){const{editor:t}=this,{model:o}=this.editor,{selection:s}=t.model.document,n=s.getSelectedElement();let i="";const l="keylineclass";i=n&&n.is("element","ubcColumnsTwo")?n:s.getFirstPosition().findAncestor("ubcColumnsTwo");let r=i.getAttribute(l);o.change((e=>{"widget-keylines"===r?(e.setAttribute(l,"widget-keyline-none",i),this.isOn=!1):(e.setAttribute(l,"widget-keylines",i),this.isOn=!0)}))}refresh(){const{model:e}=this.editor,{selection:t}=e.document,o=t.getFirstPosition().findAncestor("ubcColumnsTwo"),s=e.schema.findAllowedParent(t.getFirstPosition(),"ubcColumnsTwo");this.isEnabled=null!==s,this.value=!!o&&o.getAttribute("keylineclass")}}class A extends e.Plugin{static get requires(){return[t.Widget]}static get pluginName(){return"UbcColumnsTwoKeylineEditing"}constructor(e){super(e)}init(){const{editor:e}=this;this._defineConverters(),e.model.schema.extend("ubcColumnsTwo",{allowAttributes:"keylineclass"}),e.conversion.attributeToAttribute({model:"keylineclass",view:"class"}),e.commands.add("ubcColumnsTwoKeyline",new E(e))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").attributeToAttribute({view:{key:"class",value:/widget-keyline[\S]+/},model:{key:"keylineclass",value:e=>e.getAttribute("class").match(/widget-keyline([\S]+)/)[0]}}),e.for("downcast").attributeToAttribute({model:"keylineclass",view:e=>({key:"class",value:e})})}}class k extends e.Plugin{static get requires(){return[g.ContextualBalloon]}static get pluginName(){return"UbcColumnsTwoKeylineUI"}init(){const e=this.editor;e.ui.componentFactory.add("ubcColumnsTwoKeylineToggle",(t=>{const o=e.commands.get("ubcColumnsTwoKeyline"),s=new g.ButtonView(t);return s.set({label:e.t("Toggle Keylines"),tooltip:!0,withText:!0,class:"cke5-ubccolumnstwo-keyline-insert-button"}),s.bind("isEnabled").to(o),s.bind("isOn").to(o),this.listenTo(s,"execute",(()=>e.execute("ubcColumnsTwoKeyline"))),s}))}}class P extends e.Plugin{static get requires(){return[A,k]}static get pluginName(){return"UbcColumnsTwoKeyline"}}class W extends e.Command{constructor(e){super(e)}execute(e={}){const{editor:t}=this,{model:o}=this.editor,{selection:s}=t.model.document,n=s.getSelectedElement();let i="";const l=e.value,r="marginclass";i=n&&n.is("element","ubcColumnsTwo")?n:s.getFirstPosition().findAncestor("ubcColumnsTwo"),o.change((e=>{if(s.isCollapsed)l?e.setAttribute(r,l,i):e.removeAttribute(r,i);else{const t=o.schema.getValidRanges(s.getRanges(),r);for(const o of t)l?e.setAttribute(r,l,o):e.removeAttribute(r,o)}}))}refresh(){const{model:e}=this.editor,{selection:t}=e.document,o=t.getFirstPosition().findAncestor("ubcColumnsTwo"),s=e.schema.findAllowedParent(t.getFirstPosition(),"ubcColumnsTwo");this.isEnabled=null!==s,this.value=!!o&&o.getAttribute("marginclass")}}class S extends e.Plugin{static get requires(){return[t.Widget]}static get pluginName(){return"UbcColumnsTwoMarginEditing"}constructor(e){super(e)}init(){const{editor:e}=this;this._defineConverters(),e.model.schema.extend("ubcColumnsTwo",{allowAttributes:"marginclass"}),e.conversion.attributeToAttribute({model:"marginclass",view:"class"}),e.commands.add("ubcColumnsTwoMargin",new W(e))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").attributeToAttribute({view:{key:"class",value:/\bmy-[\S]+/},model:{key:"marginclass",value:e=>e.getAttribute("class").match(/\bmy-([\S]+)/)[0]}}),e.for("downcast").attributeToAttribute({model:"marginclass",view:e=>({key:"class",value:e})})}}class L extends e.Plugin{static get pluginName(){return"UbcColumnsTwoMarginUI"}init(){const e=this.editor,t=e.t;r.map((e=>e)).value;const o=e.commands.get("ubcColumnsTwoMargin");e.ui.componentFactory.add("ubcColumnsTwoMarginOptions",(s=>{const n=(0,g.createDropdown)(s);return(0,g.addListToDropdown)(n,function(e,t){const o=new f.Collection,s="ubcColumnsTwoMargin";let n=r.map((e=>e));for(const e of n){const n={type:"button",model:new g.ViewModel({commandName:s,commandParam:e.value,label:e.label,withText:!0})};n.model.bind("isOn").to(t,"value",(t=>t===e.value||!(!t||!e.value)&&t.toLowerCase()===e.value.toLowerCase())),o.add(n)}return o}(0,o)),n.buttonView.set({label:t("Margin"),tooltip:!0,withText:!0,class:"cke5-ubccolumnstwo-margin-insert-button"}),n.extendTemplate({attributes:{class:"ck-margin-options-dropdown"}}),n.bind("isEnabled").to(o),this.listenTo(n,"execute",(t=>{e.execute(t.source.commandName,{value:t.source.commandParam}),e.editing.view.focus()})),n}))}}class F extends e.Plugin{static get requires(){return[S,L]}static get pluginName(){return"UbcColumnsTwoMargin"}}class N extends e.Command{constructor(e){super(e)}execute(e={}){const{editor:t}=this,{model:o}=this.editor,{selection:s}=t.model.document,n=s.getSelectedElement();let i="";const l=e.value,r="layoutcolclass";i=n&&n.is("element","ubcColumnsTwo")?n:s.getFirstPosition().findAncestor("ubcColumnsTwo"),o.change((e=>{if(s.isCollapsed)l?e.setAttribute(r,l,i):e.removeAttribute(r,i);else{const t=o.schema.getValidRanges(s.getRanges(),r);for(const o of t)l?(e.setAttribute(r,l,o),this.value=l):e.removeAttribute(r,o)}}))}refresh(){const{model:e}=this.editor,{selection:t}=e.document,o=t.getFirstPosition().findAncestor("ubcColumnsTwo"),s=e.schema.findAllowedParent(t.getFirstPosition(),"ubcColumnsTwo");this.isEnabled=null!==s,this.value=!!o&&o.getAttribute("layoutcolclass")}}class j extends e.Plugin{static get requires(){return[t.Widget]}static get pluginName(){return"UbcColumnsTwoLayoutEditing"}constructor(e){super(e)}init(){const{editor:e}=this;this._defineConverters(),e.model.schema.extend("ubcColumnsTwo",{allowAttributes:"layoutcolclass"}),e.conversion.attributeToAttribute({model:"layoutcolclass",view:"class"}),e.commands.add("ubcColumnsTwoLayout",new N(e))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").attributeToAttribute({view:{key:"class",value:/\balign-[\S]+/},model:{key:"layoutcolclass",value:e=>e.getAttribute("class").match(/\balign-([\S]+)/)[0]}}),e.for("downcast").attributeToAttribute({model:"layoutcolclass",view:e=>({key:"class",value:e})})}}class U extends e.Plugin{static get pluginName(){return"UbcColumnsTwoLayoutUI"}init(){const e=this.editor,t=e.t,o=c.map((e=>e)),s=e.commands.get("ubcColumnsTwoLayout");e.ui.componentFactory.add("ubcColumnsTwoLayoutOptions",(n=>{const i=(0,g.createDropdown)(n);return(0,g.addListToDropdown)(i,function(e,t){const o=new f.Collection,s="ubcColumnsTwoLayout";for(const n of e){const e={type:"button",model:new g.ViewModel({commandName:s,commandParam:n.value,label:n.label,withText:!0})};e.model.bind("isOn").to(t,"value",(e=>e===n.value)),o.add(e)}return o}(o,s)),i.buttonView.set({label:t("Layout Options"),tooltip:!0,withText:!0,class:"cke5-ubccolumnstwo-layout-insert-button"}),i.extendTemplate({attributes:{class:"ck-3column-options-dropdown"}}),i.bind("isEnabled").to(s),this.listenTo(i,"execute",(t=>{e.execute(t.source.commandName,{value:t.source.commandParam}),e.editing.view.focus()})),i}))}}class K extends e.Plugin{static get requires(){return[j,U]}static get pluginName(){return"UbcColumnsTwoLayout"}}class O extends e.Plugin{static get requires(){return[m,b,T,x,P,F,K]}}const q={UbcColumnsTwo:O}})(),s=s.default})()));