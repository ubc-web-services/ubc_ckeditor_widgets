import { Plugin } from 'ckeditor5/src/core';
import UbcColumnsThreeBackgroundEditing from './ubccolumnsthreebackground/ubccolumnsthreebackgroundediting';
import UbcColumnsThreeBackgroundUI from './ubccolumnsthreebackground/ubccolumnsthreebackgroundui';

/**
 * The ubccolumnsthree align plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccolumnsthree/ubccolumnsthreebackground/ubccolumnsthreebackgroundediting~UbcColumnsThreeBackgroundEditing} and
 * {@link module:ubccolumnsthree/ubccolumnsthreebackground/ubccolumnsthreebackgroundui~UbcColumnsThreeBackgroundUi} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcColumnsThreeBackground extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcColumnsThreeBackgroundEditing, UbcColumnsThreeBackgroundUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcColumnsThreeBackground';
	}
}
