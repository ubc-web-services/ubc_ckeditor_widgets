import { Plugin } from 'ckeditor5/src/core';
import UbcColorBoxBackgroundEditing from './ubccolorboxbackground/ubccolorboxbackgroundediting';
import UbcColorBoxBackgroundUI from './ubccolorboxbackground/ubccolorboxbackgroundui';

/**
 * The ubccolorbox align plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccolorbox/ubccolorboxbackground/ubccolorboxbackgroundediting~UbcColorBoxBackgroundEditing} and
 * {@link module:ubccolorbox/ubccolorboxbackground/ubccolorboxbackgroundui~UbcColorBoxBackgroundUi} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcColorBoxBackground extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcColorBoxBackgroundEditing, UbcColorBoxBackgroundUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcColorBoxBackground';
	}
}
