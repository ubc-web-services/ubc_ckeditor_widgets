import { Plugin } from 'ckeditor5/src/core';
import UbcCardVerticalTwoMarginEditing from './ubccardverticaltwomargin/ubccardverticaltwomarginediting';
import UbcCardVerticalTwoMarginUI from './ubccardverticaltwomargin/ubccardverticaltwomarginui';

/**
 * The ubccardverticaltwo margin plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccardverticaltwo/ubccardverticaltwomargin/ubccardverticaltwomarginediting~UbcCardVerticalTwoMarginEditing} and
 * {@link module:ubccardverticaltwo/ubccardverticaltwomargin/ubccardverticaltwomarginui~UbcCardVerticalTwoMarginUI} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcCardVerticalTwoMargin extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcCardVerticalTwoMarginEditing, UbcCardVerticalTwoMarginUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcCardVerticalTwoMargin';
	}
}
