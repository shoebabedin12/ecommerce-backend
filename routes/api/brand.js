const express = require('express');
const _ = express.Router();
const Brand = require("./../../models/brand");

_.post("/createbrand", (req, res) => {
    const {
        name,
        merchant
    } = req.body;

    let brand = new Brand({
        name,
        merchant
    });

    brand.save();

    res.json(brand)

});

_.post("/brandstatus", async (req, res) => {
    const {
        name,
        status
    } = req.body;

    const updatebrnad = await Brand.findOneAndUpdate({
        name
    }, {
        status
    }, {
        new: true
    });

    res.json(updatebrnad)
});


_.get("/allbrands", async (req, res) => {

    const allbrands = await Brand.find({})

    res.json(allbrands)
})


module.exports = _;