require('./../config/database');
const sample = require('./sample-data');
const Product = require('./../models/product');

const seed = Product.remove({})

//create products
seed.then(()=> {
    return Product.create(sample)
})

.then((product) => {
    console.log(product);
    require('mongoose').connection.close();
    process.exit();
});