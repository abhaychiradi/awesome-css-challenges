const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, index) =>
        `<span style=transition-delay:${0.05 * index}s>${letter}</span>`
    )
    .join("");
});
