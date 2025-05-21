# Vonar AI Marketing Landing Page

A static marketing landing page for Vonar AI, built with vanilla HTML, TailwindCSS, and JavaScript.

## Overview

Vonar AI is an AI-powered voice automation platform designed for support and service ops. It helps MSPs, enterprises, and government teams manage inbound calls, triage issues, and automate ticket creation in tools like Jira and Salesforce — all through intelligent voice agents.

## Technologies Used

- HTML5 for structure
- TailwindCSS (via CDN) for styling
- Vanilla JavaScript for animations and interactions
- SVG for logo and icons

## Features

- Responsive design that works on mobile, tablet, and desktop
- Subtle voice waveform animation in the hero section
- Typing simulation in the demo section
- Interactive features grid
- Smooth scroll animations
- Starfield/particle background effect
- Custom SVG logo

## How to Run

Since this is a static site with no build process, you can simply:

1. Clone this repository:
   ```
   git clone <repository-url>
   ```

2. Open the `index.html` file in your browser:
   ```
   open index.html
   ```

Alternatively, you can use a local development server:

```bash
# If you have Python installed
python -m http.server

# If you have Node.js installed
npx serve
```

Then visit `http://localhost:8000` or `http://localhost:3000` in your browser.

## Deployment

This site can be easily deployed to:

- GitHub Pages
- Netlify
- Vercel
- Any static site hosting service

## Structure

- `index.html` - Main HTML file
- `style.css` - Custom CSS styles (beyond what Tailwind provides)
- `script.js` - JavaScript for animations and interactions
- `assets/` - Directory containing logo and other assets

## License

© 2023 Vonar AI. All rights reserved.
