const mongoose = require("mongoose");

const SpotSchema = new mongoose.Schema({
    company: { 
        type: String, 
        required: true
    },
    techs: { 
        type: [String], 
        required: true
    },
    price: { 
        type: Number, 
        required: true
    },
    image: { 
        type: String, 
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
});

module.exports = mongoose.model("Spot", SpotSchema);
