<?php
/* Front Page */
get_header();
$asset = get_template_directory_uri() . '/img';
?>
<main>
  <!-- ヒーロー -->
  <section class="hero">
    <div class="container hero-inner">
      <div class="hero-copy">
        <p class="kicker">Portfolio Demo</p>
        <h1>あなたらしさを、もっと美しく。</h1>
        <p class="lede">経験豊富な医師による丁寧なカウンセリングと、安全性を最優先にした施術をご提供します。</p>
        <ul class="list-check" style="margin:12px 0 0">
          <li>明瞭な料金・無理な勧誘なし</li>
          <li>症例に基づくわかりやすい説明</li>
          <li>術後フォロー・オンライン相談対応</li>
        </ul>
        <div class="hero-actions">
          <a class="btn btn-primary" href="<?php echo esc_url( home_url('/contact') ); ?>">予約する</a>
          <a class="btn btn-ghost" href="<?php echo esc_url( home_url('/treatments') ); ?>">施術一覧を見る</a>
        </div>
      </div>
      <div class="hero-media">
        <img src="<?php echo esc_url("$asset/Hero.png"); ?>" alt="清潔感のある院内の様子">
      </div>
    </div>
  </section>

  <!-- トラストバー -->
  <section class="section alt" aria-label="当院の特長">
    <div class="container">
      <div class="columns">
        <ul class="list-check">
          <li>形成外科・美容外科の協働体制</li>
          <li>自然光に近い診察照明で精密デザイン</li>
          <li>痛み・腫れを抑える麻酔・創処置</li>
        </ul>
        <ul class="list-check">
          <li>プライバシー配慮の個室カウンセリング</li>
          <li>キャッシュレス・医療ローン対応</li>
          <li>アフターケアも専任スタッフが支援</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- 人気の施術 -->
  <section class="section">
    <div class="container">
      <h2 class="section-title">人気の施術</h2>
      <p class="lede">多くの患者さまから選ばれている、当院の代表的な施術メニューです。初めての方にもおすすめできる、安全で効果的なプランをご紹介します。</p>
      <div class="card-grid">
        <?php
        // ダミー4カード（静的に合わせる）
        $items = [
          ['title'=>'二重整形','price'=>'¥99,000〜'],
          ['title'=>'クマ取り（下眼瞼）','price'=>'¥132,000〜'],
          ['title'=>'ハイフ（HIFU）','price'=>'¥55,000〜'],
          ['title'=>'ボトックス','price'=>'¥11,000〜'],
        ];
        foreach ($items as $it): ?>
          <article class="card">
            <img src="<?php echo esc_url("$asset/Hero.png"); ?>" alt="施術イメージ">
            <div class="card-body">
              <h3><?php echo esc_html($it['title']); ?></h3>
              <p class="muted"><?php echo esc_html($it['price']); ?></p>
              <a class="btn btn-secondary" href="<?php echo esc_url( home_url('/treatment') ); ?>">詳細を見る</a>
            </div>
          </article>
        <?php endforeach; ?>
      </div>

      <div class="section" style="padding-top:24px">
        <h3 class="section-title" style="font-size:20px">初めての方へ</h3>
        <ol>
          <li>WEBまたはお電話で予約</li>
          <li>カウンセリング（ご希望・不安点を丁寧にヒアリング）</li>
          <li>施術プランと費用のご説明（無理なご提案はいたしません）</li>
          <li>当日または後日の施術・アフターケア</li>
        </ol>
        <p class="small muted">※ 自由診療のため保険適用外です。価格は税込表記。</p>
      </div>
    </div>
  </section>

  <!-- 症例ハイライト -->
  <section class="section alt">
    <div class="container">
      <h2 class="section-title">症例ハイライト</h2>
      <p class="lede">実際に施術を受けられた方のビフォー・アフターをご覧いただけます。写真はすべて当院で行った症例で、個人差がございます。</p>
      <div class="card-row">
        <?php for($i=0;$i<3;$i++): ?>
          <article class="case-card">
            <img src="<?php echo esc_url("$asset/Hero.png"); ?>" alt="Before / After">
            <h3><?php echo ($i===0)?'二重整形 症例':(($i===1)?'目の下のクマ取り 症例':'ハイフ 症例'); ?></h3>
          </article>
        <?php endfor; ?>
      </div>
      <div class="actions">
        <a class="btn btn-secondary" href="<?php echo esc_url( home_url('/case') ); ?>">症例をもっと見る</a>
      </div>
    </div>
  </section>

  <!-- 医師のご紹介 -->
  <section class="section">
    <div class="container">
      <h2 class="section-title">医師のご紹介</h2>
      <p class="lede">美容外科・形成外科の経験豊富な医師が在籍しています。専門領域に応じたチーム体制で、患者さま一人ひとりに合った治療をご提案します。</p>
      <div class="card-grid">
        <?php
        $docs = ['長谷川 貴大 医師'=>'形成外科 / 美容外科','山田 花子 医師'=>'美容皮膚科','佐藤 太郎 医師'=>'麻酔科 / 美容外科'];
        foreach($docs as $name=>$dept): ?>
          <article class="card profile">
            <img src="<?php echo esc_url("$asset/Hero.png"); ?>" alt="医師の写真">
            <div class="card-body">
              <h3><?php echo esc_html($name); ?></h3>
              <p class="muted"><?php echo esc_html($dept); ?></p>
              <a class="btn btn-tertiary" href="<?php echo esc_url( home_url('/doctors') ); ?>">プロフィールを見る</a>
            </div>
          </article>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="section cta">
    <div class="container cta-inner">
      <h2>無料カウンセリング予約</h2>
      <p>ご相談だけでも歓迎しております。<br>不安や疑問を一緒に解決しながら、最適なプランをご提案いたします。</p>
      <p>WEBから24時間受付。初めての方もお気軽にご相談ください。</p>
      <a class="btn btn-primary btn-lg" href="<?php echo esc_url( home_url('/contact') ); ?>">予約する</a>
    </div>
  </section>
</main>
<?php get_footer(); ?>