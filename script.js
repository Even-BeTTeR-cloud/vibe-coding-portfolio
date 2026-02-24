document.addEventListener('DOMContentLoaded', () => {
    const profileImg = document.querySelector('.profile-img');
    const imageWrapper = document.querySelector('.hero-image-wrapper');
    const blueCrescent = document.querySelector('.blue-crescent');

    // Owl Interaction: Looking at cursor & Spreading wings
    imageWrapper.addEventListener('mousemove', (e) => {
        const rect = imageWrapper.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate mouse position relative to center
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        
        // Rotate values (Looking at cursor effect)
        const rotateY = (mouseX / (rect.width / 2)) * 15; // Max 15 degrees
        const rotateX = (mouseY / (rect.height / 2)) * -15; // Inverse for natural feel
        
        // "Spread Wings" effect (Scale up + Flare)
        // Move slightly towards the cursor as if lunging/preparing to fly
        const moveX = mouseX * 0.05;
        const moveY = mouseY * 0.05;

        profileImg.style.transform = `
            scale(1.15) 
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg) 
            translate(${moveX}px, ${moveY}px)
        `;
        
        // Enhance glow when "active"
        profileImg.style.filter = `
            drop-shadow(0 40px 80px rgba(0, 98, 255, 0.4))
            brightness(1.1)
        `;
        
        // Subtle background reaction
        blueCrescent.style.transform = `translate(${moveX * -0.3}px, ${moveY * -0.3}px) scale(1.1)`;
        blueCrescent.style.opacity = "0.8";
    });

    imageWrapper.addEventListener('mouseleave', () => {
        profileImg.style.transform = 'scale(1) rotateX(0) rotateY(0) translate(0, 0)';
        profileImg.style.filter = 'drop-shadow(0 40px 70px rgba(0,0,0,0.25)) brightness(1)';
        blueCrescent.style.transform = 'translate(0, 0) scale(1)';
        blueCrescent.style.opacity = "0.5";
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
