const { Router } = require("express")
const NotesController = require("../controllers/NotesController")

const notesController = new NotesController()
const notesRoutes = Router()

notesRoutes.delete("/:note_id", notesController.delete)
notesRoutes.post("/:user_id", notesController.create)
notesRoutes.get("/:note_id", notesController.show)
notesRoutes.get("/", notesController.index)

module.exports = notesRoutes
