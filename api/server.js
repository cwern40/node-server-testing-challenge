const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config;

const server = express();

const charactersRouter = require('../starwars/characters-route');

server.use(helmet());

server.use(express.json());
server.use(cors());

server.use('/api/starwars', charactersRouter)

server.get('/', (req, res) => {
    res.send("It must be working!")
})

module.exports = server;