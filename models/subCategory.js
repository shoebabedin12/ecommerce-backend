const mongoose = require("mongoose");
const {Schema} = mongoose;

const subCategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    isActive: {
        type: Boolean,
        default: false
    },
    category:{
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
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
})


module.exports = mongoose.model("SubCategory", subCategorySchema);