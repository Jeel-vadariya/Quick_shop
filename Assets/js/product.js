var currentPage = 1;
var productAPI = `http://192.168.1.228:4000/api/product?page=${currentPage}`;
var productList = document.querySelector('.product-list');
var paginationLinks = document.querySelectorAll('.pagination a');

// Function to fetch products from API and render them on the page
function renderProducts() {
  fetch(productAPI)
    .then(response => response.json())
    .then(data => {
      var products = data.products;
      productList.innerHTML = '';

      products.forEach(product => {
        const productCardHtml = `
          <div class="col-lg-4 col-md-4 col-sm-6 mb-4">
            <div class="card h-100">
              <img class="card-img-top w-75 d-block mx-auto mt-3" src="${product.images[0].url}">
              <div class="card-body d-flex flex-column">
                <div class="card-title product-name">${product.name}</div>
                <h4 class="modal-category d-none">${product.category}</h4>
              </div>
              <div class="card-footer d-flex justify-content-between align-items-center">
                <div class="product-price">₹${product.price}</div>
                <a class="btn btn-outline-primary px-4 buy-now-btn" data-product-id="${product._id}" href="./productdetails.html?id=${product._id}">Buy Now</a>
              </div>
            </div>
          </div>  
        `;
        productList.insertAdjacentHTML('beforeend', productCardHtml);
      });
    });
}

// Add event listeners to pagination links
paginationLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    if (link.innerHTML === '&laquo;') {
      if (currentPage > 1) {
        currentPage--;
        productAPI = `http://192.168.1.228:4000/api/product?page=${currentPage}`;
        renderProducts();
      }
    } else if (link.innerHTML === '&raquo;') {
      if (currentPage < 4) { // Assuming there are 4 pages in total
        currentPage++;
        productAPI = `http://192.168.1.228:4000/api/product?page=${currentPage}`;
        renderProducts();
      }
    } else {
      currentPage = parseInt(link.innerHTML);
      productAPI = `http://192.168.1.228:4000/api/product?page=${currentPage}`;
      renderProducts();
    }

    // Update active page link
    document.querySelector('.pagination .active_page').classList.remove('active_page');
    link.classList.add('active_page');
  });
});

// Render initial products on page load
renderProducts();




function filterProduct(category) {

  fetch(`http://192.168.1.228:4000/api/product`)
    .then(response => response.json())
    .then(data => {
      var products = data.products;
      var filteredProducts = products.filter(product => product.category === category);

      // Clear existing products
      productList.innerHTML = '';
      filteredProducts.forEach(product => {
        const productCardHtml = `
          <div class="col-lg-4 col-md-4 col-sm-6 mb-4">
            <div class="card h-100">
              <img class="card-img-top w-75 d-block mx-auto mt-3" src="${product.images[0].url}">
              <div class="card-body d-flex flex-column">
                <div class="card-title product-name">${product.name}</div>
                <h4 class="modal-category d-none">${product.category}</h4>
              </div>
              <div class="card-footer d-flex justify-content-between align-items-center">
                <div class="product-price">₹${product.price}</div>
                <a class="btn btn-outline-primary px-4 buy-now-btn" data-product-id="${product._id}" href="./productdetails.html?id=${product._id}">Buy Now</a>
              </div>
            </div>
          </div>  
        `;

        productList.insertAdjacentHTML('beforeend', productCardHtml);
      });
    });
}
function rangeproduct(minPrice, maxPrice) {
  fetch(productAPI)
    .then(response => response.json())
    .then(data => {
      var products = data.products;

      // Define minimum and maximum prices for each range
      const ranges = [
        { min: 10, max: 1000 },
        { min: 1000, max: 5000 },
        { min: 5000, max: 10000 },
        { min: 10000, max: Infinity }
      ];
      const filteredProducts = products.filter(product => {
        return product.price >= minPrice && product.price <= maxPrice;
      });

      // Clear the existing product list
      productList.innerHTML = '';

      // Insert the filtered products into the DOM
      filteredProducts.forEach(product => {
        const productCardHtml = `
          <div class="col-lg-4 col-md-4 col-sm-6 mb-4">
            <div class="card h-100">
              <img class="card-img-top w-75 d-block mx-auto mt-3" src="${product.images[0].url}">
              <div class="card-body d-flex flex-column">
                <div class="card-title product-name">${product.name}</div>
                <h4 class="modal-category d-none">${product.category}</h4>
              </div>
              <div class="card-footer d-flex justify-content-between align-items-center">
                <div class="product-price">₹${product.price}</div>
                <a class="btn btn-outline-primary px-4 buy-now-btn" data-product-id="${product._id}" href="./productdetails.html?id=${product._id}">Buy Now</a>
              </div>
            </div>
          </div>  
        `;

        productList.insertAdjacentHTML('beforeend', productCardHtml);
      });
    })
    .catch(error => {
      console.error('Error fetching products:', error);
    });
}