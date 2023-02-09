/* eslint-disable import/no-extraneous-dependencies */
// cSpell:words documentselection
import { isWidget } from 'ckeditor5/src/widget';

/**
 * Checks if view element is <drupal-media> element.
 *
 * @param {module:engine/view/element~Element} viewElement
 *   The view element.
 * @return {boolean}
 *   A boolean indicating if the element is a <drupal-media> element.
 *
 * @private
 */
export function isUbcColumnsTwo(viewElement) {
  return (
    isWidget(viewElement) && !!viewElement.getCustomProperty('ubcColumnsTwo')
  );
}

/**
 * Gets selected Drupal Media widget if only Drupal Media is currently selected.
 *
 * @param {module:engine/model/selection~Selection} selection
 *   The current selection.
 * @return {module:engine/view/element~Element|null}
 *   The currently selected Drupal Media widget or null.
 *
 * @private
 */
export function getClosestSelectedUbcColumnsTwo(selection) {
  const viewElement = selection.getSelectedElement();
  if (viewElement && isUbcColumnsTwo(viewElement)) {
    return viewElement;
  }

  let parent = selection.getFirstPosition().parent;

  while (parent) {
    if (parent.is('element') && isUbcColumnsTwo(parent)) {
      return parent;
    }

    parent = parent.parent;
  }

  return null;
}

/**
 * Checks if value is a JavaScript object.
 *
 * This will return true for any type of JavaScript object. (e.g. arrays,
 * functions, objects, regexes, new Number(0), and new String(''))
 *
 * @param value
 *   Value to check.
 * @return {boolean}
 *   True if value is an object, else false.
 */
export function isObject(value) {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
}



