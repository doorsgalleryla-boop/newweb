let products = [];
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

const collectionDetails = {
  'Basic Collection': {
    configuration: 'Swing, double swing, pocket, or barn door configuration.',
    included: ['Door slab', 'Jamb', 'Extensions', 'Casing / moldings', 'Butterfly hinges - any color', 'European magnetic lock', '15+ handle styles', 'Privacy or keyed options'],
    note: 'Standard height: 80 inches. Recommended rough opening: add 1.5–2 inches to width and height.'
  },
  'Custom Door Collection': {
    configuration: 'Custom swing door with concealed hinges and optional finish details.',
    included: ['Door slab', 'Jamb', 'Casing / moldings', 'Concealed hinges - any color', 'European magnetic lock', '15+ handle styles', 'Privacy or keyed options'],
    note: 'Standard widths: 24, 28, 30, 32, and 36 inches. Metal strips +$100; black or white glass +$150. Recommended rough opening: add 2 inches.'
  },
  'Frameless Door Collection': {
    configuration: 'Frameless swing or double-swing door with concealed hinges.',
    included: ['Door slab', 'Jamb', 'Concealed black hinges', 'European magnetic lock', '15+ handle styles', 'Privacy or keyed options'],
    note: 'Standard widths: 28, 30, 32, and 36 inches. Standard height: 80 inches. Recommended rough opening: add 2 inches.'
  }
};

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[character]));
}

function priceMarkup(product, className = 'card-price') {
  if (product.regularPrice) {
    return `<p class="${className} sale-price"><s>$${Number(product.regularPrice).toLocaleString()}</s><strong>${escapeHtml(product.priceLabel)}</strong></p>`;
  }
  return `<p class="${className}">${escapeHtml(product.priceLabel)}</p>`;
}

async function loadProducts() {
  if (products.length) return products;
  try {
    const response = await fetch('products.json', {cache: 'no-store'});
    if (!response.ok) throw new Error('Catalog could not be loaded');
    products = await response.json();
  } catch (error) {
    console.error(error);
  }
  return products;
}

function productCard(product) {
  const name = escapeHtml(product.name);
  const saleClass = product.regularPrice ? ' is-sale' : '';
  return `<article class="product-card${saleClass}">
    <a class="product-image" href="product.html?id=${encodeURIComponent(product.id)}" aria-label="View ${name}">
      <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.model)} ${name} interior door" width="1000" height="1200" loading="lazy">
      <span>${escapeHtml(product.availability)}</span>
    </a>
    <div class="product-card-body">
      <div class="card-title-row"><div><p class="model-code">${escapeHtml(product.model)}</p><h3>${name}</h3></div>${priceMarkup(product)}</div>
      <p class="card-description">${escapeHtml(product.description)}</p>
      <div class="card-footer"><span>${escapeHtml(product.color)}</span><a href="product.html?id=${encodeURIComponent(product.id)}">View details <span aria-hidden="true">→</span></a></div>
    </div>
  </article>`;
}

async function renderFeatured() {
  const target = $('[data-featured-products]');
  if (!target) return;
  await loadProducts();
  target.innerHTML = products.filter(product => ['Basic Collection', 'Frameless Door Collection', 'Custom Door Collection'].includes(product.collection)).slice(0, 3).map(productCard).join('');
}

function uniqueValues(key) {
  return [...new Set(products.map(product => product[key]).filter(Boolean))].sort((a, b) => String(a).localeCompare(String(b), undefined, {numeric: true}));
}

async function setupCatalog() {
  const grid = $('[data-products-grid]');
  if (!grid) return;
  await loadProducts();
  if (!products.length) {
    grid.innerHTML = '<p class="empty-state">The door catalog could not be loaded. Please refresh the page or contact us for pricing.</p>';
    return;
  }

  const filters = $$('[data-filter]');
  const search = $('[data-door-search]');
  const collectionSelect = $('[data-filter="collection"]');
  const count = $('[data-result-count]');
  const activeCollection = $('[data-active-collection]');
  const optionMap = {collection: uniqueValues('collection'), model: uniqueValues('model'), color: uniqueValues('color')};

  filters.forEach(select => {
    const values = optionMap[select.dataset.filter];
    if (values) values.forEach(value => select.insertAdjacentHTML('beforeend', `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`));
    select.addEventListener('change', render);
  });
  const requestedCollection = new URLSearchParams(location.search).get('collection');
  if (requestedCollection && collectionSelect && optionMap.collection.includes(requestedCollection)) collectionSelect.value = requestedCollection;
  search?.addEventListener('input', render);

  function reset() {
    filters.forEach(select => { select.value = ''; });
    if (search) search.value = '';
    render();
  }

  $('[data-reset-filters]')?.addEventListener('click', reset);
  $$('[data-collection-jump]').forEach(button => button.addEventListener('click', () => {
    if (collectionSelect) collectionSelect.value = button.dataset.collectionJump;
    render();
    $('#catalog')?.scrollIntoView({behavior: 'smooth', block: 'start'});
  }));

  $('[data-filter-toggle]')?.addEventListener('click', event => {
    const panel = $('[data-filter-panel]');
    const isOpen = panel?.classList.toggle('open');
    event.currentTarget.setAttribute('aria-expanded', String(Boolean(isOpen)));
  });

  function render() {
    const active = Object.fromEntries(filters.map(select => [select.dataset.filter, select.value]));
    const query = (search?.value || '').trim().toLowerCase();
    const visible = products.filter(product => {
      const searchable = `${product.model} ${product.name} ${product.color} ${product.collection}`.toLowerCase();
      let priceOk = true;
      if (active.price) {
        const [minimum, maximum] = active.price.split('-').map(Number);
        priceOk = product.price >= minimum && product.price < maximum;
      }
      return (!query || searchable.includes(query)) && (!active.collection || product.collection === active.collection) && (!active.model || product.model === active.model) && (!active.color || product.color === active.color) && priceOk;
    });
    grid.innerHTML = visible.length ? visible.map(productCard).join('') : '<p class="empty-state">No doors match those filters. Try another model, finish, or price.</p>';
    if (count) count.textContent = visible.length;
    if (activeCollection) activeCollection.textContent = active.collection || 'All collections';
  }
  render();
}

async function renderDetail() {
  const target = $('[data-product-detail]');
  if (!target) return;
  await loadProducts();
  const id = new URLSearchParams(location.search).get('id');
  const product = products.find(item => item.id === id) || products[0];
  if (!product) {
    target.innerHTML = '<p class="empty-state">Product catalog is unavailable.</p>';
    return;
  }
  const details = collectionDetails[product.collection];
  document.title = `${product.model} ${product.name} | Doors Gallery`;
  document.querySelector('meta[name="description"]')?.setAttribute('content', `${product.model} ${product.name}: ${product.priceLabel}. View sizes, included hardware, and request an estimate.`);
  const sizes = product.sizes.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  const included = details.included.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  target.innerHTML = `<div class="gallery-shell"><div class="main-product-image${product.regularPrice ? ' sale-image' : ''}"><img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.model)} ${escapeHtml(product.name)} interior door" width="1000" height="1200">${product.regularPrice ? '<span class="detail-sale-badge">Frameless Sale</span>' : ''}</div></div>
    <div class="detail-copy"><a class="back-link" href="products.html">← All doors</a><div class="detail-kicker"><span>${escapeHtml(product.collection)}</span><span>${escapeHtml(product.model)}</span></div><h1>${escapeHtml(product.name)}</h1><p>${escapeHtml(product.description)}</p>${priceMarkup(product, 'price')}
    <dl class="detail-list"><div><dt>Finish</dt><dd>${escapeHtml(product.color)}</dd></div><div><dt>Available sizes</dt><dd><ul class="size-price-list">${sizes}</ul></dd></div><div><dt>Configuration</dt><dd>${escapeHtml(details.configuration)}</dd></div></dl>
    <h3>Full set includes</h3><ul class="included-grid">${included}</ul><p class="catalog-note">${escapeHtml(details.note)}</p>
    <div class="button-row"><a class="btn primary" href="contact.html?model=${encodeURIComponent(`${product.model} ${product.name}`)}">Request Estimate</a><a class="btn secondary" href="products.html">View Collection</a></div></div>`;
  const modelField = $('[data-model-field]');
  if (modelField) modelField.value = `${product.model} ${product.name}`;
}

function setupForms() {
  const model = new URLSearchParams(location.search).get('model');
  $$('[name="model"]').forEach(input => { if (model && !input.value) input.value = model; });
  $$('[data-estimate-form]').forEach(form => form.addEventListener('submit', event => {
    event.preventDefault();
    const status = $('.form-status', form);
    if (status) status.textContent = 'Thank you. Please call or email Doors Gallery to complete your estimate request.';
  }));
}

function setupNav() {
  const toggle = $('.nav-toggle');
  const nav = $('.site-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

function setupCollectionAnimations() {
  const cards = $$('[data-animate-card]');
  if (!cards.length) return;
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches || typeof IntersectionObserver === 'undefined') {
    cards.forEach(card => card.classList.add('visible'));
    return;
  }
  document.body.classList.add('animations-ready');
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), {threshold: 0.18});
  cards.forEach(card => observer.observe(card));
}

renderFeatured();
setupCatalog();
renderDetail();
setupForms();
setupNav();
setupCollectionAnimations();
