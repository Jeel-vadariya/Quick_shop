const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const errorMiddleware = require("./middleware/error");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

//import route
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const payment = require("./routes/paymentRoute");
const order = require("./routes/orderRoute");

const app = express();
app.use(express.json());

//Middleware for error
app.use(errorMiddleware);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(cors());


// app.use('/api',product)

app.use("/api", product);
app.use("/api", user);
app.use("/api", order);
app.use("/api", payment);

//payment

app.use((req, res, next) => {
    if (req.originalUrl === "/webhook") {
      next();
    } else {
      bodyParser.json()(req, res, next);
    }
  });
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51Mw0YdSC9csYlBSxi4J6OOH99KEjGKCQQDOExULLFdHVcIoe52ML79EwHUhqLAU3qdxLx5PRReT2Xr2XSljYsrru00nE2ac9Bx');

// If you are testing your webhook locally with the Stripe CLI you
// can find the endpoint's secret by running `stripe listen`
// Otherwise, find your endpoint's secret in your webhook settings in the Developer Dashboard
const endpointSecret = 'whsec_...';

app.post('/webhook', bodyParser.raw({type: 'application/json'}), (request, response) => {
  const sig = request.headers['stripe-signature'];

  let event;

  // Verify webhook signature and extract the event.
  // See https://stripe.com/docs/webhooks/signatures for more information.
  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    return response.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    handleCompletedCheckoutSession(session);
  }

  response.json({received: true});
});

const handleCompletedCheckoutSession = (session) => {
  // Fulfill the purchase.
  console.log(JSON.stringify(session));
}

module.exports = app;

