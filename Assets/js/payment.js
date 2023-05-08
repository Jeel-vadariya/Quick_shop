var stripe = Stripe(
    "pk_test_51N5NEvSAYByrhXREDvsrT0Q4z4DIgcoVh7UU0HDADjnew0bXdRN0prNBqu9NIffBk8jJeXVtB71P0IM8xrQeogGD00vWaPOrdu"
);
document.getElementById("checkout-btn").addEventListener("click", function(){
    stripe.redirectToCheckout({
        lineItems: [
            {
                price: updateCartTotal.totalPrice,
                quantity: updateCartTotal.totalQuantity,
            },
        ],
        mode: "subscription",
        successUrl: "http://localhost:8090/project/home.html",
        cancelUrl: "http://localhost:8090/project/cart.html",
    }).then(function(result){
        alert(result)
    })
})