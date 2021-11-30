const { Destreza } = require('../models/Destreza.js')

const create = async (req, res) => {
    console.log(req.body);
    try {
        const destreza = await Destreza.create({
            nameSkill: req.body.nameSkill
        })
        res.json(destreza)
    } catch (error) {
        throw new Error(error)
    }

}

const index = async (req, res) => {
    const destrezas = await Destreza.findAll()
    res.json({
        destrezas: destrezas
    })
}

module.exports = {
    create,
    index
}