const Institution = require('../models/Institution')
const { Op } = require('sequelize');

const index = async (req, res) => {
    try {
        const institutions = await Institution.findAll()
        res.json({
            institutions
        })
    } catch (error) {
        throw new Error(error)
    }

}

const filterByName = async (req, res, next) => {
    const nombre = req.query.nombre || ''
    try {
        const institutions = await Institution.findAll({
            where: {
                nameInstitution: {
                    [Op.substring]: nombre,
                }
            }
        })
        res.json({
            institutions
        })
    } catch (error) {
        next(error)
    }

}


const create = async (req, res) => {
    try {
        const institution = await Institution.create({ ...req.body })
        res.json(institution)
    } catch (error) {
        res.json(error)
        throw new Error(error)
    }
}

const update = async (req, res) => {
    const id = req.params.id
    try {
        const institution = await Institution.findOne({ where: { id } })
        const newInstitution = await institution.update({ ...req.body })
        res.json(newInstitution)
    } catch (error) {
        throw new Error(error)
    }

}

const destroy = async (req, res) => {
    const id = req.params.id
    try {
        const institution = await Institution.findOne({ where: { id } })
        const institutionDelete = await institution.destroy()
        res.json(institutionDelete)
    } catch (error) {
        throw new Error(error)
    }

}

module.exports = {
    create,
    index,
    filterByName,
    update,
    destroy
}