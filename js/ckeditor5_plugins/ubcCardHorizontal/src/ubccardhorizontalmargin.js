import { Plugin } from 'ckeditor5/src/core';
import UbcCardHorizontalMarginEditing from './ubccardhorizontalmargin/ubccardhorizontalmarginediting';
import UbcCardHorizontalMarginUI from './ubccardhorizontalmargin/ubccardhorizontalmarginui';

/**
 * The ubccardhorizontal margin plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccolumns/ubccardhorizontalmargin/ubccardhorizontalmarginediting~UbcCardHorizontalMarginEditing} and
 * {@link module:ubccolumns/ubccardhorizontalmargin/ubccardhorizontalmarginui~UbcCardHorizontalMarginUI} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcCardHorizontalMargin extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcCardHorizontalMarginEditing, UbcCardHorizontalMarginUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcCardHorizontalMargin';
	}
}
