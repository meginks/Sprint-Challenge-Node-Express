const express = require('express'); 
const server = express();

const ProjectRouter = require('./projects.js');



server.use(express.json()); 

server.use('/api/projects', ProjectRouter);

server.get('/', (req, res) => {
    res.send(`
    <h1>Testing 123. Testing 123.</h1>`)
}); 




module.exports = server 