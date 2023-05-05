const express = require("express");
const _ = express.Router();
const authRoutes = require("./auth");
const brandRoutes =  require("./brand");
const categoryRoutes =  require("./category");
const subCategoryRoutes =  require("./subCategory");
const productRoutes =  require("./product");


_.use("/auth", authRoutes);
_.use("/brand", brandRoutes);
_.use("/category", categoryRoutes);
_.use("/subcategory", subCategoryRoutes);
_.use("/product", productRoutes);


module.exports = _;