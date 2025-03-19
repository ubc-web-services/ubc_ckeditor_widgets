/**
 * @file defines UbcColumnsFourShadowCommand.
 */

import {
  Command
} from 'ckeditor5/src/core';
/**
 *
 * @extends module:core/command~Command
 */
export default class UbcColumnsFourShadowCommand extends Command {
  /**
   * Creates a new `UbcColumnsFourShadowCommand` instance.
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
    let modelElement4 = '';
    const thisattribute = 'shadowclass';

    if (selectedElement && selectedElement.is('element', 'ubcColumnsFour')) {
      modelElement = selectedElement.getChild(0).getChild(0);
      modelElement2 = selectedElement.getChild(0).getChild(1);
      modelElement3 = selectedElement.getChild(0).getChild(2);
      modelElement4 = selectedElement.getChild(0).getChild(3);
    } else {
      modelElement = selection.getFirstPosition().findAncestor('ubcColumnsFour').getChild(0).getChild(0);
      modelElement2 = selection.getFirstPosition().findAncestor('ubcColumnsFour').getChild(0).getChild(1);
      modelElement3 = selection.getFirstPosition().findAncestor('ubcColumnsFour').getChild(0).getChild(2);
      modelElement4 = selection.getFirstPosition().findAncestor('ubcColumnsFour').getChild(0).getChild(3);
    }
    let active = modelElement.getAttribute(thisattribute);

    model.change(writer => {
      if (active === 'drop-shadow-md') {
        writer.setAttribute(thisattribute, 'drop-shadow-none', modelElement);
        writer.setAttribute(thisattribute, 'drop-shadow-none', modelElement2);
        writer.setAttribute(thisattribute, 'drop-shadow-none', modelElement3);
        writer.setAttribute(thisattribute, 'drop-shadow-none', modelElement4);
        this.isOn = false;
      } else {
        writer.setAttribute(thisattribute, 'drop-shadow-md', modelElement);
        writer.setAttribute(thisattribute, 'drop-shadow-md', modelElement2);
        writer.setAttribute(thisattribute, 'drop-shadow-md', modelElement3);
        writer.setAttribute(thisattribute, 'drop-shadow-md', modelElement4);
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
    this.isEnabled = thiselement !== null;
    if (thiselement) {
      this.value = thiselement.getChild(0).getChild(0).getAttribute( thisattribute );
      this.value = thiselement.getChild(0).getChild(1).getAttribute( thisattribute );
      this.value = thiselement.getChild(0).getChild(2).getAttribute( thisattribute );
      this.value = thiselement.getChild(0).getChild(3).getAttribute( thisattribute );
    } else {
      this.value = false;
    }
  }
}
