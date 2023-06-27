import {
  Plugin
} from 'ckeditor5/src/core';
import {
  WidgetToolbarRepository
} from 'ckeditor5/src/widget';
import {
  getSelectedUbcCardVerticalTwoWidget,
  getUbcCardVerticalTwoWidgetAncestor
} from './utils';

/**
 * The ubcCardVerticalTwo toolbar class.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcCardVerticalTwoToolbar extends Plugin {
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
    return 'UbcCardVerticalTwoToolbar';
  }

  /**
   * @inheritDoc
   */
  afterInit() {
    const editor = this.editor;
    const widgetToolbarRepository = editor.plugins.get(WidgetToolbarRepository);
    const ubcCardVerticalTwoContentToolbarItems = editor.config.get('ubcCardVerticalTwo.contentToolbar');
    const ubcCardVerticalTwoToolbarItems = editor.config.get('ubcCardVerticalTwo.tableToolbar');

    if (ubcCardVerticalTwoContentToolbarItems) {
      widgetToolbarRepository.register('ubcCardVerticalTwoContent', {
        ariaLabel: editor.t('Vertical Card Two toolbar'),
        items: ubcCardVerticalTwoContentToolbarItems,
        getRelatedElement: getUbcCardVerticalTwoWidgetAncestor
      });
    }

    if (ubcCardVerticalTwoToolbarItems) {
      widgetToolbarRepository.register('ubcCardVerticalTwo', {
        ariaLabel: editor.t('Vertical Card Two toolbar'),
        items: ubcCardVerticalTwoToolbarItems,
        getRelatedElement: getSelectedUbcCardVerticalTwoWidget
      });
    }
  }
}
