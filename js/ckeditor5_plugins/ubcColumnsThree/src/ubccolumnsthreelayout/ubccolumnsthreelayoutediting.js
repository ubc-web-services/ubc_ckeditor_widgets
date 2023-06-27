import {
  Plugin
} from 'ckeditor5/src/core';
import {
  Widget
} from 'ckeditor5/src/widget';
import UbcColumnsThreeLayoutCommand from './ubccolumnsthreelayoutcommand';

export default class UbcColumnsThreeLayoutEditing extends Plugin {

  static get requires() {
    return [Widget];
  }

  static get pluginName() {
    return 'UbcColumnsThreeLayoutEditing';
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
    editor.model.schema.extend('ubcColumnsThree', {
      allowAttributes: 'layoutclass'
    });
    editor.conversion.attributeToAttribute({
      model: 'layoutclass',
      view: 'class'
    });

    /*
     * Commands for the buttons
     */
    editor.commands.add(
      'ubcColumnsThreeLayout',
      new UbcColumnsThreeLayoutCommand(editor)
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
          value: /\balign-[\S]+/
        },
        model: {
          key: 'layoutclass',
          value: viewElement => {
            const regexp = /\balign-([\S]+)/;
            const match = viewElement.getAttribute('class').match(regexp);
            return match[0];
          }
        }
      });
    conversion
      .for('downcast')
      .attributeToAttribute({
        model: 'layoutclass',
        view: modelAttributeValue => ({
          key: 'class',
          value: modelAttributeValue
        })
      });
  }
}
