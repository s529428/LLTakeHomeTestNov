import './assets/style.scss';
import 'jquery';

jQuery(function() {
    jQuery('.glide__slides').slick({
        centerMode: true,
        centerPadding: '20%',
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    jQuery('.glide__arrow--left').on('click', function(){
        jQuery('.glide__slides').slick('slickPrev');
    });
    jQuery('.glide__arrow--right').on('click', function() {
        jQuery('.glide__slides').slick('slickNext');
    })
});



function expandMobileMenu() {
    var mobileMenuSection = document.getElementById("menu");
    if (mobileMenuSection.style.display === "block") {
        mobileMenuSection.style.display = "none";
    } else {
        mobileMenuSection.style.display = "block";
    }
}

document.getElementById("mobileMenuButton").addEventListener("click", expandMobileMenu);



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
