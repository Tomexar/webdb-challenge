const knex = require('knex');
const knexConfig = require('../knexfile');

db = knex(knexConfig.development)

module.exports = {
    find,
    findById,
    insert,
    remove,
    update
}

function find(){
    return db ('actions')
}

function findById(id){
    return db('actions')
        .where({ id })
        .first();
}


function insert(action){
    return db('actions')
    .insert(action, 'id')
    .then(([id])=>{ 
        return findById(id)
    })
}

function remove(id) {
    return db('actions')
      .where({ id })
      .del();
  }


  function update(id, changes) {
    return db('actions')
        .where({ id })
        .update(changes)
        .then(count => {
            if (count > 0) {
                return findById(id);
            } else {
                return null;
            }
        });
}

