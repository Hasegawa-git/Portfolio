<?php get_header(); ?>
<main class="page">
  <div class="container">
    <h1 class="page-title"><?php the_title(); ?></h1>
    <div class="content">
      <?php while (have_posts()): the_post(); the_content(); endwhile; ?>
    </div>
  </div>
</main>
<?php get_footer(); ?>
