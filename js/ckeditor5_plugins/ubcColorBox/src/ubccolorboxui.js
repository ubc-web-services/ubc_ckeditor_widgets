/**
 * @file registers the ubcColorBox toolbar button and binds functionality to it.
 */

import { Plugin } from 'ckeditor5/src/core';
import { ButtonView } from 'ckeditor5/src/ui';
import icon from '../../../../icons/ubcColorBox.svg';

export default class UbcColorBoxUI extends Plugin {

  init() {
    const editor = this.editor;

    // This will register the ubcColorBox toolbar button.
    editor.ui.componentFactory.add('ubcColorBox', (locale) => {
      const command = editor.commands.get('insertUbcColorBox');
      const buttonView = new ButtonView(locale);

      // Create the toolbar button.
      buttonView.set({
        label: editor.t('Color Box'),
        icon,
        tooltip: true,
      });

      // Bind the state of the button to the command.
      buttonView.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');

      // Execute the command when the button is clicked (executed).
      this.listenTo(buttonView, 'execute', () =>
        editor.execute('insertUbcColorBox'),
      );

      return buttonView;
    });
  }

}
