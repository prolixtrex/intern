//navbar fixed top scroll background color
const header = document.querySelector('.header');
window.onscroll = () => {
    if (window.scrollY > 100) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}

//hamburger menu
const menu = document.getElementById("menu")
const navbar = document.getElementById("navbar")
const navbarul = document.getElementById("navbarul")
const img = document.getElementById("img")
let imgMenu = true;

menu.addEventListener("click", () => {
    navbar.classList.toggle("active")
    navbarul.classList.toggle("active")
    if (imgMenu) {
        img.src = "./icons/close.jpeg";
        imgMenu = false
    } else {
        img.src = "./icons/menu.jpeg";
        imgMenu = true
    }

})