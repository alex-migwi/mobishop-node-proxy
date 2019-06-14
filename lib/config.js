// // config.js
// const dotenv = require('dotenv');
// dotenv.config();
module.exports = {
    endpoint: process.env.API_URL,
    wcAPIKey: process.env.WC_API_KEY,
    wcAPISecret: process.env.WC_API_SECRET,
    port: process.env.PORT
};