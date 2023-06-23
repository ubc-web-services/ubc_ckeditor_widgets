import { Plugin } from 'ckeditor5/src/core';
import UbcCardVerticalTwoShadowEditing from './ubccardverticaltwoshadow/ubccardverticaltwoshadowediting';
import UbcCardVerticalTwoShadowUI from './ubccardverticaltwoshadow/ubccardverticaltwoshadowui';

/**
 * The ubccardverticaltwo align plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccardverticaltwo/ubccardverticaltwoshadow/ubccardverticaltwoshadowediting~UbcCardVerticalTwoShadowEditing} and
 * {@link module:ubccardverticaltwo/ubccardverticaltwoshadow/ubccardverticaltwoui~UbcCardVerticalTwoUi} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcCardVerticalTwoShadow extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcCardVerticalTwoShadowEditing, UbcCardVerticalTwoShadowUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcCardVerticalTwoShadow';
	}
}
