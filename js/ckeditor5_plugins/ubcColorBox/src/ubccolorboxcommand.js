/**
 * @file defines UbcColorBoxCommand, which is executed when the ubcColorBox
 * toolbar button is pressed.
 */
// cSpell:ignore ubccolorboxediting

import {
  Command
} from 'ckeditor5/src/core';
import {
  defaultColorBoxStyles
} from '../../../config/config';

export default class UbcColorBoxCommand extends Command {

  /**
   * @inheritDoc
   */
  constructor(editor, attributeName) {
    super(editor);
    this.attributeName = attributeName;
  }

  execute() {
    const editor = this.editor;
    const model = this.editor.model;
    const selection = editor.model.document.selection;
    const selectedElement = selection.getSelectedElement();
    let modelUbcColorBox = '';

    // Is the command triggered from the `tableToolbar`?
    if (selectedElement && selectedElement.is('element', 'colorBox')) {
      modelUbcColorBox = selectedElement;
    } else {
      modelUbcColorBox = selection.getFirstPosition().findAncestor('colorBox');
    }

    model.change((writer) => {
      // Insert <colorBox>*</colorBox> at the current selection position
      // in a way that will result in creating a valid model structure.
      model.insertContent(createUbcColorBox(writer));
    });
  }

  refresh() {
    const {
      model
    } = this.editor;
    const {
      selection
    } = model.document;
    const thiselement = selection.getFirstPosition().findAncestor('ubcColorBox');

    // Determine if the cursor (selection) is in a position where adding a
    // colorBox is permitted. This is based on the schema of the model(s)
    // currently containing the cursor.
    const allowedIn = model.schema.findAllowedParent(
      selection.getFirstPosition(),
      'ubcColorBox',
    );

    // If the cursor is not in a location where a colorBox can be added, return
    // null so the addition doesn't happen.
    this.isEnabled = allowedIn !== null;
    if (thiselement) {
      this.value = true;
    } else {
      this.value = false;
    }
  }
}

function createUbcColorBox(writer) {
  // Create instances of the three elements registered with the editor in
  // ubcaccordionediting.js.
  const ubcColorBox = writer.createElement('ubcColorBox', defaultColorBoxStyles, {
    class: 'widget-color-box'
  });
  const ubcColorBoxInner = writer.createElement('ubcColorBoxInner');

  // Append the title and description elements to the ubcColorBox, which matches
  // the parent/child relationship as defined in their schemas.
  writer.append(ubcColorBoxInner, ubcColorBox);
  writer.appendElement('paragraph', ubcColorBoxInner);

  // Return the element to be added to the editor.
  return ubcColorBox;
}
