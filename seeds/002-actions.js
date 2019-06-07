
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {
          project_id: 1,
          description: 'install dependancies',
          notes: 'NOTES'
        },
        {
          project_id: 1,
          description: 'other stuff',
          notes: 'MORE NOTES'
        },
        {
          project_id: 2,
          description: 'projet 2 desc',
          notes: 'project 2 notes'
        },
        {
          project_id: 3,
          description: 'pro3 desc',
          notes:'pro3 notes'
        }
      ]);
    });
};
