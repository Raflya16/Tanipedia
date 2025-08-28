// ===== DATA DUMMY UNTUK BERANDA =====
const featuredProducts = [
    {
        id: 1,
        name: "Tomat ceri",
        category: "sayuran",
        subCategory: "tomat",
        variety: "Tomat Ceri",
        grade: "A",
        price: 8000,
        unit: "kg",
        farmer: "Pak Joko",
        location: "Sukamakmur, Bogor",
        image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/tomatoes-1238253_960_720.jpg",
        description: "Tomat segar langsung dari kebun, cocok untuk masakan sehari-hari",
        stock: "Banyak",
        farmerRating: 4.5,
        productRating: 4.7,
        isTrending: true, // Produk terlaris
        isLocalSpecialty: false,
        detailedDescription: `
            <div class="space-y-3">
                <div>
                    <h4 class="font-semibold">Asal Produk</h4>
                    <p>Ditanam di Desa Sukamakmur, Bogor dengan teknik hidroponik modern.</p>
                </div>
            </div>
        `,
    },
    {
        id: 2,
        name: "Cabai Merah Keriting",
        category: "sayuran",
        subCategory: "cabai",
        variety: "Cabai Merah Keriting",
        grade: "B",
        price: 45000,
        unit: "kg",
        farmer: "Bu Sari",
        location: "Harjasari, Depok",
        image: "https://images.pexels.com/photos/9185580/pexels-photo-9185580.jpeg",
        description: "Cabai merah pilihan dengan tingkat kepedasan yang pas",
        stock: "Sedang",
        farmerRating: 4.3,
        productRating: 4.5,
        isTrending: true, // Produk terlaris
        isLocalSpecialty: true, // Juga unggulan lokal
        localSpecialtyBadge: "🌾 Spesial Depok",
        detailedDescription: `
            <div class="space-y-3">
                <div>
                    <h4 class="font-semibold">Asal Produk</h4>
                    <p>Ditanam secara organik di Desa Harjasari, Depok.</p>
                </div>
            </div>
        `
    },
    {
        id: 3,
        name: "Bayam Hijau",
        category: "sayuran",
        subCategory: "bayam",
        variety: "Bayam Hijau",
        grade: "A",
        price: 5000,
        unit: "ikat",
        farmer: "Pak Budi",
        location: "Mekarjaya, Bekasi",
        image: "https://images.pexels.com/photos/28797268/pexels-photo-28797268.jpeg",
        description: "Bayam segar kaya nutrisi",
        stock: "Banyak",
        farmerRating: 4.2,
        productRating: 4.4,
        isTrending: false,
        isLocalSpecialty: true, // Unggulan lokal
        localSpecialtyBadge: "🌾 Spesial Bekasi"
    },
    {
        id: 4,
        name: "Pisang Cavendish",
        category: "buah",
        subCategory: "pisang",
        variety: "Pisang Cavendish",
        grade: "A",
        price: 15000,
        unit: "sisir",
        farmer: "Pak Dedi",
        location: "Mekarjaya, Bogor",
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e",
        description: "Pisang manis dan segar",
        stock: "Banyak",
        farmerRating: 4.4,
        productRating: 4.6,
        isTrending: true, // Produk terlaris
        isLocalSpecialty: true, // Juga unggulan lokal
        localSpecialtyBadge: "🌾 Spesial Bogor"
    },
    {
        id: 5,
        name: "Mangga gedong gincu",
        category: "buah",
        subCategory: "mangga",
        variety: "Mangga Gedong Gincu",
        grade: "B",
        price: 18000,
        unit: "kg",
        farmer: "Pak Hasan",
        location: "Singosari, Indramayu",
        image: "https://images.unsplash.com/photo-1553279768-865429fa0078",
        description: "Mangga gedong manis dan harum khas Indonesia",
        stock: "Sedikit",
        farmerRating: 4.6,
        productRating: 4.8,
        isTrending: false,
        isLocalSpecialty: true, // Unggulan lokal
        localSpecialtyBadge: "🌾 Spesial Indramayu"
    },
    {
        id: 6,
        name: "Beras pandan",
        category: "biji",
        subCategory: "beras",
        variety: "Beras Pandan Wangi",
        grade: "A",
        price: 12000,
        unit: "kg",
        farmer: "Pak Sutrisno",
        location: "Batu, Karawang",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
        description: "Beras putih berkualitas premium dari sawah lokal",
        stock: "Banyak",
        farmerRating: 4.7,
        productRating: 4.9,
        isTrending: true, // Produk terlaris
        isLocalSpecialty: false
    }
];

const newProducts = [
    {
        id: 7,
        name: "Jeruk",
        category: "buah",
        subCategory: "jeruk",
        variety: "Jeruk Mandarin",
        price: 22000,
        unit: "kg",
        farmer: "Bu Rina",
        location: "Sukamakmur, Bogor",
        image: "https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg",
        description: "Jeruk mandarin manis dengan kandungan vitamin C tinggi",
        stock: "Sedang",
        farmerRating: 4.5,
        productRating: 4.7,
        isNew: true
    },
    {
        id: 8,
        name: "Wortel",
        category: "sayuran",
        subCategory: "wortel",
        variety: "Wortel Baby",
        price: 10000,
        unit: "kg",
        farmer: "Pak Heru",
        location: "Harjasari, Depok",
        image: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg",
        description: "Wortel baby organik dengan tekstur renyah dan manis",
        stock: "Banyak",
        farmerRating: 4.3,
        productRating: 4.5,
        isNew: true
    }
];

const farmerStories = [
    {
        id: 1,
        name: "Tomat Ceri Organik",
        location: "Sukamakmur, Bogor",
        story: "Tomat ceri kami ditanam dengan teknik hidroponik modern, menghasilkan tomat dengan kadar air tinggi dan rasa yang segar.",
        products: ["Tomat Ceri", "Cabai Rawit"],
        farmerRating: 4.5,
        image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/tomatoes-1238253_960_720.jpg",
        isLocalSpecialty: true,
        localSpecialtyBadge: "🌾 Unggulan Bogor"
    },
    {
        id: 2,
        name: "Cabai Merah Keriting",
        location: "Harjasari, Depok",
        story: "Cabai merah keriting kami dibudidayakan secara organik dengan sistem tumpang sari bersama tanaman herbal.",
        products: ["Cabai Merah Keriting", "Cabai Rawit"],
        farmerRating: 4.7,
        image: "https://images.pexels.com/photos/9185580/pexels-photo-9185580.jpeg",
        isLocalSpecialty: true,
        localSpecialtyBadge: "🌾 Unggulan Depok"
    },
    {
        id: 3,
        name: "Pisang Cavendish Premium",
        location: "Mekarjaya, Bogor",
        story: "Pisang Cavendish kami ditanam dengan sistem intensif menggunakan mulsa plastik dan irigasi tetes.",
        products: ["Pisang Cavendish", "Pisang Raja"],
        farmerRating: 4.6,
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e",
        isLocalSpecialty: true,
        localSpecialtyBadge: "🌾 Unggulan Bogor"
    }
];

// ===== FUNGSI UTILITAS =====
function formatPrice(price) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(price);
}

function getStockBadge(stock) {
    const badges = {
        'Banyak': '<span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Stok Banyak</span>',
        'Sedang': '<span class="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Stok Sedang</span>',
        'Sedikit': '<span class="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Stok Sedikit</span>'
    };
    return badges[stock] || badges['Banyak'];
}

function renderRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    
    return stars;
}

// Fungsi untuk menghitung produk per kategori
function countProductsByCategory() {
    const categories = {
        'buah': 0,
        'sayuran': 0,
        'rempah': 0,
        'biji': 0,
        'limbah': 0
    };

    // Hitung produk dari data produk.js
    if (window.products) {
        window.products.forEach(product => {
            if (categories.hasOwnProperty(product.category)) {
                categories[product.category]++;
            }
        });
    }

    // Hitung produk dari data beranda.js (featuredProducts)
    featuredProducts.forEach(product => {
        if (categories.hasOwnProperty(product.category)) {
            categories[product.category]++;
        }
    });

    // Update tampilan
    for (const category in categories) {
        const element = document.getElementById(`${category}-count`);
        if (element) {
            element.textContent = categories[category];
        }
    }
}

function renderNewProducts() {
    const container = document.getElementById('new-products');
    if (!container) return;
    
    container.innerHTML = newProducts.map(product => `
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 product-card">
            <div class="relative h-40 overflow-hidden">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
                <div class="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    ${formatPrice(product.price)}/${product.unit}
                </div>
                <div class="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    <i class="fas fa-certificate mr-1"></i>Baru
                </div>
            </div>
            <div class="p-3">
                <h3 class="text-md font-bold mb-1 truncate">${product.name}</h3>
                <p class="text-gray-600 text-xs mb-2 truncate">${product.variety || ''}</p>
                <div class="flex justify-between text-xs text-gray-500 mb-1">
                    <span><i class="fas fa-map-marker-alt mr-1"></i>${product.location.split(',')[0]}</span>
                    ${getStockBadge(product.stock)}
                </div>
                <div class="flex justify-between items-center mt-2">
                    <div class="text-yellow-500 text-xs">
                        ${renderRating(product.productRating)} ${product.productRating.toFixed(1)}
                    </div>
                    <div class="flex gap-1">
                        <button class="text-green-600 hover:text-green-800 text-xs font-medium view-detail-btn" data-product-id="${product.id}">
                            <i class="fas fa-info-circle"></i>
                        </button>
                        <button class="text-green-600 hover:text-green-800 text-xs font-medium add-to-cart-btn" data-product-id="${product.id}">
                            <i class="fas fa-cart-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== RENDER FUNCTIONS =====
function renderTrendingProducts() {
    const container = document.getElementById('trending-products');
    if (!container) return;
    
    // Filter hanya produk trending
    const trendingToShow = featuredProducts.filter(p => p.isTrending).slice(0, 6);
    
    container.innerHTML = trendingToShow.map(product => `
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 product-card">
            <div class="relative h-40 overflow-hidden">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
                <div class="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    ${formatPrice(product.price)}/${product.unit}
                </div>
                <div class="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    <i class="fas fa-fire mr-1"></i>Terlaris
                </div>
                ${product.isLocalSpecialty ? `
                <div class="absolute bottom-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    ${product.localSpecialtyBadge || '🌾 Lokal'}
                </div>
                ` : ''}
            </div>
            <div class="p-3">
                <h3 class="text-md font-bold mb-1 truncate">${product.name}</h3>
                <p class="text-gray-600 text-xs mb-2 truncate">${product.variety || ''}</p>
                <div class="flex justify-between text-xs text-gray-500 mb-1">
                    <span><i class="fas fa-map-marker-alt mr-1"></i>${product.location.split(',')[0]}</span>
                    ${getStockBadge(product.stock)}
                </div>
                <div class="flex justify-between items-center mt-2">
                    <div class="text-yellow-500 text-xs">
                        ${renderRating(product.productRating)} ${product.productRating.toFixed(1)}
                    </div>
                    <div class="flex gap-1">
                        <button class="text-green-600 hover:text-green-800 text-xs font-medium view-detail-btn" data-product-id="${product.id}">
                            <i class="fas fa-info-circle"></i>
                        </button>
                        <button class="text-green-600 hover:text-green-800 text-xs font-medium add-to-cart-btn" data-product-id="${product.id}">
                            <i class="fas fa-cart-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function renderLocalSpecialties() {
    const container = document.getElementById('farmer-stories');
    if (!container) return;
    
    container.innerHTML = farmerStories.map(story => `
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 farmer-card border-2 border-transparent hover:border-green-500">
            <div class="relative h-48 bg-green-100 flex items-center justify-center overflow-hidden">
                <img src="${story.image}" alt="${story.name}" class="w-full h-full object-cover">
                <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>
                <div class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                    <div class="flex justify-between items-end">
                        <div>
                            <h3 class="text-xl font-bold text-white">${story.name}</h3>
                            <p class="text-green-200 text-sm">
                                <i class="fas fa-map-marker-alt mr-1"></i>${story.location}
                            </p>
                        </div>
                        <span class="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                            ${story.localSpecialtyBadge || '🌾 Unggulan Lokal'}
                        </span>
                    </div>
                </div>
            </div>
            <div class="p-6">
                <div class="flex justify-center items-center text-yellow-500 mb-3">
                    ${renderRating(story.farmerRating)} ${story.farmerRating.toFixed(1)}
                </div>
                <p class="text-gray-600 text-sm mb-4 line-clamp-4">"${story.story}"</p>
                <div class="mb-4">
                    <p class="text-xs text-gray-500">Produk terkait:</p>
                    <div class="flex flex-wrap gap-1 mt-1">
                        ${story.products.map(product => `
                            <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">${product}</span>
                        `).join('')}
                    </div>
                </div>
                <button class="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg contact-farmer-btn" data-farmer="${story.name}">
                    <i class="fas fa-shopping-cart mr-2"></i>Beli Produk Ini
                </button>
            </div>
        </div>
    `).join('');
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', function() {
    renderTrendingProducts();
    renderLocalSpecialties();
    renderNewProducts();
    countProductsByCategory();
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Event listeners lainnya tetap sama
    document.addEventListener('click', (e) => {
        const detailBtn = e.target.closest('.view-detail-btn');
        if (detailBtn) {
            const productId = detailBtn.dataset.productId;
            const product = [...featuredProducts, ...newProducts].find(p => p.id == productId);
            
            if (product) {
                showProductDetail(product);
            }
        }
    });

        // ===== EVENT LISTENERS KHUSUS BERANDA =====
    document.addEventListener('DOMContentLoaded', function() {
        // Render konten awal
        renderFeaturedProducts();
        renderTrendingProducts();
        renderNewProducts();
        renderFarmerStories();
        countProductsByCategory();
        
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
        
        // View detail buttons
        document.addEventListener('click', (e) => {
            const detailBtn = e.target.closest('.view-detail-btn');
            if (detailBtn) {
                const productId = detailBtn.dataset.productId;
                const product = [...featuredProducts, ...newProducts].find(p => p.id == productId);
                
                if (product) {
                    showProductDetail(product);
                }
            }
        });
        
        // Contact farmer buttons
        document.addEventListener('click', (e) => {
            const contactBtn = e.target.closest('.contact-farmer-btn');
            if (contactBtn) {
                const farmerName = contactBtn.dataset.farmer;
                showNotification(`Menghubungi ${farmerName}... Anda akan dialihkan ke WhatsApp.`);
                
                setTimeout(() => {
                    window.open('https://wa.me/6282112345678?text=Halo, saya tertarik dengan produk dari ' + farmerName, '_blank');
                }, 1000);
            }
        });
        
        // Add to cart buttons
        document.addEventListener('click', (e) => {
            const cartBtn = e.target.closest('.add-to-cart-btn');
            if (cartBtn) {
                const productId = cartBtn.dataset.productId;
                const product = [...featuredProducts, ...newProducts].find(p => p.id == productId);
                
                if (product) {
                    showNotification(`${product.name} ditambahkan ke daftar minat!`);
                }
            }
        });
        
        // Newsletter form submission
        const newsletterForm = document.querySelector('.newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const emailInput = newsletterForm.querySelector('input[type="email"]');
                if (emailInput && emailInput.value) {
                    showNotification('Terima kasih telah berlangganan newsletter kami!');
                    emailInput.value = '';
                }
            });
        }
    });
});