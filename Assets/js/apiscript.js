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


function fetch(){
    $.ajax({
        url: "http://192.168.1.97:4000/api/product",
        type: "GET",
        dataType: "JSON",
        data: JSON.stringify({ }),
        success: function(data){
            $('.messages').append("<li>"+JSON.stringify(data)+"</li>")
        }
    });
}

function fetchdata(){

 console.log(document.forms[0].checkValidity());
    fetch('http://192.168.1.97:4000/api/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            fullname: document.getElementById("fname").value,
            email: document.getElementById("emailid").value,
            password: document.getElementById("password").value,
            password_confirmation: document.getElementById("confirmpassword").value
        })
    })
    .then(data => data.json())
    .then(data =>  { 
        console.log(data);
        if(data.response){
            alert("Successfully Registered"); 
        } else{
            alert("Sorry, email has already been taken.");
        } 
    })
    .catch((err) => {
         alert ("This is a warning message!");
        console.error(err);
    })

   
}

 window.onload = function() {
  document.forms[0]
  .addEventListener("submit", fetchdata)
}