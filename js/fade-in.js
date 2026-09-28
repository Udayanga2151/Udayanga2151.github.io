// ============================
// FADE-IN ON SCROLL
// Watches elements with class "fade-section" and adds
// "visible" class once they scroll into view, triggering
// the CSS transition defined in style.css
// ============================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 }); // triggers when 10% of the element is visible

// Apply the observer to every element marked as a fade section
document.querySelectorAll('.fade-section').forEach(el => observer.observe(el));