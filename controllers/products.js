var Product = require('../models/product')

function index (req, res) {
    console.log('hey hey')
    Product.find({}).then((product) => console.log(product))
}

function addItem (req, res) {
    
}

function deleteItem (req, res) {
    
}

module.exports = {
    index,
    addItem,
    deleteItem
}