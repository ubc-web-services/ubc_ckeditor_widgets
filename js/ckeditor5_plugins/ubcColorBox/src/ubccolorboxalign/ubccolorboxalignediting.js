import {
  Plugin
} from 'ckeditor5/src/core';
import {
  Widget
} from 'ckeditor5/src/widget';
import UbcColorBoxAlignCommand from './ubccolorboxaligncommand';

/**
 * CKEditor 5 plugins do not work directly with the DOM. They are defined as
 * plugin-specific data models that are then converted to markup that
 * is inserted in the DOM.
 *
 * CKEditor 5 internally interacts with ubcColorBox as this model:
 * <ubcColorBox>
 *    <ubcColorBoxInner></ubcColorBoxInner>
 * </ubcColorBox>
 *
 * Which is converted for the browser/user as this markup
 *<div class="widget-color-box">
 *  <div class="widget-content first-child--mt-0">
 *    <p></p>
 *  </div>
 * </div>
 *
 *
 * This file has the logic for defining the ubcColorBox model, and for how it is
 * converted to standard DOM markup.
 *
 */
export default class UbcColorBoxAlignEditing extends Plugin {
  static get requires() {
    return [Widget];
  }

  static get pluginName() {
    return 'UbcColorBoxAlignEditing';
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
    editor.model.schema.extend('ubcColorBox', {
      allowAttributes: 'alignclass'
    });
    editor.conversion.attributeToAttribute({
      model: 'alignclass',
      view: 'class'
    });

    /*
     * Commands for the buttons
     */
    editor.commands.add(
      'ubcColorBoxAlignment',
      new UbcColorBoxAlignCommand(editor)
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
          key: 'alignclass',
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
        model: 'alignclass',
        view: modelAttributeValue => ({
          key: 'class',
          value: modelAttributeValue
        })
      });
  }
}
