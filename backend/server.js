const dotenv = require("dotenv");
dotenv.config({ quiet: true });
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const mongoServer = process.env.MONGO_SERVER;
const cors = require("cors");
//Data base schemas
const Meal = require("./models/meal");
const { Provider } = require("./models/users");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

main()
  .then(() => {
    console.log("Connection Successful with mongoDB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mongoServer);
}

app.listen(PORT, () => {
  console.log("Server running on port :", PORT);
});

app.get("/", (req, res) => {
  res.send("Working");
});

// Search page routers
app.get("/search", async (req, res) => {
  const city = req.query.city;
  try {
    let providers = await Provider.find({ city: city });
    let providersIds = providers.map((p) => p._id);
    let meals = await Meal.find({ provider: { $in: providersIds } });
    res.json(meals);
  } catch (err) {
    res.json(err);
  }
});

app.post("/get4meals", async (req, res) => {
  try {
    const filter = req.body;
    let query = {};
    if (filter) {
      if (filter.priceRange) {
        query.price = { $lte: Number(filter.priceRange) };
      }
      if (filter.category) {
        query.category = { $eq: filter.category };
      }
      if (filter.rating) {
        query.rating = { $lte: Number(filter.rating) };
      }
    }
    let meals = await Meal.find(query)
      .sort({ price: -1, rating: -1 })
      .limit(4)
      .populate("provider");
    res.json(meals);
    console.log(filter);
  } catch (err) {
    console.log(err);
  }
});
