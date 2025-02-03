document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    // Toggle Mobile Menu
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        navLinks.classList.toggle('active');
    });

    // ปิดเมนูเมื่อคลิกภายนอก
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-links') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });

    // ปรับการทำงานเมื่อ Scroll (เฉพาะ Desktop)
    if (window.innerWidth > 768) {
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > lastScroll + 50) {
                navbar.classList.add('hidden');
            } else if (currentScroll < lastScroll - 50) {
                navbar.classList.remove('hidden');
            }
            
            lastScroll = currentScroll;
        });
    }
});
