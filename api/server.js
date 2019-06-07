const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('../helpers/projects.router.js')
const actionsRouter = require('../helpers/action-router.js')
const server = express();

server.use(helmet());
server.use(express.json());

server.use('/projects', projectsRouter)
server.use('/actions', actionsRouter)

server.get('/', (req, res) => {
  res.status(200).json({ hello: 'World!' });
});

module.exports = server;