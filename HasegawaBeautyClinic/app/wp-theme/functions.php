<?php
/**
 * Theme functions
 */
function hbc_setup() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  add_theme_support('html5', ['search-form','comment-form','comment-list','gallery','caption','style','script']);
  register_nav_menus([
    'global' => 'Global Navigation',
    'footer' => 'Footer Navigation',
  ]);
}
add_action('after_setup_theme', 'hbc_setup');

function hbc_enqueue_assets() {
  $uri = get_template_directory_uri();
  $dir = get_template_directory();
  $css = '/css/styles.css';
  $js  = '/js/main.js';

  wp_enqueue_style(
    'hbc-fonts',
    'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@600;700&display=swap',
    [],
    null
  );
  wp_enqueue_style('hbc-styles', $uri . $css, [], file_exists($dir.$css) ? filemtime($dir.$css) : '1.0');
  wp_enqueue_script('hbc-main',  $uri . $js,  [], file_exists($dir.$js)  ? filemtime($dir.$js)  : '1.0', true);
}
add_action('wp_enqueue_scripts', 'hbc_enqueue_assets');

/** カスタム投稿タイプ */
function hbc_register_custom_post_types() {
  register_post_type('treatment', [
    'labels' => [
      'name'          => '施術一覧',
      'singular_name' => '施術',
      'add_new_item'  => '新しい施術を追加',
      'edit_item'     => '施術を編集',
    ],
    'public'        => true,
    'has_archive'   => true,
    'rewrite'       => ['slug' => 'treatment', 'with_front' => false],
    'menu_icon'     => 'dashicons-heart',
    'show_in_rest'  => true,
    'supports'      => ['title','editor','thumbnail','excerpt'],
    'taxonomies'    => ['treatment_cat'],
  ]);

  register_post_type('case', [
    'labels' => [
      'name'          => '症例',
      'singular_name' => '症例',
      'add_new_item'  => '新しい症例を追加',
      'edit_item'     => '症例を編集',
    ],
    'public'        => true,
    'has_archive'   => true,
    'rewrite'       => ['slug' => 'case', 'with_front' => false],
    'menu_icon'     => 'dashicons-format-gallery',
    'show_in_rest'  => true,
    'supports'      => ['title','editor','thumbnail','excerpt'],
    'taxonomies'    => ['case_cat'],
  ]);
}
add_action('init', 'hbc_register_custom_post_types', 10);

/** タクソノミー */
function hbc_register_taxonomies() {
  register_taxonomy('treatment_cat', ['treatment'], [
    'labels' => [
      'name'          => '施術カテゴリ',
      'singular_name' => '施術カテゴリ',
    ],
    'public'            => true,
    'hierarchical'      => true,
    'show_admin_column' => true,
    'show_in_rest'      => true,
    'show_in_nav_menus' => true,
    'query_var'         => true,
    'rewrite'           => ['slug' => 'treatment-cat', 'with_front' => false],
  ]);

  register_taxonomy('case_cat', ['case'], [
    'labels' => [
      'name'          => '症例カテゴリ',
      'singular_name' => '症例カテゴリ',
    ],
    'public'            => true,
    'hierarchical'      => true,
    'show_admin_column' => true,
    'show_in_rest'      => true,
    'show_in_nav_menus' => true,
    'query_var'         => true,
    'rewrite'           => ['slug' => 'case-cat', 'with_front' => false],
  ]);
}
add_action('init', 'hbc_register_taxonomies', 9);

/** 投稿→お知らせにリネーム（任意） */
function hbc_rename_post_to_news() {
  global $menu, $submenu;
  foreach ($menu as $key => $val) {
    if ($menu[$key][2] === 'edit.php') { $menu[$key][0] = 'お知らせ'; break; }
  }
  if (isset($submenu['edit.php'])) {
    $submenu['edit.php'][5][0]  = 'お知らせ一覧';
    $submenu['edit.php'][10][0] = '新規追加';
    $submenu['edit.php'][16][0] = 'タグ';
  }
}
add_action('admin_menu', 'hbc_rename_post_to_news');

function hbc_change_post_object_labels() {
  global $wp_post_types;
  $labels = &$wp_post_types['post']->labels;
  $labels->name               = 'お知らせ';
  $labels->singular_name      = 'お知らせ';
  $labels->add_new            = '新規追加';
  $labels->add_new_item       = 'お知らせを追加';
  $labels->edit_item          = 'お知らせを編集';
  $labels->new_item           = '新しいお知らせ';
  $labels->view_item          = 'お知らせを表示';
  $labels->search_items       = 'お知らせを検索';
  $labels->not_found          = 'お知らせはありません';
  $labels->not_found_in_trash = 'ゴミ箱にお知らせはありません';
  $labels->all_items          = 'お知らせ一覧';
  $labels->menu_name          = 'お知らせ';
  $labels->name_admin_bar     = 'お知らせ';
}
add_action('init', 'hbc_change_post_object_labels');

/** テーマ切替時にリライトルール更新 */
function hbc_flush_rewrite_on_switch() {
  hbc_register_taxonomies();
  hbc_register_custom_post_types();
  flush_rewrite_rules();
}
add_action('after_switch_theme', 'hbc_flush_rewrite_on_switch');

/** 念のため関連付けを明示 */
add_action('init', function () {
  register_taxonomy_for_object_type('treatment_cat', 'treatment');
  register_taxonomy_for_object_type('case_cat', 'case');
}, 12);

/** 施術の価格メタ（_hbc_price） */
add_action('init', function () {
  register_post_meta('treatment', '_hbc_price', [
    'type'         => 'string',
    'single'       => true,
    'show_in_rest' => true,
    'auth_callback'=> '__return_true',
  ]);
});