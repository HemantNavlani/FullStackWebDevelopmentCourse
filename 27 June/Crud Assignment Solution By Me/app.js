require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connecToDb = require('./config/db.js')
const app = express()
//Express Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())

//Database
connecToDb()

const userRoutes = require('./routes/userRoutes.js')

app.use('/',userRoutes);

module.exports=app;

