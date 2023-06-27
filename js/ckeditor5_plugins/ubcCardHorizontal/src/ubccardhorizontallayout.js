import { Plugin } from 'ckeditor5/src/core';
import UbcCardHorizontalLayoutEditing from './ubccardhorizontallayout/ubccardhorizontallayoutediting';
import UbcCardHorizontalLayoutUI from './ubccardhorizontallayout/ubccardhorizontallayoutui';

/**
 * The ubccardhorizontal layout plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccardhorizontal/ubccardhorizontallayout/ubccardhorizontallayoutediting~UbcCardHorizontalLayoutEditing} and
 * {@link module:ubccardhorizontal/ubccardhorizontallayout/ubccardhorizontallayoutui~UbcCardHorizontalLayoutUi} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcCardHorizontalLayout extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcCardHorizontalLayoutEditing, UbcCardHorizontalLayoutUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcCardHorizontalLayout';
	}
}
