const express = require('express');

const CartRouter = express.Router();
const { getCart, addToCart, removeFromCart } = require('../controllers/Cart');

CartRouter.get('/', getCart);
CartRouter.post('/', addToCart);
CartRouter.delete('/:id', removeFromCart);

module.exports = CartRouter;
