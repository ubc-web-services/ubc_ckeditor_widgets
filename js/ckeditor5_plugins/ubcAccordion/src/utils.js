import {
  isWidget
} from 'ckeditor5/src/widget';

/**
 * Returns a ubcAccordion widget editing view element if one is selected.
 *
 * @param {module:engine/view/selection~Selection|module:engine/view/documentselection~DocumentSelection} selection
 * @returns {module:engine/view/element~Element|null}
 */
export function getSelectedUbcAccordionWidget(selection) {
  const viewElement = selection.getSelectedElement();
  if (viewElement && isUbcAccordionWidget(viewElement)) {
    return viewElement;
  }
  return null;
}

/**
 * Returns a ubcAccordion widget editing view element if one is among the selection's ancestors.
 *
 * @param {module:engine/view/selection~Selection|module:engine/view/documentselection~DocumentSelection} selection
 * @returns {module:engine/view/element~Element|null}
 */
export function getUbcAccordionWidgetAncestor(selection) {
  const selectionPosition = selection.getFirstPosition();
  if (!selectionPosition) {
    return null;
  }
  let parent = selectionPosition.parent;
  while (parent) {
    if (parent.is('element') && isUbcAccordionWidget(parent)) {
      return parent;
    }
    parent = parent.parent;
  }
  return null;
}

// Checks if a given view element is a widget-accordion widget.
//
// @param {module:engine/view/element~Element} viewElement
// @returns {Boolean}
function isUbcAccordionWidget(viewElement) {
  return !!viewElement.hasClass('widget-accordion') && isWidget(viewElement);
}
