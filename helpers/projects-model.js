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

function find() {
    return db('projects')
}

async function findById(id) {
    let project = await db('projects')
        .where({ id })
        .first()
    let actions = await getProjectActions(id)
    if (project){
       return { ...project, actions } 
    }else {
        return null
    }
    
}


function getProjectActions(project_id) {
    return db('actions')
        .where({ project_id })
}

function insert(project) {
    return db('projects')
        .insert(project, "id")
        .then(([id]) => {
            return findById(id)
        })
}

function remove(id) {
    return db('projects')
        .where({ id })
        .del();
}

function update(id, changes) {
    return db('projects')
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
