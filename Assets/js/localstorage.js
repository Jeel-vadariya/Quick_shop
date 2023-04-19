function loginstorage() {
    var user_data = {
        number: document.forms["form"]["num"].value,
        emailid: document.forms["form"]["emailid"].value,
        password: document.forms["form"]["password"].value
    }
    if (user_data.number == '') {
        user_data["number"] = localStorage.length + 1;
        localStorage.setItem('user_login', JSON.stringify(user_data));
        toastr.success("Login successfully!");
        // location.href = "http://localhost:8090/project/home.html";
        Checkuser();
    }
}

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