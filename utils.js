/**
 * Birthday Cake Website - Utility Functions
 * Additional helper functions and utilities
 */

// Performance monitoring
const performanceMonitor = {
  start: performance.now(),
  
  log: function(message) {
    const elapsed = (performance.now() - this.start).toFixed(2);
    console.log(`⚡ [${elapsed}ms] ${message}`);
  },
  
  reset: function() {
    this.start = performance.now();
  }
};

// Local storage utilities
const storage = {
  set: function(key, value) {
    try {
      localStorage.setItem(`birthday-cake-${key}`, JSON.stringify(value));
    } catch (e) {
      console.warn('Could not save to localStorage:', e);
    }
  },
  
  get: function(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(`birthday-cake-${key}`);
      return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
      console.warn('Could not read from localStorage:', e);
      return defaultValue;
    }
  },
  
  remove: function(key) {
    try {
      localStorage.removeItem(`birthday-cake-${key}`);
    } catch (e) {
      console.warn('Could not remove from localStorage:', e);
    }
  }
};

// Music preferences
const musicPrefs = {
  save: function(volume, autoplay = false) {
    storage.set('music-prefs', { volume, autoplay, lastPlayed: Date.now() });
  },
  
  load: function() {
    return storage.get('music-prefs', { volume: 0.8, autoplay: false });
  }
};

// Device detection
const device = {
  isMobile: function() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  },
  
  isTouch: function() {
    return 'ontouchstart' in window;
  },
  
  supportsAudio: function() {
    return !!(document.createElement('audio').canPlayType);
  }
};

// Animation helpers
const animationHelpers = {
  randomColor: function() {
    const colors = ['#8e0038', '#ff6b9d', '#ff8fab', '#b8004f', '#d12d5a'];
    return colors[Math.floor(Math.random() * colors.length)];
  },
  
  randomPosition: function(element) {
    return {
      x: Math.random() * (window.innerWidth - element.offsetWidth),
      y: Math.random() * (window.innerHeight - element.offsetHeight)
    };
  },
  
  easeInOut: function(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }
};

// Accessibility helpers
const a11y = {
  announceToScreenReader: function(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.style.position = 'absolute';
    announcement.style.left = '-10000px';
    announcement.style.width = '1px';
    announcement.style.height = '1px';
    announcement.style.overflow = 'hidden';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  },
  
  reducedMotion: function() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },
  
  highContrast: function() {
    return window.matchMedia('(prefers-contrast: high)').matches;
  }
};

// Debug utilities
const debug = {
  enabled: false,
  
  log: function(...args) {
    if (this.enabled) {
      console.log('🐛 [DEBUG]', ...args);
    }
  },
  
  time: function(label) {
    if (this.enabled) {
      console.time(`🐛 [DEBUG] ${label}`);
    }
  },
  
  timeEnd: function(label) {
    if (this.enabled) {
      console.timeEnd(`🐛 [DEBUG] ${label}`);
    }
  },
  
  enable: function() {
    this.enabled = true;
    console.log('🐛 Debug mode enabled');
  },
  
  disable: function() {
    this.enabled = false;
    console.log('🐛 Debug mode disabled');
  }
};

// Error handling
window.addEventListener('error', function(e) {
  console.error('🚨 JavaScript Error:', {
    message: e.message,
    filename: e.filename,
    line: e.lineno,
    column: e.colno,
    error: e.error
  });
});

// Initialize utilities when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  performanceMonitor.log('DOM loaded');
  
  // Load music preferences
  const prefs = musicPrefs.load();
  console.log('🎵 Loaded music preferences:', prefs);
  
  // Check device capabilities
  if (!device.supportsAudio()) {
    console.warn('⚠️ Audio not supported on this device');
  }
  
  if (device.isMobile()) {
    console.log('📱 Mobile device detected');
    document.body.classList.add('mobile-device');
  }
  
  if (a11y.reducedMotion()) {
    console.log('♿ Reduced motion preference detected');
    document.body.classList.add('reduced-motion');
  }
});

// Export utilities to global scope
window.birthdayCakeUtils = {
  performanceMonitor,
  storage,
  musicPrefs,
  device,
  animationHelpers,
  a11y,
  debug
};
