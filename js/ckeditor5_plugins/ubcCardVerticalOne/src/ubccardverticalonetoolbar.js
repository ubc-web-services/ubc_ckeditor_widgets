import {
  Plugin
} from 'ckeditor5/src/core';
import {
  WidgetToolbarRepository
} from 'ckeditor5/src/widget';
import {
  getSelectedUbcCardVerticalOneWidget,
  getUbcCardVerticalOneWidgetAncestor
} from './utils';

/**
 * The ubccardverticalone toolbar class.
 *
 * @extends module:core/plugin~Plugin
 */
export default class UbcCardVerticalOneToolbar extends Plugin {
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
    return 'UbcCardVerticalOneToolbar';
  }

  /**
   * @inheritDoc
   */
  afterInit() {
    const editor = this.editor;
    const widgetToolbarRepository = editor.plugins.get(WidgetToolbarRepository);
    const ubcCardVerticalOneContentToolbarItems = editor.config.get('ubcCardVerticalOne.contentToolbar');
    const ubcCardVerticalOneToolbarItems = editor.config.get('ubcCardVerticalOne.tableToolbar');

    if (ubcCardVerticalOneContentToolbarItems) {
      widgetToolbarRepository.register('ubcCardVerticalOneContent', {
        ariaLabel: editor.t('Card Vertical One toolbar'),
        items: ubcCardVerticalOneContentToolbarItems,
        getRelatedElement: getUbcCardVerticalOneWidgetAncestor
      });
    }

    if (ubcCardVerticalOneToolbarItems) {
      widgetToolbarRepository.register('ubcCardVerticalOne', {
        ariaLabel: editor.t('Card Vertical One toolbar'),
        items: ubcCardVerticalOneToolbarItems,
        getRelatedElement: getSelectedUbcCardVerticalOneWidget
      });
    }
  }
}
