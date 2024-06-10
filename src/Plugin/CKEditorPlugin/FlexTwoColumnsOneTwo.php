<?php

namespace Drupal\ubc_ckeditor_widgets\Plugin\CKEditorPlugin;

use Drupal\editor\Entity\Editor;
use Drupal\ckeditor\CKEditorPluginBase;

/**
 * Defines the "flex-2columns-1-2" plugin.
 *
 * @CKEditorPlugin(
 *   id = "flex-2columns-1-2",
 *   label = @Translation("CKEditor Three Columns"),
 *   module = "ubc_ckeditor_widgets"
 * )
 */
class FlexTwoColumnsOneTwo extends CKEditorPluginBase
{

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getFile().
   */
  public function getFile()
  {
    return \Drupal::service('extension.list.module')->getPath('ubc_ckeditor_widgets') . '/plugins/flex-2columns-1-2/plugin.js';
  }

  /**
   * {@inheritdoc}
   */
  public function getLibraries(Editor $editor)
  {
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function isInternal()
  {
    return FALSE;
  }

  /**
   * {@inheritdoc}
   */
  public function getButtons()
  {
    return [
      'flex-2columns-1-2' => [
        'label' => $this->t('DEPRECATED - use column options widget - Two Columns 1/3 2/3 (Flexbox)'),
        'image' => \Drupal::service('extension.list.module')->getPath('ubc_ckeditor_widgets') . '/plugins/flex-2columns-1-2/icons/flex-2columns-1-2.png',
      ],
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getConfig(Editor $editor)
  {
    return [];
  }
}
