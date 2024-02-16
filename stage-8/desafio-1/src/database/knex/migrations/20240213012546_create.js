/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable("movie_notes", (table) => {
    table.increments("id").unique().primary()
    table.text("title").notNullable()
    table.text("description")
    table.integer("rating").checkBetween([1, 5]).notNullable()
    table.integer("user_id").references("id").inTable("users").onDelete("CASCADE")
    table.timestamp("created_at").defaultTo(knex.fn.now())
    table.timestamp("updated_at").defaultTo(knex.fn.now())
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable("movie_notes")
