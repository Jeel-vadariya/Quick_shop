profile_email = document.getElementById('profile-email');
profile_name = document.getElementById('profile-name');
input_profile_name = document.getElementById('input-profile-name');
input_profile_email = document.getElementById('input-profile-email');
input_profile_createdate = document.getElementById('input-profile-createdate');

let userData = JSON.parse(localStorage.getItem("userData"));
profile_name.innerText = userData.user.name;    
profile_email.innerText = userData.user.email;
input_profile_name.value = userData.user.name;
input_profile_email.value = userData.user.email;
input_profile_createdate.value = userData.user.createdAt;

var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  };
  