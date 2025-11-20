document.addEventListener("DOMContentLoaded", () => {
    
    // --- FEATURE 1: DARK MODE TOGGLE ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('span');
    
    // Check local storage to remember user choice
    if(localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.textContent = 'light_mode'; // Switch icon to sun
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if(document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeIcon.textContent = 'light_mode';
        } else {
            localStorage.setItem('theme', 'light');
            themeIcon.textContent = 'dark_mode';
        }
    });

    // --- FEATURE 2: BACK TO TOP BUTTON ---
    const backToTopBtn = document.getElementById("back-to-top");

    window.onscroll = function() {
        // Show button after scrolling down 300px
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopBtn.style.display = "flex";
        } else {
            backToTopBtn.style.display = "none";
        }
    };

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- FEATURE 3: ACTIVE LINK HIGHLIGHTING ---
    // Automatically sets the 'active-page' class on the nav link matching current URL
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.main-navigation a');

    navLinks.forEach(link => {
        // Check if the link href matches the current page path
        if(link.getAttribute('href') === currentPath) {
            link.classList.add('active-page');
        }
    });
});