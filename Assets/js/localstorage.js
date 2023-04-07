function storage(){
    data_arr = JSON.parse(localStorage.getItem('user_info')) ?? [];
    var user_data = {
        number : document.forms["form"]["num"].value,
        fullname : document.forms["form"]["fname"].value,
        emailid : document.forms["form"]["emailid"].value,
        password : document.forms["form"]["password"].value,
        confirmpassword : document.forms["form"]["confirmpassword"].value
    }
    if(user_data.number == ''){
        user_data["number"] = data_arr.length + 1;
        data_arr.push(user_data);
        localStorage.setItem('user_info', JSON.stringify(data_arr));
        alert("Your data added.");
        redirect();
        // callstorage();
        // user_registration();
        // loginuser();
    }
    function redirect(){
        location.href="C:\\Techcronus\\Quick_shop\\Quick_Shop\\login.html"
    }
    // function callstorage(){
    //     localStorage.setItem('user_data', JSON.stringify(user_data));
    //     console.log(localStorage.getI    tem('user_data'));
    // }
} 

function user_registration(){
    let stroedusers = localStorage.userlogin ? JSON.parse(localStorage.userlogin) : [];
    const userdata = {
        email: document.getElementById('emailid').value,
        pass: document.getElementById('password').value
    };
    stroedusers.push(userdata);
    localStorage.setItem('userlogin', JSON.stringify(stroedusers));
    window.location.reload();
}

function loginuser(){
    const loginEmail = document.getElementById('emailid').value
    const loginPass = document.getElementById('password').value
    if (localStorage.getItem('userlogin')) {
        const allstroedusers = JSON.parse(localStorage.getItem('userlogin'));
        const matcheduser = allstroedusers.filter(user => {
            return loginEmail === user.email && loginPass === user.pass;
        })
        if (matcheduser.length) {
            console.log('Login successful')
        } else {
            console.log('Wrong credentials')
        }
    } else {
        console.log('Wrong credentials') // Don't say "Not a registered user"
    }
}
