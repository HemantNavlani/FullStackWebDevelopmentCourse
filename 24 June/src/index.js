import app from './app.js'
import mongoose from 'mongoose';
const port = 3000

//database connection - mongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/test');//this is not a proffesional way as database connection may fail and database is always kept far away from us


//this is an IIFE--> Immediately Invoked Function Expressions
(async()=>{
    try{
        //dbconnect
        await mongoose.connect('dbstring');
        console.log("DB connected successfully")
        
        app.on("error",(err)=>{
            console.log("Error: ",err)
            throw err;
        })

        const onListening=()=>{
            console.log(`Listening on port ${port}`)
        }
        app.listen(port,onListening);

    }catch(error){
        console.error("Error:",err)
        throw err;
    }
})()



// app.listen(port,()=>{
//     console.log(`Example app listening on port ${port}`);
// })