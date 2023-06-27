import { Plugin } from 'ckeditor5/src/core';
import UbcCardVerticalThreeMarginEditing from './ubccardverticalthreemargin/ubccardverticalthreemarginediting';
import UbcCardVerticalThreeMarginUI from './ubccardverticalthreemargin/ubccardverticalthreemarginui';

/**
 * The ubccardverticalthree margin plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccolumns/ubccardverticalthreemargin/ubccardverticalthreemarginediting~UbcCardVerticalThreeMarginEditing} and
 * {@link module:ubccolumns/ubccardverticalthreemargin/ubccardverticalthreemarginui~UbcCardVerticalThreeMarginUI} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcCardVerticalThreeMargin extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcCardVerticalThreeMarginEditing, UbcCardVerticalThreeMarginUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcCardVerticalThreeMargin';
	}
}
