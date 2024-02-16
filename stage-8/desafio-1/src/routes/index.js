const { Router } = require("express")
const userRoutes = require("./user.routes.js")
const movieNotesRoutes = require("./movieNotes.routes.js")

const routes = Router()

routes.use("/users", userRoutes)
routes.use("/movie-notes", movieNotesRoutes)

module.exports = routes
