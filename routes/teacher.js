const express = require('express')
const teacherController = require('../controllers/teacherController')
const authenticateAdmin = require('../middleware/authenticateAdmin')
const findUser = require('../middleware/findUser')
const UsersController = require('../controllers/UsersController')



const router = express.Router()

router.route('/')
    .get(teacherController.index)
    .post(findUser, authenticateAdmin, teacherController.create, UsersController.create)

router.route('/filter/courses')
    .post(teacherController.filterByCourse)

router.route('/:id')
    .put(findUser, authenticateAdmin, teacherController.update)
    .delete(findUser, authenticateAdmin, teacherController.destroy)

module.exports = router