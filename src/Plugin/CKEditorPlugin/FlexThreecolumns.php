<?php

namespace Drupal\ubc_ckeditor_widgets\Plugin\CKEditorPlugin;

use Drupal\editor\Entity\Editor;
use Drupal\ckeditor\CKEditorPluginBase;

/**
 * Defines the "flex-3columns" plugin.
 *
 * @CKEditorPlugin(
 *   id = "flex-3columns",
 *   label = @Translation("CKEditor Three Columns"),
 *   module = "ubc_ckeditor_widgets"
 * )
 */
class FlexThreeColumns extends CKEditorPluginBase
{

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getFile().
   */
  public function getFile()
  {
    return drupal_get_path('module', 'ubc_ckeditor_widgets') . '/plugins/flex-3columns/plugin.js';
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
      'flex-3columns' => [
        'label' => $this->t('DEPRECATED - use column options widget - Three Columns (Flexbox)'),
        'image' => drupal_get_path('module', 'ubc_ckeditor_widgets') . '/plugins/flex-3columns/icons/flex-3columns.png',
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
