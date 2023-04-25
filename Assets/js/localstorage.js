function loginstorage(data) {
   
    const userData = {
        user: data.user,
        token: data.token,
      };
    localStorage.setItem('userData', JSON.stringify(userData)); 
    toastr.success("Login successfully!");
    location.href = "http://localhost:8090/project/home.html";
    Checkuser();
    }

// var user_data = {
//     number: document.forms["form"]["num"].value,
//     emailid: document.forms["form"]["emailid"].value,
//     password: document.forms["form"]["password"].value
// }

document.addEventListener('click', (event) => {
    const target = event.target;

    if (target.matches('.eye-btn')) {
        const passwordField = target.previousElementSibling;
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
        target.classList.toggle('fa-eye');
        target.classList.toggle('fa-eye-slash');
    }
});