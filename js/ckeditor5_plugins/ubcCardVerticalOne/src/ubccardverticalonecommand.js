/**
 * @file defines UbcCardVerticalOneCommand, which is executed when the ubcCardVerticalOne
 * toolbar button is pressed.
 */
// cSpell:ignore ubccardverticaloneediting

import {
  Command
} from 'ckeditor5/src/core';
import {
  defaultCardVerticalOneStyles
} from '../../../config/config';

export default class UbcCardVerticalOneCommand extends Command {

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
    let modelUbcCardVerticalOne = '';

    // Is the command triggered from the `tableToolbar`?
    if (selectedElement && selectedElement.is('element', 'ubcCardVerticalOne')) {
      modelUbcCardVerticalOne = selectedElement;
    } else {
      modelUbcCardVerticalOne = selection.getFirstPosition().findAncestor('ubcCardVerticalOne');
    }

    model.change((writer) => {
      // Insert <ubcCardVerticalOne>*</ubcCardVerticalOne> at the current selection position
      // in a way that will result in creating a valid model structure.
      model.insertContent(createUbcCardVerticalOne(writer));
    });
  }

  refresh() {
    const {
      model
    } = this.editor;
    const {
      selection
    } = model.document;
    const card = selection.getFirstPosition().findAncestor('ubcCardVerticalOne');

    // Determine if the cursor (selection) is in a position where adding a
    // ubcCardVerticalOne is permitted. This is based on the schema of the model(s)
    // currently containing the cursor.
    const allowedIn = model.schema.findAllowedParent(
      selection.getFirstPosition(),
      'ubcCardVerticalOne',
    );

    // If the cursor is not in a location where a ubcCardVerticalOne can be added, return
    // null so the addition doesn't happen.
    this.isEnabled = allowedIn !== null;
    if (card) {
      this.value = true;
    } else {
      this.value = false;
    }
  }
}

function createUbcCardVerticalOne(writer) {
  // Create instances of the three elements registered with the editor in
  // ubcaccordionediting.js.
  const ubcCardVerticalOne = writer.createElement('ubcCardVerticalOne', defaultCardVerticalOneStyles);
  const ubcCardVerticalOneInner = writer.createElement('ubcCardVerticalOneInner');
  const ubcCardVerticalOneImage = writer.createElement('ubcCardVerticalOneImage');
  const ubcCardVerticalOneImagePlaceholder = writer.createElement('imageBlock', {
    src: 'https://placehold.co/700x350'
  });
  const ubcCardVerticalOneContent = writer.createElement('ubcCardVerticalOneContent');
  const ubcCardVerticalOneHeading = writer.createElement('heading3', {
    class: 'card__title'
  });
  const ubcCardVerticalOneParagraph1 = writer.createElement('paragraph');
  const ubcCardVerticalOneFooter = writer.createElement('ubcCardVerticalOneFooter');
  const ubcCardVerticalOneParagraph2 = writer.createElement('paragraph');
  const ubcCardVerticalOneLink = writer.createText('Learn more', {
    linkHref: '/'
  });

  // Append the title and description elements to the ubcCardVerticalOne, which matches
  // the parent/child relationship as defined in their schemas.
  writer.append(ubcCardVerticalOneInner, ubcCardVerticalOne);
  writer.append(ubcCardVerticalOneImage, ubcCardVerticalOneInner);
  writer.append(ubcCardVerticalOneImagePlaceholder, ubcCardVerticalOneImage);
  writer.append(ubcCardVerticalOneContent, ubcCardVerticalOneInner);
  writer.append(ubcCardVerticalOneHeading, ubcCardVerticalOneContent);
  writer.appendText('Sample Title', ubcCardVerticalOneHeading);
  writer.append(ubcCardVerticalOneParagraph1, ubcCardVerticalOneContent);
  writer.appendText('Sample Text', ubcCardVerticalOneParagraph1);
  writer.append(ubcCardVerticalOneFooter, ubcCardVerticalOneInner);
  writer.append(ubcCardVerticalOneParagraph2, ubcCardVerticalOneFooter);
  writer.append(ubcCardVerticalOneLink, ubcCardVerticalOneParagraph2);

  // Return the element to be added to the editor.
  return ubcCardVerticalOne;
}
