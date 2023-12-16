const express = require("express")
const { getAllBest, getBestById, deleteBestById, updateBestById, postBest } = require("../Controllers/bestcontroller")
const bestRouter = express.Router()

bestRouter.get('', getAllBest)
bestRouter.get('/:id', getBestById)
bestRouter.delete('/:id', deleteBestById)
bestRouter.put('/:id', updateBestById)
bestRouter.post('', postBest)

module.exports = bestRouter