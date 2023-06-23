import {
  Plugin
} from 'ckeditor5/src/core';
import {
  Widget
} from 'ckeditor5/src/widget';
import UbcColumnsThreeGapCommand from './ubccolumnsthreegapcommand';

export default class UbcColumnsThreeGapEditing extends Plugin {

  static get requires() {
    return [Widget];
  }

  static get pluginName() {
    return 'UbcColumnsThreeGapEditing';
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
      allowAttributes: 'gapclass'
    });
    editor.conversion.attributeToAttribute({
      model: 'gapclass',
      view: 'class'
    });

    /*
     * Commands for the buttons
     */
    editor.commands.add(
      'ubcColumnsThreeGap',
      new UbcColumnsThreeGapCommand(editor)
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
          value: /\bgap-[\S]+/
        },
        model: {
          key: 'gapclass',
          value: viewElement => {
            const regexp = /\bgap-([\S]+)/;
            const match = viewElement.getAttribute('class').match(regexp);
            return match[0];
          }
        }
      });
    conversion
      .for('downcast')
      .attributeToAttribute({
        model: 'gapclass',
        view: modelAttributeValue => ({
          key: 'class',
          value: modelAttributeValue
        })
      });
  }
}
