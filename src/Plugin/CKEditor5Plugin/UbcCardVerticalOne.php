<?php

namespace Drupal\ubc_ckeditor_widgets\Plugin\CKEditor5Plugin;

use Drupal\ckeditor5\Plugin\CKEditor5PluginDefault;
use Drupal\editor\EditorInterface;

/**
 * Defines the "UbcCardVerticalOne" plugin.
 */
class UbcCardVerticalOne extends CKEditor5PluginDefault {

  /**
   * {@inheritdoc}
   */
  public function getDynamicPluginConfig(array $static_plugin_config, EditorInterface $editor): array {
    return $static_plugin_config;
  }

}