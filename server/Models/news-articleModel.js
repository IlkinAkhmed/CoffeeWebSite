const mongoose = require("mongoose")

const { Schema } = mongoose;

const cafenaSchema = new Schema(
    {
        description: { type: String, required: true },
        img: { type: String, required: true }
    },
    { timestamps: true }
);

exports.CafenaNewsArticle = mongoose.model("cafenaNewsArticle", cafenaSchema);