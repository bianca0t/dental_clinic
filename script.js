const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const btnNavEl = document.querySelector(".btn-mobile");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const customers = [...document.querySelectorAll(".customers")];
const rightBtn = [...document.querySelectorAll(".btn-right")];
const leftBtn = [...document.querySelectorAll(".btn-left")];

customers.forEach((item, i) => {
  let containerDim = item.getBoundingClientRect();
  let containerWidth = containerDim.width;
  console.log(containerWidth);

  rightBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  leftBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
