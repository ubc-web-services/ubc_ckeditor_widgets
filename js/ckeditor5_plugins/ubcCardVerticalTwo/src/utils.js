import { isWidget } from 'ckeditor5/src/widget';

/**
 * Returns a ckeditor_accordion widget editing view element if one is selected.
 *
 * @param {module:engine/view/selection~Selection|module:engine/view/documentselection~DocumentSelection} selection
 * @returns {module:engine/view/element~Element|null}
 */
export function getSelectedUbcCardVerticalTwoWidget( selection ) {
  const viewElement = selection.getSelectedElement();
  if ( viewElement && isUbcCardVerticalTwoWidget( viewElement ) ) {
    return viewElement;
  }
  return null;
}

/**
 * Returns a ubcCardVerticalTwo widget editing view element if one is among the selection's ancestors.
 *
 * @param {module:engine/view/selection~Selection|module:engine/view/documentselection~DocumentSelection} selection
 * @returns {module:engine/view/element~Element|null}
 */
export function getUbcCardVerticalTwoWidgetAncestor( selection ) {
  const selectionPosition = selection.getFirstPosition();
  if ( !selectionPosition ) {
    return null;
  }
  let parent = selectionPosition.parent;
  while ( parent ) {
    if ( parent.is( 'element' ) && isUbcCardVerticalTwoWidget( parent ) ) {
      return parent;
    }
    parent = parent.parent;
  }
  return null;
}

// Checks if a given view element is a card--two widget.
//
// @param {module:engine/view/element~Element} viewElement
// @returns {Boolean}
function isUbcCardVerticalTwoWidget( viewElement ) {
  return !!viewElement.hasClass( 'card--two' ) && isWidget( viewElement );
}
