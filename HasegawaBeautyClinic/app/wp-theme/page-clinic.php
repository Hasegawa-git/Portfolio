<?php
/*
Template Name: クリニック紹介
*/
get_header(); ?>
<main class="page">
  <div class="container">
    <h1 class="page-title">クリニック紹介</h1>

    <section class="section">
      <h2>私たちの理念</h2>
      <p class="lede">「自然体の美しさ」を、医療の力で安全に、誠実に。</p>
      <p>
        Hasegawa Beauty Clinic は、患者さま一人ひとりの骨格やライフスタイルに合わせて
        “過度に飾らない”上質な仕上がりをめざします。初診では十分なヒアリングとリスク説明を徹底し、
        ご納得いただける治療計画をご提案。術後の経過フォローまで責任を持ってサポートします。
      </p>
      <ul class="list-check">
        <li>安全性の最優先（適応の見極め・無理な施術は行いません）</li>
        <li>明瞭な料金とインフォームド・コンセント</li>
        <li>アフターケアの充実（再診・オンライン相談に対応）</li>
      </ul>
    </section>

    <section class="section">
      <h2>当院の特長</h2>
      <div class="columns">
        <ul>
          <li>形成外科・美容外科・麻酔科の協働体制</li>
          <li>自然光に近い診察照明でデザインを精密化</li>
          <li>症例写真は同条件（角度・明るさ）で撮影・保管</li>
        </ul>
        <ul>
          <li>痛み・腫れを抑える麻酔・創処置の工夫</li>
          <li>プライバシーに配慮した個室カウンセリング</li>
          <li>キャッシュレス決済・医療ローン対応</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <h2>設備</h2>
      <ul class="list-check">
        <li>清潔区域を分けた手術室（クリーン環境・無影灯）</li>
        <li>リカバリールーム（脈拍・血圧・SpO₂ 監視）</li>
        <li>医療用レーザー各種（シミ・たるみ・脱毛）</li>
        <li>高周波/超音波機器（たるみ治療・スキンタイトニング）</li>
        <li>高性能滅菌システム（オートクレーブ・ディスポーザブル運用）</li>
      </ul>
      <p class="small muted">※ 機器の導入状況は時期により異なる場合があります。詳細はお問い合わせください。</p>
    </section>

    <section class="section">
      <h2>アクセス</h2>
      <p>〒000-0000 東京都〇〇区〇〇 1-2-3 〇〇ビル 5F（最寄り駅：〇〇線「〇〇駅」徒歩3分）</p>
      <div class="map-placeholder">MAP</div>
      <p class="small muted">ビルエントランス奥のエレベーターで5Fへ／駐車場は近隣コインパーキングをご利用ください。</p>
    </section>

    <section class="section">
      <h2>診療時間・休診日</h2>
      <div class="table-wrap">
        <table aria-label="診療時間">
          <thead>
            <tr><th>曜日</th><th>診療時間</th><th>最終受付</th><th>備考</th></tr>
          </thead>
          <tbody>
            <tr><td>月</td><td>10:00–19:00（13:30–14:30 休憩）</td><td>18:30</td><td>通常診療／小手術可</td></tr>
            <tr><td>火</td><td>10:00–19:00（13:30–14:30 休憩）</td><td>18:30</td><td>通常診療</td></tr>
            <tr><td>水</td><td>10:00–19:00（13:30–14:30 休憩）</td><td>18:30</td><td>手術枠多め（ご予約優先）</td></tr>
            <tr><td>木</td><td>10:00–19:00（13:30–14:30 休憩）</td><td>18:30</td><td>通常診療</td></tr>
            <tr><td>金</td><td>10:00–19:00（13:30–14:30 休憩）</td><td>18:30</td><td>通常診療／小手術可</td></tr>
            <tr><td>土</td><td>10:00–18:00（13:30–14:30 休憩）</td><td>17:30</td><td>混雑しやすい日程</td></tr>
            <tr><td>日・祝</td><td>休診</td><td>—</td><td>連休中は臨時開院する場合あり</td></tr>
          </tbody>
        </table>
      </div>
      <ul style="margin-top:12px">
        <li>最終受付はメニューにより異なります（レーザー等は30〜60分前）。</li>
        <li>手術日は一般診療枠が少なくなる場合があります。</li>
        <li>学会・研修等による<strong>臨時休診</strong>は <a href="<?php echo esc_url( home_url('/news') ); ?>">お知らせ</a> で随時ご案内します。</li>
      </ul>
    </section>

    <section class="section">
      <h2>お支払い・キャンセル</h2>
      <ul class="list-check">
        <li>現金／各種クレジットカード／QR決済 対応</li>
        <li>医療ローン：事前審査が必要です</li>
        <li>キャンセルポリシー：前日18時以降のキャンセルはキャンセル料が発生する場合があります</li>
      </ul>
      <p class="small muted">※ 自由診療のため保険適用外です。価格は税込表記。</p>
    </section>

    <section class="section">
      <h2>プライバシー・感染対策</h2>
      <p>
        予約間隔の調整・器具のディスポ化・手術室の陰圧管理など、ガイドラインに準拠した衛生環境を維持しています。
        個人情報は院内規程に基づき厳重に管理し、目的外利用は行いません。
      </p>
    </section>
  </div>
</main>
<?php get_footer();
