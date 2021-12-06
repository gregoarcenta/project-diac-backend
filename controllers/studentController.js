const Student = require('../models/Student')

const index = async (req, res) => {
    try {
        const students = await Student.findAll()
        res.json({
            students
        })
    } catch (error) {
        throw new Error(error)
    }

}

const create = async (req, res) => {
    try {
        const student = await Student.create({ ...req.body })
        res.json(student)
    } catch (error) {
        res.json(error)
        throw new Error(error)
    }
}

const update = async (req, res) => {
    const id = req.params.id
    try {
        const student = await Student.findOne({ where: { id } })
        const newStudent = await student.update({ ...req.body })
        res.json(newStudent)
    } catch (error) {
        throw new Error(error)
    }

}

const destroy = async (req, res) => {
    const id = req.params.id
    try {
        const student = await Student.findOne({ where: { id } })
        const studentDelete = await student.destroy()
        res.json(studentDelete)
    } catch (error) {
        throw new Error(error)
    }

}

module.exports = {
    create,
    index,
    update,
    destroy
}