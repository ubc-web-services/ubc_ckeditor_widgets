<?php

namespace Drupal\ubc_ckeditor_widgets\Plugin\CKEditorPlugin;

use Drupal\editor\Entity\Editor;
use Drupal\ckeditor\CKEditorPluginBase;

/**
 * Defines the "bs3-2columns-1-2" plugin.
 *
 * @CKEditorPlugin(
 *   id = "bs3-2columns-1-2",
 *   label = @Translation("CKEditor Two Columns"),
 *   module = "ubc_ckeditor_widgets"
 * )
 */
class BS3_2columns_1_2 extends CKEditorPluginBase {

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getFile().
   */
  public function getFile() {
    return drupal_get_path('module', 'ubc_ckeditor_widgets') .  '/plugins/bs3-2columns-1-2/plugin.js';
  }

  /**
   * {@inheritdoc}
   */
  public function getLibraries(Editor $editor) {
    return array();
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
    return array(
      'bs3-2columns-1-2' => array(
        'label' => t('Two Columns: 1/3 2/3 (Bootstrap 3)'),
        'image' => drupal_get_path('module', 'ubc_ckeditor_widgets') . '/plugins/bs3-2columns-1-2/icons/bs3-2columns-1-2.png',
      ),
    );
  }

  /**
   * {@inheritdoc}
   */
  public function getConfig(Editor $editor) {
    return array();
  }

}
