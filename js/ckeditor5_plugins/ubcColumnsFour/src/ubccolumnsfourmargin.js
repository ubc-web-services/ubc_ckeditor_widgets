import { Plugin } from 'ckeditor5/src/core';
import UbcColumnsFourMarginEditing from './ubccolumnsfourmargin/ubccolumnsfourmarginediting';
import UbcColumnsFourMarginUI from './ubccolumnsfourmargin/ubccolumnsfourmarginui';

/**
 * The ubccolumnsfour margin plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccolumns/ubccolumnsfourmargin/ubccolumnsfourmarginediting~UbcColumnsFourMarginEditing} and
 * {@link module:ubccolumns/ubccolumnsfourmargin/ubccolumnsfourmarginui~UbcColumnsFourMarginUI} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcColumnsFourMargin extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcColumnsFourMarginEditing, UbcColumnsFourMarginUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcColumnsFourMargin';
	}
}
