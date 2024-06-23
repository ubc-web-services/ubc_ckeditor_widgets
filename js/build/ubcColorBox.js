!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CKEditor5=t():(e.CKEditor5=e.CKEditor5||{},e.CKEditor5.ubcColorBox=t())}(self,(()=>(()=>{var e={"ckeditor5/src/core.js":(e,t,o)=>{e.exports=o("dll-reference CKEditor5.dll")("./src/core.js")},"ckeditor5/src/ui.js":(e,t,o)=>{e.exports=o("dll-reference CKEditor5.dll")("./src/ui.js")},"ckeditor5/src/utils.js":(e,t,o)=>{e.exports=o("dll-reference CKEditor5.dll")("./src/utils.js")},"ckeditor5/src/widget.js":(e,t,o)=>{e.exports=o("dll-reference CKEditor5.dll")("./src/widget.js")},"dll-reference CKEditor5.dll":e=>{"use strict";e.exports=CKEditor5.dll}},t={};function o(s){var n=t[s];if(void 0!==n)return n.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var s={};return(()=>{"use strict";o.d(s,{default:()=>R});var e=o("ckeditor5/src/core.js"),t=o("ckeditor5/src/widget.js");const n=document.querySelector('[data-drupal-selector="drupal-settings-json"]').innerHTML,i=JSON.parse(n),r=i.ubcCkeditorWidgets.backgroundColors,l=(i.ubcCkeditorWidgets.gapStyles,i.ubcCkeditorWidgets.marginStyles),c=i.ubcCkeditorWidgets.paddingStyles,a=(i.ubcCkeditorWidgets.tableStyles,i.ubcCkeditorWidgets.threeColumnLayoutStyles,i.ubcCkeditorWidgets.twoColumnLayoutStyles,i.ubcCkeditorWidgets.widthStyles,{alignclass:"align-center",backgroundclass:"bg-white",marginclass:"my-6",paddingclass:"p-6",shadowclass:"drop-shadow-none"});class d extends e.Command{constructor(e,t){super(e),this.attributeName=t}execute(){const e=this.editor,t=this.editor.model,o=e.model.document.selection,s=o.getSelectedElement();let n="";n=s&&s.is("element","colorBox")?s:o.getFirstPosition().findAncestor("colorBox"),t.change((e=>{t.insertContent(function(e){const t=e.createElement("ubcColorBox",a,{class:"widget-color-box"}),o=e.createElement("ubcColorBoxInner");return e.append(o,t),e.appendElement("paragraph",o),t}(e))}))}refresh(){const{model:e}=this.editor,{selection:t}=e.document,o=t.getFirstPosition().findAncestor("ubcColorBox"),s=e.schema.findAllowedParent(t.getFirstPosition(),"ubcColorBox");this.isEnabled=null!==s,this.value=!!o}}class u extends e.Plugin{static get requires(){return[t.Widget]}init(){const e=this.editor;e.conversion.attributeToAttribute({model:"class",view:"class"}),this._defineSchema(),this._defineConverters(),e.commands.add("ubcColorBox",new d(e))}_defineSchema(){const e=this.editor.model.schema;e.register("ubcColorBox",{isObject:!0,allowWhere:"$block",allowChildren:["ubcColorBoxInner"]}),e.register("ubcColorBoxInner",{isLimit:!0,allowIn:"ubcColorBox",allowContentOf:"$root"}),e.addChildCheck(((e,t)=>{}))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").elementToElement({model:"ubcColorBox",view:{name:"div",classes:"widget-color-box"}}),e.for("upcast").elementToElement({model:"ubcColorBoxInner",view:{name:"div",classes:["widget-content","first-child--mt-0"]}}),e.for("dataDowncast").elementToElement({model:"ubcColorBox",view:(e,{writer:t})=>t.createContainerElement("div",{class:"widget-color-box"})}),e.for("dataDowncast").elementToElement({model:"ubcColorBoxInner",view:(e,{writer:t})=>t.createContainerElement("div",{class:"widget-content first-child--mt-0"})}),e.for("editingDowncast").elementToElement({model:"ubcColorBox",view:(e,{writer:o})=>{const s=o.createContainerElement("div",{class:"widget-color-box"});return(0,t.toWidget)(s,o,{label:"UBC Color Box widget",hasSelectionHandle:!0})}}),e.for("editingDowncast").elementToElement({model:"ubcColorBoxInner",view:(e,{writer:o})=>{const s=o.createEditableElement("div",{class:"widget-content first-child--mt-0"});return(0,t.toWidgetEditable)(s,o)}})}}var b=o("ckeditor5/src/ui.js");class g extends e.Plugin{static get requires(){return[b.ContextualBalloon]}init(){const e=this.editor;e.ui.componentFactory.add("ubcColorBox",(t=>{const o=e.commands.get("ubcColorBox"),s=new b.ButtonView(t);return s.set({label:e.t("Color Box"),icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="m11.374,14.437h-6.915c-.345,0-.625-.28-.625-.625s.28-.625.625-.625h6.915c.345,0,.625.28.625.625s-.28.625-.625.625Zm4.141-2.54H4.459c-.345,0-.625-.28-.625-.625s.28-.625.625-.625h11.056c.345,0,.625.28.625.625s-.28.625-.625.625Zm-1.2-2.54H4.42c-.309,0-.559-.28-.559-.625s.251-.625.559-.625h9.895c.309,0,.559.28.559.625s-.251.625-.559.625Zm1.227-2.54H4.485c-.345,0-.625-.28-.625-.625s.28-.625.625-.625h11.056c.345,0,.625.28.625.625s-.28.625-.625.625Z"/><path d="m17.671,17.998h-1.875c-.259,0-.469-.21-.469-.469s.21-.469.469-.469h1.406v-1.406c0-.259.21-.469.469-.469s.469.21.469.469v1.875c0,.259-.21.469-.469.469Z"/><path d="m14.148,17.998h-3.294c-.259,0-.469-.21-.469-.469s.21-.469.469-.469h3.294c.259,0,.469.21.469.469s-.21.469-.469.469Zm-4.942,0h-3.295c-.259,0-.469-.21-.469-.469s.21-.469.469-.469h3.295c.259,0,.469.21.469.469s-.21.469-.469.469Z"/><path d="m4.265,17.998h-1.875c-.259,0-.469-.21-.469-.469v-1.875c0-.259.21-.469.469-.469s.469.21.469.469v1.406h1.406c.259,0,.469.21.469.469s-.21.469-.469.469Z"/><path d="m2.39,14.495c-.259,0-.469-.21-.469-.469v-3.255c0-.259.21-.469.469-.469s.469.21.469.469v3.255c0,.259-.21.469-.469.469Zm0-4.883c-.259,0-.469-.21-.469-.469v-3.256c0-.259.21-.469.469-.469s.469.21.469.469v3.256c0,.259-.21.469-.469.469Z"/><path d="m2.39,4.729c-.259,0-.469-.21-.469-.469v-1.875c0-.259.21-.469.469-.469h1.875c.259,0,.469.21.469.469s-.21.469-.469.469h-1.406v1.406c0,.259-.21.469-.469.469Z"/><path d="m14.148,2.854h-3.294c-.259,0-.469-.21-.469-.469s.21-.469.469-.469h3.294c.259,0,.469.21.469.469s-.21.469-.469.469Zm-4.942,0h-3.294c-.259,0-.469-.21-.469-.469s.21-.469.469-.469h3.294c.259,0,.469.21.469.469s-.21.469-.469.469Z"/><path d="m17.671,4.729c-.259,0-.469-.21-.469-.469v-1.406h-1.406c-.259,0-.469-.21-.469-.469s.21-.469.469-.469h1.875c.259,0,.469.21.469.469v1.875c0,.259-.21.469-.469.469Z"/><path d="m17.671,14.495c-.259,0-.469-.21-.469-.469v-3.255c0-.259.21-.469.469-.469s.469.21.469.469v3.255c0,.259-.21.469-.469.469Zm0-4.883c-.259,0-.469-.21-.469-.469v-3.255c0-.259.21-.469.469-.469s.469.21.469.469v3.255c0,.259-.21.469-.469.469Z"/></svg>',tooltip:!0,class:"cke5-ubccolorbox-insert-button"}),s.bind("isOn","isEnabled").to(o,"value","isEnabled"),this.listenTo(s,"execute",(()=>e.execute("ubcColorBox"))),s}))}}function m(e){const t=e.getSelectedElement();return t&&h(t)?t:null}function x(e){const t=e.getFirstPosition();if(!t)return null;let o=t.parent;for(;o;){if(o.is("element")&&h(o))return o;o=o.parent}return null}function h(e){return!!e.hasClass("widget-color-box")&&(0,t.isWidget)(e)}class C extends e.Plugin{static get requires(){return[t.WidgetToolbarRepository]}static get pluginName(){return"UbcColorBoxToolbar"}afterInit(){const e=this.editor,o=e.plugins.get(t.WidgetToolbarRepository),s=e.config.get("ubcColorBox.contentToolbar"),n=e.config.get("ubcColorBox.tableToolbar");s&&o.register("ubcColorBoxContent",{ariaLabel:e.t("Color Box toolbar"),items:s,getRelatedElement:x}),n&&o.register("ubcColorBox",{ariaLabel:e.t("Color Box toolbar"),items:n,getRelatedElement:m})}}class p extends e.Command{constructor(e){super(e)}execute(e={}){const{editor:t}=this,{model:o}=this.editor,{selection:s}=t.model.document,n=s.getSelectedElement();let i="";const r=e.value,l="alignclass";i=n&&n.is("element","ubcColorBox")?n:s.getFirstPosition().findAncestor("ubcColorBox"),o.change((e=>{if(s.isCollapsed)r?e.setAttribute(l,r,i):e.removeAttribute(l,i);else{const t=o.schema.getValidRanges(s.getRanges(),l);for(const o of t)r?(e.setAttribute(l,r,o),this.isOn=!1):(e.removeAttribute(l,o),this.isOn=!0)}}))}refresh(){const{model:e}=this.editor,{selection:t}=e.document,o=t.getFirstPosition().findAncestor("ubcColorBox"),s=e.schema.findAllowedParent(t.getFirstPosition(),"ubcColorBox");this.isEnabled=null!==s,this.value=!!o&&o.getAttribute("alignclass")}}class w extends e.Plugin{static get requires(){return[t.Widget]}static get pluginName(){return"UbcColorBoxAlignEditing"}constructor(e){super(e)}init(){const{editor:e}=this;this._defineConverters(),e.model.schema.extend("ubcColorBox",{allowAttributes:"alignclass"}),e.conversion.attributeToAttribute({model:"alignclass",view:"class"}),e.commands.add("ubcColorBoxAlignment",new p(e))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").attributeToAttribute({view:{key:"class",value:/\balign-[\S]+/},model:{key:"alignclass",value:e=>e.getAttribute("class").match(/\balign-([\S]+)/)[0]}}),e.for("downcast").attributeToAttribute({model:"alignclass",view:e=>({key:"class",value:e})})}}class v extends e.Plugin{static get requires(){return[b.ContextualBalloon]}static get pluginName(){return"UbcColorBoxAlignUI"}init(){const t=this.editor;t.ui.componentFactory.add("ubcColorBoxAlignFull",(o=>{const s=t.commands.get("ubcColorBoxAlignment"),n=new b.ButtonView(o);return n.set({label:t.t("Full Width"),icon:e.icons.objectFullWidth,tooltip:!0,class:"cke5-ubccolorbox-align-full-button"}),n.bind("isEnabled").to(s),n.bind("isOn").to(s),this.listenTo(n,"execute",(()=>t.execute("ubcColorBoxAlignment",{value:"align-full"}))),n})),t.ui.componentFactory.add("ubcColorBoxAlignLeft",(o=>{const s=t.commands.get("ubcColorBoxAlignment"),n=new b.ButtonView(o);return n.set({label:t.t("Align left and wrap text"),icon:e.icons.objectLeft,tooltip:!0,class:"cke5-ubccolorbox-align-left-button"}),n.bind("isEnabled").to(s),n.bind("isOn").to(s),this.listenTo(n,"execute",(()=>t.execute("ubcColorBoxAlignment",{value:"align-left"}))),n})),t.ui.componentFactory.add("ubcColorBoxAlignCenter",(o=>{const s=t.commands.get("ubcColorBoxAlignment"),n=new b.ButtonView(o);return n.set({label:t.t("Align Center"),icon:e.icons.objectCenter,tooltip:!0,class:"cke5-ubccolorbox-align-center-button"}),n.bind("isEnabled").to(s),n.bind("isOn").to(s),this.listenTo(n,"execute",(()=>t.execute("ubcColorBoxAlignment",{value:"align-center"}))),n})),t.ui.componentFactory.add("ubcColorBoxAlignRight",(o=>{const s=t.commands.get("ubcColorBoxAlignment"),n=new b.ButtonView(o);return n.set({label:t.t("Align right and wrap text"),icon:e.icons.objectRight,tooltip:!0,class:"cke5-ubccolorbox-align-right-button"}),n.bind("isEnabled").to(s),n.bind("isOn").to(s),this.listenTo(n,"execute",(()=>{t.execute("ubcColorBoxAlignment",{value:"align-right"})})),n}))}}class f extends e.Plugin{static get requires(){return[w,v]}static get pluginName(){return"UbcColorBoxAlign"}}class B extends e.Command{constructor(e){super(e)}execute(e={}){const{editor:t}=this,{model:o}=this.editor,{selection:s}=t.model.document,n=s.getSelectedElement();let i="";const r=e.value,l="backgroundclass";i=n&&n.is("element","ubcColorBox")?n:s.getFirstPosition().findAncestor("ubcColorBox"),o.change((e=>{if(s.isCollapsed)r?e.setAttribute(l,r,i):e.removeAttribute(l,i);else{const t=o.schema.getValidRanges(s.getRanges(),l);for(const o of t)r?e.setAttribute(l,r,o):e.removeAttribute(l,o)}}))}refresh(){const{model:e}=this.editor,{selection:t}=e.document,o=t.getFirstPosition().findAncestor("ubcColorBox"),s=e.schema.findAllowedParent(t.getFirstPosition(),"ubcColorBox");this.isEnabled=null!==s,this.value=!!o&&o.getAttribute("backgroundclass")}}class A extends e.Plugin{static get requires(){return[t.Widget]}static get pluginName(){return"UbcColorBoxBackgroundEditing"}constructor(e){super(e)}init(){const{editor:e}=this;this._defineConverters(),e.model.schema.extend("ubcColorBox",{allowAttributes:"backgroundclass"}),e.conversion.attributeToAttribute({model:"backgroundclass",view:"class"}),e.commands.add("ubcColorBoxBackground",new B(e))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").attributeToAttribute({view:{key:"class",value:/\bbg-[\S]+/},model:{key:"backgroundclass",value:e=>e.getAttribute("class").match(/\bbg-([\S]+)/)[0]}}),e.for("downcast").attributeToAttribute({model:"backgroundclass",view:e=>({key:"class",value:e})})}}var k=o("ckeditor5/src/utils.js");class P extends e.Plugin{static get pluginName(){return"UbcColorBoxBackgroundUI"}init(){const e=this.editor,t=e.t;r.map((e=>e)).value;const o=e.commands.get("ubcColorBoxBackground");e.ui.componentFactory.add("ubcColorBoxBackgroundOptions",(s=>{const n=(0,b.createDropdown)(s);return(0,b.addListToDropdown)(n,function(e,t){const o=new k.Collection,s="ubcColorBoxBackground";let n=r.map((e=>e));for(const e of n){const n={type:"button",model:new b.ViewModel({commandName:s,commandParam:e.value,label:e.label,withText:!0})};n.model.bind("isOn").to(t,"value",(t=>t===e.value||!(!t||!e.value)&&t.toLowerCase()===e.value.toLowerCase())),o.add(n)}return o}(0,o)),n.buttonView.set({label:t("Background Color"),tooltip:!0,withText:!0,class:"cke5-ubccolorbox-bgcolor-insert-button"}),n.extendTemplate({attributes:{class:"ck-background-options-dropdown"}}),n.bind("isEnabled").to(o),this.listenTo(n,"execute",(t=>{e.execute(t.source.commandName,{value:t.source.commandParam}),e.editing.view.focus()})),n}))}}class E extends e.Plugin{static get requires(){return[A,P]}static get pluginName(){return"UbcColorBoxBackground"}}class T extends e.Command{constructor(e){super(e)}execute(e={}){const{editor:t}=this,{model:o}=this.editor,{selection:s}=t.model.document,n=s.getSelectedElement();let i="";const r=e.value,l="marginclass";i=n&&n.is("element","ubcColorBox")?n:s.getFirstPosition().findAncestor("ubcColorBox"),o.change((e=>{if(s.isCollapsed)r?e.setAttribute(l,r,i):e.removeAttribute(l,i);else{const t=o.schema.getValidRanges(s.getRanges(),l);for(const o of t)r?e.setAttribute(l,r,o):e.removeAttribute(l,o)}}))}refresh(){const{model:e}=this.editor,{selection:t}=e.document,o=t.getFirstPosition().findAncestor("ubcColorBox"),s=e.schema.findAllowedParent(t.getFirstPosition(),"ubcColorBox");this.isEnabled=null!==s,this.value=!!o&&o.getAttribute("marginclass")}}class y extends e.Plugin{static get requires(){return[t.Widget]}static get pluginName(){return"UbcColorBoxMarginEditing"}constructor(e){super(e)}init(){const{editor:e}=this;this._defineConverters(),e.model.schema.extend("ubcColorBox",{allowAttributes:"marginclass"}),e.conversion.attributeToAttribute({model:"marginclass",view:"class"}),e.commands.add("ubcColorBoxMargin",new T(e))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").attributeToAttribute({view:{key:"class",value:/\bmy-[\S]+/},model:{key:"marginclass",value:e=>e.getAttribute("class").match(/\bmy-([\S]+)/)[0]}}),e.for("downcast").attributeToAttribute({model:"marginclass",view:e=>({key:"class",value:e})})}}class S extends e.Plugin{static get pluginName(){return"UbcColorBoxMarginUI"}init(){const e=this.editor,t=e.t;l.map((e=>e)).value;const o=e.commands.get("ubcColorBoxMargin");e.ui.componentFactory.add("ubcColorBoxMarginOptions",(s=>{const n=(0,b.createDropdown)(s);return(0,b.addListToDropdown)(n,function(e,t){const o=new k.Collection,s="ubcColorBoxMargin";let n=l.map((e=>e));for(const e of n){const n={type:"button",model:new b.ViewModel({commandName:s,commandParam:e.value,label:e.label,withText:!0})};n.model.bind("isOn").to(t,"value",(t=>t===e.value||!(!t||!e.value)&&t.toLowerCase()===e.value.toLowerCase())),o.add(n)}return o}(0,o)),n.buttonView.set({label:t("Margin"),tooltip:!0,withText:!0,class:"cke5-ubc-colorbox-margin-insert-button"}),n.extendTemplate({attributes:{class:"ck-margin-options-dropdown"}}),n.bind("isEnabled").to(o),this.listenTo(n,"execute",(t=>{e.execute(t.source.commandName,{value:t.source.commandParam}),e.editing.view.focus()})),n}))}}class F extends e.Plugin{static get requires(){return[y,S]}static get pluginName(){return"UbcColorBoxMargin"}}class N extends e.Command{constructor(e){super(e)}execute(e={}){const{editor:t}=this,{model:o}=this.editor,{selection:s}=t.model.document,n=s.getSelectedElement();let i="";const r=e.value,l="paddingclass";i=n&&n.is("element","ubcColorBox")?n:s.getFirstPosition().findAncestor("ubcColorBox"),o.change((e=>{if(s.isCollapsed)r?e.setAttribute(l,r,i):e.removeAttribute(l,i);else{const t=o.schema.getValidRanges(s.getRanges(),l);for(const o of t)r?e.setAttribute(l,r,o):e.removeAttribute(l,o)}}))}refresh(){const{model:e}=this.editor,{selection:t}=e.document,o=t.getFirstPosition().findAncestor("ubcColorBox"),s=e.schema.findAllowedParent(t.getFirstPosition(),"ubcColorBox");this.isEnabled=null!==s,this.value=!!o&&o.getAttribute("paddingclass")}}class j extends e.Plugin{static get requires(){return[t.Widget]}static get pluginName(){return"UbcColorBoxPaddingEditing"}constructor(e){super(e)}init(){const{editor:e}=this;this._defineConverters(),e.model.schema.extend("ubcColorBox",{allowAttributes:"paddingclass"}),e.conversion.attributeToAttribute({model:"paddingclass",view:"class"}),e.commands.add("ubcColorBoxPadding",new N(e))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").attributeToAttribute({view:{key:"class",value:/\bp-[\S]+/},model:{key:"paddingclass",value:e=>e.getAttribute("class").match(/\bp-([\S]+)/)[0]}}),e.for("downcast").attributeToAttribute({model:"paddingclass",view:e=>({key:"class",value:e})})}}class U extends e.Plugin{static get pluginName(){return"UbcColorBoxPaddingUI"}init(){const e=this.editor,t=e.t;c.map((e=>e)).value;const o=e.commands.get("ubcColorBoxPadding");e.ui.componentFactory.add("ubcColorBoxPaddingOptions",(s=>{const n=(0,b.createDropdown)(s);return(0,b.addListToDropdown)(n,function(e,t){const o=new k.Collection,s="ubcColorBoxPadding";let n=c.map((e=>e));for(const e of n){const n={type:"button",model:new b.ViewModel({commandName:s,commandParam:e.value,label:e.label,withText:!0})};n.model.bind("isOn").to(t,"value",(t=>t===e.value||!(!t||!e.value)&&t.toLowerCase()===e.value.toLowerCase())),o.add(n)}return o}(0,o)),n.buttonView.set({label:t("Padding"),tooltip:!0,withText:!0,class:"cke5-ubccolorbox-padding-insert-button"}),n.extendTemplate({attributes:{class:"ck-padding-options-dropdown"}}),n.bind("isEnabled").to(o),this.listenTo(n,"execute",(t=>{e.execute(t.source.commandName,{value:t.source.commandParam}),e.editing.view.focus()})),n}))}}class O extends e.Plugin{static get requires(){return[j,U]}static get pluginName(){return"UbcColorBoxPadding"}}class W extends e.Command{constructor(e){super(e)}execute(e={}){const{editor:t}=this,{model:o}=this.editor,{selection:s}=t.model.document,n=s.getSelectedElement();let i="";const r="shadowclass";o.change((e=>{i=n&&n.is("element","ubcColorBox")?n:s.getFirstPosition().findAncestor("ubcColorBox"),"drop-shadow-md"===i.getAttribute(r)?(e.setAttribute(r,"drop-shadow-none",i),this.isOn=!1):(e.setAttribute(r,"drop-shadow-md",i),this.isOn=!0)}))}refresh(){const{model:e}=this.editor,{selection:t}=e.document,o=t.getFirstPosition().findAncestor("ubcColorBox"),s=e.schema.findAllowedParent(t.getFirstPosition(),"ubcColorBox");this.isEnabled=null!==s,this.value=!!o&&o.getAttribute("shadowclass")}}class q extends e.Plugin{static get requires(){return[t.Widget]}static get pluginName(){return"UbcColorBoxShadowEditing"}constructor(e){super(e)}init(){const{editor:e}=this;this._defineConverters(),e.model.schema.extend("ubcColorBox",{allowAttributes:"shadowclass"}),e.conversion.attributeToAttribute({model:"shadowclass",view:"class"}),e.commands.add("ubcColorBoxShadow",new W(e))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").attributeToAttribute({view:{key:"class",value:/drop-shadow-[\S]+/},model:{key:"shadowclass",value:e=>e.getAttribute("class").match(/drop-shadow-([\S]+)/)[0]}}),e.for("downcast").attributeToAttribute({model:"shadowclass",view:e=>({key:"class",value:e})})}}class L extends e.Plugin{static get requires(){return[b.ContextualBalloon]}static get pluginName(){return"UbcColorBoxShadowUI"}init(){const e=this.editor;e.ui.componentFactory.add("ubcColorBoxShadowToggle",(t=>{const o=e.commands.get("ubcColorBoxShadow"),s=new b.ButtonView(t);return s.set({label:e.t("Toggle Shadow"),tooltip:!0,withText:!0,class:"cke5-ubccolorbox-shadow-insert-button"}),s.bind("isEnabled").to(o,"isEnabled"),s.bind("isOn").to(o),this.listenTo(s,"execute",(()=>e.execute("ubcColorBoxShadow"))),s}))}}class V extends e.Plugin{static get requires(){return[q,L]}static get pluginName(){return"UbcColorBoxShadow"}}class Z extends e.Plugin{static get requires(){return[u,g,C,f,E,F,O,V]}}const R={UbcColorBox:Z}})(),s=s.default})()));