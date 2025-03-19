import { Plugin } from 'ckeditor5/src/core';
import UbcColumnsThreeShadowEditing from './ubccolumnsthreeshadow/ubccolumnsthreeshadowediting';
import UbcColumnsThreeShadowUI from './ubccolumnsthreeshadow/ubccolumnsthreeshadowui';

/**
 * The ubccolumnsthree align plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccolumnsthree/ubccolumnsthreeshadow/ubccolumnsthreeshadowediting~UbcColumnsThreeShadowEditing} and
 * {@link module:ubccolumnsthree/ubccolumnsthreeshadow/ubccolumnsthreeui~UbcColumnsThreeUi} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcColumnsThreeShadow extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcColumnsThreeShadowEditing, UbcColumnsThreeShadowUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcColumnsThreeShadow';
	}
}
