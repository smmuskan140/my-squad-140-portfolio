// Smooth scrolling for navigation links
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

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Inquire button functionality
document.querySelector('.inquire-btn').addEventListener('click', function() {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
});

// Check members button functionality
document.querySelector('.check-members-btn').addEventListener('click', function() {
    alert('Members list coming soon!');
    // You can replace this with actual functionality
});

// Add scroll animation for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply observer to cards
document.querySelectorAll('.mentor-card, .member-card, .stat-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(124, 58, 237, 0.95)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(124, 58, 237, 0.8)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.2)';
    }
});

// Mobile menu toggle (if needed)
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Add active style to nav links
document.querySelector('.nav-link').style.cssText = `
    .nav-link.active {
        color: #60a5fa;
        border-bottom: 2px solid #60a5fa;
    }
`;

// Social media links (update with your actual links)
document.querySelectorAll('.social-icon, .contact-icon').forEach(icon => {
    icon.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1) rotate(5deg)';
    });
    icon.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Prevent page shift when scrollbar appears
document.documentElement.style.scrollBehavior = 'smooth';
