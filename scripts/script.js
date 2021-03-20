document.addEventListener("touchstart", function () { }, true);

let toggleNav = () => {
    var navLinks = document.getElementById('navLinks')
    navLinks.classList.toggle('active')
}

//callback for observer
let addSlideInView = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slideIn')
        }
    })
}

let slideInSkills = (entries, observer) => {
   
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slideIn-Left')
            console.log('we working')
        }
    })

}

const options = {
    threshold: 0.5
}

const skillOptions = {
    root: null,
    rootMargin: '300px',
    threshold: 1.0
}

const slideInObserver = new IntersectionObserver(addSlideInView, options);
const slideInSkillsObserver = new IntersectionObserver(slideInSkills, skillOptions);

const aboutImage = document.querySelector('#aboutImage');
slideInObserver.observe(aboutImage)

//Observe each individual tech card
document.querySelectorAll('.techCard')
    .forEach(card => {slideInSkillsObserver.observe(card)})
