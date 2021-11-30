const express = require('express')
const courseController = require('../controllers/courseController')

const router = express.Router()

router.route('/skill')
    .post(courseController.create)
    .get(courseController.index)

module.exports = router