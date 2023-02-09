/**
 * @file defines InsertUbcButtonCommand, which is executed when the ubcAccordionToggle
 * toolbar button is pressed.
 */

import { Command } from 'ckeditor5/src/core';


export default class InsertUbcButtonCommand extends Command {

  /**
   * @inheritDoc
   */
  constructor( editor, attributeName ) {
    super( editor );

    this.attributeName = attributeName;
  }

  /**
   * @inheritDoc
   */
  refresh() {
    const editor = this.editor;
    const selection = editor.model.document.selection;

    const tableCell = selection.getFirstPosition().findAncestor( 'ubcColumnsTwo' );

    this.isEnabled = !!tableCell;
    if ( tableCell ) {
      this.value = tableCell.hasAttribute( this.attributeName );
    }
  }

  /**
   * Executes the command.
   */
  execute( options = {} ) {
    const editor = this.editor;
    const model = this.editor.model;

    const selection = editor.model.document.selection;
    const selectedElement = selection.getSelectedElement();

    let modelColumn = '';

    // Is the command triggered from the `tableToolbar`?
    if ( selectedElement && selectedElement.is( 'element', 'ubcColumnsTwo' ) ) {
      modelColumn = selectedElement;
    }
    else {
      modelColumn = selection.getFirstPosition().findAncestor( 'ubcColumnsTwo' );
    }

    let remove = false;
    if ( modelColumn.hasAttribute( this.attributeName ) ) {
      remove = true;
    }

    model.change( writer => {
      if ( remove ) {
        writer.removeAttribute( this.attributeName, modelColumn );
      }
      else {
        writer.removeAttribute( 'equal', modelColumn );
        writer.removeAttribute( 'lg-left', modelColumn );
        writer.removeAttribute( 'lg-right', modelColumn );
        writer.setAttribute( this.attributeName, true, modelColumn );
      }
    } );
  }
}
