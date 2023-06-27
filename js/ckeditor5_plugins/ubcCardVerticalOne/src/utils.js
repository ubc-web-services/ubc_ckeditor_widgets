import { isWidget } from 'ckeditor5/src/widget';

/**
 * Returns a ubcCardVerticalOne widget editing view element if one is selected.
 *
 * @param {module:engine/view/selection~Selection|module:engine/view/documentselection~DocumentSelection} selection
 * @returns {module:engine/view/element~Element|null}
 */
export function getSelectedUbcCardVerticalOneWidget( selection ) {
  const viewElement = selection.getSelectedElement();
  if ( viewElement && isUbcCardVerticalOneWidget( viewElement ) ) {
    return viewElement;
  }
  return null;
}

/**
 * Returns a ubcCardVerticalOne widget editing view element if one is among the selection's ancestors.
 *
 * @param {module:engine/view/selection~Selection|module:engine/view/documentselection~DocumentSelection} selection
 * @returns {module:engine/view/element~Element|null}
 */
export function getUbcCardVerticalOneWidgetAncestor( selection ) {
  const selectionPosition = selection.getFirstPosition();
  if ( !selectionPosition ) {
    return null;
  }
  let parent = selectionPosition.parent;
  while ( parent ) {
    if ( parent.is( 'element' ) && isUbcCardVerticalOneWidget( parent ) ) {
      return parent;
    }
    parent = parent.parent;
  }
  return null;
}

// Checks if a given view element is a card--one widget.
//
// @param {module:engine/view/element~Element} viewElement
// @returns {Boolean}
function isUbcCardVerticalOneWidget( viewElement ) {
  return !!viewElement.hasClass( 'card--one' ) && isWidget( viewElement );
}
