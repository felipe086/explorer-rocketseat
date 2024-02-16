const { Router } = require("express")
const UsersController = require("../controllers/UsersController.js")

const usersController = new UsersController()
const userRoutes = Router()

userRoutes.post("/", usersController.create)
userRoutes.delete("/:userId", usersController.delete)
userRoutes.get("/:userId", usersController.find)
userRoutes.put("/:userId", usersController.update)

module.exports = userRoutes
