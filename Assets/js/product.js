const productAPI = 'http://192.168.1.252:4000/api/product';
    const productList = document.querySelector('.product-list');

    fetch(productAPI)
      .then(response => response.json())
      .then(data => {
        console.log('data:', data);

        const products = data.products;

        products.forEach(product => {
          const productCardHtml = `
        <div class="product-card">
          <img class="product-image" src="${product.images[0].url}">
          <div class="product-name">${product.name}</div>
          <div class="price-container">
          <div class="product-price">₹${product.price}</div>
          <button class="add-to-cart-button" data-product-id="${product.id}"><i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
          </div>
        </div>
      `;

          productList.insertAdjacentHTML('beforeend', productCardHtml);
        });

        const cartButton = document.querySelector('.cart-button');
        cartButton.addEventListener('click', () => {
          // Handle cart button click
        });

        const productNames = document.querySelectorAll('.product-name');
        productNames.forEach(name => {
          name.addEventListener('click', () => {
            const productId = name.dataset.productId;
            console.log('productId:', productId);
    
            fetch(`${productEndpoint}/${productId}`)
              .then(response => response.json())
              .then(product => {
                console.log('product details:', product);
                // Handle displaying product details
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
