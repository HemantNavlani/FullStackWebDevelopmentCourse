const express = require('express')
const app = express();
const port = 4002
const HOSTNAME = 'localhost'
let counter = 0;

app.listen(port,()=>{
    console.log(`Server Listening at ${HOSTNAME}:${port}`)
})

app.get('/',(req,res)=>{
    res.send(JSON.stringify({counter:counter}))
})
app.get('/increment',(req,res)=>{
    counter=counter+1;
    res.send(JSON.stringify({counter:counter}))
})
app.get('/decrement',(req,res)=>{
    counter=counter-1;
    res.send(JSON.stringify({counter:counter}))
})
    
    