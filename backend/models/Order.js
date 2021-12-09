const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    orders: [
      {
        products: [
          {
            productId: {
              type: mongoose.Types.ObjectId,
              ref: 'Product',
              unique: true,
            },
            quantity: {
              type: Number,
              default: 1,
            },
          },
        ],
        orderedAt: {
          type: Date,
          default: Date.now(),
        },
        orderStatus: {
          type: String,
          enum: ['pending', 'delivered', 'cancelled'],
          default: 'pending',
          lastUpdatedAt: {
            type: Date,
            default: Date.now(),
          },
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', OrderSchema);
