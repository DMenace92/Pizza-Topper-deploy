
exports.up = function (knex) {
    return knex.schema.createTable('pizza', (table) => {
        table.increment('id')
        table.string('pepperoni');
        table.string("sasuge")

        table.string('ham')

        table.string("chicken")
        table.string('bacon')
        table.string('olives')
        table.string('pineapple')
        table.string('spinach')
        table.timestamps(true, true)

    })

};

exports.down = function (knex) {
    return knex.schema.dropTable('pizza');
};
