<?php
/*
Template Name: 採用情報
*/
get_header(); ?>
<main class="page">
  <div class="container">
    <h1 class="page-title">採用情報</h1>
    <div class="card-grid">
      <article class="card job">
        <div class="card-body">
          <h3>受付スタッフ（正社員）</h3>
          <p class="muted">月給 ¥230,000〜 / シフト制</p>
          <a class="btn btn-secondary" href="<?php echo esc_url( home_url('/contact') ); ?>">応募する</a>
        </div>
      </article>
      <article class="card job">
        <div class="card-body">
          <h3>看護師（正社員・非常勤）</h3>
          <p class="muted">月給 ¥320,000〜 / 時給 ¥2,000〜</p>
          <a class="btn btn-secondary" href="<?php echo esc_url( home_url('/contact') ); ?>">応募する</a>
        </div>
      </article>
    </div>
  </div>
</main>
<?php get_footer();
