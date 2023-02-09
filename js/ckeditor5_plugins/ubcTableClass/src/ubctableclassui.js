/**
 * @file registers the simpleBox toolbar button and binds functionality to it.
 */

import { Plugin } from 'ckeditor5/src/core';
import { addListToDropdown, createDropdown, Model, ButtonView } from 'ckeditor5/src/ui';
import { Collection } from 'ckeditor5/src/utils';

import tableColumnIcon from '../../../../icons/adjustments.svg';

export default class UbcTableClassUi extends Plugin {
  /**
   * @inheritDoc
   */
  static get pluginName() {
    return 'UbcTableClassUi';
  }

  /**
   * @inheritDoc
   */
  init() {
    const editor = this.editor;
    const t = this.editor.t;

    editor.ui.componentFactory.add( 'tableUbc', locale => {
      const options = [
        {
          type: 'button',
          model: {
            commandName: 'setPlainClass',
            label: t( 'Plain' ),
            bindIsOn: true
          }
        },
        { type: 'separator' },
        {
          type: 'button',
          model: {
            commandName: 'setCondensedClass',
            label: t( 'Condensed' ),
            bindIsOn: true
          }
        },
        { type: 'separator' },
        {
          type: 'button',
          model: {
            commandName: 'setStripedClass',
            label: t( 'Striped' ),
            bindIsOn: true
          }
        },
        { type: 'separator' },
        {
          type: 'button',
          model: {
            commandName: 'setHoverClass',
            label: t( 'Hover' ),
            bindIsOn: true
          }
        },
      ];

      return this._prepareDropdown( t( 'UBC Table Classes' ), tableColumnIcon, options, locale );
    } );
  }

  /**
   * Creates a dropdown view from a set of options.
   *
   * @private
   * @param {String} label The dropdown button label.
   * @param {String} icon An icon for the dropdown button.
   * @param {Array.<module:ui/dropdown/utils~ListDropdownItemDefinition>} options The list of options for the dropdown.
   * @param {module:utils/locale~Locale} locale
   * @returns {module:ui/dropdown/dropdownview~DropdownView}
   */
  _prepareDropdown( label, icon, options, locale ) {
    const editor = this.editor;
    const dropdownView = createDropdown( locale );
    const commands = this._fillDropdownWithListOptions( dropdownView, options );

    // Decorate dropdown's button.
    dropdownView.buttonView.set( {
      label,
      icon,
      tooltip: true
    } );

    // Make dropdown button disabled when all options are disabled.
    dropdownView.bind( 'isEnabled' ).toMany( commands, 'isEnabled', ( ...areEnabled ) => {
      return areEnabled.some( isEnabled => isEnabled );
    } );

    this.listenTo( dropdownView, 'execute', evt => {
      editor.execute( evt.source.commandName );

      // Toggling a switch button view should not move the focus to the editable.
      if ( !( evt.source instanceof ButtonView ) ) {
        editor.editing.view.focus();
      }
    } );

    return dropdownView;
  }

  /**
   * Injects a {@link module:ui/list/listview~ListView} into the passed dropdown with buttons
   * which execute editor commands as configured in passed options.
   *
   * @private
   * @param {module:ui/dropdown/dropdownview~DropdownView} dropdownView
   * @param {Array.<module:ui/dropdown/utils~ListDropdownItemDefinition>} options The list of options for the dropdown.
   * @returns {Array.<module:core/command~Command>} Commands the list options are interacting with.
   */
  _fillDropdownWithListOptions( dropdownView, options ) {
    const editor = this.editor;
    const commands = [];
    const itemDefinitions = new Collection();

    for ( const option of options ) {
      addListOption( option, editor, commands, itemDefinitions );
    }

    addListToDropdown( dropdownView, itemDefinitions, editor.ui.componentFactory );

    return commands;
  }
}

// Adds an option to a list view.
//
// @param {module:table/tableui~DropdownOption} option A configuration option.
// @param {module:core/editor/editor~Editor} editor
// @param {Array.<module:core/command~Command>} commands The list of commands to update.
// @param {Iterable.<module:ui/dropdown/utils~ListDropdownItemDefinition>} itemDefinitions
// A collection of dropdown items to update with the given option.
function addListOption( option, editor, commands, itemDefinitions ) {
  const model = option.model = new Model( option.model );
  const { commandName, bindIsOn } = option.model;

  if ( option.type === 'button' ) {
    const command = editor.commands.get( commandName );

    commands.push( command );

    model.set( { commandName } );

    model.bind( 'isEnabled' ).to( command );

    if ( bindIsOn ) {
      model.bind( 'isOn' ).to( command, 'value' );
    }
  }

  model.set( {
    withText: true
  } );

  itemDefinitions.add( option );
}
