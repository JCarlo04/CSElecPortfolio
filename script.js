// Select all sections or elements you want to animate
const fadeElements = document.querySelectorAll('.container, .portfolio-grid, .skills-grid');

// Observer setup
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Apply the 'visible' class
    }
  });
}, { threshold: 0.1 }); // Trigger animation when 10% of the element is visible

// Observe each fade element
fadeElements.forEach(el => observer.observe(el));
