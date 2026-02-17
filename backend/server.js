const dotenv = require("dotenv");
dotenv.config({ quiet: true });
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const mongoServer = process.env.MONGO_SERVER;

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
