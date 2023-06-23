import {
  Plugin
} from 'ckeditor5/src/core';
import UbcTableClassCommand from './ubctableclasscommand';

/**
 * CKEditor 5 plugins do not work directly with the DOM. They are defined as
 * plugin-specific data models that are then converted to markup that
 * is inserted in the DOM.
 *
 * This file has the logic for defining the simpleBox model, and for how it is
 * converted to standard DOM markup.
 */
export default class UbcTableClassEditing extends Plugin {
  /**
   * @inheritDoc
   */
  static get pluginName() {
    return 'UbcTableClassEditing';
  }

  /**
   * @inheritDoc
   */
  init() {
    const editor = this.editor;
    const model = editor.model;
    const table_classes = [{
        id: 'plain',
        classes: 'table--plain'
      },
      {
        id: 'condensed',
        classes: 'table--condensed'
      },
      {
        id: 'striped',
        classes: 'table--striped'
      },
      {
        id: 'hover',
        classes: 'table--hover'
      },
    ];

    model.schema.extend('table', {
      allowAttributes: ['plain', 'condensed', 'striped', 'hover', 'class']
    });

    // Define all the commands.
    editor.commands.add('setPlainClass', new UbcTableClassCommand(editor, 'plain'));
    editor.commands.add('setCondensedClass', new UbcTableClassCommand(editor, 'condensed'));
    editor.commands.add('setStripedClass', new UbcTableClassCommand(editor, 'striped'));
    editor.commands.add('setHoverClass', new UbcTableClassCommand(editor, 'hover'));

    table_classes.forEach((tableClass) => {
      editor.model.schema.extend('table', {
        allowAttributes: tableClass.id
      });
      editor.conversion.for('upcast').attributeToAttribute({
        model: {
          name: 'table',
          key: tableClass.id,
          value: true,
        },
        view: {
          key: 'class',
          value: tableClass.classes,
        },
      });

      const val = 'attribute:' + tableClass.id + ':table';
      // Apply attribute to table element no matter if it's needed or not.
      editor.conversion.for('downcast').add(dispatcher => {
        dispatcher.on(val, (evt, data, conversionApi) => {
          const viewElement = conversionApi.mapper.toViewElement(data.item);
          conversionApi.writer.addClass(tableClass.classes, viewElement);
        });
      });
    });
  }
}
