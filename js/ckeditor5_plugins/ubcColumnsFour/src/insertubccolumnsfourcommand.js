/**
 * @file defines InsertUbcColumnsFourCommand, which is executed when the ubcColumnsFour
 * toolbar button is pressed.
 */
// cSpell:ignore ubccolumnsfourediting

import { Command } from 'ckeditor5/src/core';

export default class InsertUbcColumnsFourCommand extends Command {
  execute() {
    const { model } = this.editor;

    model.change((writer) => {
      // Insert <ubcColumnsFour>*</ubcColumnsFour> at the current selection position
      // in a way that will result in creating a valid model structure.
      model.insertContent(createUbcColumnsFour(writer));
    });
  }

  refresh() {
    const { model } = this.editor;
    const { selection } = model.document;

    // Determine if the cursor (selection) is in a position where adding a
    // ubcColumnsFour is permitted. This is based on the schema of the model(s)
    // currently containing the cursor.
    const allowedIn = model.schema.findAllowedParent(
      selection.getFirstPosition(),
      'ubcColumnsFour',
    );

    // If the cursor is not in a location where a ubcColumnsFour can be added, return
    // null so the addition doesn't happen.
    this.isEnabled = allowedIn !== null;
  }
}

function createUbcColumnsFour(writer) {
  // Create instances of the three elements registered with the editor in
  // ubcaccordionediting.js.
  const ubcColumnsFour = writer.createElement('ubcColumnsFour');
  const firstColumn = writer.createElement('ubcColumnsFourColumn', { class: 'widget-region-one' });
  const secondColumn = writer.createElement('ubcColumnsFourColumn', { class: 'widget-region-two' });
  const thirdColumn = writer.createElement('ubcColumnsFourColumn', { class: 'widget-region-three' });
  const fourthColumn = writer.createElement('ubcColumnsFourColumn', { class: 'widget-region-four' });
  const wrapper = writer.createElement('ubcColumnsFourFirstWrapper');

  // Append the title and description elements to the ubcColumnsFour, which matches
  // the parent/child relationship as defined in their schemas.
  writer.append(wrapper, ubcColumnsFour);
  writer.append(firstColumn, wrapper);
  writer.appendElement('paragraph', firstColumn);
  writer.append(secondColumn, wrapper);
  writer.appendElement('paragraph', secondColumn);
  writer.append(thirdColumn, wrapper);
  writer.appendElement('paragraph', thirdColumn);
  writer.append(fourthColumn, wrapper);
  writer.appendElement('paragraph', fourthColumn);

  // Return the element to be added to the editor.
  return ubcColumnsFour;
}
