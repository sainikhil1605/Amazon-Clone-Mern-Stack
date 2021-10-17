const mongoose = require('mongoose');

const { Schema } = mongoose;
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);
const productSchema = new Schema({
  productId: {
    type: Number,
    unique: true,
  },
  productName: {
    type: String,
  },
  productRating: {
    type: Number,
    max: 5,
    min: 0,
  },
  productDescription: {
    type: String,
  },
  productPrice: {
    type: Number,
  },
  productImage: {
    type: String,
  },
});
productSchema.plugin(autoIncrement.plugin, { model: 'productModel', field: 'productId' });
const productModel = mongoose.model('productModel', productSchema);
module.exports = productModel;
