// Disclaimer modal logic
const scheduleLink = document.getElementById("schedule-online-link");
const ctaScheduleBtn = document.getElementById("cta-schedule-btn");
const modal = document.getElementById("disclaimer-modal");
const acknowledge = document.getElementById("disclaimer-acknowledge");
const continueBtn = document.getElementById("disclaimer-continue");

function showDisclaimerModal() {
  modal.style.display = "block";
  acknowledge.checked = false;
  continueBtn.disabled = true;
}

if (scheduleLink && modal && acknowledge && continueBtn) {
  scheduleLink.addEventListener("click", function (e) {
    e.preventDefault();
    showDisclaimerModal();
  });
}

if (ctaScheduleBtn) {
  ctaScheduleBtn.addEventListener("click", function (e) {
    e.preventDefault();
    showDisclaimerModal();
  });
}

acknowledge.addEventListener("change", function () {
  continueBtn.disabled = !acknowledge.checked;
});

continueBtn.addEventListener("click", function () {
  window.location.href =
    "https://pp-wfe-100.advancedmd.com/154986/onlinescheduling/v2/patients";
});

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Mobile menu toggle
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (mobileMenuToggle && mainNav) {
  mobileMenuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("active");
    this.classList.toggle("active");
  });
}

// Close mobile menu when clicking outside
document.addEventListener("click", function (event) {
  if (
    mainNav &&
    mainNav.classList.contains("active") &&
    !event.target.closest(".main-nav") &&
    !event.target.closest(".mobile-menu-toggle")
  ) {
    mainNav.classList.remove("active");
    mobileMenuToggle.classList.remove("active");
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href") !== "#") {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  });
});
