/**
 * @file defines UbcColumnsThreeShadowCommand.
 */

import {
  Command
} from 'ckeditor5/src/core';
/**
 *
 * @extends module:core/command~Command
 */
export default class UbcColumnsThreeShadowCommand extends Command {
  /**
   * Creates a new `UbcColumnsThreeShadowCommand` instance.
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
    let modelElement3 = '';
    const thisattribute = 'shadowclass';

    if (selectedElement && selectedElement.is('element', 'ubcColumnsThree')) {
      modelElement = selectedElement.getChild(0).getChild(0);
      modelElement2 = selectedElement.getChild(0).getChild(1);
      modelElemen3 = selectedElement.getChild(0).getChild(2);
    } else {
      modelElement = selection.getFirstPosition().findAncestor('ubcColumnsThree').getChild(0).getChild(0);
      modelElement2 = selection.getFirstPosition().findAncestor('ubcColumnsThree').getChild(0).getChild(1);
      modelElement3 = selection.getFirstPosition().findAncestor('ubcColumnsThree').getChild(0).getChild(2);
    }
    let active = modelElement.getAttribute(thisattribute);

    model.change(writer => {
      if (active === 'drop-shadow-md') {
        writer.setAttribute(thisattribute, 'drop-shadow-none', modelElement);
        writer.setAttribute(thisattribute, 'drop-shadow-none', modelElement2);
        writer.setAttribute(thisattribute, 'drop-shadow-none', modelElement3);
        this.isOn = false;
      } else {
        writer.setAttribute(thisattribute, 'drop-shadow-md', modelElement);
        writer.setAttribute(thisattribute, 'drop-shadow-md', modelElement2);
        writer.setAttribute(thisattribute, 'drop-shadow-md', modelElement3);
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
    const thiselement = selection.getFirstPosition().findAncestor('ubcColumnsThree');

    // Determine if the cursor (selection) is in a position where adding a
    // ubcColumnsThree is permitted. This is based on the schema of the model(s)
    // currently containing the cursor.
    const allowedIn = model.schema.findAllowedParent(
      selection.getFirstPosition(),
      'ubcColumnsThree',
    );

    // If the cursor is not in a location where a ubcColumnsThree can be added, return
    // null so the addition doesn't happen.
    this.isEnabled = thiselement !== null;
    if (thiselement) {
      this.value = thiselement.getChild(0).getChild(0).getAttribute( thisattribute );
      this.value = thiselement.getChild(0).getChild(1).getAttribute( thisattribute );
      this.value = thiselement.getChild(0).getChild(2).getAttribute( thisattribute );
    } else {
      this.value = false;
    }
  }
}
