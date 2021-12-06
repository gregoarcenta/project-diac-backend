const { DataTypes, Model } = require("sequelize");
const { db } = require('../db/connection');
const Destreza = require("./Destreza");
const Objective = require("./Objective");

class Course extends Model { }

Course.init({
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
}, {
    sequelize: db,
    modelName: 'Course',
    timestamps: false
});

module.exports = Course
