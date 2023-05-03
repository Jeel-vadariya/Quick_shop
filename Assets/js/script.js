const form = document.getElementById('form');
const fullname = document.getElementById('fname');
const email = document.getElementById('emailid');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm-password');
const otp = document.getElementById('otp');
const newpassword = document.getElementById('new-password');
const newconfirmpassword = document.getElementById('confirm-password');
const input = document.getElementsByTagName('input');
const profile_name = document.getElementById('input-profile-name');
const profile_email = document.getElementById('input-profile-email');
const profile_img = document.getElementById('file');
// const contact_name = document.getElementById('contact-name');
// const contact_email = document.getElementById('contact-email');
// const contact_msg = document.getElementById('contact-msg');

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidPassword = password => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/;
    return re.test(String(password))
}

const validateInputs = (event) => {

    event.preventDefault();
    fullnameValue = fullname.value.trim();
    emailValue = email.value.trim();
    passwordValue = password.value.trim();
    confirm_passwordValue = confirm_password.value.trim();

    if (fullnameValue === '') {
        setError(fullname, message.FULLNAME);
    }
    else {
        setSuccess(fullname);
    }

    if (emailValue === '') {
        setError(email, message.EMAIL_REQ);
    }
    else if (!isValidEmail(emailValue)) {
        setError(email, message.EMAIL_VALID);
    }
    else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, message.PASSWORD);
    }
    else if (!isValidPassword(passwordValue)) {
        setError(password, message.PASSWORD_LENGTH);
    }
    else {
        setSuccess(password);
    }

    if (confirm_passwordValue === '') {
        setError(confirm_password, message.CONFIRM_PASSWORD);
    }
    else if (confirm_passwordValue !== passwordValue) {
        setError(confirm_password, message.MATCH_PASSWORD);
    }
    else {
        setSuccess(confirm_password);
    }

    if (validateInputs != null) {
        apicalling();
    }
}



const validate = (event) => {

    event.preventDefault();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (emailValue === '') {
        setError(email, message.EMAIL_REQ);
    }
    else if (!isValidEmail(emailValue)) {
        setError(email, message.EMAIL_VALID);
    }
    else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, message.PASSWORD);
    }
    else if (!isValidPassword(passwordValue)) {
        setError(password, message.PASSWORD_LENGTH);
    }
    else {
        setSuccess(password);
        loginapi();
    }
}

const validatenewpassword = (event) => {

    event.preventDefault();
    const otpValue = otp.value.trim();
    const newpasswordValue = newpassword.value.trim();
    const newconfirmpasswordValue = newconfirmpassword.value.trim();


    if (newpasswordValue === '') {
        setError(newpassword, message.NEW_PASSWORD);
    }
    else if (!isValidPassword(newpasswordValue)) {
        setError(newpassword, message.PASSWORD_LENGTH);
    }
    else {
        setSuccess(newpassword);
    }

    if (newconfirmpasswordValue === '') {
        setError(newconfirmpassword, message.NEW_CONFIRM_PASSWORD);
    }
    else if (newconfirmpasswordValue !== newpasswordValue) {
        setError(newconfirmpassword, message.MATCH_PASSWORD);
    }
    else {
        setSuccess(newconfirmpassword);
        resetpassword();
    }

    if (otpValue === '') {
        setError(otp, message.OTP);
    }
    else {
        setSuccess(otp);
    }
}

const validateforgotpassword = (event) => {

    event.preventDefault();
    const emailValue = email.value.trim();

    if (emailValue === '') {
        setError(email, message.EMAIL_REQ);
    }
    else if (!isValidEmail(emailValue)) {
        setError(email, message.EMAIL_VALID);
    }
    else {
        setSuccess(email);
        forgotpassword();
    }
}
const token = JSON.parse(localStorage.getItem("token"))
// console.log(token);

const updateprofile = (event, token) => {
    event.preventDefault();
    const profilenameValue = profile_name.value.trim();
    const profileemailValue = profile_email.value.trim();
    const profileimgValue = profile_img.value;

    if (profilenameValue === '') {
        setError(profile_name, message.NAME_REQ);
    }
    else {
        setSuccess(profile_name);
    }

    if (profileemailValue === '') {
        setError(profile_email, message.EMAIL_REQ);
    }
    else if (!isValidEmail(profileemailValue)) {
        setError(profile_email, message.EMAIL_VALID);
    }
    else {
        setSuccess(profile_email);
    }

    if (profileimgValue === '') {
        setError(profile_img, message.IMAGE_REQ);
    }
    else {
        updateuserprofile(token);
    }
}

// const displaydata = (event) => {

//     event.preventDefault();
//     const contactNameValue = contact_name.value.trim();
//     const contactEmailValue = contact_email.value.trim();
//     const contactMsgValue = contact_msg.value.trim();

//     if (contactNameValue === '') {
//         setError(contact_name, message.NAME_REQ);
//     }
//     else {
//         setSuccess(contact_name);
//     }

//     if (contactEmailValue === '') {
//         setError(contact_email, message.EMAIL_REQ);
//     }
//     else if (!isValidEmail(contactEmailValue)) {
//         setError(contact_email, message.EMAIL_VALID);
//     }
//     else {
//         setSuccess(contact_email);
//     }

//     if (contactMsgValue === '') {
//         setError(contact_msg, message.MSG_REQ);
//     }
//     else {
//         setSuccess(contact_msg);
//         display();
//     }

// }
