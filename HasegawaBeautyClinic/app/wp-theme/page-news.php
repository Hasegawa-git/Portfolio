<?php
/* 
Template Name: お知らせ一覧
*/
get_header();

// ページネーション
$paged = get_query_var('paged') ? (int) get_query_var('paged') : 1;

// カテゴリー優先: slug "news" or name "お知らせ"
$cat = get_category_by_slug('news');
if (!$cat) {
  // 名前からも探す（日本語カテゴリー名想定）
  $maybe = get_term_by('name', 'お知らせ', 'category');
  if ($maybe && !is_wp_error($maybe)) {
    $cat = $maybe;
  }
}

$args = [
  'post_type'      => 'post',
  'posts_per_page' => 10,
  'paged'          => $paged,
];

if ($cat && !is_wp_error($cat)) {
  $args['cat'] = (int) $cat->term_id;
}

$query = new WP_Query($args);
?>
<main class="page">
  <div class="container">
    <h1 class="page-title"><?php echo esc_html(get_the_title()); ?></h1>

    <?php if ($query->have_posts()) : ?>
      <ul class="news-list">
        <?php while ($query->have_posts()) : $query->the_post(); ?>
          <li>
            <time datetime="<?php echo esc_attr(get_the_date('c')); ?>">
              <?php echo esc_html(get_the_date('Y.m.d')); ?>
            </time>
            <a href="<?php echo esc_url(get_permalink()); ?>">
              <?php echo esc_html(get_the_title()); ?>
            </a>
          </li>
        <?php endwhile; ?>
      </ul>

      <?php
      the_posts_pagination([
        'mid_size'  => 1,
        'prev_text' => '‹',
        'next_text' => '›',
      ]);
      ?>

    <?php else : ?>
      <p>お知らせはまだありません。</p>
    <?php endif; wp_reset_postdata(); ?>

  </div>
</main>
<?php get_footer(); ?>
