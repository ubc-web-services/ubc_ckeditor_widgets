import { Plugin } from 'ckeditor5/src/core';
import UbcColumnsFourKeylineEditing from './ubccolumnsfourkeyline/ubccolumnsfourkeylineediting';
import UbcColumnsFourKeylineUI from './ubccolumnsfourkeyline/ubccolumnsfourkeylineui';

/**
 * The ubccolumnsfour keyline plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccolumns/ubccolumnsfourkeyline/ubccolumnsfourkeylineediting~UbcColumnsFourKeylineEditing} and
 * {@link module:ubccolumns/ubccolumnsfourkeyline/ubccolumnsfourkeylineui~UbcColumnsFourKeylineUI} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcColumnsFourGap extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcColumnsFourKeylineEditing, UbcColumnsFourKeylineUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcColumnsFourKeyline';
	}
}
