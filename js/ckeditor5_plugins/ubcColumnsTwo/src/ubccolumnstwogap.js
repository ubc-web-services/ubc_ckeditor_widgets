import { Plugin } from 'ckeditor5/src/core';
import UbcColumnsTwoGapEditing from './ubccolumnstwogap/ubccolumnstwogapediting';
import UbcColumnsTwoGapUI from './ubccolumnstwogap/ubccolumnstwogapui';

/**
 * The ubccolumnstwo gap plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccolumns/ubccolumnstwogap/ubccolumnstwogapediting~UbcColumnsTwoGapEditing} and
 * {@link module:ubccolumns/ubccolumnstwogap/ubccolumnstwogapui~UbcColumnsTwoGapUI} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcColumnsTwoGap extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcColumnsTwoGapEditing, UbcColumnsTwoGapUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcColumnsTwoGap';
	}
}
