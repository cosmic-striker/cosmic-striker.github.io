// ===== CREATIVE PORTFOLIO JAVASCRIPT =====

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add parallax effect to elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // Parallax for decorative elements
    const decorativeCircle = document.querySelector('.decorative-circle');
    if (decorativeCircle) {
        decorativeCircle.style.transform = `rotate(${scrolled * 0.1}deg)`;
    }
    
    // Fade scroll indicator on scroll
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        const opacity = Math.max(0, 1 - (scrolled / 300));
        scrollIndicator.style.opacity = opacity;
    }
});

// Add entrance animations  on load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Create floating particles dynamically
function createAdditionalParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 5 + 5) + 's';
        particle.style.animationDelay = (Math.random() * 3) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    createAdditionalParticles();
    
    // Add hover effects to contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add interactive hover to polaroid
    const polaroid = document.querySelector('.polaroid');
    if (polaroid) {
        polaroid.addEventListener('mousemove', (e) => {
            const rect = polaroid.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            polaroid.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        polaroid.addEventListener('mouseleave', () => {
            polaroid.style.transform = 'rotate(-3deg)';
        });
    }
});

// Console message for developers
console.log('%c🔒 Cybersecurity Portfolio', 'color: #00E5FF; font-size: 24px; font-weight: bold;');
console.log('%cDesigned with passion by Vishal', 'color: #FF1744; font-size: 14px;');
console.log('%cInterested in the code? Contact me!', 'color: #b0b0b0; font-size: 12px;');