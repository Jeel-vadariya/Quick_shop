var productAPI = `http://192.168.1.164:4000/api/product`;
    var productList = document.querySelector('.product-list');

    fetch(productAPI)
      .then(response => response.json())
      .then(data => {
        console.log('data:', data);

        var products = data.products;


        products.forEach(product => {
          const productCardHtml = `
          <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div class="card h-100">
          <img class="card-img-top w-75 d-block mx-auto mt-3" src="${product.images[0].url}">
          <div class="card-body d-flex flex-column">
          <div class="card-title product-name">${product.name}</div>
          </div>
          <div class="card-footer d-flex justify-content-between align-items-center">
          <div class="product-price">₹${product.price}</div>
          <a class=" btn btn-outline-primary px-4 buy-now-btn" data-product-id="${product._id}" href="./productdetails.html?id=${product._id}">Buy Now</a>
          
          </div>
          </div>
        </div>

      `;

          productList.insertAdjacentHTML('beforeend', productCardHtml);
        });
      });
