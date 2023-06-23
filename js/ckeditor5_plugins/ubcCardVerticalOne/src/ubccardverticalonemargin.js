import { Plugin } from 'ckeditor5/src/core';
import UbcCardVerticalOneMarginEditing from './ubccardverticalonemargin/ubccardverticalonemarginediting';
import UbcCardVerticalOneMarginUI from './ubccardverticalonemargin/ubccardverticalonemarginui';

/**
 * The ubccardverticalone margin plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccolumns/ubccardverticalonemargin/ubccardverticalonemarginediting~UbcCardVerticalOneMarginEditing} and
 * {@link module:ubccolumns/ubccardverticalonemargin/ubccardverticalonemarginui~UbcCardVerticalOneMarginUI} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcCardVerticalOneMargin extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcCardVerticalOneMarginEditing, UbcCardVerticalOneMarginUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcCardVerticalOneMargin';
	}
}
