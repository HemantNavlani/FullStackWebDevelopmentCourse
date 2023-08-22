const mongoose = require('mongoose')
const MONGODB_URL = process.env.MONGODB_URL;

const connecttoDb = () => {
    mongoose
    .connect(MONGODB_URL)
    .then((conn)=>{
        console.log(`Connected to Database : ${conn.connection.host}`)
    })
    .catch((err)=>{
        console.log(err.message);
    })
}

module.exports=connecttoDb;