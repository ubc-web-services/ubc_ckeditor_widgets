import { Plugin } from 'ckeditor5/src/core';
import UbcColumnsTwoPaddingEditing from './ubccolumnstwopadding/ubccolumnstwopaddingediting';
import UbcColumnsTwoPaddingUI from './ubccolumnstwopadding/ubccolumnstwopaddingui';

/**
 * The ubccolumnstwo align plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccolumnstwo/ubccolumnstwopadding/ubccolumnstwopaddingediting~UbcColumnsTwoPaddingEditing} and
 * {@link module:ubccolumnstwo/ubccolumnstwopadding/ubccolumnstwoui~UbcColumnsTwoUi} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcColumnsTwoPadding extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcColumnsTwoPaddingEditing, UbcColumnsTwoPaddingUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcColumnsTwoPadding';
	}
}
