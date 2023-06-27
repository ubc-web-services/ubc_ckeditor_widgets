import { Plugin } from 'ckeditor5/src/core';
import UbcColumnsTwoKeylineEditing from './ubccolumnstwokeyline/ubccolumnstwokeylineediting';
import UbcColumnsTwoKeylineUI from './ubccolumnstwokeyline/ubccolumnstwokeylineui';

/**
 * The ubccolumnstwo keyline plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccolumns/ubccolumnstwokeyline/ubccolumnstwokeylineediting~UbcColumnsTwoKeylineEditing} and
 * {@link module:ubccolumns/ubccolumnstwokeyline/ubccolumnstwokeylineui~UbcColumnsTwoKeylineUI} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcColumnsTwoGap extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcColumnsTwoKeylineEditing, UbcColumnsTwoKeylineUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcColumnsTwoKeyline';
	}
}
