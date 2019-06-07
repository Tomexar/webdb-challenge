const router = require('express').Router();
const Projects = require('./projects-model');

router.get('/', (req, res) => {
  Projects.find()
    .then(projects => {
      res.status(200).json(projects);
    }).catch(err => {
      res.status(500).json({ message: 'error getting projects' })
    })
})

router.get('/:id', (req, res) => {
  Projects.findById(req.params.id)
    .then(project => {
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({ message: 'Project not found' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/', (req, res) => {
  Projects.insert(req.body)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      res.status(500).json({ message: 'We ran into an error adding the project' });
    });
});

router.delete('/:id', (req, res) => {
  Projects.remove(req.params.id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      res.status(500).json({ message: 'We ran into an error deleting the project' });
    });
});


module.exports = router;