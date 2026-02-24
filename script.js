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

    // Teaching History Data
    const historyData = {
        'Math': [
            'Algebra & Calculus (2020-2024)',
            'Geometry & Trigonometry (2018-2020)',
            'Competition Math Coaching'
        ],
        'Computer Science': [
            'Python Programming Fundamentals',
            'Algorithms & Data Structures',
            'Web Development Workshop (HTML/CSS/JS)'
        ]
    };

    const historyPanel = document.getElementById('teaching-history');
    const historyTitle = document.getElementById('history-title');
    const historyContent = document.getElementById('history-content');
    const closeBtn = document.querySelector('.close-btn');

    document.querySelectorAll('.history-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const subject = btn.getAttribute('data-subject');
            historyTitle.innerText = `${subject} Teaching History`;
            
            // Clear and fill content
            historyContent.innerHTML = '';
            historyData[subject].forEach(item => {
                const li = document.createElement('li');
                li.innerText = item;
                historyContent.appendChild(li);
            });

            historyPanel.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        historyPanel.style.display = 'none';
    });

    console.log('Portfolio initialized successfully.');
});
