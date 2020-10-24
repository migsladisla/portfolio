var prevScrollpos = window.pageYOffset;
var navbar = document.getElementById("navbar");

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
  
    if (currentScrollPos > 60) {
        navbar.style.zIndex =  1;
        navbar.style.opacity =  1;
        navbar.classList.add("sticky", "reveal-in");
    } else {
        navbar.style.zIndex =  -1;
        navbar.style.opacity =  0;
        navbar.classList.remove("sticky", "reveal-in");
    }
}

function expandNavbar() {
    if (navbar.classList.length === 3) {
        navbar.classList.add("responsive");
    } else {
        navbar.classList.remove("responsive");
    }
}