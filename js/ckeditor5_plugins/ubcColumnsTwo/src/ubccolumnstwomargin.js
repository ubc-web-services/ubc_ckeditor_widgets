import { Plugin } from 'ckeditor5/src/core';
import UbcColumnsTwoMarginEditing from './ubccolumnstwomargin/ubccolumnstwomarginediting';
import UbcColumnsTwoMarginUI from './ubccolumnstwomargin/ubccolumnstwomarginui';

/**
 * The ubccolumnstwo margin plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccolumns/ubccolumnstwomargin/ubccolumnstwomarginediting~UbcColumnsTwoMarginEditing} and
 * {@link module:ubccolumns/ubccolumnstwomargin/ubccolumnstwomarginui~UbcColumnsTwoMarginUI} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcColumnsTwoMargin extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcColumnsTwoMarginEditing, UbcColumnsTwoMarginUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcColumnsTwoMargin';
	}
}
