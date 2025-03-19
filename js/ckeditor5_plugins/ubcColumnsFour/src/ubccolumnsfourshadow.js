import { Plugin } from 'ckeditor5/src/core';
import UbcColumnsFourShadowEditing from './ubccolumnsfourshadow/ubccolumnsfourshadowediting';
import UbcColumnsFourShadowUI from './ubccolumnsfourshadow/ubccolumnsfourshadowui';

/**
 * The ubccolumnsfour align plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccolumnsfour/ubccolumnsfourshadow/ubccolumnsfourshadowediting~UbcColumnsFourShadowEditing} and
 * {@link module:ubccolumnsfour/ubccolumnsfourshadow/ubccolumnsfourui~UbcColumnsFourUi} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcColumnsFourShadow extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcColumnsFourShadowEditing, UbcColumnsFourShadowUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcColumnsFourShadow';
	}
}
