const router = require('express').Router();
const Actions = require('./action-model');

router.get('/', (req, res) => {
    Actions.find()
        .then(actions => {
            res.status(200).json(actions);
        }).catch(err => {
            res.status(500).json({ message: 'error getting actions' })
        })
})


router.get('/:id', (req, res) => {
    Actions.findById(req.params.id)
        .then(action => {
            if (action) {
                res.status(200).json(action);
            } else {
                res.status(404).json({ message: 'action not found' });
            }

        }).catch(err => {
            res.status(500).json({ message: 'error getting actions' })
        })
})

router.post('/', (req, res) => {
    Actions.insert(req.body)
        .then(action => {
            res.status(200).json(action);
        })
        .catch(error => {
            res.status(500).json({ message: 'We ran into an error adding the action' });
        });
});

router.delete('/:id', (req, res) => {
    Actions.remove(req.params.id)
        .then(action => {
            res.status(200).json(action);
        })
        .catch(error => {
            res.status(500).json({ message: 'We ran into an error deleting the action' });
        });
});

router.put('/:id', (req, res) => {
    Actions.update(req.params.id, req.body)
      .then(action => {
        res.status(200).json(action);
      })
      .catch(error => {
        res.status(500).json({ message: 'We ran into an error updating the action' });
      });
  });
  
  router.get('/context/:id', (req, res)=>{
    Actions.getActionById(req.params.id)
      .then(action =>{
        if (action){
          res.status(200).json(action);
        }else {
          res.status(404).json({ message: 'action not found'})
        }
      })
      .catch(err =>{
        res.status(500).json(err)
      })
  })
  

module.exports = router;
