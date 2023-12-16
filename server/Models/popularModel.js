
const mongoose = require("mongoose")

const { Schema } = mongoose;

const cafenaSchema = new Schema(
    {
        img: { type: String, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true }
    },
    { timestamps: true }
);

exports.CafenaPopular = mongoose.model("cafenaPopular", cafenaSchema);