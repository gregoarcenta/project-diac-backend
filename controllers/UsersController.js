const User = require('../models/User')
const bcrypt = require('bcrypt')
const Role = require('../models/Role')

async function create(req, res) {
    const email = req.body.email
    const password = req.body.password
    const RoleId = req.body.idRole
    try {
        const hash = await bcrypt.hash(password, 10,)
        const user = await User.create({ email, password: hash, RoleId, })
        res.status(200).json(user)
    } catch (error) {
        res.status(422).json({ error })
    }
}

module.exports = { create }