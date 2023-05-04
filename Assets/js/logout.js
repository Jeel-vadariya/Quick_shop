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
                        localStorage.removeItem('userData');
                        localStorage.removeItem('cart');
                        location.reload();
                        location.href = "http://localhost:8090/project/login.html";
                    }
                },
                {
                    text: 'No',
                    open: function () { $(this).addClass('nocls') },
                    click: function () { $(this).dialog("close"); location.reload();}
                }
            ]
        });
    });
}