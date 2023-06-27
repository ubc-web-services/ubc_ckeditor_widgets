import {
  Plugin
} from 'ckeditor5/src/core';
import {
  WidgetToolbarRepository
} from 'ckeditor5/src/widget';
import {
  getSelectedUbcCardVerticalThreeWidget,
  getUbcCardVerticalThreeWidgetAncestor
} from './utils';

/**
 * The ubcCardVerticalThree toolbar class.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcCardVerticalThreeToolbar extends Plugin {
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
    return 'UbcCardVerticalThreeToolbar';
  }

  /**
   * @inheritDoc
   */
  afterInit() {
    const editor = this.editor;
    const widgetToolbarRepository = editor.plugins.get(WidgetToolbarRepository);
    const ubcCardVerticalThreeContentToolbarItems = editor.config.get('ubcCardVerticalThree.contentToolbar');
    const ubcCardVerticalThreeToolbarItems = editor.config.get('ubcCardVerticalThree.tableToolbar');

    if (ubcCardVerticalThreeContentToolbarItems) {
      widgetToolbarRepository.register('ubcCardVerticalThreeContent', {
        ariaLabel: editor.t('Vertical Card Three toolbar'),
        items: ubcCardVerticalThreeContentToolbarItems,
        getRelatedElement: getUbcCardVerticalThreeWidgetAncestor
      });
    }

    if (ubcCardVerticalThreeToolbarItems) {
      widgetToolbarRepository.register('ubcCardVerticalThree', {
        ariaLabel: editor.t('Vertical Card Three toolbar'),
        items: ubcCardVerticalThreeToolbarItems,
        getRelatedElement: getSelectedUbcCardVerticalThreeWidget
      });
    }
  }
}
