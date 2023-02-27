const express = require("express")
const _ = express.Router()

_.get("/registration" , (req, res) => {
    res.json("ami api routes")
})

module.exports = _;