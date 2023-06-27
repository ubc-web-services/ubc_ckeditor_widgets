import { Plugin } from 'ckeditor5/src/core';
import UbcColumnsThreeKeylineEditing from './ubccolumnsthreekeyline/ubccolumnsthreekeylineediting';
import UbcColumnsThreeKeylineUI from './ubccolumnsthreekeyline/ubccolumnsthreekeylineui';

/**
 * The ubccolumnsthree keyline plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccolumns/ubccolumnsthreekeyline/ubccolumnsthreekeylineediting~UbcColumnsThreeKeylineEditing} and
 * {@link module:ubccolumns/ubccolumnsthreekeyline/ubccolumnsthreekeylineui~UbcColumnsThreeKeylineUI} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcColumnsThreeGap extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcColumnsThreeKeylineEditing, UbcColumnsThreeKeylineUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcColumnsThreeKeyline';
	}
}
