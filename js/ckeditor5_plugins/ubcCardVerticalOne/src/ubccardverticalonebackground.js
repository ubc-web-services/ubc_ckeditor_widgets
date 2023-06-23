import { Plugin } from 'ckeditor5/src/core';
import UbcCardVerticalOneBackgroundEditing from './ubccardverticalonebackground/ubccardverticalonebackgroundediting';
import UbcCardVerticalOneBackgroundUI from './ubccardverticalonebackground/ubccardverticalonebackgroundui';

/**
 * The ubccardverticalone align plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccardverticalone/ubccardverticalonebackground/ubccardverticalonebackgroundediting~UbcCardVerticalOneBackgroundEditing} and
 * {@link module:ubccardverticalone/ubccardverticalonebackground/ubccardverticalonebackgroundui~UbcCardVerticalOneBackgroundUi} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcCardVerticalOneBackground extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcCardVerticalOneBackgroundEditing, UbcCardVerticalOneBackgroundUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcCardVerticalOneBackground';
	}
}
