const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI || null

const dbConnect = ()=>{
    mongoose
    .connect(MONGO_URI)
    .then((conn)=>{
        console.log(`Database Connected:${conn.connection.host}`)
    })
    .catch((e)=>{
        console.log(e.message)
    })
}
module.exports=dbConnect;

