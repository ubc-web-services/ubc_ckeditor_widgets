/**
 * @file defines InsertUbcColumnsTwoCommand, which is executed when the ubcColumnsTwo
 * toolbar button is pressed.
 */

import { Command } from 'ckeditor5/src/core';

export default class InsertUbcColumnsTwoCommand extends Command {

  execute() {
    const { model } = this.editor;

    model.change((writer) => {
      // Insert <ubcColumnsTwo>*</ubcColumnsTwo> at the current selection position
      // in a way that will result in creating a valid model structure.
      model.insertContent(createUbcColumnsTwo(writer));
    });
  }

  refresh() {
    const { model } = this.editor;
    const { selection } = model.document;

    // Determine if the cursor (selection) is in a position where adding a
    // ubcColumnsTwo is permitted. This is based on the schema of the model(s)
    // currently containing the cursor.
    const allowedIn = model.schema.findAllowedParent(
      selection.getFirstPosition(),
      'ubcColumnsTwo',
    );

    // If the cursor is not in a location where a ubcColumnsTwo can be added, return
    // null so the addition doesn't happen.
    this.isEnabled = allowedIn !== null;
    if ( allowedIn ) {
      this.value = allowedIn.hasAttribute( this.attributeName );
    }
  }
}

function createUbcColumnsTwo(writer) {
  // Create instances of the three elements registered with the editor in
  // ubccolumnstwoediting.js.
  const ubcColumnsTwo = writer.createElement('ubcColumnsTwo');
  const ubcColumnsTwoInner = writer.createElement('ubcColumnsTwoInner');
  const ubcColumnsTwoFirst = writer.createElement('ubcColumnsTwoFirst');
  const ubcColumnsTwoSecond = writer.createElement('ubcColumnsTwoSecond');

  // Append the two columns to the ubccolumnstwo, which matches
  // the parent/child relationship as defined in their schemas.
  writer.append(ubcColumnsTwoInner, ubcColumnsTwo);
  writer.append(ubcColumnsTwoFirst, ubcColumnsTwoInner);
  writer.append(ubcColumnsTwoSecond, ubcColumnsTwoInner);


  // The ubcColumnsTwoDescription text content will automatically be wrapped in a
  // `<p>`.
  writer.appendElement('paragraph', ubcColumnsTwoFirst);
  writer.appendElement('paragraph', ubcColumnsTwoSecond);

  // Return the element to be added to the editor.
  return ubcColumnsTwo;
}
