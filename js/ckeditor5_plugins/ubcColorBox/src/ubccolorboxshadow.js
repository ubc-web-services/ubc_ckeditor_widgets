import { Plugin } from 'ckeditor5/src/core';
import UbcColorBoxShadowEditing from './ubccolorboxshadow/ubccolorboxshadowediting';
import UbcColorBoxShadowUI from './ubccolorboxshadow/ubccolorboxshadowui';

/**
 * The ubccolorbox align plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccolorbox/ubccolorboxshadow/ubccolorboxshadowediting~UbcColorBoxShadowEditing} and
 * {@link module:ubccolorbox/ubccolorboxshadow/ubccolorboxui~UbcColorBoxUi} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcColorBoxShadow extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcColorBoxShadowEditing, UbcColorBoxShadowUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcColorBoxShadow';
	}
}
