exports.up = function(knex, Promise) {
 return knex.schema
  .createTable('dishes', function(tbl) {
   tbl.increments();
   tbl
    .string('name', 128)
    .notNullable()
    .unique();
  })
  .createTable('recipes', function(tbl) {
   tbl.increments();
   tbl
    .string('name')
    .notNullable()
    .unique();
   tbl.string('description');
   tbl
    .integer('dishes_id')
    .unsigned()
    .references('id')
    .inTable('dishes')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');
  })
  .createTable('ingredients', function(tbl) {
   tbl.increments();
   tbl.string('name', 128).notNullable();
   tbl.float('amount').notNullable();
   tbl
    .integer('recipes_id')
    .unsigned()
    .references('id')
    .inTable('recipes');
  })
  .createTable('instructions', function(tbl) {
   tbl.increments();
   tbl.integer('step_number').notNullable();
   tbl.string('description').notNullable();
   tbl
    .integer('recipe_id')
    .unsigned()
    .references('id')
    .inTable('recipes');
  });
};

exports.down = function(knex, Promise) {
 return knex.chema
  .dropTableIFExists('dishes')
  .dropTableIFExists('recipes')
  .dropTableIFExists('ingredients')
  .dropTableIFExists('instructions');
};
