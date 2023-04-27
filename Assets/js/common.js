function Checkuser() {
    var user_data = localStorage.getItem('userData');
    if (user_data != null) {
        var login_li = document.getElementById("login_nav");
        var signup_li = document.getElementById("signup_nav");
        login_li.remove();
        signup_li.remove();

        var nav_ul = document.getElementById("menu");
        var logout_li = document.createElement("li");
        logout_li.classList.add('nav-item');
        var logout_a = document.createElement("a");
        logout_a.classList.add('nav-link', 'menu_item', 'logout');
        logout_a.setAttribute("title", "Are you sure, you want to Logout?");
        logout_a.setAttribute("href", "#");
        logout_a.setAttribute("onclick", "logout()")
        logout_a.textContent = "Logout";
        logout_li.appendChild(logout_a);    
        nav_ul.appendChild(logout_li);
    }
    else{
        document.getElementById("profile_nav").style.display = "none";
    }
}
Checkuser();


