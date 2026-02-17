const mongoose = require("mongoose");

const subscriptionPlanSchema = new mongoose.Schema({
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Provider",
  },
  plan: String,
  status: String,
  price: Number,
  mealCount: Number,
  title: String,
  description: String,
});

const SubscriptionPlan = mongoose.model(
  "SubscriptionPlan",
  subscriptionPlanSchema,
);
module.exports = SubscriptionPlan;
