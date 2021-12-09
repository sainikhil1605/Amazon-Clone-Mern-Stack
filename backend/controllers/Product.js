const { StatusCodes } = require('http-status-codes');
const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
  const { sort } = req.query;
  const result = Product.find({});
  if (sort) {
    const sortList = sort.split(',').join(' ');
    result.sort(sortList);
  }
  const limit = Number(req.query.limit) || 10;
  const page = Number(req.query.page) || 1;

  const products = await result.skip((page - 1) * limit).limit(limit);
  if (!products) {
    throw new Error('Something went wrong');
  }
  res.status(StatusCodes.OK).send({ products, hits: products.length });
};
const getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    throw new Error('Product not found');
  }
  res.status(StatusCodes.OK).send(product);
};
const addProducts = async (req, res) => {
  const products = await Product.insertMany(req.body);
  if (!products) {
    throw new Error('Something went wrong');
  }
  res.status(StatusCodes.CREATED).send(products);
};

const updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!product) {
    throw new Error('Product not found');
  }
  res.status(StatusCodes.OK).send(product);
};
const deleteProduct = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    throw new Error('Product not found');
  }
  res.status(StatusCodes.OK).send(product);
};
module.exports = {
  getAllProducts,
  getProduct,
  addProducts,
  updateProduct,
  deleteProduct,
};
