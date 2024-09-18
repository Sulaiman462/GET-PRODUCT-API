const express = require('express');
const router=express.Router()
const Product = require('../models/product')

const ProductContoller =  require('../Controllers/fetchProduct')
router.get('/get-product',ProductContoller.getProduct)


module.exports = router;
