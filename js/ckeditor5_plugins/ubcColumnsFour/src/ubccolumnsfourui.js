/**
 * @file registers the ubcColumnsFour toolbar button and binds functionality to it.
 */

import { Plugin } from 'ckeditor5/src/core';
import { ButtonView } from 'ckeditor5/src/ui';
import icon from '../../../../icons/ubcColumnsFour.svg';

export default class UbcColumnsFourUI extends Plugin {

  init() {
    const editor = this.editor;

    // This will register the ubcColumnsFour toolbar button.
    editor.ui.componentFactory.add('ubcColumnsFour', (locale) => {
      const command = editor.commands.get('insertUbcColumnsFour');
      const buttonView = new ButtonView(locale);

      // Create the toolbar button.
      buttonView.set({
        label: editor.t('Four Columns'),
        icon,
        tooltip: true,
      });

      // Bind the state of the button to the command.
      buttonView.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');

      // Execute the command when the button is clicked (executed).
      this.listenTo(buttonView, 'execute', () =>
        editor.execute('insertUbcColumnsFour'),
      );

      return buttonView;
    });
  }

}
