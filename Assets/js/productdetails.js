var productAPI = 'http://192.168.1.164:4000/api/product';
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
            <div class="col-lg-4 p-5 border border-primary border-end-0 rounded-start">
              <img class="img-fluid" src="${product.product.images[0].url}" alt="img">
            </div>
            <div class="col-lg-8 border border-primary border-start-0 pt-2 rounded-end">
              <div>
                <button type="button" class="btn-close float-end" data-bs-dismiss="modal" aria-label="btn"></button>
            <h4 class="modal-title">${product.product.name}</h4>
            <div class="modal-discription mt-2">${product.product.description}</div>
            <div class="modal-price mt-2 h5">₹${product.product.price}</div>
            <div class="modal-rating">Ratings: ${product.product.ratings}</div>
            <button aria-label="btn" class="btn btn-outline-primary my-3 px-5 add-to-cart-button"><i class="fa fa-shopping-cart me-1" aria-hidden="true"></i> Add to cart</button></div>
            
            </div>`;
            productDetails.innerHTML = productDetailsHtml;
  });