/*===== MENU SHOW/HIDDEN =====*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.querySelector(".c-header__menu");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("is-active");
  navMenu.classList.toggle("is-showmenu");
});

window.addEventListener("resize", function () {
  if (window.innerWidth < 768) {
    navMenu.classList.remove("is-showmenu");
    navToggle.classList.remove("is-active");
  }
});

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".c-header__link");
function linkAction() {
  // When we click on each menu__link, we remove the show-menu class
  navToggle.classList.toggle("is-active");
  navMenu.classList.toggle("is-showmenu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
