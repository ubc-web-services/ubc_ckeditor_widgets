<?php

namespace Drupal\ubc_ckeditor_widgets\Plugin\CKEditorPlugin;

use Drupal\editor\Entity\Editor;
use Drupal\ckeditor\CKEditorPluginBase;

/**
 * Defines the "bs3-2columns-2-1" plugin.
 *
 * @CKEditorPlugin(
 *   id = "bs3-2columns-2-1",
 *   label = @Translation("CKEditor Two Columns: 2/3 1/3"),
 *   module = "ubc_ckeditor_widgets"
 * )
 */
class BS3_2columns_2_1 extends CKEditorPluginBase {

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getFile().
   */
  public function getFile() {
    return drupal_get_path('module', 'ubc_ckeditor_widgets') . '/plugins/bs3-2columns-2-1/plugin.js';
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
      'bs3-2columns-2-1' => [
        'label' => t('Two Columns: 2/3 1/3 (Bootstrap 3)'),
        'image' => drupal_get_path('module', 'ubc_ckeditor_widgets') . '/plugins/bs3-2columns-2-1/icons/bs3-2columns-2-1.png',
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
