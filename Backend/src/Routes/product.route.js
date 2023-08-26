const express = require('express');
const router = express.Router()
const { createProduct, updateProduct, deleteProduct, getAllProducts, getProductDetail,getProductByCategory} = require('../controllers/product.controller');

 
router.post('/products/new', createProduct)
router.get("/products",  getAllProducts);
router.get("/product/:id", getProductDetail);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);
router.get("/productsByCategory",  getProductByCategory);

module.exports = router;