const submitButton = document.querySelector('#career_form-btn');

const careerFormFName = document.querySelector('#career_form-fn');
const careerFormLName = document.querySelector('#career_form-ln');
const careerFormEmail = document.querySelector('#career_form-email');

submitButton.onclick = function() {
    alert("Thank you for signing up! We will keep you updated on future job posts.");
    careerFormFName.value = "";
    careerFormLName.value = "";
    careerFormEmail.value = "";
}