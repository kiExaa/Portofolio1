
  const btn = document.querySelector(".read-more-btn");
  const text = document.querySelector(".read-more-text");

  btn.addEventListener("click", () => {
    text.classList.toggle("collapsed");
    btn.textContent = text.classList.contains("collapsed") ? "Read More" : "Show Less";
  });
