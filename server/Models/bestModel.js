const mongoose = require("mongoose")

const { Schema } = mongoose;

const cafenaSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        img: { type: String, required: true }
    },
    { timestamps: true }
);

exports.CafenaBest = mongoose.model("cafenaBest", cafenaSchema);