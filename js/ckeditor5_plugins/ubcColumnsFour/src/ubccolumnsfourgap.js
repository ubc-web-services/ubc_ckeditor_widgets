import { Plugin } from 'ckeditor5/src/core';
import UbcColumnsFourGapEditing from './ubccolumnsfourgap/ubccolumnsfourgapediting';
import UbcColumnsFourGapUI from './ubccolumnsfourgap/ubccolumnsfourgapui';

/**
 * The ubccolumnsfour gap plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccolumns/ubccolumnsfourgap/ubccolumnsfourgapediting~UbcColumnsFourGapEditing} and
 * {@link module:ubccolumns/ubccolumnsfourgap/ubccolumnsfourgapui~UbcColumnsFourGapUI} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcColumnsFourGap extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcColumnsFourGapEditing, UbcColumnsFourGapUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcColumnsFourGap';
	}
}
