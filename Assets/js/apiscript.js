function apicalling(){
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
                storage();
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log(message.SIGNUP_ERROR);
            },
            timeout: 5000
        });
    });
    
});
}

function loginapi(){
    $(document).ready(function (){
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
                    forgotpassword();
                    
                },
                error: function (xhr, textStatus, errorThrown) {
                    console.log(message.LOGIN_ERROR);
                },
                timeout: 5000
            });
        });    
    }); 
}

function forgotpassword(){
    $(document).ready(function (){
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
                    resetpassword();
                },
                error: function (xhr, textStatus, errorThrown) {
                    console.log(message.FORGOT_ERROR);
                },
                timeout: 5000
            });
        });
    });
}

function resetpassword(){
    $(document).ready(function(){
        $("resetbtn").click(function () {
            var person = new Object();
            person.newpassword = $('#new-password').val(),
            person.confirmnewpassword = $('#confirm-new-password').val()
            $.ajax({
                url: API + RESET,
                type: 'POST',
                dataType: 'json',
                data: person,
                success: function (data, textStatus, xhr){
                    console.log(data);
                },
                error: function (xhr, textStatus, errorThrown) {
                    console.log(message.RESET_ERROR);
                },
                timeout: 5000
            });
        });
    });
}
 
