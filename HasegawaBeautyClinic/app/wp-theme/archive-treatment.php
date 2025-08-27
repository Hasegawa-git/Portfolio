<?php get_header(); ?>
<main class="page treatments-archive">
  <div class="container">
    <h1 class="page-title">施術一覧</h1>

    <?php
    // フィルタチップ（空でも表示したいので hide_empty=false）
    $terms = get_terms([
      'taxonomy'   => 'treatment_cat',
      'hide_empty' => false,
      'orderby'    => 'name',
      'order'      => 'ASC',
    ]);
    ?>
    <div class="filters">
      <button type="button" class="chip is-active" data-filter="all">すべて</button>
      <?php if (!is_wp_error($terms)) : ?>
        <?php foreach ($terms as $t) : ?>
          <button type="button" class="chip" data-filter="<?php echo esc_attr($t->slug); ?>">
            <?php echo esc_html($t->name); ?>
          </button>
        <?php endforeach; ?>
      <?php endif; ?>
    </div>

    <div class="card-grid" id="treatment-grid">
      <?php
      $fallback = get_template_directory_uri() . '/img/Hero.png';
      if (have_posts()) :
        while (have_posts()) : the_post();
          $img  = get_the_post_thumbnail_url(get_the_ID(), 'large') ?: $fallback;
          $cats = get_the_terms(get_the_ID(), 'treatment_cat');
          $slugs = $cats && !is_wp_error($cats) ? wp_list_pluck($cats, 'slug') : [];
          $data_cats = implode(' ', array_map('esc_attr', $slugs));
          $price = get_post_meta(get_the_ID(), '_hbc_price', true);
          ?>
          <article class="card" data-cats="<?php echo $data_cats; ?>">
            <img src="<?php echo esc_url($img); ?>" alt="<?php echo esc_attr(get_the_title()); ?>">
            <div class="card-body">
              <h3><?php the_title(); ?></h3>
              <?php if ($price) : ?><p class="muted"><?php echo esc_html($price); ?></p><?php endif; ?>
              <a class="btn btn-secondary" href="<?php the_permalink(); ?>">詳細</a>
            </div>
          </article>
        <?php endwhile; ?>
      <?php else : ?>
        <p class="muted">施術は準備中です。</p>
      <?php endif; ?>
    </div>

    <?php
    // ページャ（必要なら）
    the_posts_pagination([
      'mid_size'  => 2,
      'prev_text' => '前へ',
      'next_text' => '次へ',
    ]);
    ?>
  </div>
</main>
<?php get_footer(); ?>