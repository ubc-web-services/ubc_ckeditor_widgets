import {
  Plugin
} from 'ckeditor5/src/core';
import {
  Widget
} from 'ckeditor5/src/widget';
import UbcColumnsThreeKeylineCommand from './ubccolumnsthreekeylinecommand';

export default class UbcColumnsThreeKeylineEditing extends Plugin {

  static get requires() {
    return [Widget];
  }

  static get pluginName() {
    return 'UbcColumnsThreeKeylineEditing';
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
      allowAttributes: 'keylineclass'
    });
    editor.conversion.attributeToAttribute({
      model: 'keylineclass',
      view: 'class'
    });

    /*
     * Commands for the buttons
     */
    editor.commands.add(
      'ubcColumnsThreeKeyline',
      new UbcColumnsThreeKeylineCommand(editor)
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
          value: /widget-keyline[\S]+/
        },
        model: {
          key: 'keylineclass',
          value: viewElement => {
            const regexp = /widget-keyline([\S]+)/;
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
