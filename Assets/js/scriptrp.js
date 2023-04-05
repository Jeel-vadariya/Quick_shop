const form = document.getElementById('form');
const newpassword = document.getElementById('new-password');
const newconfirmpassword = document.getElementById('confirm-new-password');

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

const validateInputs = () => {
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