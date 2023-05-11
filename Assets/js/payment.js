// var stripe = Stripe(
//     "pk_test_51Mw0YdSC9csYlBSxe39Uhg8TPw9azOIpiHUJFO0RNrEUwZ5E57aZBLEgLKMDVMwwMC33ynLhhITwnBK7EVqC4Eil00N1P1tYgB"
// );
// document.getElementById("").addEventListener("click", function () {
//     stripe.redirectToCheckout({
//         amount: "500",
//         // mode: "subscription",
//         // successUrl: "http://localhost:8090/project/home.html",
//         // cancelUrl: "http://localhost:8090/project/cart.html",
//     }).then(function (result) {
//         alert(result)
//         fetch("process/payment", {
//             method: "POST",
//             body: 600
//         }).then(response => response.json())

//     });
// });