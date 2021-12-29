const express = require('express');

const CartRouter = express.Router();
const {
  getCart,
  addToCart,
  removeFromCart,
  changeQuantity,
  clearCart,
} = require('../controllers/Cart');

CartRouter.get('/', getCart);
CartRouter.post('/', addToCart);
CartRouter.delete('/', clearCart);
CartRouter.delete('/:id', removeFromCart);
CartRouter.patch('/:id', changeQuantity);
module.exports = CartRouter;
