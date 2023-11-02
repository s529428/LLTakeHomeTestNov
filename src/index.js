import './assets/style.scss';

function expandMobileMenu() {
    var mobileMenuSection = document.getElementById("menu");
    if (mobileMenuSection.style.display === "block") {
        mobileMenuSection.style.display = "none";
    } else {
        mobileMenuSection.style.display = "block";
    }
}

document.getElementById("mobileMenuButton").addEventListener("click", expandMobileMenu);