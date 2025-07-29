// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-in-out'
});

// Mobile Navigation
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Service card hover effects
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) translateZ(20px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) translateZ(0)';
    });
});

// Form input animations
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

formInputs.forEach(input => {
    // Initialize labels based on content
    if (input.value !== '') {
        input.nextElementSibling.style.top = '-0.6rem';
        input.nextElementSibling.style.fontSize = '0.85rem';
        input.nextElementSibling.style.color = 'var(--rose-gold)';
    }
    
    input.addEventListener('focus', () => {
        input.nextElementSibling.style.top = '-0.6rem';
        input.nextElementSibling.style.fontSize = '0.85rem';
        input.nextElementSibling.style.color = 'var(--rose-gold)';
    });
    
    input.addEventListener('blur', () => {
        if (input.value === '') {
            input.nextElementSibling.style.top = '1.2rem';
            input.nextElementSibling.style.fontSize = '1rem';
            input.nextElementSibling.style.color = '#999';
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    const hero = document.querySelector('.hero');
    hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});

// Mouse move parallax effect
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero');
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    hero.style.transform = `translate3d(${xAxis}px, ${yAxis}px, 0)`;
});