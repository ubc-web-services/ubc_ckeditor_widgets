/**
 * @file defines UbcColumnsTwoKeylineCommand.
 */

import {
  Command
} from 'ckeditor5/src/core';
/**
 *
 * @extends module:core/command~Command
 */
export default class UbcColumnsTwoKeylineCommand extends Command {
  /**
   * Creates a new `UbcColumnsTwoKeylineCommand` instance.
   *
   * @param {module:core/editor/editor~Editor} editor The editor on which this command will be used.
   * @param {Object} options
   * @param {String} [options.active] The active class name
   * @param {String} attributeName The attribute that the active class is being applied to
   * @param {Object} classOptions The array of classes from which the allowed classes are taken
   */
  constructor(editor) {
    super(editor);
  }

  execute(options = {}) {
    const {
      editor
    } = this;
    const {
      model
    } = this.editor;
    const {
      selection
    } = editor.model.document;
    const selectedElement = selection.getSelectedElement();
    let modelElement = '';
    const thisattribute = 'keylineclass';

    if (selectedElement && selectedElement.is('element', 'ubcColumnsTwo')) {
      modelElement = selectedElement;
    } else {
      modelElement = selection.getFirstPosition().findAncestor('ubcColumnsTwo');
    }
    let active = modelElement.getAttribute(thisattribute);

    model.change(writer => {
      if (active === 'widget-keylines') {
        writer.setAttribute(thisattribute, 'widget-keyline-none', modelElement);
        this.isOn = false;
      } else {
        writer.setAttribute(thisattribute, 'widget-keylines', modelElement);
        this.isOn = true;
      }
    });
  }
}
