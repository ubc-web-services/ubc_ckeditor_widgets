import {
  Plugin
} from 'ckeditor5/src/core';
import UbcTableCellClassCommand from './ubctablecellclasscommand';

/**
 * CKEditor 5 plugins do not work directly with the DOM. They are defined as
 * plugin-specific data models that are then converted to markup that
 * is inserted in the DOM.
 *
 * This file has the logic for defining the simpleBox model, and for how it is
 * converted to standard DOM markup.
 */
export default class UbcTableCellClassEditing extends Plugin {
  /**
   * @inheritDoc
   */
  static get pluginName() {
    return 'UbcTableCellClassEditing';
  }

  /**
   * @inheritDoc
   */
  init() {
    const editor = this.editor;
    const model = editor.model;
    const table_classes = [{
        id: 'half',
        classes: 'w-half'
      },
      {
        id: 'third',
        classes: 'w-one-third'
      },
      {
        id: 'quarter',
        classes: 'w-one-quarter'
      },
      {
        id: 'fifth',
        classes: 'w-one-fifth'
      },
      {
        id: 'sixth',
        classes: 'w-one-sixth'
      },
    ];

    model.schema.extend('tableCell', {
      allowAttributes: ['half', 'third', 'quarter', 'fifth', 'sixth', 'class']
    });

    // Define all the commands.
    editor.commands.add('setCellClass1', new UbcTableCellClassCommand(editor, 'half'));
    editor.commands.add('setCellClass2', new UbcTableCellClassCommand(editor, 'third'));
    editor.commands.add('setCellClass3', new UbcTableCellClassCommand(editor, 'quarter'));
    editor.commands.add('setCellClass4', new UbcTableCellClassCommand(editor, 'fifth'));
    editor.commands.add('setCellClass5', new UbcTableCellClassCommand(editor, 'sixth'));

    table_classes.forEach((tableClass) => {
      editor.model.schema.extend('tableCell', {
        allowAttributes: tableClass.id
      });
      editor.conversion.for('upcast').attributeToAttribute({
        model: {
          name: 'tableCell',
          key: tableClass.id,
          value: true,
        },
        view: {
          key: 'class',
          value: tableClass.classes,
        },
      });

      const val = 'attribute:' + tableClass.id + ':tableCell';
      // Apply attribute to table element no matter if it's needed or not.
      editor.conversion.for('dataDowncast').add(dispatcher => {
        dispatcher.on(val, (evt, data, conversionApi) => {
          const viewElement = conversionApi.mapper.toViewElement(data.item);
          conversionApi.writer.removeClass('w-half', viewElement);
          conversionApi.writer.removeClass('w-one-third', viewElement);
          conversionApi.writer.removeClass('w-one-quarter', viewElement);
          conversionApi.writer.removeClass('w-one-fifth', viewElement);
          conversionApi.writer.removeClass('w-one-sixth', viewElement);
          conversionApi.writer.addClass(tableClass.classes, viewElement);
        });
      });
      editor.conversion.for('editingDowncast').add(dispatcher => {
        dispatcher.on(val, (evt, data, conversionApi) => {
          const viewElement = conversionApi.mapper.toViewElement(data.item);
          conversionApi.writer.removeClass('w-half', viewElement);
          conversionApi.writer.removeClass('w-one-third', viewElement);
          conversionApi.writer.removeClass('w-one-quarter', viewElement);
          conversionApi.writer.removeClass('w-one-fifth', viewElement);
          conversionApi.writer.removeClass('w-one-sixth', viewElement);
          conversionApi.writer.addClass(tableClass.classes, viewElement);
        });
      });
    });
  }
}
