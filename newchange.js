let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sunIcon = document.querySelector('#menu-sun');
let moonIcon = document.querySelector('#menu-moon');
let body = document.body;

// Initialize dark mode status
let isDarkMode = false;

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Dark mode toggle function
const toggleDarkMode = () => {
    isDarkMode = !isDarkMode;
    body.classList.toggle('dark-mode', isDarkMode);

    // Switch icons
    if (isDarkMode) {
        sunIcon.style.display = 'block';  // Show sun icon
        moonIcon.style.display = 'none';   // Hide moon icon
    } else {
        sunIcon.style.display = 'none';     // Hide sun icon
        moonIcon.style.display = 'block';    // Show moon icon
    }
};

// Event listeners for dark mode
moonIcon.onclick = toggleDarkMode;
sunIcon.onclick = toggleDarkMode;

// Typed.js initialization
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer', 'Student'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});
