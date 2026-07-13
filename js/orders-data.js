
const ORDER_STATUSES = {
  progress: { label: 'In Progress', badge: 'badge-progress' },
  revision: { label: 'Revision', badge: 'badge-review' },
  cancelled: { label: 'Cancelled', badge: 'badge-cancel' },
  done: { label: 'Done', badge: 'badge-done' },
};

const SEED_ORDERS = [
  { id: 'o1', title: 'Pencil Art A4', artist: 'Desi Widya', artistId: 'desi', date: '2026-06-03', price: 350000, progress: 70, status: 'progress', img: 'https://picsum.photos/seed/desi/200/200' },
  { id: 'o2', title: 'Eye Drawing', artist: 'Rousen Dell', artistId: 'rousen', date: '2026-05-07', price: 480000, progress: 30, status: 'revision', img: 'https://picsum.photos/seed/rousen/200/200' },
  { id: 'o3', title: 'Brimingham Museum', artist: 'Kortino Flow', artistId: 'kortino', date: '2026-05-19', price: 790000, progress: 100, status: 'done', img: 'https://picsum.photos/seed/kortino/200/200' },
  { id: 'o4', title: 'Europeana', artist: 'Candiline Vox', artistId: 'candiline', date: '2026-07-18', price: 500000, progress: 15, status: 'progress', img: 'https://picsum.photos/seed/candiline/200/200' },
];

function getStoredOrders() {
  try {
    return JSON.parse(localStorage.getItem('artbridge_orders') || '[]');
  } catch (e) {
    return [];
  }
}

function saveStoredOrder(order) {
  const current = getStoredOrders();
  current.unshift(order);
  localStorage.setItem('artbridge_orders', JSON.stringify(current));
}

function getAllOrders() {
  return [...getStoredOrders(), ...SEED_ORDERS];
}

function formatOrderDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

function renderOrderCard(o) {
  const status = ORDER_STATUSES[o.status];
  return `
  <div class="order-card">
    <img src="${o.img}" alt="${o.title}" class="order-thumb">
    <div class="order-main">
      <div class="order-top-row">
        <div>
          <h4>${o.title}</h4>
          <p class="order-artist">${o.artist}</p>
        </div>
        <div class="order-date">${formatOrderDate(o.date)}</div>
      </div>
      <div class="order-bottom-row">
        <span class="badge ${status.badge}">${status.label}</span>
        <span class="order-price">${formatRupiah(o.price)}</span>
      </div>
      <div class="order-progress">
        <div class="order-progress-bar status-${o.status}" style="width:${o.progress}%;"></div>
      </div>
      <div class="order-progress-label">${o.progress}%</div>
    </div>
  </div>`;
}
