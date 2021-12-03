const { Course } = require('../models/Course')
const { Destreza } = require('../models/Destreza')
const { Objective } = require('../models/Objective')

const index = async (req, res) => {
    const courses = await Course.findAll({ include: [Destreza, Objective] })
    res.json({
        courses
    })
}

const create = async (req, res) => {
    console.log(req.body);
    const nameCourse = req.body.nameCourse

    try {
        const course = await Course.create({
            nameCourse
        })
        res.json(course)
    } catch (error) {
        throw new Error(error)
    }

}

module.exports = {
    create,
    index
}