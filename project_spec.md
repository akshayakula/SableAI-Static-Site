# 🛠️ SablAI Landing Page (Vanilla HTML + Tailwind + Waveform Animation Spec)

## Overview
Create a **static marketing landing page** using **pure HTML + TailwindCSS via CDN** + **vanilla JavaScript** for lightweight animations.  
Goal: Showcase SablAI as the future of voice-driven AI for Salesforce + Slack.

---

## 🎨 Branding and Theme

- **Primary Background Color:** `#222831`
- **Secondary Background Color:** `#393E46`
- **Highlight Color:** `#00ADB5`
- **Accent Color:** `#EEEEEE`

- **Vibe:**  
  Futuristic × Smooth × Lightning Speed × Elite AI Consulting

- **Animations:**  
  - Subtle voice waveform animation in the Hero section  
  - Smooth fade-ins and hover effects
  - All animations purely visual (no backend or real-time audio capture)

---

## 🛠 Tech Stack

- **HTML5** for structure
- **TailwindCSS** via CDN for styling
- **Vanilla JavaScript** for:
  - Waveform animation (fake/looped)
  - Typing simulation for demo section
  - Basic scroll animations (optional)
- **Host on:** Vercel, Netlify, or GitHub Pages

---

## 🧱 Page Structure

### 1. Hero Section
- **Big Headline:**  
  > "SablAI — The Future of AI-Driven Sales Operations"
- **Subheadline:**  
  > "Voice. Slack. Salesforce. Intelligence."
- **Primary CTA Button:**  
  > "Get Early Access"
- **Background Animation:**  
  - Light **animated waveform** behind or below the hero text.  
  - Implement using a small canvas library (like [Wave.js](https://github.com/foobar404/wave.js)) or a custom SVG animation with Framer Motion or vanilla JS.  
  - Animation loops forever, slow and elegant.

---

### 2. How It Works Section
- **3 Steps, each with Icon + Label:**
  - 🗣️ **Speak to SablAI**
  - 🧠 **SablAI Thinks**
  - ☁️ **Your CRM Updates**
- **Short Description:**  
  > "Talk naturally. Think faster. Sell smarter."

---

### 3. Demo Section
- **Audio Player Embed:**  
  Play a pre-recorded AI call audio clip (20 seconds).
- **Animated Typing Simulation:**  
  While the audio plays, display "fake" live transcription text scrolling line-by-line.
- **Section Title:**  
  > "See SablAI In Action"

---

### 4. Features Grid Section
- **Grid of 6 Features:**
  - 24/7 AI Availability
  - Instant CRM Updates
  - Native Slack Experience
  - Customizable Voices
  - Sales Acceleration Intelligence
  - Built for High-Performance Teams

---

### 5. CTA Section
- **Big glowing CTA Button:**  
  > "Book Your Demo Today"
- **Subtext:**  
  > "Limited Beta Access Available"

- Optional subtle animated glow behind the button.

---

### 6. Footer
- **Links:**
  - Privacy Policy
  - Terms of Use
  - LinkedIn
  - Twitter
- **Subtle note:**  
  > "SablAI™ — Built for the Future."

---

## 🎯 Key Rules

✅ No backend interaction needed  
✅ Only marketing storytelling  
✅ Super lightweight  
✅ Static animations only  
✅ Instant page load (small bundle size)

---

## 📝 Deliverables

- `/index.html`
- `/assets/`
  - logo
  - SVGs for icons
  - waveform animation assets if needed
  - audio sample
- `/script.js`  
  (for animating waveform + typing text)
- `/style.css` (only if overriding Tailwind defaults)

---

## 🔥 Bonus Touches (Optional)

- Scroll-triggered fade-in of sections
- Typing speed adjustable with a setting
- Button hover effects using Tailwind transitions
- Slight glowing animated background for sections
- Static starfield or particle background (very subtle)

---