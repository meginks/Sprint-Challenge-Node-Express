const express = require('express');
const router = express.Router();
const ActionDB = require('./data/helpers/actionModel.js'); 


// GET REQUESTS 
// get all 
router.get('/', async (req, res) => {
    try {
        const action = await ActionDB.get(); 
        res.status(200)
        .json(action)
    } catch (error) {
        res.status(500)
        .json({
            message: `Can't get actions. Error: ${error}`
        })
    }
})

// get by action id 

router.get('/:id', async (req, res) => {
    try {
        const action = await ActionDB.get(req.params.id);
        if (action) {
            res.status(200)
            .json(action)
        } else {
            res.status(404)
            .json({
                message: 'Could not find action.'
            })
        }
    } catch (error) {
        res.status(500)
        .json({
            message: `Error getting action. Error: ${error}`
        })
    }
}) 

// POST REQUEST 
// note: you must have a key on the passed in object called "project_id" with the value being an existing project or it won't work 

router.post('/', async (req, res) => {
    try {
        const postAction = await ActionDB.insert(req.body); 
        res.status(201)
        .json(postAction)
    } catch (error) {
        res.status(500)
        .json({
            message: `Cannot create action. Error: ${error}`
        })
    }
})

// PUT REQUEST 

router.put('/:id', async (req, res) => {
    try {
        const putAction = await ActionDB.update(req.params.id, req.body); 
        if (putAction) {
            res.status(200)
            .json(putAction)
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


// DELETE REQUEST

router.delete('/:id', async (req, res) => {
    try {
        const deleteAction = await ActionDB.remove(req.params.id); 
        if (deleteAction) {
            res.status(200)
            .json(deleteAction)
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




module.exports = router;