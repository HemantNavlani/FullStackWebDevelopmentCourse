const express = require('express');

const app = express();
const authRouter = require('./router/authRoute.js');
const databaseconnect = require('./config/databaseConfig.js');
const cookieParser = require('cookie-parser')
const cors =require('cors')
databaseconnect();

app.use(express.json())
app.use(cookieParser());
app.use(cors({
    origin:[process.env.CLIENT_URL],
    credentials:true
}))
app.use('/api/auth',authRouter);
app.use('/',(req,res)=>{
    res.status(200).json({data:'JWTauth Server'})
})



module.exports = app;




//token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Y2EzYzQwMzlkMTIzZDExNDFlYTIzMiIsImVtYWlsIjoiY2hpcmFnQHRlc3QuY29tIiwiaWF0IjoxNjkxMTUwMDkxLCJleHAiOjE2OTEyMzY0OTF9.rG0tByTn4fVJgPMNaFWZwMtueGxdycTFNk0c0lwr0XA









