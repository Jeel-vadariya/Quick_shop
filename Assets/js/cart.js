function displaycartitem() {
const cart = JSON.parse(localStorage.getItem('cart'));

const cartItems = document.querySelector('#cart-items');

if (cart && cart.length > 0) {
  let cartcode = '';

  cart.forEach(item => {
    const product = item.product;
    if (product) {
      cartcode += `
        <div class="row border border-2 rounded-3 mb-3 cart-item">
          <div class="col-lg-2 cart-item-col">
            <img class="img-fluid py-2 h-100" src="${product.images[0].url}" alt="img">
          </div>
          <div class="col-lg-10 cart-item-col">
            <div>
              <h4 class="modal-title">${product.name}</h4>
              <div class="modal-price mt-2 h4">₹${product.price}</div>
              <input type="button" onclick="decrementValue(this, ${item.id})" value="-" class="btn btn-primary py-1 minus_btn"/>
              <input type="text" name="quantity" value="1" maxlength="2" max="10" size="1" class="text-center" readonly/>
              <input type="button" onclick="incrementValue(this, ${item.id})" value="+" class="btn btn-primary px-2 py-1"/>
              <button class="btn btn-danger" onclick="removeItem(${item.id})"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>
      `;
    }
  });
  
  cartItems.innerHTML = cartcode;
  
  
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
}
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