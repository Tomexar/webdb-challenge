
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Sprint Challenge', description: 'complete the sprint challenge'},
        {name: 'Project 2', description: 'complete project 2'},
        {name: 'Project 3', description: 'complete project 3'}
      ]);
    });
};
