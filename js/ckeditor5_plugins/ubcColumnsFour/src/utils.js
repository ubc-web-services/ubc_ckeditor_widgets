import {
  isWidget
} from 'ckeditor5/src/widget';

/**
 * Returns a UbcColumnsFour widget editing view element if one is selected.
 *
 * @param {module:engine/view/selection~Selection|module:engine/view/documentselection~DocumentSelection} selection
 * @returns {module:engine/view/element~Element|null}
 */
export function getSelectedUbcColumnsFourWidget(selection) {
  const viewElement = selection.getSelectedElement();
  if (viewElement && isUbcColumnsFourWidget(viewElement)) {
    return viewElement;
  }
  return null;
}

/**
 * Returns a UbcColumnsFour widget editing view element if one is among the selection's ancestors.
 *
 * @param {module:engine/view/selection~Selection|module:engine/view/documentselection~DocumentSelection} selection
 * @returns {module:engine/view/element~Element|null}
 */
export function getUbcColumnsFourWidgetAncestor(selection) {
  const selectionPosition = selection.getFirstPosition();
  if (!selectionPosition) {
    return null;
  }
  let parent = selectionPosition.parent;
  while (parent) {
    if (parent.is('element') && isUbcColumnsFourWidget(parent)) {
      return parent;
    }
    parent = parent.parent;
  }
  return null;
}

// Checks if a given view element is a widget-columns-4 widget.
//
// @param {module:engine/view/element~Element} viewElement
// @returns {Boolean}
function isUbcColumnsFourWidget(viewElement) {
  return !!viewElement.hasClass('widget-columns-4') && isWidget(viewElement);
}
