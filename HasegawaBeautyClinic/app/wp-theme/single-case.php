<?php get_header(); ?>
<main class="page">
  <div class="container">
    <nav class="breadcrumbs" aria-label="パンくず">
      <a href="<?php echo esc_url(home_url('/')); ?>">Home</a> ›
      <a href="<?php echo esc_url(get_post_type_archive_link('case')); ?>">症例一覧</a> ›
      <span><?php the_title(); ?></span>
    </nav>

    <?php if (have_posts()) : while (have_posts()) : the_post();
      $fallback = get_template_directory_uri() . '/img/Hero.png';
      $img = get_the_post_thumbnail_url(get_the_ID(), 'large') ?: $fallback; ?>

      <header class="detail-hero">
        <div>
          <h1 class="page-title"><?php the_title(); ?></h1>
          <?php if (has_excerpt()) : ?>
            <p class="muted"><?php the_excerpt(); ?></p>
          <?php endif; ?>
        </div>
      </header>

      <section class="section">
        <?php
        ?>
        <h2>Before / After</h2>
        <div class="compare">
          <img src="<?php echo esc_url($img); ?>" alt="Before" class="before">
          <div class="after-wrap">
            <img src="<?php echo esc_url($img); ?>" alt="After" class="after">
            <div class="mask"></div>
          </div>
          <input type="range" class="compare-range" min="0" max="100" value="50" aria-label="スライダーで比較">
        </div>
      </section>

      <section class="section">
        <?php the_content(); ?>
      </section>

      <section class="section">
        <?php
        $terms = get_the_terms(get_the_ID(), 'case_cat');
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