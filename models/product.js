var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: String,
    sku: String,
    price: Number,
    description: String,
})

// var orderSchema = new Schema({
//     products: [productSchema]
// })

module.exports = mongoose.model('Product', productSchema);