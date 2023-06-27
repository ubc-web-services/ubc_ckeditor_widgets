import { Plugin } from 'ckeditor5/src/core';
import UbcCardVerticalThreeShadowEditing from './ubccardverticalthreeshadow/ubccardverticalthreeshadowediting';
import UbcCardVerticalThreeShadowUI from './ubccardverticalthreeshadow/ubccardverticalthreeshadowui';

/**
 * The ubccardverticalthree align plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccardverticalthree/ubccardverticalthreeshadow/ubccardverticalthreeshadowediting~UbcCardVerticalThreeShadowEditing} and
 * {@link module:ubccardverticalthree/ubccardverticalthreeshadow/ubccardverticalthreeui~UbcCardVerticalThreeUi} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcCardVerticalThreeShadow extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcCardVerticalThreeShadowEditing, UbcCardVerticalThreeShadowUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcCardVerticalThreeShadow';
	}
}
