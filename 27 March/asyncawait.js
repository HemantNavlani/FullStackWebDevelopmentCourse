function createPromise(){
    return new Promise(function exec(resolve,reject){
        //your code goes here
        setTimeout(function f(){
            console.log("Timer Done");
            // resolve(10);
            reject(10)
        },3000);
    });
}

// async function consume(){
//     return 10;
// }
// console.log(consume());

// async function consume(){
    
//     console.log("inside function")
//     const response = await createPromise();
//     const response1 = await createPromise();
//     console.log("Response is ",response)
// }
// console.log("start")
// consume();
// console.log("End")

async function consume(){
    try {
        console.log("inside function")
        const response = await createPromise();
        const response1 = await createPromise();
        console.log("Response is ",response)
    } catch (error) {
        console.log("Handled",error);
    }
   
}
console.log("start")
consume();
console.log("End")