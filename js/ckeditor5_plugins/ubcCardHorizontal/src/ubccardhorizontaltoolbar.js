import {
  Plugin
} from 'ckeditor5/src/core';
import {
  WidgetToolbarRepository
} from 'ckeditor5/src/widget';
import {
  getSelectedUbcCardHorizontalWidget,
  getUbcCardHorizontalWidgetAncestor
} from './utils';

/**
 * The ubcCardHorizontal toolbar class.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcCardHorizontalToolbar extends Plugin {
  /**
   * @inheritDoc
   */
  static get requires() {
    return [WidgetToolbarRepository];
  }

  /**
   * @inheritDoc
   */
  static get pluginName() {
    return 'UbcCardHorizontalToolbar';
  }

  /**
   * @inheritDoc
   */
  afterInit() {
    const editor = this.editor;
    const widgetToolbarRepository = editor.plugins.get(WidgetToolbarRepository);
    const ubcCardHorizontalContentToolbarItems = editor.config.get('ubcCardHorizontal.contentToolbar');
    const ubcCardHorizontalToolbarItems = editor.config.get('ubcCardHorizontal.tableToolbar');

    if (ubcCardHorizontalContentToolbarItems) {
      widgetToolbarRepository.register('ubcCardHorizontalContent', {
        ariaLabel: editor.t('Card Horizontal toolbar'),
        items: ubcCardHorizontalContentToolbarItems,
        getRelatedElement: getUbcCardHorizontalWidgetAncestor
      });
    }

    if (ubcCardHorizontalToolbarItems) {
      widgetToolbarRepository.register('ubcCardHorizontal', {
        ariaLabel: editor.t('Card Horizontal toolbar'),
        items: ubcCardHorizontalToolbarItems,
        getRelatedElement: getSelectedUbcCardHorizontalWidget
      });
    }
  }
}
