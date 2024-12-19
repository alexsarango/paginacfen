const navEl = document.querySelector(".navbar");
const wavinghand = document.querySelector(".waving-hand");

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
    wavinghand.classList.remove('waving-hand');
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

let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})