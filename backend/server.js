import express from "express";
import dotenv from "dotenv";
dotenv.config();

// Sample data
import products from "./data/products.js"

const port = process.env.PORT || 5002;

const app = express();

app.get("/", (req, res) => {
    res.send("API is running...")
})

// All Products
app.get("/api/products", (req, res) => {
    res.json(products)
})

//  SIngle Product
app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p._id = req.params.id)
    res.json(product)
})

app.listen(port, () => console.log(`Server running on ${port}`))