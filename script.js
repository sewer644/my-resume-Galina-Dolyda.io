document.addEventListener('DOMContentLoaded', (event) => {
    const sections = document.querySelectorAll('section');
    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.15,
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.transform = 'scale(1.02) translateY(-5px)';
            section.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            section.style.transition = 'all 0.3s ease';
        });
        section.addEventListener('mouseleave', () => {
            section.style.transform = 'scale(1) translateY(0)';
            section.style.boxShadow = 'none';
        });
    });

    document.addEventListener('mousemove', (e) => {
        const background = document.querySelector('.background-animation');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        background.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    });

    const scrollToTopButton = document.getElementById('scrollToTop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const contactFloating = document.getElementById('contactFloating');
    const closeContact = document.getElementById('closeContact');

    function showContacts() {
        contactFloating.classList.add('visible');
    }

    function hideContacts() {
        contactFloating.classList.remove('visible');
    }

    setInterval(showContacts, 30000); // Show contacts every 30 seconds

    closeContact.addEventListener('click', hideContacts);

    // Initial show after 30 seconds
    setTimeout(showContacts, 30000);
});