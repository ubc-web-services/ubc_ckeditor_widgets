import { Plugin } from 'ckeditor5/src/core';
import UbcCardHorizontalBackgroundEditing from './ubccardhorizontalbackground/ubccardhorizontalbackgroundediting';
import UbcCardHorizontalBackgroundUI from './ubccardhorizontalbackground/ubccardhorizontalbackgroundui';

/**
 * The ubccardhorizontal align plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccardhorizontal/ubccardhorizontalbackground/ubccardhorizontalbackgroundediting~UbcCardHorizontalBackgroundEditing} and
 * {@link module:ubccardhorizontal/ubccardhorizontalbackground/ubccardhorizontalbackgroundui~UbcCardHorizontalBackgroundUi} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcCardHorizontalBackground extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcCardHorizontalBackgroundEditing, UbcCardHorizontalBackgroundUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcCardHorizontalBackground';
	}
}
