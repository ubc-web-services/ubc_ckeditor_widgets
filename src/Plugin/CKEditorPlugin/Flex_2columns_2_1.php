<?php

namespace Drupal\ubc_ckeditor_widgets\Plugin\CKEditorPlugin;

use Drupal\editor\Entity\Editor;
use Drupal\ckeditor\CKEditorPluginBase;

/**
 * Defines the "flex-2columns-2-1" plugin.
 *
 * @CKEditorPlugin(
 *   id = "flex-2columns-2-1",
 *   label = @Translation("CKEditor Three Columns"),
 *   module = "ubc_ckeditor_widgets"
 * )
 */
class Flex_2columns_2_1 extends CKEditorPluginBase {

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getFile().
   */
  public function getFile() {
    return drupal_get_path('module', 'ubc_ckeditor_widgets') .  '/plugins/flex-2columns-2-1/plugin.js';
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
      'flex-2columns-2-1' => array(
        'label' => t('Two Columns 2/3 1/3 (Flexbox)'),
        'image' => drupal_get_path('module', 'ubc_ckeditor_widgets') . '/plugins/flex-2columns-2-1/icons/flex-2columns-2-1.png',
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
