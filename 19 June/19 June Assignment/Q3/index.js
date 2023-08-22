const express = require('express')
const app = express();
const hostname = 'localhost'
const port = 4050
app.listen(port,()=>{
    console.log(`Server listening at ${hostname}:${port}`)
})

app.get('/',(req,res)=>{
    res.send(JSON.stringify({message : "I am Homepage"}))
})

app.get('/about',(req,res)=>{
    res.send(JSON.stringify({message : "I am about page"}))
})

app.get('/contact',(req,res)=>{
    res.send(JSON.stringify({email : 'support@pwskills.com'}))
})