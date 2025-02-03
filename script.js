// script.js
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    // Toggle Mobile Menu
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        navbar.classList.toggle('menu-open');
    });

    // ปิดเมนูเมื่อคลิกภายนอก
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            navbar.classList.remove('menu-open');
        }
    });

    // ปรับการซ่อน Navbar เมื่อ Scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        if (window.innerWidth > 768) { // ทำงานเฉพาะบนคอมพิวเตอร์
            const currentScroll = window.pageYOffset;
            
            if (currentScroll <= 0) {
                navbar.classList.remove('hidden');
                return;
            }

            if (Math.abs(currentScroll - lastScroll) < 50) return;

            if (currentScroll > lastScroll && !navbar.classList.contains('hidden')) {
                navbar.classList.add('hidden');
            } else if (currentScroll < lastScroll && navbar.classList.contains('hidden')) {
                navbar.classList.remove('hidden');
            }
            
            lastScroll = currentScroll;
        }
    });

    // ปรับขนาดโลโก้เมื่อ Scroll
    window.addEventListener('scroll', () => {
        if (window.innerWidth > 768) {
            const logo = document.querySelector('.logo-img');
            logo.style.height = window.pageYOffset > 100 ? '40px' : '50px';
        }
    });
});
