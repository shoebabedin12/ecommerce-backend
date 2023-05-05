const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    slug:{
        type: String,
        unique: true,
        required: true
    },
    image: {
        type: String,
        // required: true
    },
    description: {
        type: String,
        // required: true
    },
    price:{
        type: String,
        required: true
    },
    category:{
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    subcategory:{
        type: Schema.Types.ObjectId,
        ref: "SubCategory",
        required: true
    },
    discount:{
        type: "string",
        default: null
    },
    rating:{
        type: Number,
        default: null
    },
    comments:{ 
        type: String,
        default: null
    },
    isActive: {
        type: Boolean,
        default: false
    },
    merchant:{
        type: Schema.Types.ObjectId,
        ref: "MerChant",
        default: null
    },
    status: {
        type: String,
        default: "Waiting",
        enum: ["Waiting", "Rejected", "Approved"]
    },
    updated: Date,
    created:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Product", productSchema);