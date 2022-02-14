const Course = require('../models/Course')
const Criteria = require('../models/Criteria')
const Destreza = require('../models/Destreza')
const Objective = require('../models/Objective')

//Recupera todas las materias con sus destrezas y objetivos
const index = async (req, res) => {
    try {
        const courses = await Course.findAll({ include: [Destreza, Objective, Criteria] })
        res.json({
            courses
        })
    } catch (error) {
        throw new Error(error)
    }

}

//Crea una materia con sus destrezas y objetivos
const create = async (req, res, next) => {
    const nameCourse = req.body.nameCourse

    try {
        const existe = await Course.isExitstCourse(nameCourse.trim())
        if (!existe) {
            const course = await Course.create({
                nameCourse: nameCourse.trim(),
                Destrezas: [...req.body.destrezas],
                Objectives: [...req.body.objectives]
            }, { include: [Destreza, Objective] })

            res.json(course)
        } else {
            throw new Error('this course already exists')
        }


    } catch (error) {
        next(error)
    }

}

//Actualiza el nombre de la materia
const update = async (req, res) => {
    console.log(req.body);
    const nameCourse = req.body.nameCourse
    const id = req.params.id

    try {
        const course = await Course.findOne({ id })
        const newNameCourse = await course.update({
            nameCourse,
        })

        res.json(newNameCourse)

    } catch (error) {
        throw new Error(error)
    }

}

//Elimina una materia con todo y destrezas
const destroy = async (req, res) => {
    console.log(req.body);
    const id = req.params.id

    try {
        const course = await Course.findOne({ id })
        const courseDelete = await course.destroy()

        res.json(courseDelete)

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