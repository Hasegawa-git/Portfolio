<?php
/**
 * Footer
 */
?>
<footer class="site-footer">
  <div class="container footer-inner">
    <div class="footer-brand">
      <div class="logo"><span class="logo-mark">HB</span><span class="logo-text">Hasegawa Beauty Clinic</span></div>
      <p>自然体の美しさを引き出す、美容医療。</p>
    </div>

    <div class="footer-nav">
      <ul>
        <li><a href="<?php echo esc_url( site_url('/clinic/') ); ?>">クリニック紹介</a></li>
        <li><a href="<?php echo esc_url( get_post_type_archive_link('treatment') ); ?>">施術一覧</a></li>
        <li><a href="<?php echo esc_url( get_post_type_archive_link('case') ); ?>">症例</a></li>
        <li><a href="<?php echo esc_url( site_url('/doctors/') ); ?>">医師紹介</a></li>
        <li><a href="<?php echo esc_url( site_url('/news/') ); ?>">お知らせ</a></li>
        <li><a href="<?php echo esc_url( site_url('/careers/') ); ?>">採用情報</a></li>
        <li><a href="<?php echo esc_url( site_url('/contact/') ); ?>">予約・お問い合わせ</a></li>
      </ul>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="container">
      <small>© <?php echo date('Y'); ?> Hasegawa Beauty Clinic</small>
    </div>
  </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>