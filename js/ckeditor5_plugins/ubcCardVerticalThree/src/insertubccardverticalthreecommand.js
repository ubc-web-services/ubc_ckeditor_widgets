/**
 * @file defines InsertUbcCardVerticalThreeCommand, which is executed when the ubcCardVerticalThree
 * toolbar button is pressed.
 */

import { Command } from 'ckeditor5/src/core';

export default class InsertUbcCardVerticalThreeCommand extends Command {
  execute() {
    const { model } = this.editor;

    model.change((writer) => {
      // Insert <ubcCardVerticalThree>*</ubcCardVerticalThree> at the current selection position
      // in a way that will result in creating a valid model structure.
      model.insertContent(createUbcCardVerticalThree(writer));
    });
  }

  refresh() {
    const { model } = this.editor;
    const { selection } = model.document;

    // Determine if the cursor (selection) is in a position where adding a
    // ubcCardVerticalThree is permitted. This is based on the schema of the model(s)
    // currently containing the cursor.
    const allowedIn = model.schema.findAllowedParent(
      selection.getFirstPosition(),
      'ubcCardVerticalThree',
    );

    // If the cursor is not in a location where a ubcCardVerticalThree can be added, return
    // null so the addition doesn't happen.
    this.isEnabled = allowedIn !== null;
  }
}

function createUbcCardVerticalThree(writer) {
  // Create instances of the three elements registered with the editor in
  // ubccardverticalthreeediting.js.
   // Create instances of the three elements registered with the editor in
  // ubccardverticaltwoediting.js.
  const ubcCardVerticalThree = writer.createElement('ubcCardVerticalThree');

  const firstContainer = writer.createElement('ubcCardVerticalThreeContainer');
  const firstInner = writer.createElement('ubcCardVerticalThreeInner');
  const firstImage = writer.createElement('ubcCardVerticalThreeImage', { class: 'first-image' });
  const firstImagePlaceholder = writer.createElement( 'imageInline', { src: 'https://placehold.co/700x350' } );
  const firstContent = writer.createElement('ubcCardVerticalThreeContent', { class: 'first-content' });
  const firstContentHeading = writer.createElement('heading3', { class: 'card__title' });
  const firstContentParagraph = writer.createElement('paragraph');
  const firstFooter = writer.createElement('ubcCardVerticalThreeFooter', { class: 'first-footer' });
  const firstFooterParagraph = writer.createElement('paragraph');
  const firstFooterLink = writer.createText('Learn more', { linkHref: '/' });

  const secondContainer = writer.createElement('ubcCardVerticalThreeContainer');
  const secondInner = writer.createElement('ubcCardVerticalThreeInner');
  const secondImage = writer.createElement('ubcCardVerticalThreeImage', { class: 'second-image' });
  const secondImagePlaceholder = writer.createElement( 'imageInline', { src: 'https://placehold.co/700x350' } );
  const secondContent = writer.createElement('ubcCardVerticalThreeContent', { class: 'second-content' });
  const secondContentHeading = writer.createElement('heading3', { class: 'card__title' });
  const secondContentParagraph = writer.createElement('paragraph');
  const secondFooter = writer.createElement('ubcCardVerticalThreeFooter', { class: 'second-footer' });
  const secondFooterParagraph = writer.createElement('paragraph');
  const secondFooterLink = writer.createText('Learn more', { linkHref: '/' });

  const thirdContainer = writer.createElement('ubcCardVerticalThreeContainer');
  const thirdInner = writer.createElement('ubcCardVerticalThreeInner');
  const thirdImage = writer.createElement('ubcCardVerticalThreeImage', { class: 'third-image' });
  const thirdImagePlaceholder = writer.createElement( 'imageInline', { src: 'https://placehold.co/700x350' } );
  const thirdContent = writer.createElement('ubcCardVerticalThreeContent', { class: 'third-content' });
  const thirdContentHeading = writer.createElement('heading3', { class: 'card__title' });
  const thirdContentParagraph = writer.createElement('paragraph');
  const thirdFooter = writer.createElement('ubcCardVerticalThreeFooter', { class: 'third-footer' });
  const thirdFooterParagraph = writer.createElement('paragraph');
  const thirdFooterLink = writer.createText('Learn more', { linkHref: '/' });

  // Append the title and description elements to the ubcCardVerticalThree, which matches
  // the parent/child relationship as defined in their schemas.
  writer.append(firstContainer, ubcCardVerticalThree);

    writer.append(firstInner, firstContainer);
      writer.append(firstImage, firstInner);
        writer.append(firstImagePlaceholder, firstImage);
      writer.append(firstContent, firstInner);
        writer.append(firstContentHeading, firstContent);
          writer.appendText( 'Sample Title', firstContentHeading );
        writer.append(firstContentParagraph, firstContent);
          writer.appendText( 'Sample Text', firstContentParagraph );
      writer.append(firstFooter, firstInner);
        writer.append(firstFooterParagraph, firstFooter);
          writer.append(firstFooterLink, firstFooterParagraph);

  writer.append(secondContainer, ubcCardVerticalThree);

    writer.append(secondInner, secondContainer);
      writer.append(secondImage, secondInner);
        writer.append(secondImagePlaceholder, secondImage);
      writer.append(secondContent, secondInner);
        writer.append(secondContentHeading, secondContent);
          writer.appendText( 'Other Sample Title', secondContentHeading );
        writer.append(secondContentParagraph, secondContent);
          writer.appendText( 'Other Sample Text', secondContentParagraph );
      writer.append(secondFooter, secondInner);
        writer.append(secondFooterParagraph, secondFooter);
          writer.append(secondFooterLink, secondFooterParagraph);

  writer.append(thirdContainer, ubcCardVerticalThree);

    writer.append(thirdInner, thirdContainer);
      writer.append(thirdImage, thirdInner);
        writer.append(thirdImagePlaceholder, thirdImage);
      writer.append(thirdContent, thirdInner);
        writer.append(thirdContentHeading, thirdContent);
          writer.appendText( 'Sample Title', thirdContentHeading );
        writer.append(thirdContentParagraph, thirdContent);
          writer.appendText( 'More Sample Text', thirdContentParagraph );
      writer.append(thirdFooter, thirdInner);
        writer.append(thirdFooterParagraph, thirdFooter);
          writer.append(thirdFooterLink, thirdFooterParagraph);

  // Return the element to be added to the editor.
  return ubcCardVerticalThree;
}
