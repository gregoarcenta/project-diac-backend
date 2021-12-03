const express = require('express')
const courseController = require('../controllers/courseController')
const destrezaController = require('../controllers/destrezaController')
const objectiveController = require('../controllers/objectiveController')

const router = express.Router()

router.route('/')
    .get(courseController.index)
    .post(courseController.create)

router.route('/destreza')
    .get(destrezaController.index)
    .post(destrezaController.create)

router.route('/objective')
    .get(objectiveController.index)
    .post(objectiveController.create)

module.exports = router