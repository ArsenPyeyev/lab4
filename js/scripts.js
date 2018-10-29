console.log("hello");

const menuToggle = document.getElementById('menu-toggle');
const menuNav = document.getElementById('menu-nav');

function toggleMenu() {
  console.log("called toggleMenu"); //sends message into console
  menuNav.classList.toggle("menu-toggle") //toggles nav tag visibility when menu is clicked
}

menuToggle.addEventListener("click", toggleMenu); //calls toggleMenu function
