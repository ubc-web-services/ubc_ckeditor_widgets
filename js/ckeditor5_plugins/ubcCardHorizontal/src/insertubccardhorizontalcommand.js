/**
 * @file defines InsertUbcCardHorizontalCommand, which is executed when the ubcCardHorizontal
 * toolbar button is pressed.
 */
// cSpell:ignore ubccardhorizontalediting

import { Command } from 'ckeditor5/src/core';

export default class InsertUbcCardHorizontalCommand extends Command {
  execute() {
    const { model } = this.editor;

    model.change((writer) => {
      model.insertContent(createUbcCardHorizontal(writer));
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
      'ubcCardHorizontal',
    );

    // If the cursor is not in a location where a ubcCardHorizontal can be added, return
    // null so the addition doesn't happen.
    this.isEnabled = allowedIn !== null;
  }
}

function createUbcCardHorizontal(writer) {
  // Create instances of the three elements registered with the editor in
  // ubccardhorizontalediting.js.
  const ubcCardHorizontal = writer.createElement('ubcCardHorizontal');
  const ubcCardHorizontalWrapper = writer.createElement('ubcCardHorizontalWrapper');
  const ubcCardHorizontalImage = writer.createElement('ubcCardHorizontalImage');
  const ubcCardHorizontalImagePlaceholder = writer.createElement( 'imageBlock', { src: 'https://placehold.co/300x300' } );
  const ubcCardHorizontalInner = writer.createElement('ubcCardHorizontalInner');
  const ubcCardHorizontalContent = writer.createElement('ubcCardHorizontalContent');
  const ubcCardHorizontalHeading = writer.createElement('heading3', { class: 'card__title' });
  const ubcCardHorizontalParagraph1 = writer.createElement('paragraph');
  const ubcCardHorizontalFooter = writer.createElement('ubcCardHorizontalFooter');
  const ubcCardHorizontalParagraph2 = writer.createElement('paragraph');
  const ubcCardHorizontalLink = writer.createText('Learn more', { linkHref: '/' });

  // Append the title and description elements to the ubcCardHorizontal, which matches
  // the parent/child relationship as defined in their schemas.
  writer.append(ubcCardHorizontalWrapper, ubcCardHorizontal);
  writer.append(ubcCardHorizontalImage, ubcCardHorizontalWrapper);
  writer.append(ubcCardHorizontalImagePlaceholder, ubcCardHorizontalImage);
  writer.append(ubcCardHorizontalInner, ubcCardHorizontalWrapper);
  writer.append(ubcCardHorizontalContent, ubcCardHorizontalInner);
  writer.append(ubcCardHorizontalHeading, ubcCardHorizontalContent);
  writer.appendText( 'Sample Title', ubcCardHorizontalHeading );
  writer.append(ubcCardHorizontalParagraph1, ubcCardHorizontalContent);
  writer.appendText( 'Sample Text', ubcCardHorizontalParagraph1 );
  writer.append(ubcCardHorizontalFooter, ubcCardHorizontalInner);
  writer.append(ubcCardHorizontalParagraph2, ubcCardHorizontalFooter);
  writer.append(ubcCardHorizontalLink, ubcCardHorizontalParagraph2);

  // Return the element to be added to the editor.
  return ubcCardHorizontal;
}