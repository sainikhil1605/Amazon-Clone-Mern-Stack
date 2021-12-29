const Cart = require('../models/Cart');

const getCart = async (req, res) => {
  const userCart = await Cart.findOne({ createdBy: req.user.userId });

  res.status(200).json({ cart: userCart });
};

const addToCart = async (req, res) => {
  const userCart = await Cart.findOne({ createdBy: req.user.userId });

  if (!userCart) {
    const newCart = await Cart.create({ createdBy: req.user.userId });
    req.body.products.forEach((item) => {
      newCart.products.push(item);
    });
    newCart.save();
    res.status(200).json({ cart: newCart });
  } else {
    const { products } = req.body;
    products.forEach(async (item) => {
      const index = userCart.products.findIndex((product) => {
        return product.productId.toString() === item.productId.toString();
      });
      if (index !== -1) {
        let item = userCart.products[index];
        item.quantity++;
        userCart.products[index] = item;
      } else {
        await userCart.products.push(item);
      }
    });
    userCart.save();
    res.status(200).json({ cart: userCart });
  }
};

const removeFromCart = async (req, res) => {
  const { id } = req.params;
  const userCart = await Cart.findOne({ createdBy: req.user.userId });
  const index = userCart.products.findIndex((product) => {
    return product.productId.toString() === id.toString();
  });
  userCart.products.splice(index, 1);
  userCart.save();
  res.status(200).json({ cart: userCart });
};
const changeQuantity = async (req, res) => {
  const { id } = req.params;
  const { action } = req.body;
  if (action === 'INCREASE') {
    const userCart = await Cart.findOne({ createdBy: req.user.userId });
    const index = userCart.products.findIndex((product) => {
      return product.productId.toString() === id.toString();
    });
    if (index !== -1) {
      let item = userCart.products[index];
      item.quantity++;
      userCart.products[index] = item;
    }
    userCart.save();
    res.status(200).json({ cart: userCart });
  } else {
    const userCart = await Cart.findOne({ createdBy: req.user.userId });
    const index = userCart.products.findIndex((product) => {
      return product.productId.toString() === id.toString();
    });
    if (index !== -1) {
      if (userCart.products[index].quantity > 1) {
        let item = userCart.products[index];
        item.quantity--;
        userCart.products[index] = item;
      } else {
        userCart.products.splice(index, 1);
      }
    }
    userCart.save();
    res.status(200).json({ cart: userCart });
  }
};
const clearCart = async (req, res) => {
  const userCart = await Cart.findOneAndDelete({ createdBy: req.user.userId });

  res.status(200).json({ cart: userCart });
};
module.exports = {
  getCart,
  addToCart,
  removeFromCart,
  changeQuantity,
  clearCart,
};
