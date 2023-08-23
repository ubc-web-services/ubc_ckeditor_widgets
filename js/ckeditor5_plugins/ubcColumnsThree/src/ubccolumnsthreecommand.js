/**
 * @file defines UbcColumnsThreeCommand, which is executed when the ubcColumnsThree
 * toolbar button is pressed.
 */
// cSpell:ignore ubccolumnsthreeediting

import {
  Command
} from 'ckeditor5/src/core';
import {
  defaultColumnsThreeStyles,
  defaultColumnsGapStyle
} from '../../../config/config';

export default class UbcColumnsThreeCommand extends Command {

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
    if (selectedElement && selectedElement.is('element', 'ubcColumnsThree')) {
      modelColorBox = selectedElement;
    } else {
      modelColorBox = selection.getFirstPosition().findAncestor('ubcColumnsThree');
    }

    model.change((writer) => {
      // Insert <ubcColumnsThree>*</ubcColumnsThree> at the current selection position
      // in a way that will result in creating a valid model structure.
      model.insertContent(createUbcColumnsThree(writer));
    });
  }

  refresh() {
    const {
      model
    } = this.editor;
    const {
      selection
    } = model.document;
    const thiselement = selection.getFirstPosition().findAncestor('ubcColumnsThree');

    // Determine if the cursor (selection) is in a position where adding a
    // ubcColumnsThree is permitted. This is based on the schema of the model(s)
    // currently containing the cursor.
    const allowedIn = model.schema.findAllowedParent(
      selection.getFirstPosition(),
      'ubcColumnsThree',
    );

    // If the cursor is not in a location where a ubcColumnsThree can be added, return
    // null so the addition doesn't happen.
    this.isEnabled = allowedIn !== null;
    if (thiselement) {
      this.value = true;
    } else {
      this.value = false;
    }
  }
}

function createUbcColumnsThree(writer) {
  // Create instances of the three elements registered with the editor in
  // ubccolumnsthreeediting.js.
  const ubcColumnsThree = writer.createElement('ubcColumnsThree', defaultColumnsThreeStyles, {
    class: 'widget-column-options widget-columns-3'
  });
  const firstColumn = writer.createElement('ubcColumnsThreeColumn', {
    class: 'widget-region-one'
  });
  const secondColumn = writer.createElement('ubcColumnsThreeColumn', {
    class: 'widget-region-two'
  });
  const thirdColumn = writer.createElement('ubcColumnsThreeColumn', {
    class: 'widget-region-three'
  });
  const wrapper = writer.createElement('ubcColumnsThreeWrapper', defaultColumnsGapStyle, {
    class: 'widget--md--grid'
  });

  // Append the title and description elements to the ubcColumnsThree, which matches
  // the parent/child relationship as defined in their schemas.
  writer.append(wrapper, ubcColumnsThree);
  writer.append(firstColumn, wrapper);
  writer.appendElement('paragraph', firstColumn);
  writer.append(secondColumn, wrapper);
  writer.appendElement('paragraph', secondColumn);
  writer.append(thirdColumn, wrapper);
  writer.appendElement('paragraph', thirdColumn);

  // Return the element to be added to the editor.
  return ubcColumnsThree;
}
