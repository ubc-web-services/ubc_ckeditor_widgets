import { Plugin } from 'ckeditor5/src/core';
import UbcColorBoxMarginEditing from './ubccolorboxmargin/ubccolorboxmarginediting';
import UbcColorBoxMarginUI from './ubccolorboxmargin/ubccolorboxmarginui';

/**
 * The ubccolorbox align plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccolorbox/ubccolorboxmargin/ubccolorboxmarginediting~UbcColorBoxMarginEditing} and
 * {@link module:ubccolorbox/ubccolorboxmargin/ubccolorboxui~UbcColorBoxUi} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcColorBoxMargin extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcColorBoxMarginEditing, UbcColorBoxMarginUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcColorBoxMargin';
	}
}
