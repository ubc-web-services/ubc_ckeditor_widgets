import { Plugin } from 'ckeditor5/src/core';
import UbcColumnsTwoBackgroundEditing from './ubccolumnstwobackground/ubccolumnstwobackgroundediting';
import UbcColumnsTwoBackgroundUI from './ubccolumnstwobackground/ubccolumnstwobackgroundui';

/**
 * The ubccolumnstwo align plugin.
 *
 * This is a "glue" plugin which loads the {@link module:ubccolumnstwo/ubccolumnstwobackground/ubccolumnstwobackgroundediting~UbcColumnsTwoBackgroundEditing} and
 * {@link module:ubccolumnstwo/ubccolumnstwobackground/ubccolumnstwobackgroundui~UbcColumnsTwoBackgroundUi} features in the editor.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcColumnsTwoBackground extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ UbcColumnsTwoBackgroundEditing, UbcColumnsTwoBackgroundUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'UbcColumnsTwoBackground';
	}
}
