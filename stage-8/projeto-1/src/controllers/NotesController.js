const knex = require("../database/knex")

class NotesController {
  async create(req, res) {
    const { title, description, tags, links } = req.body
    const { user_id } = req.params

    const [note_id] = await knex("notes").insert({ title, description, user_id })

    const linksInsert = links.map((link) => {
      return {
        note_id,
        url: link,
      }
    })

    await knex("links").insert(linksInsert)

    const tagsInsert = tags.map((name) => {
      return {
        note_id,
        user_id,
        name,
      }
    })

    await knex("tags").insert(tagsInsert)

    return res.status(201).json({ message: "Nota criada com sucesso." })
  }

  async show(req, res) {
    const { note_id } = req.params

    const note = await knex("notes").where({ id: note_id }).first()
    const tags = await knex("tags").where({ note_id }).orderBy("name")
    const links = await knex("links").where({ note_id }).orderBy("created_at")

    return res.status(200).json({
      ...note,
      tags,
      links,
    })
  }

  async delete(req, res) {
    const { note_id } = req.params

    await knex("notes").where({ id: note_id }).delete()

    return res.json({ message: "Nota deletada com sucesso" })
  }

  async index(req, res) {
    const { user_id, title, tags } = req.query

    let notes

    if (tags) {
      const filteredTags = tags.split(",").map((tag) => tag.trim())

      notes = await knex("tags")
        .select(["notes.id", "notes.title", "notes.user_id"])
        .where("notes.user_id", user_id) // Filtrando as tags de são do usuário
        .whereLike("notes.title", `%${title}%`)
        .whereIn("name", filteredTags) // Compara se no campo "name" existe algum dado com o valor de "filteredTags"
        .innerJoin("notes", "notes.id", "tags.note_id") // Conectando as tabelas
        .orderBy("notes.title")
    } else {
      notes = await knex("notes")
        .where({ user_id })
        .whereLike("title", `%${title}%`) // %${title}% pesquisa se existe em qualquer parte do dado.
        .orderBy("title")
    }

    const userTags = await knex("tags").where({ user_id }) // Tags do usuário / Tags com id do usuário
    const notesWithTags = notes.map((note) => {
      // "notes" = Notas buscadas anteriormente
      // Pega as informações da tag de acordo com o usuário
      const noteTag = userTags.filter((tag) => tag.note_id === note.id) // Tags da nota
      return {
        ...note,
        tags: noteTag,
      }
    })

    return res.json(notesWithTags)
  }
}

module.exports = NotesController
