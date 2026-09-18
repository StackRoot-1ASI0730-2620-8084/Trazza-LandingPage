document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Toggle logic for the switchers (Hero and How it Works)
    const toggleContainers = document.querySelectorAll('.toggle-container');
    
    toggleContainers.forEach(container => {
        const buttons = container.querySelectorAll('.toggle-btn');
        
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons in this container
                buttons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Here we would typically also change the content displayed
                // based on which toggle was clicked, but for the landing page
                // visual prototype, just toggling the state is sufficient.
            });
        });
    });

    // Mobile menu toggle
    const burgerBtn = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav-menu');
    const burgerIcon = burgerBtn.querySelector('i');

    if (burgerBtn && navMenu) {
        burgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // Toggle icon
            if (navMenu.classList.contains('active')) {
                burgerIcon.classList.remove('ph-list');
                burgerIcon.classList.add('ph-x');
            } else {
                burgerIcon.classList.remove('ph-x');
                burgerIcon.classList.add('ph-list');
            }
        });

        // Close menu when clicking a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                burgerIcon.classList.remove('ph-x');
                burgerIcon.classList.add('ph-list');
            });
        });
    }
});
