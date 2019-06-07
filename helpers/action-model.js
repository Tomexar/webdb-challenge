const knex = require('knex');
const knexConfig = require('../knexfile');

db = knex(knexConfig.development)

module.exports = {
    find,
    findById,
    insert,
    remove,
    update, 
    getActionById 
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

function getActionContext(id){
    return db('context')
        .where('actions_context.action_id', id)
        .join('actions_context', 'actions_context.context_id','context.id')
}

async function getActionById(id){
    let action = await db('actions')
        .where({ id })
        .first()
     let context = await getActionContext(id)
        return {...action, context}
}