import { Plugin } from 'ckeditor5/src/core';
import UbcColumnsThreeLayoutEditing from './ubccolumnsthreelayout/ubccolumnsthreelayoutediting';
import UbcColumnsThreeLayoutUI from './ubccolumnsthreelayout/ubccolumnsthreelayoutui';

/**
 * The ubccolumnsthree layout plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccolumnsthree/ubccolumnsthreelayout/ubccolumnsthreelayoutediting~UbcColumnsThreeLayoutEditing} and
 * {@link module:ubccolumnsthree/ubccolumnsthreelayout/ubccolumnsthreelayoutui~UbcColumnsThreeLayoutUi} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcColumnsThreeLayout extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcColumnsThreeLayoutEditing, UbcColumnsThreeLayoutUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcColumnsThreeLayout';
	}
}
