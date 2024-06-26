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

    editor.ui.componentFactory.add('ubcColorBoxAlignFull', (locale) => {
      const command = editor.commands.get('ubcColorBoxAlignment');
      const buttonView = new ButtonView(locale);
      // Create the toolbar button.
      buttonView.set({
        label: editor.t('Full Width'),
        icon: icons.objectFullWidth,
        tooltip: true,
        class: 'cke5-ubccolorbox-align-full-button',
      });
      // Bind the state of the button to the command.
      buttonView.bind('isEnabled').to(command);
      buttonView.bind('isOn').to(command);
      // Execute the command when the button is clicked (executed).
      this.listenTo(buttonView, 'execute', () =>
        editor.execute('ubcColorBoxAlignment', {
          value: 'align-full'
        })
      );
      return buttonView;
    });

    editor.ui.componentFactory.add('ubcColorBoxAlignLeft', (locale) => {
      const command = editor.commands.get('ubcColorBoxAlignment');
      const buttonView = new ButtonView(locale);
      // Create the toolbar button.
      buttonView.set({
        label: editor.t('Align left and wrap text'),
        icon: icons.objectLeft,
        tooltip: true,
        class: 'cke5-ubccolorbox-align-left-button',
      });
      // Bind the state of the button to the command.
      buttonView.bind('isEnabled').to(command);
      buttonView.bind('isOn').to(command);
      // Execute the command when the button is clicked (executed).
      this.listenTo(buttonView, 'execute', () =>
        editor.execute('ubcColorBoxAlignment', {
          value: 'align-left'
        })
      );
      return buttonView;
    });

    editor.ui.componentFactory.add('ubcColorBoxAlignCenter', (locale) => {
      const command = editor.commands.get('ubcColorBoxAlignment');
      const buttonView = new ButtonView(locale);
      // Create the toolbar button.
      buttonView.set({
        label: editor.t('Align Center'),
        icon: icons.objectCenter,
        tooltip: true,
        class: 'cke5-ubccolorbox-align-center-button',
      });
      // Bind the state of the button to the command.
      buttonView.bind('isEnabled').to(command);
      buttonView.bind('isOn').to(command);
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
        class: 'cke5-ubccolorbox-align-right-button',
      });
      // Bind the state of the button to the command.
      buttonView.bind('isEnabled').to(command);
      buttonView.bind('isOn').to(command);
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
