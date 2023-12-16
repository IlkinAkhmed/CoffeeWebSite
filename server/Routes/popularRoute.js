const express = require("express")
const popularRouter = express.Router()
const { getAllPopular, deletePopularById, updatePopularById, postPopular, getPopularById } = require("../Controllers/popularController")

popularRouter.get('', getAllPopular)
popularRouter.get('/:id', getPopularById)
popularRouter.delete('/:id', deletePopularById)
popularRouter.put('/:id', updatePopularById)
popularRouter.post('', postPopular)

module.exports = popularRouter