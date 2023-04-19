function apicalling() {
    $(document).ready(function () {
        $("#signupbtn").click(function () {
            var person = new Object();
            person.name = $('#fname').val(),
                person.email = $('#emailid').val(),
                person.password = $('#password').val(),
                person.confirmpassword = $('#confirmpassword').val()
            $.ajax({
                url: API + REGISTER_URL,
                type: 'POST',
                dataType: 'json',
                data: person,
                success: function (data, textStatus, xhr) {
                    console.log(data);
                    location.href = "http://localhost:8090/project/login.html";
                },
                error: function (xhr, textStatus, errorThrown) {
                    toastr.error(message.SIGNUP_ERROR);
                },
                timeout: 5000
            });
        });

    });
};

function loginapi() {
    $(document).ready(function () {
        $("#loginbtn").click(function () {
            var person = new Object();
            person.email = $('#emailid').val(),
            person.password = $('#password').val()  
            $.ajax({
                url: API + LOGIN_URL,
                type: 'POST',
                dataType: 'json',
                data: person,
                success: function (data, textStatus, xhr) {
                    console.log(data);
                    loginstorage();
                },
                error: function (xhr, textStatus, errorThrown) {
                    toastr.error(message.LOGIN_ERROR);
                },
                timeout: 5000
            });
        });
    });
};

function forgotpassword() {
    $(document).ready(function () {
        $("#forgotbtn").click(function () {
            var person = new Object();
            person.email = $('#emailid').val()
            $.ajax({
                url: API + FORGOT,
                type: 'POST',
                dataType: 'json',
                data: person,
                success: function (data, textStatus, xhr) {
                    console.log(data);
                },
                error: function (xhr, textStatus, errorThrown) {
                    toastr.error(message.FORGOT_ERROR);
                },
                timeout: 5000
            });
        });
    });
};


function resetpassword() {  
    $(document).ready(function () {
        $("#resetbtn").click(function () {
            var person = new Object();
            const token = window.location.href.split('=')[1];
            person.password = $('#password').val(),
            person.confirmPassword = $('#confirm_password').val()
                console.log(person);
            $.ajax({
                url: API + RESET,
                type: 'PUT',
                dataType: 'json',
                data: person,
                success: function (data, textStatus, xhr) {
                    console.log(data);
                    location.href = "http://localhost:8090/project/home.html";
                    Checkuser();
                },
                error: function (xhr, textStatus, errorThrown) {
                    toastr.error(message.RESET_ERROR);
                },
                timeout: 5000
            });
        });
    });
};

