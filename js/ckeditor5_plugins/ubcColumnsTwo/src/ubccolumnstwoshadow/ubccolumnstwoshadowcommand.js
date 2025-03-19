/**
 * @file defines UbcColumnsTwoShadowCommand.
 */

import {
  Command
} from 'ckeditor5/src/core';
/**
 *
 * @extends module:core/command~Command
 */
export default class UbcColumnsTwoShadowCommand extends Command {
  /**
   * Creates a new `UbcColumnsTwoShadowCommand` instance.
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
    let modelElement2 = '';
    const thisattribute = 'shadowclass';

    if (selectedElement && selectedElement.is('element', 'ubcColumnsTwo')) {
      modelElement = selectedElement.getChild(0).getChild(0);
      modelElement2 = selectedElement.getChild(0).getChild(1);
    } else {
      modelElement = selection.getFirstPosition().findAncestor('ubcColumnsTwo').getChild(0).getChild(0);
      modelElement2 = selection.getFirstPosition().findAncestor('ubcColumnsTwo').getChild(0).getChild(1);
    }
    let active = modelElement.getAttribute(thisattribute);

    model.change(writer => {
      if (active === 'drop-shadow-md') {
        writer.setAttribute(thisattribute, 'drop-shadow-none', modelElement);
        writer.setAttribute(thisattribute, 'drop-shadow-none', modelElement2);
        this.isOn = false;
      } else {
        writer.setAttribute(thisattribute, 'drop-shadow-md', modelElement);
        writer.setAttribute(thisattribute, 'drop-shadow-md', modelElement2);
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
    const thisattribute = 'shadowclass';
    const thiselement = selection.getFirstPosition().findAncestor('ubcColumnsTwo');

    // Determine if the cursor (selection) is in a position where adding a
    // ubcColumnsTwo is permitted. This is based on the schema of the model(s)
    // currently containing the cursor.
    const allowedIn = model.schema.findAllowedParent(
      selection.getFirstPosition(),
      'ubcColumnsTwo',
    );

    // If the cursor is not in a location where a ubcColumnsTwo can be added, return
    // null so the addition doesn't happen.
    this.isEnabled = thiselement !== null;
    if (thiselement) {
      this.value = thiselement.getChild(0).getChild(0).getAttribute( thisattribute );
      this.value = thiselement.getChild(0).getChild(1).getAttribute( thisattribute );
    } else {
      this.value = false;
    }
  }
}
