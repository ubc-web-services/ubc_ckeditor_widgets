import { Plugin } from 'ckeditor5/src/core';
import UbcColorBoxPaddingEditing from './ubccolorboxpadding/ubccolorboxpaddingediting';
import UbcColorBoxPaddingUI from './ubccolorboxpadding/ubccolorboxpaddingui';

/**
 * The ubccolorbox align plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccolorbox/ubccolorboxpadding/ubccolorboxpaddingediting~UbcColorBoxPaddingEditing} and
 * {@link module:ubccolorbox/ubccolorboxpadding/ubccolorboxui~UbcColorBoxUi} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcColorBoxPadding extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcColorBoxPaddingEditing, UbcColorBoxPaddingUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcColorBoxPadding';
	}
}
