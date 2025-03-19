/**
 * @file registers the ubcColumnsFour toolbar button and binds functionality to it.
 */

import {
  Plugin,
  icons
} from 'ckeditor5/src/core';
import {
  ButtonView,
  ContextualBalloon
} from 'ckeditor5/src/ui';

export default class UbcColumnsFourShadowUI extends Plugin {

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
    return 'UbcColumnsFourShadowUI';
  }

  init() {
    const editor = this.editor;
    editor.ui.componentFactory.add('ubcColumnsFourShadowToggle', (locale) => {
      const command = editor.commands.get('ubcColumnsFourShadow');
      const buttonView = new ButtonView(locale);
      // Create the toolbar button.
      buttonView.set({
        label: editor.t('Toggle Shadow'),
        tooltip: true,
        withText: true,
        class: 'cke5-ubccolumnsfour-shadow-insert-button',
      });
      // Bind the state of the button to the command.
      buttonView.bind('isEnabled').to(command);
      buttonView.bind('isOn').to(command);
      // Execute the command when the button is clicked (executed).
      this.listenTo(buttonView, 'execute', () =>
        editor.execute('ubcColumnsFourShadow')
      );
      return buttonView;
    });
  }
}
