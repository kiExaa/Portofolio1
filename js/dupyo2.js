// =================== Toggle Navbar ===================
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// =================== Scroll Behavior ===================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

window.onscroll = () => {
  // Sticky Header
  header.classList.toggle('stiky', window.scrollY > 100);

  // Section Active & Animation
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 100;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => link.classList.remove('active'));
      document.querySelector(`header nav a[href*="${id}"]`)?.classList.add('active');
      sec.classList.add('show-animate');
    } else {
      sec.classList.remove('show-animate');
    }

    // Khusus Project Section: tampilkan animasi horizontal
    if (id === "project") {
      const projectBoxes = sec.querySelectorAll(".project-box");
      if (top >= offset && top < offset + height) {
        projectBoxes.forEach(box => box.classList.add("show-animate"));
      } else {
        projectBoxes.forEach(box => box.classList.remove("show-animate"));
      }
    }
  });

  // Footer Animation on Scroll Bottom
  if (footer) {
    const isBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight;
    footer.classList.toggle('show-animate', isBottom);
  }
};

// =================== Close Navbar on Link Click ===================
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  });
});

// =================== Contact Form (Formspree) ===================
const contactForm = document.getElementById("contact-form");
const popup = document.getElementById("popup-success");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(contactForm);

  fetch("https://formspree.io/f/xovwnwlq", {
    method: "POST",
    headers: { 'Accept': 'application/json' },
    body: formData
  })
    .then(response => {
      if (response.ok) {
        showPopup("✔ Pesan berhasil dikirim!", "#28a745");
        contactForm.reset();
      } else {
        showPopup("❌ Gagal mengirim. Coba lagi.", "crimson");
      }
    })
    .catch(() => {
      showPopup("❌ Terjadi kesalahan saat mengirim.", "crimson");
    });
});

// =================== Popup Notification ===================
function showPopup(message, background) {
  popup.textContent = message;
  popup.style.background = background;
  popup.classList.add("show");
  setTimeout(() => popup.classList.remove("show"), 3000);
}

// =================== Project Auto Scroll Clone ===================
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.project-container');
  if (container) {
    const clone = container.innerHTML;
    container.innerHTML += clone; // Clone for infinite scroll effect
  }
});
