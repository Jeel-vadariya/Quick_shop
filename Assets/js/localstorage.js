function loginstorage(data) {
   
    const userData = {
        user: data.user,
        token: data.token,
      };

    localStorage.setItem('userData', JSON.stringify(userData)); 
    localStorage.setItem("token",JSON.stringify(userData.token))
   
    toastr.success("Login successfully!");
    setTimeout(function(){
        window.location.href = 'home.html';
      }, 500);
    Checkuser();
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