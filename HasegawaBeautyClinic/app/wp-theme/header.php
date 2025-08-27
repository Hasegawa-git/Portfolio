<?php
/**
 * Header
 */
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<header class="site-header">
  <div class="container header-inner">
    <a href="<?php echo esc_url(home_url('/')); ?>" class="logo" aria-label="<?php bloginfo('name'); ?> ホームへ">
      <span class="logo-mark">HB</span><span class="logo-text">Hasegawa Beauty Clinic</span>
    </a>

    <button class="nav-toggle" aria-controls="global-nav" aria-expanded="false" aria-label="メニューを開閉">☰</button>

    <nav id="global-nav" class="nav" aria-label="グローバルナビゲーション">
      <?php
      wp_nav_menu([
        'theme_location' => 'global',
        'container'      => false,
        'menu_class'     => '',
        'items_wrap'     => '<ul>%3$s</ul>',
        'fallback_cb'    => '__return_empty_string',
      ]);
      ?>
      <a class="btn btn-primary header-cta" href="<?php echo esc_url( site_url('/contact/') ); ?>">予約・お問い合わせ</a>
    </nav>
  </div>
</header>
<div class="overlay" hidden></div>