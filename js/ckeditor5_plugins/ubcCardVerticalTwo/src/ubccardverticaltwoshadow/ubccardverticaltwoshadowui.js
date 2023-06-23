/**
 * @file registers the ubcCardVerticalTwo toolbar button and binds functionality to it.
 */

import {
  Plugin,
  icons
} from 'ckeditor5/src/core';
import {
  ButtonView,
  ContextualBalloon
} from 'ckeditor5/src/ui';

export default class UbcCardVerticalTwoShadowUI extends Plugin {

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
    return 'UbcCardVerticalTwoShadowUI';
  }

  init() {
    const editor = this.editor;
    editor.ui.componentFactory.add('ubcCardVerticalTwoShadowToggle', (locale) => {
      const command = editor.commands.get('ubcCardVerticalTwoShadow');
      const buttonView = new ButtonView(locale);
      // Create the toolbar button.
      buttonView.set({
        label: editor.t('Toggle Shadow'),
        tooltip: true,
        withText: true,
      });
      // Bind the state of the button to the command.
      buttonView.bind('isEnabled').to(command);
      buttonView.bind('isOn').to(command);
      // Execute the command when the button is clicked (executed).
      this.listenTo(buttonView, 'execute', () =>
        editor.execute('ubcCardVerticalTwoShadow')
      );
      return buttonView;
    });
  }
}
