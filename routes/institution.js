const express = require('express')
const institutionController = require('../controllers/institutionController')

const router = express.Router()

router.route('/')
    .get(institutionController.index)
    .post(institutionController.create)

router.route('/:id')
    .put(institutionController.update)
    .delete(institutionController.destroy)

module.exports = router