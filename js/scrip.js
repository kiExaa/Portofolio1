// Toggle navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll behavior
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Active nav link
            navLinks.forEach(link => link.classList.remove('active'));
            let currentLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (currentLink) currentLink.classList.add('active');

            // Animate section
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });

    // Sticky header
    let header = document.querySelector('header');
    if (header) {
        header.classList.toggle('sticky', top > 100);
    }

    // Close navbar when scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Animate footer
    let footer = document.querySelector('footer');
    if (footer) {
        footer.classList.toggle(
            'show-animate',
            window.innerHeight + window.scrollY >= document.body.scrollHeight
        );
    }
};

