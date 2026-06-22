document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href*="#"]');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            if (pageYOffset >= section.offsetTop - 200) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.style.color = '';
            if (link.getAttribute('href').includes(current)) {
                link.style.color = 'var(--accent-bright)';                                                      }
        });
    });

    console.log('%cBlack Lotus Collective', 'color: #9d00ff; font-size: 20px; font-weight: bold;');
    console.log('%cWe are the signal.', 'color: #e0e0e0; font-size: 14px;');
});
