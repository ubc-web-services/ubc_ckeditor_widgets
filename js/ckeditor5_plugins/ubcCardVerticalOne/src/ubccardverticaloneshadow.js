import { Plugin } from 'ckeditor5/src/core';
import UbcCardVerticalOneShadowEditing from './ubccardverticaloneshadow/ubccardverticaloneshadowediting';
import UbcCardVerticalOneShadowUI from './ubccardverticaloneshadow/ubccardverticaloneshadowui';

/**
 * The ubccardverticalone align plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccardverticalone/ubccardverticaloneshadow/ubccardverticaloneshadowediting~UbcCardVerticalOneShadowEditing} and
 * {@link module:ubccardverticalone/ubccardverticaloneshadow/ubccardverticaloneui~UbcCardVerticalOneUi} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcCardVerticalOneShadow extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcCardVerticalOneShadowEditing, UbcCardVerticalOneShadowUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcCardVerticalOneShadow';
	}
}
