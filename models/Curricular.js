const { DataTypes, Model } = require("sequelize");
const { db } = require('../db/connection');

class Curricular extends Model { }

Curricular.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    duration: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: db,
    modelName: 'Curricular',
});

module.exports = Curricular
