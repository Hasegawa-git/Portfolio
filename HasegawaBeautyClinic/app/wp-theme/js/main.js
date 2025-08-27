// 絞り込み（施術・症例 共通）
// .filters 内の .chip[data-filter] をクリック → .card-grid 内の .card を data-cats で判定して表示/非表示
document.addEventListener('DOMContentLoaded', function () {
  function setupFilter(sectionSelector) {
    const section = document.querySelector(sectionSelector);
    if (!section) return;

    const filters = section.querySelector('.filters');
    const buttons = filters ? Array.from(filters.querySelectorAll('.chip[data-filter]')) : [];
    const grid = section.querySelector('.card-grid');
    const cards = grid ? Array.from(grid.querySelectorAll('.card')) : [];

    // 何もなければ終了
    if (!filters || buttons.length === 0 || !grid || cards.length === 0) return;

    // クリック時の絞り込み
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();       // ページ遷移防止
        btn.blur();               // フォーカス外す（スクロール抑止）
        const key = btn.dataset.filter; // 'all' or 'eyes' など

        // is-active 切り替え
        buttons.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        // 表示制御
        cards.forEach(card => {
          const cats = (card.dataset.cats || '').split(' ').filter(Boolean);
          const show = (key === 'all') ? true : cats.includes(key);
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }

  // 施術一覧（archive-treatment.php）と症例一覧（archive-case.php）両対応
  setupFilter('main.page.treatments-archive'); // body 内の <main class="page treatments-archive">
  setupFilter('main.page.cases-archive');      // body 内の <main class="page cases-archive">
});