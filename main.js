document.addEventListener('DOMContentLoaded', () => {
    // Initialize skill circles
    const skillsData = {
        'network-security': 0.80,
        'pentesting': 0.70,
        'osint': 0.90,
        'linux': 0.80,
        'python': 0.85,
        'cpp': 0.75,
        'javascript': 0.80,
        'html-css': 0.70,
        'leadership': 0.95,
        'communication': 0.91,
        'teamwork': 0.94,
        'collaboration': 0.96

    };

    Object.entries(skillsData).forEach(([id, value]) => {
        new ProgressBar.Circle(`#${id}`, {
            color: '#00FFFF',
            strokeWidth: 10,
            trailWidth: 10,
            trailColor: '#1a1a1a',
            easing: 'easeInOut',
            duration: 1400,
            text: {
                value: '0%',
                className: 'progress-text',
                style: {
                    color: '#00FFFF',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '1.2rem',
                    margin: 0
                }
            },
            step: (state, circle) => {
                const percentage = Math.round(circle.value() * 100);
                circle.setText(percentage + '%');
            }
        }).animate(value);
    });

    // Smooth scrolling
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Glitch effect for name
    const glitchText = document.querySelector('h1');
    const originalText = glitchText.textContent;

    function createGlitch() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let glitchedText = '';
        
        for(let i = 0; i < originalText.length; i++) {
            if(Math.random() < 0.1) {
                glitchedText += chars.charAt(Math.floor(Math.random() * chars.length));
            } else {
                glitchedText += originalText[i];
            }
        }
        
        glitchText.textContent = glitchedText;
        
        setTimeout(() => {
            glitchText.textContent = originalText;
        }, 100);
    }

    setInterval(createGlitch, 300);

    // Parallax effect for cyber lines
    const cyberLines = document.querySelector('.cyber-lines');
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        const xOffset = (mouseX - window.innerWidth / 2) * 0.02;
        const yOffset = (mouseY - window.innerHeight / 2) * 0.02;
        
        cyberLines.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });

    // Scroll progress
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        document.querySelector('.scroll-progress').style.width = scrollPercent + '%';
    });

    // Typing effect for subtitle
    const subtitle = document.querySelector('.subtitle');
    const originalSubtitle = subtitle.textContent;
    subtitle.textContent = '';
    let i = 0;
    const typeWriter = () => {
        if (i < originalSubtitle.length) {
            subtitle.textContent += originalSubtitle.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    setTimeout(typeWriter, 1000); // Start after 1 second

    // Contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }

    // Back to top
    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});