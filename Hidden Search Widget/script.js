const button = document.querySelector(".btn");
const search = document.querySelector(".search");
const searchFeild = document.querySelector(".input");

button.addEventListener("click", () => {
  search.classList.toggle("active");
  searchFeild.focus();
});
