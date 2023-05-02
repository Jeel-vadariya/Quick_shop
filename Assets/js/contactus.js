Name = document.getElementById('contact-name');
Email = document.getElementById('contact-email');

let userinfo = JSON.parse(localStorage.getItem("userData"));

Name.value = userinfo.user.name;
Email.value = userinfo.user.email;

function display(event) {
  event.preventDefault();
    var Name = document.getElementById("contact-name").value;
    var Email = document.getElementById('contact-email').value;
    var Comment = document.getElementById('contact-message');
    var CommentValue = Comment.value;
  
    alert("Name: " + Name + "\nEmail: " + Email + "\nComment: " + CommentValue);
    Comment.value = "";
    return false;
  }
  