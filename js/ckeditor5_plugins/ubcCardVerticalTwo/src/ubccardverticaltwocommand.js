/**
 * @file defines UbcCardVerticalTwoCommand, which is executed when the ubcCardVerticalTwo
 * toolbar button is pressed.
 */

import {
  Command
} from 'ckeditor5/src/core';
import {
  defaultCardVerticalTwoStyles
} from '../../../config/config';

export default class UbcCardVerticalTwoCommand extends Command {

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
    if (selectedElement && selectedElement.is('element', 'ubcCardVerticalTwo')) {
      modelColorBox = selectedElement;
    } else {
      modelColorBox = selection.getFirstPosition().findAncestor('ubcCardVerticalTwo');
    }

    model.change((writer) => {
      // Insert <ubcCardVerticalTwo>*</ubcCardVerticalTwo> at the current selection position
      // in a way that will result in creating a valid model structure.
      model.insertContent(createUbcCardVerticalTwo(writer));
    });
  }

  refresh() {
    const {
      model
    } = this.editor;
    const {
      selection
    } = model.document;
    const cards = selection.getFirstPosition().findAncestor('ubcCardVerticalTwo');

    // Determine if the cursor (selection) is in a position where adding a
    // ubcCardVerticalTwo is permitted. This is based on the schema of the model(s)
    // currently containing the cursor.
    const allowedIn = model.schema.findAllowedParent(
      selection.getFirstPosition(),
      'ubcCardVerticalTwo',
    );

    // If the cursor is not in a location where a ubcCardVerticalTwo can be added, return
    // null so the addition doesn't happen.
    this.isEnabled = allowedIn !== null;
    if (cards) {
      this.value = true;
    } else {
      this.value = false;
    }
  }
}

function createUbcCardVerticalTwo(writer) {
  // Create instances of the elements registered with the editor in
  // ubccardverticaltwoediting.js.
  const ubcCardVerticalTwo = writer.createElement('ubcCardVerticalTwo', defaultCardVerticalTwoStyles);

  const firstContainer = writer.createElement('ubcCardVerticalTwoContainer');
  const firstInner = writer.createElement('ubcCardVerticalTwoInner');
  const firstImage = writer.createElement('ubcCardVerticalTwoImage', {
    class: 'first-image'
  });
  const firstImagePlaceholder = writer.createElement('imageInline', {
    src: 'https://placehold.co/700x350'
  });
  const firstContent = writer.createElement('ubcCardVerticalTwoContent', {
    class: 'first-content'
  });
  const firstContentHeading = writer.createElement('heading3', {
    class: 'card__title'
  });
  const firstContentParagraph = writer.createElement('paragraph');
  const firstFooter = writer.createElement('ubcCardVerticalTwoFooter', {
    class: 'first-footer'
  });
  const firstFooterParagraph = writer.createElement('paragraph');
  const firstFooterLink = writer.createText('Learn more', {
    linkHref: '/'
  });

  const secondContainer = writer.createElement('ubcCardVerticalTwoContainer');
  const secondInner = writer.createElement('ubcCardVerticalTwoInner');
  const secondImage = writer.createElement('ubcCardVerticalTwoImage', {
    class: 'second-image'
  });
  const secondImagePlaceholder = writer.createElement('imageInline', {
    src: 'https://placehold.co/700x350'
  });
  const secondContent = writer.createElement('ubcCardVerticalTwoContent', {
    class: 'second-content'
  });
  const secondContentHeading = writer.createElement('heading3', {
    class: 'card__title'
  });
  const secondContentParagraph = writer.createElement('paragraph');
  const secondFooter = writer.createElement('ubcCardVerticalTwoFooter', {
    class: 'second-footer'
  });
  const secondFooterParagraph = writer.createElement('paragraph');
  const secondFooterLink = writer.createText('Learn more', {
    linkHref: '/'
  });

  // Append the title and description elements to the ubcCardVerticalTwo, which matches
  // the parent/child relationship as defined in their schemas.
  writer.append(firstContainer, ubcCardVerticalTwo);

  writer.append(firstInner, firstContainer);
  writer.append(firstImage, firstInner);
  writer.append(firstImagePlaceholder, firstImage);
  writer.append(firstContent, firstInner);
  writer.append(firstContentHeading, firstContent);
  writer.appendText('Sample Title', firstContentHeading);
  writer.append(firstContentParagraph, firstContent);
  writer.appendText('Sample Text', firstContentParagraph);
  writer.append(firstFooter, firstInner);
  writer.append(firstFooterParagraph, firstFooter);
  writer.append(firstFooterLink, firstFooterParagraph);

  writer.append(secondContainer, ubcCardVerticalTwo);

  writer.append(secondInner, secondContainer);
  writer.append(secondImage, secondInner);
  writer.append(secondImagePlaceholder, secondImage);
  writer.append(secondContent, secondInner);
  writer.append(secondContentHeading, secondContent);
  writer.appendText('Other Sample Title', secondContentHeading);
  writer.append(secondContentParagraph, secondContent);
  writer.appendText('Other Sample Text', secondContentParagraph);
  writer.append(secondFooter, secondInner);
  writer.append(secondFooterParagraph, secondFooter);
  writer.append(secondFooterLink, secondFooterParagraph);

  // Return the element to be added to the editor.
  return ubcCardVerticalTwo;
}
