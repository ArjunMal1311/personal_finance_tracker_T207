const mongoose = require("mongoose");
const MONGO_URI = "";

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("Connected to Mongodb");
  })
  .catch((err) => {
    console.error("Something happened to mongodb ", err);
  });
