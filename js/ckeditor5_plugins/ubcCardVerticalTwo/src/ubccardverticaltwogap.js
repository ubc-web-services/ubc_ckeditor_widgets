import { Plugin } from 'ckeditor5/src/core';
import UbcCardVerticalTwoGapEditing from './ubccardverticaltwogap/ubccardverticaltwogapediting';
import UbcCardVerticalTwoGapUI from './ubccardverticaltwogap/ubccardverticaltwogapui';

/**
 * The ubccardverticaltwo gap plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccardverticaltwo/ubccardverticaltwogap/ubccardverticaltwogapediting~UbcCardVerticalTwoGapEditing} and
 * {@link module:ubccardverticaltwo/ubccardverticaltwogap/ubccardverticaltwogapui~UbcCardVerticalTwoGapUI} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcCardVerticalTwoGap extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcCardVerticalTwoGapEditing, UbcCardVerticalTwoGapUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcCardVerticalTwoGap';
	}
}
