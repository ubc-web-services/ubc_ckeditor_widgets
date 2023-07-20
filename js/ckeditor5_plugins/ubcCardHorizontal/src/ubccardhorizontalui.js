/**
 * @file registers the ubcCardHorizontal toolbar button and binds functionality to it.
 */

import { Plugin } from 'ckeditor5/src/core';
import { ButtonView, ContextualBalloon } from 'ckeditor5/src/ui';
import icon from '../../../../icons/ubcCardHorizontal.svg';

export default class UbcCardHorizontalUI extends Plugin {

  /**
  * @inheritdoc
  */
  static get requires() {
    return [ContextualBalloon];
  }

  init() {
    const editor = this.editor;

    // This will register the ubcCardHorizontal toolbar button.
    editor.ui.componentFactory.add('ubcCardHorizontal', (locale) => {
      const command = editor.commands.get('ubcCardHorizontal');
      const buttonView = new ButtonView(locale);

      // Create the toolbar button.
      buttonView.set({
        label: editor.t('Horizontal Card'),
        icon,
        tooltip: true,
        class: 'cke5-ubccardhorizontal-insert-button',
      });

      // Bind the state of the button to the command.
      buttonView.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');

      // Execute the command when the button is clicked (executed).
      this.listenTo(buttonView, 'execute', () =>
        editor.execute('ubcCardHorizontal'),
      );
      return buttonView;
    });
  }
}
