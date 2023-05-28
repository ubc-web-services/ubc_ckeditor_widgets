/**
 * @file defines InsertUbcColorBoxCommand, which is executed when the ubcColorBox
 * toolbar button is pressed.
 */
// cSpell:ignore ubccolorboxediting

import { Command } from 'ckeditor5/src/core';

export default class InsertUbcColorBoxCommand extends Command {
  execute() {
    const { model } = this.editor;

    model.change((writer) => {
      // Insert <ubcColorBox>*</ubcColorBox> at the current selection position
      // in a way that will result in creating a valid model structure.
      model.insertContent(createUbcColorBox(writer));
    });
  }

  refresh() {
    const { model } = this.editor;
    const { selection } = model.document;

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
  }
}

function createUbcColorBox(writer) {
  // Create instances of the three elements registered with the editor in
  // ubcaccordionediting.js.
  const ubcColorBox = writer.createElement('ubcColorBox');
  const ubcColorBoxInner = writer.createElement('ubcColorBoxInner');

  // Append the title and description elements to the ubcColorBox, which matches
  // the parent/child relationship as defined in their schemas.
  writer.append(ubcColorBoxInner, ubcColorBox);
  writer.appendElement('paragraph', ubcColorBoxInner);

  // Return the element to be added to the editor.
  return ubcColorBox;
}
