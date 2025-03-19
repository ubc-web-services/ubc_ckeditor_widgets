import {
  Plugin
} from 'ckeditor5/src/core';
import {
  Widget
} from 'ckeditor5/src/widget';
import UbcColumnsTwoShadowCommand from './ubccolumnstwoshadowcommand';

export default class UbcColumnsTwoShadowEditing extends Plugin {

  static get requires() {
    return [Widget];
  }

  static get pluginName() {
    return 'UbcColumnsTwoShadowEditing';
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
    editor.model.schema.extend('ubcColumnsTwoColumn', {
      allowAttributes: 'shadowclass'
    });
    editor.conversion.attributeToAttribute({
      model: 'shadowclass',
      view: 'class'
    });

    /*
     * Commands for the buttons
     */
    editor.commands.add(
      'ubcColumnsTwoShadow',
      new UbcColumnsTwoShadowCommand(editor)
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
          value: /drop-shadow-[\S]+/
        },
        model: {
          key: 'shadowclass',
          value: viewElement => {
            const regexp = /drop-shadow-([\S]+)/;
            const match = viewElement.getAttribute('class').match(regexp);
            return match[0];
          }
        }
      });

    conversion
      .for('downcast')
      .attributeToAttribute({
        model: 'shadowclass',
        view: modelAttributeValue => ({
          key: 'class',
          value: modelAttributeValue
        })
      });
  }
}
