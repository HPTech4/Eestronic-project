// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    const isActive = navMenu.classList.toggle('active');
    // Update aria-expanded attribute
    hamburger.setAttribute('aria-expanded', isActive ? 'true' : 'false');
  });

  // keyboard support (Enter/Space)
  hamburger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      hamburger.click();
    }
  });
}

// Improved Typewriter effect (respects prefers-reduced-motion)
const typewriterEffect = {
  text: "Olaoye Blessing Immanuel",
  element: document.getElementById("Typewriter"),
  delay: 120, // faster typing

  init() {
    this.index = 0;
    if (!this.element) return;
    this.element.innerHTML = '';
    this.type();
  },

  type() {
    if (this.index < this.text.length) {
      this.element.innerHTML += this.text.charAt(this.index);
      this.index++;
      setTimeout(() => this.type(), this.delay);
    }
  }
};

// Start typewriter when page loads, but respect reduced-motion
window.onload = () => {
  try {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReduced) {
      typewriterEffect.init();
    } else if (typewriterEffect.element) {
      // If reduced motion is requested, show full text immediately for screen readers
      typewriterEffect.element.textContent = typewriterEffect.text;
    }
  } catch (err) {
    // Graceful fallback if Typewriter element is missing
    console.warn('Typewriter init failed:', err);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // GSAP Animations (only if gsap is loaded)
  if (typeof gsap !== 'undefined') {
    try {
      gsap.registerPlugin(ScrollTrigger);

      // Services section animation
      gsap.from(".service", {
        scrollTrigger: {
          trigger: ".service",
          start: "top 80%",
          toggleActions: "play none none reset"
        },
        y: 50,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out"
      });

      // Projects section animation — use #project selector to match HTML id
      gsap.from("#project .grid > div", {
        scrollTrigger: {
          trigger: "#project",
          start: "top 80%",
          toggleActions: "play none none reset"
        },
        y: 30,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });

      // Skills section animation
      gsap.from(".skillTag", {
        scrollTrigger: {
          trigger: ".skills",
          start: "top 80%",
          toggleActions: "play none none reset"
        },
        scale: 0.8,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.9)"
      });
    } catch (err) {
      console.warn('GSAP animations failed:', err);
    }
  } else {
    // gsap not loaded — skip animations
    console.info('GSAP not available, skipping animations.');
  }
});

// Read more / collapse behavior for long project descriptions
(function initReadMore(){
  try {
    const projectSection = document.getElementById('project');
    if (!projectSection) return;

    // Find all project item paragraphs inside the project section
    const paragraphs = projectSection.querySelectorAll('.p-6 > p, .p-6 p');
    paragraphs.forEach((p) => {
      // Avoid double-wrapping
      if (p.classList.contains('card-desc') || p.dataset.readmore === 'processed') return;

      // Wrap existing paragraph in a div.card-desc by creating a new div and moving children
      const wrapper = document.createElement('div');
      wrapper.className = 'card-desc';

      // Move paragraph's children into wrapper
      while (p.firstChild) wrapper.appendChild(p.firstChild);

      // Clear paragraph and append wrapper
      p.appendChild(wrapper);

      // Mark processed to avoid duplicate work
      p.dataset.readmore = 'processed';

      // Create read more button
      const btn = document.createElement('button');
      btn.className = 'read-more';
      btn.type = 'button';
      btn.textContent = 'Read more';

      btn.addEventListener('click', () => {
        const expanded = wrapper.classList.toggle('expanded');
        btn.textContent = expanded ? 'Show less' : 'Read more';
        // For accessibility, move focus back to the button after expanding
        btn.focus();
      });

      p.appendChild(btn);
    });
  } catch (err) {
    console.warn('ReadMore init failed:', err);
  }
})();

  document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    };

    const response = await fetch('https://eestronics-api.onrender.com/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    alert(result.message);
  });