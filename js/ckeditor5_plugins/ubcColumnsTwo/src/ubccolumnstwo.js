/**
 * @file This is what CKEditor refers to as a master (glue) plugin. Its role is
 * just to load the “editing” and “UI” components of this Plugin. Those
 * components could be included in this file, but
 *
 * I.e, this file's purpose is to integrate all the separate parts of the plugin
 * before it's made discoverable via index.js.
 */

// The contents of UbcColumnsTwoUI and UbcColumnsTwo editing could be included in this
// file, but it is recommended to separate these concerns in different files.
import UbcColumnsTwoEditing from './ubccolumnstwoediting';
import UbcColumnsTwoUI from './ubccolumnstwoui';
import UbcColumnsTwoToolbar from './ubccolumnstwotoolbar';
import UbcColumnsTwoGap from './ubccolumnstwogap';
import UbcColumnsTwoBackground from './ubccolumnstwobackground';
import UbcColumnsTwoPadding from './ubccolumnstwopadding';
import UbcColumnsTwoShadow from './ubccolumnstwoshadow';
import UbcColumnsTwoKeyline from './ubccolumnstwokeyline';
import UbcColumnsTwoMargin from './ubccolumnstwomargin';
import UbcColumnsTwoLayout from './ubccolumnstwolayout';
import {
  Plugin
} from 'ckeditor5/src/core';

export default class UbcColumnsTwo extends Plugin {
  // Note that UbcColumnsTwoEditing and UbcColumnsTwoUI also extend `Plugin`, but these
  // are not seen as individual plugins by CKEditor 5. CKEditor 5 will only
  // discover the plugins explicitly exported in index.js.
  static get requires() {
    return [
      UbcColumnsTwoEditing,
      UbcColumnsTwoUI,
      UbcColumnsTwoToolbar,
      UbcColumnsTwoGap,
      UbcColumnsTwoBackground,
      UbcColumnsTwoShadow,
      UbcColumnsTwoPadding,
      UbcColumnsTwoKeyline,
      UbcColumnsTwoMargin,
      UbcColumnsTwoLayout
    ];
  }
}
