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

const slidesWrapper = document.querySelector(".slides-wrapper");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function showNextSlide() {
  // คำนวณการเลื่อน
  currentIndex = (currentIndex + 1) % slides.length;
  slidesWrapper.style.transform = `translateX(-${currentIndex * 100}vw)`; // เลื่อนภาพไปทางซ้าย
}

// เริ่มแสดงภาพแรก
showNextSlide();

// เปลี่ยนภาพทุก 3 วินาที
setInterval(showNextSlide, 6000);
let lastScroll = 0;
const header = document.querySelector(".header");
const scrollThreshold = 50; // ระยะเลื่อนขั้นต่ำ

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    // อยู่ด้านบนสุดให้แสดงเสมอ
    header.classList.remove("hide");
    return;
  }

  if (currentScroll > lastScroll + scrollThreshold) {
    // เลื่อนลงมากกว่า threshold
    header.classList.add("hide");
  } else if (currentScroll < lastScroll - scrollThreshold) {
    // เลื่อนขึ้นมากกว่า threshold
    header.classList.remove("hide");
  }

  lastScroll = currentScroll;
});
