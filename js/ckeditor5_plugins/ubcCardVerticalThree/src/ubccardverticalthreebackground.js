import { Plugin } from 'ckeditor5/src/core';
import UbcCardVerticalThreeBackgroundEditing from './ubccardverticalthreebackground/ubccardverticalthreebackgroundediting';
import UbcCardVerticalThreeBackgroundUI from './ubccardverticalthreebackground/ubccardverticalthreebackgroundui';

/**
 * The ubccardverticalthree align plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccardverticalthree/ubccardverticalthreebackground/ubccardverticalthreebackgroundediting~UbcCardVerticalThreeBackgroundEditing} and
 * {@link module:ubccardverticalthree/ubccardverticalthreebackground/ubccardverticalthreebackgroundui~UbcCardVerticalThreeBackgroundUi} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcCardVerticalThreeBackground extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcCardVerticalThreeBackgroundEditing, UbcCardVerticalThreeBackgroundUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcCardVerticalThreeBackground';
	}
}
