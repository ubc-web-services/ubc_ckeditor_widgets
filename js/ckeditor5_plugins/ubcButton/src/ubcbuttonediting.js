import { Plugin } from 'ckeditor5/src/core';
import InsertUbcButtonCommand from './insertubcbuttoncommand';

/**
 * CKEditor 5 plugins do not work directly with the DOM. They are defined as
 * plugin-specific data models that are then converted to markup that
 * is inserted in the DOM.
 *
 * This file has the logic for defining the simpleBox model, and for how it is
 * converted to standard DOM markup.
 */
export default class UbcButtonEditing extends Plugin {
  /**
   * @inheritDoc
   */
  static get pluginName() {
    return 'UbcButtonEditing';
  }

  /**
   * @inheritDoc
   */
  init() {
    const editor = this.editor;
    const model = editor.model;

    const column_classes = [
      { id: 'equal', classes: 'align-equal' },
      { id: 'lg-left', classes: 'align-large-left' },
      { id: 'lg-right', classes: 'align-large-right' },
    ];

    model.schema.extend( 'ubcColumnsTwo', {
      allowAttributes: [ 'equal', 'lg-left', 'lg-right', 'class' ]
    } );

    // Define all the commands.
    editor.commands.add( 'setColumnClass1', new InsertUbcButtonCommand( editor, 'equal' ) );
    editor.commands.add( 'setColumnClass2', new InsertUbcButtonCommand( editor, 'lg-left' ) );
    editor.commands.add( 'setColumnClass3', new InsertUbcButtonCommand( editor, 'lg-right' ) );

    column_classes.forEach( ( columnClass ) => {
      editor.model.schema.extend( 'ubcColumnsTwo', { allowAttributes: columnClass.id } );

      editor.conversion.for( 'upcast' ).attributeToAttribute( {
        model: {
          name: 'ubcColumnsTwo',
          key: columnClass.id,
          value: true,
        },
        view: {
          key: 'class',
          value: columnClass.classes,
        },
      } );

      const val = 'attribute:' + columnClass.id + ':ubcColumnsTwo';

      // Apply attribute to table element no matter if it's needed or not.
      editor.conversion.for( 'dataDowncast' ).add( dispatcher => {
        dispatcher.on( val, ( evt, data, conversionApi ) => {
          const viewElement = conversionApi.mapper.toViewElement( data.item );
          conversionApi.writer.removeClass( 'align-equal', viewElement );
          conversionApi.writer.removeClass( 'align-large-left', viewElement );
          conversionApi.writer.removeClass( 'align-large-right', viewElement );
          conversionApi.writer.addClass( columnClass.classes, viewElement );
        } );
      });

      editor.conversion.for( 'editingDowncast' ).add( dispatcher => {
        dispatcher.on( val, ( evt, data, conversionApi ) => {
          const viewElement = conversionApi.mapper.toViewElement( data.item );
          conversionApi.writer.removeClass( 'align-equal', viewElement );
          conversionApi.writer.removeClass( 'align-large-left', viewElement );
          conversionApi.writer.removeClass( 'align-large-right', viewElement );
          conversionApi.writer.addClass( columnClass.classes, viewElement );
        } );
      });
    } );
  }
}
