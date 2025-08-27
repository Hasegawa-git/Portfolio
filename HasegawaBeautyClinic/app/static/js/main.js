// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('global-nav');
const overlay = document.querySelector('.overlay');
if (navToggle && nav) {
  function closeNav(){ nav.classList.remove('open'); overlay.setAttribute('hidden', ''); navToggle.setAttribute('aria-expanded','false'); }
  function openNav(){ nav.classList.add('open'); overlay.removeAttribute('hidden'); navToggle.setAttribute('aria-expanded','true'); }
  navToggle.addEventListener('click', () => {
    nav.classList.contains('open') ? closeNav() : openNav();
  });
  overlay.addEventListener('click', closeNav);
}

// Treatments / Cases filter chips
function bindFilters(gridId){
  const grid = document.getElementById(gridId);
  if(!grid) return;
  const chips = document.querySelectorAll('.filters .chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c=>c.classList.remove('is-active'));
      chip.classList.add('is-active');
      const f = chip.dataset.filter;
      grid.querySelectorAll('[data-cat]').forEach(card => {
        card.style.display = (f === 'all' || card.dataset.cat === f) ? '' : 'none';
      });
    });
  });
}
bindFilters('treatment-grid');
bindFilters('case-grid');

// Before/After compare slider
const range = document.querySelector('.compare-range');
const afterWrap = document.querySelector('.after-wrap');
if(range && afterWrap){
  const updateMask = () => {
    const v = range.value; // 0-100
    afterWrap.style.clipPath = `inset(0 0 0 ${v}%)`;
  };
  range.addEventListener('input', updateMask);
  updateMask();
}
