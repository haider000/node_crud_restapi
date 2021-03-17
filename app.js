const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/haider'

const app = express()

mongoose.connect(url)

const con = mongoose.connection


con.on('open', () => {
    console.log("connected...")
});

app.use(express.json())

const studentsRouter = require('./routes/students')
app.use('/students',studentsRouter)


app.listen(9000, () => {
    console.log("server started at 9000")
})