const btn = document.querySelector('.checkout');
const cart_items = document.querySelector('.cart-products');
btn.addEventListener('click', () => {
  document.documentElement.classList.toggle('checked-out');
  // setTimeout(function () {
  //   localStorage.removeItem('cart');
  //   location.reload();
  //   location.href = "home.html";
  // }, 2000);
});
function thankyou(){
  cart_items.innerHTML = `
    <div class="text-bg-info h2">Thank you!!</div>
  `; 
}

function displaycartitem() {
  const cart = JSON.parse(localStorage.getItem('cart'));

  const cartItems = document.querySelector('#cart-items');
  const wholecart = document.querySelector('.whole-cart');
  const totalQuantity = document.querySelector('#total-quantity');
  const totalPrice = document.getElementById('total-price');
  const totalPrice2 = document.getElementById('total-price2');

  if (cart && cart.length > 0) {
    let cartcode = '';
    let quantityTotal = 0;
    let priceTotal = 0;

    cart.forEach(item => {
      const product = item.product;
      if (product) {
        cartcode += `
          <div class="row border border-2 rounded-3 mb-3 cart-item mt-2">
            <div class="col-md-3 col-lg-2 cart-item-col-img ps-3 py-1 text-center">
              <img class="img-fluid py-2 h-auto cart-product-img" src="${product.images[0].url}" alt="img">
            </div>
            <div class="col-md-9 col-lg-6 cart-item-col">
            <h4 class="modal-title">${product.name}</h4>
            <div class="modal-rating-cart mt-1">Ratings: ${product.ratings} <i class="fa fa-star text-warning" aria-hidden="true"></i></div>
            <div class="mt-1"><span class="days"><i class="fa fa-undo" aria-hidden="true"></i> 10 days</span> return available</div>
          </div>
          <div class="row container-fluid col-lg-4 ps-0 mx-auto mb-sm-2 price-delete-cart">
          <div class="row col-xl-10 col-lg-9 col-sm-8 container-fluid p-0">
          <div class="col-xl-5 col-lg-12 col-sm-6 cart-item-col text-center">
            <div class="modal-price mt-1 h4">₹${product.price}</div>
          </div>
            <div class="col-xl-7 col-lg-12 col-sm-6 cart-item-col mt-2 text-center p-0">
                <input type="button" onclick="decrementValue(this, ${item.id})" value="-" class="btn btn-primary py-1 minus_btn"/>
                <input type="text" name="quantity" value="${item.quantity}" maxlength="2" max="10" size="1" class="text-center" readonly/>
                <input type="button" onclick="incrementValue(this, ${item.id})" value="+" class="btn btn-primary px-2 py-1"/>
            </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-sm-4 cart-item-col text-center mt-2">
            <button class="btn btn-outline-danger" onclick="removeItem(${item.id})"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
          </div>
          </div>
          </div>
        `;
        quantityTotal += item.quantity;
        priceTotal += item.product.price * item.quantity;
      }
    });

    cartItems.innerHTML = cartcode;
    totalQuantity.textContent = quantityTotal;
    totalPrice.textContent = `₹${priceTotal}`;
    totalPrice2.textContent = `₹${priceTotal}`;
  } else {
    wholecart.innerHTML = `
    <div class="text-center">
    <img src="./Assets/img/empty-cart.jpg" alt="img" class="w-75">
    <h3>Your Cart is Empty!</h3>
    <div>Looks like you haven't added anything to your cart yet</div>
    <a href="./products.html" class="btn btn-primary align-items-center mt-2 px-4">Continue Shopping</a>
    </div>`;
    totalQuantity.textContent = 0;
    totalPrice.textContent = `₹0`;
    totalPrice2.textContent = `₹0`;
  }
}

function incrementValue(target, id) {
  let cart = JSON.parse(localStorage.getItem('cart'));

  let cartItem = cart.find(item => item.id === id);
  if (cartItem) {
    cartItem.quantity++;
    cartItem.totalPrice = cartItem.product.price * cartItem.quantity;
    localStorage.setItem('cart', JSON.stringify(cart));

    target.previousElementSibling.value = cartItem.quantity;
    target.closest('.cart-item').querySelector('.modal-price').textContent = `₹${cartItem.totalPrice}`;

    // update total quantity and price
    updateCartTotal();
  }
}

function decrementValue(target, id) {
  let cart = JSON.parse(localStorage.getItem('cart'));

  let cartItem = cart.find(item => item.id === id);
  if (cartItem && cartItem.quantity > 1) {
    cartItem.quantity--;
    cartItem.totalPrice = cartItem.product.price * cartItem.quantity;
    localStorage.setItem('cart', JSON.stringify(cart));

    target.nextElementSibling.value = cartItem.quantity;
    target.closest('.cart-item').querySelector('.modal-price').textContent = `₹${cartItem.totalPrice}`;

    // update total quantity and price
    updateCartTotal();
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



function updateCartTotal() {
  let cart = JSON.parse(localStorage.getItem('cart'));
  let totalQuantity = 0;
  let totalPrice = 0;

  if (cart && cart.length > 0) {
    cart.forEach(item => {
      totalQuantity += item.quantity;
      totalPrice += item.totalPrice;
    });
  }

  document.getElementById('total-quantity').textContent = totalQuantity;
  document.getElementById('total-price').textContent = `₹${totalPrice}`;
  document.getElementById('total-price2').textContent = `₹${totalPrice}`;
  carticonquantity();
}