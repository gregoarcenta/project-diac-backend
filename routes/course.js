const express = require('express')
const courseController = require('../controllers/courseController')
const destrezaController = require('../controllers/destrezaController')
const objectiveController = require('../controllers/objectiveController')
const criteriaController = require('../controllers/criteriaController')


const router = express.Router()

//Materias
router.route('/')
    .get(courseController.index)
    .post(courseController.create)

router.route('/:id')
    .put(courseController.update)
    .delete(courseController.destroy)

//detrezas
router.route('/:id/destreza')
    .post(destrezaController.create)

router.route('/destreza/:id')
    .put(destrezaController.update)
    .delete(destrezaController.destroy)

//Objetivos
router.route('/:id/objective')
    .post(objectiveController.create)

router.route('/objective/:id')
    .put(objectiveController.update)
    .delete(objectiveController.destroy)

//Criterios
router.route('/:id/criteria')
    .post(criteriaController.create)

router.route('/criteria/:id')
    .put(criteriaController.update)
    .delete(criteriaController.destroy)

module.exports = router