// function createPromise(){
//     return new Promise(function exec(resolve,reject){
//         //your code goes here
//         setTimeout(function f(){
//             console.log("Timer Done");
//             resolve("Done");
//         },3000);
//     });
// }
// console.log("start");
// let x  = createPromise();
// console.log("Got a new promise");
// x.then(function f(){
//     console.log("Promise done");
// });
// console.log("end");

// for(let i=0;i<100000000;i++){
//     //some code
// }




function createPromise(){
    return new Promise(function exec(resolve,reject){
        //your code goes here
        setTimeout(function f(){
            console.log("Timer Done");
            // reject("Done");
            resolve(10);
        },3000);
    });
}
console.log("start");
let x  = createPromise();
console.log("Got a new promise");
x.then(function f(value){
    console.log("Promise done",value);
}).catch(function g(value){
    console.log("Handled",value)
}).finally(function fn(){
    console.log("Finally");
})
console.log("end");

// for(let i=0;i<100000000;i++){
//     //some code
// }