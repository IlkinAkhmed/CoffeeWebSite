const { CafenaPopular } = require("../Models/popularModel");

// get all users
exports.getAllPopular = async (req, res) => {
    try {
        const data = await CafenaPopular.find({});
        res.send(data);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

// get user by id
exports.getPopularById = async (req, res) => {
    const { id } = req.params;
    try {
        const category = await CafenaPopular.findById(id);
        res.send(category);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

// delete user
exports.deletePopularById = async (req, res) => {
    const { id } = req.params;
    try {
        await CafenaPopular.findByIdAndDelete(id);
        res.status(200).json({ message: "category deleted" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

// post user
exports.postPopular = async (req, res) => {
    try {
        await CafenaPopular.create(req.body);
        res.status(200).json({ message: "category created" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

// update user

exports.updatePopularById = async (req, res) => {
    const { id } = req.params;
    try {
        await CafenaPopular.findByIdAndUpdate(id, req.body);
        res.status(200).json({ message: "category updated" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}




