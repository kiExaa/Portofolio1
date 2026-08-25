// Theme Toggle (Dark/Light Mode)
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggleBtn.innerHTML = document.body.classList.contains("light")
    ? "<i class='bx bx-sun'></i>"
    : "<i class='bx bx-moon'></i>";
});

// Auto detect OS theme preference on load
window.addEventListener("DOMContentLoaded", () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.body.classList.add("light");
    toggleBtn.innerHTML = "<i class='bx bx-sun'></i>";
  }
});

// Contact form (EmailJS / dummy feedback)
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const statusText = document.getElementById("status-text");
  statusText.textContent = "Sending...";
  statusText.style.color = "#3b82f6";
  setTimeout(() => {
    statusText.textContent = "Message sent successfully!";
    statusText.style.color = "lightgreen";
    this.reset();
  }, 1500);
});


