// GSAP Animation
gsap.registerPlugin(ScrollTrigger);

const policyItems = document.querySelectorAll('.policy-item');

policyItems.forEach((item) => {
  gsap.fromTo(
    item,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    }
  );
});

// แสดง/ซ่อนเมนูบนมือถือ
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
