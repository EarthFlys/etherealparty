function startTypingAnimation() {
    const typingElements = document.querySelectorAll('.typing-animation');
    
    typingElements.forEach((element, index) => {
        // ซ่อนข้อความก่อนเริ่มอนิเมชั่น
        element.style.width = '0';
        element.style.opacity = '0';
        
        // เริ่มอนิเมชั่นทีละ element
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.width = '100%';
            
            // ลบเคอร์เซอร์เมื่อพิมพ์เสร็จ
            setTimeout(() => {
                element.style.setProperty('--after-opacity', '0');
            }, 3000); // ตรงกับเวลาของ typing animation
        }, index * 1000);
    });
}

window.onload = startTypingAnimation;