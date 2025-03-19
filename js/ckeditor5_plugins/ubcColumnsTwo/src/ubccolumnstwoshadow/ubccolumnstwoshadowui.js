/**
 * @file registers the ubcColumnsTwo toolbar button and binds functionality to it.
 */

import {
  Plugin,
  icons
} from 'ckeditor5/src/core';
import {
  ButtonView,
  ContextualBalloon
} from 'ckeditor5/src/ui';

export default class UbcColumnsTwoShadowUI extends Plugin {

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
    return 'UbcColumnsTwoShadowUI';
  }

  init() {
    const editor = this.editor;
    editor.ui.componentFactory.add('ubcColumnsTwoShadowToggle', (locale) => {
      const command = editor.commands.get('ubcColumnsTwoShadow');
      const buttonView = new ButtonView(locale);
      // Create the toolbar button.
      buttonView.set({
        label: editor.t('Toggle Shadow'),
        tooltip: true,
        withText: true,
        class: 'cke5-ubccolumnstwo-shadow-insert-button',
      });
      // Bind the state of the button to the command.
      buttonView.bind('isEnabled').to(command);
      buttonView.bind('isOn').to(command);
      // Execute the command when the button is clicked (executed).
      this.listenTo(buttonView, 'execute', () =>
        editor.execute('ubcColumnsTwoShadow')
      );
      return buttonView;
    });
  }
}
