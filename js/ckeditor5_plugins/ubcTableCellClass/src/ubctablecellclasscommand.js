/**
 * @file defines UbcTableCellClassCommand, which is executed when the ubcAccordionToggle
 * toolbar button is pressed.
 */

import {
  Command
} from 'ckeditor5/src/core';

export default class UbcTableCellClassCommand extends Command {

  /**
   * @inheritDoc
   */
  constructor(editor, attributeName) {
    super(editor);
    this.attributeName = attributeName;
  }

  /**
   * @inheritDoc
   */
  refresh() {
    const editor = this.editor;
    const selection = editor.model.document.selection;
    const tableCell = selection.getFirstPosition().findAncestor('tableCell');
    this.isEnabled = !!tableCell;
    if (tableCell) {
      this.value = tableCell.hasAttribute(this.attributeName);
    }
  }

  /**
   * Executes the command.
   */
  execute(options = {}) {
    const editor = this.editor;
    const model = this.editor.model;
    const selection = editor.model.document.selection;
    const selectedElement = selection.getSelectedElement();
    let modelTableCell = '';

    // Is the command triggered from the `tableToolbar`?
    if (selectedElement && selectedElement.is('element', 'tableCell')) {
      modelTableCell = selectedElement;
    } else {
      modelTableCell = selection.getFirstPosition().findAncestor('tableCell');
    }

    let remove = false;
    if (modelTableCell.hasAttribute(this.attributeName)) {
      remove = true;
    }

    model.change(writer => {
      if (remove) {
        writer.removeAttribute(this.attributeName, modelTableCell);
        writer.removeAttribute('class', modelTableCell);
      } else {
        writer.removeAttribute('half', modelTableCell);
        writer.removeAttribute('third', modelTableCell);
        writer.removeAttribute('quarter', modelTableCell);
        writer.removeAttribute('fifth', modelTableCell);
        writer.removeAttribute('sixth', modelTableCell);
        writer.setAttribute(this.attributeName, true, modelTableCell);
      }
    });
  }
}
