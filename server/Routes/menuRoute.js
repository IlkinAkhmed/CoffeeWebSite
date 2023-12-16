const express = require("express")
const menuRouter = express.Router()
const { getAllMenus, getMenuById, deleteMenuById, updateMenuById, postMenu } = require("../Controllers/menuController")

menuRouter.get('', getAllMenus)
menuRouter.get('/:id', getMenuById)
menuRouter.delete('/:id', deleteMenuById)
menuRouter.put('/:id', updateMenuById)
menuRouter.post('', postMenu)

module.exports = menuRouter