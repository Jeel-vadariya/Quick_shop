var productAPI = 'http://localhost:4000/api/product';
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
  <div class="col-lg-4 d-grid align-content-center justify-content-center">
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
      <div class="modal-num-review mt-2 d-none">Number Of Reviews: ${product.product.numOfReviews}</div>
      ${product.product.numOfReviews > 0 ? `
        <div class="modal-review mt-2">Reviews:</div>
        <div class="d-inline-flex reviews">
        ${product.product.reviews.map(review => `
        
        <div class="col border border-3 card mt-2 review-box me-3">
        <div class="modal-review-comment row-2 ms-2">${product.product.ratings} <i class="fa fa-star me-2 text-warning" aria-hidden="true"></i>${review.comment}</div>
        <div class="modal-review-name row-10 card-footer text-muted">- ${review.name}</div>
        </div>
        
        `).join('')}</div>
      ` : ''}
      <div class="product-detail mt-2">
        <a aria-label="btn" class="btn btn-outline-primary my-3 px-5 add-to-cart-button" id="add-to-cart-button"><i class="fa fa-shopping-cart me-1" aria-hidden="true"></i> Add to cart</a>
      </div>
    </div>   
  </div>
`;

productDetails.innerHTML = productDetailsHtml;

    var addToCartButton = document.querySelector('#add-to-cart-button');

    addToCartButton.addEventListener('click', () => {
      var user_data = localStorage.getItem('userData');
      if (user_data == null) {
        toastr.warning("First you need to login then you add products in the cart.");
        setTimeout(function () {
          window.location.href = 'login.html';
        }, 3000); // delay the redirect for 3 seconds
      }
      else {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        const existingCartItem = cart.find(item => item.product.name === product.product.name);

        if (existingCartItem) {
          // If the product exists, increment the quantity
          // existingCartItem.quantity++;
          // existingCartItem.totalPrice = existingCartItem.product.price * existingCartItem.quantity;
          addToCartButton.click(toastr.warning("Already added to cart."));
          // addToCartButton.remove();
          // var product_detail = document.getElementsByClassName("product-detail");
          // var gocartbtn = document.createElement("a");
          // gocartbtn.classList.add('btn', 'btn-outline-primary', 'my-3', 'px-5', 'go-to-cart-button');
          // gocartbtn.textContent = "Go to cart";
          // gocartbtn.setAttribute("href", "cart.html");
          // product_detail[0].appendChild(gocartbtn);

        } else {
          // If the product doesn't exist, create a new cart item
          const newCartItem = {
            id: cart.length + 1,
            product: product.product,
            quantity: 1,
            totalPrice: product.product.price
          };

          // Push the new cart item to the cart array
          cart.push(newCartItem);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        carticonquantity();
      }
    });


    $(document).ready(function () {
      $('.product-close').click(function () {
        location.href = "http://localhost:8090/project/products.html";
      });
    });
  });
displaycartitem();