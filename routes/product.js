var express = require('express');
var router = express.Router();
var productCtrl = requires('../controllers/products')

router.get('/catalog', productCtrl.index);

module.exports = router