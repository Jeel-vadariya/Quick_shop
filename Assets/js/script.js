const form = document.getElementById('form');
const fullname = document.getElementById('fname');
const email = document.getElementById('emailid');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm-password');
const otp = document.getElementById('otp');
const newpassword = document.getElementById('new-password');
const newconfirmpassword = document.getElementById('confirm-password');
const input = document.getElementsByTagName('input');

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

    if(otpValue === ''){
        setError(otp, message.OTP);
    }
    else{
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
    else{
        setSuccess(email);
        forgotpassword();
    }
}
