<?php

namespace Drupal\ubc_ckeditor_widgets\Plugin\CKEditorPlugin;

use Drupal\editor\Entity\Editor;
use Drupal\ckeditor\CKEditorPluginBase;

/**
 * Defines the "card-two" plugin.
 *
 * @CKEditorPlugin(
 *   id = "card-two",
 *   label = @Translation("Two Cards"),
 *   module = "ubc_ckeditor_widgets"
 * )
 */
class Card_two extends CKEditorPluginBase {

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getFile().
   */
  public function getFile() {
    return drupal_get_path('module', 'ubc_ckeditor_widgets') . '/plugins/card-two/plugin.js';
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
      'card-two' => [
        'label' => t('Two Cards'),
        'image' => drupal_get_path('module', 'ubc_ckeditor_widgets') . '/plugins/card-two/icons/card-two.png',
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
