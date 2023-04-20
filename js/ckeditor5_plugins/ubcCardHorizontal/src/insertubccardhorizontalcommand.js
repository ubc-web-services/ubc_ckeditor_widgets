/**
 * @file defines InsertUbcCardHorizontalCommand, which is executed when the ubcCardHorizontal
 * toolbar button is pressed.
 */
// cSpell:ignore ubccardhorizontalediting

import { Command } from 'ckeditor5/src/core';

export default class InsertUbcHorizontalCardCommand extends Command {
  execute() {
    const { model } = this.editor;

    model.change((writer) => {
      // Insert <ubcHorizontalCard>*</ubcHorizontalCard> at the current selection position
      // in a way that will result in creating a valid model structure.
      model.insertContent(createUbcHorizontalCard(writer));
    });
  }

  refresh() {
    const { model } = this.editor;
    const { selection } = model.document;

    // Determine if the cursor (selection) is in a position where adding a
    // ubcCardHorizontal is permitted. This is based on the schema of the model(s)
    // currently containing the cursor.
    const allowedIn = model.schema.findAllowedParent(
      selection.getFirstPosition(),
      'ubcHorizontalCard',
    );

    // If the cursor is not in a location where a ubcCardHorizontal can be added, return
    // null so the addition doesn't happen.
    this.isEnabled = allowedIn !== null;
  }
}

function createUbcHorizontalCard(writer) {
  // Create instances of the three elements registered with the editor in
  // ubccardhorizontalediting.js.
  const ubcCardHorizontal = writer.createElement('ubcHorizontalCard');
  const ubcCardHorizontalTitle = writer.createElement('ubcHorizontalCardTitle', { 'aria-expanded': true } );
  const ubcCardHorizontalDescription = writer.createElement('ubcHorizontalCardDescription', { hidden: null });
  const ubcCardHorizontalTitleWrapper = writer.createElement('ubcHorizontalCardTitleWrapper');

  // Append the title and description elements to the ubcHorizontalCard, which matches
  // the parent/child relationship as defined in their schemas.
  writer.append(ubcHorizontalCardTitleWrapper, ubcHorizontalCard);
  writer.append(ubcHorizontalCardTitle, ubcHorizontalCardTitleWrapper);
  writer.appendElement('heading3', ubcHorizontalCardTitle);
  writer.append(ubcHorizontalCardDescription, ubcHorizontalCard);

  // The ubcCardHorizontalDescription text content will automatically be wrapped in a
  // `<p>`.
  writer.appendElement('paragraph', ubcHorizontalCardDescription);

  // Return the element to be added to the editor.
  return ubcHorizontalCard;
}
