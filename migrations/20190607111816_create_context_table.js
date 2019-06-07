
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('context', tbl =>{
            tbl.increments();
            tbl.string('name', 128).notNullable();
        })
        .createTable('actions_context', tbl =>{
            tbl.increments();
            tbl
                .integer('action_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('actions')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
            tbl
                .integer('context_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('context')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })
};

exports.down = function(knex, Promise) {
  return knex.schema
    dropTableIfExists('context')
    dropTableIfExists('actions_context')
};
