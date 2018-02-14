<?php

namespace Drupal\ubc_ckeditor_widgets\Plugin\CKEditorPlugin;

use Drupal\editor\Entity\Editor;
use Drupal\ckeditor\CKEditorPluginBase;

/**
 * Defines the "card-three" plugin.
 *
 * @CKEditorPlugin(
 *   id = "card-three",
 *   label = @Translation("Three Cards"),
 *   module = "ubc_ckeditor_widgets"
 * )
 */
class Card_three extends CKEditorPluginBase {

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getFile().
   */
  public function getFile() {
    return drupal_get_path('module', 'ubc_ckeditor_widgets') . '/plugins/card-three/plugin.js';
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
      'card-three' => [
        'label' => t('Three Cards'),
        'image' => drupal_get_path('module', 'ubc_ckeditor_widgets') . '/plugins/card-three/icons/card-three.png',
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
