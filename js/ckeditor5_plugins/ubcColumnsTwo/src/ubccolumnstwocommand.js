/**
 * @file defines UbcColumnsTwoCommand, which is executed when the ubcColumnsTwo
 * toolbar button is pressed.
 */

import {
  Command
} from 'ckeditor5/src/core';
import {
  defaultColumnsTwoStyles,
  defaultColumnsGapStyle,
  defaultColumnsExtraStyles,
} from '../../../config/config';

export default class UbcColumnsTwoCommand extends Command {

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
    if (selectedElement && selectedElement.is('element', 'ubcColumnsTwo')) {
      modelColorBox = selectedElement;
    } else {
      modelColorBox = selection.getFirstPosition().findAncestor('ubcColumnsTwo');
    }

    model.change((writer) => {
      // Insert <ubcColumnsTwo>*</ubcColumnsTwo> at the current selection position
      // in a way that will result in creating a valid model structure.
      model.insertContent(createUbcColumnsTwo(writer));
    });
  }

  refresh() {
    const {
      model
    } = this.editor;
    const {
      selection
    } = model.document;
    const thiselement = selection.getFirstPosition().findAncestor('ubcColumnsTwo');

    // Determine if the cursor (selection) is in a position where adding a
    // ubcColumnsTwo is permitted. This is based on the schema of the model(s)
    // currently containing the cursor.
    const allowedIn = model.schema.findAllowedParent(
      selection.getFirstPosition(),
      'ubcColumnsTwo',
    );

    // If the cursor is not in a location where a ubcColumnsTwo can be added, return
    // null so the addition doesn't happen.
    this.isEnabled = allowedIn !== null;
    if (thiselement) {
      //this.value = colorbox.hasAttribute( this.attributeName );
      this.value = true;
    } else {
      this.value = false;
    }
  }
}

function createUbcColumnsTwo(writer) {
  // Create instances of the three elements registered with the editor in
  // ubcaccordionediting.js.
  const ubcColumnsTwo = writer.createElement('ubcColumnsTwo', defaultColumnsTwoStyles, {
    class: 'widget-column-options widget-columns-2'
  });
  const firstColumn = writer.createElement('ubcColumnsTwoColumn', defaultColumnsExtraStyles, {
    class: 'widget-region-one first-child--mt-0'
  });
  const secondColumn = writer.createElement('ubcColumnsTwoColumn', defaultColumnsExtraStyles, {
    class: 'widget-region-two first-child--mt-0'
  });
  const wrapper = writer.createElement('ubcColumnsTwoWrapper', defaultColumnsGapStyle, {
    class: 'widget--md--grid'
  });

  // Append the title and description elements to the ubcColumnsTwo, which matches
  // the parent/child relationship as defined in their schemas.
  writer.append(wrapper, ubcColumnsTwo);
  writer.append(firstColumn, wrapper);
  writer.appendElement('paragraph', firstColumn);
  writer.append(secondColumn, wrapper);
  writer.appendElement('paragraph', secondColumn);

  // Return the element to be added to the editor.
  return ubcColumnsTwo;
}
