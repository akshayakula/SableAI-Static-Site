document.addEventListener('DOMContentLoaded', () => {
  // Show loading screen first
  showLoadingScreen();
  
  // Initialize everything else
  initScrollAnimations();
  initStarBackground();
  initTypingDemo();
  initMobileMenu();
  initDotGrids();
  initWaveform();
  initExactWaveform();
  animateWaveform();
  
  // Hide loading screen after a short delay
  setTimeout(() => {
    hideLoadingScreen();
  }, 800);
});

// Create the dot grid patterns
function initDotGrids() {
  const dotGrids = document.querySelectorAll('.dot-grid');
  
  dotGrids.forEach(grid => {
    // Clear any existing dots
    grid.innerHTML = '';
    
    // Create dots based on the container size
    const gridWidth = grid.offsetWidth;
    const gridHeight = grid.offsetHeight;
    
    // Calculate number of dots based on spacing (40px)
    const spacing = 40;
    const dotsX = Math.ceil(gridWidth / spacing);
    const dotsY = Math.ceil(gridHeight / spacing);
    
    // Create the dots
    for (let y = 0; y < dotsY; y++) {
      for (let x = 0; x < dotsX; x++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        
        // Position the dot
        dot.style.left = `${x * spacing + (Math.random() * 5 - 2.5)}px`;
        dot.style.top = `${y * spacing + (Math.random() * 5 - 2.5)}px`;
        
        // Randomly make some dots accents or highlights
        const random = Math.random();
        if (random > 0.95) {
          dot.classList.add('highlight');
        } else if (random > 0.85) {
          dot.classList.add('accent');
        }
        
        grid.appendChild(dot);
      }
    }
  });
  
  // Update on window resize
  window.addEventListener('resize', () => {
    dotGrids.forEach(grid => {
      while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
      }
    });
    
    // Recreate after a small delay to prevent thrashing
    setTimeout(() => {
      initDotGrids();
    }, 300);
  });
}

// Mobile menu functionality
function initMobileMenu() {
  // First, let's add the mobile menu button to the header
  const header = document.querySelector('header');
  const nav = header.querySelector('nav');
  
  // Create mobile menu button
  const mobileMenuBtn = document.createElement('button');
  mobileMenuBtn.className = 'mobile-menu text-accent hidden';
  mobileMenuBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  `;
  
  // Create mobile menu container
  const mobileMenuContainer = document.createElement('div');
  mobileMenuContainer.className = 'mobile-menu-container fixed inset-0 bg-primary z-50 transform translate-x-full transition-transform duration-300';
  mobileMenuContainer.innerHTML = `
    <div class="flex justify-end p-4">
      <button class="mobile-menu-close text-accent">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <div class="flex flex-col items-center mt-20">
      <a href="#how-it-works" class="text-xl py-4 hover:text-blue-400 transition-colors">How It Works</a>
      <a href="#demo" class="text-xl py-4 hover:text-purple-400 transition-colors">Demo</a>
      <a href="#features" class="text-xl py-4 hover:text-blue-400 transition-colors">Features</a>
      <a href="#contact" class="gradient-btn px-6 py-3 rounded-md mt-6">Get Early Access</a>
    </div>
  `;
  
  // Add button to header
  header.querySelector('.container').insertBefore(mobileMenuBtn, nav);
  
  // Add menu container to body
  document.body.appendChild(mobileMenuContainer);
  
  // Toggle menu on button click
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuContainer.classList.remove('translate-x-full');
  });
  
  // Close menu on close button click
  const closeBtn = mobileMenuContainer.querySelector('.mobile-menu-close');
  closeBtn.addEventListener('click', () => {
    mobileMenuContainer.classList.add('translate-x-full');
  });
  
  // Close menu when a link is clicked
  const menuLinks = mobileMenuContainer.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuContainer.classList.add('translate-x-full');
    });
  });
}

// Scroll fade-in animations
function initScrollAnimations() {
  const sections = document.querySelectorAll('section');
  
  // Add fade-in class to all sections
  sections.forEach(section => {
    if (!section.classList.contains('fade-in')) {
      section.classList.add('fade-in');
    }
  });
  
  // Check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
    );
  }
  
  // Check elements on scroll
  function checkElements() {
    sections.forEach(section => {
      if (isInViewport(section)) {
        section.classList.add('visible');
      }
    });
  }
  
  // Initial check and add scroll listener
  checkElements();
  window.addEventListener('scroll', checkElements);
}

// Create star/particle background
function initStarBackground() {
  const heroSection = document.querySelector('section:first-of-type');
  const ctaSection = document.getElementById('contact');
  
  // Add stars to these sections
  [heroSection, ctaSection].forEach(section => {
    if (!section) return;
    
    // Create stars
    for (let i = 0; i < 50; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Random size
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Random animation delay
      star.style.animationDelay = `${Math.random() * 4}s`;
      
      section.appendChild(star);
    }
  });
}

// Typing simulation for demo
function initTypingDemo() {
  const transcription = document.getElementById('transcription');
  const demoAudio = document.getElementById('demo-audio');
  
  if (!transcription || !demoAudio) return;
  
  // Demo transcription lines
  const transcriptionLines = [
    "User: Hey SablAI, can you update the status of the Acme Corp deal to 'Closing'?",
    "SablAI: I'll update the Acme Corp opportunity status to 'Closing'. Is there a closing date you'd like to set?",
    "User: Yes, let's set it for next Friday",
    "SablAI: Great! I've updated the Acme Corp opportunity to 'Closing' with a close date of next Friday, April 28th. Is there anything else you'd like me to update?",
    "User: Add a note that they've signed the MSA",
    "SablAI: Added a note to the Acme Corp opportunity: 'Customer has signed the Master Service Agreement'. The record has been updated in Salesforce.",
    "User: Thanks SablAI!",
    "SablAI: You're welcome! Is there anything else you need help with today?"
  ];
  
  let lineIndex = 0;
  let charIndex = 0;
  let isTyping = false;
  let typingInterval;
  
  // Play audio and start typing simulation
  demoAudio.addEventListener('play', () => {
    if (!isTyping) {
      isTyping = true;
      transcription.innerHTML = '';
      lineIndex = 0;
      charIndex = 0;
      typeNextLine();
    }
  });
  
  // Pause typing when audio is paused
  demoAudio.addEventListener('pause', () => {
    isTyping = false;
    clearInterval(typingInterval);
  });
  
  // Reset when audio ends
  demoAudio.addEventListener('ended', () => {
    isTyping = false;
    clearInterval(typingInterval);
  });
  
  // Type the next line
  function typeNextLine() {
    if (lineIndex >= transcriptionLines.length) return;
    
    // Create a new line element
    const lineElement = document.createElement('div');
    lineElement.classList.add('mb-2');
    
    // Determine if it's user or AI
    const isUser = transcriptionLines[lineIndex].startsWith('User:');
    if (isUser) {
      lineElement.classList.add('text-accent');
    } else {
      // Use blue or purple for the AI text to match the new color scheme
      lineElement.classList.add(lineIndex % 2 === 0 ? 'text-blue-400' : 'text-purple-400');
    }
    
    transcription.appendChild(lineElement);
    
    // Type characters one by one
    charIndex = 0;
    typingInterval = setInterval(() => {
      if (charIndex < transcriptionLines[lineIndex].length) {
        lineElement.textContent = transcriptionLines[lineIndex].substring(0, charIndex + 1);
        charIndex++;
      } else {
        clearInterval(typingInterval);
        
        // Move to next line after a delay
        setTimeout(() => {
          lineIndex++;
          if (lineIndex < transcriptionLines.length) {
            typeNextLine();
          }
        }, isUser ? 500 : 1000); // Longer delay for AI responses
      }
    }, 30); // Typing speed
  }
  
  // Provide a button to demo without audio
  const demoButton = document.createElement('button');
  demoButton.textContent = 'Play Demo Transcript';
  demoButton.className = 'gradient-btn mt-4 px-4 py-2 rounded text-sm';
  demoButton.addEventListener('click', () => {
    if (!isTyping) {
      isTyping = true;
      transcription.innerHTML = '';
      lineIndex = 0;
      charIndex = 0;
      typeNextLine();
    }
  });
  
  // Insert the button after the audio element
  demoAudio.parentNode.appendChild(demoButton);
}

// Initialize the waveform animation
function initWaveform() {
  const waveContainer = document.querySelector('.wave-container');
  if (!waveContainer) return;
  
  // Force a repaint to kickstart the animation
  waveContainer.style.display = 'none';
  waveContainer.offsetHeight; // Force reflow
  waveContainer.style.display = 'flex';
  
  // Make sure the wave elements are created
  if (!waveContainer.querySelector('.glowing-wave')) {
    const glowingWave = document.createElement('div');
    glowingWave.className = 'glowing-wave';
    waveContainer.appendChild(glowingWave);
  }
  
  if (!waveContainer.querySelector('.glow-reflection')) {
    const glowReflection = document.createElement('div');
    glowReflection.className = 'glow-reflection';
    waveContainer.appendChild(glowReflection);
  }
}

function initParallaxEffects() {
  // Implementation of initParallaxEffects function
}

function setupDemoRequests() {
  // Implementation of setupDemoRequests function
}

function setupContactForm() {
  // Implementation of setupContactForm function
}

// Loading screen functions
function showLoadingScreen() {
  // Create loading screen if it doesn't exist
  if (!document.querySelector('.fullscreen-loader')) {
    const loader = document.createElement('div');
    loader.classList.add('fullscreen-loader');
    loader.innerHTML = `
      <div class="loader-content">
        <div class="spinner"></div>
      </div>
    `;
    document.body.appendChild(loader);
  }
}

function hideLoadingScreen() {
  const loader = document.querySelector('.fullscreen-loader');
  if (loader) {
    loader.classList.add('fade-out');
    setTimeout(() => {
      loader.remove();
    }, 500);
  }
}

// New function to initialize the exact waveform animation
function initExactWaveform() {
  const exactWaveContainer = document.querySelector('.exact-wave-container');
  if (!exactWaveContainer) return;
  
  // Create SVG elements if they don't exist
  const exactWave = exactWaveContainer.querySelector('.exact-wave');
  if (!exactWave) {
    const wave = document.createElement('div');
    wave.classList.add('exact-wave');
    exactWaveContainer.appendChild(wave);
  }
  
  const exactWaveAnimation = exactWaveContainer.querySelector('.exact-wave-animation');
  if (!exactWaveAnimation) {
    const waveAnim = document.createElement('div');
    waveAnim.classList.add('exact-wave-animation');
    exactWaveContainer.appendChild(waveAnim);
  }
  // No parallax or mousemove effect
}

// Animated waveform under hero
function animateWaveform() {
  const canvas = document.getElementById('animatedWave');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;

  // Gradient for the bars
  const gradient = ctx.createLinearGradient(0, 0, width, 0);
  gradient.addColorStop(0, '#4864F3');
  gradient.addColorStop(0.25, '#56CCF2');
  gradient.addColorStop(0.5, '#847BF2');
  gradient.addColorStop(0.75, '#B263E4');
  gradient.addColorStop(1, '#D72CBC');

  let t = 0;

  // Blip state
  let blipActive = false;
  let blipStartTime = 0;
  let blipDuration = 2.525; // seconds (25% slower)
  let blipInterval = 2.5; // initial value, will randomize after each blip
  let lastBlip = performance.now();

  function draw(now) {
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    // Draw bar waveform
    const barWidth = 7.5;
    const barSpacing = 16;
    for (let x = 0; x <= width; x += barSpacing) {
      // Top of bar (wave)
      let baseY = height/2
        + Math.sin((x/220) + t) * 32
        + Math.sin((x/90) - t*1.2) * 18
        + Math.sin((x/40) + t*0.7) * 8;
      // Blip effect
      let blipY = 0;
      if (blipActive) {
        let elapsed = (now - blipStartTime) / 1000;
        let blipPos = elapsed / blipDuration;
        let blipX = blipPos * width;
        let dist = Math.abs(x - blipX);
        if (dist < 60) {
          blipY = -32 * Math.exp(-0.5 * Math.pow(dist/18, 2));
        }
      }
      let yTop = baseY + blipY;
      // Bottom of bar (mirrored wave)
      let baseY2 = height/2
        - Math.sin((x/220) + t) * 32
        - Math.sin((x/90) - t*1.2) * 18
        - Math.sin((x/40) + t*0.7) * 8;
      let blipY2 = 0;
      if (blipActive) {
        let elapsed = (now - blipStartTime) / 1000;
        let blipPos = elapsed / blipDuration;
        let blipX = blipPos * width;
        let dist = Math.abs(x - blipX);
        if (dist < 60) {
          blipY2 = 32 * Math.exp(-0.5 * Math.pow(dist/18, 2));
        }
      }
      let yBot = baseY2 + blipY2;
      // Draw the bar
      ctx.save();
      ctx.beginPath();
      ctx.rect(x - barWidth/2, yTop, barWidth, yBot - yTop);
      ctx.fillStyle = gradient;
      ctx.globalAlpha = 0.85;
      ctx.shadowColor = '#4864F3';
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.restore();
    }
    ctx.restore();
    t += 0.018;

    // Blip timing
    if (!blipActive && now - lastBlip > blipInterval * 1000) {
      blipActive = true;
      blipStartTime = now;
      lastBlip = now;
    }
    if (blipActive && now - blipStartTime > blipDuration * 1000) {
      blipActive = false;
      // Randomize next interval between 2 and 5 seconds
      blipInterval = 2 + Math.random() * 3;
    }

    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
} 