const AppError = require("../utils/AppError")
const sqlConnection = require("../database/sqlite")
const { hash, compare } = require("bcryptjs")

class UsersController {
  async create(req, res) {
    const { name, email, password } = req.body

    const database = await sqlConnection()
    const checkUserExists = await database.get(`SELECT * FROM users WHERE email = (?)`, [email])

    if (checkUserExists) {
      throw new AppError("Este e-mail já está em uso.")
    }

    const hashedPassword = await hash(password, 8)

    await database.run(`INSERT INTO users (name,email,password) VALUES (?,?,?)`, [
      name,
      email,
      hashedPassword,
    ])

    return res.status(201).json({ message: "Usuário criado com sucesso." })
  }

  async update(req, res) {
    const { id } = req.params
    const { name, email, password, old_password } = req.body

    const database = await sqlConnection()
    const user = await database.get(`SELECT * FROM users WHERE id = (?)`, [id])

    if (!user) {
      throw new AppError("Usuário não encontrado.")
    }

    const userWithUpdatedEmail = await database.get(`SELECT * FROM users WHERE email = (?)`, [
      email,
    ])

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError("Este email já está em uso.")
    }

    user.name = name ?? user.name
    user.email = email ?? user.email

    if (password && !old_password) {
      throw new AppError(`Você precisa informar a senha antiga para definir uma nova senha.`)
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password)

      if (!checkOldPassword) {
        throw new AppError("A senha antiga não confere.")
      }

      user.password = await hash(password, 8)
    }

    await database.run(
      `UPDATE users SET name = ?, email = ?, password = (?), updated_at = DATETIME('now') WHERE id = (?)`,
      [user.name, user.email, user.password, id]
    )

    return res.status(200).json({ message: "Usuário atualizado com sucesso." })
  }
}

module.exports = UsersController
