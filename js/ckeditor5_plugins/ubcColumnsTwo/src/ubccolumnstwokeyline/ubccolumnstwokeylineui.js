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
import icon from '../../../../../icons/addKeyline.svg';

export default class UbcColumnsTwoKeylineUI extends Plugin {

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
    return 'UbcColumnsTwoKeylineUI';
  }

  init() {
    const editor = this.editor;
    editor.ui.componentFactory.add('ubcColumnsTwoKeylineToggle', (locale) => {
      const command = editor.commands.get('ubcColumnsTwoKeyline');
      const buttonView = new ButtonView(locale);
      // Create the toolbar button.
      buttonView.set({
        label: editor.t('Toggle Keylines'),
        tooltip: true,
        //icon,
        withText: true,
      });
      // Bind the state of the button to the command.
      buttonView.bind('isEnabled').to(command);
      buttonView.bind('isOn').to(command);
      // Execute the command when the button is clicked (executed).
      this.listenTo(buttonView, 'execute', () =>
        editor.execute('ubcColumnsTwoKeyline')
      );
      return buttonView;
    });
  }
}
