/**
 * @file registers the ubcColorBox toolbar button and binds functionality to it.
 */

import {
  Plugin,
  icons
} from 'ckeditor5/src/core';
import {
  ButtonView,
  ContextualBalloon
} from 'ckeditor5/src/ui';

export default class UbcColumnsFourKeylineUI extends Plugin {

  /**
   * @inheritdoc
   */
  static get requires() {
    return [ContextualBalloon];
  }

  /**
   * @inheritDoc
   */
  static get pluginName() {
    return 'UbcColumnsFourKeylineUI';
  }

  init() {
    const editor = this.editor;
    editor.ui.componentFactory.add('ubcColumnsFourKeylineToggle', (locale) => {
      const command = editor.commands.get('ubcColumnsFourKeyline');
      const buttonView = new ButtonView(locale);
      // Create the toolbar button.
      buttonView.set({
        label: editor.t('Toggle Keylines'),
        tooltip: true,
        withText: true,
        class: 'cke5-ubccolumnsfour-keyline-insert-button',
      });
      // Bind the state of the button to the command.
      buttonView.bind('isEnabled').to(command);
      buttonView.bind('isOn').to(command);
      // Execute the command when the button is clicked (executed).
      this.listenTo(buttonView, 'execute', () =>
        editor.execute('ubcColumnsFourKeyline')
      );
      return buttonView;
    });
  }
}
