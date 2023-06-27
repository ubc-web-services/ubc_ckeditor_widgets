/**
 * @file registers the ubcAccordionToggle toolbar button and binds functionality to it.
 */

import {
  Plugin
} from 'ckeditor5/src/core';
import {
  ButtonView
} from 'ckeditor5/src/ui';
import icon from '../../../../icons/ubcAccordionToggle.svg';

export default class UbcAccordionToggleUI extends Plugin {
  init() {
    const editor = this.editor;

    // This will register the ubcAccordion toolbar button.
    editor.ui.componentFactory.add('ubcAccordionToggle', (locale) => {
      const command = editor.commands.get('ubcAccordionToggle');
      const buttonView = new ButtonView(locale);

      // Create the toolbar button.
      buttonView.set({
        label: editor.t('Toggle All Accordions'),
        icon,
        tooltip: true,
      });

      // Bind the state of the button to the command.
      buttonView.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');

      // Execute the command when the button is clicked (executed).
      this.listenTo(buttonView, 'execute', () =>
        editor.execute('ubcAccordionToggle'),
      );
      return buttonView;
    });
  }
}
