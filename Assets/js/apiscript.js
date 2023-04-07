// const ul = document.getElementById('authors');
// const list = document.createDocumentFragment();
// const url = 'http://192.168.1.97:4000/api/register';

// fetch(url)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         let authors = data;

//         authors.map(function (author) {
//             let li = document.createElement('li');
//             let name = document.createElement('h2');
//             let email = document.createElement('span');

//             name.innerHTML = `${author.name}`;
//             email.innerHTML = `${author.email}`;

//             li.appendChild(name);
//             li.appendChild(email);
//             list.appendChild(li);
//         });
//     }).
//     .catch(function (error) {
//         console.log(error);
//     });

// ul.appendChild(list);


// function fetch(){
//     $.ajax({
//         url: "http://192.168.1.97:4000/api/product",
//         type: "GET",
//         dataType: "JSON",
//         data: JSON.stringify({ }),
//         success: function(data){
//             $('.messages').append("<li>"+JSON.stringify(data)+"</li>")
//         }
//     });
// }

//  function fetchdata(){

//  console.log(document.forms[0].checkValidity());
//   fetch('http://192.168.1.97:4000/api/register', {
//         method: 'GET',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({
//             fullname: document.getElementById("fname").value,
//             email: document.getElementById("emailid").value,
//             password: document.getElementById("password").value,
//             password_confirmation: document.getElementById("confirmpassword").value
//         })
//     })
//     .then(data => data.json())
//     .then(data =>  { 
//         console.log(data);
//         if(data.response){
//             alert("Successfully Registered"); 
//         } else{
//             alert("Sorry, email has already been taken.");
//         } 
//     })
//     .catch((err) => {
//          alert ("This is a warning message!");
//         console.error(err);
//     })

   
// }

//  window.onload = function() {
//   document.forms[0]
//   .addEventListener("#signupbtn", fetchdata)
// }


// $('#form').submit(function(event){
//     event.preventDefault();
//     $.ajax({
//         type: "GET",
//         datatype:"json",
//         url: "http://192.168.1.97:4000/api/register",
//         data:({
//             name : $('#fname').val(),
//             email : $('#emailid').val(),
//             password : $('#password').val(),
//             // cpassword : $('#confirmpassword').val()
//         }),
//         success: function(result)
//         {
//             if(result && result.auth_token.length>1) // you should do your checking here
//             {
//                 window.location = 'http://www.google.com/'; //just to show that it went through
//             }
//             else
//             {
//                 $('#result').empty().addClass('error')
//                     .append('Something is wrong.');
//             }
//         }
//     })
//     return false;
// })
function apicalling(){
    $(document).ready(function () {
    $("#signupbtn").click(function () {
        var person = new Object();
            person.name = $('#fname').val(),
            person.email = $('#emailid').val(),
            person.password = $('#password').val(),
            person.confirmpassword = $('#confirmpassword').val()
        $.ajax({
            url: 'http://192.168.1.97:4000/api/register',
            type: 'POST',
            dataType: 'json',
            data: person,
            success: function (data, textStatus, xhr) {
                console.log(data);
                storage();
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log('Error in Operation');
            },
            timeout: 5000
        });
    });
    
});
}
 
