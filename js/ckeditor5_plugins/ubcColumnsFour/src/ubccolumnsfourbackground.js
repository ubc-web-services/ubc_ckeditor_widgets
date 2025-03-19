import { Plugin } from 'ckeditor5/src/core';
import UbcColumnsFourBackgroundEditing from './ubccolumnsfourbackground/ubccolumnsfourbackgroundediting';
import UbcColumnsFourBackgroundUI from './ubccolumnsfourbackground/ubccolumnsfourbackgroundui';

/**
 * The ubccolumnsfour align plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccolumnsfour/ubccolumnsfourbackground/ubccolumnsfourbackgroundediting~UbcColumnsFourBackgroundEditing} and
 * {@link module:ubccolumnsfour/ubccolumnsfourbackground/ubccolumnsfourbackgroundui~UbcColumnsFourBackgroundUi} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcColumnsFourBackground extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcColumnsFourBackgroundEditing, UbcColumnsFourBackgroundUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcColumnsFourBackground';
	}
}
