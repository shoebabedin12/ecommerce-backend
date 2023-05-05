const express = require("express")
const _ = express.Router();
const Product = require("./../../models/product")

_.post("/createproduct", (req, res) => {
    const {
        name,image,
        price,category, subcategory
    } = req.body;

    const slug = name.toLowerCase().split(" ").join("-")

    const product = new Product({
        name,
        price,image,
        slug,category, subcategory
    })

    product.save();

    res.json(product)
})

_.post("/productstatus", async (req, res)=>{
    const {name, status} = req.body;

    const updateproduct = await Product.findOneAndUpdate({name}, {status}, {new:true})

    res.json(updateproduct)
})

_.get("/allproducts", async (req, res)=>{
    const allproducts = await Product.find({}).populate('category').populate('subcategory')

    res.json(allproducts);
})



module.exports = _;