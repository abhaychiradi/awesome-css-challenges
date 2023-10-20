const image = document.querySelector(".bg");
const text = document.querySelector(".loading-text");

let load = 0;

let int = setInterval(blurLoad, 30);

function blurLoad() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }

  text.innerHTML = `${load}`;
  text.style.opacity = scale(load, 0, 100, 1, 0);
  image.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
