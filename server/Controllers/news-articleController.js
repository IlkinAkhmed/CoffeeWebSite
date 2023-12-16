const { CafenaNewsArticle } = require("../Models/news-articleModel");

// get all users
exports.getAllNews = async (req, res) => {
    try {
        const data = await CafenaNewsArticle.find({});
        res.send(data);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

// get user by id
exports.getNewsById = async (req, res) => {
    const { id } = req.params;
    try {
        const category = await CafenaNewsArticle.findById(id);
        res.send(category);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

// delete user
exports.deleteNewsById = async (req, res) => {
    const { id } = req.params;
    try {
        await CafenaNewsArticle.findByIdAndDelete(id);
        res.status(200).json({ message: "category deleted" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

// post user
exports.postNews = async (req, res) => {
    try {
        await CafenaNewsArticle.create(req.body);
        res.status(200).json({ message: "category created" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

// update user

exports.updateNewsById = async (req, res) => {
    const { id } = req.params;
    try {
        await CafenaNewsArticle.findByIdAndUpdate(id, req.body);
        res.status(200).json({ message: "category updated" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}




