import './assets/style.scss';
import Glide from '@glidejs/glide';

function expandMobileMenu() {
    var mobileMenuSection = document.getElementById("menu");
    if (mobileMenuSection.style.display === "block") {
        mobileMenuSection.style.display = "none";
    } else {
        mobileMenuSection.style.display = "block";
    }
}

document.getElementById("mobileMenuButton").addEventListener("click", expandMobileMenu);

new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    focusAt: 'center',
    peek: 320,
    gap: 32,
    breakpoints: {
        576: {
            perView: 1,
            peek: 32
        },
        768: {
            perView: 1,
            peek: 150
        }
    }
}).mount();

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}

function validateForm() {
    let form = document.forms["contactForm"];
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let emailAddress = document.getElementById('emailAddress').value;

    emailAddress.addEventListener("input", (event) => {
        console.log("peepo");
        if (!validateEmail(emailAddress.value)) {
            emailAddress.setCustomValidity("Please enter a valid address");
        } else {
            emailAddress.setCustomValidity("");
        }
    });
}
