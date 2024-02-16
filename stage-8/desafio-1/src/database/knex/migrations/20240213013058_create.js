/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable("movie_tags", (table) => {
    table.increments("id").primary().unique()
    table.json("name").notNullable()
    table.integer("user_id").references("id").inTable("users").onDelete("CASCADE")
    table.integer("note_id").references("id").inTable("movie_notes").onDelete("CASCADE")
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable("movie_tags")
