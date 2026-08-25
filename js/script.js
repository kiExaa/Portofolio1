// Toggle navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Scroll section link highlight dan animasi
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let header = document.querySelector('header');
  header.classList.toggle('stiky', window.scrollY > 100);

  // Animasi section dan aktifkan link
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => link.classList.remove('active'));
      document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      sec.classList.add('show-animate');
    } else {
      sec.classList.remove('show-animate');
    }
  });

  // Tutup menu saat klik nav link
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

  // Footer animasi saat scroll ke bawah
  let footer = document.querySelector('footer');
  if (footer) {
    footer.classList.toggle(
      'show-animate',
      window.innerHeight + window.scrollY >= document.body.scrollHeight
    );
  }
};

// Form Submit via Formspree
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const popup = document.getElementById("popup-success");

  fetch("https://formspree.io/f/xovwnwlq", {
    method: "POST",
    headers: { 'Accept': 'application/json' },
    body: formData
  }).then(response => {
    if (response.ok) {
      popup.textContent = "✔ Pesan berhasil dikirim!";
      popup.style.background = "#28a745";
    } else {
      popup.textContent = "❌ Gagal mengirim. Coba lagi.";
      popup.style.background = "crimson";
    }
    popup.classList.add("show");
    setTimeout(() => popup.classList.remove("show"), 3000);
    form.reset();
  }).catch(() => {
    popup.textContent = "❌ Terjadi kesalahan saat mengirim.";
    popup.style.background = "crimson";
    popup.classList.add("show");
    setTimeout(() => popup.classList.remove("show"), 3000);
  });
});
