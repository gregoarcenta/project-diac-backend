const { Sequelize } = require('sequelize');
require('dotenv').config()

const dbName = process.env.DB_NAME
const dbHost = process.env.DB_HOST
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

const db = new Sequelize(dbName, dbUser, dbPass, {
    host: dbHost,
    port: 3306,
    dialect: 'mysql',
});

const connect = async () => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
const syncTables = async () => {
    try {
        await db.sync()
        console.log(`Tablas sincronizadas`);
    } catch (error) {
        throw new Error(error)
    }
}
module.exports = {
    db,
    connect,
    syncTables
}
