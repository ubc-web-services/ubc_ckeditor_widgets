/**
 * @file This is what CKEditor refers to as a master (glue) plugin. Its role is
 * just to load the “editing” and “UI” components of this Plugin. Those
 * components could be included in this file, but
 *
 * I.e, this file's purpose is to integrate all the separate parts of the plugin
 * before it's made discoverable via index.js.
 */

// The contents of UbcCardVerticalThreeUI and UbcCardVerticalThree editing could be included in this
// file, but it is recommended to separate these concerns in different files.
import UbcCardVerticalThreeEditing from './ubccardverticalthreeediting';
import UbcCardVerticalThreeUI from './ubccardverticalthreeui';
import UbcCardVerticalThreeToolbar from './ubccardverticalthreetoolbar';
import UbcCardVerticalThreeBackground from './ubccardverticalthreebackground';
import UbcCardVerticalThreeShadow from './ubccardverticalthreeshadow';
import UbcCardVerticalThreeMargin from './ubccardverticalthreemargin';
import UbcCardVerticalThreeGap from './ubccardverticalthreegap';
import {
  Plugin
} from 'ckeditor5/src/core';

export default class UbcCardVerticalThree extends Plugin {
  // Note that UbcCardVerticalThreeEditing and UbcCardVerticalThreeUI also extend `Plugin`, but these
  // are not seen as individual plugins by CKEditor 5. CKEditor 5 will only
  // discover the plugins explicitly exported in index.js.
  static get requires() {
    return [
      UbcCardVerticalThreeEditing,
      UbcCardVerticalThreeUI,
      UbcCardVerticalThreeToolbar,
      UbcCardVerticalThreeBackground,
      UbcCardVerticalThreeShadow,
      UbcCardVerticalThreeMargin,
      UbcCardVerticalThreeGap
    ];
  }
}
