/* ----------------------------------------
   Scroll Reveal Animation Engine
   Uses IntersectionObserver to animate
   elements as they enter the viewport.
---------------------------------------- */

const revealElements = document.querySelectorAll(".reveal");

// Observer Options
const options = {
    threshold: 0.15
};

// Reveal Handler
function revealOnScroll(entry) {
    entry.forEach(item => {
        if (item.isIntersecting) {
            item.target.classList.add("active");

            // Stagger effect for elements inside grids
            if (item.target.classList.contains("project-card")) {
                item.target.style.transitionDelay = `${Math.random() * 0.4}s`;
            }

            observer.unobserve(item.target);
        }
    });
}

// Create Observer
const observer = new IntersectionObserver(revealOnScroll, options);

// Observe each reveal element
revealElements.forEach(el => observer.observe(el));



/* ----------------------------------------
    Smooth Scroll Enhancement
---------------------------------------- */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", e => {
        const target = document.querySelector(link.getAttribute("href"));

        if (target) {
            e.preventDefault();
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: "smooth"
            });
        }
    });
});
