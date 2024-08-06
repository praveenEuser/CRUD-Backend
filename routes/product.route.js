const express = require('express');
const router = express.Router();
const {getProducts,getProductsById,updateProducts,deleteProducts,createProducts} = require('../controller/product.controller.js')

router.get('/', getProducts);
router.get("/:id",getProductsById );
router.put("/:id",updateProducts);
router.delete("/:id",deleteProducts);
router.post("/", createProducts);

module.exports = router;