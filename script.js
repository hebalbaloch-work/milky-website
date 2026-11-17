
// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {

    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


// CLOSE MENU AFTER CLICK

document.querySelectorAll(".menu a").forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("active");
        menuBtn.textContent = "☰";

    });

});


// CONTACT / ORDER FORM DEMO

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const order = document.getElementById("order").value.trim();

    const location = document.getElementById("location").value.trim();

    if (!name || !phone || !order || !location) {

        formMessage.textContent = "Please fill in all the details.";

        return;

    }

    formMessage.textContent =
        "Thank you, " + name +
        "! Your details have been entered successfully. Please contact Milky to confirm your order.";

    contactForm.reset();

});
