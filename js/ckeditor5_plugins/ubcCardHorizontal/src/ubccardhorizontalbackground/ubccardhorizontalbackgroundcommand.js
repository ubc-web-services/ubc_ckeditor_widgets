/**
 * @file defines UbcCardHorizontalBackgroundCommand.
 */
// cSpell:ignore ubccolorboxediting

import {
  Command
} from 'ckeditor5/src/core';
/**
 *
 * @extends module:core/command~Command
 */
export default class UbcCardHorizontalBackgroundCommand extends Command {
  /**
   * Creates a new `UbcCardHorizontalBackgroundCommand` instance.
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
    const thisattribute = 'backgroundclass';

    // Is the command triggered from the `ubcCardHorizontal`?
    if (selectedElement && selectedElement.is('element', 'ubcCardHorizontal')) {
      modelElement = selectedElement;
    } else {
      modelElement = selection.getFirstPosition().findAncestor('ubcCardHorizontal');
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
    const model = this.editor.model;
    const doc = model.document;
    const thisattribute = 'backgroundclass';
    this.value = doc.selection.getAttribute(thisattribute);
    this.isEnabled = model.schema.getValidRanges(doc.selection, thisattribute);
  }
}
