import { Plugin } from 'ckeditor5/src/core';
import UbcCardHorizontalShadowEditing from './ubccardhorizontalshadow/ubccardhorizontalshadowediting';
import UbcCardHorizontalShadowUI from './ubccardhorizontalshadow/ubccardhorizontalshadowui';

/**
 * The ubccardhorizontal align plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccardhorizontal/ubccardhorizontalshadow/ubccardhorizontalshadowediting~UbcCardHorizontalShadowEditing} and
 * {@link module:ubccardhorizontal/ubccardhorizontalshadow/ubccardhorizontalui~UbcCardHorizontalUi} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcCardHorizontalShadow extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcCardHorizontalShadowEditing, UbcCardHorizontalShadowUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcCardHorizontalShadow';
	}
}
