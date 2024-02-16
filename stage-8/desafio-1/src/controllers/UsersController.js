const AppError = require("../utils/AppError.js")
const validateEmail = require("../utils/validateEmail.js")
const knex = require("../database/knex/index.js")
const { hash, compare } = require("bcryptjs")

class UsersController {
  async create(req, res) {
    const { name, email, password, avatar } = req.body

    if (!name || !password || !email) {
      throw new AppError("Por favor, insira todas as informações.")
    }
    const validatedEmail = validateEmail(email)

    const userAlreadyExists = await knex("users").where({ email: validatedEmail }).first()

    if (userAlreadyExists) {
      throw new AppError("Este email já está em uso. Tente outro.")
    }

    const hashedPassword = await hash(password, 8)

    await knex("users").insert({ name, email: validatedEmail, password: hashedPassword, avatar })

    return res.status(201).json({ message: "Usuário cadastrado com sucesso" })
  }

  async delete(req, res) {
    const { userId } = req.params

    const userExists = await knex("users").where({ id: userId }).first()

    if (!userExists) {
      throw new AppError("Usuário não existente.")
    }

    await knex("users").where({ id: userId }).first().del()

    return res.status(200).json({ message: "Usuário deletado com sucesso." })
  }

  async find(req, res) {
    const { userId } = req.params

    const userExists = await knex("users")
      .column(["id", "name", "email", "avatar", "created_at"])
      .where({ id: userId })
      .first()

    if (!userExists) {
      throw new AppError("Usuário não existente.")
    }

    return res.status(200).json(userExists)
  }

  async update(req, res) {
    const { userId } = req.params
    const { name, old_email, new_email, old_password, new_password, avatar } = req.body

    const user = await knex("users").where({ id: userId }).first()

    if (!user) {
      throw new AppError("Usuário não encontrado.")
    }

    if (old_email && new_email) {
      const validOldEmail = validateEmail(old_email)
      const validNewEmail = validateEmail(new_email)

      const emailAlreadyExists = await knex("users").where({ email: validNewEmail }).first()

      if (emailAlreadyExists) {
        throw new AppError("Este email já está em uso. Tente outro.")
      }

      if (validOldEmail !== user.email) {
        throw new AppError("O email antigo não confere.")
      }

      user.email = validNewEmail
    }

    if (!old_password || !new_password) {
      throw new AppError("Você precisa informar ambas as senhas para definir uma nova senha.")
    }

    if (old_password && new_password) {
      const checkOldPassword = await compare(old_password, user.password)

      if (!checkOldPassword) {
        throw new AppError("A senha antiga não confere.")
      }

      user.password = await hash(new_password, 8)
    }

    user.name = name ?? user.name
    user.avatar = avatar ?? user.avatar

    await knex("users").where({ id: user.id }).update(user)

    return res.status(200).json({ message: "Usuário atualizado com sucesso." })
  }
}

module.exports = UsersController
