const { DataTypes } = require("sequelize");
const { db } = require('../config/connection');
const { Objective } = require("./Objective");
const { Destreza } = require("./Destreza");




const Course = db.define('Course', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nameCourse: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

Course.hasMany(Destreza, {
    foreignKey: 'courseId'
})
Course.hasMany(Objective, {
    foreignKey: 'courseId'
})

module.exports = {
    Course
}