'use strict';

const {
    endpoint,
    wcAPIKey,
    wcAPISecret,
} = require('./config');

const WC = require('woocommerce-api');
const WooCommerce = new WC({
    url: endpoint,
    consumerKey: wcAPIKey,
    consumerSecret: wcAPISecret,
    wpAPI: true,
    version: "wc/v2",
});

const WooCommerceVendor = new WC({
    url: endpoint,
    consumerKey: wcAPIKey,
    consumerSecret: wcAPISecret,
    wpAPI: true,
    wpAPIPrefix: 'wp-json/wcmp',
    version: 'v1',
    isSsl: true,
    verifySsl: false
});


class API {

    /**
     * Functions are arranged in the order as shown in WooCommerce API Docs
     * 1.Coupons
     * 2.Customers
     * 3.Order
     * 4.Order Notes
     * 5.Refunds
     * 6.Products
     * 7.Product Variations
     * 8.Product Attributes
     * 9.Product Attribute Terms
     * 10.Product Categories
     * 11.Product shipping classes
     * 12.Product tags
     * 13.Product reviews
     * 14.Reports
     * 15.Tax rates
     * 16.Tax classes
     * 17.Webhooks
     * 18.Settings
     * 19.Setting options
     * 20.Payment gateways
     * 21.Shipping zones
     * 22.Shipping zone locations
     * 23.Shipping zone methods
     * 24.Shipping methods
     * 25.System status
     * 26.System status tools
     * 27.Data
     * 28.Vendors
     *
     **/
    /////////////////////////////////////////////////////////////////
    // 1 Coupons

    // Get all coupons
    static getAllCoupons() {
        return WooCommerce.getAsync('coupons');
    }

    // Get specific coupon
    static getCoupon(id) {

        return WooCommerce.getAsync(`coupons/${id}`);

    }



    // 2 Customers

    // Register new Customer
    static createCustomer() {

        return WooCommerce.postAsync('customers', data);

    }

    // Get the specified customer
    static getCustomer(id) {

        return WooCommerce.getAsync(`customers/${id}`);

    }

    // 3 Orders

    // Create a new customer order
    static createOrder(data) {
        return WooCommerce.postAsync('orders', data);
    }

    // Get Customer orders
    static getCustomerOrders(id) {
        return WooCommerce.getAsync(`orders?customer=${id}`);
    }

    // Get Customer orders
    static getOrder(id) {
        return WooCommerce.getAsync(`orders/${id}`);
    }


    // 4

    // 5

    /**
     *
     * 6.Products
     *
     */

    // All Products
    static getAllProducts() {

        return WooCommerce.getAsync('products?order=asc&orderby=title');
    }

    // Return products from a select category
    static getCatProducts(cat) {
        return WooCommerce.getAsync(`products?category=${cat}`);
    }

    // Single Product
    static getProduct(id) {

        return WooCommerce.getAsync('products/' + id);
    }

    // List all product variations
    static getVariations(id) {

        return WooCommerce.getAsync(`products/${id}/variations`);
    }

    // Retrieve a specific product variation by ID
    static getVariation(pid, vid) {

        return WooCommerce.getAsync(`products/${pid}/variations/${vid}`);
    }

    // 7

    // 8

    // 9


    /**
     * 10 Categories
     */

    // All categories
    static getAllCategories() {
        return WooCommerce.getAsync('products/categories?order=asc');
    }

    /**
     *
     * 20.Payment Gateways
     *
     */

    // Get all pay gateways
    static getPaymentGateways() {

        return WooCommerce.getAsync('payment_gateways');

    }

    // Get pay gateways
    static getPaymentGateway(id) {

        return WooCommerce.getAsync(`payment_gateways/${id}`);

    }


    /**
     *
     * 28.Functions to work with WooCommerce MarketPlace Plugin
     *
     */

    static getAllVendors(page = 1) {

        return WooCommerceVendor.getAsync("vendors");
    }

    //End of the API class
}
module.exports = API;