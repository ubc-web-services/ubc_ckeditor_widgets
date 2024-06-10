import { Plugin } from 'ckeditor5/src/core';
import UbcColumnsTwoLayoutEditing from './ubccolumnstwolayout/ubccolumnstwolayoutediting';
import UbcColumnsTwoLayoutUI from './ubccolumnstwolayout/ubccolumnstwolayoutui';

/**
 * The ubccolumnstwo layout plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccolumnstwo/ubccolumnstwolayout/ubccolumnstwolayoutediting~UbcColumnsTwoLayoutEditing} and
 * {@link module:ubccolumnstwo/ubccolumnstwolayout/ubccolumnstwolayoutui~UbcColumnsTwoLayoutUi} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcColumnsTwoLayout extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcColumnsTwoLayoutEditing, UbcColumnsTwoLayoutUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcColumnsTwoLayout';
	}
}
