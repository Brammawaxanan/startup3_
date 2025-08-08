console.log("Page loaded: Hero Section");

  function switchTab(tabName) {
  const signupForm = document.getElementById("signup-form");
  const loginForm = document.getElementById("login-form");
  const tabs = document.querySelectorAll(".tab");

  if (tabName === "signup") {
    signupForm.style.display = "block";
    loginForm.style.display = "none";
  } else {
    signupForm.style.display = "none";
    loginForm.style.display = "block";
  }

  tabs.forEach((tab) => tab.classList.remove("active"));
  document.querySelector(`.tab:contains('${tabName === "signup" ? "Sign Up" : "Login"}')`)?.classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const initialTab = document.querySelector(".tab.active");
  if (initialTab) {
    switchTab(initialTab.textContent.trim().toLowerCase());
  }
});

let heroAutoAdvance = setInterval(() => {
      let next = (heroCurrent + 1) % heroSlides.length;
      showHeroSlide(next);
    }, 5000);

    // Pause on hover
    document.querySelector('.hero-slider-container').addEventListener('mouseenter', () => {
      clearInterval(heroAutoAdvance);
    });
    document.querySelector('.hero-slider-container').addEventListener('mouseleave', () => {
      heroAutoAdvance = setInterval(() => {
        let next = (heroCurrent + 1) % heroSlides.length;
        showHeroSlide(next);
      }, 5000);
    });

  
    document.querySelectorAll('.hero-slider-dots').forEach((el, idx) => {
      if(idx !== 0) el.style.display = 'none';
      else el.style.display = 'flex';
    });