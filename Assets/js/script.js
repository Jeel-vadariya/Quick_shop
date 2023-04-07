const form = document.getElementById('form');
const fullname = document.getElementById('fname');
const email = document.getElementById('emailid');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirmpassword');
const newpassword = document.getElementById('new-password');
const newconfirmpassword = document.getElementById('confirm-new-password');
const input = document.getElementsByTagName('input');
const eye = document.getElementsByClassName("fa-eye-slash");

eye[0].addEventListener("click", function () {
   
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    // toggle the eye icon
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
    });
// input.addEventListener('click', element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// });
// signupbtn.addEventListener('click', e => {
//     e.preventDefault();

//     validateInputs();
// });

// loginbtn.addEventListener('click', e => {
//     e.preventDefault();

//     validate();
// });


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

const validateInputs = (event) => {

    event.preventDefault();
    const userdata = {
        fullnameValue : fullname.value.trim(),
        emailValue : email.value.trim(),
        passwordValue : password.value.trim(),
        confirm_passwordValue : confirm_password.value.trim()
    }
    if(userdata.fullnameValue === ''){
        setError(fullname, 'Fullname is required');
    }
    else{
        setSuccess(fullname);
    }
    
    if(userdata.emailValue === ''){
        setError(email, 'Email-id is required');
    }
    else if(!isValidEmail(userdata.emailValue)){
        setError(email, ' Enter a valid Email-id');
    }
    else{
        setSuccess(email);
    }
    
    if(userdata.passwordValue === ''){
        setError(password, 'password is required');
    }
    else if(userdata.passwordValue.length < 8){
        setError(password, 'password must be at least 8 character');
    }
    else{
        setSuccess(password);
    }
    
    if(userdata.confirm_passwordValue === ''){
        setError(confirm_password, 'confirm password is required');
    }
    else if(userdata.confirm_passwordValue !== userdata.passwordValue){
        setError(confirm_password, "password doesn't match");
    }
    else{
        setSuccess(confirm_password);
    }

    if(userdata != null){
        apicalling();
    }
}






const validate = (event) => {

    event.preventDefault();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    console.log(passwordValue, "passwordValue")

    if(emailValue === ''){
        setError(email, 'Email-id is required');
    }
    else if(!isValidEmail(emailValue)){
        setError(email, ' Enter a valid Email-id');
    }
    else{
        setSuccess(email);
    }

    if(passwordValue === ''){
        setError(password, 'password is required');
    }
    else if(passwordValue.length < 8){
        setError(password, 'password must be at least 8 character');
    }
    else{
        setSuccess(password);
    }


}
// function clickbutton(){
//       var email = document.form.emailid.value;
//       var pass = document.form.password.value;
//       var emailid = "emailid";
//       var password = "password";
//       if ((email == emailid) && (pass == password)){
//         return true;
//       }
//       else {
//         alert ("Login was unsuccessful, please check your username and password");
//         return false;
//     }
// }

const validatenewpassword = (event) => {

    event.preventDefault();
    const newpasswordValue = newpassword.value.trim();
    const newconfirmpasswordValue = newconfirmpassword.value.trim();
   

    if(newpasswordValue === ''){
        setError(newpassword, 'New password is required');
    }
    else if(newpasswordValue.length < 8){
        setError(newpassword, 'Password must be at least 8 character');
    }
    else{
        setSuccess(newpassword);
    }

    if(newconfirmpasswordValue === ''){
        setError(newconfirmpassword, 'Confirm new password is required');
    }
    else if(newconfirmpasswordValue !== newpasswordValue){
        setError(newconfirmpassword, "Password doesn't match");
    }
    else{
        setSuccess(newconfirmpassword);
    }
}

const validateforgotpassword = (event) => {

    event.preventDefault();
    const emailValue = email.value.trim();

    if(emailValue === ''){
        setError(email, 'Email-id is required');
    }
    else if(!isValidEmail(emailValue)){
        setError(email, ' Enter a valid Email-id');
    }
    else{
        setSuccess(email);
    }
}