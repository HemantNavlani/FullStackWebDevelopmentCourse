const express = require('express')


const dbConnect = require('./config/database.js')
const app  = express();
dbConnect();
const router = require('./routes/route.js')
const cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use(express.json())



const bodyParser = require('body-parser')
app.use(bodyParser.json());


app.use('/insta',router);

// const path = require('path')
// app.use(express.static(path.join(__dirname, "../frontend")));


app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Hello, It's Working"
    })
})
module.exports=app;

// token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDY1ODY4MGRiYzUyY2RkOTRiZTFhNSIsImVtYWlsIjoicmVzaG1hQG1haWwuY29tIiwiaWF0IjoxNjkxNzY4OTcxLCJleHAiOjE2OTE4NTUzNzF9.1ZSMA5krvuJheUSmASHQ3VdfPXBTyzOPbiSMkNgOkUE