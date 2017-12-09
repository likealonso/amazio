var Product = require('./../models/product')

function index (req, res) {
    console.log('work!!!!')
    Product.find({}).then(products => (res.json(products)) )
}

function addItem (req, res) {
    
}

function deleteItem (req, res) {
    
}

module.exports = {
    index: index,
    addItem,
    deleteItem
}