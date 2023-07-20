/**
 * @file registers the ubcColumnsTwo toolbar button and binds functionality to it.
 */

import {
  Plugin
} from 'ckeditor5/src/core';
import {
  addListToDropdown,
  createDropdown,
  Model
} from 'ckeditor5/src/ui';
import {
  Collection
} from 'ckeditor5/src/utils';
import {
	twoColumnLayoutStyles
} from '../../../../config/config';

export default class UbcColumnsTwoLayoutUI extends Plugin {

  /**
   * @inheritDoc
   */
  static get pluginName() {
    return 'UbcColumnsTwoLayoutUI';
  }

  init() {
    const editor = this.editor;
    const t = editor.t;
    const options = twoColumnLayoutStyles.map(style => {
      return style;
    });
    //const values = options.value;
    const command = editor.commands.get('ubcColumnsTwoLayout');

    editor.ui.componentFactory.add('ubcColumnsTwoLayoutOptions', locale => {
      const dropdownView = createDropdown(locale);
      addListToDropdown(dropdownView, _prepareListOptions(options, command));
      dropdownView.buttonView.set({
        label: t('Layout Options'),
        tooltip: true,
        withText: true,
        class: 'cke5-ubccolumnstwo-layout-insert-button',
      });
      dropdownView.extendTemplate({
        attributes: {
          class: 'ck-3column-options-dropdown'
        }
      });
      dropdownView.bind('isEnabled').to(command);
      // Execute command when an item from the dropdown is selected.
      this.listenTo(dropdownView, 'execute', evt => {
        editor.execute(evt.source.commandName, {
          value: evt.source.commandParam
        });
        editor.editing.view.focus();
      });
      return dropdownView;
    });
  }
}

// Prepares dropdown items.
function _prepareListOptions(options, command) {
  const itemDefinitions = new Collection();
  const activecommand = 'ubcColumnsTwoLayout';
  // let options = twoColumnLayoutStyles.map(style => {
  //   return style;
  // });
  // Create dropdown items.
  for (const option of options) {
    const def = {
      type: 'button',
      model: new Model({
        commandName: activecommand,
        commandParam: option.value,
        label: option.label,
        withText: true
      })
    };
    //def.model.bind('isOn', 'isEnabled').to(command, option.value, 'isEnabled');
    def.model.bind( 'isOn' ).to( command, 'value', value => value === option.value );

    // def.model.bind('isOn').to(command, 'value', value => {
		// 	const newValue = value ? parseFloat(value) : value;
		// 	return newValue === option.value;
		// });


    // def.model.bind('isOn').to(command, 'value', value => {
    //   if (value === option.view) {
    //     return true;
    //   }
    //   if (!value || !option.view || value !== option.view ) {
    //     return false;
    //   }
    //   //return value.toLowerCase() === option.value.toLowerCase();
    // });
    itemDefinitions.add(def);
  }
  return itemDefinitions;
}
