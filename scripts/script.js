document.addEventListener("touchstart", function() {}, true);

let toggleNav = () => {
    var navLinks = document.getElementById('navLinks')
    navLinks.classList.toggle('active')
}