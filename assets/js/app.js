// Nav
const menuButton = document.querySelector(".menu-burger");
const topNavbar = document.querySelector(".top-navbar");
const body = document.body;
const closeLinks = document.querySelectorAll(".close-nav");
menuButton.addEventListener("click", () => {
  topNavbar.classList.toggle("nav-open");
  body.classList.toggle("max-xl-overflow-hidden");
});
closeLinks.forEach((link) => {
  link.addEventListener("click", () => {
    topNavbar.classList.remove("nav-open");
    body.classList.remove("max-xl-overflow-hidden");
  });
});

// CURRENT YEAR
let currentYear = document.querySelector(".currentyear");
currentYear.innerHTML = new Date().getFullYear();

// FOOTER FORM
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("emailForm");
  const emailInput = document.getElementById("emailInput");
  const errorMsg = document.getElementById("errorMsg");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validate() {
    const email = emailInput.value.trim();
    if (!email) {
      errorMsg.textContent = "Email is required.";
      return false;
    }
    if (!emailPattern.test(email)) {
      errorMsg.textContent = "Please enter a valid email address.";
      return false;
    }
    errorMsg.textContent = "";
    return true;
  }

  // validate on submit
  form.addEventListener("submit", function (event) {
    if (!validate()) {
      // only block submission when invalid
      event.preventDefault();
    }
    // if valid → no preventDefault → form submits to getform.io
  });

  // validate on blur
  emailInput.addEventListener("blur", validate);
  emailInput.addEventListener("change", validate);

  // clear errors when typing
  emailInput.addEventListener("input", function () {
    errorMsg.textContent = "";
  });
});

// BACK TO TOP
const btn = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  const show = window.scrollY > 300;
  btn.classList.toggle("show", show);
});

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
