import { isWidget } from 'ckeditor5/src/widget';

/**
 * Returns a ubcCardHorizontal widget editing view element if one is selected.
 *
 * @param {module:engine/view/selection~Selection|module:engine/view/documentselection~DocumentSelection} selection
 * @returns {module:engine/view/element~Element|null}
 */
export function getSelectedUbcCardHorizontalWidget( selection ) {
  const viewElement = selection.getSelectedElement();
  if ( viewElement && isUbcCardHorizontalWidget( viewElement ) ) {
    return viewElement;
  }

  return null;
}

/**
 * Returns a ubcCardHorizontal widget editing view element if one is among the selection's ancestors.
 *
 * @param {module:engine/view/selection~Selection|module:engine/view/documentselection~DocumentSelection} selection
 * @returns {module:engine/view/element~Element|null}
 */
export function getUbcCardHorizontalWidgetAncestor( selection ) {
  const selectionPosition = selection.getFirstPosition();
  if ( !selectionPosition ) {
    return null;
  }
  let parent = selectionPosition.parent;
  while ( parent ) {
    if ( parent.is( 'element' ) && isUbcCardHorizontalWidget( parent ) ) {
      return parent;
    }
    parent = parent.parent;
  }
  return null;
}

// Checks if a given view element is a widget-card--horizontal widget.
//
// @param {module:engine/view/element~Element} viewElement
// @returns {Boolean}
function isUbcCardHorizontalWidget( viewElement ) {
  return !!viewElement.hasClass( 'widget-card--horizontal' ) && isWidget( viewElement );
}
