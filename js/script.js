console.log("Page loaded: Hero Section");

// Form tab switching logic
function switchTab(tabName) {
  const signupForm = document.getElementById("signup-form");
  const loginForm = document.getElementById("login-form");
  const tabs = document.querySelectorAll(".tab");

  if (tabName === "signup") {
    signupForm.style.display = "flex";
    loginForm.style.display = "none";
  } else {
    signupForm.style.display = "none";
    loginForm.style.display = "flex";
  }

  tabs.forEach(tab => {
    if (tab.textContent.toLowerCase().includes(tabName)) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
}

// Show signup form by default when page loads
document.addEventListener("DOMContentLoaded", () => {
  switchTab("signup");
});

// --- Cleaned and fixed slider logic ---

// Only run slider logic after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Slider elements
  const heroSlides = document.querySelectorAll('.hero-slide');
  const heroDots = document.querySelectorAll('.hero-slider-dot');
  const heroPrev = document.getElementById('hero-prev');
  const heroNext = document.getElementById('hero-next');
  let heroCurrent = 0;
  let heroAutoAdvance;

  // Show slide by index
  function showHeroSlide(idx) {
    heroSlides.forEach((el, i) => {
      el.classList.remove('active', 'inactive-left', 'inactive-right');
      if (i === idx) {
        el.classList.add('active');
      } else if (i < idx) {
        el.classList.add('inactive-left');
      } else {
        el.classList.add('inactive-right');
      }
    });
    heroDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === idx);
    });
    heroCurrent = idx;
  }

  // Dots click
  heroDots.forEach((dot, idx) => {
    dot.addEventListener('click', () => showHeroSlide(idx));
  });

  // Arrow click
  if (heroPrev && heroNext) {
    heroPrev.addEventListener('click', () => {
      let next = heroCurrent - 1;
      if (next < 0) next = heroSlides.length - 1;
      showHeroSlide(next);
    });

    heroNext.addEventListener('click', () => {
      let next = (heroCurrent + 1) % heroSlides.length;
      showHeroSlide(next);
    });
  }

  // Keyboard arrow navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      let next = heroCurrent - 1;
      if (next < 0) next = heroSlides.length - 1;
      showHeroSlide(next);
    }
    if (e.key === 'ArrowRight') {
      let next = (heroCurrent + 1) % heroSlides.length;
      showHeroSlide(next);
    }
  });

  // Auto-advance
  function startAutoAdvance() {
    heroAutoAdvance = setInterval(() => {
      let next = (heroCurrent + 1) % heroSlides.length;
      showHeroSlide(next);
    }, 5000);
  }
  function stopAutoAdvance() {
    clearInterval(heroAutoAdvance);
  }
  startAutoAdvance();

  // Pause on hover
  const sliderContainer = document.querySelector('.hero-slider-container');
  if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', stopAutoAdvance);
    sliderContainer.addEventListener('mouseleave', startAutoAdvance);
  }

  // Show initial slide
  showHeroSlide(heroCurrent);
});
