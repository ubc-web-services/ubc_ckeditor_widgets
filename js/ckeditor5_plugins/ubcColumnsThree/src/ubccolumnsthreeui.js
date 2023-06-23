/**
 * @file registers the ubcColumnsThree toolbar button and binds functionality to it.
 */

import {
  Plugin
} from 'ckeditor5/src/core';
import {
  ButtonView,
  ContextualBalloon
} from 'ckeditor5/src/ui';
import icon from '../../../../icons/ubcColumnsThree.svg';

export default class UbcColumnsThreeUI extends Plugin {

  /**
   * @inheritdoc
   */
  static get requires() {
    return [ContextualBalloon];
  }

  init() {
    const editor = this.editor;

    // This will register the ubcColumnsThree toolbar button.
    editor.ui.componentFactory.add('ubcColumnsThree', (locale) => {
      const command = editor.commands.get('ubcColumnsThree');
      const buttonView = new ButtonView(locale);

      // Create the toolbar button.
      buttonView.set({
        label: editor.t('Three Columns'),
        icon,
        tooltip: true,
      });

      // Bind the state of the button to the command.
      buttonView.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');

      // Execute the command when the button is clicked (executed).
      this.listenTo(buttonView, 'execute', () =>
        editor.execute('ubcColumnsThree'),
      );
      return buttonView;
    });
  }
}
