const express = require('express');
const router = express.Router();
const ActionDB = require('./data/helpers/actionModel.js'); 


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



module.exports = router;