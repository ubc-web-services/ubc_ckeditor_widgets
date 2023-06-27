import {
  Plugin
} from 'ckeditor5/src/core';
import {
  Widget
} from 'ckeditor5/src/widget';
import UbcTableClassCommand from './UbcTableClasscommand';

export default class UbcTableClassEditing extends Plugin {

  static get requires() {
    return [Widget];
  }

  static get pluginName() {
    return 'UbcTableClassEditing';
  }

  constructor(editor) {
    super(editor);
  }

  init() {
    const {
      editor
    } = this;

    this._defineConverters();
    /*
     * Map the attributes - in the model, each group gets a custom attribute to contain it, and these then map to the class attribute in the view
     */
    editor.model.schema.extend('table', {
      allowAttributes: 'tableclass'
    });
    editor.conversion.attributeToAttribute({
      model: 'tableclass',
      view: 'class'
    });

    /*
     * Commands for the buttons
     */
    editor.commands.add(
      'ubcTableClass',
      new UbcTableClassCommand(editor)
    );
  }

  _defineConverters() {
    // Converters are registered via the central editor object.
    const {
      conversion
    } = this.editor;

    conversion
      .for('upcast')
      .attributeToAttribute({
        view: {
          key: 'class',
          value: /\btable--[\S]+/
        },
        model: {
          key: 'tableclass',
          value: viewElement => {
            const regexp = /\btable--([\S]+)/;
            const match = viewElement.getAttribute('class').match(regexp);
            return match[0];
          }
        }
      });
    conversion
      .for('downcast')
      .attributeToAttribute({
        model: 'tableclass',
        view: modelAttributeValue => ({
          key: 'class',
          value: modelAttributeValue
        })
      });
  }
}
