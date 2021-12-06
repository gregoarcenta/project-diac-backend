const express = require('express')
const studentController = require('../controllers/studentController')



const router = express.Router()

router.route('/')
    .get(studentController.index)
    .post(studentController.create)

module.exports = router