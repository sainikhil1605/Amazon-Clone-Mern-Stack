const express = require('express');

const ProductRouter = express.Router();
const ProductController = require('../controllers/Product');

ProductRouter.get('/get-products', ProductController.getProducts);
ProductRouter.post('/post-products', ProductController.postProducts);

module.exports = ProductRouter;
