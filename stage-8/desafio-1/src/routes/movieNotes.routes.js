const { Router } = require("express")
const MovieNotesController = require("../controllers/MovieNotesController.js")

const movieNotesController = new MovieNotesController()
const routes = Router()

routes.post("/:userId", movieNotesController.create)
routes.delete("/:noteId", movieNotesController.delete)
routes.put("/:noteId", movieNotesController.update)
routes.get("/:userId", movieNotesController.findByUser)
routes.get("/", movieNotesController.find)

module.exports = routes
