const navMenu = document.getElementById("nav-menu"),
navToggle = document.getElementById("nav-toggle"),
navItem = document.querySelectorAll(".nav_item"),
header = document.getElementById("header");

//open and close menu
navToggle.addEventListener("click", () => {
navMenu.classList.toggle("nav_menu--open");
changeIcon();
});

const scrollToHireMe = () => {
  const hireMeSection = document.getElementById("hireMe");
  hireMeSection.scrollIntoView({ behavior: "smooth" });
};

//close the menu when the user clicks the nav links
navItem.forEach((item) => {
item.addEventListener("click", () => {
  if (navMenu.classList.contains("nav_menu--open")) {
    navMenu.classList.remove("nav_menu--open");
  }
  changeIcon();
});
});

//Change nav toggle icon
function changeIcon() {
if (navMenu.classList.contains("nav_menu--open")) {
  navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
} else {
  navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
}
}

//testimonial Slide
const testimonialSlide = new Swiper(".testimonial_wrapper", {
loop: true,
spaceBetween: 30,
centeredSlides: true,
effect: "coverflow",
grabCursor: true,
slidesPerView: 1,
coverflowEffect: {
  rotate: 50,
  stretch: 0,
  depth: 100,
  modifier: 1,
  slideShadows: true,
},
pagination: {
  el: ".swiper-pagination",
  clickable: true,
},

breakpoints: {
  520: {
    slidesPerView: "auto",
  },
},
});

//header scroll animation
window.addEventListener("scroll", () => {
if (window.scrollY > 40) {
  header.classList.add("header--scroll");
} else {
  header.classList.remove("header--scroll");
}
});

//ScrollReveal animations
const sr = ScrollReveal({
duration: 1000,
distance: "100px",
reset: false,
});

sr.reveal(".hero_content, .about_content");
sr.reveal(".hero_img", { origin: "top" });
sr.reveal(".about_img", { origin: "top" });

sr.reveal(
".hero_info-wrapper, .skills_title, .skills_content, .qualification_name, .qualification_item, .service_card, .project_box, .testimonial_wrapper, .footer_content",
{
  interval: 100,
}
);

sr.reveal(".qualification_footer-text, .contact_content", {
origin: "left",
});

sr.reveal(".qualification_footer .btn, .contact_btn", { origin: "right" });

document.addEventListener('DOMContentLoaded', () => {
const yearSpan = document.querySelector('.footer_copyright');
const currentYear = new Date().getFullYear();
yearSpan.innerHTML = yearSpan.innerHTML.replace('{currentYear}', currentYear);
});