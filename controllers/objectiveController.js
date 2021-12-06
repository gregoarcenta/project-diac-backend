const Objective = require('../models/Objective.js')

//Crea un objetivo de una materia
const create = async (req, res) => {
    const nameObjective = req.body.nameObjective
    const CourseId = req.params.id

    try {
        const objective = await Objective.create({
            nameObjective,
            CourseId
        })
        res.json(objective)
    } catch (error) {
        throw new Error(error)
    }
}

//Actualiza un objetivo de la materia que se envia como parametro
const update = async (req, res) => {
    const nameObjective = req.body.nameObjective
    const id = req.params.id

    try {
        const objective = await Objective.findOne({ where: { id } })
        const newObjective = await objective.update({
            nameObjective,
        })

        res.json(newObjective)

    } catch (error) {
        throw new Error(error)
    }

}

//Elimina un objetivo
const destroy = async (req, res) => {
    const id = req.params.id

    try {
        const objective = await Objective.findOne({ where: { id } })
        const objectiveDelete = await objective.destroy()

        res.json(objectiveDelete)

    } catch (error) {
        throw new Error(error)
    }

}

module.exports = {
    create,
    update,
    destroy
}