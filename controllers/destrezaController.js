const Destreza = require('../models/Destreza.js')

//Crea una destraza de una materia
const create = async (req, res) => {
    const nameDestreza = req.body.nameDestreza
    const CourseId = req.params.id

    try {
        const destreza = await Destreza.create({
            nameDestreza,
            CourseId
        })
        res.json(destreza)
    } catch (error) {
        throw new Error(error)
    }
}

//Actualiza una destreza de la materia que se envia como parametro
const update = async (req, res) => {
    const nameDestreza = req.body.nameDestreza
    const id = req.params.id

    try {
        const destreza = await Destreza.findOne({ where: { id } })
        const newDestreza = await destreza.update({
            nameDestreza,
        })

        res.json(newDestreza)

    } catch (error) {
        throw new Error(error)
    }

}

//Elimina una destreza
const destroy = async (req, res) => {
    const id = req.params.id

    try {
        const destreza = await Destreza.findOne({ where: { id } })
        const destrezaDelete = await destreza.destroy()

        res.json(destrezaDelete)

    } catch (error) {
        throw new Error(error)
    }

}

module.exports = {
    create,
    update,
    destroy
}