const { DataTypes } = require("sequelize");
const { db } = require('../config/connection');
const { Course } = require("./Course");


const Destreza = db.define('Destreza', {
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
    nameDestreza: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = {
    Destreza
}