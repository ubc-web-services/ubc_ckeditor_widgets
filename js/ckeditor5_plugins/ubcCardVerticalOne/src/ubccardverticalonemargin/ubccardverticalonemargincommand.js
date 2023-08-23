/**
 * @file defines UbcCardVerticalOneMarginCommand.
 */

import {
  Command
} from 'ckeditor5/src/core';
/**
 *
 * @extends module:core/command~Command
 */
export default class UbcCardVerticalOneMarginCommand extends Command {
  /**
   * Creates a new `UbcCardVerticalOneMarginCommand` instance.
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
    const currentvalue = options.value;
    const thisattribute = 'marginclass';

    // Is the command triggered from the `ubcCardVerticalOne`?
    if (selectedElement && selectedElement.is('element', 'ubcCardVerticalOne')) {
      modelElement = selectedElement;
    } else {
      modelElement = selection.getFirstPosition().findAncestor('ubcCardVerticalOne');
    }

    model.change(writer => {
      if (selection.isCollapsed) {
        if (currentvalue) {
          writer.setAttribute(thisattribute, currentvalue, modelElement);
        } else {
          writer.removeAttribute(thisattribute, modelElement);
        }
      } else {
        const ranges = model.schema.getValidRanges(selection.getRanges(), thisattribute);
        for (const range of ranges) {
          if (currentvalue) {
            writer.setAttribute(thisattribute, currentvalue, range);
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
    const thisattribute = 'marginclass';
    const thiselement = selection.getFirstPosition().findAncestor('ubcCardVerticalOne');

    // Determine if the cursor (selection) is in a position where adding a
    // ubcCardVerticalOne is permitted. This is based on the schema of the model(s)
    // currently containing the cursor.
    const allowedIn = model.schema.findAllowedParent(
      selection.getFirstPosition(),
      'ubcCardVerticalOne',
    );

    // If the cursor is not in a location where a ubcCardVerticalOne can be added, return
    // null so the addition doesn't happen.
    this.isEnabled = thiselement !== null;
    if (thiselement) {
      this.value = thiselement.getAttribute( thisattribute );
    } else {
      this.value = false;
    }
  }
}
