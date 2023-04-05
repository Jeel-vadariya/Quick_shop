const form = document.getElementById('form');
const email = document.getElementById('emailid');
const password = document.getElementById('password');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

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

const validateInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();


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