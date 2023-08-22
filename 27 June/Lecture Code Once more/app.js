require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectToDb = require('./config/db.js');
const app = express();

//Express Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())


//initialise connection to db
connectToDb();

//Router ko leke aa rahe h 
const userRoutes = require('./routes/userRoutes.js')



app.use('/',userRoutes)

module.exports=app;


















