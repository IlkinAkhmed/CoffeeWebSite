const { CafenaBest } = require("../Models/bestModel");

// get all productss
exports.getAllBest = async (req, res) => {
    try {
        const data = await CafenaBest.find({});
        res.send(data);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

// get products by id
exports.getBestById = async (req, res) => {
    const { id } = req.params;
    try {
        const category = await CafenaBest.findById(id);
        res.send(category);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

// delete products
exports.deleteBestById = async (req, res) => {
    const { id } = req.params;
    try {
        await CafenaBest.findByIdAndDelete(id);
        res.status(200).json({ message: "category deleted" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

// post products
exports.postBest = async (req, res) => {
    try {
        await CafenaBest.create(req.body);
        res.status(200).json({ message: "category created" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

// update products

exports.updateBestById = async (req, res) => {
    const { id } = req.params;
    try {
        await CafenaBest.findByIdAndUpdate(id, req.body);
        res.status(200).json({ message: "category updated" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}




