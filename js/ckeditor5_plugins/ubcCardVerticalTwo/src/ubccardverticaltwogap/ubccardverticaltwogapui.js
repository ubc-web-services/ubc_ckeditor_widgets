/**
 * @file registers the ubcCardVerticalTwo toolbar button and binds functionality to it.
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
	gapStyles
} from '../../../../config/config';

export default class UbcCardVerticalTwoGapUI extends Plugin {

  /**
   * @inheritDoc
   */
  static get pluginName() {
    return 'UbcCardVerticalTwoGapUI';
  }

  init() {
    const editor = this.editor;
    const t = editor.t;
    let alloptions = gapStyles.map(style => {
      return style;
    });
    const values = alloptions.value;
    const command = editor.commands.get('ubcCardVerticalTwoGap');

    editor.ui.componentFactory.add('ubcCardVerticalTwoGapOptions', locale => {
      const dropdownView = createDropdown(locale);
      addListToDropdown(dropdownView, _prepareListOptions(values, command));
      dropdownView.buttonView.set({
        label: t('Gap'),
        tooltip: true,
        withText: true,
        class: 'cke5-ubccardverticaltwo-gap-insert-button',
      });
      dropdownView.extendTemplate({
        attributes: {
          class: 'ck-gap-options-dropdown'
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
  const activecommand = 'ubcCardVerticalTwoGap';
  let alloptions = gapStyles.map(style => {
    return style;
  });
  // Create dropdown items.
  for (const option of alloptions) {
    const def = {
      type: 'button',
      model: new Model({
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
