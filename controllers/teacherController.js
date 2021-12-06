const Course = require('../models/Course')
const Teacher = require('../models/Teacher')

const index = async (req, res) => {
    try {
        const teachers = await Teacher.findAll({ include: Course })
        res.json({
            teachers
        })
    } catch (error) {
        throw new Error(error)
    }

}

const create = async (req, res) => {
    const CourseId = req.body.courseId
    try {
        const teacher = await Teacher.create({ ...req.body, CourseId })
        res.json(teacher)
    } catch (error) {
        res.json(error)
        throw new Error(error)
    }
}

const update = async (req, res) => {
    const id = req.params.id
    try {
        const teacher = await Teacher.findOne({ where: { id } })
        const newTeacher = await teacher.update({ ...req.body })
        res.json(newTeacher)
    } catch (error) {
        throw new Error(error)
    }

}

const destroy = async (req, res) => {
    const id = req.params.id
    try {
        const teacher = await Teacher.findOne({ where: { id } })
        const teacherDelete = await teacher.destroy()
        res.json(teacherDelete)
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