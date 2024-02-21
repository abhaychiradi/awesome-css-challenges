const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("myColor");
const clearBtn = document.getElementById("clear");

let size = sizeEl.innerHTML;
let color = colorEl.value;
let x = undefined;
let y = undefined;
let ispressed = false;

decreaseBtn.addEventListener("click", () => {
  if (size > 1) {
    size--;
    sizeEl.innerHTML = size;
  }
});
increaseBtn.addEventListener("click", () => {
  if (size < 50) {
    size++;
    sizeEl.innerHTML = size;
  }
});
clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, 700, 700);
});

drawCircle(x, y);

canvas.addEventListener("mousedown", (e) => {
  ispressed = true;
  x = e.offsetX;
  y = e.offsetY;
  color = colorEl.value;
});

canvas.addEventListener("mouseup", (e) => {
  ispressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (ispressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
