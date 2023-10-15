import express from "express";
const router = express.Router();
import asyncHandler from "../middleware/asyncHandler.js"
import Product from "../models/productModel.js";

// Sample data
// import products from "../data/products.js"

// All Products
router.get("/", asyncHandler (async (req, res) => {
    const products = await Product.find({});
    res.json(products)
}));

//  Single Product
router.get("/:id", asyncHandler( async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        return res.json(product);
    }

    res.status(404).json({message: "Product not found"})
}));


export default router