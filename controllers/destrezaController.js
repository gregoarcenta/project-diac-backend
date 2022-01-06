const Destreza = require('../models/Destreza.js')
const { QueryTypes } = require('sequelize');
const { db } = require('../db/connection');


//Crea una destraza de una materia
const create = async (req, res, next) => {
    const CourseId = req.params.id
    let templateQuery = "INSERT INTO `destrezas`(`nameDestreza`, `CourseId`) VALUES "
    try {
        req.body.destrezas.forEach(async (destreza, index) => {
            if (index === req.body.destrezas.length - 1) {
                templateQuery += `('${destreza.nameDestreza}', ${CourseId})`
                return
            }
            templateQuery += `('${destreza.nameDestreza}', ${CourseId}),`

        });
        const destrezas = await db.query(templateQuery, { type: QueryTypes.INSERT });
        res.json({
            'status': res.statusCode,
            'response': 'Ok',
            destrezas
        })
    } catch (error) {
        next(error)
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