const mongoose = require("mongoose");
const {Schema} = mongoose;

const brandSchema = new Schema({
    name: {
        type: String,
        trim: true
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
})


module.exports = mongoose.model("Brand", brandSchema);