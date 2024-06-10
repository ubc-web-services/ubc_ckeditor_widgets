import { Plugin } from 'ckeditor5/src/core';
import UbcCardVerticalThreeGapEditing from './ubccardverticalthreegap/ubccardverticalthreegapediting';
import UbcCardVerticalThreeGapUI from './ubccardverticalthreegap/ubccardverticalthreegapui';

/**
 * The ubccardverticalthree gap plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccardverticalthree/ubccardverticalthreegap/ubccardverticalthreegapediting~UbcCardVerticalThreeGapEditing} and
 * {@link module:ubccardverticalthree/ubccardverticalthreegap/ubccardverticalthreegapui~UbcCardVerticalThreeGapUI} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcCardVerticalThreeGap extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcCardVerticalThreeGapEditing, UbcCardVerticalThreeGapUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcCardVerticalThreeGap';
	}
}
