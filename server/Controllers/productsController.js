const { CafenaProducts } = require("../Models/productsModel");

// get all productss
exports.getAllProducts = async (req, res) => {
    try {
        const data = await CafenaProducts.find({});
        res.send(data);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

// get products by id
exports.getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const category = await CafenaProducts.findById(id);
        res.send(category);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

// delete products
exports.deleteProductById = async (req, res) => {
    const { id } = req.params;
    try {
        await CafenaProducts.findByIdAndDelete(id);
        res.status(200).json({ message: "category deleted" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

// post products
exports.postProduct = async (req, res) => {
    try {
        await CafenaProducts.create(req.body);
        res.status(200).json({ message: "category created" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

// update products

exports.updateProductById = async (req, res) => {
    const { id } = req.params;
    try {
        await CafenaProducts.findByIdAndUpdate(id, req.body);
        res.status(200).json({ message: "category updated" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}




