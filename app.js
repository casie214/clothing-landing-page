document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.element');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                entry.target.classList.remove('hidden');
            } else {
                entry.target.classList.remove('show');
                entry.target.classList.add('hidden');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        observer.observe(element);
    });
});

let text = document.getElementById('text');
let subtext = document.getElementById('subtext');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('plant');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let nguoimau = document.getElementById('nguoimau');


window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginBottom = value * .5 + 'px';
    leaf.style.left = value * .13 + 'px';
    hill5.style.left = value * .05 + 'px';
    subtext.style.marginBottom = value * .5 + 'px';

});


function dieuhuong() {
    location.assign('#section5');
}


let slideIndex = 1;
setInterval(() => plusSlides(1), 3000); // Change image every 3 seconds
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function startCountdown(countdownDate, daysId, hoursId, minutesId, secondsId) {
    function updateCountdown() {
        let now = new Date().getTime();
        let distance = countdownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById(daysId).innerText = String(days).padStart(2, '0');
        document.getElementById(hoursId).innerText = String(hours).padStart(2, '0');
        document.getElementById(minutesId).innerText = String(minutes).padStart(2, '0');
        document.getElementById(secondsId).innerText = String(seconds).padStart(2, '0');

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById(countdownId).innerHTML = "EXPIRED";
        }
    }

    let timer = setInterval(updateCountdown, 1000);
    updateCountdown();
}

// Thời gian đếm ngược đầu tiên
let countdownDate1 = new Date("August 5, 2024 15:37:25").getTime();
startCountdown(countdownDate1, "days1", "hours1", "minutes1", "seconds1");

// Thời gian đếm ngược thứ hai
let countdownDate2 = new Date("August 5, 2024 15:37:25").getTime();
startCountdown(countdownDate2, "days2", "hours2", "minutes2", "seconds2");


///

document.addEventListener("DOMContentLoaded", makeLinksSmooth);
function makeLinksSmooth() {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
        link.addEventListener("click", smoothScroll);
    });
}
function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", });
    }
}
targetElement.scrollIntoView({ behavior: "smooth", block: "end" });

