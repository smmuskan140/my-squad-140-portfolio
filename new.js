// Theme Toggle Functionality
const themeToggle = document.querySelector('.theme-toggle');
const background = document.querySelector('.background');

let isDarkMode = false;

themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    
    if (isDarkMode) {
        background.style.background = 'linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #533483 75%, #2a1a4e 100%)';
        document.body.style.color = '#e0e0e0';
        themeToggle.style.transform = 'rotate(180deg)';
    } else {
        background.style.background = 'linear-gradient(135deg, #4D3FA8 0%, #6B5BA8 25%, #8B7BB8 50%, #AB9BC8 75%, #7B6BB8 100%)';
        document.body.style.color = 'white';
        themeToggle.style.transform = 'rotate(0deg)';
    }
});

// Card Click Animation
const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        card.style.animation = 'none';
        setTimeout(() => {
            card.style.animation = 'cardClick 0.6s ease-out';
        }, 10);
    });
});

// Add animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes cardClick {
        0% {
            transform: translateY(0) scale(1);
        }
        50% {
            transform: translateY(-20px) scale(1.05);
        }
        100% {
            transform: translateY(-15px) scale(1);
        }
    }
`;
document.head.appendChild(style);

// Smooth scroll for navigation
const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target.textContent.toLowerCase();
        console.log('Navigating to:', target);
    });
});

// Mouse movement parallax effect
document.addEventListener('mousemove', (e) => {
    const mainLogo = document.querySelector('.main-logo');
    const x = (window.innerWidth / 2 - e.clientX) / 100;
    const y = (window.innerHeight / 2 - e.clientY) / 100;
    
    mainLogo.style.transform = `translateX(${x}px) translateY(${y}px)`;
});

// Reset position on mouse leave
document.addEventListener('mouseleave', () => {
    const mainLogo = document.querySelector('.main-logo');
    mainLogo.style.transform = 'translateX(0) translateY(0)';
});

console.log('Profile site loaded successfully!');