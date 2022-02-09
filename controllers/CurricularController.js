const { Op } = require('sequelize')

const Course = require('../models/Course')
const Curricular = require('../models/Curricular')
const Destreza = require('../models/Destreza')
const Institution = require('../models/Institution')
const Objective = require('../models/Objective')
const Student = require('../models/Student')
const Teacher = require('../models/Teacher')


const index = async (req, res, next) => {
    try {
        const docs = await Curricular.findAll({ include: [Student, Course, Institution, Teacher, Destreza, Objective] })
        res.json({
            docs
        })
    } catch (error) {
        next(error)
    }

}

const create = async (req, res, next) => {
    const StudentId = req.body.studentId
    const InstitutionId = req.body.institutionId
    const coursesArray = [...req.body.courses]
    const teachersArray = [...req.body.teachers]
    try {
        const courses = await Course.findAll({ where: { id: { [Op.in]: coursesArray } } })
        const teachers = await Teacher.findAll({ where: { id: { [Op.in]: teachersArray } } })
        const doc = await Curricular.create({ ...req.body, StudentId, InstitutionId })
        const docWithCourses = await doc.addCourse(courses)
        const docWithTeacher = await doc.addTeacher(teachers)
        res.json({ doc, docWithCourses, docWithTeacher })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    const id = req.params.id
    try {
        const doc = await Curricular.findOne({ where: { id } })
        const newDoc = await doc.update({ ...req.body })
        res.json(newDoc)
    } catch (error) {
        next(error)
    }

}

const destroy = async (req, res, next) => {
    const id = req.params.id
    try {
        const doc = await Curricular.findOne({ where: { id } })
        const docDelete = await doc.destroy()
        res.json(docDelete)
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