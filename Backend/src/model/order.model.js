
const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  addressInfo: {
    name: { type: String, required: true },
    phoneNo: { type: String, required: true },
    pincode: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, default: "India" },
  },
  orderItems: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "product",
      },
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
      image: { type: String, required: true },
    },
  ],
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "user" },

  paymentInfo: {
    id: {
      type: String,
      required: false,
      default:"Cash on Delivery"
    },

    status: {
      type: String,
      required: false,
    },

  },
  paidAt: {
    type: Date,
    required: false,
  },
  itemsPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  taxPrice: {
    type: Number,
    required: false,
    default: 0,
  },
  shippingPrice: {
    type: Number,
    required: false,
    default: 0,
  },
  totalPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  orderStatus: {
    type: String,
    required: true,
    default: "Processing",
  },

  deliveredAt: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


 module.exports = mongoose.model('order',orderSchema)