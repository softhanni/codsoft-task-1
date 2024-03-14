const obs = new IntersectionObserver((entry) => {
    entry.forEach((ent) => {

        if (ent.isIntersecting) {
            ent.target.classList.add("show");
        } else {
            ent.target.classList.remove("show")
        }
    })
})

const exp = document.querySelectorAll(".animation");
exp.forEach((el) => obs.observe(el));









const obs2 = new IntersectionObserver((entry) => {
    entry.forEach((ent) => {

        if (ent.isIntersecting) {
            ent.target.classList.add("showx");
        } else {
            ent.target.classList.remove("showx")
        }
    })
})

const animationx = document.querySelectorAll(".project");
animationx.forEach((el) => obs2.observe(el));







const obs3 = new IntersectionObserver((entry) => {
    entry.forEach((ent) => {

        if (ent.isIntersecting) {
            ent.target.classList.add("shows");
        } else {
            ent.target.classList.remove("shows")
        }
    })
})

const animations = document.querySelectorAll(".service");
animations.forEach((el) => obs3.observe(el));






const obs4 = new IntersectionObserver((entry) => {
    entry.forEach((ent) => {

        if (ent.isIntersecting) {
            ent.target.classList.add("showsec");
        } else {
            ent.target.classList.remove("showsec")
        }
    })
})

const cont = document.querySelectorAll(".section");
cont.forEach((el) => obs4.observe(el));











const obs5 = new IntersectionObserver((entry) => {
    entry.forEach((ent) => {

        if (ent.isIntersecting) {
            ent.target.classList.add("skani");
        } else {
            ent.target.classList.remove("skani")
        }
    })
})

const sani = document.querySelectorAll(".Skills");
sani.forEach((el) => obs5.observe(el));








const texts = ['Hanif', 'Web Developer'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;

function type() {
    const current = texts[textIndex % texts.length];
    let displayText = current.substring(0, charIndex);
    document.getElementById('typeeffect').textContent = displayText;

    if (!isDeleting && charIndex++ === current.length) {
        isDeleting = true;
        typingSpeed = 150;
    } else if (isDeleting && charIndex-- === 0) {
        isDeleting = false;
        textIndex++;
        typingSpeed = 250;
    }

    setTimeout(type, typingSpeed);
}

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(type, typingSpeed);
});












//   show more 

let more = document.querySelector(".showmore");
more.addEventListener("click", show);

function show() {
    let dd = document.querySelector(".dropd")
    dd.style.display = "block";

}

let closemore = document.querySelector(".closemore");
closemore.addEventListener("click", close);

function close() {
    let dd = document.querySelector(".dropd")
    dd.style.display = "none";

}


