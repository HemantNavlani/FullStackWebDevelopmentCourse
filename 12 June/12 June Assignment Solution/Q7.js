const http = require('http');
const server = http.createServer((req,res)=>{
    if (req.url =='/'){
        res.write('<h1>I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>');
    }
    res.end();
})

server.listen(5001);
console.log("The http server is runnig on port 5001");