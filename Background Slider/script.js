const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftbtn = document.getElementById("left");
const rightbtn = document.getElementById("right");

var activeSlide = 0;

bgtobody();

rightbtn.addEventListener("click", () => {
  activeSlide++;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  bgtobody();
  setActiveSlide();
});
leftbtn.addEventListener("click", () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  bgtobody();
  setActiveSlide();
});

function setActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[activeSlide].classList.add("active");
}

function bgtobody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}
