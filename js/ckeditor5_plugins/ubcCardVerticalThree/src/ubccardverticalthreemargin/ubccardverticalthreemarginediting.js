import {
  Plugin
} from 'ckeditor5/src/core';
import {
  Widget
} from 'ckeditor5/src/widget';
import UbcCardVerticalThreeMarginCommand from './ubccardverticalthreemargincommand';

export default class UbcCardVerticalThreeMarginEditing extends Plugin {
  static get requires() {
    return [Widget];
  }

  static get pluginName() {
    return 'UbcCardVerticalThreeMarginEditing';
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
    editor.model.schema.extend('ubcCardVerticalThree', {
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
      'ubcCardVerticalThreeMargin',
      new UbcCardVerticalThreeMarginCommand(editor)
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
