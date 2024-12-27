const navEl = document.querySelector(".navbar");

window.addEventListener('scroll',() => {
    if (window.scrollY > 50) {
        navEl.classList.add('nav-scrolled');
    }
    else if (window.scrollY <= 50) {
        navEl.classList.remove('nav-scrolled');
    }
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const links = document.querySelectorAll(".nav-menu-link");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
});

window.addEventListener("resize", () => {
    if (window.matchMedia("(max-width: 550px)").matches) {
      closeMenu();
    }
});

if (window.matchMedia("(max-witdh: 550px").matches) {
    closeMenu();
}

function closeMenu() {
    links.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
      });
    });
}
