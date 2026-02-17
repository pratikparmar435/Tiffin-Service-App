const mongoose = require("mongoose");

// Customer and Provider Schemas
const customerSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
  phone: Number,
  address: [String],
  orderHistory: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  role: {
    type: String,
    default: "customer",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  profilePhoto: String,
});

const providerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  password: String,
  address: String,
  role: {
    type: String,
    default: "provider",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  weeklyMenu: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "WeeklyMenu",
  },
  subscriptions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ActiveSubscription",
    },
  ],
});

// Customer and Provider models
const Customer = mongoose.model("Customer", customerSchema);
const Provider = mongoose.model("Provider", providerSchema);

module.exports = { Customer, Provider };
