import { Plugin } from 'ckeditor5/src/core';
import UbcColumnsThreePaddingEditing from './ubccolumnsthreepadding/ubccolumnsthreepaddingediting';
import UbcColumnsThreePaddingUI from './ubccolumnsthreepadding/ubccolumnsthreepaddingui';

/**
 * The ubccolumnsthree align plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccolumnsthree/ubccolumnsthreepadding/ubccolumnsthreepaddingediting~UbcColumnsThreePaddingEditing} and
 * {@link module:ubccolumnsthree/ubccolumnsthreepadding/ubccolumnsthreeui~UbcColumnsThreeUi} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcColumnsThreePadding extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcColumnsThreePaddingEditing, UbcColumnsThreePaddingUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcColumnsThreePadding';
	}
}
