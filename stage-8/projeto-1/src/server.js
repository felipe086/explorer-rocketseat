require("express-async-errors")
const AppError = require("./utils/AppError")
const express = require("express")
const routes = require("./routes")
const migrationsRun = require("./database/sqlite/migrations")
const PORT = 3333

migrationsRun()

const app = express()

app.use(express.json())
app.use(routes)
app.use((error, req, res, next) => {
  console.error(error)
  if (error instanceof AppError) {
    res.status(error.statusCode).json({
      status: "error",
      message: error.message,
    })
  }

  return res.status(500).json({ status: "error", message: "Internal Server Error" })
})

app.listen(PORT, () => console.log(`Running on port ${PORT}!`))
