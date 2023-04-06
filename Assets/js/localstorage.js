function localStorage(){
    data_arr = JSON.parse(localStorage.getItem('user_info')) ?? [];
    alert("Your data added.");
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
    }
}