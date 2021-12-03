const { DataTypes } = require("sequelize");
const { db } = require('../config/connection');
const { Course } = require("./Course");


const Objective = db.define('Objective', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nameObjective: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = {
    Objective
}