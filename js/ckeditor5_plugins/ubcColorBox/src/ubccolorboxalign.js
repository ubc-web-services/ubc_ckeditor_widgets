import { Plugin } from 'ckeditor5/src/core';
import UbcColorBoxAlignEditing from './ubccolorboxalign/ubccolorboxalignediting';
import UbcColorBoxAlignUI from './ubccolorboxalign/ubccolorboxalignui';

/**
 * The ubccolorbox align plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccolorbox/ubccolorboxalign/ubccolorboxalignediting~UbcColorBoxAlignEditing} and
 * {@link module:ubccolorbox/ubccolorboxalign/ubccolorboxui~UbcColorBoxUi} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcColorBoxAlign extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcColorBoxAlignEditing, UbcColorBoxAlignUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcColorBoxAlign';
	}
}
