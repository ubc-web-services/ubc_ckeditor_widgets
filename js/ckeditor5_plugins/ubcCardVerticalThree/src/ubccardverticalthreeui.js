/**
 * @file registers the ubcCardVerticalThree toolbar button and binds functionality to it.
 */

import {
  Plugin
} from 'ckeditor5/src/core';
import {
  ButtonView,
  ContextualBalloon
} from 'ckeditor5/src/ui';
import icon from '../../../../icons/ubcCardVerticalThree.svg';

export default class UbcCardVerticalThreeUI extends Plugin {

  /**
   * @inheritdoc
   */
  static get requires() {
    return [ContextualBalloon];
  }

  init() {
    const editor = this.editor;

    // This will register the ubcAccordion toolbar button.
    editor.ui.componentFactory.add('ubcCardVerticalThree', (locale) => {
      const command = editor.commands.get('ubcCardVerticalThree');
      const buttonView = new ButtonView(locale);

      // Create the toolbar button.
      buttonView.set({
        label: editor.t('Three Vertical Cards'),
        icon,
        tooltip: true,
        class: 'cke5-ubccardverticalthree-insert-button',
      });

      // Bind the state of the button to the command.
      buttonView.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');

      // Execute the command when the button is clicked (executed).
      this.listenTo(buttonView, 'execute', () =>
        editor.execute('ubcCardVerticalThree'),
      );
      return buttonView;
    });
  }
}
