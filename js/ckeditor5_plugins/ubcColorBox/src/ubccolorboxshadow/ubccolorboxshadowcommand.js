/**
 * @file defines UbcColorBoxShadowCommand.
 */

import {
  Command
} from 'ckeditor5/src/core';
import {
  first
} from 'ckeditor5/src/utils';
/**
 *
 * @extends module:core/command~Command
 */
export default class UbcColorBoxShadowCommand extends Command {
  /**
   * Creates a new `UbcColorBoxShadowCommand` instance.
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
    const thisattribute = 'shadowclass';

    model.change(writer => {
      if (selectedElement && selectedElement.is('element', 'ubcColorBox')) {
        modelElement = selectedElement;
      } else {
        modelElement = selection.getFirstPosition().findAncestor('ubcColorBox');
      }
      let active = modelElement.getAttribute(thisattribute);

      if (active === 'drop-shadow-md') {
        writer.setAttribute(thisattribute, 'drop-shadow-none', modelElement);
        this.isOn = false;
      } else {
        writer.setAttribute(thisattribute, 'drop-shadow-md', modelElement);
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
    const thiselement = selection.getFirstPosition().findAncestor('ubcColorBox');

    // Determine if the cursor (selection) is in a position where adding a
    // ubcColorBox is permitted. This is based on the schema of the model(s)
    // currently containing the cursor.
    const allowedIn = model.schema.findAllowedParent(
      selection.getFirstPosition(),
      'ubcColorBox',
    );

    // If the cursor is not in a location where a ubcColorBox can be added, return
    // null so the addition doesn't happen.
    this.isEnabled = allowedIn !== null;
    if (thiselement) {
      this.value = thiselement.getAttribute( thisattribute );
    } else {
      this.value = false;
    }
  }
}
