console.log("Day 1 Task Loaded");

/* Hamburger */
const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelectorAll(".nav-menu a");
const body = document.body;

/* Toggle Menu */
hamburger.addEventListener("click", () => {
  navbar.classList.toggle("nav-open");
  body.classList.toggle("no-scroll");
});

/* Auto Close on Link Click */
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("nav-open");
    body.classList.remove("no-scroll");
  });
});
