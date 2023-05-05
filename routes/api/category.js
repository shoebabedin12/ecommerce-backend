const express = require("express")
const _ = express.Router();
const Category = require("./../../models/category")


_.post("/createcategory", async (req, res) => {
    const {
        name
    } = req.body;

    const existingcategory = await Category.find({name});
    if(existingcategory.length > 0){
        return res.json(`${existingcategory[0].name} category already exist`)
    }

    const category = new Category({
        name
    })

    category.save();
    res.json(category);
});

_.post("/categorystatus", async (req, res)=>{
    const {name, status} = req.body;

    const updateCategory = await Category.findOneAndUpdate({name}, {status}, {new: true})

    res.json(updateCategory)
});

_.get("/allcagetory", async (req, res)=>{

    const allcategory = await Category.find({})

    res.json(allcategory)
})


module.exports = _;