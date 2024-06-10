import { Plugin } from 'ckeditor5/src/core';
import UbcColumnsThreeGapEditing from './ubccolumnsthreegap/ubccolumnsthreegapediting';
import UbcColumnsThreeGapUI from './ubccolumnsthreegap/ubccolumnsthreegapui';

/**
 * The ubccolumnsthree gap plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccolumns/ubccolumnsthreegap/ubccolumnsthreegapediting~UbcColumnsThreeGapEditing} and
 * {@link module:ubccolumns/ubccolumnsthreegap/ubccolumnsthreegapui~UbcColumnsThreeGapUI} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcColumnsThreeGap extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcColumnsThreeGapEditing, UbcColumnsThreeGapUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcColumnsThreeGap';
	}
}
