const express = require('express'); 
const server = express(); 
const cors = require('cors');

const ProjectRouter = require('./projects.js');
const ActionRouter = require('./actions.js'); 


server.use(cors()); 
server.use(express.json()); 

server.use('/api/projects', ProjectRouter);
server.use('/api/actions', ActionRouter); 

server.get('/', (req, res) => {
    res.send(`
    <h1>Testing 123. Testing 123.</h1>`)
}); 




module.exports = server 