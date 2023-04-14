const productAPI = 'http://192.168.1.252:4000/api/product';
const productList = document.querySelector('.product-list');

fetch(productAPI)
  .then(response => response.json())
  .then(data => {

    console.log('data:', data);

    var products = data.products;

    products.forEach(product => {
      const productCardHtml = `
        <div class="card col-lg-3 col-md-4 col-sm-6">
          <img class="card-img-top w-75 d-block mx-auto mt-3" src="${product.images[0].url}">
          <div class="card-body d-flex flex-column my-5">
          <div class="card-title product-name">${product.name}</div>
          <div class="price-container d-flex justify-content-between position-absolute align-items-center">
          <div class="product-price">₹${product.price}</div>
          <a class=" btn btn-outline-primary px-4 buy-now-btn" data-product-id="${product.id}">Buy Now</a>
          </div>
          </div>
        </div>
      `;

      productList.insertAdjacentHTML('beforeend', productCardHtml);
    });

    // const cartButton = document.querySelector('.cart-button');
    // cartButton.addEventListener('click', () => {
    //   // Handle cart button click
    // });


    const Buynowbtn = document.querySelectorAll('.buy-now-btn');
    Buynowbtn.forEach(button => {
      button.addEventListener('click', () => {
        const productId = `${products[n]._id}`;
        fetch(`${productAPI}/${productId}`)
          .then(response => response.json())
          .then(product => {

            console.log('product:', product);

            const modal = document.createElement('div');
            modal.innerHTML = `
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">${product.name}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div class="modal-body">
                <img class="card-img-top w-75 d-block mx-auto mt-3" src="${product.images[0].url}">
                <div>${product.description}</div>
                <div class="product-price">₹${product.price}</div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary add-to-cart-button" data-product-id="${product.id}">Add to Cart</button>
              </div>
            </div>
          </div>
        `;
            document.body.appendChild(modal);
            const modalInstance = new bootstrap.Modal(modal);
            modalInstance.show();
            const addToCartButton = modal.querySelector('.add-to-cart-button');
            addToCartButton.addEventListener('click', () => {
              // Handle add to cart button click for product with ID productId
              console.log('Add to cart:', product);
            });
          })
          .catch(error => {
            console.error(error);
          });
      });
    });




    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        // Handle add to cart button click for product with ID productId
      });
    });
  })

  .catch(error => {
    console.error(error);
  });





