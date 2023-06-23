<?php

namespace Drupal\ubc_ckeditor_widgets\Plugin\CKEditorPlugin;

use Drupal\editor\Entity\Editor;
use Drupal\ckeditor\CKEditorPluginBase;

/**
 * Defines the "accordion" plugin.
 *
 * @CKEditorPlugin(
 *   id = "accordion",
 *   label = @Translation("CKEditor accordion"),
 *   module = "ubc_ckeditor_widgets"
 * )
 */
class Accordion extends CKEditorPluginBase {

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getFile().
   */
  public function getFile() {
    return \Drupal::service('extension.list.module')->getPath('ubc_ckeditor_widgets') . '/plugins/accordion/plugin.js';
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
      'accordion' => [
        'label' => $this->t('Accordion'),
        'image' => \Drupal::service('extension.list.module')->getPath('ubc_ckeditor_widgets') . '/plugins/accordion/icons/accordion.png',
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
