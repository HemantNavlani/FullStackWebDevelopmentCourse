const fs =  require('fs');
fs.writeFile('nodejs_architecture.txt','Understanding the NodeJS Architecture. NodeJS is a single-threaded and asynchronous runtime environment used to run server-side applications with JavaScript as its primary language. NodeJS offers a robust architecture that provides seamless operation to run server-side code.',function(err){
    if (err) console.log("Error in writing file");
    else console.log("Writing on file done");
})
