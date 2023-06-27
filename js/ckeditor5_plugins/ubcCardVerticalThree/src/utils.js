import { isWidget } from 'ckeditor5/src/widget';

/**
 * Returns a ubcCardVerticalThree widget editing view element if one is selected.
 *
 * @param {module:engine/view/selection~Selection|module:engine/view/documentselection~DocumentSelection} selection
 * @returns {module:engine/view/element~Element|null}
 */
export function getSelectedUbcCardVerticalThreeWidget( selection ) {
  const viewElement = selection.getSelectedElement();
  if ( viewElement && isUbcCardVerticalThreeWidget( viewElement ) ) {
    return viewElement;
  }
  return null;
}

/**
 * Returns a ubcCardVerticalThree widget editing view element if one is among the selection's ancestors.
 *
 * @param {module:engine/view/selection~Selection|module:engine/view/documentselection~DocumentSelection} selection
 * @returns {module:engine/view/element~Element|null}
 */
export function getUbcCardVerticalThreeWidgetAncestor( selection ) {
  const selectionPosition = selection.getFirstPosition();
  if ( !selectionPosition ) {
    return null;
  }
  let parent = selectionPosition.parent;
  while ( parent ) {
    if ( parent.is( 'element' ) && isUbcCardVerticalThreeWidget( parent ) ) {
      return parent;
    }
    parent = parent.parent;
  }
  return null;
}

// Checks if a given view element is a card--three widget.
//
// @param {module:engine/view/element~Element} viewElement
// @returns {Boolean}
function isUbcCardVerticalThreeWidget( viewElement ) {
  return !!viewElement.hasClass( 'card--three' ) && isWidget( viewElement );
}
