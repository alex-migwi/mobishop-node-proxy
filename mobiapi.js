'use strict';
const express = require('express');
const fs = require('fs');

const {
    port
} = require('./lib/config');

//const https = require('https');
const app = express();
const routes = require('./routes');
const API = require('./lib/API');
// const sslOptions = {
//     key: fs.readFileSync('privkey.pem'),
//     cert: fs.readFileSync('fullchain.pem')
// };

app.disable('x-powered-by');
app.set('view engine', 'ejs');

app.use((req, res, next) => {
    req.API = API;
    next();
});


/** ***************************************************************
 *
 * Start of API routing
 *
 */

/**
 * WooCommerce API Routes
 *
 */

/**
 *
 * Coupon Routes
 *
 */

/**
 *
 * Orders Routes
 *
 */

// Create an order
app.post('/order', routes.createOrder);


// Get an order
app.get('/orders/:id', routes.getOrder);

// Get all orders by a customer
app.get('/customerorders/:custid', routes.getCustomerOrders);
/**
 *
 * Customer Routes
 *
 *
 */

// Get Customer by ID

app.get('/customer/:id', routes.getCustomer);

// Create the customer
app.post('/customer', routes.createCustomer);


/**
 * Get all products Categories order ascending
 *
 */

app.get('/categories', routes.getAllCategories);

/**
 * Get all products sort by category order  ascending
 *
 */

app.get('/products', routes.getAllProducts);


/**
 * Get all products in category sort by category order  ascending
 *
 */

app.get('/catproducts/:category', routes.getCatProducts);


/**
 * Get Product by id
 *
 */

app.get('/products/:id', routes.getProduct);


/**
 *
 * Get all the market place vendors
 *
 */
app.get('/vendors', routes.getAllVendors);


/**
 *
 * Get the payment gateways
 *
 */
app.get('/payment_gateways', routes.getPaymentGateways);

app.get('/payment_gateway/:id', routes.getPaymentGateway);



// error handler, required as of 0.3.0
app.use(function (err, req, res, next) {
    console.log(err);
    res.status(400).json(err);
});


// https.createServer(sslOptions, app).listen(port);
app.listen(port);
console.log('Listening on http://localhost:' + port);