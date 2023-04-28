const totalPages = 4;
let currentPage = 1; 
var productAPI = `http://192.168.1.228:4000/api/product?page=${currentPage}`;
var productList = document.querySelector('.product-list');

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
                <a class="btn btn-outline-primary px-3 buy-now-btn" data-product-id="${product._id}" href="./productdetails.html?id=${product._id}">Buy Now <i class="fa fa-angle-right arrow-1" aria-hidden="true"></i><i class="fa fa-angle-right arrow-2" aria-hidden="true"></i><i class="fa fa-angle-right arrow-3" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>  
        `;
        productList.insertAdjacentHTML('beforeend', productCardHtml);
      });
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

const paginationLinks = generatePagination(totalPages, currentPage);
document.querySelector('.pagination-container').innerHTML = paginationLinks;

// Add click event listeners to pagination links
const pageLinks = document.querySelectorAll('.pagination a[data-page]');
pageLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    currentPage = parseInt(link.dataset.page);
    productAPI = `http://192.168.1.228:4000/api/product?page=${currentPage}`;
    renderProducts();
    
    // Update active page link
    document.querySelector('.pagination .active_page').classList.remove('active_page');
    link.classList.add('active_page');
  });
});




function filterProduct(category) {

  fetch(productAPI)
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