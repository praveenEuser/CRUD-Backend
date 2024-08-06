const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.models.js");
const productRoute = require('./routes/product.route.js')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("hello from node api");
});



mongoose
  .connect(
    "mongodb+srv://praveenkumarcs21:YIythFfwXveZTjjW@cluster001.zmyriv0.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster001"
  )
  .then(() => {
    console.log("connected to database!");
    app.listen(1010, () => {
      console.log("Server is running on port 1010");
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
