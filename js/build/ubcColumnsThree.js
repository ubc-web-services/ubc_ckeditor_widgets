!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CKEditor5=t():(e.CKEditor5=e.CKEditor5||{},e.CKEditor5.ubcColumnsThree=t())}(self,(()=>(()=>{var e={"ckeditor5/src/core.js":(e,t,s)=>{e.exports=s("dll-reference CKEditor5.dll")("./src/core.js")},"ckeditor5/src/ui.js":(e,t,s)=>{e.exports=s("dll-reference CKEditor5.dll")("./src/ui.js")},"ckeditor5/src/utils.js":(e,t,s)=>{e.exports=s("dll-reference CKEditor5.dll")("./src/utils.js")},"ckeditor5/src/widget.js":(e,t,s)=>{e.exports=s("dll-reference CKEditor5.dll")("./src/widget.js")},"dll-reference CKEditor5.dll":e=>{"use strict";e.exports=CKEditor5.dll}},t={};function s(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,s),i.exports}s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var o={};return(()=>{"use strict";s.d(o,{default:()=>V});var e=s("ckeditor5/src/core.js"),t=s("ckeditor5/src/widget.js");const n=document.querySelector('[data-drupal-selector="drupal-settings-json"]').innerHTML,i=JSON.parse(n),r=(i.ubcCkeditorWidgets.backgroundColors,i.ubcCkeditorWidgets.gapStyles),l=i.ubcCkeditorWidgets.marginStyles,a=(i.ubcCkeditorWidgets.paddingStyles,i.ubcCkeditorWidgets.tableStyles,i.ubcCkeditorWidgets.threeColumnLayoutStyles),c=(i.ubcCkeditorWidgets.twoColumnLayoutStyles,i.ubcCkeditorWidgets.widthStyles,{layoutclass:"align-equal",marginclass:"my-6",gapclass:"gap-6",keylineclass:"widget-keyline-none"}),u={gapclass:"gap-6"};class d extends e.Command{constructor(e,t){super(e),this.attributeName=t}execute(){const e=this.editor,t=this.editor.model,s=e.model.document.selection,o=s.getSelectedElement();let n="";n=o&&o.is("element","ubcColumnsThree")?o:s.getFirstPosition().findAncestor("ubcColumnsThree"),t.change((e=>{t.insertContent(function(e){const t=e.createElement("ubcColumnsThree",c),s=e.createElement("ubcColumnsThreeColumn",{class:"widget-region-one"}),o=e.createElement("ubcColumnsThreeColumn",{class:"widget-region-two"}),n=e.createElement("ubcColumnsThreeColumn",{class:"widget-region-three"}),i=e.createElement("ubcColumnsThreeWrapper",u);return e.append(i,t),e.append(s,i),e.appendElement("paragraph",s),e.append(o,i),e.appendElement("paragraph",o),e.append(n,i),e.appendElement("paragraph",n),t}(e))}))}refresh(){const{model:e}=this.editor,{selection:t}=e.document,s=t.getFirstPosition().findAncestor("ubcColumnsThree"),o=e.schema.findAllowedParent(t.getFirstPosition(),"ubcColumnsThree");this.isEnabled=null!==o,this.value=!!s}}class m extends e.Plugin{static get requires(){return[t.Widget]}constructor(e){super(e)}init(){this._defineSchema(),this._defineConverters(),this.editor.commands.add("ubcColumnsThree",new d(this.editor))}_defineSchema(){const e=this.editor.model.schema;e.register("ubcColumnsThree",{isObject:!0,allowWhere:"$block",allowAttributes:"class keylineclass layoutclass marginclass",allowChildren:["ubcColumnsThreeWrapper"]}),e.register("ubcColumnsThreeWrapper",{isLimit:!0,allowIn:"ubcColumnsThree",allowAttributes:"gapclass",allowChildren:["ubcColumnsThreeColumn"]}),e.register("ubcColumnsThreeColumn",{isLimit:!0,allowIn:"ubcColumnsThree",allowContentOf:"$root",allowAttributes:"class"}),e.addChildCheck(((e,t)=>{}))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").elementToElement({model:"ubcColumnsThree",view:{name:"div",classes:["widget-column-options","widget-columns-3"]}}),e.for("upcast").elementToElement({model:"ubcColumnsThreeWrapper",view:{name:"div",classes:"widget--md--grid"}}),e.for("upcast").elementToElement({model:"ubcColumnsThreeColumn",view:{name:"div",classes:["first-child--mt-0"]}}),e.for("dataDowncast").elementToElement({model:"ubcColumnsThree",view:(e,{writer:t})=>t.createContainerElement("div",{class:"widget-column-options widget-columns-3"})}),e.for("dataDowncast").elementToElement({model:"ubcColumnsThreeWrapper",view:(e,{writer:t})=>t.createContainerElement("div",{class:"widget--md--grid"})}),e.for("dataDowncast").elementToElement({model:"ubcColumnsThreeColumn",view:(e,{writer:t})=>t.createContainerElement("div",{class:"first-child--mt-0"})}),e.for("editingDowncast").elementToElement({model:"ubcColumnsThree",view:(e,{writer:s})=>{const o=s.createContainerElement("div",{class:"widget-column-options widget-columns-3"});return(0,t.toWidget)(o,s,{label:"UBC Three Columns widget",hasSelectionHandle:!0})}}),e.for("editingDowncast").elementToElement({model:"ubcColumnsThreeWrapper",view:(e,{writer:s})=>{const o=s.createEditableElement("div",{class:"widget--md--grid"});return(0,t.toWidgetEditable)(o,s)}}),e.for("editingDowncast").elementToElement({model:"ubcColumnsThreeColumn",view:(e,{writer:s})=>{const o=s.createEditableElement("div",{class:"first-child--mt-0"});return(0,t.toWidgetEditable)(o,s)}})}}var g=s("ckeditor5/src/ui.js");class b extends e.Plugin{static get requires(){return[g.ContextualBalloon]}init(){const e=this.editor;e.ui.componentFactory.add("ubcColumnsThree",(t=>{const s=e.commands.get("ubcColumnsThree"),o=new g.ButtonView(t);return o.set({label:e.t("Three Columns"),icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="m17.5,18.125H2.5c-.345,0-.625-.28-.625-.625V2.5c0-.345.28-.625.625-.625h15c.345,0,.625.28.625.625v15c0,.345-.28.625-.625.625Zm-4.331-1.25h3.706V3.125h-3.706v13.75Zm-4.673,0h3.423V3.125h-3.423v13.75Zm-5.372,0h4.122V3.125H3.125v13.75Z"/></svg>',tooltip:!0,class:"cke5-ubccolumnsthree-insert-button"}),o.bind("isOn","isEnabled").to(s,"value","isEnabled"),this.listenTo(o,"execute",(()=>e.execute("ubcColumnsThree"))),o}))}}function h(e){const t=e.getSelectedElement();return t&&C(t)?t:null}function p(e){const t=e.getFirstPosition();if(!t)return null;let s=t.parent;for(;s;){if(s.is("element")&&C(s))return s;s=s.parent}return null}function C(e){return!!e.hasClass("widget-columns-3")&&(0,t.isWidget)(e)}class T extends e.Plugin{static get requires(){return[t.WidgetToolbarRepository]}static get pluginName(){return"UbcColumnsThreeToolbar"}afterInit(){const e=this.editor,s=e.plugins.get(t.WidgetToolbarRepository),o=e.config.get("ubcColumnsThree.contentToolbar"),n=e.config.get("ubcColumnsThree.tableToolbar");o&&s.register("ubcColumnsThreeContent",{ariaLabel:e.t("Three Columns toolbar"),items:o,getRelatedElement:p}),n&&s.register("ubcColumnsThree",{ariaLabel:e.t("Three Columns toolbar"),items:n,getRelatedElement:h})}}class w extends e.Command{constructor(e){super(e)}execute(e={}){const{editor:t}=this,{model:s}=this.editor,{selection:o}=t.model.document,n=o.getSelectedElement();let i="";const r=e.value,l="gapclass";i=n&&n.is("element","ubcColumnsThree")?n.getChild(0):o.getFirstPosition().findAncestor("ubcColumnsThree").getChild(0),s.change((e=>{if(o.isCollapsed)r?e.setAttribute(l,r,i):e.removeAttribute(l,i);else{const t=s.schema.getValidRanges(o.getRanges(),l);for(const s of t)r?(e.setAttribute(l,r,s),this.value=r):e.removeAttribute(l,s)}}))}refresh(){const e=this.editor.model,t=e.document,s="gapclass";this.value=t.selection.getAttribute(s),this.isEnabled=e.schema.getValidRanges(t.selection,s)}}class v extends e.Plugin{static get requires(){return[t.Widget]}static get pluginName(){return"UbcColumnsThreeGapEditing"}constructor(e){super(e)}init(){const{editor:e}=this;this._defineConverters(),e.model.schema.extend("ubcColumnsThreeWrapper",{allowAttributes:"gapclass"}),e.conversion.attributeToAttribute({model:"gapclass",view:"class"}),e.commands.add("ubcColumnsThreeGap",new w(e))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").attributeToAttribute({view:{key:"class",value:/\bgap-[\S]+/},model:{key:"gapclass",value:e=>e.getAttribute("class").match(/\bgap-([\S]+)/)[0]}}),e.for("downcast").attributeToAttribute({model:"gapclass",view:e=>({key:"class",value:e})})}}var f=s("ckeditor5/src/utils.js");class y extends e.Plugin{static get pluginName(){return"UbcColumnsThreeGapUI"}init(){const e=this.editor,t=e.t;r.map((e=>e)).value;const s=e.commands.get("ubcColumnsThreeGap");e.ui.componentFactory.add("ubcColumnsThreeGapOptions",(o=>{const n=(0,g.createDropdown)(o);return(0,g.addListToDropdown)(n,function(e,t){const s=new f.Collection,o="ubcColumnsThreeGap";let n=r.map((e=>e));for(const e of n){const n={type:"button",model:new g.Model({commandName:o,commandParam:e.value,label:e.label,withText:!0})};n.model.bind("isOn").to(t,"value",(t=>t===e.value||!(!t||!e.value)&&t.toLowerCase()===e.value.toLowerCase())),s.add(n)}return s}(0,s)),n.buttonView.set({label:t("Gap"),tooltip:!0,withText:!0,class:"cke5-ubccolumnsthree-gap-insert-button"}),n.extendTemplate({attributes:{class:"ck-gap-options-dropdown"}}),n.bind("isEnabled").to(s),this.listenTo(n,"execute",(t=>{e.execute(t.source.commandName,{value:t.source.commandParam}),e.editing.view.focus()})),n}))}}class x extends e.Plugin{static get requires(){return[v,y]}static get pluginName(){return"UbcColumnsThreeGap"}}class E extends e.Command{constructor(e){super(e)}execute(e={}){const{editor:t}=this,{model:s}=this.editor,{selection:o}=t.model.document,n=o.getSelectedElement();let i="";const r="keylineclass";i=n&&n.is("element","ubcColumnsThree")?n:o.getFirstPosition().findAncestor("ubcColumnsThree");let l=i.getAttribute(r);s.change((e=>{"widget-keylines"===l?(e.setAttribute(r,"widget-keyline-none",i),this.isOn=!1):(e.setAttribute(r,"widget-keylines",i),this.isOn=!0)}))}}class k extends e.Plugin{static get requires(){return[t.Widget]}static get pluginName(){return"UbcColumnsThreeKeylineEditing"}constructor(e){super(e)}init(){const{editor:e}=this;this._defineConverters(),e.model.schema.extend("ubcColumnsThree",{allowAttributes:"keylineclass"}),e.conversion.attributeToAttribute({model:"keylineclass",view:"class"}),e.commands.add("ubcColumnsThreeKeyline",new E(e))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").attributeToAttribute({view:{key:"class",value:/widget-keyline[\S]+/},model:{key:"keylineclass",value:e=>e.getAttribute("class").match(/widget-keyline([\S]+)/)[0]}}),e.for("downcast").attributeToAttribute({model:"keylineclass",view:e=>({key:"class",value:e})})}}class A extends e.Plugin{static get requires(){return[g.ContextualBalloon]}static get pluginName(){return"UbcColumnsThreeKeylineUI"}init(){const e=this.editor;e.ui.componentFactory.add("ubcColumnsThreeKeylineToggle",(t=>{const s=e.commands.get("ubcColumnsThreeKeyline"),o=new g.ButtonView(t);return o.set({label:e.t("Toggle Keylines"),tooltip:!0,withText:!0,class:"cke5-ubccolumnsthree-keyline-insert-button"}),o.bind("isEnabled").to(s),o.bind("isOn").to(s),this.listenTo(o,"execute",(()=>e.execute("ubcColumnsThreeKeyline"))),o}))}}class P extends e.Plugin{static get requires(){return[k,A]}static get pluginName(){return"UbcColumnsThreeKeyline"}}class W extends e.Command{constructor(e){super(e)}execute(e={}){const{editor:t}=this,{model:s}=this.editor,{selection:o}=t.model.document,n=o.getSelectedElement();let i="";const r=e.value,l="marginclass";i=n&&n.is("element","ubcColumnsThree")?n:o.getFirstPosition().findAncestor("ubcColumnsThree"),s.change((e=>{if(o.isCollapsed)r?e.setAttribute(l,r,i):e.removeAttribute(l,i);else{const t=s.schema.getValidRanges(o.getRanges(),l);for(const s of t)r?e.setAttribute(l,r,s):e.removeAttribute(l,s)}}))}refresh(){const e=this.editor.model,t=e.document,s="marginclass";this.value=t.selection.getAttribute(s),this.isEnabled=e.schema.getValidRanges(t.selection,s)}}class S extends e.Plugin{static get requires(){return[t.Widget]}static get pluginName(){return"UbcColumnsThreeMarginEditing"}constructor(e){super(e)}init(){const{editor:e}=this;this._defineConverters(),e.model.schema.extend("ubcColumnsThree",{allowAttributes:"marginclass"}),e.conversion.attributeToAttribute({model:"marginclass",view:"class"}),e.commands.add("ubcColumnsThreeMargin",new W(e))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").attributeToAttribute({view:{key:"class",value:/\bmy-[\S]+/},model:{key:"marginclass",value:e=>e.getAttribute("class").match(/\bmy-([\S]+)/)[0]}}),e.for("downcast").attributeToAttribute({model:"marginclass",view:e=>({key:"class",value:e})})}}class L extends e.Plugin{static get pluginName(){return"UbcColumnsThreeMarginUI"}init(){const e=this.editor,t=e.t;l.map((e=>e)).value;const s=e.commands.get("ubcColumnsThreeMargin");e.ui.componentFactory.add("ubcColumnsThreeMarginOptions",(o=>{const n=(0,g.createDropdown)(o);return(0,g.addListToDropdown)(n,function(e,t){const s=new f.Collection,o="ubcColumnsThreeMargin";let n=l.map((e=>e));for(const e of n){const n={type:"button",model:new g.Model({commandName:o,commandParam:e.value,label:e.label,withText:!0})};n.model.bind("isOn").to(t,"value",(t=>t===e.value||!(!t||!e.value)&&t.toLowerCase()===e.value.toLowerCase())),s.add(n)}return s}(0,s)),n.buttonView.set({label:t("Margin"),tooltip:!0,withText:!0,class:"cke5-ubccolumnsthree-margin-insert-button"}),n.extendTemplate({attributes:{class:"ck-margin-options-dropdown"}}),n.bind("isEnabled").to(s),this.listenTo(n,"execute",(t=>{e.execute(t.source.commandName,{value:t.source.commandParam}),e.editing.view.focus()})),n}))}}class N extends e.Plugin{static get requires(){return[S,L]}static get pluginName(){return"UbcColumnsThreeMargin"}}class j extends e.Command{constructor(e){super(e)}execute(e={}){const{editor:t}=this,{model:s}=this.editor,{selection:o}=t.model.document,n=o.getSelectedElement();let i="";const r=e.value,l="layoutclass";i=n&&n.is("element","ubcColumnsThree")?n:o.getFirstPosition().findAncestor("ubcColumnsThree"),s.change((e=>{if(o.isCollapsed)r?e.setAttribute(l,r,i):e.removeAttribute(l,i);else{const t=s.schema.getValidRanges(o.getRanges(),l);for(const s of t)r?(e.setAttribute(l,r,s),this.value=r):e.removeAttribute(l,s)}}))}refresh(){const e=this.editor.model,t=e.document,s="layoutclass";this.value=t.selection.getAttribute(s),this.isEnabled=e.schema.getValidRanges(t.selection,s)}}class U extends e.Plugin{static get requires(){return[t.Widget]}static get pluginName(){return"UbcColumnsThreeLayoutEditing"}constructor(e){super(e)}init(){const{editor:e}=this;this._defineConverters(),e.model.schema.extend("ubcColumnsThree",{allowAttributes:"layoutclass"}),e.conversion.attributeToAttribute({model:"layoutclass",view:"class"}),e.commands.add("ubcColumnsThreeLayout",new j(e))}_defineConverters(){const{conversion:e}=this.editor;e.for("upcast").attributeToAttribute({view:{key:"class",value:/\balign-[\S]+/},model:{key:"layoutclass",value:e=>e.getAttribute("class").match(/\balign-([\S]+)/)[0]}}),e.for("downcast").attributeToAttribute({model:"layoutclass",view:e=>({key:"class",value:e})})}}class K extends e.Plugin{static get pluginName(){return"UbcColumnsThreeLayoutUI"}init(){const e=this.editor,t=e.t;a.map((e=>e)).value;const s=e.commands.get("ubcColumnsThreeLayout");e.ui.componentFactory.add("ubcColumnsThreeLayoutOptions",(o=>{const n=(0,g.createDropdown)(o);return(0,g.addListToDropdown)(n,function(e,t){const s=new f.Collection,o="ubcColumnsThreeLayout";let n=a.map((e=>e));for(const e of n){const n={type:"button",model:new g.Model({commandName:o,commandParam:e.value,label:e.label,withText:!0})};n.model.bind("isOn").to(t,"value",(t=>t===e.value||!(!t||!e.value)&&t.toLowerCase()===e.value.toLowerCase())),s.add(n)}return s}(0,s)),n.buttonView.set({label:t("Layout Options"),tooltip:!0,withText:!0,class:"cke5-ubccolumnsthree-layout-insert-button"}),n.extendTemplate({attributes:{class:"ck-3column-options-dropdown"}}),n.bind("isEnabled").to(s),this.listenTo(n,"execute",(t=>{e.execute(t.source.commandName,{value:t.source.commandParam}),e.editing.view.focus()})),n}))}}class O extends e.Plugin{static get requires(){return[U,K]}static get pluginName(){return"UbcColumnsThreeLayout"}}class q extends e.Plugin{static get requires(){return[m,b,T,x,P,N,O]}}const V={UbcColumnsThree:q}})(),o=o.default})()));