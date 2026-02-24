document.addEventListener('DOMContentLoaded', () => {
    const profileImg = document.querySelector('.profile-img');
    const imageWrapper = document.querySelector('.hero-image-wrapper');
    const blueCrescent = document.querySelector('.blue-crescent');

    // Owl Interaction: Looking at cursor
    imageWrapper.addEventListener('mousemove', (e) => {
        const rect = imageWrapper.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        
        // Rotate values (Looking at cursor effect)
        const rotateY = (mouseX / (rect.width / 2)) * 12; 
        const rotateX = (mouseY / (rect.height / 2)) * -12; 
        
        const moveX = mouseX * 0.03;
        const moveY = mouseY * 0.03;

        profileImg.style.transform = `
            scale(1.05) 
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg) 
            translate(${moveX}px, ${moveY}px)
        `;
        
        // Removed brightness/glow enhancement as requested
        
        // Subtle background reaction (fixed opacity)
        blueCrescent.style.transform = `translate(${moveX * -0.2}px, ${moveY * -0.2}px)`;
    });

    imageWrapper.addEventListener('mouseleave', () => {
        profileImg.style.transform = 'scale(1) rotateX(0) rotateY(0) translate(0, 0)';
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
