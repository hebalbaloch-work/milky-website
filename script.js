
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Mobile navigation
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
    });
  });
}

// Contact form
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formMessage = document.getElementById("formMessage");

    if (formMessage) {
      formMessage.textContent =
        "Thank you for contacting Milky! This is a demo form.";
    }

    contactForm.reset();
  });
}
