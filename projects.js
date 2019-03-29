const express = require('express');
const router = express.Router();
const ProjectDB = require('./data/helpers/projectModel.js'); 

// GET REQUESTS 

// get all 

router.get('/', async (req, res) => {
    try {
        const projects = await ProjectDB.get(); 
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


// get by project id

router.get('/:id', async (req, res) => {
    try {
        const projects = await ProjectDB.get(req.params.id); 
       if (projects) { res.status(200)
        .json(projects) } 
        else {
            res.status(404).json({
                message: "Project not found"
            })
        }
    } catch (error) {
        res.status(500)
        .json({
            message: `Could not get project. Error: ${error}`
        })
    }
}) 

// get actions for project 

router.get('/:id/actions', async (req, res) => {
    try {
        const actions = await ProjectDB.getProjectActions(req.params.id); 
        if (actions) {
            res.status(200)
            .json(actions)
        } else {
            res.status(404)
            .json({
                message: 'cannot find project to retrieve actions'
            })
        }} catch (error) {
            res.status(500)
            .json({
                message: `error getting projects. Error: ${error}`
            })
        }
    }
)

// POST REQUESTS 

router.post('/', async (req, res) => {
    try {
        const postProject = await ProjectDB.insert(req.body); 
        res.status(201)
        .json(postProject)
    } catch (error) {
        res.status(500)
        .json({
            message: `Cannot create project. Error: ${error}`
        })
    }
})

// PUT REQUESTS 

router.put('/:id', async (req, res) => {
    try {
        const putProject = await ProjectDB.update(req.params.id, req.body); 
        if (putProject) {
            res.status(200)
            .json(putProject)
        } else {
            res.status(404)
            .json({
                message: `Cannot find project to update.`
            })
        }
    } catch (error) {
        res.status(500)
        .json({
            message: `Cannot update project. Error: ${error}`
        })
    }
}) 

// DELETE REQUESTS 

router.delete('/:id', async (req, res) => {
    try {
        const deleteProject = await ProjectDB.remove(req.params.id); 
        if (deleteProject) {
            res.status(200)
            .json(deleteProject)
        } else {
            res.status(404)
            .json({
                message: `Cannot find project to delete`
            })
        }
    } catch (error) {
        res.status(500)
        .json({
            message: `Cannot delete project. Error: ${error}`
        })
    }
})




module.exports = router