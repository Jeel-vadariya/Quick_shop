var user_data = localStorage.getItem("user_login_status");
if(localStorage.getItem(user_data) == true){
    Checkuser();
}

var productAPI = "http://192.168.1.14:4000/api/product";
var totalitems = document.getElementById('totalproducts');

fetch(productAPI)
    .then(response => response.json())
    .then(data => {
        data.productsCount;
totalitems.innerHTML = `<div class="h5 mb-3">Total Products:- ${data.productsCount}</div>`;
});