// ===== DATA EDUKASI =====
const educationContent = {
    "cara-memesan": {
        title: "Cara Memesan dari Petani",
        icon: "fas fa-handshake text-blue-600",
        bgColor: "bg-blue-50",
        content: `
            <div class="space-y-4">
                <h3 class="text-lg font-semibold text-green-600">Langkah-langkah Memesan:</h3>
                <ol class="space-y-3">
                    <li class="flex items-start">
                        <span class="flex items-center justify-center bg-green-100 text-green-600 rounded-full w-6 h-6 mr-3 flex-shrink-0">1</span>
                        <span>Pilih produk yang Anda inginkan dari katalog</span>
                    </li>
                    <li class="flex items-start">
                        <span class="flex items-center justify-center bg-green-100 text-green-600 rounded-full w-6 h-6 mr-3 flex-shrink-0">2</span>
                        <span>Hubungi petani melalui kontak yang tersedia</span>
                    </li>
                    <li class="flex items-start">
                        <span class="flex items-center justify-center bg-green-100 text-green-600 rounded-full w-6 h-6 mr-3 flex-shrink-0">3</span>
                        <span>Diskusikan kuantitas, harga, dan waktu pengiriman</span>
                    </li>
                    <li class="flex items-start">
                        <span class="flex items-center justify-center bg-green-100 text-green-600 rounded-full w-6 h-6 mr-3 flex-shrink-0">4</span>
                        <span>Lakukan kesepakatan pembayaran</span>
                    </li>
                    <li class="flex items-start">
                        <span class="flex items-center justify-center bg-green-100 text-green-600 rounded-full w-6 h-6 mr-3 flex-shrink-0">5</span>
                        <span>Tunggu produk segar sampai di tempat Anda</span>
                    </li>
                </ol>
                <div class="p-4 bg-green-50 rounded-lg border border-green-100 mt-6">
                    <p class="font-medium text-green-700"><span class="font-bold">Tips:</span> Pesan dalam jumlah yang sesuai dengan kebutuhan untuk menjaga kesegaran produk.</p>
                </div>
            </div>
        `
    },
    "tips-harga": {
        title: "Tips Tawar Harga yang Baik",
        icon: "fas fa-chart-line text-green-600",
        bgColor: "bg-green-50",
        content: `
            <div class="space-y-4">
                <h3 class="text-lg font-semibold text-green-600">Strategi Negosiasi yang Win-Win:</h3>
                <ul class="space-y-3">
                    <li class="flex items-start">
                        <i class="fas fa-check-circle text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                        <span>Pahami harga pasar terkini</span>
                    </li>
                    <li class="flex items-start">
                        <i class="fas fa-check-circle text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                        <span>Pertimbangkan kualitas dan kesegaran produk</span>
                    </li>
                    <li class="flex items-start">
                        <i class="fas fa-check-circle text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                        <span>Tawarkan pembelian dalam jumlah besar untuk harga lebih baik</span>
                    </li>
                    <li class="flex items-start">
                        <i class="fas fa-check-circle text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                        <span>Bangun hubungan jangka panjang dengan petani</span>
                    </li>
                    <li class="flex items-start">
                        <i class="fas fa-check-circle text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                        <span>Berikan pembayaran tepat waktu</span>
                    </li>
                </ul>
                <div class="p-4 bg-yellow-50 rounded-lg border border-yellow-100 mt-6">
                    <p class="font-medium text-yellow-700"><span class="font-bold">Ingat:</span> Harga yang adil menguntungkan kedua belah pihak.</p>
                </div>
            </div>
        `
    },
    "pengiriman": {
        title: "Manajemen Pengiriman",
        icon: "fas fa-truck text-yellow-600",
        bgColor: "bg-yellow-50",
        content: `
            <div class="space-y-4">
                <h3 class="text-lg font-semibold text-green-600">Tips Pengiriman dan Penyimpanan:</h3>
                <ul class="space-y-3">
                    <li class="flex items-start">
                        <i class="fas fa-truck-moving text-blue-500 mt-1 mr-3 flex-shrink-0"></i>
                        <span>Koordinasikan jadwal pengiriman dengan petani</span>
                    </li>
                    <li class="flex items-start">
                        <i class="fas fa-box-open text-blue-500 mt-1 mr-3 flex-shrink-0"></i>
                        <span>Pastikan kemasan yang tepat untuk setiap jenis produk</span>
                    </li>
                    <li class="flex items-start">
                        <i class="fas fa-temperature-low text-blue-500 mt-1 mr-3 flex-shrink-0"></i>
                        <span>Atur suhu penyimpanan yang sesuai</span>
                    </li>
                    <li class="flex items-start">
                        <i class="fas fa-exchange-alt text-blue-500 mt-1 mr-3 flex-shrink-0"></i>
                        <span>Lakukan rotasi stok (FIFO - First In First Out)</span>
                    </li>
                    <li class="flex items-start">
                        <i class="fas fa-clipboard-check text-blue-500 mt-1 mr-3 flex-shrink-0"></i>
                        <span>Periksa kualitas produk saat diterima</span>
                    </li>
                </ul>
                <div class="p-4 bg-blue-50 rounded-lg border border-blue-100 mt-6">
                    <p class="font-medium text-blue-700"><span class="font-bold">Pro tip:</span> Komunikasi yang baik adalah kunci sukses pengiriman.</p>
                </div>
            </div>
        `
    }
};

// ===== FUNGSI UTILITAS =====
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notification-text');
    
    if (!notification || !notificationText) return;
    
    notificationText.textContent = message;
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg transform transition-transform duration-300 z-50 flex items-center ${
        type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
    }`;
    
    notification.classList.remove('translate-x-full', 'opacity-0');
    notification.classList.add('translate-x-0', 'opacity-100');
    
    setTimeout(() => {
        notification.classList.add('translate-x-full', 'opacity-0');
        notification.classList.remove('translate-x-0', 'opacity-100');
    }, 3000);
}

function createModal(content) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 transition-opacity duration-300 opacity-0';
    modal.innerHTML = `
        <div class="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-xl transform transition-all duration-300 scale-95">
            <div class="p-6">
                <div class="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
                    <div class="flex items-center space-x-3">
                        <div class="${content.bgColor} w-10 h-10 rounded-lg flex items-center justify-center">
                            <i class="${content.icon} text-lg"></i>
                        </div>
                        <h2 class="text-2xl font-bold text-gray-800">${content.title}</h2>
                    </div>
                    <button class="text-gray-400 hover:text-gray-600 text-2xl close-modal-btn transition-colors focus:outline-none">
                        &times;
                    </button>
                </div>
                <div class="prose text-gray-600 modal-content">
                    ${content.content}
                </div>
                <div class="mt-6 pt-4 border-t border-gray-100 flex justify-end">
                    <button class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium close-modal-btn transition-colors focus:outline-none">
                        Tutup
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.classList.add('overflow-hidden');
    
    // Trigger animation
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modal.querySelector('div').classList.remove('scale-95');
    }, 10);
    
    // Close handlers
    const closeModal = () => {
        modal.classList.add('opacity-0');
        modal.querySelector('div').classList.add('scale-95');
        
        setTimeout(() => {
            document.body.removeChild(modal);
            document.body.classList.remove('overflow-hidden');
        }, 300);
    };
    
    modal.querySelectorAll('.close-modal-btn').forEach(btn => {
        btn.addEventListener('click', closeModal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    return modal;
}

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
            mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
        });
    }
    
    // Education buttons
    const educationBtns = document.querySelectorAll('.education-btn');
    educationBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const topic = btn.dataset.topic;
            const content = educationContent[topic];
            
            if (content) {
                createModal(content);
                showNotification(`Membuka panduan: ${content.title}`);
            }
        });
    });
    
    // Keyboard accessibility for cards
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const btn = card.querySelector('.education-btn');
                if (btn) btn.click();
            }
        });
        
        // Make cards focusable
        card.setAttribute('tabindex', '0');
    });
});