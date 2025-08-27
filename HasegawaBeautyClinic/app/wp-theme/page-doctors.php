<?php
/* Template Name: 医師紹介 */
get_header(); ?>

<main class="page">
  <div class="container">
    <h1 class="page-title"><?php the_title(); ?></h1>

    <?php
    if (have_posts()) : while (have_posts()) : the_post();
      if (get_the_content()) : ?>
        <div class="lede"><?php the_content(); ?></div>
      <?php endif;
    endwhile; endif; ?>

    <div class="card-grid">
      <?php
      $q = new WP_Query([
        'post_type'      => 'doctor',
        'posts_per_page' => -1,
        'orderby'        => 'menu_order date',
        'order'          => 'ASC',
      ]);
      $fallback = get_template_directory_uri() . '/img/Hero.png';

      if ($q->have_posts()) :
        while ($q->have_posts()) : $q->the_post();
          $img = get_the_post_thumbnail_url(get_the_ID(), 'large') ?: $fallback; ?>
          <article class="card profile">
            <img src="<?php echo esc_url($img); ?>" alt="<?php echo esc_attr(get_the_title()); ?>">
            <div class="card-body">
              <h3><?php the_title(); ?></h3>
              <p class="muted"><?php echo esc_html(get_post_meta(get_the_ID(), '_hbc_doctor_role', true) ?: ''); ?></p>
              <a class="btn btn-tertiary" href="<?php the_permalink(); ?>">プロフィールを見る</a>
            </div>
          </article>
        <?php endwhile;
        wp_reset_postdata();
      else : ?>
        <p class="muted">医師情報は準備中です。</p>
      <?php endif; ?>
    </div>
  </div>
</main>

<?php get_footer();