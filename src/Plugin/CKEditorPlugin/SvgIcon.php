<?php

namespace Drupal\ubc_ckeditor_widgets\Plugin\CKEditorPlugin;

use Drupal\editor\Entity\Editor;
use Drupal\ckeditor\CKEditorPluginBase;

/**
 * Defines the "svgicon" plugin.
 *
 * @CKEditorPlugin(
 *   id = "svgicon",
 *   label = @Translation("CKEditor SVG Icon"),
 *   module = "ubc_ckeditor_widgets"
 * )
 */
class SvgIcon extends CKEditorPluginBase {

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getFile().
   */
  public function getFile() {
    return drupal_get_path('module', 'ubc_ckeditor_widgets') . '/plugins/svgicon/plugin.js';
  }

  /**
   * {@inheritdoc}
   */
  public function getLibraries(Editor $editor) {
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function isInternal() {
    return FALSE;
  }

  /**
   * {@inheritdoc}
   */
  public function getButtons() {
    return [
      'svgicon' => [
        'label' => t('SVG Icon'),
        'image' => drupal_get_path('module', 'ubc_ckeditor_widgets') . '/plugins/svgicon/icons/svgicon.png',
      ],
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getConfig(Editor $editor) {
    return [];
  }

}
