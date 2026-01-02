const navbar = document.getElementById('mainNavbar');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                
                navbar.classList.remove('bg-transparent', 'py-3');
                navbar.classList.add('bg-custom', 'shadow', 'py-2');
            } else {
                navbar.classList.add('bg-transparent', 'py-3');
                navbar.classList.remove('bg-custom', 'shadow', 'py-2');
            }
        });