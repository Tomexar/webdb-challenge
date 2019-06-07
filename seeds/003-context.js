
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('context').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('context').insert([
        {name: 'At Home '},
        {name: 'At Work'},
        {name: 'Online'}
      ]);
    });
};
