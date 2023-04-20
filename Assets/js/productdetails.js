var productAPI = 'http://192.168.1.30:4000/api/product';
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
            <button aria-label="btn" class="btn btn-outline-primary my-3 px-5 add-to-cart-button"><i class="fa fa-shopping-cart me-1" aria-hidden="true"></i> Add to cart</button></div>
            
            </div>`;
            productDetails.innerHTML = productDetailsHtml;
            
            Checkuser();
            // <div class="modal-review">Reviews:</div>
            // <div class="col border border-3 card mt-2 review-box">
            // <div class="modal-review-comment row-2 ms-2">${product.product.ratings} <i class="fa fa-star me-2 text-warning" aria-hidden="true"></i>${product.product.reviews[0].comment}</div>
            // <div class="modal-review-name row-10 card-footer text-muted">- ${product.product.reviews[0].name}</div>
            // </div>

            $(document).ready(function () {
              $('.product-close').click(function () {
                location.href = "http://localhost:8090/project/products.html";
              });
            });
  });