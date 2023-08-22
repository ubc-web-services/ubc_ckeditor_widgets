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

export default class UbcColorBoxShadowUI extends Plugin {

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
    return 'UbcColorBoxShadowUI';
  }

  init() {
    const editor = this.editor;
    editor.ui.componentFactory.add('ubcColorBoxShadowToggle', (locale) => {
      const command = editor.commands.get('ubcColorBoxShadow');
      const buttonView = new ButtonView(locale);
      // Create the toolbar button.
      buttonView.set({
        label: editor.t('Toggle Shadow'),
        tooltip: true,
        withText: true,
        class: 'cke5-ubccolorbox-shadow-insert-button',
      });
      // Bind the state of the button to the command.
      //buttonView.bind('isEnabled').to(command);
      buttonView.bind( 'isEnabled' ).to( command, 'isEnabled' );
			buttonView.bind('isOn').to(command);
      //console.log('isOn value is ' + buttonView.isOn);
      //console.log('isEnabled value is ' + buttonView.isEnabled);
      // Execute the command when the button is clicked (executed).
      this.listenTo(buttonView, 'execute', () =>
        editor.execute('ubcColorBoxShadow'),
      );
      return buttonView;
    });
  }
}
