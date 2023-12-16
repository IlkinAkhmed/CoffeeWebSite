const { CafenaMenu } = require("../Models/menuModel");

// get all productss
exports.getAllMenus = async (req, res) => {
    try {
        const data = await CafenaMenu.find({});
        res.send(data);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

// get products by id
exports.getMenuById = async (req, res) => {
    const { id } = req.params;
    try {
        const category = await CafenaMenu.findById(id);
        res.send(category);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

// delete products
exports.deleteMenuById = async (req, res) => {
    const { id } = req.params;
    try {
        await CafenaMenu.findByIdAndDelete(id);
        res.status(200).json({ message: "category deleted" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

// post products
exports.postMenu = async (req, res) => {
    try {
        await CafenaMenu.create(req.body);
        res.status(200).json({ message: "category created" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

// update products

exports.updateMenuById = async (req, res) => {
    const { id } = req.params;
    try {
        await CafenaMenu.findByIdAndUpdate(id, req.body);
        res.status(200).json({ message: "category updated" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}




