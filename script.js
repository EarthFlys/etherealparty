const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

// เปิด/ปิดเมนู
navToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  navMenu.classList.toggle("show-menu");
  navToggle.classList.toggle("active");
});

// ปิดเมนูเมื่อคลิกที่อื่น
document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
    navMenu.classList.remove("show-menu");
    navToggle.classList.remove("active");
  }
});

// Smooth scroll และปิดเมนู
document.querySelector(".nav-links").addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    const targetId = e.target.getAttribute("href");

    // ตรวจสอบว่าลิงก์เป็นภายในหน้าเดียวกันหรือไม่
    if (targetId.startsWith("#")) {
      e.preventDefault();
      const targetSection = document.querySelector(targetId);

      // Smooth scroll
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      // ปิดเมนูบนมือถือ
      if (window.innerWidth <= 768) {
        navMenu.classList.remove("show-menu");
        navToggle.classList.remove("active");
      }
    }
  }
});

let lastScroll = 0;
const header = document.querySelector(".header");
const scrollThreshold = 50;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.classList.remove("hide");
    return;
  }

  if (currentScroll > lastScroll + scrollThreshold) {
    header.classList.add("hide");
  } else if (currentScroll < lastScroll - scrollThreshold) {
    header.classList.remove("hide");
  }

  lastScroll = currentScroll;
});

function animateProgressBars() {
  const progressBars = document.querySelectorAll(".progress-fill");

  progressBars.forEach((bar) => {
    const width = bar.getAttribute("data-width");
    bar.style.width = width + "%";
  });
}

window.addEventListener("load", animateProgressBars);
