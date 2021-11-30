const { Sequelize } = require('sequelize');

const db = new Sequelize('diac', 'root', '', {
    host: 'localhost',
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
