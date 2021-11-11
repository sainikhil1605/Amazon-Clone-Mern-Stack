const express = require('express');

const CartRouter = express.Router();
const CartController = require('../controllers/CartController');

CartRouter.post('/get-cart', CartController.getCart);
CartRouter.post('/add-cart', CartController.addToCart);
