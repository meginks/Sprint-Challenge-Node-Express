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


// get by id

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

// POST REQUESTS 

router.post('/', async (req, res) => {
    try {
        const postProject = await ProjectDB.insert(req.body); 
        res.status(201)
        .json(postProject)
    } catch (error) {
        res.status(500)
        .json({
            message: `Cannot create action. Error: ${error}`
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
                message: `Cannot find action to update.`
            })
        }
    } catch (error) {
        res.status(500)
        .json({
            message: `Cannot update action. Error: ${error}`
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
                message: `Cannot find action to delete`
            })
        }
    } catch (error) {
        res.status(500)
        .json({
            message: `Cannot delete action. Error: ${error}`
        })
    }
})






module.exports = router