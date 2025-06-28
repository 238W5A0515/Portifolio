
function sendMail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
    
    window.location.href = `mailto:peethamanikantha@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    // Optional: Reset form after submission attempt
    document.getElementById('emailForm').reset();
}

(function() {
    var currentPageUrl = window.location.href;
    var apiUrl = 'https://238w5a0515.github.io/Portifolio/';

    if (currentPageUrl !== apiUrl) {
        var overlayElement = document.createElement('div');
        overlayElement.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.8); display: flex; justify-content: center; align-items: center; z-index: 1000;';

        var contentElement = document.createElement('div');
        contentElement.style.cssText = 'max-width: 600px; padding: 20px; border-radius: 8px; background-color: #444; box-shadow: 0 0 10px rgba(255, 255, 255, 0.1); text-align: center; color: white; font-family: Arial, sans-serif;';

        var messageParagraph1 = document.createElement('p');
        messageParagraph1.textContent = 'This is not the original page.';

        var messageParagraph2 = document.createElement('p');
        var linkElement = document.createElement('a');
        linkElement.href = apiUrl;
        linkElement.style.color = '#007BFF';
        linkElement.textContent = 'Click here to visit the original page';
        messageParagraph2.appendChild(linkElement);

        contentElement.appendChild(messageParagraph1);
        contentElement.appendChild(messageParagraph2);
        overlayElement.appendChild(contentElement);

        document.body.appendChild(overlayElement);
    }
})();

  window.addEventListener('load', () => {
    document.querySelectorAll('.progress-fill').forEach(bar => {
        const width = bar.getAttribute('data-skill');
        bar.style.width = width;
    });
});




        // Custom Cursor
        const cursor = document.querySelector('.cursor');
        const cursorDot = document.querySelector('.cursor-dot');
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.display = 'block';
            cursorDot.style.display = 'block';
            
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
            
            cursorDot.style.left = `${e.clientX}px`;
            cursorDot.style.top = `${e.clientY}px`;
        });
        
        document.addEventListener('mouseleave', () => {
            cursor.style.display = 'none';
            cursorDot.style.display = 'none';
        });
        
        // Cursor effects on hover
        const hoverElements = document.querySelectorAll('a, button, .project-card, .skills-category');
        
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.width = '40px';
                cursor.style.height = '40px';
                cursor.style.borderColor = 'var(--accent-color)';
                cursorDot.style.backgroundColor = 'var(--accent-color)';
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.style.width = '20px';
                cursor.style.height = '20px';
                cursor.style.borderColor = 'var(--secondary-color)';
                cursorDot.style.backgroundColor = 'var(--secondary-color)';
            });
        });
        
        // Mobile Navigation
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
        
        // Back to Top Button
        const backToTop = document.querySelector('.back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        });

        
        // Animate skill bars when section is in view
        const skillBars = document.querySelectorAll('.skill-progress');
        
        const animateSkills = () => {
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        };
        
        // Simple intersection observer for skill animation
        window.addEventListener('scroll', () => {
            const skillsSection = document.getElementById('skills');
            const sectionPosition = skillsSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (sectionPosition < screenPosition) {
                animateSkills();
            }
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Animate achievements when section is in view
        const achievementCards = document.querySelectorAll('.achievement-card');
        
        const animateAchievements = () => {
            achievementCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 200);
            });
        };
        
        window.addEventListener('scroll', () => {
            const achievementsSection = document.getElementById('achievements');
            const sectionPosition = achievementsSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (sectionPosition < screenPosition) {
                animateAchievements();
            }
        });

        // Initialize achievement cards as invisible
        achievementCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
    
