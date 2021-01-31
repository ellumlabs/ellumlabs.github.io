const submitButton = document.querySelector('#career_form-btn');

const careerFormFName = document.querySelector('#career_form-fn');
const careerFormLName = document.querySelector('#career_form-ln');
const careerFormEmail = document.querySelector('#career_form-email');

submitButton.onclick = function() {
    careerFormFName.value = "";
    careerFormLName.value = "";
    careerFormEmail.value = "";
}