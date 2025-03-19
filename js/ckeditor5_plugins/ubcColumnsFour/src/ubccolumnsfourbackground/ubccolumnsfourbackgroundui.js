/**
 * @file registers the ubcColumnsFour toolbar button and binds functionality to it.
 */

import {
  Plugin
} from 'ckeditor5/src/core';
import {
  addListToDropdown,
  createDropdown,
  ViewModel
} from 'ckeditor5/src/ui';
import {
  Collection
} from 'ckeditor5/src/utils';
import {
  backgroundStyles
} from '../../../../config/config';

export default class UbcColumnsFourBackgroundUI extends Plugin {

  /**
   * @inheritDoc
   */
  static get pluginName() {
    return 'UbcColumnsFourBackgroundUI';
  }

  init() {
    const editor = this.editor;
    const t = editor.t;
    let alloptions = backgroundStyles.map(style => {
      return style;
    });
    const values = alloptions.value;
    const command = editor.commands.get('ubcColumnsFourBackground');

    editor.ui.componentFactory.add('ubcColumnsFourBackgroundOptions', locale => {
      const dropdownView = createDropdown(locale);
      addListToDropdown(dropdownView, _prepareListOptions(values, command));
      dropdownView.buttonView.set({
        label: t('Background Color'),
        tooltip: true,
        withText: true,
        class: 'cke5-ubccolumnsfour-bgcolor-insert-button',
      });
      dropdownView.extendTemplate({
        attributes: {
          class: 'ck-background-options-dropdown'
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
  const activecommand = 'ubcColumnsFourBackground';
  let alloptions = backgroundStyles.map(style => {
    return style;
  });
  // Create dropdown items.
  for (const option of alloptions) {
    const def = {
      type: 'button',
      model: new ViewModel({
        commandName: activecommand,
        commandParam: option.value,
        label: option.label,
        withText: true
      })
    };
    def.model.bind('isOn').to(command, 'value', value => {
      if (value === option.value) {
        return true;
      }
      if (!value || !option.value) {
        return false;
      }
      return value.toLowerCase() === option.value.toLowerCase();
    });
    itemDefinitions.add(def);
  }
  return itemDefinitions;
}
