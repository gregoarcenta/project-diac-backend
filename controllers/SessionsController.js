const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const secrets = require('../config/secrets')
const User = require('../models/User')
const Role = require('../models/Role')

async function authenticate(req, res, next) {
    const email = req.body.email
    const password = req.body.password
    let match
    try {
        const user = await User.findOne({ where: { email }, include: [Role] })
        if (user) match = await bcrypt.compare(password, user.password)
        if (match) {
            req.user = user
            next()
        } else {
            next(new Error('Invalid Credentials'))
        }
    } catch (error) {
        next(new Error(error))
    }
}

function generateToken(req, res, next) {
    if (!req.user) return next()
    req.token = jwt.sign({ id: req.user.id, role: req.user.Role.nameRol }, secrets.jwtSecret)
    next()
}

function sendToken(req, res) {
    if (req.user && req.token) {
        res.json({
            user: req.user,
            jwt: req.token
        })
    } else {
        res.status(422).json({
            error: 'Could not create user'
        })
    }
}

module.exports = {
    authenticate,
    generateToken,
    sendToken
}