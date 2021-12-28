const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
    },
    rating: {
      type: Number,
      default: 4.5,
    },
    category: {
      type: String,
    },
    description: {
      type: String,
    },
    imageURL: {
      type: String,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model('Product', ProductSchema);
