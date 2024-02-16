let btn = document.querySelector("#menu-btn");
let menu = document.querySelector("#menu");

btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
}
