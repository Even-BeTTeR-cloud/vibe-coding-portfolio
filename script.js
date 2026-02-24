document.addEventListener('DOMContentLoaded', () => {
    const profileImg = document.querySelector('.profile-img');
    const imageWrapper = document.querySelector('.hero-image-wrapper');
    const blueCrescent = document.querySelector('.blue-crescent');

    // Subtle parallax effect on mouse move
    imageWrapper.addEventListener('mousemove', (e) => {
        const { width, height } = imageWrapper.getBoundingClientRect();
        const centerX = width / 2;
        const centerY = height / 2;
        const mouseX = e.clientX - imageWrapper.getBoundingClientRect().left;
        const mouseY = e.clientY - imageWrapper.getBoundingClientRect().top;

        const moveX = (mouseX - centerX) / 25;
        const moveY = (mouseY - centerY) / 25;

        profileImg.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
        blueCrescent.style.transform = `translate(${moveX * -0.5}px, ${moveY * -0.5}px)`;
    });

    imageWrapper.addEventListener('mouseleave', () => {
        profileImg.style.transform = 'scale(1.1) translate(0, 0)';
        blueCrescent.style.transform = 'translate(0, 0)';
    });

    // Skills list interaction
    const skills = document.querySelectorAll('.skills-list li');
    skills.forEach(skill => {
        skill.addEventListener('mouseenter', () => {
            skill.style.color = '#0062ff';
        });
        skill.addEventListener('mouseleave', () => {
            skill.style.color = '#777777';
        });
    });

    console.log('Portfolio initialized successfully.');
});
