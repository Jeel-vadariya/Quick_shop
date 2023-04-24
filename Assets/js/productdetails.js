// var productAPI = 'http://192.168.1.228:4000/api/product';
// var productDetails = document.querySelector('.product-details');

// // Get the product ID from the query parameter
// const urlParams = new URLSearchParams(window.location.search);
// const productId = urlParams.get('id');

// // Fetch the product details using the ID
// fetch(productAPI + '/' + productId)
//   .then(response => response.json())
//   .then(product => {
//     console.log('product:', product);

//     const productDetailsHtml = `
//             <div class="col-lg-4">
//               <img class="img-fluid" src="${product.product.images[0].url}" alt="img">
//             </div>
//             <div class="col-lg-8">
//               <div>
//                 <button type="button" class="btn-close float-end product-close" data-bs-dismiss="modal" aria-label="btn"></button>
//             <h4 class="modal-category">${product.product.category}</h4>
//             <h3 class="modal-title">${product.product.name}</h3>
//             <div class="modal-discription mt-2">${product.product.description}</div>
//             <div class="modal-price mt-2 h4">₹${product.product.price}</div>
//             <div class="modal-rating">Ratings: ${product.product.ratings} <i class="fa fa-star text-warning" aria-hidden="true"></i></div>
//             <div class="modal-stock mt-2 text-danger">Stock: Only ${product.product.Stock} left</div>
//             <button aria-label="btn" class="btn btn-outline-primary my-3 px-5 add-to-cart-button"><i class="fa fa-shopping-cart me-1" aria-hidden="true"></i> Add to cart</button></div>

//             </div>`;
//             productDetails.innerHTML = productDetailsHtml;

//             Checkuser();
//             // <div class="modal-review">Reviews:</div>
//             // <div class="col border border-3 card mt-2 review-box">
//             // <div class="modal-review-comment row-2 ms-2">${product.product.ratings} <i class="fa fa-star me-2 text-warning" aria-hidden="true"></i>${product.product.reviews[0].comment}</div>
//             // <div class="modal-review-name row-10 card-footer text-muted">- ${product.product.reviews[0].name}</div>
//             // </div>

//             $(document).ready(function () {
//               $('.product-close').click(function () {
//                 location.href = "http://localhost:8090/project/products.html";
//               });
//             });
//   });





var productAPI = 'http://192.168.1.228:4000/api/product';
var productDetails = document.querySelector('.product-details');

// Get the product ID from the query parameter
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Fetch the product details using the ID
fetch(productAPI + '/' + productId)
  .then(response => response.json())
  .then(product => {
    console.log('product:', product);

    const productDetailsHtml = `
      <div class="col-lg-4">
        <img class="img-fluid" src="${product.product.images[0].url}" alt="img">
      </div>
      <div class="col-lg-8">
        <div>
          <button type="button" class="btn-close float-end product-close" data-bs-dismiss="modal" aria-label="btn"></button>
          <h4 class="modal-category">${product.product.category}</h4>
          <h3 class="modal-title">${product.product.name}</h3>
          <div class="modal-discription mt-2">${product.product.description}</div>
          <div class="modal-price mt-2 h4">₹${product.product.price}</div>
          <div class="modal-rating">Ratings: ${product.product.ratings} <i class="fa fa-star text-warning" aria-hidden="true"></i></div>
          <div class="modal-stock mt-2 text-danger">Stock: Only ${product.product.Stock} left</div>
          <button aria-label="btn" class="btn btn-outline-primary my-3 px-5 add-to-cart-button"><i class="fa fa-shopping-cart me-1" aria-hidden="true"></i> Add to cart</button>
        </div>   
      </div>`;

    productDetails.innerHTML = productDetailsHtml;

    const addToCartButton = document.querySelector('.add-to-cart-button');

    addToCartButton.addEventListener('click', () => {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      cart.push(product);

      localStorage.setItem('cart', JSON.stringify(cart));
    });

    $(document).ready(function () {
      $('.product-close').click(function () {
        location.href = "http://localhost:8090/project/products.html";
      });
    });
  });

// On the cart.html page
// On the cart.html page
const cart = JSON.parse(localStorage.getItem('cart'));

const cartItems = document.querySelector('#cart-items');

if (cart && cart.length > 0) {
  let cartHtml = '';

  cart.forEach(item => {
    const product = item.product;
    if (product) {
      cartHtml += `
        <div class="row border border-2 rounded-3 mb-3 cart-item">
          <div class="col-lg-2">
            <img class="img-fluid py-2 h-100" src="${product.images[0].url}" alt="img">
          </div>
          <div class="col-lg-10">
            <div>
              <h4 class="modal-title">${product.name}</h4>
              <div class="modal-price mt-2 h4">₹${product.price}</div>
              <input type="button" onclick="decrementValue(this, ${item.id})" value="-" class="btn btn-primary"/>
              <input type="text" name="quantity" value="1" maxlength="2" max="10" size="1" class="text-center" disabled/>
              <input type="button" onclick="incrementValue(this, ${item.id})" value="+" class="btn btn-primary"/>
              <button class="btn btn-danger" onclick="removeItem(${item.id})"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>
      `;
    }
  });
  
  cartItems.innerHTML = cartHtml;
  
  function incrementValue(target, id){
    let cart = JSON.parse(localStorage.getItem('cart'));

    let cartItem = cart.find(item => item.id === id);
    if (cartItem) {
      cartItem.quantity++;
      cartItem.totalPrice = cartItem.product.price * cartItem.quantity;
      localStorage.setItem('cart', JSON.stringify(cart));
      
      target.previousElementSibling.value = cartItem.quantity;
      target.parentElement.querySelector('.modal-price').textContent = `₹${cartItem.totalPrice}`;
    }
  } 
  
  function decrementValue(target, id){
    let cart = JSON.parse(localStorage.getItem('cart'));

    let cartItem = cart.find(item => item.id === id);
    if (cartItem && cartItem.quantity > 1) {
      cartItem.quantity--;
      cartItem.totalPrice = cartItem.product.price * cartItem.quantity;
      localStorage.setItem('cart', JSON.stringify(cart));
      
      target.nextElementSibling.value = cartItem.quantity;
      target.parentElement.querySelector('.modal-price').textContent = `₹${cartItem.totalPrice}`;
    }
  } 
  
  function removeItem(id) {
    let cart = JSON.parse(localStorage.getItem('cart'));

    let index = cart.findIndex(item => item.id === id);
    if (index >= 0) {
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      location.reload();
    }
  }
}
 else {
  cartItems.innerHTML = `
  <div class="text-center">
  <img src="./Assets/img/empty-cart.jpg" alt="img" class="w-50 h-50">
  <h3>Your Cart is Empty!</h3>
  <div>Looks like you haven't added anything to your cart yet</div>
  <a href="./products.html" class="btn btn-primary align-items-center mt-2 px-4">Continue Shopping</a>
  </div>`;
}

