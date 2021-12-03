const { Destreza } = require('../models/Destreza.js')

const index = async (req, res) => {
    const destrezas = await Destreza.findAll()
    res.json({
        destrezas
    })
}

const create = async (req, res) => {
    console.log(req.body);
    const nameDestreza = req.body.nameDestreza
    const courseId = req.body.courseId

    try {
        const destreza = await Destreza.create({
            nameDestreza,
            courseId
        })
        res.json(destreza)
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    create,
    index
}