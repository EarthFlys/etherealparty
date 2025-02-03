// ปรับปรุง script.js
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const navbar = document.querySelector('.navbar');
    
    if (currentScroll <= 0) {
        // เมื่ออยู่ด้านบนสุด
        navbar.classList.remove('hidden');
        return;
    }

    if (Math.abs(currentScroll - lastScroll) < 50) {
        // กันการทำงานบ่อยเกินไป
        return;
    }

    if (currentScroll > lastScroll && !navbar.classList.contains('hidden')) {
        // เลื่อนลง
        navbar.classList.add('hidden');
    } else if (currentScroll < lastScroll && navbar.classList.contains('hidden')) {
        // เลื่อนขึ้น
        navbar.classList.remove('hidden');
    }
    
    lastScroll = currentScroll;
});