/**
 * @file This is what CKEditor refers to as a master (glue) plugin. Its role is
 * just to load the “editing” and “UI” components of this Plugin. Those
 * components could be included in this file, but
 *
 * I.e, this file's purpose is to integrate all the separate parts of the plugin
 * before it's made discoverable via index.js.
 */

// The contents of UbcCardVerticalTwoUI and UbcCardVerticalTwo editing could be included in this
// file, but it is recommended to separate these concerns in different files.
import UbcCardVerticalTwoEditing from './ubccardverticaltwoediting';
import UbcCardVerticalTwoUI from './ubccardverticaltwoui';
import UbcCardVerticalTwoToolbar from './ubccardverticaltwotoolbar';
import UbcCardVerticalTwoBackground from './ubccardverticaltwobackground';
import UbcCardVerticalTwoShadow from './ubccardverticaltwoshadow';
import UbcCardVerticalTwoMargin from './ubccardverticaltwomargin';
import UbcCardVerticalTwoGap from './ubccardverticaltwogap';
import {
  Plugin
} from 'ckeditor5/src/core';

export default class UbcCardVerticalTwo extends Plugin {
  // Note that UbcCardVerticalTwoEditing and UbcCardVerticalTwoUI also extend `Plugin`, but these
  // are not seen as individual plugins by CKEditor 5. CKEditor 5 will only
  // discover the plugins explicitly exported in index.js.
  static get requires() {
    return [
      UbcCardVerticalTwoEditing,
      UbcCardVerticalTwoUI,
      UbcCardVerticalTwoToolbar,
      UbcCardVerticalTwoBackground,
      UbcCardVerticalTwoShadow,
      UbcCardVerticalTwoMargin,
      UbcCardVerticalTwoGap
    ];
  }
}
