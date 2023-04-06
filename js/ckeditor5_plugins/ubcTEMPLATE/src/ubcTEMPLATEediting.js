import { Plugin } from 'ckeditor5/src/core';
import InsertUbcTEMPLATECommand from './insertubcTEMPLATEcommand';

/**
 * CKEditor 5 plugins do not work directly with the DOM. They are defined as
 * plugin-specific data models that are then converted to markup that
 * is inserted in the DOM.
 *
 * This file has the logic for defining the simpleBox model, and for how it is
 * converted to standard DOM markup.
 */
export default class UbcTEMPLATEEditing extends Plugin {
  /**
   * @inheritDoc
   */
  static get pluginName() {
    return 'UbcTEMPLATEEditing';
  }

  /**
   * @inheritDoc
   */
  init() {
    const editor = this.editor;
    const model = editor.model;

    const table_classes = [
      { id: 'plain', classes: 'table--plain' },
      { id: 'condensed', classes: 'table--condensed' },
      { id: 'striped', classes: 'table--striped' },
      { id: 'hover', classes: 'table--hover' },
    ];

    model.schema.extend( 'table', {
      allowAttributes: [ 'plain', 'condensed', 'striped', 'hover', 'class' ]
    } );

    // Define all the commands.
    editor.commands.add( 'setPlainClass', new InsertUbcTEMPLATECommand( editor, 'plain' ) );
    editor.commands.add( 'setCondensedClass', new InsertUbcTEMPLATECommand( editor, 'condensed' ) );
    editor.commands.add( 'setStripedClass', new InsertUbcTEMPLATECommand( editor, 'striped' ) );
    editor.commands.add( 'setHoverClass', new InsertUbcTEMPLATECommand( editor, 'hover' ) );

    table_classes.forEach( ( TEMPLATE ) => {
      editor.model.schema.extend( 'table', { allowAttributes: TEMPLATE.id } );

      editor.conversion.for( 'upcast' ).attributeToAttribute( {
        model: {
          name: 'table',
          key: TEMPLATE.id,
          value: true,
        },
        view: {
          key: 'class',
          value: TEMPLATE.classes,
        },
      } );

      const val = 'attribute:' + TEMPLATE.id + ':table';

      // Apply attribute to table element no matter if it's needed or not.
      editor.conversion.for( 'downcast' ).add( dispatcher => {
        dispatcher.on( val, ( evt, data, conversionApi ) => {
          const viewElement = conversionApi.mapper.toViewElement( data.item );
          conversionApi.writer.addClass( TEMPLATE.classes, viewElement );
        } );
      });
    } );
  }
}
