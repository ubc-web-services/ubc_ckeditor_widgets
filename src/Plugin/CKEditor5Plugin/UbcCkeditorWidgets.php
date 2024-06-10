<?php

namespace Drupal\ubc_ckeditor_widgets\Plugin\CKEditorPlugin;

use Drupal\ckeditor\CKEditorPluginBase;
use Drupal\editor\Entity\Editor;

/**
 * Defines the "UbcCkeditorWidgets" plugin.
 *
 * @CKEditorPlugin (
 *   id = "ubcCkeditorWidgets",
 *   label = @Translation("UbcCkeditorWidgets"),
 *   module = "ubc_ckeditor_widgets"
 * )
 */
class UbcCkeditorWidgets extends CKEditorPluginBase {

  /**
   * {@inheritdoc}
   */
  public function getConfig(Editor $editor) {
    $config = [];
    return $config;
  }

  /**
   * {@inheritdoc}
   */
  public function getDependencies(Editor $editor) {
    return [];
  }
}
