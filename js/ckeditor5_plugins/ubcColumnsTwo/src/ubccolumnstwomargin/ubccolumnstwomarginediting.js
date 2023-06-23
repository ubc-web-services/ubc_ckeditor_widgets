import {
  Plugin
} from 'ckeditor5/src/core';
import {
  Widget
} from 'ckeditor5/src/widget';
import UbcColumnsTwoMarginCommand from './ubccolumnstwomargincommand';

export default class UbcColumnsTwoMarginEditing extends Plugin {
  static get requires() {
    return [Widget];
  }

  static get pluginName() {
    return 'UbcColumnsTwoMarginEditing';
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
    editor.model.schema.extend('ubcColumnsTwo', {
      allowAttributes: 'marginclass'
    });
    editor.conversion.attributeToAttribute({
      model: 'marginclass',
      view: 'class'
    });

    /*
     * Commands for the buttons
     */
    editor.commands.add(
      'ubcColumnsTwoMargin',
      new UbcColumnsTwoMarginCommand(editor)
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
          value: /\bmy-[\S]+/
        },
        model: {
          key: 'marginclass',
          value: viewElement => {
            const regexp = /\bmy-([\S]+)/;
            const match = viewElement.getAttribute('class').match(regexp);
            return match[0];
          }
        }
      });
    conversion
      .for('downcast')
      .attributeToAttribute({
        model: 'marginclass',
        view: modelAttributeValue => ({
          key: 'class',
          value: modelAttributeValue
        })
      });
  }
}
