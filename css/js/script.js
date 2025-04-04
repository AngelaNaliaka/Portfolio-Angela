document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Navigation Toggle ---
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileNavToggle && mainNav) {
        mobileNavToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            // Optional: Change button text/icon (e.g., from '☰' to '✕')
            if (mainNav.classList.contains('active')) {
                mobileNavToggle.setAttribute('aria-expanded', 'true');
                // mobileNavToggle.textContent = '✕'; // Example: Change icon
            } else {
                mobileNavToggle.setAttribute('aria-expanded', 'false');
                // mobileNavToggle.textContent = '☰'; // Example: Change back
            }
        });
    }

    // --- Footer Current Year ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear(); // Dynamically sets the year
    }

    // --- Active Navigation Link Styling ---
    // Get the current page path
    const currentPagePath = window.location.pathname.split('/').pop() || 'index.html'; // Default to index.html if path is '/'
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop();
        // Remove existing active class first
        link.classList.remove('active');
        // Add active class if the link's href matches the current page
        if (linkPath === currentPagePath) {
            link.classList.add('active');
        }
    });

    // --- Simple hover effect (Example - can be expanded) ---
    // Add a slight scale effect on project cards (can also be done purely in CSS)
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // You can add JS-driven animations here if needed,
            // but the CSS :hover effect is generally sufficient and more performant.
            // e.g., card.style.transform = 'translateY(-5px) scale(1.01)';
        });
        card.addEventListener('mouseleave', () => {
            // card.style.transform = 'translateY(0) scale(1)';
        });
    });

     // --- Basic Form Placeholder Alert (since no backend) ---
     const contactForm = document.getElementById('contact-form-element');
     if(contactForm) {
         contactForm.addEventListener('submit', (e) => {
             e.preventDefault(); // Prevent actual form submission
             alert('Thank you for your message! (Note: This is a demo form and does not send emails.)');
             // Optionally clear the form
             // contactForm.reset();
         });
     }


    console.log("Portfolio script loaded.");
    // Add more simple interactions here if needed
});
