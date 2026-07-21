
const search = document.querySelector('#search');
const cards = [...document.querySelectorAll('.product-card')];
const buttons = [...document.querySelectorAll('[data-category]')].filter(el => el.tagName === 'BUTTON');
const count = document.querySelector('#count');
const empty = document.querySelector('#empty');
let category = 'ทั้งหมด';
function filterProducts() {
  const query = search.value.trim(); let visible = 0;
  cards.forEach(card => { const show = (category === 'ทั้งหมด' || card.dataset.category === category) && card.dataset.search.includes(query); card.hidden = !show; if (show) visible += 1; });
  count.textContent = `${visible} รายการ`; empty.hidden = visible !== 0;
}
buttons.forEach(button => button.addEventListener('click', () => { category = button.dataset.category; buttons.forEach(item => item.classList.toggle('active', item === button)); filterProducts(); }));
search.addEventListener('input', filterProducts);
