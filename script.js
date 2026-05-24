// Theme toggle with localStorage persistence
const themeToggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') document.body.classList.add('dark');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
});

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(navLinks.classList.contains('open')));
});

// Testimonials slider logic
const testimonials = [...document.querySelectorAll('.testimonial')];
let index = 0;
const showTestimonial = (i) => {
  testimonials.forEach((item) => item.classList.remove('active'));
  testimonials[i].classList.add('active');
};
document.getElementById('prev-testimonial').addEventListener('click', () => {
  index = (index - 1 + testimonials.length) % testimonials.length;
  showTestimonial(index);
});
document.getElementById('next-testimonial').addEventListener('click', () => {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
});
setInterval(() => {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
}, 6000);

// Contact form validation
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    formMessage.textContent = 'Please complete all fields with valid information.';
    formMessage.style.color = '#ef4444';
    return;
  }

  formMessage.textContent = 'Thanks! Your message has been sent.';
  formMessage.style.color = '#22c55e';
  form.reset();
});

// Reveal-on-scroll animation with IntersectionObserver
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Dynamic footer year
document.getElementById('year').textContent = new Date().getFullYear();
