// ========== DARK MODE TOGGLE ==========
const toggleBtn = document.getElementById("darkToggle");

function setThemeIcon() {
  toggleBtn.innerHTML = document.body.classList.contains("light")
    ? "<i class='bx bx-sun'></i>"
    : "<i class='bx bx-moon'></i>";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
  setThemeIcon();
});

// ========== LOAD THEME FROM LOCALSTORAGE ==========
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light");
  }
  setThemeIcon();
});

// ========== FORM SUBMIT HANDLER ==========
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const status = document.getElementById("status-text");
    if (status) {
      status.textContent = "Sending...";
      status.style.color = "lightblue";

      setTimeout(() => {
        status.textContent = "Message sent!";
        status.style.color = "lightgreen";
        form.reset();
      }, 1500);
    }
  });
}

// ========== RESPONSIVE MENU TOGGLE ==========
const menuIcon = document.getElementById("menu-icon");
const navList = document.getElementById("nav-list");

if (menuIcon && navList) {
  menuIcon.addEventListener("click", () => {
    navList.classList.toggle("active");
    const icon = menuIcon.querySelector("i");
    icon.classList.toggle("bx-x");
    icon.classList.toggle("bx-menu");
  });
}

// ========== CLOSE NAVBAR ON LINK CLICK ==========
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", () => {
    navList.classList.remove("active");
    const icon = menuIcon.querySelector("i");
    icon.classList.remove("bx-x");
    icon.classList.add("bx-menu");
  });
});
