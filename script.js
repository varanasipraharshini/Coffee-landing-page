const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});
const mobileMenuStyle = document.createElement("style");

mobileMenuStyle.innerHTML = `

@media(max-width:950px){

.nav-links.active{

display:flex !important;
flex-direction:column;

position:absolute;
top:80px;
right:20px;

background:#3b2415;

padding:20px;

border-radius:15px;

width:220px;

box-shadow:0 15px 35px rgba(0,0,0,.25);

}

}

`;

document.head.appendChild(mobileMenuStyle);
window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(38,22,13,.98)";

        navbar.style.boxShadow =
        "0 5px 25px rgba(0,0,0,.25)";

    }

    else{

        navbar.style.background =
        "rgba(52,31,18,.92)";

        navbar.style.boxShadow =
        "none";

    }

});
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(
        this.getAttribute("href")
        );

        target.scrollIntoView({

            behavior:"smooth"

        });

        navLinks.classList.remove("active");

    });

});
window.addEventListener("load", () => {

    const heroText =
    document.querySelector(".hero-text");

    const heroImage =
    document.querySelector(".hero-cup");

    heroText.style.opacity = "0";
    heroImage.style.opacity = "0";

    heroText.style.transform =
    "translateY(40px)";

    heroImage.style.transform =
    "translateY(40px)";

    setTimeout(() => {

        heroText.style.transition =
        "1s ease";

        heroText.style.opacity = "1";

        heroText.style.transform =
        "translateY(0px)";

    },300);

    setTimeout(() => {

        heroImage.style.transition =
        "1.3s ease";

        heroImage.style.opacity = "1";

        heroImage.style.transform =
        "translateY(0px)";

    },600);

});
const revealElements = document.querySelectorAll(

".why-card, .menu-card, .review-card, .about-image, .about-text, .contact-form, .contact-info"

);

function revealOnScroll(){

    revealElements.forEach(item => {

        const windowHeight =
        window.innerHeight;

        const revealTop =
        item.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            item.style.opacity = "1";

            item.style.transform =
            "translateY(0)";

        }

    });

}

revealElements.forEach(item => {

    item.style.opacity = "0";

    item.style.transform =
    "translateY(50px)";

    item.style.transition =
    "all 0.8s ease";

});

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();
const form =
document.querySelector("form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert(
        "☕ Thank you for contacting Cozy Coffee House!\n\nWe will get back to you soon."
    );

    form.reset();

});
const cards =
document.querySelectorAll(".menu-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0px) scale(1)";

    });

});
const footer =
document.querySelector("footer p");

if(footer){

footer.innerHTML =
`Crafted with Love & Premium Coffee ❤️ | ${new Date().getFullYear()}`;

}