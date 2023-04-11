function storage() {
    data_arr = JSON.parse(localStorage.getItem('user_info')) ?? [];
    var user_data = {
        number: document.forms["form"]["num"].value,
        fullname: document.forms["form"]["fname"].value,
        emailid: document.forms["form"]["emailid"].value,
        password: document.forms["form"]["password"].value,
        confirmpassword: document.forms["form"]["confirmpassword"].value
    }
    if (user_data.number == '') {
        user_data["number"] = data_arr.length + 1;
        data_arr.push(user_data);
        localStorage.setItem('user_info', JSON.stringify(data_arr));
        alert(message.SIGNUP_DATA);
        location.href = "http://localhost:8080/login.html";
        loginapi();
    }
}

function loginstorage() {
    data_array = JSON.parse(localStorage.getItem('user_login')) ?? [];
    var user_data = {
        number: document.forms["form"]["num"].value,
        emailid: document.forms["form"]["emailid"].value,
        password: document.forms["form"]["password"].value
    }
    if (user_data.number == '') {
        user_data["number"] = data_array.length + 1;
        data_array.push(user_data);
        localStorage.setItem('user_login', JSON.stringify(data_array));
        alert(message.LOGIN_DATA);
        // location.href = "http://localhost:8080/home.html";
    }
}

eye[0].addEventListener("click", function () {
   
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    // toggle the eye icon
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
    });