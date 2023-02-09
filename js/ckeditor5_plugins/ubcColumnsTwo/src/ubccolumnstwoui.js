/**
 * @file registers the ubcColumnsTwo toolbar button and binds functionality to it.
 */

import { Plugin } from 'ckeditor5/src/core';
import { addListToDropdown, createDropdown, Model, ButtonView } from 'ckeditor5/src/ui';
//import { Collection } from 'ckeditor5/src/utils';
import icon from '../../../../icons/ubcColumnsTwo.svg';

export default class UbcColumnsTwoUI extends Plugin {
  init() {
    const editor = this.editor;
    const t = this.editor.t;

    // This will register the ubcColumnsTwo toolbar button.
    editor.ui.componentFactory.add('ubcColumnsTwo', (locale) => {
      const command = editor.commands.get('insertUbcColumnsTwo');
      const buttonView = new ButtonView(locale);

      // Create the toolbar button.
      buttonView.set({
        label: editor.t('Two Columns'),
        icon,
        tooltip: true,
      });

      // Bind the state of the button to the command.
      buttonView.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');

      // Execute the command when the button is clicked (executed).
      this.listenTo(buttonView, 'execute', () =>
        editor.execute('insertUbcColumnsTwo'),
      );

      return buttonView;
    });

    editor.ui.componentFactory.add( 'columnsUbc', locale => {
      const options = [
        {
          type: 'button',
          model: {
            commandName: 'setColumnClass1',
            label: t( 'Align Equal' ),
            bindIsOn: true
          }
        },
        { type: 'separator' },
        {
          type: 'button',
          model: {
            commandName: 'setColumnClass2',
            label: t( 'Align Large Left' ),
            bindIsOn: true
          }
        },
        { type: 'separator' },
        {
          type: 'button',
          model: {
            commandName: 'setColumnClass3',
            label: t( 'Align Large Right' ),
            bindIsOn: true
          }
        },
      ];

      return this._prepareDropdown( t( 'Column Options' ), buttonIcon, options, locale );
    } );
  }
}
