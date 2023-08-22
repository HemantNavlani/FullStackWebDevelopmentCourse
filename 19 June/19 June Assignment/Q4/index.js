const express = require ("express")
const app = express();
const port = 5001
const hostname = 'localhost'

app.listen(port,()=>{
    console.log(`Server active at ${hostname}:${port}`);
})

app.get('/',(req,res)=>{
    res.send('Type /random in the url')
})
app.get('/random',(req,res)=>{
    const a = (Math.random()*100).toFixed(0)
    res.send(JSON.stringify({
        random:a
    }
    ))
})


