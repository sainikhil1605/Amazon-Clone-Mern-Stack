const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    products: [
      {
        productId: {
          type: mongoose.Types.ObjectId,
          ref: 'Product',
        },
        name: {
          type: String,
          required: true,
        },
        description: {
          type: String,
        },
        price: {
          type: Number,
          required: true,
        },
        stock: {
          type: String,
          enum: ['In Stock', 'Out Of Stock'],
          default: 'In Stock',
        },
        quantity: {
          type: Number,
          default: 1,
        },
        imageURL: {
          type: String,
        },
        _id: false,
      },
    ],
  },
  { timeStamps: true }
);
module.exports = mongoose.model('Cart', CartSchema);
