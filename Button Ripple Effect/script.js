const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xIn = x - buttonLeft;
    const yIn = y - buttonTop;

    const circleEl = document.createElement("span");
    circleEl.classList.add("circle");
    circleEl.style.top = `${yIn}px`;
    circleEl.style.left = `${xIn}px`;
    this.appendChild(circleEl);

    setTimeout(() => circleEl.remove(), 500);
    //To cleam DOM, multiple circleEl are removed
  });
});
