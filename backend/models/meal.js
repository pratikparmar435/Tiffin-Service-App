const mongoose = require("mongoose");

// Meal Schema
const mealSchema = new mongoose.Schema({
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Provider",
  },
  title: String,
  description: String,
  category: String,
  rating: Number,
  foodPhotos: String,
  price: Number,
  isAvailable: Boolean,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Meal model
const Meal = mongoose.model("Meal", mealSchema);
module.exports = Meal;
