<?php
/* 
Template Name: 予約・お問い合わせ
*/
get_header();
?>
<main class="page">
  <div class="container">
    <h1 class="page-title"><?php echo esc_html(get_the_title()); ?></h1>

    <form class="form" action="#" method="post" onsubmit="event.preventDefault();alert('送信テスト：ポートフォリオ用');">
      <div class="form-row">
        <label for="name">お名前 <span class="req">必須</span></label>
        <input id="name" name="name" type="text" placeholder="山田 花子" required>
      </div>
      <div class="form-row">
        <label for="email">メールアドレス <span class="req">必須</span></label>
        <input id="email" name="email" type="email" placeholder="you@example.com" required>
      </div>
      <div class="form-row">
        <label for="tel">電話番号</label>
        <input id="tel" name="tel" type="tel" placeholder="090-0000-0000">
      </div>
      <div class="form-row">
        <label for="treatment">希望施術</label>
        <select id="treatment" name="treatment">
          <option>未選択</option>
          <option>二重整形</option>
          <option>クマ取り</option>
          <option>ハイフ</option>
          <option>ボトックス</option>
        </select>
      </div>
      <div class="form-row">
        <label for="date">希望日</label>
        <input id="date" name="date" type="date">
      </div>
      <div class="form-row">
        <label for="msg">ご相談内容</label>
        <textarea id="msg" name="msg" rows="5" placeholder="ご相談内容をご記入ください"></textarea>
      </div>
      <div class="actions">
        <button class="btn btn-primary" type="submit">送信する</button>
      </div>
      <p class="small muted">※ ポートフォリオ用サンプルのため、送信は実処理されません。</p>
    </form>
  </div>
</main>
<?php get_footer(); ?>
