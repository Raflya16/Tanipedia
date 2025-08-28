// ===== NOTIFICATION FUNCTION =====
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notification-text');
    
    if (!notification || !notificationText) return;
    
    notificationText.textContent = message;
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg transform transition-transform duration-300 z-50 ${type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`;
    
    notification.style.transform = 'translateX(0)';
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
    }, 3000);
}

// ===== SOCIAL MEDIA VALIDATION =====
function validateSocialMediaLinks() {
    const socialLinks = [
        {
            element: document.querySelector('.fa-facebook-f')?.closest('a'),
            url: 'https://facebook.com/TaniPediaOfficial',
            platform: 'Facebook'
        },
        {
            element: document.querySelector('.fa-instagram')?.closest('a'),
            url: 'https://instagram.com/TaniPediaOfficial',
            platform: 'Instagram'
        },
        {
            element: document.querySelector('.fa-whatsapp')?.closest('a'),
            url: 'https://wa.me/6282112345678',
            platform: 'WhatsApp'
        }
    ];

    socialLinks.forEach(link => {
        if (link.element) {
            link.element.addEventListener('click', (e) => {
                e.preventDefault();
                showNotification(`Mengarahkan Anda ke ${link.platform} TaniPedia...`);
                
                // Open social media link after a short delay
                setTimeout(() => {
                    window.open(link.url, '_blank');
                }, 1000);
            });
        }
    });
}

// ===== CONTACT FORM HANDLER =====
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('contact-message').value;
        
        if (name && email && message) {
            showNotification('Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.');
            contactForm.reset();
        } else {
            showNotification('Mohon lengkapi semua field!', 'error');
        }
    });
}

// ===== MOBILE MENU TOGGLE =====
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// ===== INITIALIZE PAGE =====
document.addEventListener('DOMContentLoaded', function() {
    setupMobileMenu();
    validateSocialMediaLinks();
    setupContactForm();
});