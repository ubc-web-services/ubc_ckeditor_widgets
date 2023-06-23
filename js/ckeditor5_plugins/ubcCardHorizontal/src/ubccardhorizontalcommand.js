/**
 * @file defines UbcCardHorizontalCommand, which is executed when the ubcCardHorizontal
 * toolbar button is pressed.
 */
// cSpell:ignore ubccardhorizontalediting

import {
  Command
} from 'ckeditor5/src/core';
import {
  defaultCardHorizontalStyles
} from '../../../config/config';

export default class UbcCardHorizontalCommand extends Command {

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
    let modelColorBox = '';

    // Is the command triggered from the `tableToolbar`?
    if (selectedElement && selectedElement.is('element', 'ubcCardHorizontal')) {
      modelColorBox = selectedElement;
    } else {
      modelColorBox = selection.getFirstPosition().findAncestor('ubcCardHorizontal');
    }

    model.change((writer) => {
      // Insert <ubcCardHorizontal>*</ubcCardHorizontal> at the current selection position
      // in a way that will result in creating a valid model structure.
      model.insertContent(createUbcCardHorizontal(writer));
    });
  }

  refresh() {
    const {
      model
    } = this.editor;
    const {
      selection
    } = model.document;
    const card = selection.getFirstPosition().findAncestor('ubcCardHorizontal');

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
    if (card) {
      this.value = true;
    } else {
      this.value = false;
    }
  }
}

function createUbcCardHorizontal(writer) {
  // Create instances of the three elements registered with the editor in
  // ubccardhorizontalediting.js.

  const ubcCardHorizontal = writer.createElement('ubcCardHorizontal', defaultCardHorizontalStyles);
  const ubcCardHorizontalWrapper = writer.createElement('ubcCardHorizontalWrapper');
  const ubcCardHorizontalImage = writer.createElement('ubcCardHorizontalImage');
  const ubcCardHorizontalImagePlaceholder = writer.createElement('imageBlock', {
    src: 'https://placehold.co/300x300'
  });
  const ubcCardHorizontalInner = writer.createElement('ubcCardHorizontalInner');
  const ubcCardHorizontalContent = writer.createElement('ubcCardHorizontalContent');
  const ubcCardHorizontalHeading = writer.createElement('heading3', {
    class: 'card__title'
  });
  const ubcCardHorizontalParagraph1 = writer.createElement('paragraph');
  const ubcCardHorizontalFooter = writer.createElement('ubcCardHorizontalFooter');
  const ubcCardHorizontalParagraph2 = writer.createElement('paragraph');
  const ubcCardHorizontalLink = writer.createText('Learn more', {
    linkHref: '/'
  });

  // Append the title and description elements to the ubcCardHorizontal, which matches
  // the parent/child relationship as defined in their schemas.
  writer.append(ubcCardHorizontalWrapper, ubcCardHorizontal);
  writer.append(ubcCardHorizontalImage, ubcCardHorizontalWrapper);
  writer.append(ubcCardHorizontalImagePlaceholder, ubcCardHorizontalImage);
  writer.append(ubcCardHorizontalInner, ubcCardHorizontalWrapper);
  writer.append(ubcCardHorizontalContent, ubcCardHorizontalInner);
  writer.append(ubcCardHorizontalHeading, ubcCardHorizontalContent);
  writer.appendText('Sample Title', ubcCardHorizontalHeading);
  writer.append(ubcCardHorizontalParagraph1, ubcCardHorizontalContent);
  writer.appendText('Sample Text', ubcCardHorizontalParagraph1);
  writer.append(ubcCardHorizontalFooter, ubcCardHorizontalInner);
  writer.append(ubcCardHorizontalParagraph2, ubcCardHorizontalFooter);
  writer.append(ubcCardHorizontalLink, ubcCardHorizontalParagraph2);

  // Return the element to be added to the editor.
  return ubcCardHorizontal;
}
