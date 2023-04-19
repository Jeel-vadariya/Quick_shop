function logout() {
    $(document).ready(function () {
        $(".logout").dialog({
            resizable: false,
            height: "auto",
            width: 400,
            modal: true,
            buttons: [
                {
                    text: 'Yes',
                    open: function () { $(this).addClass('yescls') },
                    click: function () {
                        localStorage.removeItem('user_login');
                        location.reload();
                        location.href = "http://localhost:8090/project/login.html";
                    }
                },
                {
                    text: 'No',
                    open: function () { $(this).addClass('nocls') },
                    click: function () { $(this).dialog("close"); }
                }
            ]
        });
    });
}

// function logout() {
//     if (confirm("Are you sure you want to logout?")) {
//         localStorage.removeItem('user_login');
//         location.reload();
//         location.href = "http://localhost:8090/project/login.html";
//     }

// }
