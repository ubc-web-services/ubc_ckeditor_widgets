/**
 * @file registers the ubcCardVerticalTwo toolbar button and binds functionality to it.
 */

import {
  Plugin
} from 'ckeditor5/src/core';
import {
  ButtonView,
  ContextualBalloon
} from 'ckeditor5/src/ui';
import icon from '../../../../icons/ubcCardVerticalTwo.svg';

export default class UbcCardVerticalTwoUI extends Plugin {


  /**
   * @inheritdoc
   */
  static get requires() {
    return [ContextualBalloon];
  }

  init() {
    const editor = this.editor;

    // This will register the ubcAccordion toolbar button.
    editor.ui.componentFactory.add('ubcCardVerticalTwo', (locale) => {
      const command = editor.commands.get('ubcCardVerticalTwo');
      const buttonView = new ButtonView(locale);

      // Create the toolbar button.
      buttonView.set({
        label: editor.t('Two Vertical Cards'),
        icon,
        tooltip: true,
      });

      // Bind the state of the button to the command.
      buttonView.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');

      // Execute the command when the button is clicked (executed).
      this.listenTo(buttonView, 'execute', () =>
        editor.execute('ubcCardVerticalTwo'),
      );
      return buttonView;
    });
  }
}
