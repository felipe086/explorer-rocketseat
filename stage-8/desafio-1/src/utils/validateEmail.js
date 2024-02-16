const AppError = require("./AppError")

function validateEmail(email) {
  const emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,4}")
  const checkValidEmail = emailRegex.test(email)

  if (!checkValidEmail) {
    throw new AppError("Por favor, insira um e-mail válido.")
  }

  return email
}

module.exports = validateEmail
