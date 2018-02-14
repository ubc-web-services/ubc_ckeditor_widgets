<?php

namespace Drupal\ubc_ckeditor_widgets\Plugin\CKEditorPlugin;

use Drupal\editor\Entity\Editor;
use Drupal\ckeditor\CKEditorPluginBase;

/**
 * Defines the "clfbutton" plugin.
 *
 * @CKEditorPlugin(
 *   id = "clfbutton",
 *   label = @Translation("CKEditor CLF button"),
 *   module = "ubc_ckeditor_widgets"
 * )
 */
class Clfbutton extends CKEditorPluginBase {

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getFile().
   */
  public function getFile() {
    return drupal_get_path('module', 'ubc_ckeditor_widgets') . '/plugins/clfbutton/plugin.js';
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
      'clfbutton' => [
        'label' => t('CLF Button'),
        'image' => drupal_get_path('module', 'ubc_ckeditor_widgets') . '/plugins/clfbutton/icons/clfbutton.png',
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
