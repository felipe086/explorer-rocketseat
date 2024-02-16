require("express-async-errors")
const AppError = require("./utils/AppError.js")
const express = require("express")
const routes = require("./routes/index.js")
const PORT = 3000

const app = express()

app.use(express.json())
app.use(routes)
app.use((error, req, res, next) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message,
    })
  }
  console.log(error)
  return res.status(500).json({ status: "error", message: "Internal Server Error", error })
})

app.listen(PORT, () => console.log(`Running on port: ${PORT}`))
