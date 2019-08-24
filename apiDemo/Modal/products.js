const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName:{type:mongoose.Schema.Types.String},
    price:{type:mongoose.Schema.Types.Number},
});

module.exports = mongoose.model('Product',productSchema);