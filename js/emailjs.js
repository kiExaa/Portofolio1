// toggle navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

// scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scorll
            sec.classList.add('show-animate');
        }
        // if wan to use animation that repeats on scroll use this
        else{
            sec.classList.remove('show-animate');

        }
    });
    //stiky header
    let header = document.querySelector('header');

    header.classList.toggle('stiky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    //animation footer on scroll
        let footer = document.querySelector('footer');
    if (footer) {
        footer.classList.toggle(
            'show-animate',
            this.innerHeight + this.scrollY >= document.body.scrollHeight
        );
    }

    

};

  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const popup = document.getElementById("popup-success");

    emailjs.sendForm("service_rcce44o", "template_w3m54v5", this)
      .then(() => {
        popup.textContent = "✔ Pesan berhasil dikirim!";
        popup.style.background = "#28a745";
        popup.classList.add("show");

        setTimeout(() => popup.classList.remove("show"), 3000);
        this.reset();
      }, (error) => {
        popup.textContent = "❌ Gagal mengirim. Coba lagi.";
        popup.style.background = "crimson";
        popup.classList.add("show");
        setTimeout(() => popup.classList.remove("show"), 3000);
      });
  });

