const form = document.querySelector("#contactForm");
const name = document.querySelector("#firstName");
const nameError = document.querySelector("#nameError");
const object = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#contactMessage");
const addressError = document.querySelector("#messageError");

function validateForm() {
    event.preventDefault();

    if(firstName.value.trim().length > 0) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if(subject.value.trim().length > 10) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }


    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
     } else {
         emailError.style.display = "block";
     }


    
}
function validateForm(event) {
    event.preventDefault();
    message.innerHTML = '<div class="message">Your message has been submitted</div>';
    form.reset();
}

form.addEventListener("submit", validateForm);

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}