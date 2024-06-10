/**
 * @file defines UbcAccordionToggleCommand, which is executed when the ubcAccordionToggle
 * toolbar button is pressed.
 */

import {
  Command
} from 'ckeditor5/src/core';

export default class UbcAccordionToggleCommand extends Command {
  execute() {
    const {
      model
    } = this.editor;

    model.change((writer) => {
      // Insert <ubcAccordionToggle>*</ubcAccordionToggle> at the current selection position
      // in a way that will result in creating a valid model structure.
      model.insertContent(createUbcAccordionToggle(writer));
    });
  }

  refresh() {
    const {
      model
    } = this.editor;
    const {
      selection
    } = model.document;

    // Determine if the cursor (selection) is in a position where adding a
    // ubcAccordionToggle is permitted. This is based on the schema of the model(s)
    // currently containing the cursor.
    const allowedIn = model.schema.findAllowedParent(
      selection.getFirstPosition(),
      'ubcAccordionToggle',
    );

    // If the cursor is not in a location where a ubcAccordionToggle can be added, return
    // null so the addition doesn't happen.
    this.isEnabled = allowedIn !== null;
  }
}

function createUbcAccordionToggle(writer) {
  // Create instances of the three elements registered with the editor in
  // ubcaccordiontoggleediting.js.
  const ubcAccordionToggle = writer.createElement('ubcAccordionToggle', {
    'data-state': '0'
  });
  writer.insertText('Open All Accordions', ubcAccordionToggle);

  // Return the element to be added to the editor.
  return ubcAccordionToggle;
}
