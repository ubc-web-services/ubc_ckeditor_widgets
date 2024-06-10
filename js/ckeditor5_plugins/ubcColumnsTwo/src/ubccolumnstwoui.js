/**
 * @file registers the ubcColumnsTwo toolbar button and binds functionality to it.
 */

import {
  Plugin
} from 'ckeditor5/src/core';
import {
  ButtonView,
  ContextualBalloon
} from 'ckeditor5/src/ui';
import icon from '../../../../icons/ubcColumnsTwo.svg';

export default class UbcColumnsTwoUI extends Plugin {

  /**
   * @inheritdoc
   */
  static get requires() {
    return [ContextualBalloon];
  }

  init() {
    const editor = this.editor;
    // This will register the ubcColumnsTwo toolbar button.
    editor.ui.componentFactory.add('ubcColumnsTwo', (locale) => {
      const command = editor.commands.get('ubcColumnsTwo');
      const buttonView = new ButtonView(locale);

      // Create the toolbar button.
      buttonView.set({
        label: editor.t('Two Columns'),
        icon,
        tooltip: true,
        class: 'cke5-ubccolumnstwo-insert-button',
      });

      // Bind the state of the button to the command.
      buttonView.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');

      // Execute the command when the button is clicked (executed).
      this.listenTo(buttonView, 'execute', () =>
        editor.execute('ubcColumnsTwo'),
      );
      return buttonView;
    });
  }
}
