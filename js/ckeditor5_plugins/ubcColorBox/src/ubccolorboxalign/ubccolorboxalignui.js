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

export default class UbcColorBoxAlignUI extends Plugin {

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
    return 'UbcColorBoxAlignUI';
  }

  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add('ubcColorBoxAlignLeft', (locale) => {
      const command = editor.commands.get('ubcColorBoxAlignment');
      const buttonView = new ButtonView(locale);
      // Create the toolbar button.
      buttonView.set({
        label: editor.t('Align left and wrap text'),
        icon: icons.objectLeft,
        tooltip: true,
        isOn: false,
      });
      // Bind the state of the button to the command.
      buttonView.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');
      // Execute the command when the button is clicked (executed).
      this.listenTo(buttonView, 'execute', () =>
        editor.execute('ubcColorBoxAlignment', {
          value: 'align-left'
        })
      );
      return buttonView;
    });

    editor.ui.componentFactory.add('ubcColorBoxAlignNone', (locale) => {
      const command = editor.commands.get('ubcColorBoxAlignment');
      const buttonView = new ButtonView(locale);
      // Create the toolbar button.
      buttonView.set({
        label: editor.t('Align None'),
        icon: icons.objectFullWidth,
        tooltip: true,
        isOn: false,
      });
      // Bind the state of the button to the command.
      buttonView.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');
      // Execute the command when the button is clicked (executed).
      this.listenTo(buttonView, 'execute', () =>
        editor.execute('ubcColorBoxAlignment', {
          value: 'align-center'
        })
      );
      return buttonView;
    });

    editor.ui.componentFactory.add('ubcColorBoxAlignRight', (locale) => {
      const command = editor.commands.get('ubcColorBoxAlignment');
      const buttonView = new ButtonView(locale);
      // Create the toolbar button.
      buttonView.set({
        label: editor.t('Align right and wrap text'),
        icon: icons.objectRight,
        tooltip: true,
        isOn: false,
      });
      // Bind the state of the button to the command.
      buttonView.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');
      // Execute the command when the button is clicked (executed).
      this.listenTo(buttonView, 'execute', () => {
        editor.execute('ubcColorBoxAlignment', {
          value: 'align-right'
        })
      });
      return buttonView;
    });
  }
}
