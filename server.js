const express = require("express");
const cors = require("cors");
const allProducts = require("./products.json");
const detailedProducts = require("./detailed-products.json");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/api/products", (req, res) => {
  return res.json(allProducts);
});

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const product = detailedProducts.find((d) => d.id === id);
  if (!product) res.status(404).json({ error: "Product not found!" });
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
