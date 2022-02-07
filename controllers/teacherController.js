const Course = require('../models/Course')
const Teacher = require('../models/Teacher')

const index = async (req, res, next) => {
    try {
        const teachers = await Teacher.findAll({ include: Course })
        res.json({
            teachers
        })
    } catch (error) {
        next(error)
    }

}

const create = async (req, res, next) => {
    const CourseId = req.body.courseId
    try {
        const email = await Teacher.findOne({ where: { email: req.body.email } })
        if (!email) {
            const teacher = await Teacher.create({ ...req.body, CourseId })
            res.json(teacher)
        }
        throw new Error("El email ya existe!")
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    const id = req.params.id
    const CourseId = req.body.courseId
    try {
        const teacher = await Teacher.findOne({ where: { id } })
        const newTeacher = await teacher.update({ ...req.body, CourseId })
        res.json(newTeacher)
    } catch (error) {
        next(error)
    }

}

const destroy = async (req, res, next) => {
    const id = req.params.id
    try {
        const teacher = await Teacher.findOne({ where: { id } })
        const teacherDelete = await teacher.destroy()
        res.json(teacherDelete)
    } catch (error) {
        next(error)
    }

}

module.exports = {
    create,
    index,
    update,
    destroy
}