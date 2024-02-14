const toggle = document.querySelector(".toggle");
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");

const days = [
  "Sunday",
  "Monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

toggle.addEventListener("click", () => {
  const html = document.querySelector("html");
  toggle.innerHTML = ``;
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    toggle.innerHTML = `Dark Mode`;
  } else {
    html.classList.add("dark");
    toggle.innerHTML = `Light Mode`;
  }
});

function setTime() {
  const time = new Date();
  const hours24 = time.getHours();
  const hour = time.getHours() % 12;
  const minute = time.getMinutes();
  const second = time.getSeconds();
  const date = time.getDate();
  const day = time.getDay();
  const month = time.getMonth();
  const ampm = hours24 >= 12 ? "PM" : "AM";
  hourEl.style.transform = `translate(-50%,-100%) rotate(${scale(
    hour,
    0,
    11,
    0,
    360
  )}deg)`;
  minuteEl.style.transform = `translate(-50%,-100%) rotate(${scale(
    minute,
    0,
    59,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translate(-50%,-100%) rotate(${scale(
    second,
    0,
    59,
    0,
    360
  )}deg)`;

  timeEl.innerHTML = `${hour == 0 ? `12` : hour}:${
    minute < 10 ? `0${minute}` : minute
  }${ampm}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]}<span class="circle">${date}</span>`;
}

setInterval(setTime, 1000);
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
