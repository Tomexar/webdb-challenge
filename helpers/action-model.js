const knex = require('knex');
const knexConfig = require('../knexfile');

db = knex(knexConfig.development)

module.exports = {
    find,
    findById,
    insert
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

