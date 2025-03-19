/**
 * @file defines UbcColumnsThreePaddingCommand.
 */

import {
  Command
} from 'ckeditor5/src/core';
//import { groupNameToModelAttributeKey, getClosestElementWithElementStyleAttribute } from '../utils';
/**
 *
 * @extends module:core/command~Command
 */
export default class UbcColumnsThreePaddingCommand extends Command {
  /**
   * Creates a new `UbcColumnsThreePaddingCommand` instance.
   *
   * @param {module:core/editor/editor~Editor} editor The editor on which this command will be used.
   * @param {Object} options
   * @param {String} [options.active] The active class name
   * @param {String} attributeName The attribute that the active class is being applied to
   * @param {Object} classOptions The array of classes from which the allowed classes are taken
   */
  constructor(editor) {
    super(editor);
  }

  execute(options = {}) {
    const {
      editor
    } = this;
    const {
      model
    } = this.editor;
    const {
      selection
    } = editor.model.document;
    const selectedElement = selection.getSelectedElement();
    let modelElement = '';
    let modelElement2 = '';
    let modelElement3 = '';
    const currentvalue = options.value;
    const thisattribute = 'paddingclass';

    // Is the command triggered from the `ubcColumnsThree`?
    if (selectedElement && selectedElement.is('element', 'ubcColumnsThree')) {
      modelElement = selectedElement.getChild(0).getChild(0);
      modelElement2 = selectedElement.getChild(0).getChild(1);
      modelElement3 = selectedElement.getChild(0).getChild(2);
    } else {
      modelElement = selection.getFirstPosition().findAncestor('ubcColumnsThree').getChild(0).getChild(0);
      modelElement2 = selection.getFirstPosition().findAncestor('ubcColumnsThree').getChild(0).getChild(1);
      modelElement3 = selection.getFirstPosition().findAncestor('ubcColumnsThree').getChild(0).getChild(2);
    }

    model.change(writer => {
      if (selection.isCollapsed) {
        if (currentvalue) {
          writer.setAttribute(thisattribute, currentvalue, modelElement);
          writer.setAttribute(thisattribute, currentvalue, modelElement2);
          writer.setAttribute(thisattribute, currentvalue, modelElement3);
        } else {
          writer.removeAttribute(thisattribute, modelElement);
          writer.removeAttribute(thisattribute, modelElement2);
          writer.removeAttribute(thisattribute, modelElement3);
        }
      } else {
        const ranges = model.schema.getValidRanges(selection.getRanges(), thisattribute);
        for (const range of ranges) {
          if (currentvalue) {
            writer.setAttribute(thisattribute, currentvalue, range);
            this.value = currentvalue;
          } else {
            writer.removeAttribute(thisattribute, range);
          }
        }
      }
    });
  }

  refresh() {
    const {
      model
    } = this.editor;
    const {
      selection
    } = model.document;
    const thisattribute = 'paddingclass';
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
      this.value = thiselement.getChild(0).getChild(0).getAttribute( thisattribute );
      this.value = thiselement.getChild(0).getChild(1).getAttribute( thisattribute );
      this.value = thiselement.getChild(0).getChild(2).getAttribute( thisattribute );
      //this.value = true;
    } else {
      this.value = false;
    }
  }
}
