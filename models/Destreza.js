const { DataTypes } = require("sequelize");
const { db } = require('../config/connection');


const Destreza = db.define('Destreza', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nameSkill: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = {
    Destreza
}