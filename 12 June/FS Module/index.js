const fs = require('fs')
const { buffer } = require('stream/consumers')

// console.log("Read Start")
// //Asynchronous way to read file
// fs.readFile('input.txt',function(err,data){
//     if (err){
//         console.log('Error:',err);
//         return err;
//     }
//     console.log('Data:',data.toString())
//     console.log("Read End")
//     return data;
// })

// console.log("Other Stuff")


// // Synchronous way to read file 

// var data = fs.readFileSync('input.txt');

// console.log('Data',data.toString());
// console.log("Read End")
// console.log("Other Stuff")


//Read --> Open + Read

// const buf = new Buffer(1024)

// fs.open('input.txt','r+',function(err,fd){
//     if (err){
//         console.log('Error in opening file:',err)
//     }
//     console.log("File opened successfully")

//     fs.read(fd,buf,0,buf.length,0,function(er,bytes){
//         if (er){
//             console.log("Error in reading file")
//         }
//         console.log('Data:',bytes);
//         console.log('Data:',bytes.toString());
//         console.log('Data:',buf.slice(0,bytes).toString());
//         fs.close(fd,function(err){
//             if (err){
//                 console.log("Error in closing file")
//             }else{
//                console.log("Success in closing file") 
//             }
//         })
//     });
// })



//Writing to file
// fs.writeFile('input.txt','PW Skills',function(err){
//     if (err){
//         console.log('Error in writing file')
//     }
//     else{
//         console.log("Success in writing file")
//     }
// })


//Append to File 
// fs.appendFile('input.txt','--Hemant Navlani','utf8',function(err){
//     if (err){
//         console.log("Error in appending file")
//     }
//     else{
//         console.log("Success in appending file")
//     }
// })


//Deleting a file 

fs.unlink('input.txt',function(err){
    if (err){
        console.log('Error in deleting a file')
    }else{
        console.log("Success in deleting a file")
    }
})