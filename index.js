//Imports
const path = require('path')
const express = require('express')
const cors = require('cors')
require('dotenv').config()


//Import connections Database
const { connect, syncTables } = require('./db/connection')
require('./db/associations')

//Import Routes
const course = require('./routes/course')
const student = require('./routes/student')


const app = express()
const port = process.env.PORT || 3000

//connection MySQL
connect()
syncTables()

//middlewares
app.use(cors())

app.use(express.json({}))
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

//Routes
app.use('/course', course)
app.use('/student', student)

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}!`)
})