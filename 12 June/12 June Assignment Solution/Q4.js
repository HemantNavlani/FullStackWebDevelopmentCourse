const fs =  require('fs');
fs.appendFile('nodejs_architecture.txt','Node. js Advantages It provides fast delivery. Node. js is a proven way to make the time-to-market cycle shorter. It offers easy scalability. Node. js is not more scalable than PHP or Ruby, but it is way easier to scale than other backend technologies It targets all major platforms. Among the advantages of using Node',(err)=>{
    if(err) console.log("Error in appending to file");
    else console.log("Appending Done");
})
fs.readFile('nodejs_architecture.txt',(err,data)=>{
    if (err) console.log(err);
    else console.log(data.toString());
})
