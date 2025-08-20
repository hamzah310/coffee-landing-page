// const menuOpenButton = document.querySelector("#menu-open-button");
// const menuCloseButton = document.getElementById("menu-close-button");
// const navMenu = document.querySelector(".navbar .nav-menu");

// menuOpenButton.addEventListener("click", () => {
//   navMenu.style.left = "0";
// });
// menuCloseButton.addEventListener("click", () => {
//   navMenu.style.left = "-300px";
// });

/*الطريقة اللي فوق انا سويتها بنفسي وتؤدي نفس غرض الطريقة اللي تحت لكن الطريقة اللي تحت احترافية اكثر لذلك اعتمدها*/

const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.getElementById("menu-close-button");

menuOpenButton.addEventListener("click", () => {
// Toggle Mobile Menu Visibility
  document.body.classList.toggle("show-mobile-menu");
});
// Close Menu When The Nav Link Is Clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Close Menu When The Close Button Is Clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => menuOpenButton.click())
});


/* Initialize Swiper */
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
  }
});
