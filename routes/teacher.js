const express = require('express')
const teacherController = require('../controllers/teacherController')

const router = express.Router()

router.route('/')
    .get(teacherController.index)
    .post(teacherController.create)

router.route('/filter/courses')
    .get(teacherController.filterByCourse)

router.route('/:id')
    .put(teacherController.update)
    .delete(teacherController.destroy)

module.exports = router