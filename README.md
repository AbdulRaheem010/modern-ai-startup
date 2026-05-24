# NovaAI Landing Page

A modern, responsive AI startup landing page built with semantic **HTML5**, clean **CSS**, and **vanilla JavaScript**.

## Features

- Sticky glassmorphism navigation bar
- Hero section with animated gradient background
- CTA buttons with hover effects
- Feature cards section
- Testimonials slider (auto + manual controls)
- Pricing cards
- FAQ accordion
- Contact form with client-side validation
- Dark/light mode toggle with persistence
- Smooth scrolling and reveal-on-scroll animations
- Mobile-responsive layout

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

## Project Structure

- `index.html` – Page structure and semantic sections
- `styles.css` – Design system, responsive layout, animations
- `script.js` – Interactivity and validation logic

## Screenshots

Add screenshots here after deployment/testing:

```md
![Desktop Screenshot](./screenshots/desktop.png)
![Mobile Screenshot](./screenshots/mobile.png)
```

## GitHub Pages Deployment

1. Push this repository to GitHub.
2. In your repository, open **Settings → Pages**.
3. Under **Build and deployment**, select:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (or your default branch), folder `/ (root)`
4. Save settings and wait for deployment.
5. Visit the generated URL shown in the Pages settings.

## Performance Notes

- Lightweight vanilla JS (no frameworks)
- CSS animations use GPU-friendly transforms
- IntersectionObserver for efficient scroll effects
- Minimal DOM operations for runtime interactions
