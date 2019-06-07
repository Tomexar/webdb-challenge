const knex = require('knex');
const knexConfig = require('../knexfile');

db = knex(knexConfig.development)

module.exports = {
    find,
    findById,
    insert,
    remove
}

function find(){
    return db ('projects')
}

async function findById(id){
    let project = await db('projects')
        .where({ id })
        .first()
    let actions = await getProjectActions(id)
        return {...project, actions}
}


function getProjectActions(project_id){
    return db('actions')
        .where({ project_id})
}

function insert(project){
    return db('projects')
        .insert(project, "id")
        .then(([id])=> {
            return findById(id)
        })
}

function remove(id) {
    return db('hubs')
      .where({ id })
      .del();
  }
