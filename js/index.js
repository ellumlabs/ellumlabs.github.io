const submitButton = document.querySelector('#contact_form-btn');

const contactFormNameInput = document.querySelector('#contact_form-name');
const contactFormEmailInput = document.querySelector('#contact_form-email');
const contactFormCNameInput = document.querySelector('#contact_form-companyname');
const contactFormTitleInput = document.querySelector('#contact_form-jobtitle');
const contactFormMessageInput = document.querySelector('#contact_form-message');

submitButton.onclick = function() {
    alert("Thank you for reaching out. We will get back to you soon!");

    contactFormNameInput.value = "";
    contactFormEmailInput.value = "";
    contactFormCNameInput.value = "";
    contactFormTitleInput.value = "";
    contactFormMessageInput.value = "";
}