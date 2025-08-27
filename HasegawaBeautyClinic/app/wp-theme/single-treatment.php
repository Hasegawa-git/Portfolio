<?php get_header(); ?>
<main class="page">
  <div class="container">
    <nav class="breadcrumbs" aria-label="パンくず">
      <a href="<?php echo esc_url(home_url('/')); ?>">Home</a> ›
      <a href="<?php echo esc_url(get_post_type_archive_link('treatment')); ?>">施術一覧</a> ›
      <span><?php the_title(); ?></span>
    </nav>

    <?php if (have_posts()) : while (have_posts()) : the_post();
      $fallback = get_template_directory_uri() . '/img/Hero.png';
      $img = get_the_post_thumbnail_url(get_the_ID(), 'large') ?: $fallback;
      $price = get_post_meta(get_the_ID(), '_hbc_price', true);
      ?>
      <header class="detail-hero">
        <div>
          <h1 class="page-title"><?php the_title(); ?></h1>
          <?php if (has_excerpt()) : ?>
            <p class="lede"><?php echo esc_html(get_the_excerpt()); ?></p>
          <?php endif; ?>
          <?php if ($price): ?>
            <div class="price">価格の目安: <strong><?php echo esc_html($price); ?></strong></div>
          <?php endif; ?>
          <div class="actions"><a class="btn btn-primary" href="<?php echo esc_url( home_url('/contact') ); ?>">この施術を予約する</a></div>
        </div>
        <img src="<?php echo esc_url($img); ?>" alt="<?php echo esc_attr(get_the_title()); ?>">
      </header>

      <section class="section">
        <?php the_content(); ?>
      </section>

      <section class="section">
        <?php
        $terms = get_the_terms(get_the_ID(), 'treatment_cat');
        if ($terms && !is_wp_error($terms)) :
          echo '<p class="small muted">カテゴリ: ';
          $names = wp_list_pluck($terms, 'name');
          echo esc_html(implode(' / ', $names));
          echo '</p>';
        endif;
        ?>
      </section>
    <?php endwhile; endif; ?>
  </div>
</main>
<?php get_footer(); ?>