const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  },
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Provider",
  },
  meal: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Meal",
  },
  status: {
    type: String,
    enum: ["pending", "confirmed", "delivered", "cancelled"],
    default: "pending",
  },
  paymentStatus: {
    type: String,
    enum: ["unpaid", "paid", "failed"],
    default: "unpaid",
  },
  deliveryAddress: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  totalAmount: Number,
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
