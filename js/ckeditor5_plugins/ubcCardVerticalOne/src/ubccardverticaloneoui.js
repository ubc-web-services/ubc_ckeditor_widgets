/**
 * @file registers the ubcCardVerticalOne toolbar button and binds functionality to it.
 */

import { Plugin } from 'ckeditor5/src/core';
import { ButtonView } from 'ckeditor5/src/ui';
import icon from '../../../../icons/ubcCardVerticalOne.svg';

export default class UbcCardVerticalOneUI extends Plugin {

  init() {
    const editor = this.editor;

    // This will register the ubcCardVerticalOne toolbar button.
    editor.ui.componentFactory.add('ubcCardVerticalOne', (locale) => {
      const command = editor.commands.get('insertUbcCardVerticalOne');
      const buttonView = new ButtonView(locale);

      // Create the toolbar button.
      buttonView.set({
        label: editor.t('Vertical Card'),
        icon,
        tooltip: true,
      });

      // Bind the state of the button to the command.
      buttonView.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');

      // Execute the command when the button is clicked (executed).
      this.listenTo(buttonView, 'execute', () =>
        editor.execute('insertUbcCardVerticalOne'),
      );

      return buttonView;
    });
  }

}
