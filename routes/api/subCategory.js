const express = require("express")
const _ = express.Router();
const subCategory = require("./../../models/subCategory");

_.post("/createsubcategory", (req, res)=>{
const {name, category} = req.body

const subcategory = new subCategory({name, category})

subcategory.save()

res.json(subcategory)
})


_.post("/subcategorystatus", async (req, res)=>{
    const {name, status} = req.body;

    const updateSubCategory = await subCategory.findOneAndUpdate({name}, {status}, {new: true})

    res.json(updateSubCategory)
});

_.get("/allsubcategory", async (req, res)=>{
    const allsubcategory = await subCategory.find({}).populate('category');

    res.json(allsubcategory)
})



module.exports = _;