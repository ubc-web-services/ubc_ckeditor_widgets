import { Plugin } from 'ckeditor5/src/core';
import UbcColumnsFourPaddingEditing from './ubccolumnsfourpadding/ubccolumnsfourpaddingediting';
import UbcColumnsFourPaddingUI from './ubccolumnsfourpadding/ubccolumnsfourpaddingui';

/**
 * The ubccolumnsfour align plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccolumnsfour/ubccolumnsfourpadding/ubccolumnsfourpaddingediting~UbcColumnsFourPaddingEditing} and
 * {@link module:ubccolumnsfour/ubccolumnsfourpadding/ubccolumnsfourui~UbcColumnsFourUi} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcColumnsFourPadding extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcColumnsFourPaddingEditing, UbcColumnsFourPaddingUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcColumnsFourPadding';
	}
}
