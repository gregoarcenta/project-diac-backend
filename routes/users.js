const express = require('express')
const UsersController = require('../controllers/UsersController')
const SessionsController = require('../controllers/SessionsController')

const router = express.Router()

router.route('/')
    .post(
        UsersController.create
    )

module.exports = router