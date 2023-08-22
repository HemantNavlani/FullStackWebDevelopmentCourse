function greet(name){
  return new Promise((resolve, reject) => {
    if (typeof name !=='string'){
        reject(new Error('Input is not a string'));
    }
    else{
        resolve(`Hello ${name}`);
    }
  })
}

greet('Hemant')
.then((message) => {
 console.log(message);
})
.catch(error=>{
    console.log(error.message);
})