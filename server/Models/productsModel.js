
const mongoose = require("mongoose")

const { Schema } = mongoose;

const cafenaSchema = new Schema(
    {
        img: { type: String, required: true },
        name: { type: String, required: true },
        category: { type: String, required: true },
        price: { type: Number, required: true },
        discountPrice: { type: Number, required: true },
        status: { type: String, required: false }
    },
    { timestamps: true }
);

exports.CafenaProducts = mongoose.model("cafenaProducts", cafenaSchema);