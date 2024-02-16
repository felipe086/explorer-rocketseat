const AppError = require("../utils/AppError.js")
const knex = require("../database/knex/index.js")

class MovieNotesController {
  async create(req, res) {
    const { userId } = req.params
    const { title, description, rating, tags } = req.body

    if (!title | !rating | !tags) {
      throw new AppError("Por favor, insira todas as informações.")
    }

    if (rating < 1 || rating > 5) {
      throw new AppError("Os valor de rating deve ser entre 1 e 5")
    }

    if (tags && !tags[0]) {
      throw new AppError("Deve conter pelo menos uma tag.")
    }

    const user = await knex("users").where({ id: userId }).first()

    if (!user) {
      throw new AppError("Usuário não encontrado")
    }

    const [noteId] = await knex("movie_notes").insert({
      title,
      description,
      rating,
      user_id: userId,
    })

    const tagsInsert = tags.map((tag) => {
      return { name: tag }
    })

    await knex("movie_tags").insert({
      name: JSON.stringify(tagsInsert),
      user_id: userId,
      note_id: noteId,
    })

    return res.status(201).json({ message: "Nota criada com sucesso." })
  }

  async delete(req, res) {
    const { noteId } = req.params

    const noteExists = await knex("movie_notes").where({ id: noteId }).first()

    if (!noteExists) {
      throw new AppError("Nota não encontrada.")
    }

    await knex("movie_notes").where({ id: noteId }).del()

    return res.status(200).json({ message: "Nota deletada com sucesso." })
  }

  async update(req, res) {
    const { noteId } = req.params
    const { title, description, rating, tags } = req.body

    const note = await knex("movie_notes").where({ id: noteId }).first()

    if (!note) {
      throw new AppError("Nota não encontrada.")
    }

    if (rating < 1 || rating > 5) {
      throw new AppError("O rating deve ser entre 1 e 5.")
    }

    if (tags && !tags[0]) {
      throw new AppError("Deve conter pelo menos uma tag.")
    }

    note.title = title ?? note.title
    note.description = description ?? note.description
    note.rating = rating ?? note.rating
    note.tags = tags ?? note.tags

    await knex("movie_notes").where({ id: noteId }).update({
      title: note.title,
      description: note.description,
      rating: note.rating,
    })

    if (tags && tags[0]) {
      const tagsInsert = tags.map((tag) => {
        return { name: tag }
      })

      await knex("movie_tags")
        .where({ note_id: noteId })
        .update({ name: JSON.stringify(tagsInsert) })
    }

    return res.status(200).json({ message: "Nota atualizada com sucesso." })
  }

  async findByUser(req, res) {
    const { userId } = req.params

    const userExists = await knex("users").where({ id: userId }).first()

    if (!userExists) {
      throw new AppError("Usuário não encontrado")
    }

    const notes = await knex("movie_notes")
      .where("movie_notes.user_id", userId)
      .innerJoin("movie_tags", "movie_notes.id", "movie_tags.note_id")

    if (!notes[0]) {
      throw new AppError("Nenhuma nota encontrada para este usuário.")
    }

    const formattedNotes = notes.map((item) => {
      const { id, title, description, rating, user_id, created_at, name, note_id } = item

      const formattedTags = JSON.parse(name).reduce((acc, item) => {
        return [...acc, item.name]
      }, [])

      return {
        user_id,
        note_id,
        title,
        description: description,
        rating,
        created_at,
        tag: {
          tag_id: id,
          tags: formattedTags,
        },
      }
    })

    return res.status(200).json({ total_notes: notes.length, notes: formattedNotes })
  }

  async find(req, res) {
    const { title, description, tag } = req.query

    if (!title && !description && !tag) {
      throw new AppError(
        "Você deve prover um 'title' ou 'description' ou 'tag' para fazer a pesquisa."
      )
    }

    const notes = await knex("movie_notes")
      .innerJoin("movie_tags", "movie_notes.id", "movie_tags.note_id")
      .whereLike("title", `%${title}%`)
      .orWhereLike("description", `%${description}%`)
      .orWhereLike("name", `%${tag}%`)

    if (!notes[0]) {
      throw new AppError("Nenhuma nota encontrada")
    }

    const formattedNotes = notes.map((item) => {
      const { id, title, description, rating, user_id, created_at, name, note_id } = item

      const formattedTags = JSON.parse(name).reduce((acc, item) => {
        return [...acc, item.name]
      }, [])

      return {
        user_id,
        note_id,
        title,
        description: description,
        rating,
        created_at,
        tag: {
          tag_id: id,
          tags: formattedTags,
        },
      }
    })

    return res.status(200).json(formattedNotes)
  }
}

module.exports = MovieNotesController
