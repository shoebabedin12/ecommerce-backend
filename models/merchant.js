const mongoose = require("mongoose");
const {Schema} = mongoose;

const merchantSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    brandName: {
        type: Schema.Types.ObjectId,
        ref: "Brand",
        default: null
    },
    isActive: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        default: "Waiting",
        enum: ["Waiting", "Rejected", "Approved"]
    },
    updated: Date,
    created: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model("MerChant", merchantSchema);