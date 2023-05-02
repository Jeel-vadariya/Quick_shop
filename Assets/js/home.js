var user_data = localStorage.getItem("user_login_status");
if(localStorage.getItem(user_data) == true){
    Checkuser();
}

var productAPI = API + PRODUCTS;
var totalitems = document.getElementById('totalproducts');

fetch(productAPI)
    .then(response => response.json())
    .then(data => {
        data.productsCount;
totalitems.innerHTML = `<div class="h5 mb-3">Total Products:- ${data.productsCount}</div>`;
});