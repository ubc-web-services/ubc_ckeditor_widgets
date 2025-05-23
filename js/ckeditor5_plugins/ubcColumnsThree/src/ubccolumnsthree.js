/**
 * @file This is what CKEditor refers to as a master (glue) plugin. Its role is
 * just to load the “editing” and “UI” components of this Plugin. Those
 * components could be included in this file, but
 *
 * I.e, this file's purpose is to integrate all the separate parts of the plugin
 * before it's made discoverable via index.js.
 */

// The contents of UbcColumnsThreeUI and UbcColumnsThree editing could be included in this
// file, but it is recommended to separate these concerns in different files.
import UbcColumnsThreeEditing from './ubccolumnsthreeediting';
import UbcColumnsThreeUI from './ubccolumnsthreeui';
import UbcColumnsThreeToolbar from './ubccolumnsthreetoolbar';
import UbcColumnsThreeGap from './ubccolumnsthreegap';
import UbcColumnsThreeKeyline from './ubccolumnsthreekeyline';
import UbcColumnsThreeBackground from './ubccolumnsthreebackground';
import UbcColumnsThreePadding from './ubccolumnsthreepadding';
import UbcColumnsThreeShadow from './ubccolumnsthreeshadow';
import UbcColumnsThreeMargin from './ubccolumnsthreemargin';
import UbcColumnsThreeLayout from './ubccolumnsthreelayout';
import {
  Plugin
} from 'ckeditor5/src/core';

export default class UbcColumnsThree extends Plugin {
  // Note that UbcColumnsThreeEditing and UbcColumnsThreeUI also extend `Plugin`, but these
  // are not seen as individual plugins by CKEditor 5. CKEditor 5 will only
  // discover the plugins explicitly exported in index.js.
  static get requires() {
    return [
      UbcColumnsThreeEditing,
      UbcColumnsThreeUI,
      UbcColumnsThreeToolbar,
      UbcColumnsThreeGap,
      UbcColumnsThreeBackground,
      UbcColumnsThreeShadow,
      UbcColumnsThreePadding,
      UbcColumnsThreeKeyline,
      UbcColumnsThreeMargin,
      UbcColumnsThreeLayout
    ];
  }
}
