import { Plugin } from 'ckeditor5/src/core';
import UbcCardVerticalTwoBackgroundEditing from './ubccardverticaltwobackground/ubccardverticaltwobackgroundediting';
import UbcCardVerticalTwoBackgroundUI from './ubccardverticaltwobackground/ubccardverticaltwobackgroundui';

/**
 * The ubccardverticaltwo align plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccardverticaltwo/ubccardverticaltwobackground/ubccardverticaltwobackgroundediting~UbcCardVerticalTwoBackgroundEditing} and
 * {@link module:ubccardverticaltwo/ubccardverticaltwobackground/ubccardverticaltwobackgroundui~UbcCardVerticalTwoBackgroundUi} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcCardVerticalTwoBackground extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcCardVerticalTwoBackgroundEditing, UbcCardVerticalTwoBackgroundUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcCardVerticalTwoBackground';
	}
}
