let currentPage = 1;
let productsPerPage = 6;
var productAPI = `http://localhost:4000/api/product?page=${currentPage}&limit=${productsPerPage}`;
let productList = document.querySelector('.product-list');

function renderProducts() {
  fetch(productAPI)
    .then(response => response.json())
    .then(data => {
      const products = data.products;
      productList.innerHTML = '';

      products.forEach(product => {
        const productCardHtml = `
          <div class=" col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-4">
            <div class="card h-100">
              <img class="card-img-top w-75 d-block mx-auto mt-3" src="${product.images[0].url}">
              <div class="card-body d-flex flex-column">
                <div class="card-title product-name">${product.name}</div>
                <h4 class="modal-category d-none">${product.category}</h4>
              </div>
              <div class="card-footer d-flex justify-content-between align-items-center">
                <div class="product-price">₹${product.price}</div>
                <a class="btn btn-outline-primary px-lg-3 px-md-2 buy-now-btn" data-product-id="${product._id}" href="./productdetails.html?id=${product._id}">Buy Now <i class="fa fa-angle-right arrow-1" aria-hidden="true"></i><i class="fa fa-angle-right arrow-2" aria-hidden="true"></i><i class="fa fa-angle-right arrow-3" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>  
        `;
        productList.insertAdjacentHTML('beforeend', productCardHtml);
      });
      const totalProducts = data.productsCount;
      const totalPages = Math.ceil(totalProducts / productsPerPage);

      if (totalPages > 1 || (totalPages === 1 && products.length > productsPerPage)) {
        const paginationLinks = generatePagination(totalPages, currentPage);
        document.querySelector('.pagination-container').innerHTML = paginationLinks;
      }
    });
}

function generatePagination(totalPages, currentPage) {
  let paginationHTML = '<div class="pagination">';

  // Page links
  for (let i = 1; i <= totalPages; i++) {
    if (i === currentPage) {
      paginationHTML += `<a href="#" class="active_page" data-page="${i}">${i}</a>`;
    } else {
      paginationHTML += `<a href="#" data-page="${i}">${i}</a>`;
    }
  }
  paginationHTML += '</div>';

  return paginationHTML;
}

// Render initial products on page load
renderProducts();

// Add click event listeners to pagination links
document.addEventListener('click', function (e) {
  if (e.target && e.target.matches('.pagination a[data-page]')) {
    e.preventDefault();
    currentPage = parseInt(e.target.dataset.page);
    productAPI = `http://localhost:4000/api/product?page=${currentPage}&limit=${productsPerPage}`;
    renderProducts();

    // Update active page link
    document.querySelector('.pagination .active_page').classList.remove('active_page');
    e.target.classList.add('active_page');
  }
});

function filterProduct(category) {
  fetch(`http://localhost:4000/api/product`)
    .then(response => response.json())
    .then(data => {
      var products = data.products;
      var filteredProducts;
      if (category) {
        filteredProducts = products.filter(product => product.category === category);
      } else {
        filteredProducts = products;
      }

      // Clear existing products
      productList.innerHTML = '';

      // Render products
      const startIndex = (currentPage - 1) * productsPerPage;
      const endIndex = startIndex + productsPerPage;
      const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

      paginatedProducts.forEach(product => {
        const productCardHtml = `
        <div class=" col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-4">
        <div class="card h-100">
          <img class="card-img-top w-75 d-block mx-auto mt-3" src="${product.images[0].url}">
          <div class="card-body d-flex flex-column">
            <div class="card-title product-name">${product.name}</div>
            <h4 class="modal-category d-none">${product.category}</h4>
          </div>
          <div class="card-footer d-flex justify-content-between align-items-center">
            <div class="product-price">₹${product.price}</div>
            <a class="btn btn-outline-primary px-lg-3 px-md-2 buy-now-btn" data-product-id="${product._id}" href="./productdetails.html?id=${product._id}">Buy Now <i class="fa fa-angle-right arrow-1" aria-hidden="true"></i><i class="fa fa-angle-right arrow-2" aria-hidden="true"></i><i class="fa fa-angle-right arrow-3" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>  
        `;

        productList.insertAdjacentHTML('beforeend', productCardHtml);
      });

      // Render pagination
      const totalProducts = filteredProducts.length;
      if (totalProducts > productsPerPage) {
        const totalPages = Math.ceil(totalProducts / productsPerPage);
        const paginationLinks = generatePagination(totalPages, currentPage);
        document.querySelector('.pagination-container').innerHTML = paginationLinks;
      } else {
        document.querySelector('.pagination-container').innerHTML = '';
      }
    });
}



function rangeproduct(minPrice, maxPrice) {
  fetch(`http://localhost:4000/api/product`)
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

      const startIndex = (currentPage - 1) * productsPerPage;
      const endIndex = startIndex + productsPerPage;
      const paginatedProducts = filteredProducts.slice(startIndex, endIndex); 

      // Insert the filtered products into the DOM
      paginatedProducts.forEach(product => {
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

      const totalProducts = filteredProducts.length;
      if (totalProducts > productsPerPage) {
        const totalPages = Math.ceil(totalProducts / productsPerPage);
        const paginationLinks = generatePagination(totalPages, currentPage);
        document.querySelector('.pagination-container').innerHTML = paginationLinks;
      } else {
        document.querySelector('.pagination-container').innerHTML = '';
      }
    })
    .catch(error => {
      console.error('Error fetching products:', error);
    });
}


function setActiveCategory(link) {

  var links = document.querySelectorAll('.cat-type a');
  var plinks = document.querySelectorAll('.price-type a');
  links.forEach(link => link.classList.remove('active_category'));
  plinks.forEach(link => link.classList.remove('active_category'));

  link.classList.add('active_category');
}