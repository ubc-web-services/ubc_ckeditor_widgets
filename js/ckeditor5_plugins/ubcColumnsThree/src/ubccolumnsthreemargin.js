import { Plugin } from 'ckeditor5/src/core';
import UbcColumnsThreeMarginEditing from './ubccolumnsthreemargin/ubccolumnsthreemarginediting';
import UbcColumnsThreeMarginUI from './ubccolumnsthreemargin/ubccolumnsthreemarginui';

/**
 * The ubccolumnsthree margin plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccolumns/ubccolumnsthreemargin/ubccolumnsthreemarginediting~UbcColumnsThreeMarginEditing} and
 * {@link module:ubccolumns/ubccolumnsthreemargin/ubccolumnsthreemarginui~UbcColumnsThreeMarginUI} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcColumnsThreeMargin extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcColumnsThreeMarginEditing, UbcColumnsThreeMarginUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcColumnsThreeMargin';
	}
}
