/**
 * @file registers the ubcCardHorizontal toolbar button and binds functionality to it.
 */

import { Plugin } from 'ckeditor5/src/core';
import { ButtonView } from 'ckeditor5/src/ui';
import icon from '../../../../icons/ubcCardHorizontal.svg';

export default class UbcCardHorizontalUI extends Plugin {
  init() {
    const editor = this.editor;

    // This will register the ubcCardHorizontal toolbar button.
    editor.ui.componentFactory.add('ubcCardHorizontal', (locale) => {
      const command = editor.commands.get('insertUbcCardHorizontal');
      const buttonView = new ButtonView(locale);

      // Create the toolbar button.
      buttonView.set({
        label: editor.t('Horizontal Card'),
        icon,
        tooltip: true,
      });

      // Bind the state of the button to the command.
      buttonView.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');

      // Execute the command when the button is clicked (executed).
      this.listenTo(buttonView, 'execute', () =>
        editor.execute('insertUbcCardHorizontal'),
      );

      return buttonView;
    });
  }
}
