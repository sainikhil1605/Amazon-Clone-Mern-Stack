const { StatusCodes } = require('http-status-codes');
const Order = require('../models/Order');
const Product = require('../models/Product');
const Cart = require('../models/Cart');
const addOrderDetails = async (order) => {
  const { products } = order;
  const temp = await Promise.all(
    products.map(async (product) => {
      const productDetails = await Product.findOne({
        _id: product.productId,
      });
      const productName = productDetails.name;
      const productPrice = productDetails.price;
      const productImage = productDetails.imageURL;
      const tempObj = { ...product, productName, productPrice, productImage };
      return tempObj;
    })
  );
  return { ...order, products: temp };
};
const getOrders = async (req, res) => {
  const orders = await Order.findOne({ createdBy: req.user.userId })
    .lean()
    .exec();

  if (!orders) {
    res.status(StatusCodes.OK).json('This user has no orders');
  }
  orders.orders.sort((a, b) => (a.orderedAt > b.orderedAt ? -1 : 1));
  const newOrders = await Promise.all(
    orders.orders.map(async (order) => addOrderDetails(order))
  );
  res.status(StatusCodes.OK).json({ orders: newOrders });
};
const addOrders = async (req, res) => {
  const userOrder = await Order.findOne({ createdBy: req.user.userId });
  await Cart.deleteMany({ createBy: req.user.userId });
  if (!userOrder) {
    const newOrder = await Order.create({
      createdBy: req.user.userId,
    });
    newOrder.orders.push(req.body);
    await newOrder.save();
    res.status(200).json(newOrder);
  } else {
    userOrder.orders.push(req.body);
    await userOrder.save();
    res.status(StatusCodes.OK).json({ userOrder });
  }
};
const getOrder = async (req, res) => {
  const userOrder = await Order.findOne({ createdBy: req.user.userId })
    .lean()
    .exec();
  if (!userOrder) {
    res.status(StatusCodes.NOT_FOUND).json('No orders found for user');
  } else {
    let flag = false;
    await userOrder.orders.forEach(async (order) => {
      if (order._id == req.params.id) {
        flag = true;
        const newOrder = await addOrderDetails(order);
        res.status(StatusCodes.OK).json(newOrder);
      }
    });
    if (flag === false) {
      throw new Error('Order not found for user');
    }
  }
};
const updateOrder = async (req, res) => {
  const { id } = req.params;
  const userOrder = await Order.findOne({ createdBy: req.user.userId });
  if (!userOrder) {
    res.status(StatusCodes.NOT_FOUND).json('No Orders found for user');
  } else {
    const index = userOrder.orders.findIndex(
      (order) => order._id.toString() == id
    );

    if (index === -1) {
      res.status(StatusCodes.NOT_FOUND).json('Order not found for user');
    } else {
      let order = userOrder.orders[index];
      order.orderStatus = req.body.status;
      order.lastUpdatedAt = Date.now();
      userOrder.orders[index] = order;
      userOrder.save();
      res.status(StatusCodes.OK).json({ userOrder });
    }
  }
};

module.exports = { getOrders, addOrders, getOrder, updateOrder };
