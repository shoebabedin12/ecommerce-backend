const mongoose = require("mongoose");
const {Schema} = mongoose;


const categorySchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    image:{
        type: String
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
    created:{
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model("Category", categorySchema)