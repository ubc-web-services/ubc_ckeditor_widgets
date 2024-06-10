import {
  isWidget
} from 'ckeditor5/src/widget';

/**
 * Returns a UbcColumnsTwo widget editing view element if one is selected.
 *
 * @param {module:engine/view/selection~Selection|module:engine/view/documentselection~DocumentSelection} selection
 * @returns {module:engine/view/element~Element|null}
 */
export function getSelectedUbcColumnsTwoWidget(selection) {
  const viewElement = selection.getSelectedElement();
  if (viewElement && isUbcColumnsTwoWidget(viewElement)) {
    return viewElement;
  }
  return null;
}

/**
 * Returns a UbcColumnsTwo widget editing view element if one is among the selection's ancestors.
 *
 * @param {module:engine/view/selection~Selection|module:engine/view/documentselection~DocumentSelection} selection
 * @returns {module:engine/view/element~Element|null}
 */
export function getUbcColumnsTwoWidgetAncestor(selection) {
  const selectionPosition = selection.getFirstPosition();
  if (!selectionPosition) {
    return null;
  }
  let parent = selectionPosition.parent;
  while (parent) {
    if (parent.is('element') && isUbcColumnsTwoWidget(parent)) {
      return parent;
    }
    parent = parent.parent;
  }
  return null;
}

// Checks if a given view element is a widget-columns-2 widget.
//
// @param {module:engine/view/element~Element} viewElement
// @returns {Boolean}
function isUbcColumnsTwoWidget(viewElement) {
  return !!viewElement.hasClass('widget-columns-2') && isWidget(viewElement);
}
