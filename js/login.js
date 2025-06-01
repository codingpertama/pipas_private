        const authCard = document.getElementById('authCard');
        const loginToggle = document.getElementById('loginToggle');
        const signupToggle = document.getElementById('signupToggle');

        signupToggle.addEventListener('click', () => {
            authCard.classList.add('flipped');
            loginToggle.classList.remove('active');
            signupToggle.classList.add('active');
        });

        loginToggle.addEventListener('click', () => {
            authCard.classList.remove('flipped');
            signupToggle.classList.remove('active');
            loginToggle.classList.add('active');
        });

        document.querySelectorAll('.submit-btn, .social-icon').forEach(button => {
            button.addEventListener('click', function(e) {
                const x = e.clientX - e.target.getBoundingClientRect().left;
                const y = e.clientY - e.target.getBoundingClientRect().top;
                
                const ripple = document.createElement('span');
                ripple.className = 'ripple';
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                ripple.style.background = 'rgba(255,255,255,0.4)';
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 1000);
            });
        });