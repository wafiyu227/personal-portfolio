document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init();
    
    
    
    // Hamburger menu functionality
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    
    hamburger.addEventListener('click', function() {
        menu.classList.toggle('show');
        this.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const menuLinks = document.querySelectorAll('#menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('show');
            hamburger.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
            menu.classList.remove('show');
            hamburger.classList.remove('active');
        }
    });
    // Set current year in footer
    document.getElementById('date').textContent = new Date().getFullYear();
});