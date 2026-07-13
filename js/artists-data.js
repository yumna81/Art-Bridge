

const ARTISTS = [
  { id: 'ayu', name: 'Ayu Sketch', role: 'Sketch Artist', city: 'Jakarta', category: 'Traditional', rating: 4.9, count: 120, price: 150000, img: 'https://picsum.photos/seed/ayu/400/300' },
  { id: 'dindo', name: 'Dindo Watercolor', role: 'Watercolor Artist', city: 'Bandung', category: 'Traditional', rating: 4.8, count: 98, price: 250000, img: 'https://picsum.photos/seed/dindo/400/300' },
  { id: 'miko', name: 'Miko Art', role: 'Digital Artist', city: 'Surabaya', category: 'Digital', rating: 4.8, count: 154, price: 180000, img: 'https://picsum.photos/seed/miko/400/300' },
  { id: 'nadia', name: 'Nadia Craft', role: 'Craft Artist', city: 'Yogyakarta', category: 'Craft', rating: 4.9, count: 76, price: 120000, img: 'https://picsum.photos/seed/nadia/400/300' },
  { id: 'rousen', name: 'Rousen Dell', role: 'Portrait Artist', city: 'Semarang', category: 'Traditional', rating: 4.7, count: 64, price: 210000, img: 'https://picsum.photos/seed/rousen/400/300' },
  { id: 'kortino', name: 'Kortino Flow', role: 'Digital Illustrator', city: 'Malang', category: 'Digital', rating: 4.9, count: 142, price: 300000, img: 'https://picsum.photos/seed/kortino/400/300' },
  { id: 'candiline', name: 'Candiline Vox', role: 'Mixed Media Artist', city: 'Bali', category: 'Craft', rating: 4.6, count: 51, price: 275000, img: 'https://picsum.photos/seed/candiline/400/300' },
  { id: 'desi', name: 'Desi Widya', role: 'Pencil Artist', city: 'Solo', category: 'Traditional', rating: 4.8, count: 89, price: 130000, img: 'https://picsum.photos/seed/desi/400/300' },
  { id: 'bram', name: 'Bram Kanvas', role: 'Digital Artist', city: 'Medan', category: 'Digital', rating: 4.7, count: 103, price: 220000, img: 'https://picsum.photos/seed/bram/400/300' },
];

function formatRupiah(n) {
  return 'Rp' + n.toLocaleString('id-ID');
}

function renderArtistCard(a) {
  return `
  <a href="artist.html?id=${a.id}" class="card artist-card">
    <img src="${a.img}" alt="Portofolio ${a.name}">
    <div class="info">
      <h4>${a.name}</h4>
      <p class="tag-role">${a.role} · ${a.city}</p>
      <p class="rating">&#11088; ${a.rating.toFixed(1)} <span class="count">(${a.count} order)</span></p>
      <p class="price">Start from ${formatRupiah(a.price)}</p>
    </div>
  </a>`;
}

function getArtistById(id) {
  return ARTISTS.find(a => a.id === id);
}
