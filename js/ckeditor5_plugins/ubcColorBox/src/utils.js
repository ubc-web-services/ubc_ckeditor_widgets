import {
  isWidget
} from 'ckeditor5/src/widget';

/**
 * Returns a ubcColorBox widget editing view element if one is selected.
 *
 * @param {module:engine/view/selection~Selection|module:engine/view/documentselection~DocumentSelection} selection
 * @returns {module:engine/view/element~Element|null}
 */
export function getSelectedUbcColorBoxWidget(selection) {
  const viewElement = selection.getSelectedElement();
  if (viewElement && isUbcColorBoxWidget(viewElement)) {
    return viewElement;
  }
  return null;
}

/**
 * Returns a ubcColorBox widget editing view element if one is among the selection's ancestors.
 *
 * @param {module:engine/view/selection~Selection|module:engine/view/documentselection~DocumentSelection} selection
 * @returns {module:engine/view/element~Element|null}
 */
export function getUbcColorBoxWidgetAncestor(selection) {
  const selectionPosition = selection.getFirstPosition();
  if (!selectionPosition) {
    return null;
  }
  let parent = selectionPosition.parent;
  while (parent) {
    if (parent.is('element') && isUbcColorBoxWidget(parent)) {
      return parent;
    }
    parent = parent.parent;
  }
  return null;
}

// Checks if a given view element is a widget-color-box widget.
//
// @param {module:engine/view/element~Element} viewElement
// @returns {Boolean}
function isUbcColorBoxWidget(viewElement) {
  return !!viewElement.hasClass('widget-color-box') && isWidget(viewElement);
}
