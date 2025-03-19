import { Plugin } from 'ckeditor5/src/core';
import UbcColumnsTwoShadowEditing from './ubccolumnstwoshadow/ubccolumnstwoshadowediting';
import UbcColumnsTwoShadowUI from './ubccolumnstwoshadow/ubccolumnstwoshadowui';

/**
 * The ubccolumnstwo align plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccolumnstwo/ubccolumnstwoshadow/ubccolumnstwoshadowediting~UbcColumnsTwoShadowEditing} and
 * {@link module:ubccolumnstwo/ubccolumnstwoshadow/ubccolumnstwoui~UbcColumnsTwoUi} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcColumnsTwoShadow extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcColumnsTwoShadowEditing, UbcColumnsTwoShadowUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcColumnsTwoShadow';
	}
}
