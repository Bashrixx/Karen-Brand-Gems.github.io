document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const logo = document.querySelector('.navbar .logo');
    const dropButtons = document.querySelectorAll('.dropbutton');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            navLinks.insertBefore(logo, navLinks.firstChild);
            navLinks.style.textAlign = 'center';
            navLinks.style.width = '100%';
        } else {
            document.querySelector('.navbar').insertBefore(logo, navLinks);
            navLinks.style.textAlign = '';
            navLinks.style.width = '';
        }
    });

    dropButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const dropdownContent = this.nextElementSibling;
            dropdownContent.classList.toggle('show');
        });
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbutton')) {
            const dropdowns = document.querySelectorAll('.dropdown-content');
            dropdowns.forEach(dropdown => {
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            });
        }
    });

    /*const searchBar = document.getElementById('searchBar');
    const searchIcon = document.querySelector('.search-icon');

  searchIcon.addEventListener('click', function() {
        const searchText = searchBar.value.toLowerCase();
        const elements = document.querySelectorAll('body *');

        elements.forEach(element => {
            if (element.textContent.toLowerCase().includes(searchText)) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });*/

    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let slideInterval = setInterval(showSlides, 3000);

    function showSlides() {
        slides.forEach(slide => slide.style.display = 'none');
        dots.forEach(dot => dot.className = dot.className.replace(' active', ''));
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].className.add('active');
    }

    window.moveSlide = function(n) {
        slideIndex += n - 1;
        if (slideIndex < 0) slideIndex = slides.length - 1;
        clearInterval(slideInterval);
        showSlides();
        slideInterval = setInterval(showSlides, 3000);
    }

    window.currentSlide = function(n) {
        slideIndex = n - 1;
        clearInterval(slideInterval);
        showSlides();
        slideInterval = setInterval(showSlides, 3000);
    }
});