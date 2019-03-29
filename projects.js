const express = require('express');
const router = express.Router();
const ProjectDB = require('./data/helpers/projectModel.js'); 


router.get('/:id', async (req, res) => {
    try {
        const projects = await ProjectDB.get(req.params.id); 
       if (projects) { res.status(200)
        .json(projects) } 
        else {
            res.status(404).json({
                message: "Projects not found"
            })
        }
    } catch (error) {
        res.status(500)
        .json({
            message: `Could not get projects. Error: ${error}`
        })
    }
})





module.exports = router