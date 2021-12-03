const { Objective } = require('../models/Objective')

const index = async (req, res) => {
    const objectives = await Objective.findAll()
    res.json({
        objectives
    })
}

const create = async (req, res) => {
    console.log(req.body);
    const nameObjective = req.body.nameObjective;
    const courseId = req.body.courseId;

    try {
        const objective = await Objective.create({
            nameObjective,
            courseId
        })
        res.json(objective)
    } catch (error) {
        throw new Error(error)
    }

}

module.exports = {
    create,
    index
}