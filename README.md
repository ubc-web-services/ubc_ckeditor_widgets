## CKEditor 5 plugin development starter template

To facilitate easier development of modules that provide CKEditor 5 plugins,
developers may copy the contents of this directory to the root of their module
directory. This provides the basic build tools and directory structure for
creating CKEditor 5 plugins within a contributed module, as well as a basic
working plugin based on the [CKEditor 5 block plugin tutorial](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/tutorials/implementing-a-block-widget.html)
but with additional documentation and minor changes for better integration
with Drupal.

When Drupal updates to use newer versions of CKEditor 5, it may be necessary to
update any files copied from here to your module.

Plugin source should be added to
`js/ckeditor5_plugins/{pluginNameDirectory}/src` and the build tools expect this
directory to include an `index.js` file that exports one or more CKEditor 5
plugins. Note that requiring `index.js` to be inside
`{pluginNameDirectory}/src` is not a fixed requirement of CKEditor 5 or Drupal,
but a requirement of this starter template that can be changed in
`webpack.config.js` as needed.

In the module directory, run `yarn install` to set up the necessary assets. The
initial run of `install` may take a few minutes, but subsequent builds will be
faster.

After installing dependencies, plugins can be built with `yarn build` or `yarn
watch`. They will be built to `js/build/{pluginNameDirectory}.js`.  co

# CKEditor 5 widgets

## Goals:
- make editor widgets for CKEditor 5 that retain feature parity tothose from CKEditor 4
- CKE4 and CKE5 widgets should exist in one module
- CKE5 widgets from repo #2 and #3 should be moved to repo #1 (can leave repo #2 and #3 as is)
- final markup in CKE5 widgets should be the same as is currently used by the CKE4 widgets

## Version 4 widget repos:
1. https://github.com/ubc-web-services/ubc_ckeditor_widgets/tree/vanilla-js
(master branch is out of date - all current releases are from vanilla-js branch)
2. https://github.com/ubc-web-services/ubc-column-options-widget
3. https://github.com/ubc-web-services/ubc-color-box-widget
4. https://github.com/ubc-web-services/ubc_ckeditor_widgets/tree/CKE5 (in progress work on CKE5 widgets)

## CKE 4 widgets (source repo) [CKE 5 widget status]:
- accordion (repo 1) [complete]
- accordion toggle (repo 1) [complete]
- card-horizontal (repo 1) [not started]
- card-one (repo 1) [not started]
- card-two (repo 1) [not started]
- card-three (repo 1) [not started]
- 2 columns (repo 1) [deprecated]
- 2 columns 1 2 (repo 1) [deprecated]
- 2 columns 2 1 (repo 1) [deprecated]
- 3 columns (repo 1) [deprecated]
- fontawesome icon (repo 1) [deprecated - no replacement recommended]
- 2 columns with options (repo 2) [not started]
- 3 columns with options (repo 2) [not started]
- 4 columns with options (repo 2) [not started]
- 4 columns with options (repo 2) [not started]
- Color Box (repo 3) [not started]

## Net new CKE5 widgets:
- UBC Table Class (adds presentational classes to table elements) [complete]
- UBC Table Cell Class (adds width classes to TD elements) [complete]

## CKEditor API
- v4: https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR.html
    - custom widget example:
        - https://ckeditor.com/docs/ckeditor4/latest/examples/simplebox.html
- v5: https://ckeditor.com/docs/ckeditor5/latest/api/index.html
    - plugin examples:
        - https://ckeditor.com/docs/ckeditor5/latest/framework/guides/plugins/creating-simple-plugin-timestamp.html
        - https://ckeditor.com/docs/ckeditor5/latest/framework/guides/tutorials/implementing-a-block-widget.html

## Drupal resources
- Dev Tools for CKE5 - https://www.drupal.org/project/ckeditor5_dev
- CKE5 Drupal API - https://www.drupal.org/docs/drupal-apis/ckeditor-5-api/overview
- Development guide - https://www.drupal.org/docs/core-modules-and-themes/core-modules/ckeditor-5-module/ckeditor-5-development

