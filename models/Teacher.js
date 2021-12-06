const { DataTypes, Model } = require("sequelize");
const { db } = require('../db/connection');

class Teacher extends Model { }

Teacher.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nameTeacher: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastNameTeacher: {
        type: DataTypes.STRING,
        allowNull: false
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    function: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: db,
    modelName: 'Teacher',
    timestamps: false
})

module.exports = Teacher