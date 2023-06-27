/**
 * @file defines UbcAccordionCommand, which is executed when the ubcAccordion
 * toolbar button is pressed.
 */
// cSpell:ignore ubcaccordionediting

import {
  Command
} from 'ckeditor5/src/core';

export default class UbcAccordionCommand extends Command {

  /**
   * @inheritDoc
   */
  constructor(editor, attributeName) {
    super(editor);
    this.attributeName = attributeName;
  }

  execute(attributes) {
    const {
      model
    } = this.editor;

    model.change((writer) => {
      // Insert <ubcAccordion>*</ubcAccordion> at the current selection position
      // in a way that will result in creating a valid model structure.
      model.insertContent(createUbcAccordion(writer, attributes));
    });
  }

  refresh() {
    const {
      model
    } = this.editor;
    const {
      selection
    } = model.document;
    const accordion = selection.getFirstPosition().findAncestor('ubcAccordion');

    // Determine if the cursor (selection) is in a position where adding a
    // ubcAccordion is permitted. This is based on the schema of the model(s)
    // currently containing the cursor.
    const allowedIn = model.schema.findAllowedParent(
      selection.getFirstPosition(),
      'ubcAccordion',
    );

    // If the cursor is not in a location where a ubcAccordion can be added, return
    // null so the addition doesn't happen.
    this.isEnabled = allowedIn !== null;
    if (accordion) {
      this.value = true;
    } else {
      this.value = false;
    }
  }
}

function createUbcAccordion(writer, attributes) {
  // Create instances of the three elements registered with the editor in
  // ubcaccordionediting.js.
  const ubcAccordion = writer.createElement('ubcAccordion');
  const ubcAccordionTitle = writer.createElement('ubcAccordionTitle', {
    'aria-expanded': true
  });
  const ubcAccordionDescription = writer.createElement('ubcAccordionDescription', {
    hidden: null
  });
  const ubcAccordionTitleWrapper = writer.createElement('ubcAccordionTitleWrapper');

  // Append the title and description elements to the ubcAccordion, which matches
  // the parent/child relationship as defined in their schemas.
  writer.append(ubcAccordionTitleWrapper, ubcAccordion);
  writer.append(ubcAccordionTitle, ubcAccordionTitleWrapper);
  writer.appendElement('heading3', ubcAccordionTitle);
  writer.append(ubcAccordionDescription, ubcAccordion);

  // The ubcAccordionDescription text content will automatically be wrapped in a
  // `<p>`.
  writer.appendElement('paragraph', ubcAccordionDescription);

  // Return the element to be added to the editor.
  return ubcAccordion;
}
