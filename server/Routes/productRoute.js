const express = require("express")
const router = express.Router()
const { getAllProducts, getProductById, deleteProductById, updateProductById, postProduct } = require("../Controllers/productsController")

router.get('', getAllProducts)
router.get('/:id', getProductById)
router.delete('/:id', deleteProductById)
router.put('/:id', updateProductById)
router.post('', postProduct)

module.exports = router