<?php

declare(strict_types=1);

namespace Drupal\ubc_ckeditor_widgets\Plugin\CKEditor4To5Upgrade;

use Drupal\Core\Plugin\PluginBase;
use Drupal\ckeditor5\HTMLRestrictions;
use Drupal\ckeditor5\Plugin\CKEditor4To5UpgradePluginInterface;
use Drupal\filter\FilterFormatInterface;

/**
 * @CKEditor4To5Upgrade(
 *   id = "ubc_ckeditor_widgets",
 *   cke4_buttons = {
 *     "accordion",
 *     "accordiontoggle",
 *     "card-horizontal",
 *     "card-one",
 *     "card-two",
 *     "card-three",
 *     "color-box-widget",
 *     "column-two-options-widget",
 *     "column-three-options-widget",
 *     "column-four-options-widget",
 *     "flex-3columns",
 *     "flex-2columns",
 *     "flex-2columns-1-2",
 *     "flex-2columns-2-1",
 *   },
 *   cke4_plugin_settings = {
 *   },
 *   cke5_plugin_elements_subset_configuration = {
 *   }
 * )
 *
 * @internal
 *   Plugin classes are internal.
 */
class Remap extends PluginBase implements CKEditor4To5UpgradePluginInterface {

  /**
   * {@inheritdoc}
   */
  public function mapCKEditor4ToolbarButtonToCKEditor5ToolbarItem(string $cke4_button, HTMLRestrictions $text_format_html_restrictions): ?array {
    switch ($cke4_button) {
      case 'accordion':
        return ['UbcAccordion'];

      case 'accordiontoggle':
        return ['UbcAccordionToggle'];

      case 'card-horizontal':
          return ['UbcCardHorizontal'];

      case 'card-one':
          return ['UbcCardVerticalOne'];

      case 'card-two':
          return ['UbcCardVerticalTwo'];

      case 'card-three':
          return ['UbcCardVerticalThree'];

      case 'color-box-widget':
          return ['UbcColorBox'];

      case 'column-two-options-widget':
          return ['UbcColumnsTwo'];

      case 'column-three-options-widget':
          return ['UbcColumnsThree'];

      case 'column-four-options-widget':
          return ['UbcColumnsFour'];

      case 'flex-3columns':
          return ['UbcColumnsThree'];

      case 'flex-2columns':
          return ['UbcColumnsTwo'];

      case 'flex-2columns-1-2':
          return ['UbcColumnsTwo'];

      case 'flex-2columns-2-1':
          return ['UbcColumnsTwo'];

      default:
        throw new \OutOfBoundsException();
    }
  }

  /**
   * {@inheritdoc}
   */
  public function mapCKEditor4SettingsToCKEditor5Configuration(string $cke4_plugin_id, array $cke4_plugin_settings): ?array {
    throw new \OutOfBoundsException();
  }

  /**
   * {@inheritdoc}
   */
  public function computeCKEditor5PluginSubsetConfiguration(string $cke5_plugin_id, FilterFormatInterface $text_format): ?array {
    throw new \OutOfBoundsException();
  }

}
