const express = require("express")
const { getAllNews, postNews, updateNewsById, deleteNewsById, getNewsById } = require("../Controllers/news-articleController")
const newsArticleRouter = express.Router()

newsArticleRouter.get('', getAllNews)
newsArticleRouter.get('/:id', getNewsById)
newsArticleRouter.delete('/:id', deleteNewsById)
newsArticleRouter.put('/:id', updateNewsById)
newsArticleRouter.post('', postNews)

module.exports = newsArticleRouter