const buttonDown = document.querySelectorAll(".faq-toggle");

buttonDown.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
