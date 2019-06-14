'use strict';
// routes/index.js
module.exports = {

    /**
     *
     * Create customer
     *
     */

    createCustomer: (req, res) => {

        if (true) {

            // Extract and Validate customer register form post data
            let post_first_nam = req.body.first_name;
            let post_email = req.body.email;
            let post_last_name = req.body.last_name;
            let post_username = req.body.username;
            let post_address_1 = req.body.address;
            let post_city = req.body.city;
            let post_state = req.body.state;
            let post_postcode = req.body.postcode;
            let post_country = req.body.country;
            let post_phone = req.body.phone;

            // Aggrgate the data and send it to create the customer

            var details = {
                email: post_email,
                first_name: post_first_nam,
                last_name: post_last_name,
                username: post_username,
                billing: {
                    first_name: post_first_nam,
                    last_name: post_last_name,
                    company: '',
                    address_1: post_address_1,
                    address_2: '',
                    city: post_city,
                    state: post_state,
                    postcode: post_postcode,
                    country: post_country,
                    email: post_email,
                    phone: post_phone
                },
                shipping: {
                    first_name: post_first_nam,
                    last_name: post_last_name,
                    company: '',
                    address_1: post_address_1,
                    address_2: '',
                    city: post_city,
                    state: post_state,
                    postcode: post_postcode,
                    country: post_country,
                }
            };

            req.API.createCustomer(details).then(data => {

                // Create new categories array
                let customer = new Array;

                // Iterate over the returned data and extract what is needed
                raw_data = (JSON.parse(data.body));

                const {
                    id,
                    email,
                    first_name,
                    last_name,
                    username,
                    billing,
                    shipping,
                    avatar_url
                } = raw_data;

                customer.push({
                    id,
                    email,
                    first_name,
                    last_name,
                    username,
                    billing,
                    shipping,
                    avatar_url
                });

                res.json(customer);

            }).catch(err => {
                console.log(err);
                res.json('An error account was not created successfully, try agin or contact support.');
            });


        }
    },


    /**
     *
     * Retrieve the customer given the id
     *
     */
    getCustomer: (req, res) => {

        if (req.params.id) {

            let id = req.params.id;

            // Run Validation and sanitization - if passes cont. else throw error
            req.API.getCustomer(id).then(data => {

                // Create new categories array
                let customer = new Array;

                // Extract what is needed
                let raw_data = JSON.parse(data.body);


                const {
                    id,
                    email,
                    first_name,
                    last_name,
                    username,
                    billing,
                    shipping,
                    avatar_url
                } = raw_data;

                customer.push({
                    id,
                    email,
                    first_name,
                    last_name,
                    username,
                    billing,
                    shipping,
                    avatar_url
                });

                res.json(customer);

            }).catch(err => {
                console.log(err);
                res.json(err);
            });
        }
    },


    /**
     *
     * Orders Make and retrieve
     */

    // Make an order
    createOrder: (req, res) => {

        // The order data

        let pay_method = req.body.pay_method;
        let pay_title = re.body.pay_title;
        let paid = req.body.paid;
        let billing = req.body.billing;
        let shipping = req.body.shipping;
        let cart = req.body.cart;
        let shipping_line = req.body.shipping_line;
        let order_note = req.body.note;
        let status = req.body.status;

        let order_data = {
            payment_method: pay_method,
            payment_method_title: pay_title,
            set_paid: paid,
            status: status,
            billing: billing,
            shipping: shipping,
            line_items: cart,
            shipping_lines: shipping_line,
            customer_note: order_note,
        };

        re.API.createOrder(order_data).then(data => {

            let raw_data = (JSON.parse(data.body));

            res.json(raw_data);


        }).catch(err => {
            console.log(err);
            res.json(err);
        })
    },

    // Get all orders by a Customer
    getCustomerOrders: (req, res) => {
        console.log('Getting customer orders');
        // The customer id
        let id = req.params.custid;

        // If order id passes validation then retrieve the associated data
        if (id) {

            req.API.getCustomerOrders(id).then(data => {
                console.log(data);
                let orders = new Array;
                let raw_data = (JSON.parse(data.body));

                for (let raw_order of raw_data) {
                    // Extract the data
                    const {
                        id,
                        number,
                        order_key,
                        status,
                        currency,
                        date_created,
                        dat_modified,
                        discount_total,
                        shipping_total,
                        total,
                        refund,
                        payment_method,
                        payment_method_title,
                        set_paid,
                        billing,
                        shipping,
                        line_items,
                        shipping_lines
                    } = raw_order;

                    orders.push({
                        id,
                        number,
                        order_key,
                        status,
                        currency,
                        date_created,
                        dat_modified,
                        discount_total,
                        shipping_total,
                        total,
                        refund,
                        payment_method,
                        payment_method_title,
                        set_paid,
                        billing,
                        shipping,
                        line_items,
                        shipping_lines
                    });
                }

                res.json(orders);

            }).catch(err => {
                console.log(err);
                res.json(err);
            });
        }
    },

    // Get an order by Customer
    getOrder: (req, res) => {

        // The customer id

        let id = req.params.id;

        // If order id passes validation then retrieve the associated data
        if (id) {

            req.API.getOrder(id).then(data => {

                let order = new Array;
                let raw_data = (JSON.parse(data.body));

                // Extract the data
                const {
                    id,
                    number,
                    order_key,
                    status,
                    currency,
                    date_created,
                    dat_modified,
                    discount_total,
                    shipping_total,
                    total,
                    refund,
                    payment_method,
                    payment_method_title,
                    set_paid,
                    billing,
                    shipping,
                    line_items,
                    shipping_lines
                } = raw_data;

                order.push({
                    id,
                    number,
                    order_key,
                    status,
                    currency,
                    date_created,
                    dat_modified,
                    discount_total,
                    shipping_total,
                    total,
                    refund,
                    payment_method,
                    payment_method_title,
                    set_paid,
                    billing,
                    shipping,
                    line_items,
                    shipping_lines
                });

                res.json(order);

            }).catch(err => {
                console.log(err);
                res.json(err);
            });
        }
    },

    /**
     *
     * Function to get all product categories
     *
     */
    getAllCategories: (req, res) => {
        req.API.getCategories().then(data => {

            // Create new categories array

            let categories = new Array;
            // Iterate over the data and extract what is needed
            let raw_data = (JSON.parse(data.body));

            for (let raw_category of raw_data) {
                // Get only the data we need from the result
                const {
                    id,
                    name,
                    slug,
                    parent,
                    description,
                    image: {
                        src: thumb
                    },
                    count
                } = raw_category;

                // Add the extracted product data to products array
                categories.push({
                    id,
                    name,
                    slug,
                    parent,
                    description,
                    thumb,
                    count
                });
            }

            res.json(categories);

        }).catch(err => {
            console.log(err);
            res.json(err);
        });
    },


    /**
     *
     * Function to get all listed products
     *
     */
    getAllProducts: (req, res) => {
        req.API.products().then(data => {
            // Create new products array

            let products = new Array;
            // Iterate over the data and extract what is needed
            let raw_data = (JSON.parse(data.body));

            for (let product of raw_data) {
                // Get only the data we need from the result
                const {
                    id,
                    name,
                    slug,
                    description,
                    price,
                    regular_price,
                    sale_price,
                    price_html,
                    on_sale,
                    categories,
                    images
                } = raw_product;

                // Add the extracted product data to products array
                products.push({
                    id,
                    name,
                    slug,
                    description,
                    price,
                    regular_price,
                    sale_price,
                    price_html,
                    on_sale,
                    categories,
                    images
                });
            }

            // Return the new Products Array of objects
            res.json(products);

        }).catch(err => {
            console.log(err);
            res.json(err);
        });
    },

    /**
     *
     * Function to get all products in a category
     *
     */
    getCatProducts: (req, res) => {

        if (req.params.category) {
            let category = req.params.category;

            req.API.getCatProducts(category).then(data => {
                // Create new categories array

                let products = new Array;
                // Iterate over the data and extract what is needed
                let raw_data = (JSON.parse(data.body));

                for (let raw_product of raw_data) {
                    // Get only the data we need from the result
                    const {
                        id,
                        name,
                        slug,
                        description,
                        price,
                        regular_price,
                        sale_price,
                        price_html,
                        on_sale,
                        categories,
                        images
                    } = raw_product;

                    // Add the extracted product data to products array
                    products.push({
                        id,
                        name,
                        slug,
                        description,
                        price,
                        regular_price,
                        sale_price,
                        price_html,
                        on_sale,
                        categories,
                        images
                    });
                }

                // Return the new Products Array of objects
                res.json(products);

            }).catch(err => {
                console.log(err);
                res.json('No data found matching request');
            });
        }

    },


    /**
     *
     * Get product by id
     *
     */
    getProduct: (req, res) => {

        if (req.params.id) {
            let id = req.params.id;

            // Run Validation and sanitization - if passes cont. else throw error
            req.API.getProduct(id).then(data => {
                console.log(data);
                let raw_data = JSON.parse(data.body);

                // Get only the data we need from the result
                const {
                    id,
                    name,
                    slug,
                    description,
                    price,
                    regular_price,
                    sale_price,
                    price_html,
                    on_sale,
                    categories,
                    images,
                    vendor,
                    store_name
                } = raw_data;
                // );

                let product = {
                    id,
                    name,
                    slug,
                    description,
                    price,
                    regular_price,
                    sale_price,
                    price_html,
                    on_sale,
                    categories,
                    images,
                    vendor,
                    store_name
                };

                res.json(product);
            }).catch(err => {
                console.log(err);
                res.json(err);
            });
        }
    },

    /***********************************************************************************************************************
     *
     * WooCommerce Market Place Vendors Routes
     *
     */

    getAllVendors: (req, res) => {

        // Get the page number

        req.API.getAllVendors().then(
            data => {

                //Create an array for the Vendors
                let raw_data = JSON.parse(data.toJSON().body);

                let vendors = new Array;
                // Get the relevant vendor details for the app
                for (let raw_vendor of raw_data) {

                    const {
                        id,
                        first_name,
                        last_name,
                        nicename, // A fancy name or alias
                        display_name, // first_name plus last_name
                        email,
                        shop: {
                            url,
                            title,
                            description,
                            image
                        },
                    } = raw_vendor;

                    vendors.push({
                        id,
                        first_name,
                        last_name,
                        nicename, // A fancy name or alias
                        display_name, // first_name plus last_name
                        email,
                        url,
                        title,
                        description,
                        image
                    });

                    // End for
                }

                res.json(vendors);

            }).catch(err => {
            console.log(err);
            res.json('Error could not laod data try again.')
        });

    },

    /** *******************************************************************************************************************
     *
     * PAYMENT GATEWAYS
     *
     */
    // Get all payment gateways
    getPaymentGateways: (req, res) => {

        req.API.getPaymentGateways().then(data => {

            let payment_gateways = new Array;

            let raw_data = JSON.parse(data.toJSON().body);

            for (let gateway of raw_data) {

                const {
                    id,
                    title,
                    description,
                } = gateway;

                payment_gateways.push({
                    id,
                    title,
                    description,
                });
            }

            res.json(payment_gateways);

        }).catch(err => {
            res.json(err);
        });

    },

    // Get a specified payment gateway
    getPaymentGateway: (req, res) => {

        if (req.params.id) {

            let id = req.params.id;

            req.API.getPaymentGateway(id).then(data => {

                let raw_data = JSON.parse(data.toJSON().body);

                const {
                    id,
                    title,
                    description,
                } = raw_data;

                let payment_gateway = {
                    id,
                    title,
                    description,
                };

                res.json(payment_gateway);


            }).catch(err => {
                console.log(err);
                res.json(err);
            })
        }

    },

};