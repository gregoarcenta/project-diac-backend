const { Op } = require('sequelize');
const Student = require('../models/Student')

const index = async (req, res, next) => {
    try {
        const students = await Student.findAll()
        res.json({
            students
        })
    } catch (error) {
        next(error)
    }

}

const findById = async (req, res, next) => {
    const id = req.params.id
    try {
        const student = await Student.findOne({ where: { id } })
        res.json({
            student
        })
    } catch (error) {
        next(error)
    }

}

const filterByNameAndLastName = async (req, res, next) => {
    const nombre = req.query.nombre || ''
    const apellido = req.query.apellido || ''
    try {
        const student = await Student.findAll({
            where: {
                [Op.and]: [
                    {
                        nameStudent: {
                            [Op.substring]: nombre,
                        }
                    },
                    {
                        lastNameStudent: {
                            [Op.substring]: apellido,
                        }
                    }
                ]
            }
        })
        res.json({
            student
        })
    } catch (error) {
        next(error)
    }

}

const create = async (req, res, next) => {
    try {
        const student = await Student.create({ ...req.body })
        res.json(student)
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    const id = req.params.id
    try {
        const student = await Student.findOne({ where: { id } })
        const newStudent = await student.update({ ...req.body })
        res.json(newStudent)
    } catch (error) {
        next()
    }

}

const destroy = async (req, res, next) => {
    const id = req.params.id
    try {
        const student = await Student.findOne({ where: { id } })
        const studentDelete = await student.destroy()
        res.json(studentDelete)
    } catch (error) {
        next(error)
    }

}

module.exports = {
    create,
    index,
    findById,
    filterByNameAndLastName,
    update,
    destroy
}