/**
 * @file defines UbcColumnsFourKeylineCommand.
 */

import {
  Command
} from 'ckeditor5/src/core';
/**
 *
 * @extends module:core/command~Command
 */
export default class UbcColumnsFourKeylineCommand extends Command {
  /**
   * Creates a new `UbcColumnsFourKeylineCommand` instance.
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

    if (selectedElement && selectedElement.is('element', 'ubcColumnsFour')) {
      modelElement = selectedElement;
    } else {
      modelElement = selection.getFirstPosition().findAncestor('ubcColumnsFour');
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

  refresh() {
    const {
      model
    } = this.editor;
    const {
      selection
    } = model.document;
    const thisattribute = 'keylineclass';
    const thiselement = selection.getFirstPosition().findAncestor('ubcColumnsFour');

    // Determine if the cursor (selection) is in a position where adding a
    // ubcColumnsFour is permitted. This is based on the schema of the model(s)
    // currently containing the cursor.
    const allowedIn = model.schema.findAllowedParent(
      selection.getFirstPosition(),
      'ubcColumnsFour',
    );

    // If the cursor is not in a location where a ubcColumnsFour can be added, return
    // null so the addition doesn't happen.
    this.isEnabled = allowedIn !== null;
    if (thiselement) {
      this.value = thiselement.getAttribute( thisattribute );
    } else {
      this.value = false;
    }
  }
}
