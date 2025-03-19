/**
 * @file defines UbcColumnsTwoBackgroundCommand.
 */

import {
  Command
} from 'ckeditor5/src/core';
/**
 *
 * @extends module:core/command~Command
 */
export default class UbcColumnsTwoBackgroundCommand extends Command {
  /**
   * Creates a new `UbcColumnsTwoBackgroundCommand` instance.
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
    const currentvalue = options.value;
    const thisattribute = 'backgroundclass';

    // Is the command triggered from the `ubcColumnsTwo`?
    if (selectedElement && selectedElement.is('element', 'ubcColumnsTwo')) {
      modelElement = selectedElement.getChild(0).getChild(0);
      modelElement2 = selectedElement.getChild(0).getChild(1);
    } else {
      modelElement = selection.getFirstPosition().findAncestor('ubcColumnsTwo').getChild(0).getChild(0);
      modelElement2 = selection.getFirstPosition().findAncestor('ubcColumnsTwo').getChild(0).getChild(1);
    }

    model.change(writer => {
      if (selection.isCollapsed) {
        if (currentvalue) {
          writer.setAttribute(thisattribute, currentvalue, modelElement);
          writer.setAttribute(thisattribute, currentvalue, modelElement2);
        } else {
          writer.removeAttribute(thisattribute, modelElement);
          writer.removeAttribute(thisattribute, modelElement2);
        }
      } else {
        const ranges = model.schema.getValidRanges(selection.getRanges(), thisattribute);
        for (const range of ranges) {
          if (currentvalue) {
            writer.setAttribute(thisattribute, currentvalue, range);
            this.value = currentvalue;
          } else {
            writer.removeAttribute(thisattribute, range);
          }
        }
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
    const thisattribute = 'backgroundclass';
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
