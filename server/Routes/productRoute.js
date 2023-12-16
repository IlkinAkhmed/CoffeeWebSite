const express = require("express")
const productRouter = express.Router()
const { getAllProducts, getProductById, deleteProductById, updateProductById, postProduct } = require("../Controllers/productsController")

productRouter.get('', getAllProducts)
productRouter.get('/:id', getProductById)
productRouter.delete('/:id', deleteProductById)
productRouter.put('/:id', updateProductById)
productRouter.post('', postProduct)

module.exports = productRouter